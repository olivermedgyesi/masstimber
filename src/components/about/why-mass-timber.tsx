import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { SplitImage } from "@/components/site/split-image";

export function WhyMassTimber() {
  return (
    <Section id="why-mass-timber">
      <div className="grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="flex flex-col md:col-span-6">
          <SectionHeading>Why Mass Timber</SectionHeading>

          <div className="mt-8 grid gap-6 text-lg leading-relaxed text-nero/80">
            <p>
              Mass timber installation draws on the same discipline any complex
              structural system demands: careful pre-construction planning, a
              clear understanding of precise tolerances, and grounded,
              experienced knowledge of how the assembly connects to everything
              around it. That approach is something we strive for in all of our
              projects.
            </p>
            <p>
              The structural logic is consistent whether you are working with
              concrete or timber. You have to understand how the building comes
              together before you arrive on site. The connection between the
              timber and the surrounding structure has to be right the first
              time, and conceived in a manner that is practical and efficient to
              assure a timely erection sequence.
            </p>
            <p className="text-nero">
              We bring decades of structural construction experience to this
              work. The material changed, but the discipline has not.
            </p>
          </div>
        </div>

        <SplitImage
          src="/services/constructability.jpg"
          alt="Glulam column with a steel connection plate, wrapped and staged on site."
          className="md:col-span-6"
        />
      </div>
    </Section>
  );
}
