import type { Metadata } from "next";
import { kebabCase } from "@/lib/utils/kebabCase";
import { Banner } from "@/components/ui/Banner";
import { Button } from "@/components/ui/Button";
import { ImageContent } from "@/components/content/ImageContent";
import { RichTextRenderer } from "@/components/content/RichTextRenderer";
import { getDanceClasses, getBannerImages } from "@/lib/contentful/queries";
import {
  danceClasses as staticClasses,
  bannerImages as staticBannerImages,
} from "@/data/content";

export const metadata: Metadata = {
  title: "Classes",
  description:
    "Explore our range of dance classes including ballet, jazz, and more. Classes for all ages from toddlers to adults.",
};

export default async function ClassesPage() {
  const [classesData, bannerImages] = await Promise.all([
    getDanceClasses(),
    getBannerImages(),
  ]);

  const bannerImageUrl = bannerImages?.classesBanner || staticBannerImages.classes;

  // Use Contentful data or fallback to static
  const classes = classesData.length > 0 ? classesData : staticClasses;

  return (
    <>
      {/* Hero Banner */}
      <Banner
        imageUrl={bannerImageUrl}
        imageAlt="Our Classes"
        title="Our Classes"
        gradient={true}
        priority={true}
      />

      {/* Introduction */}
      <section className="py-12 text-center">
        <div className="max-w-content mx-auto px-4">
          <p className="text-primary-text leading-relaxed">
            At Beach Ballerinas, we offer a variety of dance classes for all ages
            and skill levels. From our youngest dancers in our toddler programs to
            our adult beginners, there&apos;s a class for everyone.
          </p>
        </div>
      </section>

      {/* Classes List */}
      <section className="pb-16">
        <div className="max-w-desktop mx-auto px-4">
          <div className="space-y-0">
            {classes.map((danceClass, index) => (
              <div
                key={danceClass.title}
                id={kebabCase(danceClass.title)}
                className={index % 2 === 0 ? "" : "bg-primary-pink"}
              >
                <ImageContent
                  imageUrl={danceClass.imageUrl}
                  imageAlt={danceClass.imageAlt || danceClass.title}
                  imgType="circle"
                  bgColor={index % 2 === 0 ? "" : "pink"}
                  reverse={index % 2 === 1}
                >
                  <h2 className="font-montaga text-2xl tablet:text-3xl text-primary-text mb-2">
                    {danceClass.title}
                  </h2>
                  <p className="text-sm text-primary-text/70 mb-4">
                    {danceClass.subtitle}
                  </p>
                  {typeof danceClass.description === "string" ? (
                    <div className="text-primary-text leading-relaxed whitespace-pre-line">
                      {danceClass.description}
                    </div>
                  ) : (
                    <RichTextRenderer content={danceClass.description} />
                  )}
                  <div className="mt-6 flex flex-wrap gap-4">
                    <Button href="/timetable" text="View Timetable" bgColor="blue" />
                    <Button href="/sign-up" text="Book Trial" bgColor="sand" />
                  </div>
                </ImageContent>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
