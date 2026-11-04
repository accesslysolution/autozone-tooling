
import Link from "next/link";
import Image from "next/image";

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

const company = {
  name: "Autozone Tooling",
  email: "autozone.tooling@gmail.com",
  gstin: "27ACWPH8035L1ZW",
  address:
    "Sector No. 07, Plot No. 256, PCNTDA, MIDC, Bhosari, Pune - 411026, Maharashtra, India",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Plot+No+256+Sector+7+PCNTDA+MIDC+Bhosari+Pune+411026",
};

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Clients", href: "/clients" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-800">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Column 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-6">

            {/* Logo & Brand Name */}
            <Link
              href="/"
              className="inline-flex items-center gap-3 group"
            >
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Autozone Tooling Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-white font-heading font-bold text-xl tracking-wide uppercase">
                  AUTOZONE
                </span>

                <span className="text-amber-400 text-xs tracking-[0.2em] font-semibold uppercase">
                  TOOLING
                </span>
              </div>
            </Link>

            {/* Company Description */}
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Autozone Tooling specializes in CNC press brake
              tooling and shearing blades for the sheet metal
              fabrication industry. We provide precision tooling
              solutions designed to support reliable bending,
              cutting, and industrial manufacturing operations.
            </p>

            {/* Specialization Card */}
            <div className="bg-slate-900/80 border border-slate-800/80 p-4 rounded-lg space-y-2">

              <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider block">
                Our Specialization
              </span>

              <p className="text-xs text-slate-400 leading-relaxed">
                CNC Press Brake Tooling, Press Brake Punches,
                Press Brake Dies, Shearing Blades, and
                Custom Tooling Solutions.
              </p>
            </div>

            {/* Contact Details */}
            <div className="pt-2 text-sm space-y-4">

              <h3 className="text-white font-semibold">
                Contact Details
              </h3>

              {contacts.map((contact) => (
                <div
                  key={contact.phoneLink}
                  className="space-y-1.5"
                >
                  <p className="text-xs text-amber-400 font-semibold">
                    {contact.name}
                  </p>

                  <a
                    href={`tel:${contact.phoneLink}`}
                    className="block text-slate-300 hover:text-amber-400 transition-colors font-semibold"
                  >
                    {contact.phone}
                  </a>

                  <a
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M20.52 3.48A11.86 11.86 0 0012.05 0C5.48 0 .12 5.35.12 11.93c0 2.1.55 4.16 1.6 5.98L0 24l6.25-1.64a11.93 11.93 0 005.8 1.48h.01c6.58 0 11.94-5.35 11.94-11.93a11.86 11.86 0 00-3.48-8.43zM12.06 21.82a9.88 9.88 0 01-5.04-1.38l-.36-.21-3.74.98.99-3.64-.24-.37a9.9 9.9 0 01-1.52-5.27c0-5.47 4.45-9.92 9.92-9.92a9.86 9.86 0 017.02 2.91 9.86 9.86 0 012.9 7.02c0 5.47-4.45 9.92-9.93 9.92zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              ))}

              <div className="pt-2">
                <a
                  href={`mailto:${company.email}`}
                  className="block text-slate-300 hover:text-amber-400 transition-colors break-all"
                >
                  {company.email}
                </a>
              </div>

            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">

            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider border-l-2 border-amber-500 pl-3">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Column 4: Business Address */}
          <div className="space-y-4">

            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider border-l-2 border-amber-500 pl-3">
              Our Location
            </h3>

            <div className="text-sm space-y-3 text-slate-400 leading-relaxed">

              <p className="text-white font-semibold">
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

              <a
                href={company.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium text-sm transition-colors pt-2"
              >
                Get Directions
                <span aria-hidden="true">↗</span>
              </a>

            </div>
          </div>

          {/* Column 5: Business Details & Connect */}
          <div className="space-y-6">

            {/* Business Information */}
            <div className="space-y-4">

              <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider border-l-2 border-amber-500 pl-3">
                Business Details
              </h3>

              <div className="text-sm space-y-3 text-slate-400">

                <div>
                  <p className="text-xs text-slate-500 mb-1">
                    Business Name
                  </p>
                  <p className="text-white font-medium">
                    {company.name}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500 mb-1">
                    GSTIN
                  </p>
                  <p className="text-amber-400 font-semibold text-xs tracking-wide break-all">
                    {company.gstin}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500 mb-1">
                    Specialization
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    CNC Press Brake Tooling & Shearing Blades
                  </p>
                </div>

              </div>
            </div>

            {/* Direct Contact Actions */}
            <div className="space-y-3">

              <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider border-l-2 border-amber-500 pl-3">
                Connect With Us
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed">
                Have a tooling requirement? Contact our team
                for product information and quotations.
              </p>

              <a
                href={`https://wa.me/${contacts[0].whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-3 rounded-md transition-colors"
              >
                WhatsApp Inquiry
              </a>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold px-4 py-3 rounded-md transition-colors"
              >
                Request a Quote
              </Link>

              <a
                href={`mailto:${company.email}`}
                className="flex items-center justify-center gap-2 border border-slate-700 hover:border-amber-500 text-slate-300 hover:text-amber-400 text-xs font-semibold px-4 py-3 rounded-md transition-colors"
              >
                Send an Email
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Legal Bar */}
      <div className="border-t border-slate-800 bg-slate-950/80 py-6">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">

          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Autozone Tooling.
            All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-5">

            <Link
              href="/privacy"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </Link>

          </div>

        </div>
      </div>

    </footer>
  );
}
