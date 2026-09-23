import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";

const REGIONS = [
  {
    name: "Lower Mainland & Metro Vancouver",
    note: "Home base — Richmond, BC",
  },
  { name: "Vancouver Island" },
  { name: "BC Interior" },
  { name: "Northern BC" },
  { name: "Alberta" },
  { name: "Washington State" },
];

export function ServiceArea() {
  return (
    <Section id="service-area">
      <div className="grid gap-8 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7">
          <SectionHeading>Where We Work</SectionHeading>

          <div className="mt-8 grid gap-6 text-lg leading-relaxed text-nero/80">
            <p>
              We are based in Richmond, BC and primarily serve the Lower
              Mainland and Metro Vancouver region. We take on projects
              throughout BC, including Vancouver Island, the Interior, and
              northern BC, as well as projects in Alberta and Washington State.
            </p>
            <p className="text-nero">
              If your project is in the Pacific Northwest and you are not sure
              whether it fits our scope geographically,{" "}
              <a
                href="tel:+16045191711"
                className="font-medium underline decoration-pumpkin decoration-2 underline-offset-4 transition-colors hover:text-pumpkin"
              >
                call us
              </a>
              .
            </p>
          </div>
        </div>

        <ul className="grid content-start gap-y-5 border-t border-nero/15 pt-8 md:col-span-5 md:border-l md:border-t-0 md:pl-10 md:pt-2">
          {REGIONS.map((region) => (
            <li key={region.name} className="flex gap-4">
              <span
                className="mt-[0.6rem] h-2 w-2 shrink-0 bg-pumpkin"
                aria-hidden="true"
              />
              <span className="text-lg text-nero">
                {region.name}
                {region.note ? (
                  <span className="block text-sm text-nero/60">
                    {region.note}
                  </span>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
