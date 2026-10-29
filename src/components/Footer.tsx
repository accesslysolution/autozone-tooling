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
                  alt="Raj High Tech Ventures Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-heading font-bold text-xl tracking-wide uppercase">
                  Raj High Tech
                </span>
                <span className="text-amber-400 text-xs tracking-widest font-semibold uppercase">
                  Ventures Pvt. Ltd.
                </span>
              </div>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Premier manufacturer of hardened and ground press brake punches, dies, hemming tools, radius inserts, and shear blades. Engineered to exact micron-level tolerances for maximum durability and flawless sheet metal fabrication.
            </p>

            {/* Important Trust Note */}
            <div className="bg-slate-900/80 border border-slate-800/80 p-4 rounded-lg space-y-1">
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider block">
                Quality Assurance Guarantee
              </span>
              <p className="text-xs text-slate-400">
                All tooling is manufactured using premium alloy steels with induction/vacuum hardening for exceptional wear resistance and long operational life.
              </p>
            </div>

            <div className="pt-2 text-sm space-y-2">
              <p className="text-white font-medium">Contact Details:</p>
              <p className="text-xs text-amber-400 font-semibold">
                Mr. Vikas Ganpat Kapse (Managing Director)[cite: 1]
              </p>
              <a
                href="tel:+919822910481"
                className="block text-slate-300 hover:text-amber-400 transition-colors font-semibold"
              >
                +91 98229 10481[cite: 1]
              </a>
              <a
                href="tel:+919881258028"
                className="block text-slate-300 hover:text-amber-400 transition-colors font-semibold"
              >
                +91 98812 58028[cite: 1]
              </a>
              <a
                href="tel:+919922923894"
                className="block text-slate-300 hover:text-amber-400 transition-colors font-semibold"
              >
                +91 99229 23894[cite: 1]
              </a>
              <a
                href="mailto:marketing@rajhightech.com"
                className="block text-slate-300 hover:text-amber-400 transition-colors"
              >
                marketing@rajhightech.com[cite: 1]
              </a>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider border-l-2 border-amber-500 pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home[cite: 1]
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About Us[cite: 1]
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  Products[cite: 1]
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-amber-400 transition-colors">
                  Clients[cite: 1]
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Contact Us[cite: 1]
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Plant Address */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider border-l-2 border-amber-500 pl-3">
              Plant Address
            </h3>
            <div className="text-sm space-y-2 text-slate-400 leading-relaxed">
              <p className="text-white font-medium">Plot No: 81-A, B.U. Bhandari Industrial Estate[cite: 1]</p>
              <p>Near John Deere company, Sanaswadi, Tal. Shirur, Dist: Pune-412208[cite: 1]</p>
            </div>
          </div>

          {/* Column 5: Head Office & Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider border-l-2 border-amber-500 pl-3">
              Head Office
            </h3>
            <div className="text-sm space-y-2 text-slate-400 leading-relaxed">
              <p className="text-white font-medium">Survey No. 22, Lalwani Heights[cite: 1]</p>
              <p>Above Bank of Maharashtra, Sainikwadi, Wadgaon Sheri, Pune - 411014[cite: 1]</p>
            </div>

            {/* Social Icons with Permanent Brand Colors & Scale Effect on Hover */}
            <div className="pt-2 space-y-2">
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Connect With Us</p>
              <div className="flex items-center space-x-3">
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
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Legal Bar */}
      <div className="border-t border-slate-900 bg-slate-950/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>
            &copy; {new Date().getFullYear()} Raj High Tech Ventures Pvt. Ltd. All rights reserved.[cite: 1]
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