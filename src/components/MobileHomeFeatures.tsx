
"use client";

import { useState } from "react";

/* ==========================================
   FEATURES
========================================== */

const features = [
  {
    id: "material",
    tab: "Material",
    eyebrow: "01 / MATERIAL ENGINEERING",
    title: "Hardened & Ground Steel",
    description:
      "Precision-engineered alloy steel tooling with advanced heat treatment options for superior wear resistance, strength, and long-lasting durability.",
    shortLabel: "Superior Wear Resistance",
    icon: "shield",
    hardeningMethods: [
      "Full / Through Hardening",
      "Induction Hardening",
      "Laser Hardening",
      "Flame Hardening",
    ],
  },
  {
    id: "precision",
    tab: "Precision",
    eyebrow: "02 / PRECISION ENGINEERING",
    title: "High Precision Accuracy",
    description:
      "Strict quality control ensures exact angular precision and consistent sheet metal bending results.",
    shortLabel: "Consistent Bending Accuracy",
    icon: "target",
  },
  {
    id: "compatibility",
    tab: "Machines",
    eyebrow: "03 / MACHINE COMPATIBILITY",
    title: "Global Machine Compatibility",
    description:
      "Compatible with Amada, Trumpf, LVD, Bystronic, and standard press brake tooling systems.",
    shortLabel: "Global Tooling Compatibility",
    icon: "machine",
  },
] as const;

type FeatureId = (typeof features)[number]["id"];

/* ==========================================
   FEATURE ICONS
========================================== */

function FeatureIcon({
  type,
  className = "h-6 w-6",
}: {
  type: string;
  className?: string;
}) {
  if (type === "shield") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }

  if (type === "target") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
        <path d="M12 1v3M12 20v3M1 12h3M20 12h3" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 9h10M7 13h10M9 19v3M15 19v3M8 2v3M16 2v3" />
    </svg>
  );
}

/* ==========================================
   ENGINEERING ILLUSTRATIONS
========================================== */

function EngineeringIllustration({
  active,
}: {
  active: FeatureId;
}) {
  if (active === "material") {
    return (
      <svg
        viewBox="0 0 340 210"
        className="h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="mobile-steel-gradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="45%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>

        <path
          d="M38 138 132 78 299 78 205 138Z"
          fill="url(#mobile-steel-gradient)"
          stroke="#e2e8f0"
          strokeWidth="1.5"
        />

        <path
          d="M38 138h167v25H38Z"
          fill="#475569"
          stroke="#94a3b8"
        />

        <path
          d="m205 138 94-60v25l-94 60Z"
          fill="#64748b"
          stroke="#cbd5e1"
        />

        {Array.from({ length: 7 }).map((_, i) => (
          <path
            key={i}
            d={`M${62 + i * 22} 123l67-43`}
            stroke="#f8fafc"
            strokeOpacity=".35"
          />
        ))}

        <circle
          cx="132"
          cy="78"
          r="4"
          fill="#fbbf24"
        />

        <path
          d="M132 78V34h76"
          stroke="#fbbf24"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        <text
          x="211"
          y="38"
          fill="#fbbf24"
          fontSize="10"
          fontWeight="700"
        >
          ALLOY STEEL
        </text>

        <path
          d="M38 178h261"
          stroke="#475569"
          strokeDasharray="3 6"
        />

        <text
          x="38"
          y="195"
          fill="#64748b"
          fontSize="9"
          letterSpacing="2"
        >
          MATERIAL STRUCTURE
        </text>
      </svg>
    );
  }

  if (active === "precision") {
    return (
      <svg
        viewBox="0 0 340 210"
        className="h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="170"
          cy="103"
          r="76"
          stroke="#334155"
          strokeWidth="1"
        />

        <circle
          cx="170"
          cy="103"
          r="54"
          stroke="#475569"
          strokeDasharray="4 5"
        />

        <circle
          cx="170"
          cy="103"
          r="28"
          stroke="#fbbf24"
          strokeWidth="1.5"
        />

        <path
          d="M170 12v182M78 103h184"
          stroke="#64748b"
          strokeWidth="1"
          strokeDasharray="5 5"
        />

        <path
          d="M103 139 170 72l67 67"
          stroke="#cbd5e1"
          strokeWidth="8"
          strokeLinejoin="round"
        />

        <path
          d="M103 139 170 72l67 67"
          stroke="#475569"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        <circle
          cx="170"
          cy="103"
          r="5"
          fill="#fbbf24"
        />

        <path
          d="M170 103 230 43h52"
          stroke="#fbbf24"
          strokeWidth="1.5"
        />

        <text
          x="238"
          y="36"
          fill="#fbbf24"
          fontSize="10"
          fontWeight="700"
        >
          ACCURACY
        </text>

        <text
          x="170"
          y="198"
          textAnchor="middle"
          fill="#64748b"
          fontSize="9"
          letterSpacing="2"
        >
          ANGULAR PRECISION
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 340 210"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="49"
        y="38"
        width="242"
        height="125"
        rx="9"
        stroke="#64748b"
        strokeWidth="2"
        fill="#1e293b"
      />

      <rect
        x="67"
        y="54"
        width="206"
        height="90"
        rx="4"
        stroke="#475569"
        fill="#0f172a"
      />

      <path
        d="M85 83h170M85 112h170"
        stroke="#475569"
        strokeWidth="4"
      />

      <path
        d="M119 83v29m102-29v29"
        stroke="#fbbf24"
        strokeWidth="3"
      />

      <path
        d="m148 83 22 29 22-29"
        stroke="#cbd5e1"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      <circle
        cx="170"
        cy="98"
        r="6"
        fill="#fbbf24"
      />

      <path
        d="M170 98v-66h80"
        stroke="#fbbf24"
        strokeDasharray="4 4"
      />

      <text
        x="207"
        y="26"
        fill="#fbbf24"
        fontSize="10"
        fontWeight="700"
      >
        CNC SYSTEM
      </text>

      <path
        d="M88 163v19m164-19v19M67 182h206"
        stroke="#64748b"
        strokeWidth="2"
      />

      <text
        x="170"
        y="199"
        textAnchor="middle"
        fill="#64748b"
        fontSize="9"
        letterSpacing="2"
      >
        MACHINE INTERFACE
      </text>
    </svg>
  );
}

/* ==========================================
   MOBILE HOME FEATURES
========================================== */

export default function MobileHomeFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeFeature = features[activeIndex];

  return (
    <section
      aria-labelledby="mobile-features-heading"
      className="relative overflow-hidden bg-amber-400 py-12 text-slate-950"
    >
      <div className="mx-auto max-w-lg px-5">

        {/* ==========================================
            TOP INDUSTRIAL LABEL
        ========================================== */}

        <div className="mb-7 flex items-center justify-between border-b border-slate-950/20 pb-4">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.18em]">
            Autozone / Engineering
          </span>

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
              d="M12 4v16M4 12h16"
            />
          </svg>
        </div>

        {/* ==========================================
            MAIN HEADING
        ========================================== */}

        <div className="mb-8">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-800">
            Engineering That Makes a Difference
          </p>

          <h2
            id="mobile-features-heading"
            className="font-heading text-[clamp(2.7rem,12vw,4rem)] font-black uppercase leading-[0.98] tracking-[-0.055em]"
          >
            Built to
            <br />
            Perform.
          </h2>

          <p className="mt-5 max-w-xs text-sm font-medium leading-relaxed text-slate-800">
            Discover the engineering behind our
            precision tooling solutions.
          </p>
        </div>

        {/* ==========================================
            INTERACTIVE ENGINEERING DISPLAY
        ========================================== */}

        <div className="overflow-hidden rounded-2xl border border-slate-950/20 bg-slate-950 text-white shadow-2xl">

          {/* PANEL TOP BAR */}
          <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-amber-400">
              {activeFeature.eyebrow}
            </span>

            <div className="flex items-center gap-1.5">
              {features.map((feature, index) => (
                <span
                  key={feature.id}
                  className={`h-1.5 w-1.5 rounded-full ${
                    activeIndex === index
                      ? "bg-amber-400"
                      : "bg-slate-700"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ==========================================
              ILLUSTRATION
          ========================================== */}

          <div
            key={`visual-${activeFeature.id}`}
            className="relative border-b border-slate-800 bg-slate-900 px-4 py-3"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            <div className="relative mx-auto aspect-[340/210] max-w-sm">
              <EngineeringIllustration
                active={activeFeature.id}
              />
            </div>
          </div>

          {/* ==========================================
              FEATURE CONTENT
          ========================================== */}

          <div
            key={`content-${activeFeature.id}`}
            className="px-5 pb-6 pt-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400">
                <FeatureIcon
                  type={activeFeature.icon}
                  className="h-5 w-5"
                />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                {activeFeature.shortLabel}
              </span>
            </div>

            <h3 className="font-heading text-[23px] font-extrabold leading-tight tracking-tight">
              {activeFeature.title}
            </h3>

            <p className="mt-3 text-[13px] leading-[1.8] text-slate-400">
              {activeFeature.description}
            </p>

            {/* ======================================
                HARDENING METHODS - MATERIAL ONLY
            ====================================== */}

            {activeFeature.id === "material" && (
              <div className="mt-6 border-t border-slate-800 pt-5">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-amber-400">
                  Hardening Methods
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {features[0].hardeningMethods.map(
                    (method, index) => (
                      <div
                        key={method}
                        className="flex min-h-[54px] items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2.5"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-amber-400/10 text-[10px] font-bold text-amber-400">
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <span className="text-[11px] font-medium leading-snug text-slate-300">
                          {method}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {/* ======================================
                PROGRESS BARS
            ====================================== */}

            <div className="mt-6 grid grid-cols-3 gap-2">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${feature.title}`}
                  aria-pressed={activeIndex === index}
                  className={`h-1 rounded-full transition-colors duration-300 ${
                    activeIndex === index
                      ? "bg-amber-400"
                      : "bg-slate-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ==========================================
            FEATURE SELECTOR TABS
        ========================================== */}

        <div className="mt-4 grid grid-cols-3 gap-2">
          {features.map((feature, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={feature.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={isActive}
                className={`flex min-h-[86px] flex-col items-center justify-center gap-2 rounded-xl border px-2 py-3 text-center transition-all duration-300 ${
                  isActive
                    ? "border-slate-950 bg-slate-950 text-amber-400 shadow-lg"
                    : "border-slate-950/30 bg-amber-300/40 text-slate-950"
                }`}
              >
                <FeatureIcon
                  type={feature.icon}
                  className="h-6 w-6"
                />

                <span className="text-[11px] font-extrabold uppercase tracking-wide">
                  {feature.tab}
                </span>
              </button>
            );
          })}
        </div>

        {/* ==========================================
            BOTTOM LABEL
        ========================================== */}

        <div className="mt-8 flex items-center justify-between border-t border-slate-950/20 pt-4">
          <span className="text-[10px] font-extrabold uppercase tracking-widest">
            Precision in Every Detail
          </span>

          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700">
            Autozone Tooling
          </span>
        </div>
      </div>
    </section>
  );
}
