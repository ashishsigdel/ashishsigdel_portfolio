import type { Metadata } from "next";
import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About — Ashish Sigdel | AI/ML + Full Stack Engineer",
  description:
    "Learn about Ashish Sigdel — a full-stack developer and AI/ML engineer building intelligent digital systems from Nepal.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
