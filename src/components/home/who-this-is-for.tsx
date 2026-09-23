import { CtaLink } from "@/components/site/cta-link";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { SplitImage } from "@/components/site/split-image";

export function WhoThisIsFor() {
  return (
    <Section id="who-this-is-for">
      <div className="grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="flex flex-col md:col-span-6">
          <SectionHeading>
            For contractors building mass timber projects.
          </SectionHeading>

          <div className="mt-8 grid gap-6 text-lg leading-relaxed text-nero/80">
            <p>
              Mass timber installation sets the pace for everything that
              follows. We apply a considerable amount of forward-looking
              resource to assure any potential issues are either eliminated or
              reduced to a minimum.
            </p>
            <p>
              We work with project teams who want a qualified contractor they
              can trust to install their projects quickly and efficiently.
            </p>
          </div>

          <div className="mt-10">
            <CtaLink href="/about#why-mass-timber">
              Learn more about mass timber
            </CtaLink>
          </div>
        </div>

        <SplitImage
          src="/who/team-review.jpg"
          alt="Contech crew reviewing a mass timber facade on site."
          className="md:col-span-6"
        />
      </div>
    </Section>
  );
}
