// src/components/sections/Testimonials.tsx

import { siteConfig } from "@/config/site";

function StarRow() {
  return (
    <div className="flex items-center gap-1" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-[#C9A227] drop-shadow-[0_0_10px_rgba(201,162,39,0.25)]">
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const testimonials = siteConfig.testimonials ?? [];

  if (testimonials.length === 0) return null;

  return (
    <section id="depoimentos" className="relative z-10 mx-auto max-w-6xl px-6 pb-32">
      <div className="mb-14 text-center">
        <p className="text-sm tracking-[0.35em] uppercase text-zinc-500">
          Depoimentos
        </p>
        <h2 className="mt-4 text-4xl font-semibold">
          Reputação construída com seriedade
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
          Feedback real de clientes atendidos. Postura profissional, comunicação clara
          e condução estratégica em cada etapa.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <article
            key={`${t.name}-${t.text.slice(0, 12)}`}
            className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 p-7 shadow-[0_30px_90px_rgba(0,0,0,0.60)] transition hover:border-[#C9A227]"
          >
            {/* brilho premium */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.18),transparent_60%)] blur-2xl opacity-0 transition group-hover:opacity-100" />

            <StarRow />

            <p className="mt-5 text-sm leading-relaxed text-zinc-300">
              <span className="text-[#f5d67b]">“</span>
              {t.text}
              <span className="text-[#f5d67b]">”</span>
            </p>

            <div className="mt-6 h-px w-12 bg-[#C9A227] opacity-30 transition group-hover:w-24" />

            <footer className="mt-5">
              <p className="text-sm font-semibold text-[#f5d67b]">{t.name}</p>
              {t.role && (
                <p className="text-xs tracking-wide text-zinc-500">{t.role}</p>
              )}
            </footer>
          </article>
        ))}
      </div>

      {/* divisor */}
      <div className="mx-auto mt-20 h-px w-40 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-60" />
    </section>
  );
}