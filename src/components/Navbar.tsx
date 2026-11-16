
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  FiFacebook,
  FiLinkedin,
  FiArrowUpRight,
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";

/* ==========================================
   NAVIGATION LINKS
========================================== */

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Design Services", href: "/design-services" },
  { name: "Clients", href: "/clients" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

/* ==========================================
   PRODUCT CATEGORIES
   SYNCHRONIZED WITH PRODUCTS PAGE
========================================== */

const productCategories = [
  {
    name: "Press Brake Tool",
    id: "press-brake-tool",
  },
  {
    name: "Press Brake Punch",
    id: "press-brake-punch",
  },
  {
    name: "Press Brake Dies",
    id: "press-brake-dies",
  },
  {
    name: "Radius Tools Holders & Inserts",
    id: "radius-tools-holder-inserts",
  },
  {
    name: "Punch Clamps",
    id: "punch-clamps",
  },
  {
    name: "Press Brake Hemming Tools",
    id: "press-brake-hemming-tools",
  },
  {
    name: "Self Centering 2V Die",
    id: "self-centering-2v-die",
  },
  {
    name: "Shear Blade",
    id: "shear-blade",
  },
  {
    name: "Joggle Tool & Insert",
    id: "joggle-tool-insert",
  },
  {
    name: "Amada Type Self Centering 1V Die",
    id: "amada-self-centering-1v-die",
  },
  {
    name: "Special Application",
    id: "special-application",
  },
];

/* ==========================================
   DESIGN SERVICE CATEGORIES
========================================== */

const designCategories = [
  {
    name: "Product Design",
    id: "product-design",
  },
  {
    name: "Die Design",
    id: "die-design",
  },
  {
    name: "Fixture Design",
    id: "fixture-design",
  },
  {
    name: "Mould Design",
    id: "mould-design",
  },
  {
    name: "Electrode Design",
    id: "electrode-design",
  },
  {
    name: "2D to 3D Design",
    id: "2d-to-3d-design",
  },
  {
    name: "Manufacturing Drawings",
    id: "manufacturing-drawings",
  },
  {
    name: "Laser Cutting Drawings",
    id: "laser-cutting-drawings",
  },
  {
    name: "2D Drawing Creation",
    id: "2d-drawing-creation",
  },
];

/* ==========================================
   COMPANY INFORMATION
========================================== */

const company = {
  name: "Autozone Tooling",
  email: "autozone.tooling@gmail.com",

  phone1: "+91 9011452458",
  phone2: "+91 9922566974",

  phoneLink1: "+919011452458",
  phoneLink2: "+919922566974",

  whatsapp: "919011452458",

  location: "Bhosari MIDC, Pune",

  mapUrl:
    "https://www.google.com/maps/place/Autozone+Tooling/@18.6425895,73.8367515,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b94881f1ca1b:0xb68dfd77de68ec3c!8m2!3d18.6425895!4d73.8393264!16s%2Fg%2F11lw8q15fv?entry=ttu",

  facebook:
    "https://www.facebook.com/people/Autozone-Tooling/61593862056621/",

  linkedin:
    "https://www.linkedin.com/in/autozone-tooling-23721b291/",
};

/* ==========================================
   SOCIAL MEDIA LINKS
========================================== */

const socialLinks = [
  {
    name: "Facebook",
    href: company.facebook,
    icon: FiFacebook,
    hover: "hover:text-blue-400 hover:bg-blue-500/10",
  },
  {
    name: "LinkedIn",
    href: company.linkedin,
    icon: FiLinkedin,
    hover: "hover:text-sky-400 hover:bg-sky-500/10",
  },
];

/* ==========================================
   NAVBAR COMPONENT
========================================== */

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [mobileProductsOpen, setMobileProductsOpen] =
    useState(false);

  const [mobileDesignOpen, setMobileDesignOpen] =
    useState(false);

  const pathname = usePathname();

  /* ==========================================
     SCROLL EFFECT
  ========================================== */

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

  /* ==========================================
     CLOSE MOBILE MENU ON ROUTE CHANGE
  ========================================== */

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
    setMobileDesignOpen(false);
  }, [pathname]);

  /* ==========================================
     PREVENT BACKGROUND SCROLL
  ========================================== */

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  /* ==========================================
     CLOSE MOBILE NAVIGATION
  ========================================== */

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
    setMobileDesignOpen(false);
  };

  /* ==========================================
     ACTIVE LINK CHECK
  ========================================== */

  const isActiveLink = (href: string) => {
    return href === "/"
      ? pathname === "/"
      : pathname === href ||
          pathname.startsWith(`${href}/`);
  };

  /* ==========================================
     CATEGORY NAVIGATION
     DESKTOP + MOBILE
  ========================================== */

  const handleCategoryClick = (
    page: string,
    id: string
  ) => {
    closeMobileMenu();

    // When navigating from another page, Next.js
    // handles the route and hash navigation.
    if (pathname !== page) return;

    // When already on the destination page,
    // scroll directly to the selected section.
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const target = document.getElementById(id);

        if (!target) return;

        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  };

  /* ==========================================
     NAVIGATION RENDER
  ========================================== */

  return (
    <header className="sticky top-0 z-50 w-full font-sans">

      {/* ==========================================
          TOP UTILITY BAR
      ========================================== */}

      <div className="border-b border-slate-800 bg-slate-950 text-xs text-slate-300 sm:text-sm">
        <div className="mx-auto flex min-h-10 max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">

          {/* CONTACT INFORMATION */}

          <div className="flex min-w-0 items-center gap-4 lg:gap-6">

            {/* PRIMARY PHONE */}

            <a
              href={`tel:${company.phoneLink1}`}
              className="flex items-center gap-2 whitespace-nowrap transition-colors hover:text-amber-400"
              aria-label={`Call ${company.phone1}`}
            >
              <svg
                className="h-4 w-4 shrink-0 text-amber-500"
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

              <span className="hidden text-slate-400 sm:inline">
                Call:
              </span>

              <span>{company.phone1}</span>
            </a>

            {/* SECONDARY PHONE */}

            <a
              href={`tel:${company.phoneLink2}`}
              className="hidden items-center gap-2 whitespace-nowrap transition-colors hover:text-amber-400 lg:flex"
              aria-label={`Call ${company.phone2}`}
            >
              <span className="text-slate-600">|</span>
              <span>{company.phone2}</span>
            </a>

            {/* EMAIL */}

            <a
              href={`mailto:${company.email}`}
              className="hidden items-center gap-2 transition-colors hover:text-amber-400 2xl:flex"
            >
              <svg
                className="h-4 w-4 shrink-0 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>

              <span>{company.email}</span>
            </a>
          </div>

          {/* LOCATION / SOCIALS / WHATSAPP */}

          <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:gap-4">

            {/* GOOGLE MAPS */}

            <a
              href={company.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Autozone Tooling on Google Maps"
              className="hidden items-center gap-2 whitespace-nowrap font-medium text-slate-400 transition-colors hover:text-amber-400 xl:flex"
            >
              <svg
                className="h-4 w-4 text-amber-500"
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
            </a>

            {/* SOCIAL ICONS */}

            <div className="flex items-center gap-1 border-r border-slate-700 pr-2 sm:gap-2 sm:pr-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Autozone Tooling on ${social.name}`}
                    title={social.name}
                    className={`flex h-8 w-8 items-center justify-center rounded-md text-slate-400 transition-all duration-200 ${social.hover}`}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>

            {/* WHATSAPP */}

            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Autozone Tooling on WhatsApp"
              className="inline-flex items-center gap-2 whitespace-nowrap font-medium text-emerald-400 transition-colors hover:text-emerald-300"
            >
              <svg
                className="h-4 w-4"
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

      {/* ==========================================
          MAIN NAVBAR
      ========================================== */}

      <nav
        aria-label="Main navigation"
        className={`relative transition-all duration-300 ${
          isScrolled
            ? "border-b border-slate-800 bg-slate-900/95 py-3 shadow-xl backdrop-blur-md"
            : "border-b border-slate-800/80 bg-slate-900 py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

          {/* BRAND LOGO */}

          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group inline-flex min-w-0 items-center gap-3"
          >
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center sm:h-12 sm:w-12">
              <Image
                src="/images/logo.png"
                alt="Autozone Tooling Logo"
                fill
                sizes="(max-width: 640px) 44px, 48px"
                className="object-contain"
                priority
              />
            </div>

            <div className="flex min-w-0 flex-col">
              <span className="font-heading text-lg font-bold uppercase leading-tight tracking-wide text-white transition-colors group-hover:text-amber-400 sm:text-xl">
                AUTOZONE
              </span>

              <span className="mt-1 text-[10px] font-semibold uppercase leading-tight tracking-[0.2em] text-amber-400 sm:text-xs">
                TOOLING
              </span>
            </div>
          </Link>

          {/* ==========================================
              DESKTOP NAVIGATION
          ========================================== */}

          <div className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);

              /* ======================================
                 PRODUCTS DROPDOWN
              ====================================== */

              if (link.name === "Products") {
                return (
                  <div
                    key={link.name}
                    className="group relative flex items-center"
                  >
                    <Link
                      href="/products"
                      aria-current={
                        isActive ? "page" : undefined
                      }
                      className={`relative flex items-center gap-2 py-3 text-sm font-medium tracking-wide transition-colors ${
                        isActive
                          ? "font-semibold text-amber-400"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      Products

                      <FiChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />

                      {isActive && (
                        <span className="absolute bottom-1 left-0 h-0.5 w-full rounded-full bg-amber-500" />
                      )}
                    </Link>

                    {/* PRODUCTS DROPDOWN PANEL */}

                    <div className="invisible absolute left-1/2 top-full z-50 w-[370px] -translate-x-1/2 translate-y-2 rounded-xl border border-slate-700 bg-slate-900 p-3 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="border-b border-slate-800 px-3 pb-3 pt-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
                          Product Categories
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          Explore our precision tooling range
                        </p>
                      </div>

                      <div className="max-h-[60vh] space-y-1 overflow-y-auto py-2">
                        {productCategories.map(
                          (category, index) => (
                            <Link
                              key={category.id}
                              href={`/products#${category.id}`}
                              onClick={() =>
                                handleCategoryClick(
                                  "/products",
                                  category.id
                                )
                              }
                              className="group/item flex items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-slate-800 focus-visible:bg-slate-800 focus-visible:outline-none"
                            >
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-amber-500/10 text-xs font-bold text-amber-400">
                                {String(index + 1).padStart(2, "0")}
                              </span>

                              <span className="flex-1 text-sm font-medium leading-snug text-slate-200 transition-colors group-hover/item:text-amber-400">
                                {category.name}
                              </span>

                              <FiChevronRight className="h-4 w-4 shrink-0 text-slate-500 transition-all group-hover/item:translate-x-1 group-hover/item:text-amber-400" />
                            </Link>
                          )
                        )}
                      </div>

                      <div className="border-t border-slate-800 pt-2">
                        <Link
                          href="/products"
                          className="flex items-center justify-center rounded-lg bg-amber-500 px-4 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-400"
                        >
                          View All Products
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              /* ======================================
                 DESIGN SERVICES DROPDOWN
              ====================================== */

              if (link.name === "Design Services") {
                return (
                  <div
                    key={link.name}
                    className="group relative flex items-center"
                  >
                    <Link
                      href="/design-services"
                      aria-current={
                        isActive ? "page" : undefined
                      }
                      className={`relative flex items-center gap-2 whitespace-nowrap py-3 text-sm font-medium tracking-wide transition-colors ${
                        isActive
                          ? "font-semibold text-amber-400"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      Design Services

                      <FiChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />

                      {isActive && (
                        <span className="absolute bottom-1 left-0 h-0.5 w-full rounded-full bg-amber-500" />
                      )}
                    </Link>

                    {/* DESIGN DROPDOWN PANEL */}

                    <div className="invisible absolute left-1/2 top-full z-50 w-[370px] -translate-x-1/2 translate-y-2 rounded-xl border border-slate-700 bg-slate-900 p-3 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="border-b border-slate-800 px-3 pb-3 pt-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
                          Engineering Design Services
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          CAD, tooling and manufacturing solutions
                        </p>
                      </div>

                      <div className="max-h-[60vh] space-y-1 overflow-y-auto py-2">
                        {designCategories.map(
                          (category, index) => (
                            <Link
                              key={category.id}
                              href={`/design-services#${category.id}`}
                              onClick={() =>
                                handleCategoryClick(
                                  "/design-services",
                                  category.id
                                )
                              }
                              className="group/item flex items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-slate-800 focus-visible:bg-slate-800 focus-visible:outline-none"
                            >
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-amber-500/10 text-xs font-bold text-amber-400">
                                {String(index + 1).padStart(2, "0")}
                              </span>

                              <span className="flex-1 text-sm font-medium leading-snug text-slate-200 transition-colors group-hover/item:text-amber-400">
                                {category.name}
                              </span>

                              <FiChevronRight className="h-4 w-4 shrink-0 text-slate-500 transition-all group-hover/item:translate-x-1 group-hover/item:text-amber-400" />
                            </Link>
                          )
                        )}
                      </div>

                      <div className="border-t border-slate-800 pt-2">
                        <Link
                          href="/design-services"
                          className="flex items-center justify-center rounded-lg bg-amber-500 px-4 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-400"
                        >
                          View All Design Services
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              /* ======================================
                 STANDARD NAVIGATION LINKS
              ====================================== */

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={
                    isActive ? "page" : undefined
                  }
                  className={`relative whitespace-nowrap py-1 text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? "font-semibold text-amber-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}

                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-amber-500" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* DESKTOP CTA */}

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/contact"
              className="transform whitespace-nowrap rounded bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-400"
            >
              Request a Quote
            </Link>
          </div>

          {/* ==========================================
              MOBILE MENU TOGGLE
          ========================================== */}

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen((prev) => !prev);
            }}
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="rounded-md p-2 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 lg:hidden"
          >
            <svg
              className="h-6 w-6"
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

        {/* ==========================================
            MOBILE NAVIGATION MENU
        ========================================== */}

        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="absolute left-0 top-full max-h-[calc(100dvh-110px)] w-full space-y-4 overflow-y-auto border-b border-slate-800 bg-slate-900 px-6 py-6 shadow-2xl lg:hidden"
          >
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);

              /* ======================================
                 MOBILE PRODUCTS DROPDOWN
              ====================================== */

              if (link.name === "Products") {
                return (
                  <div
                    key={link.name}
                    className="space-y-2"
                  >
                    <div
                      className={`flex items-center rounded-lg ${
                        isActive
                          ? "bg-amber-500/10 text-amber-400"
                          : "text-slate-300"
                      }`}
                    >
                      <Link
                        href="/products"
                        onClick={closeMobileMenu}
                        className="flex-1 px-3 py-3 text-base font-medium"
                      >
                        Products
                      </Link>

                      <button
                        type="button"
                        onClick={() =>
                          setMobileProductsOpen((prev) => !prev)
                        }
                        aria-expanded={mobileProductsOpen}
                        aria-controls="mobile-product-categories"
                        aria-label={
                          mobileProductsOpen
                            ? "Collapse product categories"
                            : "Expand product categories"
                        }
                        className="flex h-11 w-12 items-center justify-center rounded-r-lg transition-colors hover:bg-slate-800"
                      >
                        <FiChevronDown
                          className={`h-5 w-5 transition-transform duration-200 ${
                            mobileProductsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {mobileProductsOpen && (
                      <div
                        id="mobile-product-categories"
                        className="ml-3 space-y-1 border-l-2 border-amber-500/40 pl-3"
                      >
                        {productCategories.map((category) => (
                          <Link
                            key={category.id}
                            href={`/products#mobile-${category.id}`}
                            onClick={() =>
                              handleCategoryClick(
                                "/products",
                                `mobile-${category.id}`
                              )
                            }
                            className="block rounded-md px-3 py-2.5 text-sm leading-snug text-slate-400 transition-colors hover:bg-slate-800 hover:text-amber-400"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              /* ======================================
                 MOBILE DESIGN SERVICES DROPDOWN
              ====================================== */

              if (link.name === "Design Services") {
                return (
                  <div
                    key={link.name}
                    className="space-y-2"
                  >
                    <div
                      className={`flex items-center rounded-lg ${
                        isActive
                          ? "bg-amber-500/10 text-amber-400"
                          : "text-slate-300"
                      }`}
                    >
                      <Link
                        href="/design-services"
                        onClick={closeMobileMenu}
                        className="flex-1 px-3 py-3 text-base font-medium"
                      >
                        Design Services
                      </Link>

                      <button
                        type="button"
                        onClick={() =>
                          setMobileDesignOpen((prev) => !prev)
                        }
                        aria-expanded={mobileDesignOpen}
                        aria-controls="mobile-design-categories"
                        aria-label={
                          mobileDesignOpen
                            ? "Collapse design services"
                            : "Expand design services"
                        }
                        className="flex h-11 w-12 items-center justify-center rounded-r-lg transition-colors hover:bg-slate-800"
                      >
                        <FiChevronDown
                          className={`h-5 w-5 transition-transform duration-200 ${
                            mobileDesignOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {mobileDesignOpen && (
                      <div
                        id="mobile-design-categories"
                        className="ml-3 space-y-1 border-l-2 border-amber-500/40 pl-3"
                      >
                        {designCategories.map((category) => (
                          <Link
                            key={category.id}
                            href={`/design-services#${category.id}`}
                            onClick={() =>
                              handleCategoryClick(
                                "/design-services",
                                category.id
                              )
                            }
                            className="block rounded-md px-3 py-2.5 text-sm leading-snug text-slate-400 transition-colors hover:bg-slate-800 hover:text-amber-400"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              /* ======================================
                 MOBILE STANDARD LINKS
              ====================================== */

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={
                    isActive ? "page" : undefined
                  }
                  onClick={closeMobileMenu}
                  className={`block rounded px-3 py-2 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-amber-500/10 font-semibold text-amber-400"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* ==========================================
                MOBILE CONTACT DETAILS
            ========================================== */}

            <div className="space-y-4 border-t border-slate-800 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Contact Autozone Tooling
              </p>

              <div className="space-y-3">
                <div>
                  <p className="mb-1 text-xs font-medium text-amber-400">
                    Mr. Santosh Hodage
                  </p>

                  <a
                    href={`tel:${company.phoneLink1}`}
                    className="text-sm text-slate-300 transition-colors hover:text-amber-400"
                  >
                    {company.phone1}
                  </a>
                </div>

                <div>
                  <p className="mb-1 text-xs font-medium text-amber-400">
                    Mr. Baswaraj Hodage
                  </p>

                  <a
                    href={`tel:${company.phoneLink2}`}
                    className="text-sm text-slate-300 transition-colors hover:text-amber-400"
                  >
                    {company.phone2}
                  </a>
                </div>

                <a
                  href={`mailto:${company.email}`}
                  className="block break-all text-sm text-slate-300 transition-colors hover:text-amber-400"
                >
                  {company.email}
                </a>

                <a
                  href={company.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-slate-400 transition-colors hover:text-amber-400"
                >
                  Sector 07, Bhosari MIDC, Pune - 411026
                  <FiArrowUpRight size={13} />
                </a>
              </div>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block w-full rounded bg-amber-500 py-3 text-center font-semibold text-slate-950 shadow transition-colors hover:bg-amber-400"
              >
                Request a Quote
              </Link>
            </div>

            {/* ==========================================
                MOBILE SOCIAL MEDIA LINKS
            ========================================== */}

            <div className="border-t border-slate-800 pt-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Follow Autozone Tooling
              </p>

              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Autozone Tooling on ${social.name}`}
                      className={`flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3 text-sm font-medium text-slate-300 transition-all duration-200 ${social.hover}`}
                    >
                      <Icon size={17} />

                      <span>{social.name}</span>

                      <FiArrowUpRight
                        size={13}
                        className="opacity-60"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
