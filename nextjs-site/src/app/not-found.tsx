import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
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

        <h1 className="font-montaga text-6xl tablet:text-8xl text-primary-blue mb-4">
          404
        </h1>

        <h2 className="font-montaga text-2xl tablet:text-3xl text-primary-text mb-4">
          Page Not Found
        </h2>

        <p className="text-primary-text mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <Button href="/" text="Back to Home" bgColor="blue" />
      </div>
    </section>
  );
}
