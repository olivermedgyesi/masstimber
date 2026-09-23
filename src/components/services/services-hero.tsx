import Image from "next/image";
import { CtaLink } from "@/components/site/cta-link";

export function ServicesHero() {
  return (
    <section className="relative isolate flex min-h-svh flex-1 flex-col justify-end overflow-hidden bg-nero">
      <Image
        src="/services/installation.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:72px_72px]"
        aria-hidden="true"
      />

      <div className="absolute inset-0 -z-10 bg-nero/55" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-nero via-nero/40 to-nero/20"
        aria-hidden="true"
      />

      <div className="relative flex w-full flex-col px-6 pb-10 pt-32 md:px-10 md:pb-12">
        <div className="contents xl:block">
          <h1 className="order-1 font-body text-3xl font-bold leading-[1.05] tracking-tight text-seashell max-w-[50rem] sm:text-4xl lg:text-[2.625rem]">
            Mass Timber Services for Residential, Commercial and Institutional
            Projects in BC
          </h1>

          <div className="order-3 mt-8 flex flex-wrap items-center gap-4">
            <CtaLink href="/contact">
              Talk to us about your project
            </CtaLink>
            <CtaLink href="#installation" variant="outline" tone="dark">
              See our services
            </CtaLink>
          </div>
        </div>

        <p className="order-2 mt-6 max-w-sm text-pretty text-sm leading-relaxed text-seashell/75 xl:order-none xl:mt-0 xl:absolute xl:bottom-12 xl:right-10 xl:text-right">
          We install, supply, and review mass timber structures for general
          contractors across BC and the Pacific Northwest. Here is what that
          scope looks like in practice.
        </p>
      </div>
    </section>
  );
}
