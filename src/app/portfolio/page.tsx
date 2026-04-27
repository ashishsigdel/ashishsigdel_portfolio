import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/utils/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { getProjects } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio — Ashish Sigdel",
  description: "Projects and experiments by Ashish Sigdel",
};

type PageProps = {
  searchParams?:
    | Record<string, string | string[] | undefined>
    | Promise<Record<string, string | string[] | undefined>>;
};

function parsePageParam(value: string | string[] | undefined) {
  const raw = Array.isArray(value) ? value[0] : value;
  const parsed = Number(raw);

  if (!raw || Number.isNaN(parsed) || parsed < 1) {
    return 1;
  }

  return Math.floor(parsed);
}

export default async function PortfolioPage({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams
    ? await searchParams
    : ({} as Record<string, string | string[] | undefined>);
  const requestedPage = parsePageParam(resolvedSearchParams.page);
  const data = await getProjects(requestedPage);
  const enabledProjects = data.projects.filter((p) => p.isEnable);

  return (
    <main className="min-h-screen bg-black text-white antialiased overflow-x-hidden">
      <Navbar />

      <section className="relative w-full pt-34 pb-12 px-6 overflow-visible">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32 left-1/2 -translate-x-1/2 w-screen"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />
          <div className="absolute left-1/2 top-0 h-52 w-[78%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(234,88,12,0.18),rgba(234,88,12,0.07)_38%,rgba(0,0,0,0)_100%)] blur-2xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12">
          <div className="space-y-4">
            <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Selected <span className="text-orange-600">Projects</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-3xl">
              A live feed of my recent projects pulled directly from my API.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
            {enabledProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/80 px-5 py-4 text-sm text-zinc-400">
            <p>
              Showing{" "}
              <span className="text-zinc-200">{enabledProjects.length}</span>{" "}
              projects from page{" "}
              <span className="text-zinc-200">{data.currentPage}</span> of{" "}
              <span className="text-zinc-200">{data.totalPages}</span>
            </p>
            <p>
              Total available projects:{" "}
              <span className="text-zinc-200">{data.total}</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link
              href={`/portfolio?page=${Math.max(1, data.currentPage - 1)}`}
              aria-disabled={data.currentPage <= 1}
              className="inline-flex items-center rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-900 aria-disabled:pointer-events-none aria-disabled:opacity-40"
            >
              Prev
            </Link>

            {Array.from({ length: data.totalPages }, (_, i) => i + 1).map(
              (page) => (
                <Link
                  key={page}
                  href={`/portfolio?page=${page}`}
                  aria-current={page === data.currentPage ? "page" : undefined}
                  className="inline-flex min-w-10 items-center justify-center rounded-full border px-3 py-2 text-sm font-semibold transition-colors border-zinc-700 text-zinc-300 hover:bg-zinc-900 aria-[current=page]:border-orange-600 aria-[current=page]:bg-orange-600/15 aria-[current=page]:text-orange-500"
                >
                  {page}
                </Link>
              ),
            )}

            <Link
              href={`/portfolio?page=${Math.min(data.totalPages, data.currentPage + 1)}`}
              aria-disabled={data.currentPage >= data.totalPages}
              className="inline-flex items-center rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-900 aria-disabled:pointer-events-none aria-disabled:opacity-40"
            >
              Next
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
