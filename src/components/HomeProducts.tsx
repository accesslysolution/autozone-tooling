import ProductIndex from "./ProductIndex";

export default function HomeProducts() {
  return (
    <section className="bg-white py-20">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl">Complete tooling for sheet metal bending</h2>
          <p className="mt-4 text-oxide/75">
            Standard sizes are available from stock. Custom lengths, angles, radii and profiles are
            made to order.
          </p>
        </div>
        <div className="mt-10">
          <ProductIndex />
        </div>
      </div>
    </section>
  );
}