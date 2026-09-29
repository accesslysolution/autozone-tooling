import ContactForm from "./ContactForm";

export default function QuoteCard() {
  return (
    <div className="border border-oxide/15 bg-white p-6 md:p-8">
      <h2 className="text-3xl">Request a quote</h2>
      <p className="mt-2 text-sm text-gauge">
        Fields marked * are required. Your enquiry opens in WhatsApp so our team can reply quickly.
      </p>
      <ContactForm />
    </div>
  );
}