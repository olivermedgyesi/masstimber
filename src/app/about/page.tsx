import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/site/page-placeholder";

export const metadata: Metadata = {
  title: { absolute: "About Contech Mass Timber | Mass Timber Specialists BC" },
  description:
    "Contech Mass Timber brings decades of structural construction expertise to commercial mass timber installation across BC and the Pacific Northwest.",
};

export default function AboutPage() {
  return (
    <PagePlaceholder
      eyebrow="About"
      title="Built by Builders Who Have Done the Hard Work"
    />
  );
}
