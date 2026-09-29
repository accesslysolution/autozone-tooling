export type City = { slug: string; name: string; industries: string };

// Each city gets its own industry line so the pages aren't duplicates of each other.
export const cities: City[] = [
  { slug: "chakan", name: "Chakan", industries: "Chakan's automotive plants and auto-component suppliers run press brakes all day. We're a short drive away, so replacement punches and dies reach you fast." },
  { slug: "mumbai", name: "Mumbai", industries: "Mumbai and Thane fabricators build panels, enclosures and architectural work. We ship regularly and can advise on tooling over phone or WhatsApp." },
  { slug: "bangalore", name: "Bangalore", industries: "Bangalore's electronics, enclosure and aerospace suppliers need tight bend tolerances. Our ground tooling is built for exactly that." },
  { slug: "chennai", name: "Chennai", industries: "Chennai's automotive and electrical manufacturers bend high volumes daily. Our hardened tools hold their accuracy over long runs." },
  { slug: "ahmedabad", name: "Ahmedabad", industries: "Ahmedabad's engineering units and panel builders handle a wide mix of jobs. Multi-V dies and sectionalised punches keep changeovers quick." },
  { slug: "kolkata", name: "Kolkata", industries: "Kolkata's structural and general fabrication shops work with thicker plate. Our heavy-duty 1V dies are built for that range." },
  { slug: "andhra-pradesh", name: "Andhra Pradesh", industries: "Fabricators across Visakhapatnam, Vijayawada and Sri City rely on us for standard and custom tooling, packed for long-distance delivery." },
  { slug: "odisha", name: "Odisha", industries: "Odisha's steel-belt fabrication units need durable tools for demanding work. We supply standard sizes from stock and custom tools to order." },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}