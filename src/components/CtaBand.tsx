import Link from "next/link";
import { waLink } from "@/lib/site";

export default function CtaBand({
  title = "Have a bending problem to solve?",
  text = "Send us your part drawing, material and thickness. We'll recommend the right punch and die, or build one for you.",
  whatsappMessage = "Hi Autozone Tooling, I'd like a quote for press brake tooling.",
}: {
  title?: string;
  text?: string;
  whatsappMessage?: string;
}) {
  return (
    <section className="bg-temper text-white">
      <div className="container-x flex flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl">{title}</h2>
          <p className="mt-3 text-white/85">{text}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Link href="/contact" className="btn-straw">Get a quote</Link>
          <a href={waLink(whatsappMessage)} target="_blank" rel="noopener" className="btn-light">
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}