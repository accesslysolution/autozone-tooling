import type { Product } from "@/lib/products";
import SpecTable from "./SpecTable";

export default function ProductSpecs({ product }: { product: Product }) {
  return (
    <>
      {product.specs && (
        <section className="mt-16">
          <h2 className="text-3xl">Specifications</h2>
          <div className="mt-6">
            <SpecTable rows={product.specs} head={["Parameter", "Details"]} caption={`${product.name} specifications`} />
          </div>
        </section>
      )}
      {product.applications && (
        <section className="mt-16">
          <h2 className="text-3xl">Applications</h2>
          <div className="mt-6">
            <SpecTable
              rows={product.applications}
              head={["Industry", "Typical parts"]}
              caption={`${product.name} applications`}
            />
          </div>
        </section>
      )}
    </>
  );
}