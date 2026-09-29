import { site, waLink } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a href={site.phones[0].href}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-temper text-white shadow-lg md:hidden"
        aria-label="Call Autozone Tooling"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.6a1 1 0 01-.25 1z" />
        </svg>
      </a>

      <a href={waLink("Hi Autozone Tooling, I have a tooling requirement.")}
        target="_blank"
        rel="noopener"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
        aria-label="Chat with us on WhatsApp"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.25-.12-1.47-.72-1.7-.8s-.4-.12-.56.12-.64.8-.79.97-.29.19-.54.06a6.7 6.7 0 01-3.3-2.9c-.25-.43.25-.4.71-1.33a.45.45 0 00-.02-.42c-.06-.12-.56-1.35-.77-1.85s-.4-.42-.56-.43h-.48a.92.92 0 00-.67.31 2.8 2.8 0 00-.87 2.08 4.9 4.9 0 001 2.6 11.2 11.2 0 004.3 3.8c1.6.69 2.23.75 3.03.63a2.6 2.6 0 001.7-1.2 2.1 2.1 0 00.15-1.2c-.06-.1-.23-.17-.48-.29z" />
        </svg>
      </a>
    </div>
  );
}