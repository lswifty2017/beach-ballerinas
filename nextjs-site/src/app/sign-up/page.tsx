import type { Metadata } from "next";
import { Banner } from "@/components/ui/Banner";
import { SignUpForm } from "@/components/forms/SignUpForm";
import { getBannerImages } from "@/lib/contentful/queries";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Book your free trial class at Beach Ballerinas. Start your dance journey today!",
};

export default async function SignUpPage() {
  const bannerImages = await getBannerImages();
  const bannerImageUrl = bannerImages?.signupBanner || "/placeholder.jpg";

  return (
    <>
      {/* Hero Banner */}
      <Banner
        imageUrl={bannerImageUrl}
        imageAlt="Sign Up for a Free Trial"
        title="Book a Free Trial"
        gradient={true}
        priority={true}
      />

      {/* Sign Up Form Section */}
      <section className="py-16 bg-primary-blue">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center text-white mb-8">
            <h2 className="font-montaga text-2xl tablet:text-3xl mb-4">
              Start Your Dance Journey
            </h2>
            <p className="opacity-90">
              Fill out the form below to book your free trial class. We&apos;ll be
              in touch shortly to confirm your booking.
            </p>
          </div>

          <SignUpForm />
        </div>
      </section>
    </>
  );
}
