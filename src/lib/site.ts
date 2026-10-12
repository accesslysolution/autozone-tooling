export interface SiteConfig {
  name: string;
  url: string;
  email: string;
  phones: { label: string; href: string }[];
  address: {
    street: string;
    city: string;
    state: string;
    postal: string;
    country: string;
  };
  socials: {
    linkedin?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
}

export const site: SiteConfig = {
  name: "Autozone Tooling",
  url: "https://autozonetooling.com", // Replace with your actual production domain
  email: "info@autozonetooling.com", // Replace with your actual email
  phones: [
    { label: "+91 98220 XXXXX", href: "tel:+9198220XXXXX" }, // Replace with your actual phone number
  ],
  address: {
    street: "Industrial Area, Bhosari", // Replace with your exact street/industrial estate
    city: "Pune",
    state: "Maharashtra",
    postal: "411026", // Replace with your actual postal code
    country: "IN",
  },
  socials: {
    linkedin: "https://linkedin.com/company/autozone-tooling", // Update or leave as needed
    facebook: "https://facebook.com/autozonetooling",
    twitter: "https://twitter.com/autozonetooling",
  },
};