"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gallery } from "@/lib/content";

const tabs = ["All", "Punches", "Dies", "Special tools", "Shear blades"];

export default function GalleryGrid() {
  const [tab, setTab] = useState("All");
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const items = tab === "All" ? gallery : gallery.filter((g) => g.category === tab);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (active !== null && !d.open) d.showModal();
    if (active === null && d.open) d.close();
  }, [active]);

  return (
    <>
      <div role="group" aria-label="Filter photos" className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={tab === t}
            onClick={() => setTab(t)}
            className={`rounded-sm border px-4 py-2 text-sm font-medium ${
              tab === t ? "border-oxide bg-oxide text-white" : "border-oxide/20 hover:border-oxide"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-gauge" aria-live="polite">{items.length} photos</p>

      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((g, i) => (
          <li key={g.src}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="relative block aspect-square w-full overflow-hidden bg-steel"
            >
              <span className="sr-only">Enlarge: {g.alt}</span>
              <Image src={g.src} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === dialogRef.current && setActive(null)}
        className="m-auto max-h-[90vh] w-[min(56rem,92vw)] bg-oxide p-0 backdrop:bg-oxide/80"
      >
        {active !== null && items[active] && (
          <div className="relative">
            <div className="relative aspect-[4/3] w-full">
              <Image src={items[active].src} alt={items[active].alt} fill sizes="90vw" className="object-contain" />
            </div>
            <div className="flex items-center justify-between gap-3 p-3 text-sm text-white">
              <button
                type="button"
                className="px-3 py-2 hover:text-straw disabled:opacity-30"
                disabled={active === 0}
                onClick={() => setActive((a) => (a === null ? a : a - 1))}
              >
                Previous
              </button>
              <span>{items[active].alt}</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="px-3 py-2 hover:text-straw disabled:opacity-30"
                  disabled={active === items.length - 1}
                  onClick={() => setActive((a) => (a === null ? a : a + 1))}
                >
                  Next
                </button>
                <button type="button" className="px-3 py-2 hover:text-straw" onClick={() => setActive(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}