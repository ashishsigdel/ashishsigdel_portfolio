import type { Metadata } from "next";
import Navbar from "@/components/utils/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for ashishsigdel.com.np",
};

const sections = [
  {
    title: "Use of this site",
    body: "This website is a personal portfolio provided for information about my work. You're welcome to browse, share links, and reach out — just don't misuse the contact form or the AI assistant (no spam, abuse, or attempts to break things).",
  },
  {
    title: "Content & code",
    body: "Articles, project write-ups, and visuals on this site are my own work unless otherwise credited. Open-source projects linked here are governed by the licenses in their respective repositories.",
  },
  {
    title: "AI assistant answers",
    body: "The AI assistant answers questions about my work on a best-effort basis. Its responses are generated automatically and may occasionally be inaccurate — treat them as informal information, not professional advice.",
  },
  {
    title: "External services",
    body: "Links to external sites (GitHub, LinkedIn, IEEE, client websites) are provided for convenience. I'm not responsible for their content or availability.",
  },
  {
    title: "Changes",
    body: "These terms may be updated as the site evolves. Continued use of the site after changes means you accept the updated terms.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white antialiased overflow-x-hidden">
      <Navbar />

      <section className="relative w-full pt-34 pb-24 px-6 overflow-visible">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32 left-1/2 -translate-x-1/2 w-screen"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />
          <div className="absolute left-1/2 top-0 h-52 w-[78%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(234,88,12,0.18),rgba(234,88,12,0.07)_38%,rgba(0,0,0,0)_100%)] blur-2xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-12">
          <div className="space-y-4">
            <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
              Legal
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Terms of <span className="text-orange-600">Use</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-3xl">
              The ground rules for using this site — kept short and human.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
              >
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
                  {section.title}
                </p>
                <p className="text-zinc-400 leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
