"use client";

import { Check, Receipt, LayoutDashboard, FileText, Image as ImageIcon } from "lucide-react";

function CheckItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2.5">
      {/* Solid filled blue circle checkmark */}
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0c6cf2] flex items-center justify-center">
        <Check className="h-3 w-3 text-white stroke-[3]" />
      </div>
      <span className="text-sm text-zinc-600 font-medium">{label}</span>
    </div>
  );
}

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-16 bg-[#f4f6fb] transition-colors duration-300">
      <div className="w-full px-6 sm:px-12 lg:px-20 space-y-12">

        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
            <span className="text-[#0c6cf2]">One platform</span>, Every financial workflow covered
          </h2>
        </div>

        {/* Row 1: DonorSense Card + Donation Growth Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* DonorSense Info Card */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-5">
              {/* Icon */}
              <div className="p-2.5 bg-[#eef2ff] rounded-xl w-fit">
                <Receipt className="h-6 w-6 text-[#0c6cf2]" />
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-xl font-black text-zinc-950">DonorSense</h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                  Donation Management for nonprofits. Streamline your impact
                  with automated workflows designed for modern philanthropy.
                </p>
              </div>

              {/* Checklist 2×2 Grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-1">
                <CheckItem label="OCR donation intake" />
                <CheckItem label="IRS receipt generation" />
                <CheckItem label="Campaign tracking" />
                <CheckItem label="Donor management" />
              </div>
            </div>

            {/* Button */}
            <div className="pt-8">
              <button className="bg-[#0f172a] hover:bg-zinc-800 text-white text-sm font-bold px-6 py-3 rounded-lg transition-colors shadow-sm">
                Open Dashboard
              </button>
            </div>
          </div>

          {/* Donation Growth Visual Card */}
          <div className="bg-[#e8edf8] border border-zinc-200/40 rounded-2xl p-6 flex flex-col shadow-sm min-h-[360px]">
            {/* Inner Dashboard Box */}
            <div className="bg-white border border-zinc-200/60 rounded-xl p-5 shadow-sm flex flex-col flex-1">

              {/* Header Info */}
              <div className="flex justify-between items-center pb-4 border-b border-zinc-100">
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.18em]">
                  DONATION GROWTH
                </span>
                <span className="text-xs font-extrabold text-[#0c6cf2]">
                  +12.5%
                </span>
              </div>

              {/* Bar Chart — bars are wide, touching, no gaps */}
              <div className="flex items-end justify-between flex-1 pt-6 gap-2 pb-2">
                <div className="flex-1 bg-[#b8ccee] rounded-t-md" style={{ height: "28%" }} />
                <div className="flex-1 bg-[#8aadd8] rounded-t-md" style={{ height: "45%" }} />
                <div className="flex-1 bg-[#6690c8] rounded-t-md" style={{ height: "62%" }} />
                <div className="flex-1 bg-[#3d6db8] rounded-t-md" style={{ height: "80%" }} />
                <div className="flex-1 bg-[#0c6cf2] rounded-t-md" style={{ height: "100%" }} />
              </div>

            </div>
          </div>

        </div>

        {/* Row 2: Recent Documents Visual + ClientAxis Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* Recent Documents Visual Card */}
          <div className="bg-[#e8edf8] border border-zinc-200/40 rounded-2xl p-6 flex items-center justify-center min-h-[360px] shadow-sm">
            {/* Document Box */}
            <div className="w-full max-w-[420px] rounded-xl overflow-hidden shadow-md border border-zinc-200/60">
              {/* Dark Header Bar */}
              <div className="bg-[#0f172a] px-4 py-3 flex items-center justify-between">
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.18em]">
                  RECENT DOCUMENTS
                </span>
                <div className="w-4 h-4 rounded bg-zinc-700/60" />
              </div>

              {/* Document rows — white background */}
              <div className="bg-white divide-y divide-zinc-100">
                {/* Item 1 */}
                <div className="flex items-center justify-between px-4 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <FileText className="h-4 w-4 text-zinc-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-zinc-800">KYC_Form_V2.pdf</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    Verified
                  </span>
                </div>

                {/* Item 2 */}
                <div className="flex items-center justify-between px-4 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <ImageIcon className="h-4 w-4 text-zinc-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-zinc-800">ID_Passport.jpg</span>
                  </div>
                  <span className="text-[10px] font-bold text-red-500 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">
                    Expiring
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ClientAxis Info Card */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-5">
              {/* Icon */}
              <div className="p-2.5 bg-[#eef2ff] rounded-xl w-fit">
                <LayoutDashboard className="h-6 w-6 text-[#0c6cf2]" />
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-xl font-black text-zinc-950">ClientAxis</h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                  Compliance-ready client CRM. Centralize your client
                  relationships with built-in regulatory guardrails.
                </p>
              </div>

              {/* Checklist 2×2 Grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-1">
                <CheckItem label="KYC workflows" />
                <CheckItem label="Document expiry alerts" />
                <CheckItem label="Client timeline" />
                <CheckItem label="Audit-ready records" />
              </div>
            </div>

            {/* Button */}
            <div className="pt-8">
              <button className="bg-[#0f172a] hover:bg-zinc-800 text-white text-sm font-bold px-6 py-3 rounded-lg transition-colors shadow-sm">
                Open Dashboard
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
