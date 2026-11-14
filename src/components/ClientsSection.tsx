
"use client";

import Image from "next/image";
import { useState } from "react";

const clients = [

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

export default function ClientsSection() {
  const [isPaused, setIsPaused] = useState(false);

  const totalClients = clients.length;

  return (
    <section
      className="relative overflow-hidden border-y border-slate-800 bg-slate-950 py-20 lg:py-28"
      aria-labelledby="clients-heading"
    >
      {/* SECTION HEADER */}
      <div className="mx-auto mb-14 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-amber-500" />

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 sm:text-sm">
            Our Valued Clients
          </span>

          <span className="h-px w-8 bg-amber-500" />
        </div>

        <h2
          id="clients-heading"
          className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Trusted by{" "}
          <span className="text-amber-400">
            Industry Leaders
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base lg:text-lg">
          Proud to serve leading names in engineering,
          manufacturing, and industrial fabrication with
          precision CNC press brake tooling and shearing
          solutions.
        </p>
      </div>

      {/* INFINITE CLIENT LOGO CAROUSEL */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (
            !event.currentTarget.contains(
              event.relatedTarget as Node | null
            )
          ) {
            setIsPaused(false);
          }
        }}
        aria-label={`Our ${totalClients} featured clients`}
      >
        {/* LEFT EDGE FADE */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-slate-950 to-transparent sm:w-24 lg:w-40" />

        {/* RIGHT EDGE FADE */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-950 to-transparent sm:w-24 lg:w-40" />

        {/* SCROLLING TRACK */}
        <div
          className="clients-scroll-track flex w-max"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              className="flex shrink-0 gap-5 pr-5 sm:gap-7 sm:pr-7"
              aria-hidden={copyIndex === 1}
            >
              {clients.map((client) => (
                <div
                  key={`${copyIndex}-${client.name}`}
                  className="group w-40 shrink-0 sm:w-48 lg:w-52"
                >
                  {/* LOGO CONTAINER */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-slate-700/60 bg-white shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:border-amber-500 group-hover:shadow-amber-500/10">
                    <Image
                      src={client.image}
                      alt={
                        copyIndex === 0
                          ? `${client.name} logo`
                          : ""
                      }
                      fill
                      sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 208px"
                      className="object-contain p-3 sm:p-4"
                      loading="lazy"
                    />
                  </div>

                  {/* CLIENT NAME */}
                  <div className="mt-4 px-1 text-center">
                    <h3 className="text-xs font-semibold leading-snug text-slate-300 transition-colors group-hover:text-amber-400 sm:text-sm">
                      {client.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM SUPPORTING TEXT */}
      <div className="mx-auto mt-14 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-8 bg-slate-700" />

          <p className="text-xs tracking-wide text-slate-500 sm:text-sm">
            Precision Tooling. Reliable Partnerships.
          </p>

          <span className="h-px w-8 bg-slate-700" />
        </div>
      </div>
    </section>
  );
}
