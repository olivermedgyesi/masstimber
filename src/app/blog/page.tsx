import type { Metadata } from "next";
import { BlogHero } from "@/components/blog/blog-hero";

export const metadata: Metadata = {
  title: { absolute: "Mass Timber Construction Blog | Contech Mass Timber" },
  description:
    "Installation insights, constructability guidance, and mass timber construction thinking from the team at Contech Mass Timber in Richmond, BC.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
    </>
  );
}
