import type { Metadata } from "next";
import Image from "next/image";
import { Banner } from "@/components/ui/Banner";
import { RichTextRenderer } from "@/components/content/RichTextRenderer";
import { getUniform, getTermsAndConditions, getBannerImages } from "@/lib/contentful/queries";
import {
  uniformInfo as staticUniformInfo,
  termsAndConditions as staticTermsAndConditions,
  bannerImages as staticBannerImages,
} from "@/data/content";

export const metadata: Metadata = {
  title: "Information",
  description:
    "Find information about uniforms, terms and conditions, and more at Beach Ballerinas.",
};

export default async function InformationPage() {
  const [uniformData, termsAndConditionsData, bannerImages] = await Promise.all([
    getUniform(),
    getTermsAndConditions(),
    getBannerImages(),
  ]);

  const bannerImageUrl = bannerImages?.informationBanner || staticBannerImages.information;

  // Use Contentful data or fallback to static
  const uniform = uniformData || staticUniformInfo;
  const termsAndConditions = termsAndConditionsData || staticTermsAndConditions;

  return (
    <>
      {/* Hero Banner */}
      <Banner
        imageUrl={bannerImageUrl}
        imageAlt="Information"
        title="Information"
        gradient={true}
        priority={true}
      />

      {/* Uniform Section */}
      <section id="uniform" className="py-16">
        <div className="max-w-desktop mx-auto px-4">
          <h2 className="font-montaga text-3xl tablet:text-4xl text-primary-text text-center mb-6">
            {uniform?.title || "Uniform"}
          </h2>

          {uniform?.description && (
            <div className="max-w-content mx-auto mb-12 text-center">
              {typeof uniform.description === "string" ? (
                <p className="text-primary-text leading-relaxed whitespace-pre-line">
                  {uniform.description}
                </p>
              ) : (
                <RichTextRenderer content={uniform.description} />
              )}
            </div>
          )}

          {uniform?.uniformCards && uniform.uniformCards.length > 0 && (
            <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-8">
              {uniform.uniformCards.map((card) => (
                <article
                  key={card.title}
                  className="bg-primary-sand rounded-lg overflow-hidden"
                >
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={card.photoUrl}
                      alt={card.photoAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 767px) 100vw, (max-width: 1172px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-montaga text-xl text-primary-text mb-4">
                      {card.title}
                    </h3>
                    {typeof card.description === "string" ? (
                      <p className="text-sm text-primary-text leading-relaxed whitespace-pre-line">
                        {card.description}
                      </p>
                    ) : (
                      <RichTextRenderer
                        content={card.description}
                        className="text-sm"
                      />
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

          {!uniform && (
            <p className="text-center text-primary-text">
              Uniform information coming soon. Please contact us for details.
            </p>
          )}

          {/* Bloch Partnership */}
          <div className="mt-12 text-center">
            <p className="text-primary-text mb-4">
              Beach Ballerinas is proud to partner with Bloch for all our dance wear needs.
            </p>
            <Image
              src="/images/bloch-logo.jpg"
              alt="Bloch"
              width={150}
              height={60}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section id="terms-and-conditions" className="py-16 bg-primary-pink">
        <div className="max-w-content mx-auto px-4">
          <h2 className="font-montaga text-3xl tablet:text-4xl text-primary-text text-center mb-8">
            {termsAndConditions?.title || "Terms & Conditions"}
          </h2>

          {termsAndConditions?.content ? (
            <div className="bg-white rounded-lg p-8 shadow-sm prose prose-sm max-w-none">
              {typeof termsAndConditions.content === "string" ? (
                <div
                  className="text-primary-text leading-relaxed [&_h2]:font-montaga [&_h2]:text-xl [&_h2]:mt-6 [&_h2]:mb-3 [&_h4]:font-montaga [&_h4]:text-lg [&_h4]:italic [&_ul]:list-disc [&_ul]:ml-5 [&_li]:mb-2"
                  dangerouslySetInnerHTML={{
                    __html: termsAndConditions.content
                      .replace(/#### (.*)/g, '<h4>$1</h4>')
                      .replace(/## (.*)/g, '<h2>$1</h2>')
                      .replace(/• /g, '<li>')
                      .replace(/\n\n/g, '</p><p>')
                      .replace(/\n/g, '<br/>')
                  }}
                />
              ) : (
                <RichTextRenderer content={termsAndConditions.content} />
              )}
            </div>
          ) : (
            <p className="text-center text-primary-text">
              Terms and conditions information coming soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
