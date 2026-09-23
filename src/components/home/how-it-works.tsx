import type { ReactNode } from "react";
import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function ScopeIcon() {
  return (
    <svg {...iconProps} className="h-7 w-7">
      <circle cx="10.5" cy="10.5" r="7.5" />
      <path d="M7 9h7M7 12.25h4.5" />
      <path d="M16 16l5.5 5.5" />
    </svg>
  );
}

function PricingIcon() {
  return (
    <svg {...iconProps} className="h-7 w-7">
      <path d="M13.5 2.75H6.5a1.75 1.75 0 0 0-1.75 1.75v15a1.75 1.75 0 0 0 1.75 1.75h11a1.75 1.75 0 0 0 1.75-1.75V8.5z" />
      <path d="M13.5 2.75V8.5h5.75" />
      <path d="M8.5 15.25l2.25 2.25 4.5-4.5" />
    </svg>
  );
}

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
      <SectionHeader
        heading="How a Contech project works"
        headingClassName="lg:whitespace-nowrap"
      />

      <ol className="mt-14 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8 lg:gap-12">
        {STEPS.map((step) => (
          <li key={step.title} className="flex flex-col">
            <div className="flex items-center gap-3">
              <span className="shrink-0 text-pumpkin" aria-hidden="true">
                {step.icon}
              </span>
              <h3 className="text-xl font-semibold text-nero">{step.title}</h3>
            </div>
            <p className="mt-3 max-w-sm leading-relaxed text-nero/70">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
