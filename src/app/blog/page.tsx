import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/site/page-placeholder";

export const metadata: Metadata = {
  title: { absolute: "Mass Timber Construction Blog | Contech Mass Timber" },
  description:
    "Installation insights, constructability guidance, and mass timber construction thinking from the team at Contech Mass Timber in Richmond, BC.",
};

export default function BlogPage() {
  return <PagePlaceholder eyebrow="Blog" title="Mass Timber Insights" />;
}
