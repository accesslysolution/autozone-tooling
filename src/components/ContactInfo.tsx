import { site } from "@/lib/site";

export default function ContactInfo() {
  return (
    <address className="not-italic">
      <h2 className="text-3xl">Reach us directly</h2>
      <dl className="mt-8 space-y-6">
        <div>
          <dt className="text-sm text-gauge">Managing Director</dt>
          <dd className="mt-1 text-lg font-semibold">{site.md}</dd>
        </div>
        <div>
          <dt className="text-sm text-gauge">Phone</dt>
          {site.phones.map((p) => (
            <dd key={p.href} className="mt-1 text-lg">
              <a href={p.href} className="hover:text-temper">{p.label}</a>
            </dd>
          ))}
        </div>
        <div>
          <dt className="text-sm text-gauge">Email</dt>
          <dd className="mt-1 text-lg">
            <a href={`mailto:${site.email}`} className="hover:text-temper">{site.email}</a>
          </dd>
        </div>
        <div>
          <dt className="text-sm text-gauge">Address</dt>
          <dd className="mt-1 leading-relaxed">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.region}
          </dd>
          <dd className="mt-2">
            <a href={site.mapLink} target="_blank" rel="noopener" className="text-sm font-semibold text-temper hover:underline">
              Get directions
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm text-gauge">Working hours</dt>
          <dd className="mt-1">{site.hours}</dd>
        </div>
      </dl>
    </address>
  );
}