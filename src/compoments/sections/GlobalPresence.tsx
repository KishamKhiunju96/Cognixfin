"use client";

import { Network, Server, Globe2, CloudLightning } from "lucide-react";

const hubs = [
  {
    icon: <Network className="h-7 w-7 text-white/80" />,
    city: "London",
    region: "EU Hub",
    latency: "10ms Latency",
  },
  {
    icon: <Server className="h-7 w-7 text-white/80" />,
    city: "New York",
    region: "US East",
    latency: "8ms Latency",
  },
  {
    icon: <Globe2 className="h-7 w-7 text-white/80" />,
    city: "Singapore",
    region: "APAC South",
    latency: "22ms Latency",
  },
  {
    icon: <CloudLightning className="h-7 w-7 text-white/80" />,
    city: "Tokyo",
    region: "APAC North",
    latency: "18ms Latency",
  },
];

export default function GlobalPresence() {
  return (
    <section className="py-14 bg-[#f4f6fb]">
      <div className="w-full px-6 sm:px-12 lg:px-20 space-y-8">

        {/* Header — centered */}
        <div className="text-center space-y-2.5">
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
            Global Presence
          </h2>
          <p className="text-sm text-zinc-500 font-normal max-w-sm mx-auto leading-relaxed">
            Operating at the speed of business with dedicated infrastructure nodes across four continents.
          </p>
        </div>

        {/* Dark Hub Card */}
        <div className="w-full rounded-2xl bg-[#0f172a] px-6 py-10 sm:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {hubs.map((hub, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 text-center px-6 py-4"
              >
                {/* Icon — no box border, just the icon */}
                <div className="mb-1">
                  {hub.icon}
                </div>

                {/* City & region/latency */}
                <div className="space-y-1">
                  <p className="text-base font-bold text-white tracking-tight">{hub.city}</p>
                  <p className="text-[11px] text-slate-400 font-normal">
                    {hub.region} • {hub.latency}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
