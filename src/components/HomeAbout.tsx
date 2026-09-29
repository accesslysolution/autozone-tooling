import Image from "next/image";
import Link from "next/link";

export default function HomeAbout() {
  return (
    <section className="py-20">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden bg-steel">
          <Image
            src="/images/about/about_4_1.jpg"
            alt="Press brake tools at the Autozone Tooling workshop"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl">Built for accurate bending</h2>
          <div className="prose-body mt-6">
            <p>
              Autozone Tooling is a Pune-based manufacturer and supplier of press brake tools for the
              sheet metal industry. We make a complete range of punches, dies, hemming tools, radius
              tools, joggle tools and shear blades, all hardened and ground for long-lasting precision.
            </p>
            <p>
              Every tool is made from quality tool steel, with the grade and hardness chosen to match
              your application. Whether you need a standard V-die or a one-off tool for a special
              profile, we build it to your specification and deliver on time.
            </p>
          </div>
          <Link href="/about" className="btn-outline mt-4">More about us</Link>
        </div>
      </div>
    </section>
  );
}