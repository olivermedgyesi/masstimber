import localFont from "next/font/local";

/*
  Brand typography — system A from brand-guidelines.md:
    Headlines   → Aware Bold
    Subheads    → Neue Haas Grotesk Display Pro, Medium (500)
    Body        → Neue Haas Grotesk Display Pro, Roman (400)

  NOTE: AwareBold.ttf is currently the TRIAL file — uppercase A–Z, ".", "!",
  and space only (no lowercase, digits, comma, or apostrophe). Use it for
  all-caps display headings only until the full licensed file is supplied.
*/

export const aware = localFont({
  src: "./fonts/AwareBold.ttf",
  variable: "--font-aware",
  weight: "700",
  display: "swap",
  fallback: ["Arial Narrow", "system-ui", "sans-serif"],
});

export const neueHaas = localFont({
  src: [
    { path: "./fonts/NeueHaasDisplayLight.ttf", weight: "300", style: "normal" },
    { path: "./fonts/NeueHaasDisplayRoman.ttf", weight: "400", style: "normal" },
    { path: "./fonts/NeueHaasDisplayMedium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/NeueHaasDisplayBold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-neue-haas",
  display: "swap",
  fallback: ["Helvetica Neue", "Helvetica", "Arial", "system-ui", "sans-serif"],
});
