import type { Document } from "@contentful/rich-text-types";
import type { Asset, Entry, EntrySkeletonType } from "contentful";

// ============================================
// Contentful Entry Skeletons
// ============================================

export interface TestimonialSkeleton extends EntrySkeletonType {
  contentTypeId: "testimonial";
  fields: {
    name: string;
    occupation: string;
    text: string;
  };
}

export interface HomepageSkeleton extends EntrySkeletonType {
  contentTypeId: "homepage";
  fields: {
    bannerImage: Asset;
    showNotificationBar: boolean;
    notificationContent?: Document;
    introductionTitle: string;
    introductionDescription: string;
    locationImage: Asset;
    locationTitle: string;
    locationDescription: string;
    bookingTitle: string;
    testimonials?: Entry<TestimonialSkeleton>[];
    instagramName: string;
    instagramLinks?: string[];
  };
}

export interface DanceClassSkeleton extends EntrySkeletonType {
  contentTypeId: "danceClass";
  fields: {
    order: number;
    title: string;
    subtitle: string;
    description: Document;
    image: Asset;
  };
}

export interface StaffMemberSkeleton extends EntrySkeletonType {
  contentTypeId: "staffMember";
  fields: {
    name: string;
    description: Document;
    photo: Asset;
  };
}

export interface StudioSkeleton extends EntrySkeletonType {
  contentTypeId: "studio";
  fields: {
    title: string;
    address: string;
    description: Document;
    photo: Asset;
  };
}

export interface ValuesSkeleton extends EntrySkeletonType {
  contentTypeId: "values";
  fields: {
    title: string;
    description: string;
    valuesList: string[];
  };
}

export interface UniformCardSkeleton extends EntrySkeletonType {
  contentTypeId: "uniformCard";
  fields: {
    title: string;
    description: Document;
    photo: Asset;
  };
}

export interface UniformSkeleton extends EntrySkeletonType {
  contentTypeId: "uniform";
  fields: {
    title: string;
    description: Document;
    uniformCards?: Entry<UniformCardSkeleton>[];
  };
}

export interface TermsAndConditionsSkeleton extends EntrySkeletonType {
  contentTypeId: "termsAndConditions";
  fields: {
    title: string;
    content: Document;
  };
}

export interface ProgramSkeleton extends EntrySkeletonType {
  contentTypeId: "program";
  fields: {
    order: number;
    title: string;
    location: string;
    description: Document;
    image: Asset;
    paymentLink?: string;
  };
}

export interface ClassTimeSkeleton extends EntrySkeletonType {
  contentTypeId: "classTime";
  fields: {
    day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
    isTbc: boolean;
    startTime: string;
    endTime: string;
  };
}

export interface TimetableClassSkeleton extends EntrySkeletonType {
  contentTypeId: "timetableClass";
  fields: {
    title: string;
    classTimes?: Entry<ClassTimeSkeleton>[];
  };
}

export interface TermPeriodSkeleton extends EntrySkeletonType {
  contentTypeId: "termPeriod";
  fields: {
    startDate: string;
    endDate: string;
  };
}

export interface TermDatesSkeleton extends EntrySkeletonType {
  contentTypeId: "termDates";
  fields: {
    year: number;
    termOne?: Entry<TermPeriodSkeleton>;
    termTwo?: Entry<TermPeriodSkeleton>;
    termThree?: Entry<TermPeriodSkeleton>;
    termFour?: Entry<TermPeriodSkeleton>;
  };
}

export interface BannerImagesSkeleton extends EntrySkeletonType {
  contentTypeId: "bannerImages";
  fields: {
    aboutBanner?: Asset;
    classesBanner?: Asset;
    timetableBanner?: Asset;
    informationBanner?: Asset;
    contactBanner?: Asset;
    signupBanner?: Asset;
    homeBanner?: Asset;
    programsBanner?: Asset;
  };
}

export interface NavigationSkeleton extends EntrySkeletonType {
  contentTypeId: "navigation";
  fields: {
    navLinks: NavLink[];
  };
}

// ============================================
// Derived Types (for use in components)
// ============================================

export interface Testimonial {
  name: string;
  occupation: string;
  text: string;
}

export interface DanceClass {
  order: number;
  title: string;
  subtitle: string;
  description: Document;
  imageUrl: string;
  imageAlt: string;
}

export interface StaffMember {
  name: string;
  description: Document;
  photoUrl: string;
  photoAlt: string;
}

export interface Studio {
  title: string;
  address: string;
  description: Document;
  photoUrl: string;
  photoAlt: string;
}

export interface Values {
  title: string;
  description: string;
  valuesList: string[];
}

export interface UniformCard {
  title: string;
  description: Document;
  photoUrl: string;
  photoAlt: string;
}

export interface Uniform {
  title: string;
  description: Document;
  uniformCards: UniformCard[];
}

export interface TermsAndConditions {
  title: string;
  content: Document;
}

export interface Program {
  order: number;
  title: string;
  location: string;
  description: Document;
  imageUrl: string;
  imageAlt: string;
  paymentLink?: string;
}

export interface ClassTime {
  day: string;
  isTbc: boolean;
  startTime: string;
  endTime: string;
}

export interface TimetableClass {
  title: string;
  classTimes: ClassTime[];
}

export interface TermPeriod {
  startDate: string;
  endDate: string;
}

export interface TermDates {
  year: number;
  termOne?: TermPeriod;
  termTwo?: TermPeriod;
  termThree?: TermPeriod;
  termFour?: TermPeriod;
}

export interface BannerImages {
  aboutBanner?: string;
  classesBanner?: string;
  timetableBanner?: string;
  informationBanner?: string;
  contactBanner?: string;
  signupBanner?: string;
  homeBanner?: string;
  programsBanner?: string;
}

export interface NavLink {
  primaryTitle: string;
  primaryPath: string;
  secondaryLinks?: SecondaryLink[];
}

export interface SecondaryLink {
  secondaryTitle: string;
  secondaryPath: string;
}

export interface Homepage {
  bannerImageUrl: string;
  bannerImageAlt: string;
  showNotificationBar: boolean;
  notificationContent?: Document;
  introductionTitle: string;
  introductionDescription: string;
  locationImageUrl: string;
  locationImageAlt: string;
  locationTitle: string;
  locationDescription: string;
  bookingTitle: string;
  testimonials: Testimonial[];
  instagramName: string;
  instagramLinks?: string[];
}
