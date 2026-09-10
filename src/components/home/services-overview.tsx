import Image from "next/image";
import { CtaLink } from "@/components/site/cta-link";
import { SectionHeading } from "@/components/site/section-heading";

const SERVICES = [
  {
    name: "Mass Timber Installation",
    image: "/services/installation.jpg",
    body: "We erect CLT, glulam, NLT, DLT, and hybrid timber-steel structures for commercial and institutional projects. Contract pricing, fixed schedule, full coordination with your steel and concrete trades.",
  },
  {
    name: "Constructability Review",
    image: "/services/constructability.jpg",
    body: "Before your materials are ordered, we review the design for structural conflicts, tolerance gaps, and sequencing problems. This is the step most teams skip, and the one that prevents the most expensive surprises.",
  },
  {
    name: "Design Assist",
    image: "/services/design-assist.jpg",
    body: "We work with your design team during pre-construction to ensure the structural assembly is buildable as drawn. Our field experience informs the design before it becomes a conflict on site.",
  },
  {
    name: "Material Supply",
    image: "/services/material-supply.jpg",
    body: "We can also supply mass timber materials alongside installation on select projects, consolidating procurement and execution under one contract.",
  },
];

export function ServicesOverview() {
  return (
    <section
      id="services"
      className="bg-seashell px-6 py-20 text-nero md:px-10 md:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <SectionHeading>What we do</SectionHeading>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-nero/80">
          From preliminary design through to final build, we review every step of
          the process to ensure we get the best installation possible.
        </p>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14">
          {SERVICES.map((service) => (
            <li
              key={service.name}
              className="relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden rounded-lg bg-nero p-6 text-seashell md:p-8 lg:min-h-[480px]"
            >
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="-z-20 object-cover"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 -z-10 bg-nero/55"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 -z-10 bg-gradient-to-t from-nero/90 via-nero/35 to-transparent"
                aria-hidden="true"
              />

              <h3 className="text-xl font-semibold text-seashell">
                {service.name}
              </h3>
              <p className="mt-3 leading-relaxed text-seashell/80">
                {service.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 lg:mt-14">
          <CtaLink href="/contact">Talk to us about your project</CtaLink>
        </div>
      </div>
    </section>
  );
}
