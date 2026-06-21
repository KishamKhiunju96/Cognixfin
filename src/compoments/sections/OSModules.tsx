"use client";

import { BarChart2, Users2, Zap, Mail, RefreshCw, Package } from "lucide-react";

export default function OSModules() {
  return (
    <section className="py-16 bg-white">
      <div className="w-full px-6 sm:px-12 lg:px-20 space-y-8">

        {/* Header — left-aligned */}
        <div className="space-y-1.5">
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
            The OS for Modern Operations
          </h2>
          <p className="text-sm text-zinc-500 font-normal">
            Designed for depth, built for scale. Explore the core modules of CognixFin.
          </p>
        </div>

        {/* Top Row: Advanced Analytics + Team Control */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Card 1: Advanced Analytics — split layout */}
          <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm min-h-[320px] flex flex-col">
            {/* Top text area */}
            <div className="p-8 pb-4 space-y-3">
              <div className="p-2.5 bg-[#eef2ff] rounded-xl w-fit">
                <BarChart2 className="h-5 w-5 text-[#0c6cf2]" />
              </div>
              <h3 className="text-xl font-black text-zinc-950">Advanced Analytics</h3>
              <p className="text-sm text-zinc-500 font-normal leading-relaxed">
                Real-time revenue attribution and operational performance metrics
                delivered in high-fidelity visual dashboards.
              </p>
            </div>

            {/* Bottom chart area — fills remaining space, side-by-side bars on light bg */}
            <div className="flex-1 mx-8 mb-8 bg-[#eef2ff]/40 border border-zinc-100 rounded-xl flex items-end justify-center gap-3 px-8 pt-6 pb-4 min-h-[120px]">
              <div className="flex-1 bg-[#b8d0f0] rounded-t-md" style={{ height: "35%" }} />
              <div className="flex-1 bg-[#90b8e8] rounded-t-md" style={{ height: "55%" }} />
              <div className="flex-1 bg-[#6b9fd8] rounded-t-md" style={{ height: "45%" }} />
              <div className="flex-1 bg-[#3d79c8] rounded-t-md" style={{ height: "85%" }} />
              <div className="flex-1 bg-[#0c6cf2] rounded-t-md" style={{ height: "100%" }} />
            </div>
          </div>

          {/* Card 2: Team Control */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col gap-6 shadow-sm min-h-[320px]">
            {/* Header */}
            <div className="space-y-3">
              <div className="p-2.5 bg-[#eef2ff] rounded-xl w-fit">
                <Users2 className="h-5 w-5 text-[#0c6cf2]" />
              </div>
              <h3 className="text-xl font-black text-zinc-950">Team Control</h3>
              <p className="text-sm text-zinc-500 font-normal leading-relaxed">
                Granular permissions and role-based access control for global enterprise deployments.
              </p>
            </div>

            {/* Role/Permission Bars */}
            <div className="space-y-3 mt-auto">
              {/* Admin */}
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-zinc-900 flex-shrink-0" />
                <div className="flex-1 h-2 bg-[#0c6cf2] rounded-full" />
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest w-12 text-right">
                  ADMIN
                </span>
              </div>
              {/* Manager */}
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-zinc-400 flex-shrink-0" />
                <div className="flex-1 bg-zinc-200 rounded-full h-2">
                  <div className="h-full w-[58%] bg-[#0c6cf2]/50 rounded-full" />
                </div>
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest w-12 text-right">
                  MANAGER
                </span>
              </div>
              {/* Editor */}
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-zinc-200 flex-shrink-0" />
                <div className="flex-1 bg-zinc-100 rounded-full h-2">
                  <div className="h-full w-[30%] bg-[#0c6cf2]/25 rounded-full" />
                </div>
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest w-12 text-right">
                  EDITOR
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Full-Width Card: Smart Triggers */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 shadow-sm">

          {/* Left Text */}
          <div className="space-y-3 max-w-sm">
            <div className="p-2.5 bg-[#eef2ff] rounded-xl w-fit">
              <Zap className="h-5 w-5 text-[#0c6cf2]" />
            </div>
            <h3 className="text-xl font-black text-zinc-950">Smart Triggers</h3>
            <p className="text-sm text-zinc-500 font-normal leading-relaxed">
              Automatically sync new leads to your CRM and trigger
              conditional follow-ups with zero latency and high precision logic.
            </p>
          </div>

          {/* Right Icon Row with connecting dots */}
          <div className="flex-shrink-0 bg-[#f4f6fb] border border-zinc-200 rounded-xl p-5">
            <div className="flex items-center gap-2">
              {/* Icon 1 */}
              <div className="p-3.5 bg-white border border-zinc-200 rounded-xl shadow-sm">
                <Mail className="h-5 w-5 text-[#0c6cf2]" />
              </div>
              {/* Dots connector */}
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
              </div>
              {/* Icon 2 */}
              <div className="p-3.5 bg-white border border-zinc-200 rounded-xl shadow-sm">
                <RefreshCw className="h-5 w-5 text-[#0c6cf2]" />
              </div>
              {/* Dots connector */}
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
              </div>
              {/* Icon 3 */}
              <div className="p-3.5 bg-white border border-zinc-200 rounded-xl shadow-sm">
                <Package className="h-5 w-5 text-[#0c6cf2]" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
