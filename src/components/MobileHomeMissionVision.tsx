
export default function MobileHomeMissionVision() {
  return (
    <section
      aria-labelledby="mobile-mission-vision-heading"
      className="relative overflow-hidden border-y border-slate-800 bg-[#090d13] font-sans text-white"
    >
      {/* BACKGROUND DETAILS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-28 top-16 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute -left-28 bottom-10 h-64 w-64 rounded-full bg-slate-700/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-lg px-6 pb-16 pt-16">
        {/* SECTION INTRODUCTION */}
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-amber-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-400">
              Our Driving Principles
            </span>
          </div>

          <h2
            id="mobile-mission-vision-heading"
            className="text-[clamp(2.5rem,10vw,3.7rem)] font-semibold leading-[1.08] tracking-[-0.05em]"
          >
            What drives
            <br />
            <span className="text-amber-400">us forward.</span>
          </h2>

          <p className="mt-6 max-w-[320px] text-[13px] leading-[1.9] text-slate-400">
            Guided by precision, driven by innovation,
            and committed to delivering engineering
            excellence.
          </p>
        </div>

        {/* VERTICAL PRINCIPLES */}
        <div className="relative">
          {/* VERTICAL CONNECTING LINE */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[18px] top-0 w-px bg-gradient-to-b from-amber-400 via-slate-700 to-transparent"
          />

          {/* MISSION */}
          <div className="relative pb-12 pl-14">
            {/* NUMBER INDICATOR */}
            <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-amber-400 bg-[#090d13]">
              <span className="text-[11px] font-semibold text-amber-400">
                01
              </span>
            </div>

            <div className="mb-4 flex items-center gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Our Purpose
              </span>

              <span className="h-px flex-1 bg-slate-800" />
            </div>

            <h3 className="text-[28px] font-semibold leading-tight tracking-[-0.04em] text-white">
              Our <span className="text-amber-400">Mission.</span>
            </h3>

            <p className="mt-5 text-[13px] leading-[1.95] text-slate-300">
              To empower sheet metal fabrication workshops
              and heavy industries across India with
              precision-engineered, highly durable, and
              reliable press brake tooling and shear blades
              that maximize operational efficiency, minimize
              downtime, and ensure flawless bending accuracy.
            </p>

            {/* MISSION HIGHLIGHTS */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-[10px] font-medium text-slate-300">
                Precision
              </span>

              <span className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-[10px] font-medium text-slate-300">
                Durability
              </span>

              <span className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-[10px] font-medium text-slate-300">
                Efficiency
              </span>
            </div>
          </div>

          {/* VISION */}
          <div className="relative pl-14">
            {/* NUMBER INDICATOR */}
            <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-amber-400 bg-[#090d13]">
              <span className="text-[11px] font-semibold text-amber-400">
                02
              </span>
            </div>

            <div className="mb-4 flex items-center gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Our Ambition
              </span>

              <span className="h-px flex-1 bg-slate-800" />
            </div>

            <h3 className="text-[28px] font-semibold leading-tight tracking-[-0.04em] text-white">
              Our <span className="text-amber-400">Vision.</span>
            </h3>

            <p className="mt-5 text-[13px] leading-[1.95] text-slate-300">
              To become the most trusted, innovative, and
              preferred manufacturer of specialized industrial
              tooling solutions globally, recognized for
              uncompromising metallurgical quality, advanced
              engineering craftsmanship, and long-term
              customer partnerships.
            </p>

            {/* VISION HIGHLIGHTS */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-[10px] font-medium text-slate-300">
                Innovation
              </span>

              <span className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-[10px] font-medium text-slate-300">
                Quality
              </span>

              <span className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-[10px] font-medium text-slate-300">
                Trust
              </span>
            </div>
          </div>
        </div>

        {/* CLOSING STATEMENT */}
        <div className="mt-14 border-t border-slate-800 pt-8">
          <div className="flex items-start gap-4">
            <span className="mt-1 h-10 w-1 shrink-0 rounded-full bg-amber-400" />

            <div>
              <p className="text-[18px] font-semibold leading-[1.5] tracking-tight text-white">
                Engineering excellence.
                <br />
                <span className="text-amber-400">
                  Without compromise.
                </span>
              </p>

              <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.15em] text-slate-500">
                Autozone Tooling
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
