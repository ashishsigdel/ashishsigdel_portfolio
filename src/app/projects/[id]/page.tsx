import { PortfolioLayout } from "@/components/layout";
import { Footer } from "@/components/portfolio/footer";
import { Project } from "@/components/portfolio/projects";
import React from "react";

export default function page() {
  return (
    <PortfolioLayout>
      <Project />
      <Footer />
    </PortfolioLayout>
  );
}
