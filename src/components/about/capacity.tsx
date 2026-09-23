import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";

const FACTS = [
  {
    value: "[X]",
    label: "Installers and field supervisors",
    detail:
      "With backgrounds in structural timber and commercial construction.",
  },
  {
    value: "[Season]",
    label: "Accepting new project inquiries",
    detail: "Currently taking on work for [timeframe/season].",
  },
  {
    value: "[Year]",
    label: "Working in mass timber since",
    detail:
      "Our leadership team has been in mass timber specifically since [year].",
  },
];

export function Capacity() {
  return (
    <Section id="capacity">
      <SectionHeader
        heading="Our Team and Capacity"
        intro={
          <p>
            We have the management and installation capacity to run a number of
            projects at the same time. Our project leaders are selected at
            award, and every effort is made to ensure that individual stays with
            the project through planning and well into installation. This keeps
            management continuity intact and execution of a high order.
          </p>
        }
      />

      <div className="mt-12 md:mt-16">
        <p className="mb-4 text-[0.7rem] uppercase tracking-[0.2em] text-nero/30">
          Details to be confirmed
        </p>
        <dl className="grid gap-px border border-dashed border-nero/20 bg-nero/10 sm:grid-cols-3">
          {FACTS.map((fact) => (
            <div key={fact.label} className="flex flex-col bg-seashell p-8">
              <dd className="order-first font-body text-4xl font-bold leading-none tracking-tight text-nero/40 lg:text-5xl">
                {fact.value}
              </dd>
              <dt className="mt-5 text-sm font-medium uppercase tracking-[0.14em] text-nero">
                {fact.label}
              </dt>
              <p className="mt-3 text-sm leading-relaxed text-nero/50">
                {fact.detail}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
