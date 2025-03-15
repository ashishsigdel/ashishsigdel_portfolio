import { PortfolioLayout } from "@/components/layout";
import React from "react";
import "@/styles/portfolio.css";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function page() {
  return (
    <PortfolioLayout>
      <Contact />
      <Footer />
    </PortfolioLayout>
  );
}
