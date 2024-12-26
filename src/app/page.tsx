import { PortfolioLayout } from "@/components/layout";
import ThemeToggle from "@/utils/ThemeToggler";
import React from "react";

export default function page() {
  return (
    <PortfolioLayout>
      <ThemeToggle />
    </PortfolioLayout>
  );
}
