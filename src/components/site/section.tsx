import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  tone?: "light" | "dark" | "tint";
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  tone = "light",
  className = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={[
        "px-6 py-20 md:px-10 md:py-28 lg:py-32",
        tone === "dark"
          ? "bg-nero text-seashell"
          : tone === "tint"
            ? "bg-nero/[0.04] text-nero"
            : "bg-seashell text-nero",
        className,
      ].join(" ")}
    >
      <div className="mx-auto w-full max-w-[1280px]">{children}</div>
    </section>
  );
}
