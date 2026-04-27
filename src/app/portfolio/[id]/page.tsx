import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, Clock } from "lucide-react";
import Navbar from "@/components/utils/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/portfolio/ProjectCard";
import {
  getHardcodedProjectByRouteId,
  hardcodedPortfolioProjects,
} from "@/lib/portfolio";
import {
  BackToTop,
  LikeButton,
  CommentSection,
} from "@/components/portfolio/Projectdetailclient";

// ─── Types ────────────────────────────────────────────────────────────────────
type PageProps = {
  params: Promise<{ id: string }>;
};

export const metadata: Metadata = {
  title: "Project — Portfolio",
  description: "Project details",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
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

// ─── Small pure server components ─────────────────────────────────────────────
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
    <main className="min-h-screen bg-[#080808] text-white antialiased overflow-x-hidden">
      <BackToTop />
      <Navbar />

      <section className="relative w-full pt-34 pb-16 px-6">
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-10">
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
                  We couldn't find a project for route id "{requestedId}". Try
                  exploring other projects below or reach out if you think this
                  is an error.
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

// ─── Page ─────────────────────────────────────────────────────────────────────
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

  return (
    <main className="min-h-screen bg-[#080808] text-white antialiased overflow-x-hidden">
      <BackToTop />
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[70vh] min-h-120 max-h-175 overflow-hidden">
        {/* Background image */}
        <img
          src={project.coverPhoto}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{ filter: "brightness(0.32) saturate(0.75)" }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-[#080808]/55 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-[#080808]/35 to-transparent" />

        {/* Film grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 h-full flex flex-col justify-end max-w-6xl mx-auto px-6 pb-14">
          {/* Breadcrumb */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-zinc-200 transition-colors mb-8 w-fit group"
          >
            <ArrowLeft
              size={12}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            <span className="tracking-widest uppercase">Portfolio</span>
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-2.5 py-1 text-[10px] font-mono font-semibold tracking-[0.15em] uppercase rounded border border-orange-500/30 bg-orange-500/10 text-orange-400">
              Project #{project.id}
            </span>
            {dateLabel && (
              <span className="text-xs font-mono text-zinc-500">
                {dateLabel}
              </span>
            )}
            <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
              <Clock size={10} />
              {minutes} min read
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tighter leading-[0.92] text-white mb-5"
            style={{
              fontFamily: "'Syne', 'Arial Black', sans-serif",
              letterSpacing: "-0.03em",
            }}
          >
            {project.title}
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-base md:text-lg text-zinc-400 leading-relaxed font-light">
            {project.shortDescription}
          </p>
        </div>
      </section>

      {/* ── Body ──────────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_296px] gap-14 xl:gap-20">
          {/* ── Main column ──────────────────────────────────────────── */}
          <div className="space-y-12 min-w-0">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <TagPill key={tag} label={tag} />
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              {project.previewLink && (
                <Link
                  href={project.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold tracking-wide hover:bg-orange-50 transition-all duration-200"
                >
                  Live Preview
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Link>
              )}
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-all duration-200"
                >
                  Source Code
                  <Github
                    size={14}
                    className="group-hover:rotate-[8deg] transition-transform"
                  />
                </Link>
              )}
            </div>

            {/* ── About section ── */}
            <article>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[10px] font-mono font-semibold tracking-[0.2em] uppercase text-zinc-600">
                  About this project
                </span>
                <div className="flex-1 h-px bg-zinc-800" />
              </div>

              {/* Description — split by double newlines into paragraphs */}
              <div className="space-y-5">
                {(project.description ?? "")
                  .split("\n\n")
                  .filter(Boolean)
                  .map((para, i) => (
                    <p
                      key={i}
                      className="text-zinc-300/90 leading-[1.85] text-[15px] md:text-base"
                      style={{
                        fontFamily: "'Georgia', 'Times New Roman', serif",
                      }}
                    >
                      {para}
                    </p>
                  ))}
              </div>
            </article>

            {/* ── Tech highlight strip ── */}
            {tags.length > 0 && (
              <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-6">
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-600 mb-5">
                  Technologies used
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-4 py-2 rounded-xl bg-zinc-800/60 border border-zinc-700/40 text-zinc-300 text-xs font-mono font-medium tracking-wide hover:bg-zinc-700/40 hover:border-zinc-600/60 transition-all duration-150"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* ── Comments (client) ── */}
            <CommentSection />
          </div>

          {/* ── Sticky sidebar ───────────────────────────────────────── */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            {/* Engagement card */}
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/30 backdrop-blur-sm p-5 space-y-3">
              <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-600 pb-1">
                Engagement
              </p>
              <LikeButton />
            </div>

            {/* Project info card */}
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/30 p-5">
              <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-600 mb-5">
                Project Info
              </p>
              <div className="space-y-4">
                {dateLabel && (
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-zinc-600 font-mono text-xs shrink-0">
                      Published
                    </span>
                    <span className="text-zinc-300 text-xs text-right">
                      {dateLabel}
                    </span>
                  </div>
                )}
                <div className="flex items-start justify-between gap-3">
                  <span className="text-zinc-600 font-mono text-xs shrink-0">
                    Read time
                  </span>
                  <span className="text-zinc-300 text-xs">{minutes} min</span>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <span className="text-zinc-600 font-mono text-xs shrink-0">
                    Project
                  </span>
                  <span className="text-zinc-300 text-xs font-mono">
                    #{project.id}
                  </span>
                </div>
                {tags.length > 0 && (
                  <div className="pt-1 border-t border-zinc-800">
                    <span className="text-zinc-600 font-mono text-xs block mb-2.5">
                      Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-1 rounded-lg bg-zinc-800/70 text-zinc-400 font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Links card */}
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/30 p-5">
              <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-600 mb-4">
                Links
              </p>
              <div className="space-y-1">
                {project.previewLink && (
                  <Link
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2.5 px-3 -mx-3 text-sm text-zinc-400 hover:text-orange-400 hover:bg-orange-500/5 rounded-xl transition-all group"
                  >
                    <span>Live preview</span>
                    <ArrowUpRight
                      size={13}
                      className="text-zinc-700 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </Link>
                )}
                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2.5 px-3 -mx-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/40 rounded-xl transition-all group"
                  >
                    <span>GitHub repository</span>
                    <Github
                      size={13}
                      className="text-zinc-700 group-hover:text-zinc-300 transition-colors"
                    />
                  </Link>
                )}
                <Link
                  href="/portfolio"
                  className="flex items-center justify-between py-2.5 px-3 -mx-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/40 rounded-xl transition-all group"
                >
                  <span>All projects</span>
                  <ArrowLeft
                    size={13}
                    className="text-zinc-700 group-hover:text-zinc-300 rotate-180 transition-all"
                  />
                </Link>
              </div>
            </div>

            {/* Divider call-to-action */}
            <div className="rounded-2xl border border-dashed border-zinc-800/60 p-5 text-center space-y-3">
              <p className="text-xs text-zinc-600 leading-relaxed">
                Interested in working together or have questions?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors"
              >
                Get in touch
                <ArrowUpRight size={11} />
              </Link>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </main>
  );
}
