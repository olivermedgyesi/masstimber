import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  children: ReactNode;
  tone?: "light" | "dark";
  plain?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  children,
  tone = "light",
  plain = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-pumpkin">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={[
          "leading-[1.05] tracking-tight",
          plain
            ? "font-body text-3xl font-bold md:text-4xl lg:text-5xl"
            : "font-display text-3xl uppercase md:text-4xl lg:text-5xl",
          tone === "dark" ? "text-seashell" : "text-nero",
        ].join(" ")}
      >
        {children}
      </h2>
    </div>
  );
}
