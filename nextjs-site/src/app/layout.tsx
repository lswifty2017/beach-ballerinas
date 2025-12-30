import type { Metadata } from "next";
import { Montserrat, Montaga } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { NavLinkItem, SocialLink } from "@/types/components";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const montaga = Montaga({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-montaga",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://beachballerinas.com.au"),
  title: {
    default: "Beach Ballerinas",
    template: "%s | Beach Ballerinas",
  },
  description:
    "Beach Ballerinas ballet school provides a warm, fun and joyful dancing environment to toddlers, children and adults. Ballet and jazz is taught at our beautiful studio in the heart of Bondi Beach, Sydney.",
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Beach Ballerinas",
  },
  twitter: {
    card: "summary",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Navigation links - these would ideally come from Contentful
const navLinks: NavLinkItem[] = [
  { primaryTitle: "Home", primaryPath: "/" },
  {
    primaryTitle: "About",
    primaryPath: "/about",
    secondaryLinks: [
      { secondaryTitle: "Meet the Teachers", secondaryPath: "/about#teachers" },
      { secondaryTitle: "Our Studios", secondaryPath: "/about#studios" },
      { secondaryTitle: "Attitude & Etiquette", secondaryPath: "/about#values" },
    ],
  },
  { primaryTitle: "Classes", primaryPath: "/classes" },
  { primaryTitle: "Timetable", primaryPath: "/timetable" },
  { primaryTitle: "Programs", primaryPath: "/programs" },
  {
    primaryTitle: "Information",
    primaryPath: "/information",
    secondaryLinks: [
      { secondaryTitle: "Uniform", secondaryPath: "/information#uniform" },
      { secondaryTitle: "Terms & Conditions", secondaryPath: "/information#terms-and-conditions" },
    ],
  },
  { primaryTitle: "Contact", primaryPath: "/contact" },
  { primaryTitle: "Sign Up", primaryPath: "/sign-up" },
];

const socialLinks: SocialLink[] = [
  { platform: "facebook", url: "https://www.facebook.com/beachballerinas" },
  { platform: "instagram", url: "https://www.instagram.com/beach_ballerinas" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${montaga.variable}`}>
      <body className="font-montserrat antialiased">
        <Header navLinks={navLinks} socialLinks={socialLinks} />
        <main className="min-h-screen">{children}</main>
        <Footer navLinks={navLinks} socialLinks={socialLinks} />
      </body>
    </html>
  );
}
