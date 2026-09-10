import { Hero } from "@/components/site/hero";
import { WhoThisIsFor } from "@/components/home/who-this-is-for";
import { ServicesOverview } from "@/components/home/services-overview";
import { HowItWorks } from "@/components/home/how-it-works";
import { Differentiator } from "@/components/home/differentiator";
import { Proof } from "@/components/home/proof";
import { Faq } from "@/components/home/faq";
import { FinalCta } from "@/components/home/final-cta";
import { SectionDivider } from "@/components/site/section-divider";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoThisIsFor />
      <SectionDivider />
      <ServicesOverview />
      <SectionDivider />
      <HowItWorks />
      <Differentiator />
      <Proof />
      <Faq />
      <FinalCta />
    </>
  );
}
