import { site } from "@/lib/site";

export default function Leadership() {
  return (
    <section className="py-20">
      <div className="container-x max-w-3xl">
        <h2 className="text-4xl">Leadership</h2>
        <div className="mt-6 border-l-2 border-straw pl-6">
          <p className="font-display text-2xl font-semibold">{site.md}</p>
          <p className="text-sm text-gauge">{site.mdRole}</p>
          {/* TODO(client): replace with a real 2–3 line profile for the MD */}
          <p className="mt-4 leading-relaxed text-oxide/80">
            Kiran leads Autozone Tooling&apos;s manufacturing and customer relationships, making sure
            every tool that leaves the workshop meets the accuracy our clients depend on.
          </p>
        </div>
      </div>
    </section>
  );
}