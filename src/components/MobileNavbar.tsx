
"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FiFacebook,
  FiLinkedin,
  FiArrowUpRight,
  FiMapPin,
  FiChevronDown,
  FiChevronRight,
  FiArrowRight,
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
   UPDATED PRODUCT CATEGORIES
   MATCHES PRODUCTS PAGE
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
   SOCIAL LINKS
========================================== */

const socialLinks = [
  {
    name: "Facebook",
    href: company.facebook,
    icon: FiFacebook,
  },
  {
    name: "LinkedIn",
    href: company.linkedin,
    icon: FiLinkedin,
  },
];

/* ==========================================
   MOBILE NAVBAR
========================================== */

export default function MobileNavbar() {
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [productsOpen, setProductsOpen] =
    useState(false);

  const [designOpen, setDesignOpen] =
    useState(false);

  const [isScrolled, setIsScrolled] =
    useState(false);

  /* ==========================================
     CLIENT MOUNT
  ========================================== */

  useEffect(() => {
    setMounted(true);
  }, []);

  /* ==========================================
     SCROLL EFFECT
  ========================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
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
     CLOSE ON ROUTE CHANGE
  ========================================== */

  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
    setDesignOpen(false);
  }, [pathname]);

  /* ==========================================
     LOCK BACKGROUND SCROLL
  ========================================== */

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [menuOpen]);

  /* ==========================================
     ESCAPE KEY
  ========================================== */

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [menuOpen]);

  /* ==========================================
     MENU HELPERS
  ========================================== */

  const closeMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
    setDesignOpen(false);
  };

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      setMenuOpen(true);
    }
  };

  const isActiveLink = (href: string) => {
    return href === "/"
      ? pathname === "/"
      : pathname === href ||
          pathname.startsWith(`${href}/`);
  };

  /* ==========================================
     CATEGORY NAVIGATION HELPER
  ========================================== */

  const handleCategoryClick = (
    page: string,
    id: string
  ) => {
    closeMenu();

    // On another page, Next.js handles
    // navigation using the URL hash.
    if (pathname !== page) return;

    // On the same page, scroll smoothly
    // to the matching category section.
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const target =
          document.getElementById(id);

        if (!target) return;

        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  };

  /* ==========================================
     PRODUCT CATEGORY NAVIGATION
  ========================================== */

  const handleProductClick = (id: string) => {
    handleCategoryClick(
      "/products",
      `mobile-${id}`
    );
  };

  /* ==========================================
     DESIGN CATEGORY NAVIGATION
  ========================================== */

  const handleDesignClick = (id: string) => {
    handleCategoryClick(
      "/design-services",
      id
    );
  };

  /* ==========================================
     MOBILE DRAWER
  ========================================== */

  const mobileDrawer = (
    <div className="fixed inset-0 z-[10000] md:hidden">

      {/* BACKDROP */}

      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={closeMenu}
        className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm"
      />

      {/* DRAWER */}

      <nav
        id="autozone-mobile-menu"
        aria-label="Mobile navigation"
        className="absolute inset-y-0 right-0 flex w-[min(88vw,380px)] flex-col overflow-hidden border-l border-slate-700 bg-slate-950 shadow-2xl"
      >

        {/* ==================================
            DRAWER HEADER
        ================================== */}

        <div className="flex shrink-0 items-center justify-between border-b border-slate-800 px-5 py-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
              Autozone Tooling
            </p>

            <h2 className="mt-1 font-heading text-xl font-bold text-white">
              Navigation
            </h2>
          </div>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* ==================================
            SCROLLABLE MENU
        ================================== */}

        <div className="min-h-0 flex-1 space-y-2 overflow-y-auto overscroll-contain px-4 py-5">
          {navLinks.map((link) => {
            const isActive =
              isActiveLink(link.href);

            /* ==================================
               PRODUCTS DROPDOWN
            ================================== */

            if (link.name === "Products") {
              return (
                <div key={link.name}>
                  <div
                    className={`flex items-center rounded-xl border ${
                      isActive
                        ? "border-amber-500/30 bg-amber-500/10"
                        : "border-transparent bg-slate-900"
                    }`}
                  >
                    <Link
                      href="/products"
                      onClick={closeMenu}
                      className={`flex-1 px-4 py-3.5 text-sm font-semibold ${
                        isActive
                          ? "text-amber-400"
                          : "text-slate-200"
                      }`}
                    >
                      Products
                    </Link>

                    <button
                      type="button"
                      onClick={() => {
                        setProductsOpen(
                          (previous) => !previous
                        );

                        setDesignOpen(false);
                      }}
                      aria-expanded={productsOpen}
                      aria-controls="mobile-product-list"
                      aria-label={
                        productsOpen
                          ? "Collapse product categories"
                          : "Expand product categories"
                      }
                      className="flex h-12 w-12 items-center justify-center border-l border-slate-700/50 text-slate-400"
                    >
                      <FiChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          productsOpen
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* PRODUCT SUBMENU */}

                  {productsOpen && (
                    <div
                      id="mobile-product-list"
                      className="mt-2 space-y-1 rounded-xl border border-slate-800 bg-slate-900/60 p-2"
                    >
                      <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-amber-400">
                        Product Categories
                      </p>

                      {productCategories.map(
                        (category, index) => (
                          <Link
                            key={category.id}
                            href={`/products#mobile-${category.id}`}
                            onClick={() =>
                              handleProductClick(
                                category.id
                              )
                            }
                            className="flex items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-slate-800 active:bg-slate-800"
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-amber-500/10 text-[10px] font-bold text-amber-400">
                              {String(
                                index + 1
                              ).padStart(2, "0")}
                            </span>

                            <span className="flex-1 text-xs font-medium leading-relaxed text-slate-300">
                              {category.name}
                            </span>

                            <FiChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-500" />
                          </Link>
                        )
                      )}

                      <Link
                        href="/products"
                        onClick={closeMenu}
                        className="mt-2 block rounded-lg bg-amber-500 px-4 py-3 text-center text-xs font-bold text-slate-950"
                      >
                        View All Products
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            /* ==================================
               DESIGN SERVICES DROPDOWN
            ================================== */

            if (link.name === "Design Services") {
              return (
                <div key={link.name}>
                  <div
                    className={`flex items-center rounded-xl border ${
                      isActive
                        ? "border-amber-500/30 bg-amber-500/10"
                        : "border-transparent bg-slate-900"
                    }`}
                  >
                    <Link
                      href="/design-services"
                      onClick={closeMenu}
                      className={`flex-1 px-4 py-3.5 text-sm font-semibold ${
                        isActive
                          ? "text-amber-400"
                          : "text-slate-200"
                      }`}
                    >
                      Design Services
                    </Link>

                    <button
                      type="button"
                      onClick={() => {
                        setDesignOpen(
                          (previous) => !previous
                        );

                        setProductsOpen(false);
                      }}
                      aria-expanded={designOpen}
                      aria-controls="mobile-design-list"
                      aria-label={
                        designOpen
                          ? "Collapse design services"
                          : "Expand design services"
                      }
                      className="flex h-12 w-12 items-center justify-center border-l border-slate-700/50 text-slate-400"
                    >
                      <FiChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          designOpen
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* DESIGN SERVICES SUBMENU */}

                  {designOpen && (
                    <div
                      id="mobile-design-list"
                      className="mt-2 space-y-1 rounded-xl border border-slate-800 bg-slate-900/60 p-2"
                    >
                      <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-amber-400">
                        Engineering Design Services
                      </p>

                      <p className="px-3 pb-2 text-[11px] leading-relaxed text-slate-500">
                        Precision CAD, tooling and
                        manufacturing design
                      </p>

                      {designCategories.map(
                        (category, index) => (
                          <Link
                            key={category.id}
                            href={`/design-services#${category.id}`}
                            onClick={() =>
                              handleDesignClick(
                                category.id
                              )
                            }
                            className="flex items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-slate-800 active:bg-slate-800"
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-amber-500/10 text-[10px] font-bold text-amber-400">
                              {String(
                                index + 1
                              ).padStart(2, "0")}
                            </span>

                            <span className="flex-1 text-xs font-medium leading-relaxed text-slate-300">
                              {category.name}
                            </span>

                            <FiChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-500" />
                          </Link>
                        )
                      )}

                      <Link
                        href="/design-services"
                        onClick={closeMenu}
                        className="mt-2 block rounded-lg bg-amber-500 px-4 py-3 text-center text-xs font-bold text-slate-950"
                      >
                        View All Design Services
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            /* ==================================
               STANDARD NAVIGATION LINKS
            ================================== */

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                aria-current={
                  isActive ? "page" : undefined
                }
                className={`flex items-center justify-between rounded-xl border px-4 py-3.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
                    : "border-transparent bg-slate-900 text-slate-200 active:bg-slate-800"
                }`}
              >
                {link.name}

                <FiChevronRight
                  className={`h-4 w-4 ${
                    isActive
                      ? "text-amber-400"
                      : "text-slate-500"
                  }`}
                />
              </Link>
            );
          })}

          {/* ==================================
              CONTACT DETAILS
          ================================== */}

          <div className="mt-6 border-t border-slate-800 pt-6">
            <p className="mb-4 px-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
              Get in Touch
            </p>

            <div className="space-y-4 rounded-xl bg-slate-900 p-4">

              {/* CONTACT 1 */}

              <div>
                <p className="text-xs text-slate-500">
                  Mr. Santosh Hodage
                </p>

                <a
                  href={`tel:${company.phoneLink1}`}
                  className="mt-1 block text-sm font-medium text-white"
                >
                  {company.phone1}
                </a>
              </div>

              {/* CONTACT 2 */}

              <div>
                <p className="text-xs text-slate-500">
                  Mr. Baswaraj Hodage
                </p>

                <a
                  href={`tel:${company.phoneLink2}`}
                  className="mt-1 block text-sm font-medium text-white"
                >
                  {company.phone2}
                </a>
              </div>

              {/* EMAIL */}

              <a
                href={`mailto:${company.email}`}
                className="block break-all text-xs text-slate-300"
              >
                {company.email}
              </a>

              {/* GOOGLE MAPS */}

              <a
                href={company.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-400 transition-colors hover:text-amber-400"
              >
                <FiMapPin
                  size={15}
                  className="shrink-0 text-amber-400"
                />

                <span>{company.location}</span>

                <FiArrowUpRight
                  size={13}
                  className="shrink-0"
                />
              </a>
            </div>
          </div>

          {/* ==================================
              SOCIAL MEDIA SECTION
          ================================== */}

          <div className="mt-6 border-t border-slate-800 pt-6">
            <p className="mb-4 px-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
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
                    className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 text-xs font-semibold text-slate-300 transition-all hover:border-amber-500/50 hover:text-amber-400 active:bg-slate-800"
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

        {/* ==================================
            DRAWER FOOTER
        ================================== */}

        <div className="shrink-0 border-t border-slate-800 bg-slate-950 p-4 pb-[max(16px,env(safe-area-inset-bottom))]">
          <Link
            href="/contact"
            onClick={closeMenu}
            className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/10"
          >
            Request a Quote

            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </nav>
    </div>
  );

  /* ==========================================
     MOBILE HEADER
  ========================================== */

  return (
    <>
      <header
        className={`relative z-50 w-full bg-slate-950 font-sans transition-shadow duration-300 ${
          isScrolled ? "shadow-xl" : ""
        }`}
      >

        {/* ==================================
            TOP CONTACT STRIP
        ================================== */}

        <div className="border-b border-white/10 bg-slate-900 px-4">
          <div className="mx-auto flex h-9 max-w-lg items-center justify-between gap-2">

            {/* PHONE */}

            <a
              href={`tel:${company.phoneLink1}`}
              className="inline-flex shrink-0 items-center gap-1.5 text-[11px] font-medium text-slate-300"
            >
              <svg
                className="h-3.5 w-3.5 text-amber-400"
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

              {company.phone1}
            </a>

            {/* SOCIAL ICONS */}

            <div className="flex items-center gap-1">
              <a
                href={company.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Autozone Tooling Facebook"
                className="flex h-7 w-7 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-blue-500/10 hover:text-blue-400"
              >
                <FiFacebook size={14} />
              </a>

              <a
                href={company.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Autozone Tooling LinkedIn"
                className="flex h-7 w-7 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-sky-500/10 hover:text-sky-400"
              >
                <FiLinkedin size={14} />
              </a>

              <span className="mx-1 h-4 w-px bg-slate-700" />

              {/* LOCATION */}

              <a
                href={company.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Autozone Tooling on Google Maps"
                className="flex h-7 w-7 items-center justify-center rounded-md text-amber-400 transition-colors hover:bg-amber-500/10"
              >
                <FiMapPin size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* ==================================
            MAIN MOBILE HEADER
        ================================== */}

        <div className="border-b border-white/10 px-4">
          <div className="mx-auto flex h-[68px] max-w-lg items-center justify-between gap-3">

            {/* LOGO */}

            <Link
              href="/"
              onClick={closeMenu}
              className="flex min-w-0 items-center gap-2.5"
            >
              <div className="relative h-11 w-11 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Autozone Tooling Logo"
                  fill
                  sizes="44px"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex flex-col">
                <span className="font-heading text-[17px] font-extrabold leading-none tracking-wide text-white">
                  AUTOZONE
                </span>

                <span className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-amber-400">
                  TOOLING
                </span>
              </div>
            </Link>

            {/* HEADER ACTIONS */}

            <div className="flex shrink-0 items-center gap-2">

              {/* WHATSAPP */}

              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 transition-colors active:bg-emerald-500/20"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0012.05 0C5.48 0 .12 5.35.12 11.93c0 2.1.55 4.16 1.6 5.98L0 24l6.25-1.64a11.93 11.93 0 005.8 1.48h.01c6.58 0 11.94-5.35 11.94-11.93a11.86 11.86 0 00-3.48-8.43zM12.06 21.82a9.88 9.88 0 01-5.04-1.38l-.36-.21-3.74.98.99-3.64-.24-.37a9.9 9.9 0 01-1.52-5.27c0-5.47 4.45-9.92 9.92-9.92a9.86 9.86 0 017.02 2.91 9.86 9.86 0 012.9 7.02c0 5.47-4.45 9.92-9.93 9.92zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
                </svg>
              </a>

              {/* MENU BUTTON */}

              <button
                type="button"
                onClick={toggleMenu}
                aria-label={
                  menuOpen
                    ? "Close menu"
                    : "Open menu"
                }
                aria-expanded={menuOpen}
                aria-controls={
                  menuOpen
                    ? "autozone-mobile-menu"
                    : undefined
                }
                className={`relative flex h-10 w-10 touch-manipulation items-center justify-center rounded-lg border transition-colors ${
                  menuOpen
                    ? "border-amber-500 bg-amber-500 text-slate-950"
                    : "border-slate-700 bg-slate-800 text-white"
                }`}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {menuOpen ? (
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
          </div>
        </div>
      </header>

      {/* ==========================================
          PORTAL DRAWER
      ========================================== */}

      {mounted &&
        menuOpen &&
        createPortal(
          mobileDrawer,
          document.body
        )}
    </>
  );
}
