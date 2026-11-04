
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Autozone Tooling",
  description:
    "Contact Autozone Tooling in Bhosari MIDC, Pune for CNC press brake tooling, punches, dies, shearing blades, and custom tooling quotations.",
};

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

const business = {
  name: "Autozone Tooling",
  email: "autozone.tooling@gmail.com",
  gstin: "27ACWPH8035L1ZW",
  address:
    "Sector No. 07, Plot No. 256, PCNTDA, MIDC, Bhosari, Pune - 411026, Maharashtra, India",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Plot+No+256+Sector+7+PCNTDA+MIDC+Bhosari+Pune+411026",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-950 text-white font-sans min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold font-heading tracking-tight">
            Contact Our Engineering Team
          </h1>

          <p className="text-slate-400 text-base sm:text-lg">
            Looking for precision CNC press brake tooling, punches,
            dies, or shearing blades? Connect with Autozone Tooling
            for product inquiries, technical requirements, and
            customized tooling quotations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Column: Contact Information */}
          <div className="lg:col-span-1 space-y-6">

            {/* Contact Persons */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 space-y-5 shadow-lg">

              <div className="w-10 h-10 bg-amber-500/10 rounded-md flex items-center justify-center text-amber-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-heading font-bold text-white">
                Contact Details
              </h3>

              <p className="text-sm text-slate-400">
                Speak directly with our team for tooling requirements,
                technical assistance, and quotations.
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
                    <h4 className="text-white font-semibold text-base">
                      {person.name}
                    </h4>

                    <a
                      href={`tel:${person.phoneLink}`}
                      className="block text-amber-400 hover:text-amber-300 font-semibold text-sm mt-2 transition-colors"
                    >
                      {person.phone}
                    </a>

                    <a
                      href={`https://wa.me/${person.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-2 rounded-md hover:bg-emerald-500/20 transition-colors mt-3"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 space-y-3 shadow-lg">

              <div className="w-10 h-10 bg-amber-500/10 rounded-md flex items-center justify-center text-amber-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-heading font-bold text-white">
                Email Us
              </h3>

              <p className="text-sm text-slate-400">
                Send us your technical drawings, CAD files,
                product specifications, or quotation requests.
              </p>

              <a
                href={`mailto:${business.email}`}
                className="inline-block text-amber-400 hover:text-amber-300 font-semibold text-sm pt-1 break-all transition-colors"
              >
                {business.email}
              </a>
            </div>

            {/* Business Address Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 space-y-3 shadow-lg">

              <div className="w-10 h-10 bg-amber-500/10 rounded-md flex items-center justify-center text-amber-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
              </div>

              <h3 className="text-lg font-heading font-bold text-white">
                Our Location
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
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
              </p>

              <a
                href={business.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm pt-2 transition-colors"
              >
                Get Directions
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* GST Information Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 space-y-3 shadow-lg">

              <div className="w-10 h-10 bg-amber-500/10 rounded-md flex items-center justify-center text-amber-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6M9 8h6M5 3h14a2 2 0 012 2v16l-4-2-5 2-5-2-4 2V5a2 2 0 012-2z"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-heading font-bold text-white">
                Business Information
              </h3>

              <div className="space-y-2">
                <p className="text-sm text-slate-400">
                  Registered Business Name
                </p>
                <p className="text-sm font-semibold text-white">
                  {business.name}
                </p>

                <p className="text-sm text-slate-400 pt-2">
                  GST Identification Number
                </p>
                <p className="text-sm font-semibold text-amber-400 tracking-wide break-all">
                  {business.gstin}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact / Quote Form */}
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-lg p-8 sm:p-10 shadow-xl">

            <h2 className="text-2xl font-bold font-heading text-white mb-3">
              Request a Quote / Send an Inquiry
            </h2>

            <p className="text-sm text-slate-400 mb-8">
              Share your tooling requirements and specifications
              with our team. We will be happy to assist you.
            </p>

            <form className="space-y-6">

              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Full Name <span className="text-amber-500">*</span>
                  </label>

                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="Enter your full name"
                    className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
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
                    className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Email Address <span className="text-amber-500">*</span>
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="name@company.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Phone Number <span className="text-amber-500">*</span>
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Enter your mobile number"
                    className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              {/* Product Requirement */}
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
                  className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
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

              {/* Message */}
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
                  className="w-full bg-slate-950 border border-slate-800 rounded-md px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold py-3.5 px-6 rounded-md shadow-lg transition-colors text-base"
              >
                Submit Inquiry / Request Quote
              </button>

              <p className="text-xs text-slate-500 text-center">
                For immediate assistance, call us at{" "}
                <a
                  href="tel:+919011452458"
                  className="text-amber-400 hover:text-amber-300"
                >
                  +91 9011452458
                </a>
                {" "}or{" "}
                <a
                  href="tel:+919922566974"
                  className="text-amber-400 hover:text-amber-300"
                >
                  +91 9922566974
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
