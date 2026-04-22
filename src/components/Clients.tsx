"use client";

import { clients } from "@/data/clients";

export default function Clients() {
  return (
    <section className="w-full py-12 px-6 border-y border-zinc-900 border-dashed">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
          Trusted by forward-thinking teams
        </p>

        <div className="marquee-container w-full overflow-hidden">
          <div className="group/marquee flex items-center justify-center w-full">
            {clients.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="group/item flex min-w-28 shrink-0 flex-col items-center justify-center gap-3 cursor-pointer opacity-100 transition-opacity duration-300 group-hover/marquee:opacity-35 hover:opacity-100! px-10 md:px-16"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-10 w-auto object-contain filter-[brightness(0)_invert(1)] opacity-100"
                  loading="lazy"
                />
                <span className="text-white font-medium text-sm whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
