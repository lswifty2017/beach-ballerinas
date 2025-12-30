import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import type { ButtonProps } from "@/types/components";

export function Button({
  href,
  bgColor = "blue",
  text,
  type = "button",
  onClick,
  target,
  disabled = false,
  className,
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center",
    "px-[30px] py-[10px] rounded-[20px]",
    "font-montserrat font-bold text-[13px] desktop:text-[14px]",
    "transition-all duration-300 ease-in-out",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    disabled && "opacity-50 cursor-not-allowed"
  );

  const colorStyles = {
    blue: cn(
      "bg-primary-blue text-white",
      "hover:bg-[#f9f9f9] hover:text-primary-blue",
      "focus:ring-primary-blue"
    ),
    sand: cn(
      "bg-primary-sand text-black",
      "hover:bg-primary-text hover:text-primary-sand",
      "focus:ring-primary-sand"
    ),
  };

  const combinedStyles = cn(baseStyles, colorStyles[bgColor], className);

  // If it's a form submit button
  if (type === "submit" || !href) {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={combinedStyles}
        aria-label={text}
      >
        {text}
      </button>
    );
  }

  // External link
  if (target === "_blank" || href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedStyles}
        aria-label={text}
      >
        {text}
      </a>
    );
  }

  // Internal link
  return (
    <Link href={href} className={combinedStyles} aria-label={text}>
      {text}
    </Link>
  );
}
