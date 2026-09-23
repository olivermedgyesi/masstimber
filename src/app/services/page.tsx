import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/services-hero";
import {
  ServiceDetail,
  ServiceList,
} from "@/components/services/service-detail";
import { ServiceArea } from "@/components/services/service-area";
import { Faq } from "@/components/home/faq";
import { FinalCta } from "@/components/home/final-cta";
import { SectionDivider } from "@/components/site/section-divider";

export const metadata: Metadata = {
  title: {
    absolute:
      "Mass Timber Services BC | Installation, CLT, Constructability Review",
  },
  description:
    "Contech Mass Timber provides CLT and mass timber installation, constructability review, design assist, and material supply for GCs across BC and the Pacific Northwest.",
};

const SERVICES_FAQ = [
  {
    q: "Do you work on residential projects?",
    a: "Our focus is commercial and institutional work, including offices, schools, civic buildings, mixed-use developments, and similar projects with a mass timber structural component. We do not typically take on single-family residential projects.",
  },
  {
    q: "What is the minimum project size you work with?",
    a: "We are best suited for projects where the mass timber scope is substantial enough to require a specialist installation team. Call us with your scope and we will tell you honestly whether it is a fit.",
  },
  {
    q: "How far in advance do we need to contact you?",
    a: "The earlier the better, particularly if you want a constructability review or design assist. For installation-only scope, we need enough lead time to schedule mobilization around your project timeline. We recommend reaching out as soon as the structural drawings are in progress.",
  },
  {
    q: "Can you work alongside our existing structural subcontractors?",
    a: "Yes. We coordinate with structural steel, concrete, and MEP trades as a standard part of every installation. If there are specific coordination requirements on your project, bring them up when you contact us.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <ServiceList>
        <ServiceDetail
          id="installation"
          title="Mass Timber Installation"
          paragraphs={[
            "We erect mass timber structures for residential, commercial and institutional projects across BC and the Pacific Northwest. Our scope covers CLT, glulam, NLT, DLT, and hybrid timber-steel systems.",
            "We price by contract, provide a fixed mobilization date, and coordinate with your structural steel and concrete trades throughout the installation sequence. Our field supervisors have direct experience with the tolerance requirements of engineered timber and the connection logic that ties the timber system to the rest of the structure.",
          ]}
          list={{
            heading: "What is included",
            items: [
              "Full erection scope from first lift to structural completion",
              "Pre-installation review of connection details and sequencing",
              "Field coordination with structural steel, concrete, and MEP subcontractors",
              "Experienced field supervision throughout",
            ],
          }}
          cta={{ label: "Talk to us about your installation" }}
          image={{
            src: "/services/installation.jpg",
            alt: "Contech crew setting a glulam beam on a commercial mass timber project.",
          }}
        />

        <ServiceDetail
          id="constructability-review"
          title="Constructability Review"
          subhead="The best time to find a structural problem is before the materials are ordered."
          paragraphs={[
            "Before fabrication begins, we review your structural drawings for installation conflicts, tolerance gaps, and sequencing issues that will cost time and money to resolve in the field.",
            "This is not a design service. We are not your engineers. What we do is interpret your drawings the way an installer reads them, flagging anything that looks like a problem while there is still time to address it.",
          ]}
          list={{
            heading: "What we look at",
            items: [
              "Connection details between mass timber and structural steel",
              "Tolerance compatibility across the structural systems on your project",
              "Erection sequence and crane pick logistics",
              "Coordination conflicts with MEP rough-in, curtain wall, and other envelope systems",
            ],
          }}
          closing="General contractors who have used this service come back for it on every subsequent project. It is the conversation that prevents the expensive ones."
          cta={{ label: "Request a constructability review" }}
          image={{
            src: "/services/constructability.jpg",
            alt: "Glulam column with a steel connection plate, wrapped and staged on site.",
          }}
        />

        <ServiceDetail
          id="design-assist"
          title="Design Assist"
          paragraphs={[
            "If your project is in design development, we can work with your structural engineers and architects to ensure the mass timber assembly is buildable as specified.",
            "We bring field-level installation knowledge into a pre-construction conversation. The goal is a structural design that does not need revision once fabrication begins, because the installation realities were accounted for before the drawings were finalized.",
          ]}
          list={{
            heading: "Particularly valuable when",
            items: [
              "The mass timber connects to a complex structural steel system",
              "The design team is working with mass timber for the first time",
              "The project schedule has limited float for RFIs and design changes",
            ],
          }}
          cta={{ label: "Talk to us about design assist" }}
          image={{
            src: "/services/design-assist.jpg",
            alt: "Project team reviewing mass timber structural drawings.",
          }}
        />

        <ServiceDetail
          id="material-supply"
          title="Material Supply"
          paragraphs={[
            "On select projects, we supply mass timber materials alongside the installation scope. If you want to consolidate timber procurement and installation under one contract, we can structure it that way.",
            "Supply and install contracts reduce the number of parties managing the material interface, simplify coordination, and give us direct control over the compatibility between what is ordered and how it gets built.",
          ]}
          cta={{ label: "Ask about supply and install" }}
          image={{
            src: "/services/material-supply.jpg",
            alt: "Bundled CLT panels staged for installation.",
          }}
        />
      </ServiceList>

      <ServiceArea />
      <SectionDivider />
      <Faq
        heading="Common Questions About Our Services"
        items={SERVICES_FAQ}
        boxed
      />

      <FinalCta
        heading="Ready to talk about your project?"
        body="Call us or send the scope through the contact form. We will tell you quickly whether it is a fit and what the next step looks like."
        ctaLabel="Talk to us about your project"
      />
    </>
  );
}
