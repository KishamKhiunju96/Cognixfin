"use client";

import { useState } from "react";
import { Globe2 } from "lucide-react";

export default function GlobalInfrastructure() {
  const [activeHub, setActiveHub] = useState<string | null>(null);

  const hubs = [
    { id: "ny", name: "New York", x: "25%", y: "38%", latency: "12ms" },
    { id: "ldn", name: "London", x: "47%", y: "30%", latency: "8ms" },
    { id: "tky", name: "Tokyo", x: "82%", y: "42%", latency: "15ms" },
    { id: "sgp", name: "Singapore", x: "74%", y: "62%", latency: "11ms" },
  ];

  return (
    <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-brand-navy text-white py-24 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.08),transparent_50%)] pointer-events-none" />

      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-4 space-y-6">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan">
              <Globe2 className="h-4.5 w-4.5" />
              <span>GLOBAL NETWORKS</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Global Presence, <br />
              Zero Latency.
            </h2>
            <p className="text-sm text-slate-400 font-normal leading-relaxed">
              Our infrastructure is co-located across Tier-1 datacenters in primary liquidity hubs, ensuring sub-millisecond execution times and robust failover guarantees.
            </p>
            
            {/* Legend/Info */}
            <div className="pt-4 border-t border-slate-800/80 space-y-3">
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Active Settlement Hubs</p>
              <div className="flex flex-wrap gap-2.5">
                {hubs.map((hub) => (
                  <span
                    key={hub.id}
                    className={`text-xs px-3 py-1 rounded-[var(--radius-brand)] border transition-all duration-200 cursor-pointer ${
                      activeHub === hub.id
                        ? "bg-brand-cyan/20 border-brand-cyan text-white shadow-[0_0_10px_rgba(34,211,238,0.25)]"
                        : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                    onMouseEnter={() => setActiveHub(hub.id)}
                    onMouseLeave={() => setActiveHub(null)}
                  >
                    {hub.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right SVG Map */}
          <div className="lg:col-span-8 relative bg-slate-950/40 border border-slate-800/60 rounded-2xl p-6 sm:p-8 flex justify-center items-center">
            
            {/* World Map Background SVG */}
            <div className="relative w-full aspect-[2/1] max-w-[640px]">
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full text-slate-800 opacity-25"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simplified continent curves for aesthetic background */}
                <path d="M150,150 Q180,120 220,130 T280,180 T300,240 T250,300 T180,320 Z" /> {/* N. America */}
                <path d="M220,320 Q240,360 260,400 T290,440 T260,460 T230,410 Z" /> {/* S. America */}
                <path d="M450,120 Q520,90 580,110 T650,150 T620,240 T520,260 Z" /> {/* Eurasia */}
                <path d="M480,240 Q540,260 560,300 T580,360 T520,380 T470,300 Z" /> {/* Africa */}
                <path d="M720,360 Q760,380 800,420 T820,440 T780,440 Z" /> {/* Australia */}
              </svg>

              {/* Connecting light beams */}
              <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full pointer-events-none">
                {activeHub && (
                  <g className="stroke-brand-cyan/20" strokeWidth="1" strokeDasharray="3 3">
                    <line x1="250" y1="190" x2="470" y2="150" /> {/* NY to LDN */}
                    <line x1="470" y1="150" x2="740" y2="310" /> {/* LDN to SGP */}
                    <line x1="740" y1="310" x2="820" y2="210" /> {/* SGP to TKY */}
                    <line x1="820" y1="210" x2="250" y2="190" /> {/* TKY to NY */}
                  </g>
                )}
              </svg>

              {/* Hub Interactive Pulsing Pings */}
              {hubs.map((hub) => {
                const isActive = activeHub === hub.id;
                return (
                  <div
                    key={hub.id}
                    style={{ left: hub.x, top: hub.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group/node"
                    onMouseEnter={() => setActiveHub(hub.id)}
                    onMouseLeave={() => setActiveHub(null)}
                  >
                    {/* Ring ping animations */}
                    <span className={`absolute inline-flex h-6 w-6 rounded-full bg-brand-cyan/40 opacity-75 -left-3 -top-3 ${isActive ? 'animate-ping' : 'group-hover/node:animate-ping'}`} />
                    <span className={`relative inline-flex rounded-full h-3 w-3 bg-brand-cyan border border-white ${isActive ? 'scale-125' : 'group-hover/node:scale-125'} transition-all`} />

                    {/* Tooltip Popup */}
                    <div
                      className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-slate-900 border border-slate-800 text-white text-[11px] font-bold px-3 py-1.5 rounded-[var(--radius-brand)] shadow-xl transition-all duration-200 pointer-events-none whitespace-nowrap ${
                        isActive ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-1 scale-95"
                      }`}
                    >
                      <p className="text-white">{hub.name}</p>
                      <p className="text-brand-cyan font-black mt-0.5">Latency: {hub.latency}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
