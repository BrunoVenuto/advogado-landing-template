// src/components/sections/Contact.tsx

import { siteConfig } from "@/config/site";

function buildWhatsAppLink() {
  const number = siteConfig.contact.whatsappNumber;
  const msg = encodeURIComponent(
    "Olá! Vim pela landing page e gostaria de agendar uma consulta."
  );
  return `https://wa.me/${number}?text=${msg}`;
}

export default function Contact() {
  const whatsappHref = siteConfig.cta?.primary?.href || buildWhatsAppLink();

  return (
    <section id="contato" className="relative z-10 mx-auto max-w-6xl px-6 pb-28">
      <div className="rounded-3xl border border-zinc-800 bg-black/35 p-8 shadow-[0_35px_120px_rgba(0,0,0,0.65)] backdrop-blur md:p-12">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* TEXTO */}
          <div>
            <p className="text-sm tracking-[0.35em] uppercase text-zinc-500">
              Contato
            </p>

            <h2 className="mt-4 text-4xl font-semibold">
              Fale agora com atendimento prioritário
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-500">
              Explique o seu caso de forma objetiva. Você recebe orientação clara
              sobre os próximos passos e as possibilidades jurídicas com transparência.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappHref}
                className="rounded-md bg-[#C9A227] px-10 py-4 text-center text-sm font-bold text-black shadow-[0_0_28px_rgba(201,162,39,0.45)] transition hover:scale-[1.03]"
              >
                Chamar no WhatsApp
              </a>

              <a
                href="#faq"
                className="rounded-md border border-[#C9A227] px-10 py-4 text-center text-sm font-semibold transition hover:bg-[#C9A227] hover:text-black"
              >
                Ver dúvidas frequentes
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-zinc-500">
              {siteConfig.contact.businessHours && (
                <p>
                  <span className="text-[#f5d67b]">Horários:</span>{" "}
                  {siteConfig.contact.businessHours}
                </p>
              )}
              {siteConfig.contact.email && (
                <p>
                  <span className="text-[#f5d67b]">E-mail:</span>{" "}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="underline decoration-[#C9A227]/40 underline-offset-4 hover:decoration-[#C9A227]"
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>
              )}
              {siteConfig.contact.addressLine && (
                <p>
                  <span className="text-[#f5d67b]">Endereço:</span>{" "}
                  {siteConfig.contact.addressLine}
                </p>
              )}
            </div>
          </div>

          {/* CARTÃO LUXO */}
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 p-8">
            <div className="pointer-events-none absolute -top-28 -right-28 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.18),transparent_60%)] blur-2xl" />

            <p className="text-sm tracking-[0.35em] uppercase text-zinc-500">
              Orientação
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-[#f5d67b]">
              Atendimento profissional, direto ao ponto
            </h3>

            <ul className="mt-6 space-y-4 text-sm text-zinc-400">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-[#C9A227]" />
                <span>Você descreve a situação e recebe direcionamento inicial.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-[#C9A227]" />
                <span>Análise objetiva e estratégia dos próximos passos.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-[#C9A227]" />
                <span>Transparência sobre prazos, documentos e possibilidades.</span>
              </li>
            </ul>

            <div className="mt-8 h-px w-16 bg-[#C9A227] opacity-35" />

            <p className="mt-6 text-xs text-zinc-500">
              * Cada caso é único. A orientação inicial pode variar conforme documentos e contexto.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 h-px w-40 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-60" />
    </section>
  );
}