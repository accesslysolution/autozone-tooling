import Link from "next/link";
import BendHero from "./BendHero";
import { site } from "@/lib/site";

export default function HomeHero() {
  return (
    <section className="bg-oxide text-white">
      <div className="container-x grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h1 className="text-5xl leading-[0.95] md:text-7xl">
            Precision press brake tooling, made in Pune
          </h1>
          <p className="mt-6 max-w-xl text-lg text-steel/85">
            Hardened and ground punches, dies and shear blades that deliver accurate bends, job after
            job, year after year.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products" className="btn-straw">Explore products</Link>
            <Link href="/contact" className="btn-light">Get a quote</Link>
          </div>
          <p className="mt-10 text-sm text-steel/60">
            Tooling for {site.machines.join(", ")} and most other press brakes.
          </p>
        </div>
        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <BendHero />
        </div>
      </div>
    </section>
  );
}