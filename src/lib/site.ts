// Central business details. Edit here once; every page updates.
// TODO(client): confirm address, founding year and working hours.

export const site = {
  name: "Autozone Tooling",
  url: "https://www.autozonetooling.com", // TODO: confirm the new domain
  domain: "autozonetooling.com",          // TODO: keep in sync with url
  tagline: "Precision press brake tooling, made in Pune",
  md: "Mr. Kiran Hande",
  mdRole: "Managing Director",
  phones: [
    { label: "+91 89834 06826", href: "tel:+918983406826" },
    { label: "+91 85306 16826", href: "tel:+918530616826" },
  ],
  whatsapp: "918983406826",
  email: "info@autozonetooling.com", // TODO: confirm the new email is set up
  address: {
    line1: "Plot No. 269, Sector No. 10, PCNTDA",
    line2: "MIDC Bhosari, Pune – 411026",
    region: "Maharashtra, India",
    street: "Plot No. 269, Sector No. 10, PCNTDA, MIDC Bhosari",
    city: "Pune",
    postal: "411026",
    state: "Maharashtra",
  },
  gst: "27AKLPH4329L1ZT",
  hours: "Monday to Saturday, 9:30 AM – 6:30 PM",
  foundedYear: "2020", // TODO(client): old site says 2020, 2022 and "9 years" in different places
  catalogue: "/catalogue.pdf",
  socials: {
    // TODO: swap to the new Autozone pages once they're created. Old links kept so they don't break.
    facebook: "https://www.facebook.com/share/LcCaRARUbRPVfYGW/",
    linkedin: "https://www.linkedin.com/company/infinity-tooling",
    instagram: "https://www.instagram.com/infinitytooling",
  },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3780.312109706238!2d73.83375597519483!3d18.649985282468897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM4JzYwLjAiTiA3M8KwNTAnMTAuOCJF!5e0!3m2!1sen!2sin!4v1726738272504!5m2!1sen!2sin",
  mapLink: "https://maps.app.goo.gl/dCkceuuQwzAvE5ub6",
  stats: [
    { value: "521+", label: "Projects completed" },
    { value: "232+", label: "Clients served" },
    { value: "15+", label: "Skilled team members" },
    { value: "1,463+", label: "Hours of technical support" },
  ],
  machines: ["Amada", "Trumpf", "Bystronic", "LVD", "JFY"],
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}