"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/Button";
import type { SignUpFormData } from "@/types/components";

type FieldErrors = Partial<Record<keyof SignUpFormData, string>>;

export function SignUpForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const [formData, setFormData] = useState<SignUpFormData>({
    childFirstName: "",
    childSecondName: "",
    dateOfBirth: "",
    gender: "",
    contactNumber: "",
    preschoolDaycare: "",
    parentGuardianName: "",
    suburbOfResidence: "",
    email: "",
    preferredTimeDay: "",
    howDidYouHear: "",
    termsAccepted: false,
  });

  const requiredFields: { field: keyof SignUpFormData; label: string }[] = [
    { field: "childFirstName", label: "Child First Name" },
    { field: "childSecondName", label: "Child Second Name" },
    { field: "dateOfBirth", label: "Date of Birth" },
    { field: "gender", label: "Gender" },
    { field: "contactNumber", label: "Contact Number" },
    { field: "preschoolDaycare", label: "Preschool/Daycare" },
    { field: "parentGuardianName", label: "Parent/Guardian Name" },
    { field: "email", label: "Email" },
    { field: "howDidYouHear", label: "How did you hear about us" },
    { field: "termsAccepted", label: "Terms and Conditions" },
  ];

  const validateForm = (): boolean => {
    const errors: FieldErrors = {};

    requiredFields.forEach(({ field, label }) => {
      const value = formData[field];
      if (field === "termsAccepted") {
        if (!value) {
          errors[field] = "Please accept the terms and conditions";
        }
      } else if (!value || (typeof value === "string" && value.trim() === "")) {
        errors[field] = `${label} is required`;
      }
    });

    // Validate email format
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear field error when user starts typing
    if (fieldErrors[name as keyof SignUpFormData]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof SignUpFormData];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

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
    "p-1 h-5",
    "text-[14px] text-center tablet:text-left",
    "text-inherit",
    "focus:outline-none focus:border-primary-pink",
    "transition-colors"
  );

  const inputErrorStyles = "border-red-600";

  const selectStyles = cn(
    inputStyles,
    "h-auto",
    "appearance-none cursor-pointer"
  );

  const fieldStyles = "flex flex-col items-center pb-7 w-full tablet:items-start tablet:p-3";
  const halfFieldStyles = cn(fieldStyles, "tablet:w-[calc(50%-24px)]");
  const labelStyles = "pb-3 font-medium";
  const errorStyles = "text-red-600 text-xs mt-1";

  return (
    <form
      onSubmit={handleSubmit}
      className="text-primary-text p-5 tablet:w-[60%] tablet:mx-auto tablet:flex tablet:flex-wrap"
      noValidate
    >
      {/* Honeypot field for spam protection */}
      <input type="hidden" name="bot-field" />

      {/* Child's First Name */}
      <div className={halfFieldStyles}>
        <label htmlFor="childFirstName" className={labelStyles}>
          Child First Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="childFirstName"
          name="childFirstName"
          value={formData.childFirstName}
          onChange={handleChange}
          className={cn(inputStyles, fieldErrors.childFirstName && inputErrorStyles)}
        />
        {fieldErrors.childFirstName && (
          <p className={errorStyles}>{fieldErrors.childFirstName}</p>
        )}
      </div>

      {/* Child's Second Name */}
      <div className={halfFieldStyles}>
        <label htmlFor="childSecondName" className={labelStyles}>
          Child Second Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="childSecondName"
          name="childSecondName"
          value={formData.childSecondName}
          onChange={handleChange}
          className={cn(inputStyles, fieldErrors.childSecondName && inputErrorStyles)}
        />
        {fieldErrors.childSecondName && (
          <p className={errorStyles}>{fieldErrors.childSecondName}</p>
        )}
      </div>

      {/* Date of Birth */}
      <div className={halfFieldStyles}>
        <label htmlFor="dateOfBirth" className={labelStyles}>
          Date of Birth <span className="text-red-600">*</span>
        </label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className={cn(inputStyles, fieldErrors.dateOfBirth && inputErrorStyles)}
        />
        {fieldErrors.dateOfBirth && (
          <p className={errorStyles}>{fieldErrors.dateOfBirth}</p>
        )}
      </div>

      {/* Gender */}
      <div className={halfFieldStyles}>
        <label htmlFor="gender" className={labelStyles}>
          Gender <span className="text-red-600">*</span>
        </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className={cn(selectStyles, fieldErrors.gender && inputErrorStyles)}
        >
          <option value="" disabled hidden>
            Select..
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {fieldErrors.gender && (
          <p className={errorStyles}>{fieldErrors.gender}</p>
        )}
      </div>

      {/* Contact Number */}
      <div className={halfFieldStyles}>
        <label htmlFor="contactNumber" className={labelStyles}>
          Contact Number <span className="text-red-600">*</span>
        </label>
        <input
          type="tel"
          id="contactNumber"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          className={cn(inputStyles, fieldErrors.contactNumber && inputErrorStyles)}
        />
        {fieldErrors.contactNumber && (
          <p className={errorStyles}>{fieldErrors.contactNumber}</p>
        )}
      </div>

      {/* Preschool/Daycare */}
      <div className={halfFieldStyles}>
        <label htmlFor="preschoolDaycare" className={labelStyles}>
          Preschool/Daycare <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="preschoolDaycare"
          name="preschoolDaycare"
          value={formData.preschoolDaycare}
          onChange={handleChange}
          className={cn(inputStyles, fieldErrors.preschoolDaycare && inputErrorStyles)}
        />
        {fieldErrors.preschoolDaycare && (
          <p className={errorStyles}>{fieldErrors.preschoolDaycare}</p>
        )}
      </div>

      {/* Parent/Guardian Name */}
      <div className={halfFieldStyles}>
        <label htmlFor="parentGuardianName" className={labelStyles}>
          Parent/Guardian Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="parentGuardianName"
          name="parentGuardianName"
          value={formData.parentGuardianName}
          onChange={handleChange}
          className={cn(inputStyles, fieldErrors.parentGuardianName && inputErrorStyles)}
        />
        {fieldErrors.parentGuardianName && (
          <p className={errorStyles}>{fieldErrors.parentGuardianName}</p>
        )}
      </div>

      {/* Suburb */}
      <div className={halfFieldStyles}>
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
          Email <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={cn(inputStyles, fieldErrors.email && inputErrorStyles)}
        />
        {fieldErrors.email && (
          <p className={errorStyles}>{fieldErrors.email}</p>
        )}
      </div>

      {/* Preferred Time/Day */}
      <div className={fieldStyles}>
        <label htmlFor="preferredTimeDay" className={labelStyles}>
          Preferred time and day of classes
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
          How did you hear about us? <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="howDidYouHear"
          name="howDidYouHear"
          value={formData.howDidYouHear}
          onChange={handleChange}
          className={cn(inputStyles, fieldErrors.howDidYouHear && inputErrorStyles)}
        />
        {fieldErrors.howDidYouHear && (
          <p className={errorStyles}>{fieldErrors.howDidYouHear}</p>
        )}
      </div>

      {/* Terms and Conditions */}
      <div className="w-full tablet:p-3">
        <h4 className="font-montaga text-lg mb-3">Terms and Conditions</h4>
        <ol className="list-decimal list-inside space-y-2 mb-4 text-sm">
          <li>
            I understand there will be NO CHARGE for the FREE TRIAL classes.
          </li>
          <li>
            I understand that I will not be able to take any photographs in the
            free trial classes.
          </li>
          <li>
            I understand there will be physical contact between students and
            teachers/teaching assistances during classes.
          </li>
        </ol>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="termsAccepted"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className={cn(
              "mt-1 w-4 h-4 min-w-4 cursor-pointer appearance-none border-2 rounded-sm bg-transparent relative",
              "checked:after:content-['✓'] checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-primary-text checked:after:text-xs checked:after:font-bold",
              fieldErrors.termsAccepted ? "border-red-600" : "border-primary-text"
            )}
          />
          <label htmlFor="termsAccepted" className="text-sm">
            By checking this box I agree to the terms and conditions for the
            trial classes.
            <span className="text-red-600">*</span>
          </label>
        </div>
        {fieldErrors.termsAccepted && (
          <p className={cn(errorStyles, "mt-2")}>{fieldErrors.termsAccepted}</p>
        )}
      </div>

      {error && (
        <p className="text-red-600 text-sm w-full tablet:p-3" role="alert">
          {error}
        </p>
      )}

      <div className="pt-4 w-full flex justify-center tablet:justify-start tablet:p-3">
        <Button
          type="submit"
          text={isSubmitting ? "Submitting..." : "Submit"}
          bgColor="blue"
          disabled={isSubmitting}
        />
      </div>
    </form>
  );
}
