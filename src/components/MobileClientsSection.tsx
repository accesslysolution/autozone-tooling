
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Client {
  name: string;
  image: string;
}

const clients: Client[] = [
  {
    name: "TRUMPF",
    image: "/clients/TRUMPF.avif",
  },
  {
    name: "S&T Engineers",
    image: "/clients/S&T Engineers Globe.avif",
  },
  {
    name: "Proteck",
    image: "/clients/Proteck.avif",
  },
  {
    name: "ADH Machine Tool",
    image: "/clients/ADH Machine Tool.avif",
  },
  {
    name: "Rajesh Global",
    image: "/clients/Rajesh Global.avif",
  },
  {
    name: "AURA Signal",
    image: "/clients/AURA Signal.avif",
  },
  {
    name: "Benninger",
    image: "/clients/Benninger Blue and Orange.avif",
  },
  {
    name: "DC&T",
    image: "/clients/DC&T Belo India Company.avif",
  },
  {
    name: "Dynamic",
    image: "/clients/Dynamic Working Smarter.avif",
  },
  {
    name: "Finepac Structures",
    image: "/clients/Finepac Structures.avif",
  },
  {
    name: "Glatt",
    image: "/clients/Glatt.avif",
  },
  {
    name: "KOTECH Infra Pvt. Ltd.",
    image: "/clients/KOTECH.avif",
  },
  {
    name: "KPEL Transformers",
    image: "/clients/KPEL Transformers.avif",
  },
  {
    name: "LeanFabLaser Engineering Pvt. Ltd.",
    image: "/clients/LeanFabLaser.avif",
  },
  {
    name: "PAA",
    image: "/clients/PAA.avif",
  },
  {
    name: "PAI KANE GROUP",
    image: "/clients/PAI KANE GROUP.avif",
  },
  {
    name: "PSR Toolings and Stampings Pvt. Ltd.",
    image: "/clients/PSR Toolings and Stampings.avif",
  },
  {
    name: "RSB",
    image: "/clients/RSB Globe and House.avif",
  },
  {
    name: "SAAKSHI",
    image: "/clients/SAAKSHI.avif",
  },
  {
    name: "Sawant Group",
    image: "/clients/Sawant Group Geometric.avif",
  },
  {
    name: "Shree Refrigerations",
    image: "/clients/Shree Refrigerations.avif",
  },
  {
    name: "Sumeco Group of Companies",
    image: "/clients/Sumeco Group Corporate.avif",
  },
];


const INITIAL_VISIBLE = 6;

export default function MobileClientsSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleClients = showAll
    ? clients
    : clients.slice(0, INITIAL_VISIBLE);

  return (
    <section
      aria-labelledby="mobile-clients-heading"
      className="relative overflow-hidden border-y border-slate-800 bg-slate-950 font-sans text-white"
    >
      {/* BACKGROUND ACCENT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-lg px-5 pb-14 pt-14">
        {/* SECTION EYEBROW */}
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-7 bg-amber-400" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-400">
            Our Valued Clients
          </span>
        </div>

        {/* MAIN HEADING */}
        <h2
          id="mobile-clients-heading"
          className="text-[clamp(2.15rem,9vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.045em]"
        >
          Trusted by
          <br />
          <span className="text-amber-400">
            Industry Leaders.
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-5 max-w-sm text-[13px] leading-[1.85] text-slate-400">
          Building lasting partnerships with leading
          names in engineering, manufacturing, and
          industrial fabrication.
        </p>

        {/* CLIENT COUNT */}
        <div className="mt-8 flex items-center justify-between border-y border-slate-800 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
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
                  strokeWidth={1.6}
                  d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m18 0v-2a4 4 0 0 0-3-3.87M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8-7.87a4 4 0 0 1 0 7.75"
                />
              </svg>
            </span>

            <div>
              <p className="text-[13px] font-semibold text-white">
                Our Client Network
              </p>

              <p className="mt-0.5 text-[11px] text-slate-500">
                Engineering & Manufacturing
              </p>
            </div>
          </div>

          <span className="text-[25px] font-semibold tracking-tight text-amber-400">
            {clients.length}
          </span>
        </div>

        {/* LOGO GALLERY HEADER */}
        <div className="mb-5 mt-8 flex items-center justify-between">
          <h3 className="text-[15px] font-semibold text-white">
            Companies We Serve
          </h3>

          <span className="text-[11px] text-slate-500">
            {visibleClients.length} of {clients.length}
          </span>
        </div>

        {/* CLIENT LOGO GRID */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-5">
          {visibleClients.map((client) => (
            <div
              key={client.name}
              className="min-w-0"
            >
              {/* PURE WHITE 1:1 LOGO CONTAINER */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-slate-700/60 bg-white shadow-lg">
                <Image
                  src={client.image}
                  alt={`${client.name} logo`}
                  fill
                  sizes="(max-width: 768px) 45vw, 220px"
                  className="object-contain p-4"
                  loading="lazy"
                />
              </div>

              {/* CLIENT NAME */}
              <p className="mt-3 px-1 text-center text-[11px] font-medium leading-[1.5] text-slate-300">
                {client.name}
              </p>
            </div>
          ))}
        </div>

        {/* EXPAND / COLLAPSE */}
        <div className="mt-8">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 text-[12px] font-semibold text-white transition-colors active:border-amber-400"
          >
            {showAll
              ? "Show Fewer Clients"
              : `View All ${clients.length} Clients`}

            <svg
              className={`h-4 w-4 text-amber-400 transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="m6 9 6 6 6-6"
              />
            </svg>
          </button>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-900 p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-400">
            Partner With Autozone
          </p>

          <h3 className="mt-3 text-[19px] font-semibold leading-snug tracking-tight text-white">
            Let's build something
            <br />
            precise together.
          </h3>

          <p className="mt-3 text-[12px] leading-[1.8] text-slate-400">
            Looking for dependable press brake tooling
            and industrial solutions? Our team is ready
            to assist.
          </p>

          <Link
            href="/contact"
            className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 text-[12px] font-semibold text-slate-950 transition-colors active:bg-amber-400"
          >
            Get in Touch

            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M5 12h14m-6-6 6 6-6 6"
              />
            </svg>
          </Link>
        </div>

        {/* FOOTNOTE */}
        <p className="mt-8 text-center text-[11px] tracking-wide text-slate-500">
          Precision Tooling. Reliable Partnerships.
        </p>
      </div>
    </section>
  );
}
