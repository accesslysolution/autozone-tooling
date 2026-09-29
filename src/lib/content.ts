export const testimonials = [
  {
    quote:
      "I'm very happy to have found Autozone Tooling. They supplied exactly what I had been searching for, at a good price, and delivery was quick.",
    name: "Nilesh Sonavane",
    city: "Pune",
  },
  {
    quote:
      "Their commitment to service and customer satisfaction shows in everything they do. They consistently go beyond expectations.",
    name: "Jayantkumar Korhale",
    city: "Pune",
  },
  {
    quote:
      "Excellent service and very quick delivery. Quality tooling is hard to find – I will definitely order again.",
    name: "Mahendra Kesharwani",
    city: "Pune",
  },
];

export const industries = [
  { name: "Automotive", parts: "Body panels, brackets, chassis parts" },
  { name: "Aerospace", parts: "Structural components and aircraft parts" },
  { name: "Construction & HVAC", parts: "Ductwork and architectural profiles" },
  { name: "Electrical panels", parts: "Enclosures, cabinets and doors" },
  { name: "Furniture & storage", parts: "Racks, lockers and office furniture" },
  { name: "General fabrication", parts: "Machine guards and equipment parts" },
];

export const whyUs = [
  { title: "Hardened and ground", text: "Precision grinding keeps angles and dimensions consistent across every segment." },
  { title: "Your choice of steel", text: "42CrMo4, C45 or CrMo alloy steel, heat-treated to suit your material and volume." },
  { title: "Fits your machine", text: "Tools for Amada, Trumpf, Bystronic, LVD, JFY and most other press brakes." },
  { title: "Ready stock", text: "Common profiles are kept in stock, so urgent orders ship fast." },
  { title: "Custom engineering", text: "Our design team builds tools for special profiles from your drawing or sample." },
  { title: "Safe delivery", text: "Every tool is packed in a sturdy wooden box and arrives damage-free." },
];

export const clientLogos = [
  "c-21", "c-22", "c-25", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8",
  "c9", "c10", "c11", "c12", "c13", "c14", "c15", "c16", "c17", "c18", "c19",
].map((id) => `/images/clients/${id}.jpg`);

const range = (n: number) => Array.from({ length: n }, (_, i) => i + 1);

export const gallery: { src: string; category: string; alt: string }[] = [
  ...range(24).map((i) => ({
    src: `/images/products/press_brake_punch_${i}.jpg`,
    category: "Punches",
    alt: `Press brake punch ${i}`,
  })),
  ...range(45).map((i) => ({
    src: `/images/products/press_break_dies_${i}.jpg`,
    category: "Dies",
    alt: `Press brake die ${i}`,
  })),
  { src: "/images/products/press_brake_hemming_tools_1.jpg", category: "Special tools", alt: "Hemming tool" },
  { src: "/images/products/radius_tools_holders_insert.jpg", category: "Special tools", alt: "Radius tool holder and insert" },
  { src: "/images/products/joggle_tools_inserts_1.jpg", category: "Special tools", alt: "Joggle tool and insert" },
  { src: "/images/products/specila_application_1.jpg", category: "Special tools", alt: "Special application tool" },
  { src: "/images/products/shear_blades_1.jpg", category: "Shear blades", alt: "Shear blade" },
];