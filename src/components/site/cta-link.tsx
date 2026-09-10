import Link from "next/link";
import type { ReactNode } from "react";

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="transition-transform group-hover:translate-x-1"
    >
      <path
        d="M2 8h11M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="square"
      />
    </svg>
  );
}

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost" | "outline";
  tone?: "light" | "dark";
  className?: string;
};

/*
  Site-wide call to action. `solid` = pumpkin button; `outline` = bordered
  button, no fill; `ghost` = inline text + arrow (secondary links like "Learn
  more"). `tone` sets the outline/ghost colour on light vs dark backgrounds.
*/
export function CtaLink({
  href,
  children,
  variant = "solid",
  tone = "light",
  className = "",
}: CtaLinkProps) {
  const base =
    "group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.14em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pumpkin";
  const styles =
    variant === "solid"
      ? "bg-pumpkin px-8 py-4 text-seashell hover:bg-[#c74d08]"
      : variant === "outline"
        ? tone === "dark"
          ? "border-2 border-seashell/50 px-8 py-4 text-seashell hover:border-seashell hover:bg-seashell/10"
          : "border-2 border-nero/30 px-8 py-4 text-nero hover:border-nero hover:bg-nero/5"
        : `${tone === "dark" ? "text-seashell" : "text-nero"} hover:text-pumpkin`;

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      <Arrow />
    </Link>
  );
}
