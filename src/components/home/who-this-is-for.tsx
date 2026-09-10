import Image from "next/image";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";

export function WhoThisIsFor() {
  return (
    <Section id="who-this-is-for">
      <div className="grid gap-10 md:grid-cols-2 md:gap-14">
        <div className="flex flex-col">
          <SectionHeading>
            For contractors building mass timber projects.
          </SectionHeading>

          <div className="mt-8 grid gap-6 text-lg leading-relaxed text-nero/80">
            <p>
              Mass timber installation sets the pace for everything that follows.
              We apply a considerable amount of forward-looking resource to assure
              any potential issues are either eliminated or reduced to a minimum.
            </p>
            <p>
              We work with project teams who want a qualified contractor they can
              trust to install their projects quickly and efficiently.
            </p>
          </div>
        </div>

        <div className="relative min-h-[20rem] overflow-hidden rounded-lg bg-nero/5 md:min-h-0">
          <Image
            src="/who/team-review.jpg"
            alt="Contech crew reviewing a mass timber facade on site."
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
