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
    "w-full",
    "bg-transparent",
    "border-b border-white/30",
    "py-3 px-0",
    "text-white placeholder:text-white/50",
    "focus:outline-none focus:border-primary-pink",
    "transition-colors"
  );

  const selectStyles = cn(
    inputStyles,
    "appearance-none cursor-pointer",
    "[&>option]:bg-primary-blue [&>option]:text-white"
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field for spam protection */}
      <input type="hidden" name="bot-field" />

      {/* Row 1: Child's names */}
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
        <div>
          <label htmlFor="childFirstName" className="sr-only">
            Child&apos;s First Name
          </label>
          <input
            type="text"
            id="childFirstName"
            name="childFirstName"
            placeholder="Child's First Name *"
            required
            value={formData.childFirstName}
            onChange={handleChange}
            className={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="childSecondName" className="sr-only">
            Child&apos;s Second Name
          </label>
          <input
            type="text"
            id="childSecondName"
            name="childSecondName"
            placeholder="Child's Second Name *"
            required
            value={formData.childSecondName}
            onChange={handleChange}
            className={inputStyles}
          />
        </div>
      </div>

      {/* Row 2: DOB and Gender */}
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
        <div>
          <label htmlFor="dateOfBirth" className="sr-only">
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            placeholder="Date of Birth *"
            required
            value={formData.dateOfBirth}
            onChange={handleChange}
            className={cn(inputStyles, "text-white/50 [&::-webkit-calendar-picker-indicator]:invert")}
          />
        </div>
        <div>
          <label htmlFor="gender" className="sr-only">
            Gender
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
      </div>

      {/* Contact Number */}
      <div>
        <label htmlFor="contactNumber" className="sr-only">
          Contact Number
        </label>
        <input
          type="tel"
          id="contactNumber"
          name="contactNumber"
          placeholder="Contact Number *"
          required
          value={formData.contactNumber}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      {/* Preschool/Daycare */}
      <div>
        <label htmlFor="preschoolDaycare" className="sr-only">
          Preschool/Daycare
        </label>
        <input
          type="text"
          id="preschoolDaycare"
          name="preschoolDaycare"
          placeholder="Preschool/Daycare (if applicable) *"
          required
          value={formData.preschoolDaycare}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      {/* Parent/Guardian Name */}
      <div>
        <label htmlFor="parentGuardianName" className="sr-only">
          Parent/Guardian Name
        </label>
        <input
          type="text"
          id="parentGuardianName"
          name="parentGuardianName"
          placeholder="Parent/Guardian Name *"
          required
          value={formData.parentGuardianName}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      {/* Suburb */}
      <div>
        <label htmlFor="suburbOfResidence" className="sr-only">
          Suburb of Residence
        </label>
        <input
          type="text"
          id="suburbOfResidence"
          name="suburbOfResidence"
          placeholder="Suburb of Residence"
          value={formData.suburbOfResidence}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email *"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      {/* Preferred Time/Day */}
      <div>
        <label htmlFor="preferredTimeDay" className="sr-only">
          Preferred Time/Day
        </label>
        <input
          type="text"
          id="preferredTimeDay"
          name="preferredTimeDay"
          placeholder="Preferred Time/Day for Trial"
          value={formData.preferredTimeDay}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      {/* How did you hear about us */}
      <div>
        <label htmlFor="howDidYouHear" className="sr-only">
          How did you hear about us?
        </label>
        <input
          type="text"
          id="howDidYouHear"
          name="howDidYouHear"
          placeholder="How did you hear about Beach Ballerinas? *"
          required
          value={formData.howDidYouHear}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-start gap-3 pt-4">
        <input
          type="checkbox"
          id="termsAccepted"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
          className={cn(
            "mt-1 w-5 h-5",
            "appearance-none rounded border border-white/50",
            "checked:bg-primary-pink checked:border-primary-pink",
            "cursor-pointer",
            "relative",
            "after:content-['✓'] after:absolute after:inset-0",
            "after:flex after:items-center after:justify-center",
            "after:text-primary-blue after:font-bold after:opacity-0",
            "checked:after:opacity-100"
          )}
        />
        <label htmlFor="termsAccepted" className="text-sm text-white/80">
          I have read and agree to the Beach Ballerinas{" "}
          <Link
            href="/information#terms-and-conditions"
            className="underline hover:text-white"
            target="_blank"
          >
            Terms and Conditions
          </Link>{" "}
          *
        </label>
      </div>

      {error && (
        <p className="text-red-300 text-sm" role="alert">
          {error}
        </p>
      )}

      <div className="pt-4">
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
