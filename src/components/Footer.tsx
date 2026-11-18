
import Link from "next/link";
import Image from "next/image";

/* ==========================================
   CONTACT DETAILS
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
   FACEBOOK ICON
========================================== */

function FacebookIcon({
  className = "w-5 h-5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

/* ==========================================
   INSTAGRAM ICON
========================================== */

function InstagramIcon({
  className = "w-5 h-5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        ry="5"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

/* ==========================================
   LINKEDIN ICON
========================================== */

function LinkedInIcon({
  className = "w-5 h-5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.46 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.29 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.52 2.79-1.52 2.99 0 3.58 1.97 3.58 4.53v5.24Z" />
    </svg>
  );
}

/* ==========================================
   INDIAMART ICON
   MARKETPLACE SYMBOL
   NO EXTERNAL ICON PACKAGE REQUIRED
========================================== */

function IndiaMartIcon({
  className = "w-5 h-5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="7"
        width="18"
        height="14"
        rx="2"
      />

      <path d="M8 7V5a4 4 0 0 1 8 0v2" />

      <path d="M7 12h10M7 16h6" />
    </svg>
  );
}

/* ==========================================
   WHATSAPP ICON
========================================== */

function WhatsAppIcon({
  className = "w-4 h-4",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.48 0 .12 5.35.12 11.93c0 2.1.55 4.16 1.6 5.98L0 24l6.25-1.64a11.93 11.93 0 0 0 5.8 1.48h.01C18.64 23.84 24 18.49 24 11.91a11.86 11.86 0 0 0-3.48-8.43ZM12.06 21.82a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.74.98.99-3.64-.24-.37a9.9 9.9 0 0 1-1.52-5.27c0-5.47 4.45-9.92 9.92-9.92a9.86 9.86 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.93 9.92Zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

/* ==========================================
   LOCATION ICON
========================================== */

function LocationIcon({
  className = "w-4 h-4",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />

      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/* ==========================================
   SOCIAL LINKS
========================================== */

const socialLinks = [
  {
    name: "Facebook",
    href: company.facebook,
    Icon: FacebookIcon,
    hoverClass:
      "hover:bg-blue-600 hover:border-blue-600 hover:text-white",
  },
  {
    name: "Instagram",
    href: company.instagram,
    Icon: InstagramIcon,
    hoverClass:
      "hover:bg-pink-600 hover:border-pink-600 hover:text-white",
  },
  {
    name: "LinkedIn",
    href: company.linkedin,
    Icon: LinkedInIcon,
    hoverClass:
      "hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white",
  },
  {
    name: "IndiaMART",
    href: company.indiamart,
    Icon: IndiaMartIcon,
    hoverClass:
      "hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white",
  },
];

/* ==========================================
   FOOTER COMPONENT
========================================== */

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 font-sans text-slate-300">

      {/* ======================================
          MAIN FOOTER
      ====================================== */}

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">

          {/* ==================================
              COLUMN 1 & 2
              BRAND INFORMATION
          ================================== */}

          <div className="space-y-6 lg:col-span-2">

            {/* LOGO & BRAND NAME */}

            <Link
              href="/"
              className="group inline-flex items-center gap-3"
            >
              <div className="relative h-12 w-12 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Autozone Tooling Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold uppercase tracking-wide text-white">
                  AUTOZONE
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                  TOOLING
                </span>
              </div>
            </Link>

            {/* COMPANY DESCRIPTION */}

            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Autozone Tooling specializes in CNC press brake
              tooling and shearing blades for the sheet metal
              fabrication industry. We provide precision tooling
              solutions designed to support reliable bending,
              cutting, and industrial manufacturing operations.
            </p>

            {/* SPECIALIZATION CARD */}

            <div className="space-y-2 rounded-lg border border-slate-800/80 bg-slate-900/80 p-4">
              <span className="block text-xs font-semibold uppercase tracking-wider text-amber-400">
                Our Specialization
              </span>

              <p className="text-xs leading-relaxed text-slate-400">
                CNC Press Brake Tooling, Press Brake Punches,
                Press Brake Dies, Shearing Blades, and
                Custom Tooling Solutions.
              </p>
            </div>

            {/* ==================================
                CONTACT DETAILS
            ================================== */}

            <div className="space-y-4 pt-2 text-sm">
              <h3 className="font-semibold text-white">
                Contact Details
              </h3>

              {contacts.map((contact) => (
                <div
                  key={contact.phoneLink}
                  className="space-y-1.5"
                >
                  <p className="text-xs font-semibold text-amber-400">
                    {contact.name}
                  </p>

                  <a
                    href={`tel:${contact.phoneLink}`}
                    className="block font-semibold text-slate-300 transition-colors hover:text-amber-400"
                  >
                    {contact.phone}
                  </a>

                  <a
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-400 transition-colors hover:text-emerald-300"
                  >
                    <WhatsAppIcon />
                    WhatsApp
                  </a>
                </div>
              ))}

              {/* EMAIL */}

              <div className="pt-2">
                <a
                  href={`mailto:${company.email}`}
                  className="block break-all text-slate-300 transition-colors hover:text-amber-400"
                >
                  {company.email}
                </a>
              </div>
            </div>

            {/* ==================================
                FOLLOW AUTOZONE TOOLING
            ================================== */}

            <div className="space-y-3 pt-3">
              <h3 className="text-sm font-semibold text-white">
                Follow Autozone Tooling
              </h3>

              <p className="text-xs text-slate-400">
                Connect with us for product updates, industry
                insights, and tooling solutions.
              </p>

              {/* SOCIAL ICONS */}

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.Icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Autozone Tooling on ${social.name}`}
                      title={social.name}
                      className={`flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-300 transition-all duration-300 hover:-translate-y-1 ${social.hoverClass}`}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ==================================
              COLUMN 3
              QUICK LINKS
          ================================== */}

          <div className="space-y-4">
            <h3 className="border-l-2 border-amber-500 pl-3 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-amber-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ==================================
              COLUMN 4
              BUSINESS ADDRESS
          ================================== */}

          <div className="space-y-4">
            <h3 className="border-l-2 border-amber-500 pl-3 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Our Location
            </h3>

            <div className="space-y-3 text-sm leading-relaxed text-slate-400">
              <p className="font-semibold text-white">
                Autozone Tooling
              </p>

              <address className="not-italic">
                Sector No. 07,
                <br />
                Plot No. 256,
                <br />
                PCNTDA, MIDC,
                <br />
                Bhosari,
                <br />
                Pune - 411026,
                <br />
                Maharashtra, India.
              </address>

              {/* GOOGLE MAPS LOCATION */}

              <a
                href={company.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 pt-2 text-sm font-medium text-amber-400 transition-colors hover:text-amber-300"
              >
                <LocationIcon />

                Get Directions

                <span aria-hidden="true">↗</span>
              </a>

              {/* GOOGLE MAPS CTA */}

              <a
                href={company.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-900 px-4 py-3 text-xs font-semibold text-slate-300 transition-all hover:border-amber-500 hover:text-amber-400"
              >
                <LocationIcon />

                View on Google Maps
              </a>
            </div>
          </div>

          {/* ==================================
              COLUMN 5
              BUSINESS DETAILS & CONNECT
          ================================== */}

          <div className="space-y-6">

            {/* BUSINESS INFORMATION */}

            <div className="space-y-4">
              <h3 className="border-l-2 border-amber-500 pl-3 font-heading text-sm font-semibold uppercase tracking-wider text-white">
                Business Details
              </h3>

              <div className="space-y-3 text-sm text-slate-400">

                {/* BUSINESS NAME */}

                <div>
                  <p className="mb-1 text-xs text-slate-500">
                    Business Name
                  </p>

                  <p className="font-medium text-white">
                    {company.name}
                  </p>
                </div>

                {/* GSTIN */}

                <div>
                  <p className="mb-1 text-xs text-slate-500">
                    GSTIN
                  </p>

                  <p className="break-all text-xs font-semibold tracking-wide text-amber-400">
                    {company.gstin}
                  </p>
                </div>

                {/* SPECIALIZATION */}

                <div>
                  <p className="mb-1 text-xs text-slate-500">
                    Specialization
                  </p>

                  <p className="text-sm leading-relaxed text-slate-300">
                    CNC Press Brake Tooling & Shearing Blades
                  </p>
                </div>
              </div>
            </div>

            {/* ==================================
                CONNECT WITH US
            ================================== */}

            <div className="space-y-3">
              <h3 className="border-l-2 border-amber-500 pl-3 font-heading text-sm font-semibold uppercase tracking-wider text-white">
                Connect With Us
              </h3>

              <p className="text-xs leading-relaxed text-slate-400">
                Have a tooling requirement? Contact our team
                for product information and quotations.
              </p>

              {/* WHATSAPP */}

              <a
                href={`https://wa.me/${contacts[0].whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-emerald-500"
              >
                <WhatsAppIcon />

                WhatsApp Inquiry
              </a>

              {/* REQUEST QUOTE */}

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-md bg-amber-500 px-4 py-3 text-xs font-semibold text-slate-950 transition-colors hover:bg-amber-400"
              >
                Request a Quote
              </Link>

              {/* EMAIL */}

              <a
                href={`mailto:${company.email}`}
                className="flex items-center justify-center gap-2 rounded-md border border-slate-700 px-4 py-3 text-xs font-semibold text-slate-300 transition-colors hover:border-amber-500 hover:text-amber-400"
              >
                Send an Email
              </a>

              {/* ==================================
                  INDIAMART PROFILE BUTTON
              ================================== */}

              <a
                href={company.indiamart}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Autozone Tooling IndiaMART Profile"
                className="flex items-center justify-center gap-2 rounded-md border border-blue-500/40 bg-blue-500/10 px-4 py-3 text-xs font-semibold text-blue-300 transition-all hover:border-blue-400 hover:bg-blue-500/20 hover:text-white"
              >
                <IndiaMartIcon className="h-4 w-4" />

                View Our IndiaMART Profile

                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* ==================================
                SOCIAL NETWORK LINKS
            ================================== */}

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                Our Social Networks
              </h4>

              {socialLinks.map((social) => {
                const Icon = social.Icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-xs text-slate-400 transition-colors hover:text-amber-400"
                  >
                    <Icon className="h-4 w-4" />

                    {social.name}

                    <span aria-hidden="true">↗</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ======================================
          BOTTOM COPYRIGHT & LEGAL BAR
      ====================================== */}

      <div className="border-t border-slate-800 bg-slate-950/80 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">

          {/* COPYRIGHT */}

          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Autozone Tooling.
            All rights reserved.
          </p>

          {/* SOCIAL & LEGAL LINKS */}

          <div className="flex flex-wrap items-center justify-center gap-5">

            {/* SOCIAL ICONS */}

            {socialLinks.map((social) => {
              const Icon = social.Icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Autozone Tooling on ${social.name}`}
                  title={social.name}
                  className="transition-colors hover:text-amber-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}

            {/* DIVIDER */}

            <span className="hidden h-4 w-px bg-slate-800 sm:block" />

            {/* PRIVACY POLICY */}

            <Link
              href="/privacy"
              className="transition-colors hover:text-slate-300"
            >
              Privacy Policy
            </Link>

            {/* TERMS OF SERVICE */}

            <Link
              href="/terms"
              className="transition-colors hover:text-slate-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
