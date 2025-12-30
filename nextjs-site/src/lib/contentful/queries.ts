import { getClient } from "./client";
import { getImageUrl, getImageAlt } from "./helpers";
import type {
  Homepage,
  DanceClass,
  StaffMember,
  Studio,
  Values,
  Uniform,
  TermsAndConditions,
  Program,
  TimetableClass,
  TermDates,
  BannerImages,
  Testimonial,
} from "@/types/contentful";

// ============================================
// Homepage
// ============================================

export async function getHomepage(preview = false): Promise<Homepage | null> {
  const client = getClient(preview);
  if (!client) return null;

  try {
    const entries = await client.getEntries({
      content_type: "homepage",
      limit: 1,
      include: 2,
    });

    if (!entries.items.length) return null;

    const item = entries.items[0];
    const fields = item.fields as Record<string, unknown>;

    const testimonialEntries = (fields.testimonials as Array<{ fields: Record<string, unknown> }>) || [];
    const testimonials: Testimonial[] = testimonialEntries.map((t) => ({
      name: t.fields.name as string,
      occupation: t.fields.occupation as string,
      text: t.fields.text as string,
    }));

    return {
      bannerImageUrl: getImageUrl(fields.bannerImage as Parameters<typeof getImageUrl>[0]),
      bannerImageAlt: getImageAlt(fields.bannerImage as Parameters<typeof getImageAlt>[0]),
      showNotificationBar: (fields.showNotificationBar as boolean) || false,
      notificationContent: fields.notificationContent as Homepage["notificationContent"],
      introductionTitle: fields.introductionTitle as string,
      introductionDescription: fields.introductionDescription as string,
      locationImageUrl: getImageUrl(fields.locationImage as Parameters<typeof getImageUrl>[0]),
      locationImageAlt: getImageAlt(fields.locationImage as Parameters<typeof getImageAlt>[0]),
      locationTitle: fields.locationTitle as string,
      locationDescription: fields.locationDescription as string,
      bookingTitle: fields.bookingTitle as string,
      testimonials,
      instagramName: fields.instagramName as string,
      instagramLinks: fields.instagramLinks as string[] | undefined,
    };
  } catch (error) {
    console.error("Error fetching homepage:", error);
    return null;
  }
}

// ============================================
// Dance Classes
// ============================================

export async function getDanceClasses(preview = false): Promise<DanceClass[]> {
  const client = getClient(preview);
  if (!client) return [];

  try {
    const entries = await client.getEntries({
      content_type: "danceClass",
      order: ["fields.order"] as unknown as string[],
    });

    return entries.items.map((item) => {
      const fields = item.fields as Record<string, unknown>;
      return {
        order: fields.order as number,
        title: fields.title as string,
        subtitle: fields.subtitle as string,
        description: fields.description as DanceClass["description"],
        imageUrl: getImageUrl(fields.image as Parameters<typeof getImageUrl>[0]),
        imageAlt: getImageAlt(fields.image as Parameters<typeof getImageAlt>[0]),
      };
    });
  } catch (error) {
    console.error("Error fetching dance classes:", error);
    return [];
  }
}

// ============================================
// Staff
// ============================================

export async function getStaff(preview = false): Promise<StaffMember[]> {
  const client = getClient(preview);
  if (!client) return [];

  try {
    const entries = await client.getEntries({
      content_type: "staffMember",
    });

    return entries.items.map((item) => {
      const fields = item.fields as Record<string, unknown>;
      return {
        name: fields.name as string,
        description: fields.description as StaffMember["description"],
        photoUrl: getImageUrl(fields.photo as Parameters<typeof getImageUrl>[0]),
        photoAlt: getImageAlt(fields.photo as Parameters<typeof getImageAlt>[0]),
      };
    });
  } catch (error) {
    console.error("Error fetching staff:", error);
    return [];
  }
}

// ============================================
// Studios
// ============================================

export async function getStudios(preview = false): Promise<Studio[]> {
  const client = getClient(preview);
  if (!client) return [];

  try {
    const entries = await client.getEntries({
      content_type: "studio",
    });

    return entries.items.map((item) => {
      const fields = item.fields as Record<string, unknown>;
      return {
        title: fields.title as string,
        address: fields.address as string,
        description: fields.description as Studio["description"],
        photoUrl: getImageUrl(fields.photo as Parameters<typeof getImageUrl>[0]),
        photoAlt: getImageAlt(fields.photo as Parameters<typeof getImageAlt>[0]),
      };
    });
  } catch (error) {
    console.error("Error fetching studios:", error);
    return [];
  }
}

// ============================================
// Values
// ============================================

export async function getValues(preview = false): Promise<Values | null> {
  const client = getClient(preview);
  if (!client) return null;

  try {
    const entries = await client.getEntries({
      content_type: "values",
      limit: 1,
    });

    if (!entries.items.length) return null;

    const fields = entries.items[0].fields as Record<string, unknown>;
    return {
      title: fields.title as string,
      description: fields.description as string,
      valuesList: fields.valuesList as string[],
    };
  } catch (error) {
    console.error("Error fetching values:", error);
    return null;
  }
}

// ============================================
// Uniform
// ============================================

export async function getUniform(preview = false): Promise<Uniform | null> {
  const client = getClient(preview);
  if (!client) return null;

  try {
    const entries = await client.getEntries({
      content_type: "uniform",
      limit: 1,
      include: 2,
    });

    if (!entries.items.length) return null;

    const fields = entries.items[0].fields as Record<string, unknown>;
    const cardEntries = (fields.uniformCards as Array<{ fields: Record<string, unknown> }>) || [];

    return {
      title: fields.title as string,
      description: fields.description as Uniform["description"],
      uniformCards: cardEntries.map((card) => ({
        title: card.fields.title as string,
        description: card.fields.description as Uniform["description"],
        photoUrl: getImageUrl(card.fields.photo as Parameters<typeof getImageUrl>[0]),
        photoAlt: getImageAlt(card.fields.photo as Parameters<typeof getImageAlt>[0]),
      })),
    };
  } catch (error) {
    console.error("Error fetching uniform:", error);
    return null;
  }
}

// ============================================
// Terms & Conditions
// ============================================

export async function getTermsAndConditions(
  preview = false
): Promise<TermsAndConditions | null> {
  const client = getClient(preview);
  if (!client) return null;

  try {
    const entries = await client.getEntries({
      content_type: "termsAndConditions",
      limit: 1,
    });

    if (!entries.items.length) return null;

    const fields = entries.items[0].fields as Record<string, unknown>;
    return {
      title: fields.title as string,
      content: fields.content as TermsAndConditions["content"],
    };
  } catch (error) {
    console.error("Error fetching terms and conditions:", error);
    return null;
  }
}

// ============================================
// Programs
// ============================================

export async function getPrograms(preview = false): Promise<Program[]> {
  const client = getClient(preview);
  if (!client) return [];

  try {
    const entries = await client.getEntries({
      content_type: "program",
      order: ["fields.order"] as unknown as string[],
    });

    return entries.items.map((item) => {
      const fields = item.fields as Record<string, unknown>;
      return {
        order: fields.order as number,
        title: fields.title as string,
        location: fields.location as string,
        description: fields.description as Program["description"],
        imageUrl: getImageUrl(fields.image as Parameters<typeof getImageUrl>[0]),
        imageAlt: getImageAlt(fields.image as Parameters<typeof getImageAlt>[0]),
        paymentLink: fields.paymentLink as string | undefined,
      };
    });
  } catch (error) {
    console.error("Error fetching programs:", error);
    return [];
  }
}

// ============================================
// Timetable Classes
// ============================================

export async function getTimetableClasses(
  preview = false
): Promise<TimetableClass[]> {
  const client = getClient(preview);
  if (!client) return [];

  try {
    const entries = await client.getEntries({
      content_type: "timetableClass",
      include: 2,
    });

    return entries.items.map((item) => {
      const fields = item.fields as Record<string, unknown>;
      const timeEntries = (fields.classTimes as Array<{ fields: Record<string, unknown> }>) || [];

      return {
        title: fields.title as string,
        classTimes: timeEntries.map((time) => ({
          day: time.fields.day as string,
          isTbc: time.fields.isTbc as boolean,
          startTime: time.fields.startTime as string,
          endTime: time.fields.endTime as string,
        })),
      };
    });
  } catch (error) {
    console.error("Error fetching timetable classes:", error);
    return [];
  }
}

// ============================================
// Term Dates
// ============================================

export async function getTermDates(preview = false): Promise<TermDates | null> {
  const client = getClient(preview);
  if (!client) return null;

  try {
    const entries = await client.getEntries({
      content_type: "termDates",
      limit: 1,
      include: 2,
    });

    if (!entries.items.length) return null;

    const fields = entries.items[0].fields as Record<string, unknown>;

    const getTermPeriod = (term: unknown) => {
      if (!term) return undefined;
      const termFields = (term as { fields: Record<string, unknown> }).fields;
      return {
        startDate: termFields.startDate as string,
        endDate: termFields.endDate as string,
      };
    };

    return {
      year: fields.year as number,
      termOne: getTermPeriod(fields.termOne),
      termTwo: getTermPeriod(fields.termTwo),
      termThree: getTermPeriod(fields.termThree),
      termFour: getTermPeriod(fields.termFour),
    };
  } catch (error) {
    console.error("Error fetching term dates:", error);
    return null;
  }
}

// ============================================
// Banner Images
// ============================================

export async function getBannerImages(
  preview = false
): Promise<BannerImages | null> {
  const client = getClient(preview);
  if (!client) return null;

  try {
    const entries = await client.getEntries({
      content_type: "bannerImages",
      limit: 1,
    });

    if (!entries.items.length) return null;

    const fields = entries.items[0].fields as Record<string, unknown>;
    return {
      aboutBanner: fields.aboutBanner
        ? getImageUrl(fields.aboutBanner as Parameters<typeof getImageUrl>[0])
        : undefined,
      classesBanner: fields.classesBanner
        ? getImageUrl(fields.classesBanner as Parameters<typeof getImageUrl>[0])
        : undefined,
      timetableBanner: fields.timetableBanner
        ? getImageUrl(fields.timetableBanner as Parameters<typeof getImageUrl>[0])
        : undefined,
      informationBanner: fields.informationBanner
        ? getImageUrl(fields.informationBanner as Parameters<typeof getImageUrl>[0])
        : undefined,
      contactBanner: fields.contactBanner
        ? getImageUrl(fields.contactBanner as Parameters<typeof getImageUrl>[0])
        : undefined,
      signupBanner: fields.signupBanner
        ? getImageUrl(fields.signupBanner as Parameters<typeof getImageUrl>[0])
        : undefined,
      homeBanner: fields.homeBanner
        ? getImageUrl(fields.homeBanner as Parameters<typeof getImageUrl>[0])
        : undefined,
      programsBanner: fields.programsBanner
        ? getImageUrl(fields.programsBanner as Parameters<typeof getImageUrl>[0])
        : undefined,
    };
  } catch (error) {
    console.error("Error fetching banner images:", error);
    return null;
  }
}
