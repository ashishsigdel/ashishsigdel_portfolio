import { PortfolioLayout } from "@/components/layout";
import React from "react";
import "@/styles/portfolio.css";
import { DiscussProject } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { Certifications, Hero } from "@/components/portfolio/education";
import { Degrees } from "@/components/portfolio/education";

export default function page() {
  return (
    <PortfolioLayout>
      <Hero />
      <Degrees />
      <Certifications />
      <DiscussProject />
      <Footer />
    </PortfolioLayout>
  );
}
