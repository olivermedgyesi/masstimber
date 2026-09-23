import Image from "next/image";
import Link from "next/link";
import { CtaLink } from "@/components/site/cta-link";
import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";

const SERVICES = [
  {
    name: "Mass Timber Installation",
    href: "/services#installation",
    image: "/services/installation.jpg",
    body: "We erect CLT, glulam, NLT, DLT, and hybrid timber-steel structures for commercial and institutional projects. Contract pricing, fixed schedule, full coordination with your steel and concrete trades.",
  },
  {
    name: "Constructability Review",
    href: "/services#constructability-review",
    image: "/services/constructability.jpg",
    body: "Before your materials are ordered, we review the design for structural conflicts, tolerance gaps, and sequencing problems. This is the step most teams skip, and the one that prevents the most expensive surprises.",
  },
  {
    name: "Design Assist",
    href: "/services#design-assist",
    image: "/services/design-assist.jpg",
    body: "We can work with your design team during pre-construction to ensure the structural assembly is buildable as drawn. Our field experience informs the design before it becomes a conflict on site.",
  },
  {
    name: "Material Supply",
    href: "/services#material-supply",
    image: "/services/material-supply.jpg",
    body: "We can also supply mass timber materials alongside installation on select projects, consolidating procurement and execution under one contract.",
  },
];

export function ServicesOverview() {
  return (
    <Section id="services" tone="tint">
      <SectionHeader
        heading="What we do"
        intro="From preliminary design through to final build, we review every step of the process to ensure we get the best installation possible."
      />

      <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 md:mt-16">
        {SERVICES.map((service) => (
          <li key={service.name}>
            <Link
              href={service.href}
              className="group flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pumpkin"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-nero/5">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
              </div>

              <div className="mt-6 flex items-start justify-between gap-6">
                <h3 className="text-xl font-semibold text-nero md:text-2xl">
                  {service.name}
                </h3>
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center bg-pumpkin text-seashell transition-colors group-hover:bg-[#c74d08]"
                  aria-hidden="true"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="-rotate-45 transition-transform duration-300 group-hover:rotate-0"
                  >
                    <path
                      d="M3.33 8h8.67M8 3.33 12.67 8 8 12.67"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
              </div>
              <p className="mt-3 max-w-xl leading-relaxed text-nero/70">
                {service.body}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-14">
        <CtaLink href="/contact">Talk to us about your project</CtaLink>
      </div>
    </Section>
  );
}
