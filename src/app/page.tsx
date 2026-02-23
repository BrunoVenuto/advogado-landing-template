// src/app/page.tsx

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Playfair_Display } from "next/font/google";

import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import WhatsAppFloating from "@/components/ui/WhatsAppFloating";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  return (
    <main
      className={`min-h-screen bg-gradient-to-b from-black via-zinc-950 to-zinc-900 text-[#C9A227] ${playfair.className}`}
    >
      {/* FUNDO PREMIUM */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,39,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.05),transparent_60%)]" />
      </div>

      {/* HEADER */}
      <header className="relative z-10 border-b border-zinc-800/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="text-xl font-bold tracking-[0.2em] uppercase">
            {siteConfig.branding.logoText}
          </div>

          <a
            href={siteConfig.cta.primary.href}
            className="rounded-full border border-[#C9A227] px-6 py-2 text-sm font-semibold transition hover:bg-[#C9A227] hover:text-black"
          >
            {siteConfig.cta.primary.label}
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="mb-6 text-sm tracking-[0.4em] uppercase text-zinc-500">
            {siteConfig.profile.city}
            {siteConfig.profile.oab && ` • ${siteConfig.profile.oab}`}
          </p>

          <h1 className="mb-8 text-5xl font-bold leading-tight md:text-6xl">
            <span className="text-gold-gradient drop-shadow-[0_0_18px_rgba(201,162,39,0.25)]">
              {siteConfig.profile.headline}
            </span>
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-zinc-400">
            {siteConfig.profile.bio}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={siteConfig.cta.primary.href}
              className="rounded-md bg-[#C9A227] px-10 py-4 text-center text-sm font-bold text-black shadow-[0_0_28px_rgba(201,162,39,0.45)] transition hover:scale-[1.03]"
            >
              {siteConfig.cta.primary.label}
            </a>

            {siteConfig.cta.secondary && (
              <a
                href={siteConfig.cta.secondary.href}
                className="rounded-md border border-[#C9A227] px-10 py-4 text-center text-sm font-semibold transition hover:bg-[#C9A227] hover:text-black"
              >
                {siteConfig.cta.secondary.label}
              </a>
            )}
          </div>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-black/40 px-5 py-2 text-xs text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-[#C9A227]" />
            Atendimento com postura estratégica e acompanhamento completo
          </div>
        </div>

        {/* FOTO PREMIUM */}
        <div className="relative">
          <div className="absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.18),transparent_60%)] blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-[#C9A227]/40 bg-gradient-to-b from-zinc-950 to-black shadow-[0_0_0_1px_rgba(201,162,39,0.10),0_25px_90px_rgba(0,0,0,0.65)]">
            <div className="absolute inset-3 rounded-2xl border border-[#C9A227]/15 pointer-events-none" />

            <div className="relative aspect-[4/5] w-full">
              <Image
                src={siteConfig.profile.photo.src}
                alt={siteConfig.profile.photo.alt}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
            </div>

            <div className="border-t border-zinc-800/80 px-6 py-5">
              <p className="text-sm font-semibold text-[#f5d67b]">
                {siteConfig.profile.name}
              </p>
              <p className="text-xs tracking-wide text-zinc-500">
                {siteConfig.profile.oab ?? "Advocacia"} • {siteConfig.profile.city}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISOR */}
      <div className="relative z-10 mx-auto mb-16 h-px w-40 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-60" />

      {/* STATS */}
      {siteConfig.stats && (
        <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-2xl border border-zinc-800 bg-black/30 p-8 backdrop-blur">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-semibold">
                Confiança construída com resultado
              </h2>
              <p className="mt-3 text-sm text-zinc-500">
                Experiência, postura e acompanhamento do seu caso do início ao fim.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {siteConfig.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-6 text-center"
                >
                  <div className="text-3xl font-bold text-[#f5d67b]">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm text-zinc-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DEPOIMENTOS */}
      <Testimonials />

      {/* ÁREAS */}
      <section id="areas" className="relative z-10 mx-auto max-w-6xl px-6 pb-28">
        <h2 className="mb-16 text-center text-4xl font-semibold">
          Áreas de Atuação
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {siteConfig.practiceAreas.map((area) => (
            <div
              key={area.title}
              className="group rounded-xl border border-zinc-800 bg-zinc-950/60 p-8 transition hover:border-[#C9A227]"
            >
              <h3 className="mb-4 text-xl font-semibold transition group-hover:text-[#f5d67b]">
                {area.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-500">
                {area.description}
              </p>

              <div className="mt-6 h-px w-10 bg-[#C9A227] opacity-40 transition group-hover:w-20" />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 h-px w-40 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-60" />
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CONTATO */}
      <Contact />

      {/* FOOTER */}
      <Footer />

      {/* BOTÃO WHATSAPP FLUTUANTE */}
      <WhatsAppFloating />
    </main>
  );
}