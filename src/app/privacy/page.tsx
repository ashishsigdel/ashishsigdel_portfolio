import type { Metadata } from "next";
import Navbar from "@/components/utils/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for ashishsigdel.com.np",
};

const sections = [
  {
    title: "What this site collects",
    body: "This is a personal portfolio. The only personal information collected is what you choose to share through the contact form — your name, email, company, and message — so I can reply to you.",
  },
  {
    title: "The AI assistant",
    body: "Messages you send to the AI assistant on the home page are processed to generate a response and may be kept temporarily in your browser to maintain the conversation. They are not used for advertising or sold to anyone.",
  },
  {
    title: "Cookies & analytics",
    body: "This site does not use advertising cookies or invasive trackers. Standard server logs (such as IP addresses) may be retained briefly for security and debugging.",
  },
  {
    title: "Third-party links",
    body: "Pages link out to services like GitHub, LinkedIn, and IEEE. Those sites have their own privacy practices, which I don't control.",
  },
  {
    title: "Questions",
    body: "If you'd like anything you've sent me removed, or have any question about this policy, email hi@ashishsigdel.com.np and I'll take care of it.",
  },
];

export default function PrivacyPage() {
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
              Privacy <span className="text-orange-600">Policy</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-3xl">
              Short version: I collect as little as possible, and nothing is
              ever sold or shared for advertising.
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
