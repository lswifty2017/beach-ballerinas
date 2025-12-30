import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Success",
  description: "Thank you for your submission!",
};

export default function SuccessPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-16">
      <div className="max-w-content mx-auto px-4 text-center">
        <Image
          src="/images/bb-logo-black.png"
          alt="Beach Ballerinas"
          width={200}
          height={80}
          className="mx-auto mb-8"
        />

        <div className="bg-primary-pink rounded-lg p-8 tablet:p-12">
          <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-white"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h1 className="font-montaga text-3xl tablet:text-4xl text-primary-text mb-4">
            Thank You!
          </h1>

          <p className="text-primary-text mb-8 max-w-md mx-auto">
            Your message has been received. We&apos;ll be in touch with you shortly.
          </p>

          <Button href="/" text="Back to Home" bgColor="blue" />
        </div>
      </div>
    </section>
  );
}
