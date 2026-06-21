"use client";

import { TrendingUp, ShieldCheck, Wallet, Headphones } from "lucide-react";

export default function EcosystemModules() {
  return (
    <section className="py-16 bg-[#f4f6fb] transition-colors duration-300">
      <div className="w-full px-6 sm:px-12 lg:px-20 space-y-6">

        {/* Header (Left-aligned) */}
        <div className="space-y-1.5 text-left pb-4">
          <h2 className="text-3xl font-black text-zinc-950 tracking-tight">
            Ecosystem Modules
          </h2>
          <p className="text-sm text-zinc-500 font-normal">
            Extending the core platform with specialized capabilities.
          </p>
        </div>

        {/* Top 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Module 1: Trading System */}
          <div className="p-8 bg-white border border-zinc-200 rounded-2xl flex flex-col justify-between min-h-[240px] relative overflow-hidden shadow-sm">
            {/* Content */}
            <div className="space-y-4 max-w-[70%] relative z-10">
              {/* Icon */}
              <div className="p-2.5 bg-[#eef2ff] rounded-xl w-fit">
                <TrendingUp className="h-5 w-5 text-[#0c6cf2]" />
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h4 className="text-sm font-black tracking-widest text-zinc-900 uppercase">
                  TRADING SYSTEM
                </h4>
                <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                  High-frequency execution and asset management with institutional-grade latency controls.
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center gap-3 relative z-10 pt-6">
              <button className="bg-[#0f172a] hover:bg-zinc-800 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors shadow-sm">
                Join Waitlist
              </button>
              <span className="text-xs font-semibold text-zinc-500 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-lg">
                Q1 2025
              </span>
            </div>

            {/* Right Side Visual — subtle ascending bars */}
            <div className="absolute right-6 bottom-6 flex items-end gap-1.5 h-24 opacity-20 pointer-events-none">
              <div className="w-4 bg-[#0c6cf2] rounded-t" style={{ height: "25%" }} />
              <div className="w-4 bg-[#0c6cf2] rounded-t" style={{ height: "42%" }} />
              <div className="w-4 bg-[#0c6cf2] rounded-t" style={{ height: "60%" }} />
              <div className="w-4 bg-[#0c6cf2] rounded-t" style={{ height: "80%" }} />
              <div className="w-4 bg-[#0c6cf2] rounded-t" style={{ height: "100%" }} />
            </div>
          </div>

          {/* Module 2: RiskEngine */}
          <div className="p-8 bg-white border border-zinc-200 rounded-2xl flex flex-col justify-between min-h-[240px] relative overflow-hidden shadow-sm">
            {/* Content */}
            <div className="space-y-4 max-w-[70%] relative z-10">
              {/* Icon */}
              <div className="p-2.5 bg-[#eef2ff] rounded-xl w-fit">
                <ShieldCheck className="h-5 w-5 text-[#0c6cf2]" />
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h4 className="text-sm font-black tracking-widest text-zinc-900 uppercase">
                  RISKENGINE
                </h4>
                <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                  AI-driven predictive risk modeling and stress testing for enterprise finance and compliance.
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center gap-3 relative z-10 pt-6">
              <button className="bg-[#0f172a] hover:bg-zinc-800 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors shadow-sm">
                Get Early Access
              </button>
              <span className="text-xs font-semibold text-zinc-500 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-lg">
                Alpha
              </span>
            </div>

            {/* Right Side Visual — subtle concentric circles */}
            <div className="absolute right-6 bottom-6 opacity-10 pointer-events-none flex items-center justify-center w-28 h-28">
              <div className="absolute w-28 h-28 rounded-full border-2 border-[#0c6cf2]" />
              <div className="absolute w-20 h-20 rounded-full border-2 border-[#0c6cf2]" />
              <div className="absolute w-12 h-12 rounded-full border-2 border-[#0c6cf2]" />
            </div>
          </div>

        </div>

        {/* Bottom 2-Column Flat Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Flat Module 1: Payroll & Accounts */}
          <div className="p-5 bg-white border border-zinc-200 rounded-2xl flex items-center gap-4 shadow-sm">
            <div className="p-3 bg-[#eef2ff] rounded-xl flex-shrink-0">
              <Wallet className="h-5 w-5 text-[#0c6cf2]" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-sm font-bold text-zinc-900">
                Payroll &amp; Accounts
              </h4>
              <p className="text-xs text-zinc-500 font-normal">
                Integrated financial operations and ledger management.
              </p>
            </div>
          </div>

          {/* Flat Module 2: Consulting Services */}
          <div className="p-5 bg-white border border-zinc-200 rounded-2xl flex items-center gap-4 shadow-sm">
            <div className="p-3 bg-[#eef2ff] rounded-xl flex-shrink-0">
              <Headphones className="h-5 w-5 text-[#0c6cf2]" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-sm font-bold text-zinc-900">
                Consulting Services
              </h4>
              <p className="text-xs text-zinc-500 font-normal">
                Expert-led implementation and strategic workflow optimization.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
