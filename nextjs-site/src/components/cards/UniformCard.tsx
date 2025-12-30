import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import type { UniformCardProps } from "@/types/components";

export function UniformCard({
  title,
  description,
  imageUrl,
  imageAlt,
}: UniformCardProps) {
  return (
    <article
      className={cn(
        "bg-primary-sand",
        "overflow-hidden",
        "max-w-[350px] w-full",
        "mb-5 tablet:m-3"
      )}
    >
      {/* Image */}
      <div className="relative w-full h-[250px]">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 767px) 100vw, 350px"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-montaga text-xl text-primary-text mb-4">{title}</h3>
        <div className="text-sm text-primary-text prose prose-sm">
          {description}
        </div>
      </div>
    </article>
  );
}
