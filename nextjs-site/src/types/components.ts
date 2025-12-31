import type { ReactNode } from "react";

export interface BannerProps {
  imageUrl: string;
  imageAlt: string;
  title?: string;
  gradient?: boolean;
  priority?: boolean;
}

export interface ButtonProps {
  href?: string;
  bgColor?: "sand" | "blue";
  text: string;
  type?: "button" | "submit";
  onClick?: () => void;
  target?: "_blank" | "_self";
  disabled?: boolean;
  className?: string;
}

export interface ClassCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  href: string;
}

export interface ImageContentProps {
  imageUrl: string;
  imageAlt: string;
  imgType?: "circle" | "square" | "rectangle" | "";
  bgColor?: "pink" | "";
  id?: string;
  children: ReactNode;
  reverse?: boolean;
  paddedBottom?: boolean;
}

export interface NotificationBarProps {
  content: string;
  show: boolean;
}

export interface TestimonialCarouselProps {
  testimonials: {
    name: string;
    occupation: string;
    text: string;
  }[];
}

export interface GalleryProps {
  children: ReactNode;
  className?: string;
}

export interface UniformCardProps {
  title: string;
  description: ReactNode;
  imageUrl: string;
  imageAlt: string;
}

export interface HeaderProps {
  navLinks: NavLinkItem[];
  socialLinks?: SocialLink[];
}

export interface NavLinkItem {
  primaryTitle: string;
  primaryPath: string;
  secondaryLinks?: {
    secondaryTitle: string;
    secondaryPath: string;
  }[];
}

export interface SocialLink {
  platform: "facebook" | "instagram";
  url: string;
}

export interface FooterProps {
  navLinks: NavLinkItem[];
  socialLinks?: SocialLink[];
}

// Form types
export interface FormFieldConfig {
  type: "text" | "email" | "tel" | "date" | "select" | "textarea";
  name: string;
  label: string;
  required?: boolean;
  width?: "half" | "full";
  options?: string[];
  placeholder?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export interface SignUpFormData {
  childFirstName: string;
  childSecondName: string;
  dateOfBirth: string;
  gender: "Male" | "Female" | "Other";
  contactNumber: string;
  preschoolDaycare: string;
  parentGuardianName: string;
  suburbOfResidence?: string;
  email: string;
  preferredTimeDay?: string;
  howDidYouHear: string;
  termsAccepted: boolean;
}
