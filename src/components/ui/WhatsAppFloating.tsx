// src/components/ui/WhatsAppFloating.tsx

import { siteConfig } from "@/config/site";

function buildWhatsAppLink() {
  const number = siteConfig.contact.whatsappNumber;
  const msg =
    "Olá! Vim pela landing page e gostaria de agendar uma consulta.";
  const text = encodeURIComponent(msg);
  return `https://wa.me/${number}?text=${text}`;
}

export default function WhatsAppFloating() {
  const href = siteConfig.cta?.primary?.href || buildWhatsAppLink();

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full border border-[#C9A227]/50 bg-black/70 px-5 py-3 text-sm font-semibold text-[#f5d67b] shadow-[0_20px_60px_rgba(0,0,0,0.65)] backdrop-blur transition hover:border-[#C9A227] hover:bg-black/85"
    >
      <span className="relative inline-flex h-3.5 w-3.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9A227]/40" />
        <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-[#C9A227]" />
      </span>

      <span className="hidden sm:inline">WhatsApp</span>
      <span className="sm:hidden">Contato</span>
    </a>
  );
}