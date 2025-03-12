"use client";
import { PortfolioLayout } from "@/components/layout";
import { Hero, PreLoading } from "@/components/portfolio/home";
import React, { useEffect, useState } from "react";
import "@/styles/portfolio.css";
import { About, KeyPoints } from "@/components/portfolio/about";
import { MyWork } from "@/components/portfolio/work";
import { DiscussProject } from "@/components/portfolio/contact";
import { TechBehind } from "@/components/portfolio/tech";
import { Footer } from "@/components/portfolio/footer";

export default function page() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {/* {isVisible ? ( */}
      <PortfolioLayout>
        <Hero />
        <About />
        <KeyPoints />
        <MyWork />
        <TechBehind />
        <DiscussProject />
        <Footer />
      </PortfolioLayout>
      {/* ) : ( */}
      {/* <PreLoading /> */}
      {/* )} */}
    </>
  );
}
