import { CtaLink } from "@/components/site/cta-link";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { SplitImage } from "@/components/site/split-image";

export function WhoWeWorkWith() {
  return (
    <Section id="who-we-work-with">
      <div className="grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="flex flex-col md:col-span-6">
          <SectionHeading>Who We Work With</SectionHeading>

          <div className="mt-8 grid gap-6 text-lg leading-relaxed text-nero/80">
            <p>
              We often work with general contractors on commercial and
              institutional projects where the mass timber scope is complex
              enough to need a specialist installation team.
            </p>
            <p>
              Our clients want a partner with enough structural knowledge to
              spot a coordination conflict before it is a field problem, and
              enough accountability to deliver on the schedule they are managing
              to.
            </p>
          </div>

          <p className="mt-10 max-w-md border-l-[3px] border-pumpkin pl-6 text-xl font-semibold leading-snug text-nero md:text-2xl">
            If that is the kind of installation partner you are looking for, we
            are the right fit.
          </p>

          <div className="mt-10">
            <CtaLink href="/contact">
              Talk to us about your project
            </CtaLink>
          </div>
        </div>

        <SplitImage
          src="/projects/st-georges.jpg"
          alt="Mass timber structure under installation on a commercial site."
          className="md:col-span-6"
        />
      </div>
    </Section>
  );
}
