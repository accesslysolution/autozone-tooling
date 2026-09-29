import Link from "next/link";
import ClientLogos from "./ClientLogos";

export default function HomeClients() {
  return (
    <section className="pb-20">
      <div className="container-x">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-4xl">Trusted by manufacturers</h2>
          <Link href="/clients" className="text-sm font-semibold text-temper hover:underline">
            See all clients
          </Link>
        </div>
        <div className="mt-8">
          <ClientLogos limit={12} />
        </div>
      </div>
    </section>
  );
}