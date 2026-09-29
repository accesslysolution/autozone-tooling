import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-28">
      <h1 className="text-5xl">Page not found</h1>
      <p className="mt-4 max-w-lg text-oxide/80">
        This page has moved or doesn&apos;t exist. Our full product range is one click away.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/products" className="btn-primary">View products</Link>
        <Link href="/" className="btn-outline">Go to home</Link>
      </div>
    </section>
  );
}