import { PortfolioLayout } from "@/components/layout";
import React from "react";
import "@/styles/portfolio.css";
import { Footer } from "@/components/portfolio/footer";
import { Projects } from "@/components/portfolio/projects";

export default function page() {
  return (
    <PortfolioLayout>
      <Projects />
      <Footer />
    </PortfolioLayout>
  );
}
