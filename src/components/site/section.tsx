import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  tone?: "light" | "dark";
  className?: string;
  children: ReactNode;
};

/*
  Standard homepage/page section: consistent horizontal gutter, vertical
  rhythm, and max-width container. `tone="dark"` = Nero background.
*/
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
        tone === "dark" ? "bg-nero text-seashell" : "bg-seashell text-nero",
        className,
      ].join(" ")}
    >
      <div className="mx-auto w-full max-w-[1280px]">{children}</div>
    </section>
  );
}
