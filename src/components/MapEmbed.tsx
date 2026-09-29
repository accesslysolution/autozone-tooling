import { site } from "@/lib/site";

export default function MapEmbed() {
  return (
    <section className="pb-16">
      <div className="container-x">
        <iframe
          src={site.mapEmbed}
          title="Autozone Tooling location on Google Maps"
          className="h-96 w-full border-0 grayscale"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}