import { PortfolioLayout } from "@/components/layout";
import React from "react";
import "@/styles/portfolio.css";
import { DiscussProject } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function page() {
  return (
    <PortfolioLayout>
      <DiscussProject />
      <Footer />
    </PortfolioLayout>
  );
}
