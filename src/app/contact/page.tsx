import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/site/page-placeholder";

export const metadata: Metadata = {
  title: { absolute: "Contact Contech Mass Timber | BC and Pacific Northwest" },
  description:
    "Contact Contech Mass Timber to discuss your project. We work with general contractors across BC and the Pacific Northwest on commercial and institutional mass timber projects.",
};

export default function ContactPage() {
  return (
    <PagePlaceholder eyebrow="Contact" title="Talk to Us About Your Project" />
  );
}
