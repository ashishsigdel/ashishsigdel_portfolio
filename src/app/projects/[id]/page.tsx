import { PortfolioLayout } from "@/components/layout";
import { DiscussProject } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { Project } from "@/components/portfolio/projects";
import React from "react";

export default function page() {
  return (
    <PortfolioLayout>
      <Project />
      <DiscussProject />
      <Footer />
    </PortfolioLayout>
  );
}
