import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/Button";
import type { ClassCardProps } from "@/types/components";

export function ClassCard({
  imageUrl,
  imageAlt,
  title,
  subtitle,
  href,
}: ClassCardProps) {
  return (
    <article
      className={cn(
        // Matches Gatsby class-card.scss: flex column, centered, pb-36, pt-12, width 100%
        "flex flex-col items-center",
        "pt-3 pb-9",
        "w-full"
      )}
    >
      {/* Circular image - matches Gatsby: 180x180 mobile, 240x240 tablet, 1px blue border, mb-24 */}
      <div
        className={cn(
          "relative",
          "w-[180px] h-[180px] tablet:w-[240px] tablet:h-[240px]",
          "rounded-[90px] tablet:rounded-full",
          "border border-primary-blue",
          "mb-6",
          "overflow-hidden"
        )}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover bg-center rounded-full block"
          sizes="(max-width: 767px) 180px, 240px"
        />
      </div>

      {/* Title with underline decoration - matches Gatsby: font-weight 500, 24px, pb-20, 48px underline */}
      <div className="relative pb-5">
        <span className="font-medium text-[24px] text-primary-text block">
          {title}
        </span>
        {/* 48px underline positioned at bottom */}
        <span
          className={cn(
            "absolute left-1/2 -translate-x-1/2",
            "bottom-3",
            "w-12 h-[1px]",
            "bg-primary-text"
          )}
        />
      </div>

      {/* Subtitle - matches Gatsby: 18px font, pb-32 */}
      <p className="text-[18px] text-primary-text pb-8">{subtitle}</p>

      {/* CTA Button */}
      <Button href={href} text="Class Info" bgColor="blue" />
    </article>
  );
}
