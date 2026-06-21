"use client";

import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-10 bg-[#f4f6fb]">
      <div className="w-full px-6 sm:px-12 lg:px-20">
        {/* Gradient Banner Card — charcoal-left to sky-blue-right */}
        <div className="relative rounded-3xl overflow-hidden px-8 py-16 sm:px-14 sm:py-20 text-center shadow-xl"
          style={{
            background: "linear-gradient(to right, #1a1f2e, #2d3a5c, #3b6fa0, #4a9fd4, #6cb8e8)"
          }}
        >
          {/* Soft white glow center */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_65%)] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 space-y-5 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Start Managing Clients Smarter Today
            </h2>
            <p className="text-sm sm:text-base text-white/60 font-normal max-w-lg mx-auto leading-relaxed">
              Join over thousands using CognixFin to run their operations with AI-powered processes on institutional-grade infrastructure.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="#signup"
                className="inline-flex items-center justify-center text-sm font-bold text-black bg-white hover:bg-zinc-100 px-8 py-3.5 rounded-xl transition-all duration-200 shadow-sm min-w-[190px]"
              >
                Create Free Account
              </Link>
              <Link
                href="#sales"
                className="inline-flex items-center justify-center text-sm font-bold text-white bg-[#0f172a] hover:bg-[#1e293b] px-8 py-3.5 rounded-xl transition-all duration-200 min-w-[190px] shadow-sm"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
