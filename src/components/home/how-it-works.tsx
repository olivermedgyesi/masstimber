import type { ReactNode } from "react";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";

/*
  Process icons — line art on a 24x24 grid, 1.5px stroke, inheriting colour
  (Pumpkin) from the icon frame. Drawn rather than pulled from an icon set so
  the metaphors are construction-specific: drawings under review, a signed
  price, a beam being set.
*/
const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/* Magnifier over drawing lines — reviewing the set. */
function ScopeIcon() {
  return (
    <svg {...iconProps} className="h-7 w-7">
      <circle cx="10.5" cy="10.5" r="7.5" />
      <path d="M7 9h7M7 12.25h4.5" />
      <path d="M16 16l5.5 5.5" />
    </svg>
  );
}

/* Sheet with a folded corner and a confirmed line — the fixed contract price. */
function PricingIcon() {
  return (
    <svg {...iconProps} className="h-7 w-7">
      <path d="M13.5 2.75H6.5a1.75 1.75 0 0 0-1.75 1.75v15a1.75 1.75 0 0 0 1.75 1.75h11a1.75 1.75 0 0 0 1.75-1.75V8.5z" />
      <path d="M13.5 2.75V8.5h5.75" />
      <path d="M8.5 15.25l2.25 2.25 4.5-4.5" />
    </svg>
  );
}

/* Beam landing onto two posts — the set itself. */
function InstallIcon() {
  return (
    <svg {...iconProps} className="h-7 w-7">
      <path d="M12 2.25v4.5" />
      <path d="M9.5 4.5L12 7l2.5-2.5" />
      <rect x="2.75" y="9.25" width="18.5" height="3.5" rx="0.75" />
      <path d="M6.25 12.75v9M17.75 12.75v9" />
    </svg>
  );
}

type Step = {
  title: string;
  body: string;
  icon: ReactNode;
};

const STEPS: Step[] = [
  {
    title: "Scope Review",
    body: "We review drawings, schedule, and site conditions. If there are constructability issues, we typically find them before construction begins.",
    icon: <ScopeIcon />,
  },
  {
    title: "Contract Pricing",
    body: "We provide a standard fixed contract price based on the scope presented.",
    icon: <PricingIcon />,
  },
  {
    title: "Installation",
    body: "Our experienced installation crews meet schedules and minimize the impact of site challenges.",
    icon: <InstallIcon />,
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeading className="max-w-none md:whitespace-nowrap">
        How a Contech project works
      </SectionHeading>

      <ol className="mt-14 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8 lg:gap-12">
        {STEPS.map((step, index) => (
          <li key={step.title} className="flex flex-col">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-nero/15 bg-seashell text-pumpkin">
                {step.icon}
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-nero/40">
                Step {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-6 text-xl font-semibold text-nero">
              {step.title}
            </h3>
            <p className="mt-3 max-w-sm leading-relaxed text-nero/70">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
