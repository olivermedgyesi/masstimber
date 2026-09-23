import { CtaLink } from "@/components/site/cta-link";
import { SectionHeader } from "@/components/site/section-header";

export function Differentiator() {
  return (
    <section
      id="approach"
      className="relative isolate overflow-hidden bg-nero px-6 py-20 text-seashell md:px-10 md:py-28 lg:py-32"
    >
      <div
        className="absolute inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:72px_72px]"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1280px]">
        <SectionHeader
          heading="Connection. Craft. Clarity."
          tone="dark"
        />

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-14">
          <div className="flex flex-col items-start gap-10 md:col-span-5">
            <p className="border-l-[3px] border-pumpkin pl-6 text-2xl font-semibold leading-snug text-seashell md:text-3xl">
              Our scheduling is accurate. When we commit to a date, we show up.
            </p>
            <CtaLink href="/contact">Get project pricing</CtaLink>
          </div>

          <div className="grid gap-6 text-lg leading-relaxed text-seashell/75 md:col-span-7">
            <p>
              Mass timber installation is not assembly. It is a structural
              sequence with specific tolerances, complex connection logic, and a
              schedule that every downstream trade depends on.
            </p>
            <p>
              What separates a good installation from a failed one is whether
              the team understands how the whole building comes together and
              realizes the nuances of the different structural disciplines.
            </p>
            <p>
              We bring decades of structural construction experience to every
              project we take on. We understand how mass timber connects to
              concrete, to steel, and to itself. We plan the sequence before we
              arrive on site, not after.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
