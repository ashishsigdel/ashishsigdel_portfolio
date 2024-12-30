import { PortfolioLayout } from "@/components/layout";
import React from "react";
import "@/styles/portfolio.css";
import { DiscussProject } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { Hero, Projects } from "@/components/portfolio/projects";

export default function page() {
  return (
    <PortfolioLayout>
      <Hero />
      <Projects />
      <DiscussProject />
      <Footer />
    </PortfolioLayout>
  );
}
