
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Clients | Autozone Tooling",
  description:
    "Explore the valued clients of Autozone Tooling, Pune. We provide precision CNC press brake tooling, punches, dies, shearing blades, and custom industrial tooling solutions.",
  keywords: [
    "Autozone Tooling Clients",
    "CNC Press Brake Tooling Pune",
    "Industrial Tooling Manufacturers",
    "Press Brake Punches",
    "Shearing Blades",
    "Precision Engineering Pune",
  ],
};

const clients = [
  {
    name: "ADH Machine Tool",
    image: "/clients/ADH Machine Tool Logo.png",
  },
  {
    name: "Sumeco Group of Companies",
    image: "/clients/Sumeco Group Corporate Logo.png",
  },
  {
    name: "DC&T",
    image: "/clients/DC&T Belo India Company Logo.png",
  },
  {
    name: "PSR Toolings and Stampings Pvt. Ltd.",
    image: "/clients/PSR Toolings and Stampings Logo.png",
  },
  {
    name: "Rajesh Global",
    image: "/clients/Rajesh Global Logo with Orange RG Icon.png",
  },
  {
    name: "PAA",
    image: "/clients/PAA Logo with Rising Blue Dots.png",
  },
  {
    name: "Dynamic",
    image: "/clients/Dynamic Working Smarter Logo.png",
  },
  {
    name: "RSB",
    image: "/clients/RSB Globe and House Logo.png",
  },
  {
    name: "Finepac Structures",
    image: "/clients/Finepac Structures Logo on White.png",
  },
  {
    name: "Sawant Group",
    image: "/clients/Sawant Group Geometric Logo.png",
  },
  {
    name: "Glatt",
    image: "/clients/Glatt Logo with Red Swirl.png",
  },
  {
    name: "S&T Engineers",
    image: "/clients/S&T Engineers Globe Logo.png",
  },
  {
    name: "TRUMPF",
    image: "/clients/TRUMPF Logo with Blue Square.png",
  },
  {
    name: "Benninger",
    image: "/clients/Benninger Blue and Orange Logo.png",
  },
];

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans">

      {/* ===================================== */}
      {/* 1. HERO / PAGE HEADER                 */}
      {/* ===================================== */}

      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-10"
          >
            <Link
              href="/"
              className="hover:text-amber-400 transition-colors"
            >
              Home
            </Link>

            <span className="text-slate-600">/</span>

            <span className="text-amber-400 font-medium">
              Our Clients
            </span>
          </nav>

          <div className="max-w-4xl mx-auto text-center space-y-6">

            {/* Eyebrow */}
            <div className="inline-flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-amber-500" />

              <span className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
                Our Valued Clients
              </span>

              <span className="w-8 h-px bg-amber-500" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-tight">
              Trusted by{" "}
              <span className="text-amber-400">
                Industry Leaders
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              At Autozone Tooling, we take pride in building
              strong professional relationships with businesses
              across the engineering, manufacturing, and
              industrial fabrication sectors.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Our commitment to precision engineering,
              dependable tooling solutions, and customer
              satisfaction drives every partnership.
            </p>

          </div>
        </div>
      </section>

      {/* ===================================== */}
      {/* 2. CLIENT STATISTICS BAR              */}
      {/* ===================================== */}

      <section className="bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-heading font-bold text-amber-400">
                {clients.length}
              </div>

              <p className="text-sm text-slate-400 font-medium">
                Featured Clients
              </p>
            </div>

            <div className="space-y-2 sm:border-x sm:border-slate-800">
              <div className="text-3xl sm:text-4xl font-heading font-bold text-amber-400">
                CNC
              </div>

              <p className="text-sm text-slate-400 font-medium">
                Precision Tooling Solutions
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-heading font-bold text-amber-400">
                Pune
              </div>

              <p className="text-sm text-slate-400 font-medium">
                Manufacturing Base
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===================================== */}
      {/* 3. ALL CLIENTS LOGO GRID              */}
      {/* ===================================== */}

      <section className="py-20 lg:py-28">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16 space-y-4">

            <span className="text-amber-500 font-semibold text-xs sm:text-sm uppercase tracking-[0.2em]">
              Our Professional Network
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
              Our Esteemed{" "}
              <span className="text-amber-400">
                Clients
              </span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We are proud to showcase the organizations
              that are part of our growing professional network.
              Each relationship reflects our focus on quality,
              technical expertise, and long-term collaboration.
            </p>

            <div className="flex items-center justify-center gap-2 pt-2">
              <span className="w-10 h-px bg-slate-700" />
              <span className="w-8 h-1 bg-amber-500 rounded-full" />
              <span className="w-10 h-px bg-slate-700" />
            </div>

          </div>

          {/* Client Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">

            {clients.map((client, index) => (
              <article
                key={client.name}
                className="group relative flex flex-col bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:border-amber-500/60 hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1"
              >

                {/* Logo Image Container */}
                <div className="p-3 sm:p-4">

                  <div className="relative aspect-square w-full bg-white rounded-lg overflow-hidden">

                    <Image
                      src={client.image}
                      alt={`${client.name} logo`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                      className="object-contain p-3 sm:p-4 transition-transform duration-500 group-hover:scale-105"
                      priority={index < 5}
                    />

                  </div>

                </div>

                {/* Client Name */}
                <div className="flex-1 flex items-center justify-center px-3 sm:px-4 pb-5 pt-1">

                  <h3 className="text-center text-xs sm:text-sm font-semibold text-slate-300 leading-relaxed group-hover:text-amber-400 transition-colors duration-300">
                    {client.name}
                  </h3>

                </div>

                {/* Bottom Hover Accent */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />

              </article>
            ))}

          </div>

          {/* Bottom Note */}
          <div className="mt-14 text-center">
            <p className="text-slate-500 text-xs sm:text-sm tracking-wide">
              Precision Engineering. Reliable Solutions.
              Lasting Business Relationships.
            </p>
          </div>

        </div>
      </section>

      {/* ===================================== */}
      {/* 4. PARTNERSHIP / TRUST SECTION        */}
      {/* ===================================== */}

      <section className="bg-slate-900/60 border-y border-slate-800 py-20 lg:py-24">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="space-y-6">

              <span className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
                Built on Trust & Precision
              </span>

              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
                Engineering Solutions That{" "}
                <span className="text-amber-400">
                  Build Lasting Partnerships
                </span>
              </h2>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                At Autozone Tooling, every client relationship
                is important to us. We understand that
                manufacturing operations demand consistent
                performance, reliable tooling, and precise
                engineering standards.
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                From standard CNC press brake punches and
                dies to customized tooling requirements,
                our focus is on delivering solutions
                that support efficient and dependable
                production processes.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm transition-colors pt-2"
              >
                Learn More About Autozone Tooling
                <span aria-hidden="true">→</span>
              </Link>

            </div>

            {/* Right: Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* Feature 1 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-amber-500/40 transition-colors">

                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400">

                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>

                </div>

                <h3 className="text-white font-bold font-heading text-base">
                  Quality Focused
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Precision tooling solutions developed
                  with attention to engineering quality
                  and manufacturing consistency.
                </p>

              </div>

              {/* Feature 2 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-amber-500/40 transition-colors">

                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400">

                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                    />
                  </svg>

                </div>

                <h3 className="text-white font-bold font-heading text-base">
                  Reliable Service
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Dedicated support for tooling
                  inquiries, product requirements,
                  and technical discussions.
                </p>

              </div>

              {/* Feature 3 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-amber-500/40 transition-colors">

                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400">

                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v18m9-9H3M5 5l14 14M19 5L5 19"
                    />
                  </svg>

                </div>

                <h3 className="text-white font-bold font-heading text-base">
                  Custom Solutions
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Tooling solutions designed
                  around specific manufacturing
                  applications and requirements.
                </p>

              </div>

              {/* Feature 4 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-amber-500/40 transition-colors">

                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400">

                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a4 4 0 00-4-4h-1m-4 6H2v-2a4 4 0 014-4h7m-1-4a4 4 0 100-8 4 4 0 000 8zm6 0a4 4 0 100-8"
                    />
                  </svg>

                </div>

                <h3 className="text-white font-bold font-heading text-base">
                  Client Relationships
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Building professional relationships
                  through responsive communication
                  and dependable engineering support.
                </p>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===================================== */}
      {/* 5. CALL TO ACTION                     */}
      {/* ===================================== */}

      <section className="relative overflow-hidden bg-gradient-to-r from-amber-600 to-amber-500 py-20 lg:py-24">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="max-w-3xl mx-auto space-y-6">

            <span className="inline-block text-slate-900 text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
              Work With Autozone Tooling
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-950 tracking-tight leading-tight">
              Looking for a Reliable
              Industrial Tooling Partner?
            </h2>

            <p className="text-slate-900 text-base sm:text-lg leading-relaxed font-medium">
              Whether you require standard CNC press brake
              tooling or customized manufacturing solutions,
              our team is ready to discuss your requirements.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">

              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-slate-950 hover:bg-slate-900 text-white font-semibold px-8 py-3.5 rounded-md shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Request a Quote
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-white/20 hover:bg-white/30 border border-slate-950/20 text-slate-950 font-semibold px-8 py-3.5 rounded-md transition-all duration-300"
              >
                Explore Our Products
              </Link>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
