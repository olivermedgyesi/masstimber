import Image from "next/image";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";

const PROJECTS = [
  {
    name: "Westshore Potash Shed",
    meta: "Tsawwassen, BC · Industrial · Glulam",
    body: "An enormous arch glulam potash shed at the Tsawwassen export terminal.",
    image: null,
  },
  {
    name: "St. George's Senior School",
    meta: "Vancouver, BC · Institutional · Hybrid (CLT + Glulam)",
    body: "CLT and glulam roof for the Grand Hall, incorporating a unique array of splayed columns supporting intermediate beams.",
    image: "/projects/st-georges.jpg",
  },
  {
    name: "BCIT CSC",
    meta: "Burnaby, BC · Institutional · Mass Timber (CLT + Glulam)",
    body: "A true multistorey wood structure using CLT and glulam at BCIT's Burnaby campus.",
    image: "/projects/bcit-csc.jpg",
  },
];

const TESTIMONIAL_COUNT = 2;

export function Proof() {
  return (
    <Section id="projects">
      <SectionHeading className="max-w-none md:whitespace-nowrap">
        Projects we have delivered
      </SectionHeading>

      <ul className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-3">
        {PROJECTS.map((project) => (
          <li key={project.name}>
            <div className="relative aspect-[3/2] overflow-hidden border border-nero/15 bg-nero/5">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <span className="absolute inset-0 flex items-center justify-center text-[0.7rem] uppercase tracking-[0.2em] text-nero/30">
                  Photo to follow
                </span>
              )}
            </div>
            <p className="mt-5 text-[0.7rem] uppercase tracking-[0.16em] text-pumpkin">
              {project.meta}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-nero">
              {project.name}
            </h3>
            <p className="mt-2 leading-relaxed text-nero/70">{project.body}</p>
          </li>
        ))}
      </ul>

      {/* Testimonials — placeholder until GC partner quotes are supplied */}
      <div className="mt-20 border-t border-nero/15 pt-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-pumpkin">
          What partners say
        </p>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {Array.from({ length: TESTIMONIAL_COUNT }).map((_, index) => (
            <figure key={index} className="border-l-2 border-nero/15 pl-6">
              <blockquote className="text-lg leading-relaxed text-nero/50">
                &ldquo;Quote from a GC contact about working with Contech Mass
                Timber — scheduling, quality, coordination, or
                constructability.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm uppercase tracking-[0.14em] text-nero/40">
                Name, Title — Company
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}
