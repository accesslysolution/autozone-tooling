"use client";

import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-800">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Column 1 & 2: Brand Info & Important Text (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group inline-flex">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Autozone Tooling Logo"
                  fill
                  className="object-contain"
                />
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
              Premier manufacturer of hardened and ground press brake punches, dies, hemming tools, radius inserts, and shear blades in Akurdi, Pune. Engineered to exact micron-level tolerances for maximum durability and flawless sheet metal fabrication.
            </p>

            {/* Important Trust Note */}
            <div className="bg-slate-900/80 border border-slate-800/80 p-4 rounded-lg space-y-1">
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider block">
                Quality Assurance Guarantee
              </span>
              <p className="text-xs text-slate-400">
                All tooling is manufactured using premium alloy steels (En8, EN31, H13) with induction/vacuum hardening for exceptional wear resistance and long operational life.
              </p>
            </div>

            <div className="pt-2 text-sm space-y-2">
              <p className="text-white font-medium">Quick Contact:</p>
              <a
                href="tel:+919922566974"
                className="block text-slate-300 hover:text-amber-400 transition-colors font-semibold"
              >
                +91 99225 66974
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
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider border-l-2 border-amber-500 pl-3">
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
                  Products &amp; Catalog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Updated Products List */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider border-l-2 border-amber-500 pl-3">
              Tooling Range
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  Press Brake Punches (Straight, Neck, R0.5/R0.6)
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  Press Brake Dies &amp; Multi V-Dies
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  Special 3-Bend &amp; Door Frame Dies
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  Hemming &amp; Radius Inserts (R8-R100)
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  Metal Shearing Blades &amp; Turret Tooling
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Location & Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider border-l-2 border-amber-500 pl-3">
              Location &amp; Social
            </h3>
            <div className="text-sm space-y-2 text-slate-400">
              <p className="text-white font-medium">{site.name}</p>
              <p>Akurdi</p>
              <p>Pune, Maharashtra - 411035</p>
              <p className="text-amber-400 font-semibold pt-1">India</p>
            </div>

            {/* Social Icons with Permanent Brand Colors & Scale Effect on Hover */}
            <div className="pt-2 space-y-2">
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Connect With Us</p>
              <div className="flex items-center space-x-3">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white rounded-lg flex items-center justify-center shadow-md transform hover:scale-110 hover:brightness-110 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 bg-[#1877F2] text-white rounded-lg flex items-center justify-center shadow-md transform hover:scale-110 hover:brightness-110 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 bg-[#0A66C2] text-white rounded-lg flex items-center justify-center shadow-md transform hover:scale-110 hover:brightness-110 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Legal Bar */}
      <div className="border-t border-slate-900 bg-slate-950/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>
            &copy; {new Date().getFullYear()} Autozone Tooling. All rights reserved. Precision Press Brake Tool Manufacturer | Akurdi, Pune, India.
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