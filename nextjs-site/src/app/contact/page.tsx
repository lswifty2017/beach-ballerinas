import type { Metadata } from "next";
import { Banner } from "@/components/ui/Banner";
import { ContactForm } from "@/components/forms/ContactForm";
import { getStudios, getBannerImages } from "@/lib/contentful/queries";
import {
  bannerImages as staticBannerImages,
} from "@/data/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Fill out our contact form for any enquiries for ballet and jazz classes for your children. Beach Ballerinas is located on Campbell Parade, Bondi Beach in NSW.",
};

export default async function ContactPage() {
  const [_studiosData, bannerImages] = await Promise.all([
    getStudios(),
    getBannerImages(),
  ]);

  const bannerImageUrl = bannerImages?.contactBanner || staticBannerImages.contact;

  return (
    <>
      {/* Hero Banner */}
      <Banner
        imageUrl={bannerImageUrl}
        imageAlt="Contact"
        title="Contact"
        gradient={true}
        priority={true}
      />

      {/* Contact Section */}
      <section className="flex flex-col tablet:flex-row">
        {/* Form Section - Blue Background */}
        <div className="bg-primary-blue text-white p-5 tablet:w-[65%] desktop:w-[73%]">
          <h2 className="font-montaga text-2xl tablet:text-3xl mb-6 text-center">
            Get in Touch
          </h2>
          <ContactForm />
        </div>

        {/* Details Section - Sand Background */}
        <div className="bg-primary-sand p-5 desktop:p-7 tablet:w-[35%] desktop:w-[27%]">
          {/* Contact Details */}
          <div className="pb-8">
            <h3 className="font-montaga text-xl text-primary-text mb-6">
              Contact Details
            </h3>
            <p className="text-primary-text pb-2 flex items-start">
              <span className="inline-block mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-text"
                >
                  <path
                    fillRule="evenodd"
                    d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
                  />
                  <path fillRule="evenodd" d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </span>
              +61 405 976 552
            </p>
            <p className="text-primary-text pb-2 flex items-start">
              <span className="inline-block mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-text"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                  />
                </svg>
              </span>
              tamar@beachballerinas.com.au
            </p>
          </div>

          {/* Follow Us */}
          <h3 className="font-montaga text-xl text-primary-text mb-6">Follow Us</h3>
          <div className="flex justify-center desktop:justify-start gap-2">
            <a
              aria-label="link to beach ballerinas instagram page"
              href="https://www.instagram.com/beach_ballerinas"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform duration-1000"
            >
              <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[30px] h-[30px] text-primary-text hover:text-primary-blue"
              >
                <path d="M362,0H150C67.29,0,0,67.29,0,150v212c0,82.71,67.29,150,150,150h212c82.71,0,150-67.29,150-150V150C512,67.29,444.71,0,362,0z M492,362c0,71.682-58.318,130-130,130H150c-71.682,0-130-58.318-130-130V150C20,78.318,78.318,20,150,20h212c71.682,0,130,58.318,130,130V362z" />
                <path d="M362,44H150C91.551,44,44,91.551,44,150v212c0,58.449,47.551,106,106,106h61c5.523,0,10-4.477,10-10s-4.477-10-10-10h-61c-47.42,0-86-38.58-86-86V150c0-47.42,38.58-86,86-86h212c47.42,0,86,38.58,86,86v212c0,47.42-38.58,86-86,86h-60.333c-5.523,0-10,4.477-10,10s4.477,10,10,10H362c58.449,0,106-47.551,106-106V150C468,91.551,420.449,44,362,44z" />
                <path d="M263.07,450.93c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.07-7.07,2.93S246,455.37,246,458s1.07,5.21,2.93,7.07S253.37,468,256,468s5.21-1.07,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07S264.93,452.79,263.07,450.93z" />
                <path d="M175.83,155.71c-3.777-4.03-10.104-4.236-14.135-0.461l-0.443,0.417c-4.017,3.79-4.201,10.119-0.41,14.136c1.967,2.085,4.618,3.137,7.275,3.137c2.462,0,4.929-0.904,6.861-2.727l0.391-0.367C179.399,166.069,179.606,159.74,175.83,155.71z" />
                <path d="M256,118c-21.964,0-43.824,5.291-63.217,15.301c-4.907,2.533-6.832,8.565-4.299,13.473c2.534,4.907,8.566,6.831,13.473,4.299C218.762,142.398,236.945,138,256,138c65.065,0,118,52.935,118,118s-52.935,118-118,118s-118-52.935-118-118c0-20.419,5.295-40.537,15.313-58.178c2.727-4.802,1.045-10.906-3.758-13.634c-4.803-2.726-10.906-1.045-13.634,3.758C124.197,208.592,118,232.125,118,256c0,76.093,61.907,138,138,138s138-61.907,138-138S332.093,118,256,118z" />
                <path d="M256,166c-49.626,0-90,40.374-90,90c0,49.626,40.374,90,90,90c49.626,0,90-40.374,90-90C346,206.374,305.626,166,256,166z M256,326c-38.598,0-70-31.402-70-70c0-38.598,31.402-70,70-70c38.598,0,70,31.402,70,70C326,294.598,294.598,326,256,326z" />
                <path d="M387.25,86.75c-20.953,0-38,17.047-38,38s17.047,38,38,38s38-17.047,38-38S408.203,86.75,387.25,86.75z M387.25,142.75c-9.925,0-18-8.075-18-18s8.075-18,18-18s18,8.075,18,18S397.175,142.75,387.25,142.75z" />
              </svg>
            </a>
            <a
              aria-label="link to beach ballerinas facebook page"
              href="https://www.facebook.com/Beach-Ballerinas-113132270490904/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform duration-1000"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[30px] h-[30px] text-primary-text hover:text-primary-blue"
              >
                <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
