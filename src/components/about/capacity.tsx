import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";

const FACTS = [
  {
    value: "29",
    label: "Installers and field supervisors",
    detail:
      "Four field supervisors and 25 installers, with backgrounds in structural timber and commercial construction.",
  },
  {
    value: "1990",
    label: "Working in mass timber since",
    detail:
      "We started in the heavy timber work that laid the groundwork for today's mass timber industry, and have built on it since.",
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
        <dl className="grid gap-px border border-nero/15 bg-nero/15 sm:grid-cols-2">
          {FACTS.map((fact) => (
            <div key={fact.label} className="flex flex-col bg-seashell p-8">
              <dd className="order-first font-body text-4xl font-bold leading-none tracking-tight text-pumpkin lg:text-5xl">
                {fact.value}
              </dd>
              <dt className="mt-5 text-sm font-medium uppercase tracking-[0.14em] text-nero">
                {fact.label}
              </dt>
              <p className="mt-3 text-sm leading-relaxed text-nero/70">
                {fact.detail}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
