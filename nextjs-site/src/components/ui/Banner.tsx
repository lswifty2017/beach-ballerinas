import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import type { BannerProps } from "@/types/components";

export function Banner({
  imageUrl,
  imageAlt,
  title,
  gradient = true,
  priority = false,
}: BannerProps) {
  return (
    <section className="relative w-full h-[300px] tablet:h-[500px] desktop:h-[600px] max-h-[800px] overflow-hidden">
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        priority={priority}
        className="object-cover"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      {gradient && (
        <div
          className="absolute inset-0 z-2"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255, 233, 243, 1) 0%, transparent 100%)",
          }}
        />
      )}

      {/* White bottom overlay for non-gradient banners */}
      {!gradient && (
        <div
          className="absolute inset-0 z-2"
          style={{
            background:
              "linear-gradient(to top, rgba(255, 255, 255, 0.85) 0%, transparent 40%)",
          }}
        />
      )}

      {/* Title */}
      {title && (
        <h1
          className={cn(
            "absolute z-2",
            "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            "text-5xl md:text-7xl",
            "text-center text-primary-text",
            "px-4 max-w-full"
          )}
        >
          {title}
        </h1>
      )}
    </section>
  );
}
