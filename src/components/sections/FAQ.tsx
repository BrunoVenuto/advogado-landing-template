// src/components/sections/FAQ.tsx

"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "@/config/site";

type Item = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const items: Item[] = useMemo(() => siteConfig.faqs ?? [], []);

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items.length) return null;

  return (
    <section id="faq" className="relative z-10 mx-auto max-w-6xl px-6 pb-28">
      <div className="mb-14 text-center">
        <p className="text-sm tracking-[0.35em] uppercase text-zinc-500">Dúvidas</p>
        <h2 className="mt-4 text-4xl font-semibold">
          Perguntas frequentes
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
          Respostas objetivas para você entender o caminho mais seguro antes de tomar
          qualquer decisão.
        </p>
      </div>

      <div className="mx-auto max-w-3xl space-y-4">
        {items.map((it, idx) => {
          const open = openIndex === idx;

          return (
            <div
              key={`${it.question}-${idx}`}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 shadow-[0_25px_80px_rgba(0,0,0,0.55)]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : idx)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open}
              >
                <span className="text-base font-semibold text-[#f5d67b]">
                  {it.question}
                </span>

                <span
                  className={[
                    "grid h-9 w-9 place-items-center rounded-full border border-zinc-800 bg-black/30 text-[#C9A227] transition",
                    open ? "rotate-45" : "rotate-0",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              <div
                className={[
                  "grid transition-all duration-300 ease-out",
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                ].join(" ")}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-sm leading-relaxed text-zinc-500">
                    {it.answer}
                  </div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-15" />
            </div>
          );
        })}
      </div>

      <div className="mx-auto mt-16 h-px w-40 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-60" />
    </section>
  );
}