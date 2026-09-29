import Image from "next/image";
import { site } from "@/lib/site";

export default function AboutIntro() {
  return (
    <section className="py-20">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div className="prose-body">
          <h2 className="mb-6 text-4xl">Who we are</h2>
          <p>
            Autozone Tooling is a press brake tooling manufacturer based in MIDC Bhosari, Pune. Since{" "}
            {site.foundedYear}, we have supplied fabricators, OEMs and job shops with punches, dies,
            hemming tools, radius tools, joggle tools and shear blades built for accurate, repeatable
            bending.
          </p>
          <p>
            Our range covers tooling for all popular press brakes: {site.machines.join(", ")} and many
            more. We keep large stocks of standard profiles so we can respond quickly to urgent orders,
            and our design team gives technical guidance and develops custom tools when a standard tool
            won&apos;t do the job.
          </p>
          <p>
            We also manufacture guillotine shear blades for all machine types and offer a re-grinding
            service to extend blade life.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden bg-steel">
          <Image
            src="/images/about/about_4_3.jpg"
            alt="Hardened and ground press brake tooling"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}