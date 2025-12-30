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
        "flex flex-col items-center",
        "pt-3 pb-9",
        "w-full max-w-[300px]",
        "text-center"
      )}
    >
      {/* Circular image */}
      <Link href={href} className="relative block mb-6">
        <div
          className={cn(
            "relative w-[180px] h-[180px] tablet:w-[240px] tablet:h-[240px]",
            "rounded-full overflow-hidden",
            "border border-primary-blue"
          )}
        >
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 767px) 180px, 240px"
          />
        </div>
      </Link>

      {/* Title with underline decoration */}
      <div className="relative mb-4">
        <h3 className="font-montaga text-[24px] font-medium text-primary-text">
          {title}
        </h3>
        <div
          className={cn(
            "absolute left-1/2 -translate-x-1/2",
            "bottom-[-12px]",
            "w-12 h-[1px]",
            "bg-primary-text"
          )}
        />
      </div>

      {/* Subtitle */}
      <p className="text-[18px] text-primary-text pb-8">{subtitle}</p>

      {/* CTA Button */}
      <Button href={href} text="Class Info" bgColor="blue" />
    </article>
  );
}
