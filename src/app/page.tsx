import { PortfolioLayout } from "@/components/layout";
import { Hero } from "@/components/portfolio/home";
import React from "react";
import "@/styles/portfolio.css";
import { About } from "@/components/portfolio/about";

export default function page() {
  return (
    <PortfolioLayout>
      <Hero />
      <About />
    </PortfolioLayout>
  );
}
