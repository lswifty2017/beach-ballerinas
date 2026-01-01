import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = [
      "childFirstName",
      "childSecondName",
      "dateOfBirth",
      "gender",
      "contactNumber",
      "preschoolDaycare",
      "parentGuardianName",
      "email",
      "howDidYouHear",
      "termsAccepted",
    ];

    for (const field of requiredFields) {
      if (!body[field] && body[field] !== false) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    if (!body.termsAccepted) {
      return NextResponse.json(
        { error: "Terms and conditions must be accepted" },
        { status: 400 }
      );
    }

    // Send notification email to studio
    const { error: notificationError } = await resend.emails.send({
      from: "Beach Ballerinas <noreply@beachballerinas.com.au>",
      // to: ["tamar@beachballerinas.com.au"],
      to: ["l.swift94@gmail.com"],
      subject: `New Trial Sign Up: ${body.childFirstName} ${body.childSecondName}`,
      html: `
        <h2>New Trial Class Sign Up</h2>

        <h3>Child Details</h3>
        <p><strong>Name:</strong> ${body.childFirstName} ${body.childSecondName}</p>
        <p><strong>Date of Birth:</strong> ${body.dateOfBirth}</p>
        <p><strong>Gender:</strong> ${body.gender}</p>
        <p><strong>Preschool/Daycare:</strong> ${body.preschoolDaycare}</p>

        <h3>Parent/Guardian Details</h3>
        <p><strong>Name:</strong> ${body.parentGuardianName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.contactNumber}</p>
        <p><strong>Suburb:</strong> ${body.suburbOfResidence || "Not provided"}</p>

        <h3>Additional Information</h3>
        <p><strong>Preferred Time/Day:</strong> ${body.preferredTimeDay || "Not specified"}</p>
        <p><strong>How did they hear about us:</strong> ${body.howDidYouHear}</p>
        <p><strong>Terms Accepted:</strong> Yes</p>
      `,
      replyTo: body.email,
    });

    if (notificationError) {
      console.error("Resend notification error:", notificationError);
    }

    // Send confirmation email to parent
    const { error: confirmationError } = await resend.emails.send({
      from: "Beach Ballerinas <noreply@beachballerinas.com.au>",
      to: [body.email],
      subject: "Welcome to Beach Ballerinas!",
      html: `
        <h2>Thank you for signing up!</h2>

        <p>Dear ${body.parentGuardianName},</p>

        <p>Thank you for registering ${body.childFirstName} for a free trial class at Beach Ballerinas!</p>

        <p>A member of our team will be in contact shortly to confirm your trial class booking.</p>

        <p>In the meantime, if you have any questions, please don't hesitate to contact us at
        <a href="mailto:tamar@beachballerinas.com.au">tamar@beachballerinas.com.au</a>.</p>

        <p>Best wishes,<br>
        The Beach Ballerinas Team</p>
      `,
    });

    if (confirmationError) {
      console.error("Resend confirmation error:", confirmationError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Sign-up form error:", error);
    return NextResponse.json(
      { error: "Failed to process sign-up" },
      { status: 500 }
    );
  }
}
