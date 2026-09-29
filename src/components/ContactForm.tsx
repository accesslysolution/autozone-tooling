"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import { site, waLink } from "@/lib/site";

/*
  No backend needed: the form composes the enquiry and opens WhatsApp
  (or email) with everything pre-filled. To send enquiries to a server
  instead, replace handleSubmit with a POST to an API route.
*/

type Fields = {
  name: string;
  company: string;
  phone: string;
  email: string;
  city: string;
  product: string;
  machine: string;
  message: string;
};

const empty: Fields = { name: "", company: "", phone: "", email: "", city: "", product: "", machine: "", message: "" };

export default function ContactForm() {
  const [f, setF] = useState<Fields>(empty);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((prev) => ({ ...prev, [k]: e.target.value }));

  const buildMessage = () =>
    [
      `New enquiry from ${site.domain}`,
      `Name: ${f.name}`,
      f.company && `Company: ${f.company}`,
      `Mobile: ${f.phone}`,
      f.email && `Email: ${f.email}`,
      f.city && `City: ${f.city}`,
      f.product && `Product: ${f.product}`,
      f.machine && `Press brake: ${f.machine}`,
      f.message && `Requirement: ${f.message}`,
    ]
      .filter(Boolean)
      .join("\n");

  const validate = () => {
    if (!f.name.trim()) return "Enter your name.";
    if (!/^[+\d\s-]{10,15}$/.test(f.phone.trim())) return "Enter a valid 10-digit mobile number.";
    if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) return "Check the email address, or leave it blank.";
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    setError(err);
    if (err) return;
    window.open(waLink(buildMessage()), "_blank", "noopener");
    setSent(true);
  };

  const mailHref = `mailto:${site.email}?subject=${encodeURIComponent("Tooling enquiry")}&body=${encodeURIComponent(buildMessage())}`;

  const input = "mt-1 w-full rounded-sm border border-oxide/25 bg-paper px-3 py-2.5 focus:border-temper focus:outline-none";

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-6 grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-medium">
        Full name *
        <input className={input} value={f.name} onChange={set("name")} autoComplete="name" required />
      </label>
      <label className="text-sm font-medium">
        Company name
        <input className={input} value={f.company} onChange={set("company")} autoComplete="organization" />
      </label>
      <label className="text-sm font-medium">
        Mobile number *
        <input className={input} value={f.phone} onChange={set("phone")} type="tel" autoComplete="tel" inputMode="tel" required />
      </label>
      <label className="text-sm font-medium">
        Email
        <input className={input} value={f.email} onChange={set("email")} type="email" autoComplete="email" />
      </label>
      <label className="text-sm font-medium">
        City
        <input className={input} value={f.city} onChange={set("city")} autoComplete="address-level2" />
      </label>
      <label className="text-sm font-medium">
        Product required
        <select className={input} value={f.product} onChange={set("product")}>
          <option value="">Select a product</option>
          {products.map((p) => (
            <option key={p.slug} value={p.name}>{p.name}</option>
          ))}
          <option value="Other">Other</option>
        </select>
      </label>
      <label className="text-sm font-medium sm:col-span-2">
        Press brake make and model
        <input className={input} value={f.machine} onChange={set("machine")} placeholder="e.g. Amada HFE 100" />
      </label>
      <label className="text-sm font-medium sm:col-span-2">
        Requirement details
        <textarea className={`${input} min-h-32`} value={f.message} onChange={set("message")} placeholder="Material, thickness, bend angle, radius, flange length, quantity" />
      </label>

      {error && <p role="alert" className="text-sm font-medium text-red-700 sm:col-span-2">{error}</p>}
      {sent && !error && (
        <p role="status" className="text-sm font-medium text-temper sm:col-span-2">
          Your enquiry is ready in WhatsApp. Press send there and our team will get back to you shortly.
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" className="btn-primary">Send enquiry on WhatsApp</button>
        <a href={mailHref} className="text-sm font-semibold text-temper hover:underline">Send by email instead</a>
      </div>
      <p className="text-xs text-gauge sm:col-span-2">Have a drawing? Attach it in the WhatsApp chat or email after sending.</p>
    </form>
  );
}