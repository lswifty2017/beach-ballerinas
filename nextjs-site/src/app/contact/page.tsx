import type { Metadata } from "next";
import { Banner } from "@/components/ui/Banner";
import { ContactForm } from "@/components/forms/ContactForm";
import { getStudios, getBannerImages } from "@/lib/contentful/queries";
import {
  studios as staticStudios,
  bannerImages as staticBannerImages,
} from "@/data/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Beach Ballerinas. We'd love to hear from you!",
};

export default async function ContactPage() {
  const [studios, bannerImages] = await Promise.all([
    getStudios(),
    getBannerImages(),
  ]);

  const bannerImageUrl = bannerImages?.contactBanner || "/placeholder.jpg";

  return (
    <>
      {/* Hero Banner */}
      <Banner
        imageUrl={bannerImageUrl}
        imageAlt="Contact Us"
        title="Contact Us"
        gradient={true}
        priority={true}
      />

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-desktop mx-auto px-4">
          <div className="grid grid-cols-1 desktop:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-montaga text-2xl tablet:text-3xl text-primary-text mb-6">
                Send us a message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-montaga text-2xl tablet:text-3xl text-primary-text mb-6">
                Get in touch
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-pink rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-primary-blue"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-medium text-primary-text mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:tamar@beachballerinas.com.au"
                      className="text-primary-blue hover:underline"
                    >
                      tamar@beachballerinas.com.au
                    </a>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-pink rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-primary-blue"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-medium text-primary-text mb-1">
                      Follow Us
                    </h3>
                    <a
                      href="https://www.instagram.com/beach_ballerinas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-blue hover:underline"
                    >
                      @beach_ballerinas
                    </a>
                  </div>
                </div>

                {/* Studios */}
                {studios.length > 0 && (
                  <div className="pt-6 border-t border-light-grey/30">
                    <h3 className="font-montserrat font-medium text-primary-text mb-4">
                      Our Studios
                    </h3>
                    <div className="space-y-4">
                      {studios.map((studio) => (
                        <div key={studio.title}>
                          <p className="font-medium text-primary-text">
                            {studio.title}
                          </p>
                          <p className="text-sm text-primary-text/70">
                            {studio.address}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
