"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import type { NavLinkItem, SocialLink } from "@/types/components";

interface HeaderNavProps {
  navLinks: NavLinkItem[];
  socialLinks?: SocialLink[];
  onLinkClick?: () => void;
  isMobile?: boolean;
}

export function HeaderNav({
  navLinks,
  socialLinks = [],
  onLinkClick,
  isMobile = false,
}: HeaderNavProps) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleMouseEnter = (title: string) => {
    if (!isMobile) {
      setOpenDropdown(title);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setOpenDropdown(null);
    }
  };

  const toggleDropdown = (title: string) => {
    if (isMobile) {
      setOpenDropdown(openDropdown === title ? null : title);
    }
  };

  const handleLinkClick = () => {
    onLinkClick?.();
    setOpenDropdown(null);
  };

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + "/");
  };

  if (isMobile) {
    return (
      <nav className="flex flex-col py-6 z-100000">
        {navLinks.map((link) => (
          <div key={link.primaryTitle} className="border-b border-light-grey/30">
            <div className="flex items-center justify-between">
              <Link
                href={link.primaryPath}
                onClick={handleLinkClick}
                className={cn(
                  "flex-1 py-4 px-6",
                  "font-montserrat text-[16px] tablet:text-[24px]",
                  isActive(link.primaryPath)
                    ? "text-primary-blue font-medium"
                    : "text-primary-text"
                )}
              >
                {link.primaryTitle}
              </Link>
              {link.secondaryLinks && link.secondaryLinks.length > 0 && (
                <button
                  onClick={() => toggleDropdown(link.primaryTitle)}
                  className="p-4 text-primary-text"
                  aria-label={`Toggle ${link.primaryTitle} submenu`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={cn(
                      "w-5 h-5 transition-transform",
                      openDropdown === link.primaryTitle && "rotate-180"
                    )}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              )}
            </div>

            {/* Mobile submenu */}
            {link.secondaryLinks &&
              link.secondaryLinks.length > 0 &&
              openDropdown === link.primaryTitle && (
                <div className="bg-primary-pink/30 py-2">
                  {link.secondaryLinks.map((subLink) => (
                    <Link
                      key={subLink.secondaryTitle}
                      href={subLink.secondaryPath}
                      onClick={handleLinkClick}
                      className={cn(
                        "block py-3 px-8",
                        "font-montserrat text-base",
                        isActive(subLink.secondaryPath)
                          ? "text-primary-blue"
                          : "text-primary-text"
                      )}
                    >
                      {subLink.secondaryTitle}
                    </Link>
                  ))}
                </div>
              )}
          </div>
        ))}

        {/* Social links */}
        {socialLinks.length > 0 && (
          <div className="flex items-center justify-center gap-6 py-8">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-text hover:text-primary-blue transition-colors"
                aria-label={social.platform}
              >
                {social.platform === "facebook" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[30px] h-[30px]"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                )}
                {social.platform === "instagram" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[30px] h-[30px]"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        )}
      </nav>
    );
  }

  // Desktop navigation
  return (
    <nav className="flex items-center gap-8 z-100">
      {navLinks.map((link) => (
        <div
          key={link.primaryTitle}
          className="relative"
          onMouseEnter={() => handleMouseEnter(link.primaryTitle)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href={link.primaryPath}
            onClick={handleLinkClick}
            className={cn(
              "font-montserrat text-sm font-normal",
              "py-5 px-1",
              "relative",
              "transition-colors",
              isActive(link.primaryPath)
                ? "text-primary-blue"
                : "text-primary-text hover:text-primary-blue",
              // Underline effect
              "after:absolute after:bottom-0 after:left-0 after:right-0",
              "after:h-[2px] after:bg-primary-blue",
              "after:transform after:scale-x-0 after:transition-transform",
              isActive(link.primaryPath) && "after:scale-x-100",
              "hover:opacity-80"
            )}
          >
            {link.primaryTitle}
          </Link>

          {/* Desktop dropdown */}
          {link.secondaryLinks &&
            link.secondaryLinks.length > 0 &&
            openDropdown === link.primaryTitle && (
              <div
                className={cn(
                  "absolute top-full left-0",
                  "bg-primary-pink rounded-[8px]",
                  "min-w-[200px]",
                  "py-[14px]",
                  "z-50",
                )}
              >
                {link.secondaryLinks.map((subLink) => (
                  <Link
                    key={subLink.secondaryTitle}
                    href={subLink.secondaryPath}
                    onClick={handleLinkClick}
                    className={cn(
                      "block py-[14px] px-[14px]",
                      "font-montserrat text-sm",
                      "transition-colors",
                      "hover:opacity-80",
                      isActive(subLink.secondaryPath)
                        ? "text-primary-blue"
                        : "text-primary-text hover:text-primary-blue"
                    )}
                  >
                    {subLink.secondaryTitle}
                  </Link>
                ))}
              </div>
            )}
        </div>
      ))}

      {/* Social links */}
      {socialLinks.length > 0 && (
        <div className="flex items-center gap-4 ml-4">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-text hover:text-primary-blue hover:scale-110 transition-all"
              aria-label={social.platform}
            >
              {social.platform === "facebook" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[25px] h-[25px]"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              )}
              {social.platform === "instagram" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[25px] h-[25px]"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              )}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
