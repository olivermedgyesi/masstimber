import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/site/page-placeholder";

export const metadata: Metadata = {
  title: {
    absolute: "Mass Timber Services BC | Installation, CLT, Constructability Review",
  },
  description:
    "Contech Mass Timber provides CLT and mass timber installation, constructability review, design assist, and material supply for GCs across BC and the Pacific Northwest.",
};

export default function ServicesPage() {
  return (
    <PagePlaceholder
      eyebrow="Services"
      title="Mass Timber Services for Residential, Commercial and Institutional Projects in BC"
    />
  );
}
