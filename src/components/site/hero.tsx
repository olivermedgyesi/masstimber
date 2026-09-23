"use client";

import { useEffect, useRef } from "react";
import { CtaLink } from "@/components/site/cta-link";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      video.pause();
      return;
    }
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <section className="relative isolate flex min-h-svh flex-1 flex-col justify-end overflow-hidden bg-nero">
      <video
        ref={videoRef}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero/hero-poster.jpg"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/hero/hero.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:72px_72px]"
        aria-hidden="true"
      />

      <div className="absolute inset-0 -z-10 bg-nero/55" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-nero via-nero/40 to-nero/20"
        aria-hidden="true"
      />

      <div className="relative flex w-full flex-col px-6 pb-10 pt-32 md:gap-10 md:px-10 md:pb-12">
        <div className="contents md:block">
          <h1 className="order-1 font-body text-4xl font-bold leading-[1.05] tracking-tight text-seashell sm:text-5xl md:whitespace-nowrap">
            Mass timber installation for
            <br />
            BC&rsquo;s most demanding structures
          </h1>

          <div className="order-3 mt-8 flex flex-wrap items-center gap-4">
            <CtaLink href="/contact">Get project pricing</CtaLink>
            <CtaLink href="#services" variant="outline" tone="dark">
              Our services
            </CtaLink>
          </div>

          <p className="order-4 mt-8 text-xs italic tracking-wide text-seashell/45">
            A division of Contech Construction Ltd, with roots in rough
            carpentry construction going back to&nbsp;1989.
          </p>
        </div>

        <p className="order-2 mt-6 max-w-sm text-pretty text-sm leading-relaxed text-seashell/75 md:order-none md:mt-0 md:absolute md:bottom-12 md:right-10 md:text-right">
          CLT, glulam, and engineered timber structures &mdash; erected for
          general contractors across BC and the Pacific Northwest.
        </p>
      </div>
    </section>
  );
}
