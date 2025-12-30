import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import type { ImageContentProps } from "@/types/components";

export function ImageContent({
  imageUrl,
  imageAlt,
  imgType = "",
  bgColor = "",
  id,
  children,
  reverse = false,
}: ImageContentProps) {
  const imageStyles = {
    circle: "rounded-full w-[220px] h-[220px] tablet:w-[260px] tablet:h-[260px] desktop:w-[300px] desktop:h-[300px]",
    square: "w-[300px] h-[300px] tablet:w-[320px] tablet:h-[320px]",
    rectangle: "w-full h-[200px] tablet:h-[300px] tablet:w-[320px]",
    "": "w-full h-[250px] tablet:h-[350px]",
  };

  return (
    <section
      id={id}
      className={cn(
        "w-full py-4",
        bgColor === "pink" && "bg-primary-pink"
      )}
    >
      <div
        className={cn(
          "max-w-desktop mx-auto px-4",
          "flex flex-col items-center gap-8",
          "tablet:flex-row tablet:justify-center tablet:items-center tablet:gap-12",
          reverse && "tablet:flex-row-reverse"
        )}
      >
        {/* Image */}
        <div className={cn("relative flex-shrink-0", imageStyles[imgType])}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className={cn(
              "object-cover",
              imgType === "circle" && "rounded-full"
            )}
            sizes="(max-width: 767px) 100vw, 400px"
          />
        </div>

        {/* Content */}
        <div className="flex-1 max-w-content text-center tablet:text-left">
          {children}
        </div>
      </div>
    </section>
  );
}
