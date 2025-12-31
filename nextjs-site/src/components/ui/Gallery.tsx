import { cn } from "@/lib/utils/cn";
import type { GalleryProps } from "@/types/components";

export function Gallery({ children, className }: GalleryProps) {
  return (
    <div
      className={cn(
        // Mobile: block layout (not flex) - matches Gatsby
        "w-full max-w-desktop mx-auto",
        // Tablet+: flex with wrap
        "tablet:flex tablet:flex-wrap",
        // Desktop: add justify-center
        "desktop:justify-center",
        // Child widths per breakpoint
        "[&>*]:w-full",
        "tablet:[&>*]:w-[40%] tablet:[&>*]:px-6",
        "desktop:[&>*]:w-[28%] desktop:[&>*]:px-2",
        className
      )}
    >
      {children}
    </div>
  );
}
