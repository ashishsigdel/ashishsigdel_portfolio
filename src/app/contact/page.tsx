import { PortfolioLayout } from "@/components/layout";
import React from "react";
import "@/styles/portfolio.css";
import { Contact, DiscussProject } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function page() {
  return (
    <PortfolioLayout>
      <Contact />
      <Footer />
    </PortfolioLayout>
  );
}
