import { PortfolioLayout } from "@/components/layout";
import { Hero } from "@/components/portfolio/home";
import ThemeToggle from "@/utils/ThemeToggler";
import React from "react";

export default function page() {
  return (
    <PortfolioLayout>
      <Hero />
    </PortfolioLayout>
  );
}
