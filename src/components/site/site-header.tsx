"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/*
  Single-page site for now — nav targets are sections of the homepage, not
  routes. Restore route hrefs here if /services, /about etc. come back.
*/
const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#how-it-works", label: "Process" },
  { href: "/#projects", label: "Projects" },
  { href: "/#faq", label: "FAQ" },
] as const;

const CTA_HREF = "/#contact-cta";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Transparent over the hero; solid once the mobile panel is open behind it.
  const solid = menuOpen;

  return (
    <header
      className={[
        "absolute inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-nero/10 bg-seashell/95 backdrop-blur"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          aria-label="Contech Mass Timber — home"
          className="inline-flex shrink-0"
        >
          <Image
            src={
              solid
                ? "/brand/logo-primary-color.png"
                : "/brand/logo-primary-white-orange.png"
            }
            alt="Contech Mass Timber"
            width={220}
            height={60}
            priority
            className="h-8 w-auto md:h-9"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b-2 border-transparent pb-1 text-xs font-medium uppercase tracking-[0.16em] text-seashell/75 transition-colors hover:border-pumpkin hover:text-seashell"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={CTA_HREF}
            className="inline-flex items-center bg-pumpkin px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] text-seashell transition-colors hover:bg-[#c74d08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pumpkin"
          >
            Get Project Pricing
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={[
            "-mr-2 inline-flex h-10 w-10 items-center justify-center md:hidden",
            solid ? "text-nero" : "text-seashell",
          ].join(" ")}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path
                d="M4 4l14 14M18 4L4 18"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="square"
              />
            ) : (
              <path
                d="M3 6h16M3 11h16M3 16h16"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="square"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile panel — jumping to a section doesn't change the route, so each
          link closes the panel itself. */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-nero/10 bg-seashell md:hidden"
        >
          <div className="flex flex-col px-6 pb-6 pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-nero/10 py-4 text-sm font-medium uppercase tracking-[0.16em] text-nero/70"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={CTA_HREF}
              onClick={() => setMenuOpen(false)}
              className="mt-6 inline-flex items-center justify-center bg-pumpkin px-5 py-4 text-xs font-medium uppercase tracking-[0.14em] text-seashell"
            >
              Get Project Pricing
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
