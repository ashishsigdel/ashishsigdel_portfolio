"use client";

import Navbar from "@/components/utils/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutConnect from "@/components/contact/Contact";

export default function AboutPageContent() {
  return (
    <div className="flex flex-col w-full h-full relative">
      <Navbar />
      <div className="flex flex-col flex-1 w-full max-w-450 mx-auto px-0 sm:px-6 md:px-8 lg:px-12">
        <AboutHero />
        <AboutStory />
        <AboutConnect />
      </div>
      <Footer />
    </div>
  );
}
