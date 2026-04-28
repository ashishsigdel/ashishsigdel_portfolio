import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock, Mail } from "lucide-react";
import Navbar from "@/components/utils/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/portfolio/ProjectCard";
import {
  getHardcodedProjectByRouteId,
  hardcodedPortfolioProjects,
} from "@/lib/portfolio";
import {
  BackToTop,
  EngagementPanel,
} from "@/components/portfolio/Projectdetailclient";
import Description from "@/components/portfolio/Description";

type PageProps = {
  params: Promise<{ id: string }>;
};

export const metadata: Metadata = {
  title: "Project — Portfolio",
  description: "Project details",
};

function readingTime(text: string) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function formatDate(iso?: string) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function TagPill({ label }: { label: string }) {
  return (
    <span className="group inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium tracking-wide rounded-full border border-zinc-700/60 bg-zinc-900/50 text-zinc-400 hover:border-orange-500/40 hover:text-orange-400 hover:bg-orange-500/5 transition-all duration-200 cursor-default">
      <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-orange-500 transition-colors" />
      {label}
    </span>
  );
}

function ProjectNotFoundState({ requestedId }: { requestedId: string }) {
  const suggestions = hardcodedPortfolioProjects
    .filter((project) => project.isEnable)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-black text-white antialiased overflow-x-clip">
      <BackToTop />
      <Navbar />

      <section className="relative w-full pt-34 pb-16 px-6">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32 left-1/2 -translate-x-1/2 w-screen"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />
          <div className="absolute left-1/2 top-0 h-52 w-[78%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(234,88,12,0.18),rgba(234,88,12,0.07)_38%,rgba(0,0,0,0)_100%)] blur-2xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10">
          <div className="rounded-3xl p-8 md:p-10 bg-linear-to-br from-[#060606]/60 to-[#0c0c0c]/60">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <div className="relative w-56 h-56 md:w-80 md:h-80">
                  <svg
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <defs>
                      <linearGradient id="blobGrad" x1="0" x2="1">
                        <stop offset="0%" stopColor="#ff6a00" />
                        <stop offset="65%" stopColor="#ffb32b" />
                        <stop offset="100%" stopColor="#ffd84a" />
                      </linearGradient>

                      <filter
                        id="bigBlur"
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                      >
                        <feGaussianBlur stdDeviation="40" result="b" />
                      </filter>

                      <filter
                        id="softBlur"
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                      >
                        <feGaussianBlur stdDeviation="18" result="s" />
                      </filter>
                    </defs>

                    <g transform="translate(300 300)">
                      <path
                        d="M-170,-40 C-200,80 -40,220 110,160 C250,100 270,-40 170,-140 C70,-240 -10,-240 -170,-40Z"
                        fill="url(#blobGrad)"
                        filter="url(#bigBlur)"
                        opacity="0.98"
                      />
                      <path
                        d="M-150,-20 C-170,60 -20,180 90,140 C200,100 220,-20 150,-120 C80,-220 -5,-200 -150,-20Z"
                        fill="url(#blobGrad)"
                        filter="url(#softBlur)"
                        opacity="1"
                      />
                      <circle cx="170" cy="-150" r="26" fill="#ffffff12" />
                      <circle cx="-170" cy="160" r="18" fill="#ffffff08" />
                    </g>
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-7xl md:text-[6.5rem] font-extrabold text-white leading-none drop-shadow-[0_8px_30px_rgba(0,0,0,0.75)]">
                      404
                    </h1>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-[10px] font-mono font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-3">
                  Portfolio
                </p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
                  Looks like this project went missing
                </h2>
                <p className="text-zinc-400 max-w-3xl leading-relaxed mb-6">
                  We couldn&apos;t find a project for route id &quot;
                  {requestedId}&quot;. Try exploring other projects below or
                  reach out if you think this is an error.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors"
                  >
                    View All Projects
                    <ArrowUpRight size={14} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-200 hover:bg-zinc-900 transition-colors"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── Suggestions ── */}
          <div className="space-y-5">
            <h2 className="text-xl md:text-2xl font-semibold text-zinc-100">
              Suggested Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {suggestions.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const projectId = Number(id);
  if (Number.isNaN(projectId)) {
    return <ProjectNotFoundState requestedId={id} />;
  }

  const project = getHardcodedProjectByRouteId(projectId);
  if (!project || !project.isEnable) {
    return <ProjectNotFoundState requestedId={id} />;
  }

  const tags = project.tags
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  const minutes = readingTime(project.description ?? "");
  const dateLabel = formatDate(project.createdAt);

  // Get suggestion projects (excluding current)
  const suggestions = hardcodedPortfolioProjects
    .filter((p) => p.isEnable && p.id !== project.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-black text-white antialiased overflow-x-hidden">
      <BackToTop />
      <Navbar />

      <article className="relative w-full pt-32 pb-24 px-6">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32 left-1/2 -translate-x-1/2 w-screen"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          <div className="absolute left-1/2 top-0 h-52 w-[78%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(234,88,12,0.18),rgba(234,88,12,0.07)_38%,rgba(0,0,0,0)_100%)] blur-2xl" />
        </div>

        <div className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12 font-mono text-sm"
            >
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>

            <header className="flex flex-col gap-6 mb-12">
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-mono text-zinc-300 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white !leading-tight">
                {project.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 mt-4 text-zinc-400">
                {dateLabel && (
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-zinc-500" />
                    <span>{dateLabel}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-zinc-500" />
                  <span>{minutes} min read</span>
                </div>
              </div>
            </header>

            <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden mb-6 border border-zinc-800">
              <img
                src={project.coverPhoto}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex justify-end mb-16">
              <EngagementPanel
                githubLink={project.githubLink}
                previewLink={project.previewLink}
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-zinc-300 prose-headings:text-white prose-a:text-orange-500 hover:prose-a:text-orange-400">
              <Description project={project} />
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            {suggestions.length > 0 && (
              <div className="mt-24 pt-12 border-t border-zinc-800">
                <h2 className="text-2xl font-bold text-zinc-100 mb-8">
                  Suggested Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {suggestions.map((p) => (
                    <ProjectCard key={p.id} project={p} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Spacer before footer */}
      <div className="h-16" />
      <Footer />
    </main>
  );
}
