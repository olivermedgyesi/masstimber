"use client";

import { useState } from "react";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";

const FAQS = [
  {
    q: "What types of mass timber do you install?",
    a: "We install CLT (cross-laminated timber), glulam, NLT (nail-laminated timber), DLT (dowel-laminated timber), and hybrid timber-steel structures.",
  },
  {
    q: "Do you work outside of BC?",
    a: "Yes. We serve the Pacific Northwest, including projects in Alberta and Washington State. We are open to discussing projects across western Canada and the United States Pacific Northwest.",
  },
  {
    q: "Can you get involved before the design is finished?",
    a: "That is where we add a considerable amount of value. Our constructability review and design assist services are specifically built for pre-construction involvement. If your structural drawings are still in progress, that is the right time to bring us in.",
  },
  {
    q: "How do you price projects?",
    a: "We provide fixed contract pricing based on scope, drawings, and schedule. We do not work on open-ended time and materials. You get a number before we mobilize.",
  },
  {
    q: "How do we get started?",
    a: "Call us or fill out the contact form. We will let you know quickly whether the project is a fit and what the next step looks like.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq">
      <SectionHeading>Common questions</SectionHeading>

      <div className="mt-12 border-t border-nero/15">
        {FAQS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.q} className="border-b border-nero/15">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-lg font-medium text-nero">{item.q}</span>
                  <span
                    className="relative h-4 w-4 shrink-0 text-pumpkin"
                    aria-hidden="true"
                  >
                    <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
                    <span
                      className={[
                        "absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current transition-transform duration-200",
                        isOpen ? "scale-y-0" : "scale-y-100",
                      ].join(" ")}
                    />
                  </span>
                </button>
              </h3>
              <div
                className={[
                  "grid transition-all duration-200",
                  isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]",
                ].join(" ")}
              >
                <div className="overflow-hidden">
                  <p className="max-w-[70ch] leading-relaxed text-nero/70">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
