"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#f4f6fb] pt-28 pb-2 transition-colors duration-300">
      <div className="w-full px-6 sm:px-12 lg:px-20">
        {/* Main Blue Card */}
        <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#0d2757] via-[#0b3c75] to-[#0c6cf2] px-8 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20 shadow-xl">
          {/* Subtle overlay light ray */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(12,108,242,0.15),transparent_60%)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left side text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-[10px] font-semibold tracking-[0.18em] uppercase">
                OPERATIONAL INTELLIGENCE
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight">
                One ecosystem<br />
                powering <span className="text-[#5bb8f5]">Donors,</span><br />
                <span className="text-[#5bb8f5]">clients</span> and operational<br />
                intelligence
              </h1>

              {/* Description */}
              <p className="text-sm text-white/55 max-w-md font-normal leading-relaxed">
                CognixFin unifies donor management, client operations,
                analytics, and workflow automation into a scalable
                enterprise platform built for modern organizations.
              </p>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  href="#signup"
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-zinc-50 text-zinc-900 font-bold px-7 py-3.5 rounded-lg text-sm transition-all duration-200 shadow-sm border border-white/80"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 text-zinc-900" />
                </Link>
              </div>
            </div>

            {/* Right side Dashboard Mockup */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              {/* Blue Glow Behind Mockup */}
              <div className="absolute -inset-4 rounded-3xl bg-[#0c6cf2]/25 blur-3xl pointer-events-none" />

              {/* Mockup Frame */}
              <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-2xl overflow-hidden border-8 border-white/5 shadow-2xl bg-zinc-950">
                <Image
                  src="/images/Hero.png"
                  alt="CognixFin Platform Interface"
                  fill
                  priority
                  className="object-cover object-left-top select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
