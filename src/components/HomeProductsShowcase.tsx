
import ProductsCarousel from "@/components/ProductsCarousel";

export default function HomeProductsShowcase() {
  return (
    <section className="border-y border-slate-800 bg-slate-900/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ProductsCarousel />
      </div>
    </section>
  );
}
