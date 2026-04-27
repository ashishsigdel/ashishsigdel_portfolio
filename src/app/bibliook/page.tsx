import BibliookHeader from "@/components/bibliook/BibliookHeader";
import BibliookHero from "@/components/bibliook/BibliookHero";
import BibliookCTA from "@/components/bibliook/BibliookCTA";
import BibliookFooter from "@/components/bibliook/BibliookFooter";

export const metadata = {
  title: "Bibliook — AI-Powered Study Workspace",
  description:
    "Your AI-powered study companion. Explore notes, ask questions, get instant answers.",
};

export default function BibliookPage() {
  return (
    <main className="min-h-screen bg-black text-white antialiased overflow-x-hidden">
      <BibliookHeader />
      <BibliookHero />
      <BibliookCTA />
      <BibliookFooter />
    </main>
  );
}
