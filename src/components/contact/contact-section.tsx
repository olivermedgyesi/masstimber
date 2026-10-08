import type { ReactNode } from "react";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { ContactForm } from "@/components/contact/contact-form";

const EMAIL: string | null = "info@contechconstructionltd.com";
const OFFICE_HOURS: string | null = "7:00 am to 5:00 pm";

function DetailRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-t border-nero/15 pt-5">
      <dt className="text-xs font-medium uppercase tracking-[0.16em] text-nero/55">
        {label}
      </dt>
      <dd className="mt-2 text-lg leading-relaxed text-nero">{children}</dd>
    </div>
  );
}

const linkClass =
  "font-medium underline decoration-pumpkin decoration-2 underline-offset-4 transition-colors hover:text-pumpkin";

export function ContactSection() {
  return (
    <Section id="contact-form">
      <div className="grid gap-16 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7">
          <SectionHeading>Send Us Your Project Details</SectionHeading>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>

        <aside className="md:col-span-5 md:border-l md:border-nero/15 md:pl-10">
          <SectionHeading className="[&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:lg:text-3xl">
            Direct Contact
          </SectionHeading>

          <dl className="mt-8 grid gap-6">
            <DetailRow label="Phone">
              <a href="tel:+16045191711" className={linkClass}>
                (604) 519-1711
              </a>
            </DetailRow>

            {EMAIL ? (
              <DetailRow label="Email">
                <a href={`mailto:${EMAIL}`} className={linkClass}>
                  {EMAIL}
                </a>
              </DetailRow>
            ) : null}

            <DetailRow label="Address">
              <a
                href="https://www.google.com/maps/search/?api=1&query=12860+Clarke+Pl+%23150+Richmond+BC+V6V+2H1"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-pumpkin"
              >
                12860 Clarke Pl #150
                <br />
                Richmond, BC V6V 2H1
              </a>
            </DetailRow>

            {OFFICE_HOURS ? (
              <DetailRow label="Office hours">{OFFICE_HOURS}</DetailRow>
            ) : null}
          </dl>
        </aside>
      </div>
    </Section>
  );
}
