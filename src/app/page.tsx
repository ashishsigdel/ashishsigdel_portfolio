import { PortfolioLayout } from "@/components/layout";
import { Hero } from "@/components/portfolio/home";
import "@/styles/portfolio.css";
import { About } from "@/components/portfolio/about";
import { MyWork } from "@/components/portfolio/work";
import { DiscussProject } from "@/components/portfolio/contact";
import { TechBehind } from "@/components/portfolio/tech";
import { Footer } from "@/components/portfolio/footer";

export default function page() {
  return (
    <>
      <PortfolioLayout>
        <Hero />
        <About />
        <MyWork />
        <TechBehind />
        <DiscussProject />
        <Footer />
      </PortfolioLayout>
    </>
  );
}
