"tsx"
"use client";

import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-800">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Column 1 & 2: Brand Info & About (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group inline-flex">
              <div className="relative w-10 h-10 bg-amber-500 rounded flex items-center justify-center font-heading font-bold text-slate-950 text-xl shadow-md">
                AT
              </div>
              <div className="flex flex-col">
                <span className="text-white font-heading font-bold text-xl tracking-wide uppercase">
                  Autozone
                </span>
                <span className="text-amber-400 text-xs tracking-widest font-semibold uppercase">
                  Tooling
                </span>
              </div>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Leading manufacturer of hardened and ground press brake punches, dies, hemming tools, radius tools, and shear blades in Pune. Engineered for maximum durability and unmatched sheet metal precision.
            </p>

            <div className="pt-2 text-sm space-y-2">
              <p className="text-white font-medium">Quick Contact:</p>
              <a
                href={site.phones[0]?.href}
                className="block text-slate-300 hover:text-amber-400 transition-colors"
              >
                {site.phones[0]?.label}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="block text-slate-300 hover:text-amber-400 transition-colors"
              >
                {site.email}
              </a>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-semibold text-lg uppercase tracking-wider border-l-2 border-amber-500 pl-3">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  Products & Catalog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/compatibility" className="hover:text-amber-400 transition-colors">
                  Machine Compatibility
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Products */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-semibold text-lg uppercase tracking-wider border-l-2 border-amber-500 pl-3">
              Our Products
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  Press Brake Punches & Dies
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  Hemming Tools
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  Radius Forming Tools
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  Shear Blades
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  Custom Tooling Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Location & Address */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-semibold text-lg uppercase tracking-wider border-l-2 border-amber-500 pl-3">
              Location
            </h3>
            <div className="text-sm space-y-2 text-slate-400">
              <p className="text-white font-medium">{site.name}</p>
              <p>{site.address.street}</p>
              <p>
                {site.address.city}, {site.address.state} - {site.address.postal}
              </p>
              <p className="text-amber-400 font-semibold pt-1">India</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Legal Bar */}
      <div className="border-t border-slate-900 bg-slate-950/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved. Precision Press Brake Tool Manufacturer.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}