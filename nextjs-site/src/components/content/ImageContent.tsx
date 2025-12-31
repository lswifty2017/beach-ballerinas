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
  paddedBottom = false,
}: ImageContentProps) {
  const imageStyles = {
    circle: "rounded-full w-[220px] h-[220px] tablet:w-[260px] tablet:h-[260px] desktop:w-[300px] desktop:h-[300px]",
    square: "w-[300px] h-[300px] tablet:w-[320px] tablet:h-[320px] desktop:w-[400px] desktop:h-[400px]",
    rectangle: "w-[320px] h-[320px] tablet:w-1/2 tablet:h-[540px]",
    "": "w-full h-[375px] tablet:h-auto tablet:max-h-[700px]",
  };

  return (
    <section
      id={id}
      className={cn(
        "pt-0",
        "w-full pt-12 tablet:pt-0",
        bgColor === "pink" && "bg-primary-pink"
      )}
    >
      <div
        className={cn(
          // Mobile: block layout (matches Gatsby - not flex until tablet)
          // Tablet+: flex row with centered alignment
          "w-full",
          "tablet:flex tablet:items-center",
          reverse && "tablet:flex-row-reverse",
          paddedBottom && "tablet:pb-12"
        )}
      >
        {/* Image */}
        <div className={cn(
          "relative mx-auto",
          "tablet:mx-0 tablet:w-1/2",
          imageStyles[imgType]
        )}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className={cn(
              "object-cover",
              imgType === "circle" && "rounded-full"
            )}
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="tablet:w-1/2 tablet:flex">
          <div className={cn(
            "py-4 px-5",
            "max-w-[330px] mx-auto",
            "flex flex-col justify-center items-center",
            "text-center",
            "desktop:max-w-[550px] desktop:items-start desktop:text-left"
          )}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
