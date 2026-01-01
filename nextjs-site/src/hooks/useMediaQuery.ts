"use client";

import { useState, useEffect } from "react";

/**
 * Hook to check if a media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    // Return false during SSR (window doesn't exist)
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const media = window.matchMedia(query);

    // Subscribe to changes - setState only called via listener callback
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    // Sync initial state in case query changed
    listener();

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

/**
 * Hook to check if viewport is tablet or larger (767px+)
 */
export function useIsTablet(): boolean {
  return useMediaQuery("(min-width: 767px)");
}

/**
 * Hook to check if viewport is desktop or larger (1172px+)
 */
export function useIsDesktop(): boolean {
  return useMediaQuery("(min-width: 1172px)");
}
