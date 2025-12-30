"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils/cn";
import type { NotificationBarProps } from "@/types/components";

export function NotificationBar({ content, show }: NotificationBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (show && !isDismissed) {
      // Show notification after a delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (!show || !isVisible || isDismissed) {
    return null;
  }

  return (
    <div
      className={cn(
        "sticky top-0 z-50",
        "bg-primary-blue",
        "py-3 px-5",
        "min-h-[30px]",
        "transition-all duration-300"
      )}
    >
      <div className="max-w-desktop mx-auto flex items-center justify-between gap-4">
        <div
          className="flex-1 text-center text-sm text-white leading-6"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <button
          onClick={handleDismiss}
          className={cn(
            "flex-shrink-0",
            "w-5 h-5",
            "flex items-center justify-center",
            "text-white hover:opacity-60",
            "transition-opacity"
          )}
          aria-label="Dismiss notification"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
