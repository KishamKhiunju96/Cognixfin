"use client";

import Link from "next/link";

export default function FooterCTA() {
  const links = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Security", href: "#security" },
    { label: "Contact Sales", href: "#sales" },
  ];

  return (
    <footer className="bg-[#0f172a] px-6 sm:px-12 lg:px-20 py-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

        {/* Left: Brand + copyright */}
        <div className="space-y-1.5">
          <p className="text-white font-black text-xl tracking-tight">
            CognixFin
          </p>
          <p className="text-xs text-slate-500 font-normal">
            © {new Date().getFullYear()} CognixFin Institutional Modernism. All rights reserved.
          </p>
        </div>

        {/* Right: Flat links */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-normal"
            >
              {link.label}
            </Link>
          ))}
        </div>

      </div>
    </footer>
  );
}
