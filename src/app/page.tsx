"use client";

import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <div className="flex w-full h-full relative">
      <div className="flex flex-col flex-1 w-full max-w-450 mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <HeroSection />
        <Experience />
        <FeaturedProjects />
        <Testimonials />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}
