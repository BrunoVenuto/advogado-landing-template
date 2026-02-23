// src/components/sections/Footer.tsx

import { siteConfig } from "@/config/site";

function yearNow() {
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-zinc-800/80 bg-black/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca */}
          <div>
            <div className="text-lg font-bold tracking-[0.2em] uppercase text-[#f5d67b]">
              {siteConfig.branding.logoText}
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">
              Atendimento profissional e estratégico, com foco em clareza,
              postura e condução segura do seu caso.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={siteConfig.cta.primary.href}
                className="rounded-full border border-[#C9A227]/60 bg-black/30 px-4 py-2 text-xs font-semibold text-[#f5d67b] transition hover:border-[#C9A227] hover:bg-black/50"
              >
                WhatsApp
              </a>
              <a
                href="#areas"
                className="rounded-full border border-zinc-800 bg-black/30 px-4 py-2 text-xs font-semibold text-zinc-400 transition hover:border-[#C9A227]/60 hover:text-[#f5d67b]"
              >
                Áreas
              </a>
              <a
                href="#faq"
                className="rounded-full border border-zinc-800 bg-black/30 px-4 py-2 text-xs font-semibold text-zinc-400 transition hover:border-[#C9A227]/60 hover:text-[#f5d67b]"
              >
                FAQ
              </a>
              <a
                href="#contato"
                className="rounded-full border border-zinc-800 bg-black/30 px-4 py-2 text-xs font-semibold text-zinc-400 transition hover:border-[#C9A227]/60 hover:text-[#f5d67b]"
              >
                Contato
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <p className="text-sm font-semibold text-[#f5d67b]">Contato</p>
            <div className="mt-4 space-y-3 text-sm text-zinc-500">
              {siteConfig.contact.businessHours && (
                <p>
                  <span className="text-zinc-400">Horários:</span>{" "}
                  {siteConfig.contact.businessHours}
                </p>
              )}
              {siteConfig.contact.email && (
                <p>
                  <span className="text-zinc-400">E-mail:</span>{" "}
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
                  <span className="text-zinc-400">Endereço:</span>{" "}
                  {siteConfig.contact.addressLine}
                </p>
              )}
            </div>

            {siteConfig.socials && (
              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                {siteConfig.socials.instagram && (
                  <a
                    href={siteConfig.socials.instagram}
                    className="rounded-full border border-zinc-800 bg-black/30 px-4 py-2 font-semibold text-zinc-400 transition hover:border-[#C9A227]/60 hover:text-[#f5d67b]"
                  >
                    Instagram
                  </a>
                )}
                {siteConfig.socials.linkedin && (
                  <a
                    href={siteConfig.socials.linkedin}
                    className="rounded-full border border-zinc-800 bg-black/30 px-4 py-2 font-semibold text-zinc-400 transition hover:border-[#C9A227]/60 hover:text-[#f5d67b]"
                  >
                    LinkedIn
                  </a>
                )}
                {siteConfig.socials.youtube && (
                  <a
                    href={siteConfig.socials.youtube}
                    className="rounded-full border border-zinc-800 bg-black/30 px-4 py-2 font-semibold text-zinc-400 transition hover:border-[#C9A227]/60 hover:text-[#f5d67b]"
                  >
                    YouTube
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Aviso legal */}
          <div>
            <p className="text-sm font-semibold text-[#f5d67b]">Aviso</p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Este site possui caráter informativo e não substitui consulta jurídica.
              Resultados podem variar conforme o caso concreto, documentos e contexto.
            </p>

            <div className="mt-8 h-px w-16 bg-[#C9A227] opacity-30" />

            <p className="mt-6 text-xs text-zinc-600">
              © {yearNow()} {siteConfig.branding.logoText}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}