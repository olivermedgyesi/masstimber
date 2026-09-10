import type { Metadata } from "next";
import { aware, neueHaas } from "./fonts";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mass Timber Installation Contractor BC | Contech Mass Timber",
    template: "%s | Contech Mass Timber",
  },
  description:
    "Contech Mass Timber installs CLT, glulam, and mass timber structures for general contractors across BC and the Pacific Northwest. Call for project pricing.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${aware.variable} ${neueHaas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-seashell text-nero">
        <SiteHeader />
        <main className="flex flex-1 flex-col">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
