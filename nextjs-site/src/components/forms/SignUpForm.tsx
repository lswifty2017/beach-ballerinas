"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/Button";
import type { SignUpFormData } from "@/types/components";

export function SignUpForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<SignUpFormData>({
    childFirstName: "",
    childSecondName: "",
    dateOfBirth: "",
    gender: "Female",
    contactNumber: "",
    preschoolDaycare: "",
    parentGuardianName: "",
    suburbOfResidence: "",
    email: "",
    preferredTimeDay: "",
    howDidYouHear: "",
    termsAccepted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!formData.termsAccepted) {
      setError("Please accept the terms and conditions");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit form");
      }

      router.push("/success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setIsSubmitting(false);
    }
  };

  const inputStyles = cn(
    "w-[60%] tablet:w-full",
    "bg-transparent",
    "border-b border-current",
    "p-1",
    "text-[14px] text-center tablet:text-left",
    "text-inherit placeholder:text-current/50",
    "focus:outline-none focus:border-primary-pink",
    "transition-colors"
  );

  const selectStyles = cn(
    inputStyles,
    "appearance-none cursor-pointer",
    "[&>option]:bg-primary-blue [&>option]:text-white"
  );

  const fieldStyles = "flex flex-col items-center pb-7 w-full tablet:items-start tablet:p-3";
  const halfFieldStyles = cn(fieldStyles, "tablet:w-[calc(50%-24px)]");
  const labelStyles = "pb-3 font-medium";

  return (
    <form onSubmit={handleSubmit} className="p-5 tablet:w-[60%] tablet:mx-auto tablet:flex tablet:flex-wrap">
      {/* Honeypot field for spam protection */}
      <input type="hidden" name="bot-field" />

      {/* Child's First Name */}
      <div className={halfFieldStyles}>
        <label htmlFor="childFirstName" className={labelStyles}>
          Child&apos;s First Name <span className="text-red-300">*</span>
        </label>
        <input
          type="text"
          id="childFirstName"
          name="childFirstName"
          required
          value={formData.childFirstName}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      {/* Child's Second Name */}
      <div className={halfFieldStyles}>
        <label htmlFor="childSecondName" className={labelStyles}>
          Child&apos;s Second Name <span className="text-red-300">*</span>
        </label>
        <input
          type="text"
          id="childSecondName"
          name="childSecondName"
          required
          value={formData.childSecondName}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      {/* Date of Birth */}
      <div className={halfFieldStyles}>
        <label htmlFor="dateOfBirth" className={labelStyles}>
          Date of Birth <span className="text-red-300">*</span>
        </label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          required
          value={formData.dateOfBirth}
          onChange={handleChange}
          className={cn(inputStyles, "[&::-webkit-calendar-picker-indicator]:invert")}
        />
      </div>

      {/* Gender */}
      <div className={halfFieldStyles}>
        <label htmlFor="gender" className={labelStyles}>
          Gender <span className="text-red-300">*</span>
        </label>
        <select
          id="gender"
          name="gender"
          required
          value={formData.gender}
          onChange={handleChange}
          className={selectStyles}
        >
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Contact Number */}
      <div className={fieldStyles}>
        <label htmlFor="contactNumber" className={labelStyles}>
          Contact Number <span className="text-red-300">*</span>
        </label>
        <input
          type="tel"
          id="contactNumber"
          name="contactNumber"
          required
          value={formData.contactNumber}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      {/* Preschool/Daycare */}
      <div className={fieldStyles}>
        <label htmlFor="preschoolDaycare" className={labelStyles}>
          Preschool/Daycare (if applicable) <span className="text-red-300">*</span>
        </label>
        <input
          type="text"
          id="preschoolDaycare"
          name="preschoolDaycare"
          required
          value={formData.preschoolDaycare}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      {/* Parent/Guardian Name */}
      <div className={fieldStyles}>
        <label htmlFor="parentGuardianName" className={labelStyles}>
          Parent/Guardian Name <span className="text-red-300">*</span>
        </label>
        <input
          type="text"
          id="parentGuardianName"
          name="parentGuardianName"
          required
          value={formData.parentGuardianName}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      {/* Suburb */}
      <div className={fieldStyles}>
        <label htmlFor="suburbOfResidence" className={labelStyles}>
          Suburb of Residence
        </label>
        <input
          type="text"
          id="suburbOfResidence"
          name="suburbOfResidence"
          value={formData.suburbOfResidence}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      {/* Email */}
      <div className={fieldStyles}>
        <label htmlFor="email" className={labelStyles}>
          Email <span className="text-red-300">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      {/* Preferred Time/Day */}
      <div className={fieldStyles}>
        <label htmlFor="preferredTimeDay" className={labelStyles}>
          Preferred Time/Day for Trial
        </label>
        <input
          type="text"
          id="preferredTimeDay"
          name="preferredTimeDay"
          value={formData.preferredTimeDay}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      {/* How did you hear about us */}
      <div className={fieldStyles}>
        <label htmlFor="howDidYouHear" className={labelStyles}>
          How did you hear about Beach Ballerinas? <span className="text-red-300">*</span>
        </label>
        <input
          type="text"
          id="howDidYouHear"
          name="howDidYouHear"
          required
          value={formData.howDidYouHear}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-start gap-3 pt-4 w-full tablet:p-3">
        <input
          type="checkbox"
          id="termsAccepted"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
          className={cn(
            "mt-1 w-4 h-4",
            "appearance-none rounded-sm border border-current",
            "checked:bg-primary-pink checked:border-primary-pink",
            "cursor-pointer",
            "relative",
            "after:content-['✓'] after:absolute after:inset-0",
            "after:flex after:items-center after:justify-center",
            "after:text-primary-blue after:font-bold after:opacity-0 after:text-xs",
            "checked:after:opacity-100"
          )}
        />
        <label htmlFor="termsAccepted" className="text-sm">
          I have read and agree to the Beach Ballerinas{" "}
          <Link
            href="/information#terms-and-conditions"
            className="underline hover:text-primary-pink"
            target="_blank"
          >
            Terms and Conditions
          </Link>{" "}
          <span className="text-red-300">*</span>
        </label>
      </div>

      {error && (
        <p className="text-red-300 text-sm w-full tablet:p-3" role="alert">
          {error}
        </p>
      )}

      <div className="pt-4 w-full flex justify-center tablet:justify-start tablet:p-3">
        <Button
          type="submit"
          text={isSubmitting ? "Submitting..." : "Book Free Trial"}
          bgColor="sand"
          disabled={isSubmitting}
        />
      </div>
    </form>
  );
}
