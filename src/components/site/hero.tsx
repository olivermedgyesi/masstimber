"use client";

import { useEffect, useRef } from "react";
import { CtaLink } from "@/components/site/cta-link";

/*
  Homepage hero.

  Background video (public/hero/) is cut from ~/Downloads/Hero Video.mp4 — a
  ~11s crossfade of two St. George's School shots (exterior glulam colonnade →
  interior roof trusses), 1600x900, H.264, no audio, ~1.9 MB. Poster matches the
  first frame. Reduced-motion users get the poster only.

  H1 is set in Neue Haas Grotesk Bold for now. The brand headline face is Aware
  (all-caps), but the supplied Aware file is the trial cut with no lowercase or
  apostrophe, so it can't set this line as written ("BC's"). Swap to
  `font-display uppercase` once the full licensed Aware is in, or if the line
  is reworded without the possessive.
*/
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!prefersReducedMotion) {
      video.play().catch(() => {
        /* autoplay blocked — poster stays visible */
      });
    }
  }, []);

  return (
    <section className="relative isolate flex min-h-svh flex-1 flex-col justify-end overflow-hidden bg-nero">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
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

      {/* Architectural grid — texture under the video, and the no-video fallback */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:72px_72px]"
        aria-hidden="true"
      />

      {/* Legibility scrim */}
      <div className="absolute inset-0 -z-10 bg-nero/55" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-nero via-nero/40 to-nero/20"
        aria-hidden="true"
      />

      {/* Content — anchored bottom, headline hard into the left corner, supporting copy into the right */}
      <div className="relative flex w-full flex-col gap-10 px-6 pb-10 pt-32 md:px-10 md:pb-12">
        <div className="md:max-w-none">
          <h1 className="font-body text-4xl font-bold leading-[1.05] tracking-tight text-seashell sm:text-5xl md:whitespace-nowrap">
            Mass timber installation for
            <br />
            BC&rsquo;s most demanding structures
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CtaLink href="#contact-cta">Get project pricing</CtaLink>
            <CtaLink href="#services" variant="outline" tone="dark">
              Our services
            </CtaLink>
          </div>

          <p className="mt-8 text-xs italic tracking-wide text-seashell/45">
            A division of Contech Construction Ltd, with roots in rough carpentry
            construction going back to&nbsp;1989.
          </p>
        </div>

        <p className="max-w-sm text-pretty text-sm leading-relaxed text-seashell/75 md:absolute md:bottom-12 md:right-10 md:text-right">
          CLT, glulam, and engineered timber structures &mdash; erected for
          general contractors across BC and the Pacific Northwest.
        </p>
      </div>
    </section>
  );
}
