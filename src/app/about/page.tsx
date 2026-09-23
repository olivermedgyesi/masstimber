import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { WhyMassTimber } from "@/components/about/why-mass-timber";
import { Beliefs } from "@/components/about/beliefs";
import { WhoWeWorkWith } from "@/components/about/who-we-work-with";
import { Capacity } from "@/components/about/capacity";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: { absolute: "About Contech Mass Timber | Mass Timber Specialists BC" },
  description:
    "Contech Mass Timber brings decades of structural construction expertise to commercial mass timber installation across BC and the Pacific Northwest.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyMassTimber />
      <Beliefs />
      <WhoWeWorkWith />
      <Capacity />
      <FinalCta
        heading="Ready to talk about your project?"
        body="If your project is in pre-construction or heading to tender, the right time to reach out is now."
      />
    </>
  );
}
