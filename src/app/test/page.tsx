"use client";
import { PortfolioLayout } from "@/components/layout";
import { Hero } from "@/components/portfolio/home";
import React, { useEffect, useState } from "react";
import "@/styles/portfolio.css";
import { About, KeyPoints } from "@/components/portfolio/about";
import { MyWork } from "@/components/portfolio/work";
import { DiscussProject } from "@/components/portfolio/contact";
import { TechBehind } from "@/components/portfolio/tech";
import { Footer } from "@/components/portfolio/footer";

export default function page() {
  return (
    <>
      <PortfolioLayout>
        <Hero />
      </PortfolioLayout>
    </>
  );
}
