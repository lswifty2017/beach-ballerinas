"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import { HeaderNav } from "./HeaderNav";
import type { HeaderProps } from "@/types/components";

export function Header({ navLinks, socialLinks = [] }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDesktop = useIsDesktop();

  // Handle body scroll lock - only when mobile menu is open AND not on desktop
  useEffect(() => {
    if (mobileMenuOpen && !isDesktop) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }

    return () => {
      document.body.classList.remove("noscroll");
    };
  }, [mobileMenuOpen, isDesktop]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          `sticky top-0 z-100000`,
          "bg-primary-pink",
          "h-[140px] w-full",
          "flex items-center justify-between",
          "pr-3"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex justify-center items-center w-[200px]"
          onClick={closeMobileMenu}
        >
          <Image
            src="/images/bb-logo-black.png"
            alt="Beach Ballerinas"
            width={140}
            height={60}
            className="w-[150px] h-auto block"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        {isDesktop && (
          <HeaderNav
            navLinks={navLinks}
            socialLinks={socialLinks}
            onLinkClick={closeMobileMenu}
          />
        )}

        {/* Mobile Menu Button - matches Gatsby: padding-right 12px */}
        {!isDesktop && (
          <button
            onClick={toggleMobileMenu}
            className={cn(
              "pr-3",
              "text-primary-text hover:text-black",
              "transition-colors"
            )}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              // Close icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[30px] h-[30px]"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[30px] h-[30px]"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        )}
      </header>

      {/* Mobile Navigation - outside header to avoid flex issues */}
      {!isDesktop && mobileMenuOpen && (
        <div
          className={cn(
            "fixed inset-0 top-[120px]",
            "bg-primary-pink",
            "z-[3]",
            "overflow-y-auto"
          )}
        >
          <HeaderNav
            navLinks={navLinks}
            socialLinks={socialLinks}
            onLinkClick={closeMobileMenu}
            isMobile
          />
        </div>
      )}
    </>
  );
}
