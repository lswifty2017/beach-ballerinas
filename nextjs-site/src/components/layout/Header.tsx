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

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (isDesktop && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isDesktop, mobileMenuOpen]);

  // Handle body scroll lock
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }

    return () => {
      document.body.classList.remove("noscroll");
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40",
        "bg-primary-pink",
        "h-[120px]"
      )}
    >
      <div
        className={cn(
          "max-w-desktop mx-auto px-4",
          "h-full",
          "flex items-center justify-between"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" onClick={closeMobileMenu}>
          <Image
            src="/images/bb-logo-black.png"
            alt="Beach Ballerinas"
            width={150}
            height={60}
            className="h-[50px] desktop:h-[70px] w-auto"
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

        {/* Mobile Menu Button */}
        {!isDesktop && (
          <button
            onClick={toggleMobileMenu}
            className={cn(
              "p-3",
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
      </div>

      {/* Mobile Navigation */}
      {!isDesktop && mobileMenuOpen && (
        <div
          className={cn(
            "fixed inset-0 top-[120px]",
            "bg-primary-pink",
            "z-50",
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
    </header>
  );
}
