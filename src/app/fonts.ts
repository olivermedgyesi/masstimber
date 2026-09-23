import localFont from "next/font/local";

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
