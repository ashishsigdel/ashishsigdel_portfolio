import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import AboutMeFeatured from "@/components/AboutMeFeatured";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full relative">
      <div className="flex flex-col flex-1 w-full max-w-450 mx-auto px-0 sm:px-6 md:px-8 lg:px-12">
        <HeroSection />
        <Experience />
        <FeaturedProjects />
        <AboutMeFeatured />
        <Blog />
      </div>
      <Footer />
    </div>
  );
}
