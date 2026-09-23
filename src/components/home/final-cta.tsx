import Image from "next/image";
import { CtaLink } from "@/components/site/cta-link";

type FinalCtaProps = {
  heading?: string;
  body?: string;
  ctaLabel?: string;
};

export function FinalCta({
  heading = "Let’s talk about your project",
  body = "If you have a mass timber project in BC or the Pacific Northwest, we want to hear about it. Get in touch by phone or through the contact form.",
  ctaLabel = "Get project pricing",
}: FinalCtaProps) {
  return (
    <section
      id="contact-cta"
      className="relative isolate overflow-hidden px-6 pb-32 pt-20 text-seashell md:px-10 md:pb-40 md:pt-28 lg:pb-48 lg:pt-32"
    >
      <Image
        src="/cta/project-cta.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(46,46,46,0.7)_0%,rgba(46,46,46,0.72)_50%,rgba(46,46,46,0.92)_82%,#2e2e2e_100%)]"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1280px]">
        <h2 className="max-w-3xl font-body text-3xl font-bold leading-[1.1] tracking-tight text-seashell md:text-4xl lg:text-5xl">
          {heading}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-seashell/85">
          {body}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <CtaLink href="/contact">{ctaLabel}</CtaLink>
          <a
            href="tel:+16045191711"
            className="-my-2 py-2 text-sm font-medium uppercase tracking-[0.14em] text-seashell/75 transition-colors hover:text-pumpkin"
          >
            or call (604) 519-1711
          </a>
        </div>
      </div>
    </section>
  );
}
