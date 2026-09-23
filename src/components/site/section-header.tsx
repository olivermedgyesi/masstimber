import type { ReactNode } from "react";
import { SectionHeading } from "@/components/site/section-heading";

type Tone = "light" | "dark";

type SectionHeaderProps = {
  heading: ReactNode;
  intro?: ReactNode;
  tone?: Tone;
  plain?: boolean;
  headingClassName?: string;
  className?: string;
};

export function SectionHeader({
  heading,
  intro,
  tone = "light",
  plain,
  headingClassName = "",
  className = "",
}: SectionHeaderProps) {
  const dark = tone === "dark";
  return (
    <div className={className}>
      <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-14">
        <SectionHeading
          tone={tone}
          plain={plain}
          className={`${intro ? "md:col-span-7" : "max-w-none md:col-span-12"} ${headingClassName}`}
        >
          {heading}
        </SectionHeading>

        {intro ? (
          <div
            className={[
              "text-lg leading-relaxed md:col-span-5",
              dark ? "text-seashell/75" : "text-nero/75",
            ].join(" ")}
          >
            {intro}
          </div>
        ) : null}
      </div>
    </div>
  );
}
