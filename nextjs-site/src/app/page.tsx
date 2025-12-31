import Image from "next/image";
import { Banner } from "@/components/ui/Banner";
import { Button } from "@/components/ui/Button";
import { Gallery } from "@/components/ui/Gallery";
import { NotificationBar } from "@/components/ui/NotificationBar";
import { ClassCard } from "@/components/cards/ClassCard";
import { ImageContent } from "@/components/content/ImageContent";
import { TestimonialCarousel } from "@/components/carousels/TestimonialCarousel";
import { getHomepage, getDanceClasses, getBannerImages } from "@/lib/contentful/queries";
import { kebabCase } from "@/lib/utils/kebabCase";
import {
  homepage as staticHomepage,
  danceClasses as staticClasses,
  bannerImages as staticBannerImages,
} from "@/data/content";

export default async function HomePage() {
  const [homepage, classes, bannerImages] = await Promise.all([
    getHomepage(),
    getDanceClasses(),
    getBannerImages(),
  ]);

  // Use Contentful data or fallback to static content
  const bannerImageUrl =
    homepage?.bannerImageUrl || bannerImages?.homeBanner || staticBannerImages.home;
  const showNotification = homepage?.showNotificationBar ?? staticHomepage.showNotificationBar;
  // notificationContent from Contentful is Document type, but we need string for static content
  const notificationContent = typeof homepage?.notificationContent === 'string'
    ? homepage.notificationContent
    : staticHomepage.notificationContent;
  const introductionTitle =
    homepage?.introductionTitle || staticHomepage.introductionTitle;
  const introductionDescription =
    homepage?.introductionDescription || staticHomepage.introductionDescription;
  const locationImageUrl =
    homepage?.locationImageUrl || staticHomepage.locationImage;
  const locationImageAlt = homepage?.locationImageAlt || "Bondi Beach";
  const locationTitle = homepage?.locationTitle || staticHomepage.locationTitle;
  const locationDescription =
    homepage?.locationDescription || staticHomepage.locationDescription;
  const bookingTitle = homepage?.bookingTitle || staticHomepage.bookingTitle;
  const testimonials =
    homepage?.testimonials && homepage.testimonials.length > 0
      ? homepage.testimonials
      : staticHomepage.testimonials;

  // Use Contentful classes or fallback to static
  const displayClasses =
    classes.length > 0
      ? classes.slice(0, 6)
      : staticClasses.slice(0, 6).map((c) => ({
          ...c,
          imageAlt: c.imageAlt || c.title,
        }));

  return (
    <>
      {/* Notification Bar */}
      {showNotification && (
        <NotificationBar show={showNotification} content={notificationContent} />
      )}

      {/* Hero Banner */}
      <Banner
        imageUrl={bannerImageUrl}
        imageAlt="Beach Ballerinas"
        gradient={true}
        priority={true}
      />

      {/* Introduction Section */}
      <section className="py-16 text-center">
        <div className="max-w-content mx-auto px-4">
          <h2 className="font-montaga text-3xl tablet:text-4xl text-primary-text mb-6">
            {introductionTitle}
          </h2>
          <p className="text-primary-text leading-relaxed max-w-2xl mx-auto">
            {introductionDescription}
          </p>
        </div>
      </section>

      {/* Location Section */}
      <ImageContent
        imageUrl={locationImageUrl}
        imageAlt={locationImageAlt}
        imgType="rectangle"
        bgColor="pink"
      >
        <h2 className="font-montaga text-2xl tablet:text-3xl text-primary-text mb-4">
          {locationTitle}
        </h2>
        <p className="text-primary-text leading-relaxed mb-6">
          {locationDescription}
        </p>
        <Button href="/about#studios" text="Our Studios" bgColor="blue" />
      </ImageContent>

      {/* Classes Section */}
      <section className="py-16">
        <div className="max-w-desktop mx-auto px-4">
          <h2 className="font-montaga text-3xl tablet:text-4xl text-primary-text text-center mb-12">
            Our Classes
          </h2>
          <Gallery>
            {displayClasses.map((danceClass) => (
              <ClassCard
                key={danceClass.title}
                imageUrl={danceClass.imageUrl}
                imageAlt={danceClass.imageAlt}
                title={danceClass.title}
                subtitle={danceClass.subtitle}
                href={`/classes#${kebabCase(danceClass.title)}`}
              />
            ))}
          </Gallery>
          <div className="text-center mt-12">
            <Button href="/classes" text="View All Classes" bgColor="sand" />
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-primary-blue text-white text-center">
        <div className="max-w-content mx-auto px-4">
          <h2 className="font-montaga text-3xl tablet:text-4xl mb-6">
            {bookingTitle}
          </h2>
          <p className="mb-8 max-w-xl mx-auto opacity-90">
            Come and experience the joy of dance at Beach Ballerinas. Book your
            free trial class today!
          </p>
          <Button href="/sign-up" text="Book Free Trial" bgColor="sand" />
        </div>
      </section>

      {/* Testimonials */}
      {testimonials && testimonials.length > 0 && (
        <TestimonialCarousel testimonials={testimonials} />
      )}

      {/* Brand Logos */}
      <section className="py-12 bg-white">
        <div className="max-w-desktop mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 tablet:gap-16">
            <Image
              src="/images/rad-logo-blue.png"
              alt="Royal Academy of Dance"
              width={120}
              height={60}
              className="h-[40px] tablet:h-[50px] w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/bloch-logo.jpg"
              alt="Bloch"
              width={120}
              height={60}
              className="h-[40px] tablet:h-[50px] w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/oz-tots-logo.png"
              alt="Oz Tots"
              width={120}
              height={60}
              className="h-[40px] tablet:h-[50px] w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/active-kids-voucher.png"
              alt="Active Kids Voucher"
              width={120}
              height={60}
              className="h-[40px] tablet:h-[50px] w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>
    </>
  );
}
