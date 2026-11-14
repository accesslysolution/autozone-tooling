
import type { Metadata } from "next";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFileText,
  FiFacebook,
  FiLinkedin,
  FiArrowUpRight,
  FiMessageCircle,
  FiExternalLink,
} from "react-icons/fi";

/* ==========================================
   SEO METADATA
========================================== */

export const metadata: Metadata = {
  title: "Contact Us | Autozone Tooling",
  description:
    "Contact Autozone Tooling in Bhosari MIDC, Pune for CNC press brake tooling, punches, dies, shearing blades, and custom tooling quotations.",
  openGraph: {
    title: "Contact Autozone Tooling | Pune",
    description:
      "Get in touch with Autozone Tooling for precision CNC press brake tooling, shearing blades, and custom industrial tooling solutions.",
    type: "website",
  },
};

/* ==========================================
   CONTACT PERSONS
========================================== */

const contactPersons = [
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
   BUSINESS INFORMATION
========================================== */

const business = {
  name: "Autozone Tooling",
  email: "autozone.tooling@gmail.com",
  gstin: "27ACWPH8035L1ZW",

  address:
    "Sector No. 07, Plot No. 256, PCNTDA, MIDC, Bhosari, Pune - 411026, Maharashtra, India",

  mapUrl:
    "https://www.google.com/maps/place/Autozone+Tooling/@18.6425895,73.8367515,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b94881f1ca1b:0xb68dfd77de68ec3c!8m2!3d18.6425895!4d73.8393264!16s%2Fg%2F11lw8q15fv?entry=ttu",

  facebook:
    "https://www.facebook.com/people/Autozone-Tooling/61593862056621/",

  linkedin:
    "https://www.linkedin.com/in/autozone-tooling-23721b291/",
};

/* ==========================================
   SOCIAL MEDIA
========================================== */

const socialLinks = [
  {
    name: "Facebook",
    href: business.facebook,
    icon: FiFacebook,
    hover:
      "hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400",
  },
  {
    name: "LinkedIn",
    href: business.linkedin,
    icon: FiLinkedin,
    hover:
      "hover:border-sky-500 hover:bg-sky-500/10 hover:text-sky-400",
  },
];

/* ==========================================
   CONTACT PAGE
========================================== */

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-16 font-sans text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ==================================
            PAGE HEADER
        ================================== */}

        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            Get In Touch
          </span>

          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Contact Our Engineering Team
          </h1>

          <p className="text-base text-slate-400 sm:text-lg">
            Looking for precision CNC press brake tooling,
            punches, dies, or shearing blades? Connect with
            Autozone Tooling for product inquiries, technical
            requirements, and customized tooling quotations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">

          {/* ==================================
              LEFT COLUMN
          ================================== */}

          <div className="space-y-6 lg:col-span-1">

            {/* CONTACT PERSONS */}
            <div className="space-y-5 rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-lg">

              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-amber-500/10 text-amber-400">
                <FiPhone size={20} />
              </div>

              <h3 className="font-heading text-lg font-bold text-white">
                Contact Details
              </h3>

              <p className="text-sm text-slate-400">
                Speak directly with our team for tooling
                requirements, technical assistance, and quotations.
              </p>

              <div className="space-y-5">
                {contactPersons.map((person, index) => (
                  <div
                    key={person.phoneLink}
                    className={
                      index !== 0
                        ? "border-t border-slate-800 pt-5"
                        : ""
                    }
                  >
                    <h4 className="text-base font-semibold text-white">
                      {person.name}
                    </h4>

                    <a
                      href={`tel:${person.phoneLink}`}
                      className="mt-2 block text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300"
                    >
                      {person.phone}
                    </a>

                    <a
                      href={`https://wa.me/${person.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-400 transition-colors hover:bg-emerald-500/20"
                    >
                      <FiMessageCircle size={15} />
                      Chat on WhatsApp
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* EMAIL CARD */}
            <div className="space-y-3 rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-lg">

              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-amber-500/10 text-amber-400">
                <FiMail size={20} />
              </div>

              <h3 className="font-heading text-lg font-bold text-white">
                Email Us
              </h3>

              <p className="text-sm text-slate-400">
                Send us your technical drawings, CAD files,
                product specifications, or quotation requests.
              </p>

              <a
                href={`mailto:${business.email}`}
                className="inline-block break-all pt-1 text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300"
              >
                {business.email}
              </a>
            </div>

            {/* LOCATION CARD */}
            <div className="space-y-3 rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-lg">

              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-amber-500/10 text-amber-400">
                <FiMapPin size={20} />
              </div>

              <h3 className="font-heading text-lg font-bold text-white">
                Our Location
              </h3>

              <address className="text-sm not-italic leading-relaxed text-slate-400">
                <strong className="text-white">
                  Autozone Tooling
                </strong>
                <br />
                Sector No. 07, Plot No. 256,
                <br />
                PCNTDA, MIDC, Bhosari,
                <br />
                Pune - 411026,
                <br />
                Maharashtra, India.
              </address>

              <a
                href={business.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300"
              >
                Get Directions
                <FiArrowUpRight size={16} />
              </a>

              <a
                href={business.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-800 px-4 py-3 text-xs font-semibold text-slate-300 transition-colors hover:border-amber-500 hover:text-amber-400"
              >
                <FiMapPin size={16} />
                View on Google Maps
                <FiExternalLink size={14} />
              </a>
            </div>

            {/* SOCIAL MEDIA CARD */}
            <div className="space-y-4 rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-lg">

              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-amber-500/10 text-amber-400">
                <FiLinkedin size={20} />
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-white">
                  Connect With Us
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Follow Autozone Tooling for company updates,
                  product information, and industry insights.
                </p>
              </div>

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
                      className={`flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-950 px-3 text-xs font-semibold text-slate-300 transition-all ${social.hover}`}
                    >
                      <Icon size={17} />
                      {social.name}
                      <FiArrowUpRight size={13} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* BUSINESS INFORMATION CARD */}
            <div className="space-y-3 rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-lg">

              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-amber-500/10 text-amber-400">
                <FiFileText size={20} />
              </div>

              <h3 className="font-heading text-lg font-bold text-white">
                Business Information
              </h3>

              <div className="space-y-2">
                <p className="text-sm text-slate-400">
                  Registered Business Name
                </p>

                <p className="text-sm font-semibold text-white">
                  {business.name}
                </p>

                <p className="pt-2 text-sm text-slate-400">
                  GST Identification Number
                </p>

                <p className="break-all text-sm font-semibold tracking-wide text-amber-400">
                  {business.gstin}
                </p>
              </div>
            </div>

          </div>

          {/* ==================================
              RIGHT COLUMN - QUOTE FORM
          ================================== */}

          <div className="rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-xl sm:p-10 lg:col-span-2">

            <h2 className="font-heading mb-3 text-2xl font-bold text-white">
              Request a Quote / Send an Inquiry
            </h2>

            <p className="mb-8 text-sm text-slate-400">
              Share your tooling requirements and specifications
              with our team. We will be happy to assist you.
            </p>

            <form className="space-y-6">

              {/* NAME & COMPANY */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Full Name
                    <span className="text-amber-500"> *</span>
                  </label>

                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-md border border-slate-800 bg-slate-950 px-4 py-3 text-white placeholder-slate-600 transition-colors focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Company Name
                  </label>

                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="Enter company / workshop name"
                    className="w-full rounded-md border border-slate-800 bg-slate-950 px-4 py-3 text-white placeholder-slate-600 transition-colors focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* EMAIL & PHONE */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Email Address
                    <span className="text-amber-500"> *</span>
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="name@company.com"
                    className="w-full rounded-md border border-slate-800 bg-slate-950 px-4 py-3 text-white placeholder-slate-600 transition-colors focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Phone Number
                    <span className="text-amber-500"> *</span>
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Enter your mobile number"
                    className="w-full rounded-md border border-slate-800 bg-slate-950 px-4 py-3 text-white placeholder-slate-600 transition-colors focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* PRODUCT REQUIREMENT */}
              <div className="space-y-2">
                <label
                  htmlFor="productInterest"
                  className="block text-sm font-medium text-slate-300"
                >
                  Product / Tooling Requirement
                </label>

                <select
                  id="productInterest"
                  name="productInterest"
                  defaultValue=""
                  className="w-full rounded-md border border-slate-800 bg-slate-950 px-4 py-3 text-white transition-colors focus:border-amber-500 focus:outline-none"
                >
                  <option value="" disabled>
                    Select your tooling requirement
                  </option>

                  <option value="press-brake-punches">
                    CNC Press Brake Punches
                  </option>

                  <option value="press-brake-dies">
                    CNC Press Brake Dies
                  </option>

                  <option value="hemming-tools">
                    Hemming Tools
                  </option>

                  <option value="radius-tools">
                    Radius Forming Tools
                  </option>

                  <option value="shearing-blades">
                    Shearing Blades
                  </option>

                  <option value="custom-tooling">
                    Custom Tooling Solution
                  </option>

                  <option value="other">
                    Other Requirement
                  </option>
                </select>
              </div>

              {/* MESSAGE */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300"
                >
                  Message / Specifications
                  <span className="text-amber-500"> *</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Please describe your tooling requirement, machine make, material thickness, dimensions, quantity, or any other specifications..."
                  className="w-full resize-none rounded-md border border-slate-800 bg-slate-950 px-4 py-3 text-white placeholder-slate-600 transition-colors focus:border-amber-500 focus:outline-none"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full rounded-md bg-amber-500 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-lg transition-colors hover:bg-amber-400"
              >
                Submit Inquiry / Request Quote
              </button>

              <p className="text-center text-xs text-slate-500">
                For immediate assistance, call us at{" "}
                <a
                  href={`tel:${contactPersons[0].phoneLink}`}
                  className="text-amber-400 hover:text-amber-300"
                >
                  {contactPersons[0].phone}
                </a>
                {" "}or{" "}
                <a
                  href={`tel:${contactPersons[1].phoneLink}`}
                  className="text-amber-400 hover:text-amber-300"
                >
                  {contactPersons[1].phone}
                </a>
                .
              </p>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
