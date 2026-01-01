import type { Metadata } from "next";
import { Banner } from "@/components/ui/Banner";
import { SignUpForm } from "@/components/forms/SignUpForm";
import { getBannerImages } from "@/lib/contentful/queries";
import { bannerImages as staticBannerImages } from "@/data/content";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Complete a sign up form to begin classes with Beach Ballerinas. A member of the Beach Ballerinas team will be in contact shortly after.",
};

export default async function SignUpPage() {
  const bannerImages = await getBannerImages();
  const bannerImageUrl = bannerImages?.signupBanner || staticBannerImages.signup;

  return (
    <>
      {/* Hero Banner */}
      <Banner
        imageUrl={bannerImageUrl}
        imageAlt="Sign Up"
        title="Sign Up"
        gradient={true}
        priority={true}
      />

      {/* Sign Up Form Section */}
      <section id="sign-up" className="py-16 bg-primary-sand">
        <h2 className="font-montaga text-2xl tablet:text-3xl text-center text-primary-text mb-8">
          Sign Up
        </h2>
        <SignUpForm />
      </section>
    </>
  );
}
