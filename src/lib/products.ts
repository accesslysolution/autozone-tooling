export type Row = [string, string];

export type Product = {
  slug: string;
  legacy: string | null; // old URL stem, used for 301 redirects
  name: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  intro: string[];
  typesHeading?: string;
  types?: { name: string; text: string }[];
  angles?: string[];
  segments?: Row[];
  features: string[];
  bestFor?: string[];
  specs?: Row[];
  applications?: Row[];
  process?: { name: string; text: string }[];
  chooseList?: string[];
  related: string[];
};

const standardSpecs = (extra: Row[] = []): Row[] => [
  ["Material", "42CrMo4 / C45 / CrMo alloy steel"],
  ["Processing", "Hardened and precision ground"],
  ...extra,
  ["Finish", "Black / Electroless nickel plating (ENP)"],
  ["Packaging", "Wooden box"],
  ["Origin", "Made in India"],
];

const img = (f: string) => `/images/products/${f}`;

export const products: Product[] = [
  {
    slug: "press-brake-punches",
    legacy: "press-brake-punch",
    name: "Press brake punches",
    summary: "Standard, gooseneck and offset punches for every bend angle.",
    seoTitle: "Press Brake Punch Manufacturer in Pune",
    seoDescription:
      "Hardened and ground press brake punches in 90°, 88°, 85°, 60°, 45°, 30° and more. Standard, gooseneck and offset punches with custom segments.",
    image: img("press_brake_punch_1.jpg"),
    intro: [
      "The punch is the upper tool of a press brake. It presses the sheet into the die to form the bend, so its angle, tip radius and profile directly decide the quality of the finished part.",
      "We manufacture press brake punches from premium alloy steel, hardened and precision ground for consistent results across long production runs.",
    ],
    typesHeading: "Types of punches",
    types: [
      { name: "Standard punch", text: "For general-purpose bending of simple flanges and angles." },
      { name: "Gooseneck punch", text: "A relieved profile that clears return flanges. Ideal for channels and box shapes." },
      { name: "Offset punch", text: "For complex profiles where a standard punch would collide with the part." },
      { name: "Acute angle punch", text: "For sharp bends at 30° and below, including pre-hemming." },
    ],
    angles: ["90°", "88°", "85°", "75°", "60°", "45°", "30°", "26°", "28°/24° hemming", "Z-profile", "Radius"],
    segments: [
      ["835 mm", "100L, 10, 15, 20, 40, 50, 200, 300, 100R"],
      ["805 mm", "100L, 370, 10, 15, 20, 40, 50, 100, 100R"],
      ["800 mm", "100L, 10, 15, 20, 40, 50, 165, 300, 100R"],
      ["795 mm", "100L, 250, 20, 25, 30, 35, 40, 45, 50, 100, 100R"],
      ["495 mm", "170, 100, 50, 45, 40, 35, 30, 25"],
    ],
    features: [
      "Premium 42CrMo4, C45 or CrMo alloy steel",
      "Hardened and precision ground for dimensional accuracy",
      "Black or ENP finish for corrosion resistance",
      "Suitable for mild steel, stainless steel and aluminium",
      "Packed in a wooden box for safe transport",
    ],
    specs: standardSpecs([["Application", "Sheet metal bending"]]),
    applications: [
      ["Automotive", "Body panels, brackets, chassis parts"],
      ["Aerospace", "Structural components"],
      ["Construction", "HVAC ducts, architectural profiles"],
      ["Manufacturing", "Enclosures, cabinets, machine guards"],
    ],
    chooseList: [
      "Part drawing or a photo of the sample",
      "Material and sheet thickness",
      "Bend angle and inside radius",
      "Flange lengths",
      "Press brake make and model",
    ],
    related: ["press-brake-dies", "hemming-tools", "radius-tool-holders"],
  },
  {
    slug: "press-brake-dies",
    legacy: "press-brake-die",
    name: "Press brake dies",
    summary: "Single V, multi V and self-centering dies for thin sheet to thick plate.",
    seoTitle: "Press Brake Die Manufacturer in Pune | V Dies",
    seoDescription:
      "Single V, multi V, self-centering 2V and Amada-type 1V press brake dies. Hardened and ground for accurate, repeatable bends. Made in Pune.",
    image: img("press_break_dies_1.jpg"),
    intro: [
      "The die is the lower tool of a press brake. The width of its V-opening, together with the punch, decides the bend angle, the inside radius and the tonnage your machine needs. Choosing the right die is the first step to a good bend.",
      "We manufacture a full range of press brake dies, hardened and precision ground to keep bend angles consistent from the first part to the thousandth.",
    ],
    typesHeading: "Our die range",
    types: [
      { name: "Standard 1V dies (heavy duty)", text: "For higher sheet thickness ranges." },
      { name: "Single V dies", text: "One precise V-opening for dedicated jobs." },
      { name: "Multi V dies (4V and more)", text: "Several V-openings in one block for fast changeovers." },
      { name: "Self-centering 2V dies", text: "Two V-openings that locate automatically on the machine." },
      { name: "Amada-type self-centering 1V dies and holders", text: "A quick-change system for Amada-style press brakes." },
      { name: "2V die holders", text: "Rigid holders for secure die mounting." },
      { name: "U, offset and hemming dies", text: "For channels, steps and hems." },
    ],
    features: [
      "Precision ground V-openings for consistent angles",
      "Hardened working surfaces for long wear life",
      "Suitable for mild steel, stainless steel and aluminium",
      "Custom V-widths, angles and lengths available",
      "Guidance on V-width selection and tonnage",
    ],
    specs: standardSpecs([["V-width / angle", "As per requirement"]]),
    applications: [
      ["Automotive", "Body panels, chassis components"],
      ["Aerospace", "Structural elements"],
      ["Construction", "HVAC ductwork, architectural sections"],
      ["Manufacturing", "Machine enclosures, equipment parts"],
    ],
    related: ["single-v-dies", "multi-v-dies", "self-centering-2v-dies"],
  },
  {
    slug: "single-v-dies",
    legacy: "single-v-die",
    name: "Single V dies",
    summary: "One rigid V-opening for thick plate and dedicated jobs.",
    seoTitle: "Single V Die Manufacturer in Pune",
    seoDescription:
      "Precision single V press brake dies in custom V-widths and angles. Hardened and ground for accurate bending. Made in Pune.",
    image: img("press_break_dies_18.jpg"),
    intro: [
      "A single V die has one V-opening machined along its length. Because the whole block supports a single groove, it is very rigid. That makes it ideal for heavier thicknesses and for production jobs where the same bend is repeated again and again.",
    ],
    features: [
      "One precision-ground V-opening",
      "High rigidity for thicker sheet",
      "Multiple V-widths and angles such as 88°, 85°, 60° and 30°",
      "Full-length or sectionalised options",
    ],
    bestFor: ["Dedicated high-volume jobs", "Thick plate bending", "Consistent angle production"],
    specs: standardSpecs([["V-width / angle", "As per requirement"]]),
    related: ["multi-v-dies", "press-brake-punches", "press-brake-dies"],
  },
  {
    slug: "multi-v-dies",
    legacy: "multi-v-die",
    name: "Multi V dies",
    summary: "Several V-openings in one block. Rotate to change.",
    seoTitle: "Multi V Die Manufacturer in Pune | 4V Dies",
    seoDescription:
      "Multi V and 4V press brake dies with several V-openings in one block. Faster changeovers for job shops. Made in Pune.",
    image: img("press_break_dies_22.jpg"),
    intro: [
      "A multi V die has two or more V-openings on different faces of one block. Rotate the die to switch to a different V-width, with no need to change the whole tool. It's the go-to choice for job shops handling a variety of sheet thicknesses.",
    ],
    features: [
      "Multiple V-openings (2V, 4V and more) in one block",
      "Quick changeover by rotating the die",
      "Covers a wide thickness range",
      "Saves storage space and tooling cost",
    ],
    bestFor: ["Job shops with mixed work", "Frequent thickness changes", "Prototype and short-run production"],
    specs: standardSpecs([["V-openings", "As per requirement"]]),
    related: ["single-v-dies", "self-centering-2v-dies", "press-brake-punches"],
  },
  {
    slug: "self-centering-2v-dies",
    legacy: "self-centering-2v-die",
    name: "Self-centering 2V dies",
    summary: "Two V-openings that align themselves with the punch.",
    seoTitle: "Self Centering 2V Die Manufacturer in Pune",
    seoDescription:
      "Self-centering 2V press brake dies with two V-openings and automatic alignment. Faster setup, accurate bends. Made in Pune.",
    image: img("press_break_dies_26.jpg"),
    intro: [
      "Self-centering 2V dies have two V-openings and a centering base that aligns the die with the punch automatically when it's mounted. Setup is faster, alignment errors disappear, and switching between the two V-widths takes seconds.",
    ],
    features: [
      "Two V-openings in one die",
      "Automatic centering for fast, accurate setup",
      "Less setup time and fewer operator errors",
      "Matching 2V die holders available",
    ],
    specs: standardSpecs([
      ["V-openings", "As per requirement"],
      ["Holder", "Autozone Tooling 2V die holder"],
    ]),
    related: ["multi-v-dies", "amada-type-1v-dies", "press-brake-dies"],
  },
  {
    slug: "amada-type-1v-dies",
    legacy: "amada-type-self-centering-1v-die",
    name: "Amada-type self-centering 1V dies",
    summary: "Quick-change 1V dies for Amada-style press brakes.",
    seoTitle: "Amada Type Self Centering 1V Die Manufacturer in Pune",
    seoDescription:
      "Amada-type self-centering 1V press brake dies for quick-change tooling systems. Precision ground, made in Pune.",
    image: img("press_break_dies_10.jpg"),
    intro: [
      "Built for Amada-style press brakes, these 1V dies have a self-centering tang that seats directly into the die holder. They lock in with accurate alignment, so tool changes are quick and bend results stay consistent.",
    ],
    features: [
      "Amada-style self-centering tang",
      "Single precision-ground V-opening",
      "Quick mounting and removal",
      "Multiple V-widths, angles and segmented lengths",
    ],
    specs: standardSpecs([["Compatibility", "Amada-style press brakes"]]),
    related: ["amada-type-1v-die-holders", "single-v-dies", "press-brake-punches"],
  },
  {
    slug: "amada-type-1v-die-holders",
    legacy: "amada-type-self-centering-1v-die-holder",
    name: "Amada-type 1V die holders",
    summary: "Rigid holders that keep 1V dies aligned with the punch.",
    seoTitle: "Amada Type 1V Die Holder Manufacturer in Pune",
    seoDescription:
      "Rigid Amada-type die holders for self-centering 1V dies. Accurate alignment and fast tool changes. Made in Pune.",
    image: img("press_break_dies_14.jpg"),
    intro: [
      "The die holder mounts on the press brake bed and holds the 1V die in place. A rigid, accurately machined holder keeps the die aligned with the punch, which you need for consistent bend angles along the full length of the part.",
    ],
    features: [
      "Rigid construction for stable die support",
      "Accurate centering with Amada-type 1V dies",
      "Quick die clamping and release",
      "Custom lengths available",
    ],
    related: ["amada-type-1v-dies", "self-centering-2v-dies", "press-brake-dies"],
  },
  {
    slug: "radius-tool-holders",
    legacy: "radius-tool-holder",
    name: "Radius tool holders",
    summary: "One holder, many radii. Swap the insert, not the punch.",
    seoTitle: "Radius Tool Holder Manufacturer in Pune",
    seoDescription:
      "Press brake radius tool holders for interchangeable radius inserts. Large-radius bends with one holder. Made in Pune.",
    image: img("radius_tools_holders_insert.jpg"),
    intro: [
      "Radius tool holders are punch bodies that carry interchangeable radius inserts. Instead of buying a complete punch for every radius, you mount one holder and swap the insert. That saves tooling cost and changeover time.",
    ],
    features: [
      "Accepts a wide range of radius inserts",
      "Rigid body for consistent large-radius bends",
      "Quick insert change",
      "Compatible with popular press brake clamping systems",
    ],
    bestFor: [
      "Large inside-radius bends",
      "Cosmetic parts that need a smooth curve",
      "High-strength materials that crack at tight radii",
    ],
    related: ["radius-tool-inserts", "press-brake-punches", "special-application-tools"],
  },
  {
    slug: "radius-tool-inserts",
    legacy: "radius-tool-insert",
    name: "Radius tool inserts",
    summary: "Precision-ground inserts for smooth, crack-free curves.",
    seoTitle: "Radius Tool Insert Manufacturer in Pune",
    seoDescription:
      "Hardened press brake radius inserts in multiple radii for smooth, crack-free bends. Fits Autozone Tooling radius holders.",
    image: img("radius_tools_holders_insert.jpg"),
    intro: [
      "Radius inserts fit into the radius tool holder and form the actual curve of the bend. Each insert is precision ground to an exact radius, giving smooth, uniform curves without surface marks or cracks.",
    ],
    features: [
      "Multiple standard radius sizes", // TODO(client): list the standard range, e.g. R5 to R50
      "Hardened and ground for accuracy and wear life",
      "Interchangeable: one holder, many radii",
      "Custom radii made to order",
    ],
    related: ["radius-tool-holders", "press-brake-punches", "special-application-tools"],
  },
  {
    slug: "hemming-tools",
    legacy: "press-brake-hemming-tool",
    name: "Hemming tools",
    summary: "Pre-bend and flatten a hem in two strokes on one setup.",
    seoTitle: "Press Brake Hemming Tool Manufacturer in Pune",
    seoDescription:
      "Press brake hemming tools for closed, open and teardrop hems. Pre-bend and flatten on one tool. Made in Pune.",
    image: img("press_brake_hemming_tools_1.jpg"),
    intro: [
      "Hemming folds the edge of a sheet back onto itself to make a safe, strong and neat edge. Our hemming tools combine an acute-angle pre-bend (typically 30° or 28°/24°) with a flattening section, so you finish the hem in two strokes on the same setup.",
    ],
    typesHeading: "Types of hems",
    types: [
      { name: "Closed (flat) hem", text: "The edge is folded fully flat for maximum safety and stiffness." },
      { name: "Open hem", text: "A small gap is left between the layers." },
      { name: "Teardrop hem", text: "A rounded fold that reduces cracking on thicker or harder material." },
    ],
    features: [
      "Pre-bend and flattening in one tool set",
      "Hardened contact surfaces for long life",
      "Consistent hem quality along the full length",
      "Custom designs for specific hem requirements",
    ],
    applications: [
      ["Electrical", "Panel doors and enclosures"],
      ["Appliances", "Outer bodies and covers"],
      ["Automotive", "Door and bonnet panels"],
      ["Furniture & HVAC", "Cabinet edges and duct seams"],
    ],
    related: ["press-brake-punches", "press-brake-dies", "joggle-tools"],
  },
  {
    slug: "joggle-tools",
    legacy: "joggle-tool-insert",
    name: "Joggle tools & inserts",
    summary: "An offset step in a single stroke.",
    seoTitle: "Joggle Tool & Insert Manufacturer in Pune",
    seoDescription:
      "Press brake joggle (offset) tools and inserts for step bends in a single stroke. Custom offset heights available.",
    image: img("joggle_tools_inserts_1.jpg"),
    intro: [
      "A joggle (offset) tool forms two opposite bends in one press stroke, creating a step in the sheet. Joggles let one panel overlap another flush, which is common in enclosures, cabinets and structural assemblies.",
      "Our joggle tools use interchangeable inserts, so one tool body can make different offset heights.",
    ],
    features: [
      "Z-bend or offset in a single stroke",
      "Interchangeable inserts for different offset heights",
      "Faster than two separate bends",
      "Precise, repeatable step dimensions",
      "Custom offsets available",
    ],
    bestFor: ["Enclosures", "Cabinet doors", "Overlapping panels", "Brackets", "Structural members"],
    related: ["hemming-tools", "special-application-tools", "press-brake-punches"],
  },
  {
    slug: "shear-blades",
    legacy: "shear-blade",
    name: "Shear blades",
    summary: "Guillotine blades for all machines, with re-grinding service.",
    seoTitle: "Shear Blade Manufacturer in Pune | Guillotine Blades",
    seoDescription:
      "Guillotine shear blades for all machine types, with a re-grinding service. Clean cuts and long blade life. Made in Pune.",
    image: img("shear_blades_1.jpg"),
    intro: [
      "Shear blades are the cutting edges of a guillotine shearing machine. Sharp, correctly hardened blades give clean, burr-free cuts and reduce the load on your machine.",
      "We manufacture shear blades for all makes of shearing machine, and we re-grind worn blades to restore the edge and extend their life.",
    ],
    features: [
      "Quality tool steel, heat-treated for edge retention",
      "Precision ground for straight, clean cuts",
      "Available with 2 or 4 cutting edges",
      "Suitable for mild steel, stainless steel and aluminium",
      "Re-grinding service available",
    ],
    specs: [
      ["Material", "Tool steel (grade as per application)"], // TODO(client): confirm grades
      ["Length", "As per machine"],
      ["Cutting edges", "2 / 4"],
      ["Service", "Re-grinding available"],
      ["Origin", "Made in India"],
    ],
    related: ["press-brake-punches", "press-brake-dies", "special-application-tools"],
  },
  {
    slug: "special-application-tools",
    legacy: null,
    name: "Special application tools",
    summary: "Custom tools engineered around your part.",
    seoTitle: "Custom Press Brake Tools | Special Application Tooling",
    seoDescription:
      "Custom press brake tools for special profiles and unique parts. Designed and made in Pune from your drawing or sample.",
    image: img("specila_application_1.jpg"),
    intro: [
      "Some parts need a profile that standard punches and dies can't produce: deep boxes, complex returns, embossing, louvers, several bends in one stroke, or unusual radii. Our design team develops special tools built around your exact part.",
    ],
    typesHeading: "Examples of special tools",
    types: [
      { name: "Multi-bend forming tools", text: "Form two or more bends in a single stroke." },
      { name: "Deep box and gooseneck specials", text: "Extra clearance for tall return flanges." },
      { name: "Custom radius and profile tools", text: "Any radius or profile your part needs." },
      { name: "Offset and Z-profile tools", text: "Steps and Z-bends at custom heights." },
      { name: "Machine-specific tools", text: "Built for your press brake's clamping system." },
    ],
    process: [
      { name: "Share your requirement", text: "Send a drawing, sample or photo with the material and thickness." },
      { name: "Engineering review", text: "We study the bend sequence and your machine's capacity." },
      { name: "Tool design", text: "We design a custom profile for your part." },
      { name: "Manufacturing", text: "Precision machining, heat treatment and grinding." },
      { name: "Delivery and support", text: "Safe packaging and setup guidance." },
    ],
    features: [
      "Designed from your drawing or sample",
      "Hardened and ground like our standard range",
      "Built for your machine's clamping system",
    ],
    related: ["joggle-tools", "radius-tool-holders", "hemming-tools"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}