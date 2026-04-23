"use client";

import { ChartGantt, ChartNetwork, Dot, Globe } from "lucide-react";
import { clients } from "@/data/clients";
import LogoAvatar from "@/components/ui/LogoAvatar";

type ExperienceItem = {
  company: string;
  role: string;
  summary: string;
  status: "Completed" | "Ongoing";
  startDate: string;
  endDate?: string;
  logo?: string;
  companyURL?: string;
  mode?: "Remote" | "On-site";
  location?: string;
};

const experiences: ExperienceItem[] = [
  {
    company: "SoftUp",
    role: "Intern + Full Stack Developer",
    summary:
      "Gained hands-on production experience as a full-stack intern, building scalable frontend and backend systems, and shipping real features used by real users.",
    status: "Completed",
    startDate: "2024-01-01",
    endDate: "2025-12-31",
    logo: "/company/softup.svg",
    companyURL: "https://softup.io",
    mode: "On-site",
    location: "Pokhara, Nepal",
  },
  {
    company: "Neurithum",
    role: "AI/ML + Full Stack Engineer",
    summary:
      "Designing and shipping AI-powered electronic healthcare systems — end to end, from data models to production interfaces.",
    status: "Ongoing",
    startDate: "2026-01-01",
    logo: "",
    companyURL: "https://neurithum.com",
    mode: "Remote",
    location: "Australia",
  },
];

const displayDate = (value: string) =>
  new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
  });

const periodLabel = (item: ExperienceItem) => {
  const start = displayDate(item.startDate);
  const end = item.endDate
    ? `${displayDate(item.endDate) !== displayDate(item.startDate) ? ` - ${displayDate(item.endDate)}` : ""}`
    : " - Present";
  return `${start}${end}`;
};

const timelineData = [...experiences].sort(
  (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
);

const clientCollaborations = [
  {
    partner: "Pokhara Bike Rental",
    work: "Architected and launched a full-stack, production-ready bike rental platform from the ground up.",
    websiteURL: "https://pokharabikerental.com",
  },
  {
    partner: "Windor Group",
    work: "Designed and developed the company website for interior projects.",
    websiteURL: "https://windor.com.np",
  },
  {
    partner: "Fantasy Battle",
    work: "Built the product website and core app experience for a competitive fantasy battle platform.",
    logoBG: "#000000",
  },
].map((item) => ({
  ...item,
  logo: clients.find((client) => client.name === item.partner)?.logo,
}));

export default function Experience() {
  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <div className="space-y-4">
          <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Professional <span className="text-orange-600">Journey</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-3xl">
            I architect and ship full-stack systems — from robust backend APIs
            to AI-powered features that work in the real world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-900">
                <ChartGantt size={20} className="text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Roles & Timeline
              </h3>
            </div>

            <div className="relative">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-linear-to-b from-zinc-700 via-zinc-800 to-zinc-700" />

              <div className="space-y-5">
                {timelineData.map((item) => (
                  <article
                    key={`${item.company}-${item.startDate}`}
                    className="relative pl-10"
                  >
                    <span className="absolute left-0 top-5 flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 bg-black">
                      <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
                    </span>

                    <div className="rounded-2xl border border-zinc-800 bg-black/40 p-5">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                        <p className="text-zinc-300 font-medium flex items-center gap-0.5">
                          {periodLabel(item)} <Dot /> {item.mode} <Dot />
                          {item.location}
                        </p>
                        <span className="text-xs font-medium uppercase tracking-wider text-zinc-400 border border-zinc-700 rounded-full px-3 py-1">
                          {item.status}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <LogoAvatar
                          size={{ w: 40, h: 40 }}
                          bg="#ffffff"
                          name={item.company}
                          image={item.logo}
                          className=""
                        />
                        <h4 className="text-lg md:text-xl font-semibold text-white">
                          {item.company}
                        </h4>
                        {item.companyURL && (
                          <button
                            type="button"
                            onClick={() =>
                              window.open(
                                item.companyURL,
                                "_blank",
                                "noopener,noreferrer",
                              )
                            }
                            aria-label={`Open ${item.company} website`}
                            className="cursor-pointer text-zinc-500 hover:text-zinc-300 transition-colors"
                          >
                            <Globe size={16} />
                          </button>
                        )}
                      </div>

                      <p className="text-zinc-300 mt-1">{item.role}</p>
                      <p className="text-zinc-400 mt-3 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-900">
                <ChartNetwork size={20} className="text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Worked With Real Clients
              </h3>
            </div>

            <p className="text-zinc-400 mb-5">
              Client collaborations where I worked directly with teams and
              delivered real products.
            </p>

            <ul className="space-y-3">
              {clientCollaborations.map((item) => (
                <li
                  key={item.partner}
                  className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-black/40 p-4"
                >
                  <LogoAvatar
                    size={{ w: 64, h: 64 }}
                    bg={item.logoBG}
                    name={item.partner}
                    image={item.logo}
                    className="p-1"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-zinc-100 font-medium">
                        {item.partner}
                      </p>
                      {item.websiteURL && (
                        <button
                          type="button"
                          onClick={() =>
                            window.open(
                              item.websiteURL,
                              "_blank",
                              "noopener,noreferrer",
                            )
                          }
                          aria-label={`Visit ${item.partner} website`}
                          className="cursor-pointer text-zinc-500 hover:text-zinc-300 transition-colors"
                        >
                          <Globe size={16} />
                        </button>
                      )}
                    </div>
                    <p className="text-zinc-300 text-sm mt-1">{item.work}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
