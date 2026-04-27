import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import type { Project } from "@/lib/portfolio";

type ProjectCardProps = {
  project: Project;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

function truncateWithEllipsis(text: string, maxChars: number) {
  if (text.length <= maxChars) {
    return text;
  }

  return `${text.slice(0, maxChars).trimEnd()}...`;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const tags = project.tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  return (
    <Link
      href={`/portfolio/${project.id}`}
      className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/90 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80 block h-full pb-3"
    >
      <div className="relative h-56 w-full overflow-hidden border-b border-zinc-800">
        <img
          src={project.coverPhoto}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/20 to-transparent" />
      </div>

      <div className="p-6 flex h-80 flex-col gap-5">
        <div className="flex min-h-16 items-start justify-between gap-4">
          <h2
            title={project.title}
            className="text-2xl font-semibold tracking-tight leading-8 min-h-16 line-clamp-2 wrap-break-word"
          >
            {truncateWithEllipsis(project.title, 54)}
          </h2>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-zinc-700 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-zinc-400">
            <CalendarDays size={12} />
            {formatDate(project.createdAt)}
          </span>
        </div>

        <p
          title={project.shortDescription}
          className="text-zinc-400 text-sm leading-6 min-h-18 line-clamp-3"
        >
          {truncateWithEllipsis(project.shortDescription, 150)}
        </p>

        <div className="flex min-h-16 flex-wrap content-start gap-2 overflow-hidden">
          {tags.map((tag) => (
            <span
              key={`${project.id}-${tag}`}
              className="rounded-full border border-zinc-700/90 bg-zinc-900/80 px-3 py-1 text-xs font-medium text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-end pt-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-3 py-1.5 text-xs font-semibold text-zinc-200 transition-colors group-hover:bg-zinc-300 group-hover:text-black">
            View Details
            <ArrowUpRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}
