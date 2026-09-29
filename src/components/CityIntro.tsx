import type { City } from "@/lib/cities";

export default function CityIntro({ city }: { city: City }) {
  return (
    <section className="py-16">
      <div className="container-x prose-body">
        <p className="text-lg">{city.industries}</p>
        <p>
          Every tool is made at our Pune facility, hardened and ground for accurate bending, and packed
          in a wooden box for safe long-distance transport.
        </p>
      </div>
    </section>
  );
}