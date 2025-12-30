import { cn } from "@/lib/utils/cn";
import type { GalleryProps } from "@/types/components";

export function Gallery({ children, className }: GalleryProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-8",
        "tablet:flex-row tablet:flex-wrap tablet:justify-center",
        "w-full max-w-desktop mx-auto px-4",
        className
      )}
    >
      {children}
    </div>
  );
}
