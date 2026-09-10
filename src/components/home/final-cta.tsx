import Image from "next/image";
import { CtaLink } from "@/components/site/cta-link";

export function FinalCta() {
  return (
    <section
      id="contact-cta"
      className="relative isolate overflow-hidden px-6 py-20 text-seashell md:px-10 md:py-28 lg:py-32"
    >
      {/* Site photograph — completed glulam colonnade (St. George's) */}
      <Image
        src="/cta/project-cta.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
        aria-hidden="true"
      />

      {/* Shade over the image for text legibility */}
      <div className="absolute inset-0 -z-10 bg-nero/70" aria-hidden="true" />

      <div className="mx-auto w-full max-w-[1280px]">
        <h2 className="max-w-3xl font-body text-3xl font-bold leading-[1.1] tracking-tight text-seashell md:text-4xl lg:text-5xl">
          Let&rsquo;s talk about your project
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-seashell/85">
          If you have a mass timber project in BC or the Pacific Northwest, we
          want to hear about it. Get in touch by phone or through the contact
          form.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <CtaLink href="#contact-cta">Get project pricing</CtaLink>
          <a
            href="tel:+16045191711"
            className="text-sm font-medium uppercase tracking-[0.14em] text-seashell/75 transition-colors hover:text-pumpkin"
          >
            or call (604) 519-1711
          </a>
        </div>
      </div>
    </section>
  );
}
