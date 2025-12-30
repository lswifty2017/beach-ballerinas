import type { Metadata } from "next";
import { kebabCase } from "@/lib/utils/kebabCase";
import { Banner } from "@/components/ui/Banner";
import { Button } from "@/components/ui/Button";
import { ImageContent } from "@/components/content/ImageContent";
import { RichTextRenderer } from "@/components/content/RichTextRenderer";
import { getPrograms, getBannerImages } from "@/lib/contentful/queries";
import {
  programs as staticPrograms,
  bannerImages as staticBannerImages,
} from "@/data/content";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore our special dance programs including school partnerships and workshops.",
};

export default async function ProgramsPage() {
  const [programsData, bannerImages] = await Promise.all([
    getPrograms(),
    getBannerImages(),
  ]);

  const bannerImageUrl = bannerImages?.programsBanner || staticBannerImages.timetable;

  // Use Contentful data or fallback to static
  const programs = programsData.length > 0 ? programsData : staticPrograms;

  return (
    <>
      {/* Hero Banner */}
      <Banner
        imageUrl={bannerImageUrl}
        imageAlt="Our Programs"
        title="Programs"
        gradient={true}
        priority={true}
      />

      {/* Introduction */}
      <section className="py-12 text-center">
        <div className="max-w-content mx-auto px-4">
          <p className="text-primary-text leading-relaxed">
            Beach Ballerinas offers special programs for schools, daycares, and
            community groups. Bring the joy of dance to your community!
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="pb-16">
        <div className="max-w-desktop mx-auto px-4">
          <div className="space-y-0">
            {programs.map((program, index) => (
              <div
                key={program.title}
                id={kebabCase(program.title)}
                className={index % 2 === 0 ? "" : "bg-primary-pink"}
              >
                <ImageContent
                  imageUrl={program.imageUrl}
                  imageAlt={program.imageAlt}
                  imgType="rectangle"
                  bgColor={index % 2 === 0 ? "" : "pink"}
                  reverse={index % 2 === 1}
                >
                  <h2 className="font-montaga text-2xl tablet:text-3xl text-primary-text mb-2">
                    {program.title}
                  </h2>
                  <p className="text-sm text-primary-text/70 mb-4">
                    {program.location}
                  </p>
                  {typeof program.description === "string" ? (
                    <div className="text-primary-text leading-relaxed whitespace-pre-line">
                      {program.description}
                    </div>
                  ) : (
                    <RichTextRenderer content={program.description} />
                  )}
                  {program.paymentLink && (
                    <div className="mt-6">
                      <Button
                        href={program.paymentLink}
                        text="Book Now"
                        bgColor="blue"
                        target="_blank"
                      />
                    </div>
                  )}
                </ImageContent>
              </div>
            ))}

            {programs.length === 0 && (
              <div className="text-center py-16 text-primary-text">
                <p>
                  Program information is coming soon. Please contact us if you&apos;re
                  interested in bringing Beach Ballerinas to your school or community.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-blue text-white text-center">
        <div className="max-w-content mx-auto px-4">
          <h2 className="font-montaga text-2xl tablet:text-3xl mb-4">
            Interested in a Program?
          </h2>
          <p className="mb-8 opacity-90">
            Contact us to learn more about bringing Beach Ballerinas to your school
            or community group.
          </p>
          <Button href="/contact" text="Contact Us" bgColor="sand" />
        </div>
      </section>
    </>
  );
}
