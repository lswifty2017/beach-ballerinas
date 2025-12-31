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
  // Base styles for the inner button/link element - matches Gatsby button.scss
  const baseStyles = cn(
    "no-underline",
    "py-[10px] px-[30px] rounded-[20px]",
    "font-bold text-[13px] desktop:text-[14px]",
    "transition-all duration-300",
    disabled && "opacity-50 cursor-not-allowed"
  );

  // Color styles - matches Gatsby button.scss exactly
  const colorStyles = {
    blue: cn(
      "bg-primary-blue text-white",
      "hover:bg-[#f9f9f9] hover:text-primary-blue"
    ),
    sand: cn(
      // Gatsby uses $primary-font-color (#5b5b5b) for text
      "bg-primary-sand text-primary-text",
      // Hover: bg becomes primary-font-color, text becomes primary-sand
      "hover:bg-primary-text hover:text-primary-sand"
    ),
  };

  const combinedStyles = cn(baseStyles, colorStyles[bgColor], className);

  const wrapperStyles = "flex justify-center px-2";

  // If it's a form submit button
  if (type === "submit" || !href) {
    return (
      <div className={wrapperStyles}>
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={combinedStyles}
          aria-label={text}
        >
          {text}
        </button>
      </div>
    );
  }

  // External link
  if (target === "_blank" || href.startsWith("http")) {
    return (
      <div className={wrapperStyles}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
          aria-label={text}
        >
          {text}
        </a>
      </div>
    );
  }

  // Internal link
  return (
    <div className={wrapperStyles}>
      <Link href={href} className={combinedStyles} aria-label={text}>
        {text}
      </Link>
    </div>
  );
}
