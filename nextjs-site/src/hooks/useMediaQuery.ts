"use client";

import { useState, useEffect } from "react";

/**
 * Hook to check if a media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

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
