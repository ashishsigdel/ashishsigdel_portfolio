"use client";

import Clients from "@/components/Clients";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <div className="flex w-full h-full relative">
      <div className="flex flex-col flex-1 w-full max-w-450 mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <HeroSection />
        <Clients />
        <Projects />
        <Testimonials />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}
