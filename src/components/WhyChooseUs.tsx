import { whyUs } from "@/lib/content";

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="text-4xl md:text-5xl">The only part that touches the metal</h2>
          <p className="mt-5 max-w-md text-oxide/80">
            Tooling is the only part of the press brake that contacts the workpiece, so bend accuracy
            starts with the tool. Here&apos;s what you get from us.
          </p>
        </div>
        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {whyUs.map((w) => (
            <div key={w.title} className="border-t-2 border-oxide pt-3">
              <dt className="font-display text-2xl font-semibold">{w.title}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-oxide/75">{w.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}