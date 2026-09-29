import type { City } from "@/lib/cities";
import type { Product } from "@/lib/products";
import BulletList from "./BulletList";

const reasons = [
  "Direct from the manufacturer, with no middlemen",
  "Standard sizes from ready stock",
  "Custom tools made to your drawing",
  "Wooden-box packing for long-distance transport",
  "Technical support over phone and WhatsApp",
];

export default function CityWhyUs({ city, product }: { city: City; product: Product }) {
  return (
    <section className="bg-white py-16">
      <div className="container-x grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl">Why {city.name} fabricators choose us</h2>
          <BulletList items={reasons} />
        </div>
        <div>
          <h2 className="text-3xl">Key features</h2>
          <BulletList items={product.features} color="temper" />
        </div>
      </div>
    </section>
  );
}