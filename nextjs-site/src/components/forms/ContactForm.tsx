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
    "w-full",
    "bg-transparent",
    "border-b border-primary-text/30",
    "py-3 px-0",
    "text-primary-text placeholder:text-primary-text/50",
    "focus:outline-none focus:border-primary-blue",
    "transition-colors"
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field for spam protection */}
      <input type="hidden" name="bot-field" />

      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name *"
          required
          value={formData.name}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

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

      <div>
        <label htmlFor="phoneNumber" className="sr-only">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Phone Number *"
          required
          value={formData.phoneNumber}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Message *"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={cn(inputStyles, "resize-none")}
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm" role="alert">
          {error}
        </p>
      )}

      <div className="pt-4">
        <Button
          type="submit"
          text={isSubmitting ? "Sending..." : "Send Message"}
          bgColor="blue"
          disabled={isSubmitting}
        />
      </div>
    </form>
  );
}
