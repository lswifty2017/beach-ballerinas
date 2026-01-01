"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/Button";
import type { ContactFormData } from "@/types/components";

export function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
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
    "focus:outline-none focus:border-gray-400",
    "transition-colors"
  );

  return (
    <form onSubmit={handleSubmit} className="p-5 tablet:w-[60%] tablet:mx-auto tablet:flex tablet:flex-wrap">
      {/* Honeypot field for spam protection */}
      <input type="hidden" name="bot-field" />

      <div className="flex flex-col items-center pb-7 w-full tablet:items-start tablet:p-3">
        <label htmlFor="name" className="pb-3 font-medium">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      <div className="flex flex-col items-center pb-7 w-full tablet:items-start tablet:p-3">
        <label htmlFor="email" className="pb-3 font-medium">
          Email <span className="text-red-500">*</span>
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

      <div className="flex flex-col items-center pb-7 w-full tablet:items-start tablet:p-3">
        <label htmlFor="phoneNumber" className="pb-3 font-medium">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          required
          value={formData.phoneNumber}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      <div className="flex flex-col items-center pb-7 w-full tablet:items-start tablet:p-3">
        <label htmlFor="message" className="pb-3 font-medium">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={cn(inputStyles, "resize-none h-auto")}
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm w-full" role="alert">
          {error}
        </p>
      )}

      <div className="pt-4 w-full flex justify-center tablet:p-3">
        <Button
          type="submit"
          text={isSubmitting ? "Submitting..." : "Submit"}
          bgColor="sand"
          disabled={isSubmitting}
        />
      </div>
    </form>
  );
}
