
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

const company = {
  name: "Autozone Tooling",
  email: "autozone.tooling@gmail.com",
  phone1: "+91 9011452458",
  phone2: "+91 9922566974",
  phoneLink1: "+919011452458",
  phoneLink2: "+919922566974",
  whatsapp: "919011452458",
  location: "Bhosari MIDC, Pune",
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full font-sans">

      {/* Top Utility Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs sm:text-sm border-b border-slate-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-10 py-2 flex items-center justify-between gap-4">

          {/* Left: Contact Information */}
          <div className="flex items-center gap-4 lg:gap-6">

            {/* Primary Phone */}
            <a
              href={`tel:${company.phoneLink1}`}
              className="flex items-center gap-2 hover:text-amber-400 transition-colors whitespace-nowrap"
              aria-label={`Call ${company.phone1}`}
            >
              <svg
                className="w-4 h-4 text-amber-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>

              <span className="hidden sm:inline text-slate-400">
                Call:
              </span>

              <span>{company.phone1}</span>
            </a>

            {/* Secondary Phone */}
            <a
              href={`tel:${company.phoneLink2}`}
              className="hidden lg:flex items-center gap-2 hover:text-amber-400 transition-colors whitespace-nowrap"
              aria-label={`Call ${company.phone2}`}
            >
              <span className="text-slate-600">|</span>
              <span>{company.phone2}</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${company.email}`}
              className="hidden xl:flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <svg
                className="w-4 h-4 text-amber-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>

              <span>{company.email}</span>
            </a>

          </div>

          {/* Right: Location & WhatsApp */}
          <div className="flex items-center gap-4">

            {/* Location */}
            <div className="hidden md:flex items-center gap-2 text-slate-400 font-medium whitespace-nowrap">

              <svg
                className="w-4 h-4 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span>{company.location}</span>
            </div>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Autozone Tooling on WhatsApp"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium whitespace-nowrap"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.86 11.86 0 0012.05 0C5.48 0 .12 5.35.12 11.93c0 2.1.55 4.16 1.6 5.98L0 24l6.25-1.64a11.93 11.93 0 005.8 1.48h.01c6.58 0 11.94-5.35 11.94-11.93a11.86 11.86 0 00-3.48-8.43zM12.06 21.82a9.88 9.88 0 01-5.04-1.38l-.36-.21-3.74.98.99-3.64-.24-.37a9.9 9.9 0 01-1.52-5.27c0-5.47 4.45-9.92 9.92-9.92a9.86 9.86 0 017.02 2.91 9.86 9.86 0 012.9 7.02c0 5.47-4.45 9.92-9.93 9.92zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
              </svg>

              <span className="hidden sm:inline">
                WhatsApp
              </span>
            </a>

          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`relative transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-800 py-3"
            : "bg-slate-900 border-b border-slate-800/80 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center gap-3 group min-w-0"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center">

              <Image
                src="/images/logo.png"
                alt="Autozone Tooling Logo"
                fill
                sizes="(max-width: 640px) 44px, 48px"
                className="object-contain"
                priority
              />

            </div>

            <div className="flex flex-col min-w-0">

              <span className="text-white font-heading font-bold text-lg sm:text-xl tracking-wide uppercase leading-tight group-hover:text-amber-400 transition-colors">
                AUTOZONE
              </span>

              <span className="text-amber-400 text-[10px] sm:text-xs tracking-[0.2em] font-semibold uppercase leading-tight mt-1">
                TOOLING
              </span>

            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">

            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? "text-amber-400 font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}

                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 rounded-full" />
                  )}

                </Link>
              );
            })}

          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">

            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm px-5 py-2.5 rounded shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Request a Quote
            </Link>

          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="lg:hidden text-slate-300 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="lg:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 shadow-2xl py-6 px-6 space-y-4 animate-in slide-in-from-top duration-200"
          >

            {/* Navigation Links */}
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-base font-medium py-2 px-3 rounded transition-colors ${
                    isActive
                      ? "bg-amber-500/10 text-amber-400 font-semibold"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile Contact Details */}
            <div className="pt-4 border-t border-slate-800 space-y-4">

              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                Contact Autozone Tooling
              </p>

              <div className="space-y-3">

                <div>
                  <p className="text-xs text-amber-400 font-medium mb-1">
                    Mr. Santosh Hodage
                  </p>

                  <a
                    href={`tel:${company.phoneLink1}`}
                    className="text-sm text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    {company.phone1}
                  </a>
                </div>

                <div>
                  <p className="text-xs text-amber-400 font-medium mb-1">
                    Mr. Baswaraj Hodage
                  </p>

                  <a
                    href={`tel:${company.phoneLink2}`}
                    className="text-sm text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    {company.phone2}
                  </a>
                </div>

                <a
                  href={`mailto:${company.email}`}
                  className="block text-sm text-slate-300 hover:text-amber-400 transition-colors break-all"
                >
                  {company.email}
                </a>

                <p className="text-xs text-slate-500">
                  Sector 07, Bhosari MIDC, Pune - 411026
                </p>

              </div>

              {/* Mobile CTA */}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold py-3 rounded shadow transition-colors"
              >
                Request a Quote
              </Link>

            </div>
          </div>
        )}

      </nav>
    </header>
  );
}
