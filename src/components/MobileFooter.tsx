
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FiArrowUpRight,
  FiChevronDown,
  FiPhone,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiArrowRight,
  FiFileText,
  FiBriefcase,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiExternalLink,
  FiShoppingBag,
} from "react-icons/fi";

/* ==========================================
   COMPANY CONTACT DETAILS
========================================== */

const contacts = [
  {
    name: "Mr. Santosh Hodage",
    phone: "+91 9011452458",
    phoneLink: "+919011452458",
    whatsapp: "919011452458",
  },
  {
    name: "Mr. Baswaraj Hodage",
    phone: "+91 9922566974",
    phoneLink: "+919922566974",
    whatsapp: "919922566974",
  },
];

/* ==========================================
   COMPANY INFORMATION
========================================== */

const company = {
  name: "Autozone Tooling",
  email: "autozone.tooling@gmail.com",
  gstin: "27ACWPH8035L1ZW",

  address:
    "Sector No. 07, Plot No. 256, PCNTDA, MIDC, Bhosari, Pune - 411026, Maharashtra, India",

  mapUrl:
    "https://www.google.com/maps/place/Autozone+Tooling/@18.6425895,73.8367515,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b94881f1ca1b:0xb68dfd77de68ec3c!8m2!3d18.6425895!4d73.8393264!16s%2Fg%2F11lw8q15fv?entry=ttu",

  facebook:
    "https://www.facebook.com/people/Autozone-Tooling/61593862056621/",

  instagram:
    "https://www.instagram.com/autozonetooling/",

  linkedin:
    "https://www.linkedin.com/in/autozone-tooling-23721b291/",

  indiamart:
    "https://www.indiamart.com/autozonetooling/profile.html",
};

/* ==========================================
   QUICK LINKS
========================================== */

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Design Services", href: "/design-services" },
  { label: "Clients", href: "/clients" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

/* ==========================================
   SOCIAL LINKS
========================================== */

const socialLinks = [
  {
    name: "Facebook",
    href: company.facebook,
    icon: FiFacebook,
    hover:
      "hover:bg-blue-600 hover:border-blue-600 hover:text-white",
  },
  {
    name: "Instagram",
    href: company.instagram,
    icon: FiInstagram,
    hover:
      "hover:bg-pink-600 hover:border-pink-600 hover:text-white",
  },
  {
    name: "LinkedIn",
    href: company.linkedin,
    icon: FiLinkedin,
    hover:
      "hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white",
  },
  {
    name: "IndiaMART",
    href: company.indiamart,
    icon: FiShoppingBag,
    hover:
      "hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white",
  },
];

/* ==========================================
   ACCORDION TYPES
========================================== */

type AccordionKey =
  | "links"
  | "contacts"
  | "business";

/* ==========================================
   MOBILE FOOTER COMPONENT
========================================== */

export default function MobileFooter() {
  const [openSection, setOpenSection] =
    useState<AccordionKey | null>("contacts");

  const toggleSection = (section: AccordionKey) => {
    setOpenSection((current) =>
      current === section ? null : section
    );
  };

  /* ==========================================
     WHATSAPP MESSAGE
  ========================================== */

  const whatsappMessage = encodeURIComponent(
    "Hello Autozone Tooling, I would like to enquire about your press brake tooling products."
  );

  const whatsappUrl =
    `https://wa.me/${contacts[0].whatsapp}?text=${whatsappMessage}`;

  return (
    <footer className="border-t border-slate-800 bg-slate-950 font-sans text-white">
      <div className="mx-auto max-w-lg px-5 pb-8 pt-12">

        {/* ==================================
            BRAND
        ================================== */}

        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-3"
            aria-label="Autozone Tooling home"
          >
            <div className="relative h-12 w-12 shrink-0">
              <Image
                src="/images/logo.avif"
                alt="Autozone Tooling Logo"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-[21px] font-bold leading-tight tracking-wide text-white">
                AUTOZONE
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-400">
                TOOLING
              </span>
            </div>
          </Link>

          <p className="mt-5 max-w-sm text-[13px] leading-[1.85] text-slate-400">
            Precision CNC press brake tooling, shearing
            blades, and custom-engineered solutions for
            dependable industrial manufacturing.
          </p>
        </div>

        {/* ==================================
            PRIMARY CONTACT CTA
        ================================== */}

        <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-5">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-400">
              Let&apos;s Work Together
            </span>
          </div>

          <h2 className="mt-3 text-[23px] font-semibold leading-tight tracking-[-0.035em]">
            Need precision
            <br />
            <span className="text-amber-400">
              tooling solutions?
            </span>
          </h2>

          <p className="mt-3 text-[12px] leading-[1.8] text-slate-400">
            Share your requirements with our team and
            request a quotation.
          </p>

          <Link
            href="/contact"
            className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 text-[12px] font-semibold text-slate-950 transition-colors active:bg-amber-400"
          >
            Request a Quote
            <FiArrowRight size={16} />
          </Link>

          <div className="mt-3 grid grid-cols-2 gap-3">

            {/* WHATSAPP */}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3 text-[12px] font-semibold text-white transition-colors active:border-emerald-500"
            >
              <FiMessageCircle
                size={16}
                className="text-emerald-400"
              />
              WhatsApp
            </a>

            {/* CALL */}

            <a
              href={`tel:${contacts[0].phoneLink}`}
              className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3 text-[12px] font-semibold text-white transition-colors active:border-amber-400"
            >
              <FiPhone
                size={15}
                className="text-amber-400"
              />
              Call Us
            </a>
          </div>
        </div>

        {/* ==================================
            LOCATION
        ================================== */}

        <div className="mt-9">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-amber-400">
              <FiMapPin size={19} />
            </span>

            <div className="min-w-0 flex-1">
              <h3 className="text-[13px] font-semibold text-white">
                Visit Our Facility
              </h3>

              <address className="mt-2 text-[12px] not-italic leading-[1.85] text-slate-400">
                {company.address}
              </address>

              <a
                href={company.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-9 items-center gap-1.5 text-[12px] font-semibold text-amber-400"
              >
                Get Directions
                <FiArrowUpRight size={15} />
              </a>

              <a
                href={company.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex min-h-11 w-fit items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 text-[11px] font-semibold text-slate-300 transition-colors active:border-amber-400 active:text-amber-400"
              >
                <FiMapPin
                  size={15}
                  className="text-amber-400"
                />

                View on Google Maps

                <FiExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* ==================================
            SOCIAL MEDIA
        ================================== */}

        <div className="mt-9 rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <div>
            <h3 className="text-[13px] font-semibold text-white">
              Follow Autozone Tooling
            </h3>

            <p className="mt-1.5 text-[11px] leading-relaxed text-slate-400">
              Stay connected for updates and industry insights.
            </p>
          </div>

          {/* FOUR SOCIAL LINKS - TWO-COLUMN GRID */}

          <div className="mt-5 grid grid-cols-2 gap-3">
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
                  className={`flex min-h-14 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-2 py-3 text-[12px] font-semibold text-slate-300 transition-all duration-200 active:scale-[0.98] ${social.hover}`}
                >
                  <Icon size={18} />

                  <span className="text-center">
                    {social.name}
                  </span>

                  <FiArrowUpRight
                    size={13}
                    className="shrink-0 opacity-60"
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* ==================================
            INDIAMART PROFILE CTA
        ================================== */}

        <div className="mt-5 rounded-xl border border-blue-500/25 bg-gradient-to-br from-blue-500/10 via-slate-900 to-slate-900 p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10 text-blue-300">
              <FiShoppingBag size={20} />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-[13px] font-semibold text-white">
                Explore Us on IndiaMART
              </h3>

              <p className="mt-2 text-[11px] leading-[1.8] text-slate-400">
                Visit our IndiaMART business profile
                for product information and enquiries.
              </p>
            </div>
          </div>

          <a
            href={company.indiamart}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex min-h-11 items-center justify-center gap-2 rounded-lg border border-blue-500/40 bg-blue-500/15 px-4 text-[12px] font-semibold text-blue-200 transition-colors hover:bg-blue-500/25 active:bg-blue-500/30"
          >
            View Our IndiaMART Profile

            <FiExternalLink size={14} />
          </a>
        </div>

        {/* ==================================
            ACCORDION SECTIONS
        ================================== */}

        <div className="mt-8 divide-y divide-slate-800 border-y border-slate-800">

          {/* ==================================
              QUICK LINKS
          ================================== */}

          <div>
            <button
              type="button"
              onClick={() => toggleSection("links")}
              aria-expanded={openSection === "links"}
              aria-controls="mobile-footer-links"
              className="flex min-h-16 w-full items-center justify-between gap-4 text-left"
            >
              <span className="flex items-center gap-3">
                <FiFileText
                  size={18}
                  className="text-amber-400"
                />

                <span className="text-[13px] font-semibold">
                  Quick Links
                </span>
              </span>

              <FiChevronDown
                size={18}
                className={`text-slate-400 transition-transform duration-200 ${
                  openSection === "links"
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {openSection === "links" && (
              <nav
                id="mobile-footer-links"
                aria-label="Footer navigation"
                className="pb-5 pl-8"
              >
                <ul className="space-y-1">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex min-h-10 items-center justify-between py-2 text-[12px] text-slate-300 transition-colors active:text-amber-400"
                      >
                        {link.label}

                        <FiArrowUpRight
                          size={14}
                          className="text-slate-500"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          {/* ==================================
              CONTACT DETAILS
          ================================== */}

          <div>
            <button
              type="button"
              onClick={() => toggleSection("contacts")}
              aria-expanded={openSection === "contacts"}
              aria-controls="mobile-footer-contacts"
              className="flex min-h-16 w-full items-center justify-between gap-4 text-left"
            >
              <span className="flex items-center gap-3">
                <FiPhone
                  size={18}
                  className="text-amber-400"
                />

                <span className="text-[13px] font-semibold">
                  Contact Details
                </span>
              </span>

              <FiChevronDown
                size={18}
                className={`text-slate-400 transition-transform duration-200 ${
                  openSection === "contacts"
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {openSection === "contacts" && (
              <div
                id="mobile-footer-contacts"
                className="space-y-5 pb-6 pl-8"
              >
                {contacts.map((contact) => (
                  <div key={contact.phoneLink}>
                    <p className="text-[11px] font-semibold text-amber-400">
                      {contact.name}
                    </p>

                    <a
                      href={`tel:${contact.phoneLink}`}
                      className="mt-2 inline-flex min-h-8 items-center text-[13px] font-medium text-white"
                    >
                      {contact.phone}
                    </a>

                    <a
                      href={`https://wa.me/${contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 flex min-h-8 w-fit items-center gap-1.5 text-[11px] font-medium text-emerald-400"
                    >
                      <FiMessageCircle size={14} />

                      WhatsApp
                    </a>
                  </div>
                ))}

                {/* EMAIL */}

                <a
                  href={`mailto:${company.email}`}
                  className="flex min-h-10 items-center gap-2 break-all text-[12px] text-slate-300"
                >
                  <FiMail
                    size={16}
                    className="shrink-0 text-amber-400"
                  />

                  {company.email}
                </a>
              </div>
            )}
          </div>

          {/* ==================================
              BUSINESS INFORMATION
          ================================== */}

          <div>
            <button
              type="button"
              onClick={() => toggleSection("business")}
              aria-expanded={openSection === "business"}
              aria-controls="mobile-footer-business"
              className="flex min-h-16 w-full items-center justify-between gap-4 text-left"
            >
              <span className="flex items-center gap-3">
                <FiBriefcase
                  size={18}
                  className="text-amber-400"
                />

                <span className="text-[13px] font-semibold">
                  Business Information
                </span>
              </span>

              <FiChevronDown
                size={18}
                className={`text-slate-400 transition-transform duration-200 ${
                  openSection === "business"
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {openSection === "business" && (
              <div
                id="mobile-footer-business"
                className="space-y-5 pb-6 pl-8"
              >
                {/* BUSINESS NAME */}

                <div>
                  <p className="text-[11px] text-slate-500">
                    Business Name
                  </p>

                  <p className="mt-1 text-[12px] font-medium text-white">
                    {company.name}
                  </p>
                </div>

                {/* GSTIN */}

                <div>
                  <p className="text-[11px] text-slate-500">
                    GSTIN
                  </p>

                  <p className="mt-1 break-all text-[12px] font-semibold tracking-wide text-amber-400">
                    {company.gstin}
                  </p>
                </div>

                {/* SPECIALIZATION */}

                <div>
                  <p className="text-[11px] text-slate-500">
                    Specialization
                  </p>

                  <p className="mt-1 text-[12px] leading-[1.8] text-slate-300">
                    CNC Press Brake Tooling, Press Brake
                    Punches, Press Brake Dies, Shearing
                    Blades, and Custom Tooling Solutions.
                  </p>
                </div>

                {/* INDIAMART BUSINESS PROFILE */}

                <div>
                  <p className="text-[11px] text-slate-500">
                    IndiaMART Business Profile
                  </p>

                  <a
                    href={company.indiamart}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex min-h-9 items-center gap-2 text-[12px] font-semibold text-amber-400 transition-colors hover:text-amber-300"
                  >
                    <FiShoppingBag size={15} />

                    View IndiaMART Profile

                    <FiExternalLink size={13} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ==================================
            LEGAL LINKS
        ================================== */}

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <Link
            href="/privacy"
            className="text-[11px] text-slate-400 transition-colors active:text-amber-400"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="text-[11px] text-slate-400 transition-colors active:text-amber-400"
          >
            Terms of Service
          </Link>
        </div>

        {/* ==================================
            COPYRIGHT
        ================================== */}

        <div className="mt-7 border-t border-slate-800 pt-6 text-center">
          <p className="text-[11px] leading-relaxed text-slate-500">
            © {new Date().getFullYear()} Autozone Tooling.
            <br />
            All rights reserved.
          </p>

          <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.15em] text-slate-600">
            Precision Tooling. Reliable Partnerships.
          </p>
        </div>
      </div>
    </footer>
  );
}
