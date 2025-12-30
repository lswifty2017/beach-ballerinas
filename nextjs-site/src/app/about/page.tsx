import type { Metadata } from "next";
import { Banner } from "@/components/ui/Banner";
import { ImageContent } from "@/components/content/ImageContent";
import { RichTextRenderer } from "@/components/content/RichTextRenderer";
import { getStaff, getStudios, getValues, getBannerImages } from "@/lib/contentful/queries";
import {
  staff as staticStaff,
  studios as staticStudios,
  values as staticValues,
  bannerImages as staticBannerImages,
} from "@/data/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the passionate team behind Beach Ballerinas. Learn about our teachers, studios, and values.",
};

export default async function AboutPage() {
  const [staffData, studiosData, valuesData, bannerImages] = await Promise.all([
    getStaff(),
    getStudios(),
    getValues(),
    getBannerImages(),
  ]);

  const bannerImageUrl = bannerImages?.aboutBanner || staticBannerImages.about;

  // Use Contentful data or fallback to static
  const staff = staffData.length > 0 ? staffData : staticStaff;
  const studios = studiosData.length > 0 ? studiosData : staticStudios;
  const values = valuesData || staticValues;

  return (
    <>
      {/* Hero Banner */}
      <Banner
        imageUrl={bannerImageUrl}
        imageAlt="About Beach Ballerinas"
        title="About Us"
        gradient={true}
        priority={true}
      />

      {/* Teachers Section */}
      <section id="teachers" className="py-16">
        <div className="max-w-desktop mx-auto px-4">
          <h2 className="font-montaga text-3xl tablet:text-4xl text-primary-text text-center mb-12">
            Meet the Teachers
          </h2>

          <div className="space-y-16">
            {staff.map((member, index) => (
              <ImageContent
                key={member.name}
                imageUrl={member.photoUrl}
                imageAlt={member.photoAlt || member.name}
                imgType="circle"
                reverse={index % 2 === 1}
              >
                <h3 className="font-montaga text-2xl text-primary-text mb-4">
                  {member.name}
                </h3>
                {typeof member.description === "string" ? (
                  <div className="text-primary-text leading-relaxed whitespace-pre-line">
                    {member.description}
                  </div>
                ) : (
                  <RichTextRenderer content={member.description} />
                )}
              </ImageContent>
            ))}
          </div>
        </div>
      </section>

      {/* Studios Section */}
      <section id="studios" className="py-16 bg-primary-pink">
        <div className="max-w-desktop mx-auto px-4">
          <h2 className="font-montaga text-3xl tablet:text-4xl text-primary-text text-center mb-12">
            Our Studios
          </h2>

          <div className="space-y-16">
            {studios.map((studio, index) => (
              <ImageContent
                key={studio.title}
                imageUrl={studio.photoUrl}
                imageAlt={studio.photoAlt || studio.title}
                imgType="rectangle"
                reverse={index % 2 === 1}
              >
                <h3 className="font-montaga text-2xl text-primary-text mb-2">
                  {studio.title}
                </h3>
                <p className="text-sm text-primary-text/70 mb-4">
                  {studio.address}
                </p>
                {typeof studio.description === "string" ? (
                  <div className="text-primary-text leading-relaxed whitespace-pre-line">
                    {studio.description}
                  </div>
                ) : (
                  <RichTextRenderer content={studio.description} />
                )}
              </ImageContent>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-16">
        <div className="max-w-content mx-auto px-4 text-center">
          <h2 className="font-montaga text-3xl tablet:text-4xl text-primary-text mb-6">
            {values.title}
          </h2>

          <p className="text-primary-text leading-relaxed mb-8">
            {values.description}
          </p>

          {values.valuesList && values.valuesList.length > 0 && (
            <ul className="space-y-3 text-left max-w-lg mx-auto">
              {values.valuesList.map((value, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-primary-text"
                >
                  <span className="text-primary-blue mt-1">&#8226;</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
