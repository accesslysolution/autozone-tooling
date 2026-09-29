import ProductIndex from "./ProductIndex";

export default function ProductRange({
  title = "Our range",
  basePath = "/products",
}: {
  title?: string;
  basePath?: string;
}) {
  return (
    <section className="pb-20">
      <div className="container-x">
        <h2 className="mb-8 text-4xl">{title}</h2>
        <ProductIndex basePath={basePath} />
      </div>
    </section>
  );
}