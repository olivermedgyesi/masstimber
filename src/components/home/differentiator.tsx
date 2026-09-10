import { CtaLink } from "@/components/site/cta-link";

export function Differentiator() {
  return (
    <section
      id="approach"
      className="relative isolate overflow-hidden bg-nero px-6 py-24 text-seashell md:px-10 md:py-32 lg:py-40"
    >
      {/* Architectural grid, echoing the hero */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:72px_72px]"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1280px]">
        <h2 className="font-display text-3xl uppercase leading-[1.05] tracking-tight md:text-4xl lg:text-5xl">
          Connection. Craft. Clarity.
        </h2>

        <div className="mt-10 grid max-w-3xl gap-6 text-lg leading-relaxed text-seashell/85">
          <p>
            Mass timber installation is not assembly. It is a structural sequence
            with specific tolerances, complex connection logic, and a schedule
            that every downstream trade depends on.
          </p>
          <p>
            What separates a good installation from a failed one is whether the
            team understands how the whole building comes together and realizes
            the nuances of the different structural disciplines.
          </p>
          <p>
            We bring decades of structural construction experience to every
            project we take on. We understand how mass timber connects to
            concrete, to steel, and to itself. We plan the sequence before we
            arrive on site, not after.
          </p>
          <p className="text-seashell">
            Our scheduling is accurate. When we commit to a date, we show up.
          </p>
        </div>

        <div className="mt-12">
          <CtaLink href="/contact">Get project pricing</CtaLink>
        </div>
      </div>
    </section>
  );
}
