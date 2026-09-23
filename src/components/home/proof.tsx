import Image from "next/image";
import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";

const PROJECTS = [
  {
    name: "Westshore Potash Shed",
    meta: "Tsawwassen, BC · Industrial · Glulam",
    body: "An enormous arch glulam potash shed at the Tsawwassen export terminal.",
    image: {
      src: "/projects/westshore.jpg",
      alt: "Aerial view of the Westshore potash shed's glulam arches under construction, with crawler cranes on site.",
    },
  },
  {
    name: "St. George's Senior School",
    meta: "Vancouver, BC · Institutional · Hybrid (CLT + Glulam)",
    body: "CLT and glulam roof for the Grand Hall, incorporating a unique array of splayed columns supporting intermediate beams.",
    image: {
      src: "/projects/st-georges-school.jpg",
      alt: "St. George's Senior School entrance with the school crest on the stone facade.",
    },
  },
  {
    name: "BCIT CSC",
    meta: "Burnaby, BC · Institutional · Mass Timber (CLT + Glulam)",
    body: "A true multistorey wood structure using CLT and glulam at BCIT's Burnaby campus.",
    image: {
      src: "/projects/bcit-csc.jpg",
      alt: "Aerial view of the BCIT CSC mass timber structure under construction.",
    },
  },
];

const TESTIMONIAL_COUNT = 2;

export function Proof() {
  return (
    <Section id="projects">
      <SectionHeader
        heading="Projects we have delivered"
        headingClassName="md:whitespace-nowrap"
      />

      <ul className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-3">
        {PROJECTS.map((project) => (
          <li key={project.name}>
            <div className="relative aspect-[3/2] overflow-hidden bg-nero/5">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
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

      <div className="mt-20">
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
