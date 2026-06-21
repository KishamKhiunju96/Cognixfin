"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-zinc-100">
      <div className="w-full px-6 sm:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Navigation links */}
          <div className="flex items-center gap-12">
            <Link href="/" className="font-sans font-extrabold text-2xl tracking-tight text-zinc-900">
              CognixFin
            </Link>

            {/* Desktop Nav Items */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#products"
                className="relative py-2 text-sm font-semibold text-[#0c6cf2] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#0c6cf2]"
              >
                Products
              </Link>
              <Link
                href="#solutions"
                className="py-2 text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
              >
                Solutions
              </Link>
              <Link
                href="#features"
                className="py-2 text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="py-2 text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
              >
                Pricing
              </Link>
            </nav>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="#login"
              className="text-sm font-semibold text-zinc-600 hover:text-zinc-950 transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              href="#demo"
              className="text-sm font-bold text-white bg-[#0f172a] hover:bg-[#1e293b] px-6 py-3 rounded-md transition-all duration-200 shadow-sm"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-zinc-650 hover:bg-zinc-105 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute inset-x-0 top-20 bg-white border-b border-zinc-250 transition-all duration-300 ease-in-out transform ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="px-6 pt-2 pb-6 space-y-3 shadow-lg">
          <Link
            href="#products"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-lg text-base font-bold text-[#0c6cf2] bg-indigo-50"
          >
            Products
          </Link>
          <Link
            href="#solutions"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-lg text-base font-semibold text-zinc-650 hover:bg-zinc-50"
          >
            Solutions
          </Link>
          <Link
            href="#features"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-lg text-base font-semibold text-zinc-650 hover:bg-zinc-50"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-lg text-base font-semibold text-zinc-650 hover:bg-zinc-50"
          >
            Pricing
          </Link>
          <div className="pt-4 border-t border-zinc-100 flex flex-col gap-3">
            <Link
              href="#login"
              onClick={() => setIsOpen(false)}
              className="flex justify-center w-full px-4 py-3 rounded-lg text-base font-bold text-zinc-700 hover:bg-zinc-50 text-center"
            >
              Login
            </Link>
            <Link
              href="#demo"
              onClick={() => setIsOpen(false)}
              className="flex justify-center w-full px-4 py-3 rounded-lg text-base font-bold text-white bg-[#0f172a] hover:bg-[#1e293b] text-center"
            >
              Book Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
