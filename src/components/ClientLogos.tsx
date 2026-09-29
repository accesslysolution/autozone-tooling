import Image from "next/image";
import { clientLogos } from "@/lib/content";

export default function ClientLogos({ limit }: { limit?: number }) {
  const logos = limit ? clientLogos.slice(0, limit) : clientLogos;
  return (
    <ul className="grid grid-cols-2 gap-px bg-oxide/10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {logos.map((src, i) => (
        <li key={src} className="flex h-28 items-center justify-center bg-white p-5">
          <Image
            src={src}
            alt={`Client logo ${i + 1}`}
            width={160}
            height={80}
            className="max-h-16 w-auto object-contain"
          />
        </li>
      ))}
    </ul>
  );
}