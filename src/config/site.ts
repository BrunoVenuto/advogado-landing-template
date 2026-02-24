// src/config/site.ts
import type { SiteConfig } from "@/app/types/site";

const whatsappNumber = "5531995453632";
const whatsappMessage = encodeURIComponent(
  "Olá! Vim pela landing page e gostaria de agendar uma consulta."
);

export const siteConfig: SiteConfig = {
  meta: {
    title: "Dra. Mariana Souza | Advocacia Especializada",
    description:
      "Atendimento humanizado e estratégico. Agende sua consulta e saiba como podemos ajudar no seu caso.",
    ogImage: "/og.jpg",
    domain: "example.com",
  },

  branding: {
    logoText: "MS Advocacia",
    primaryColor: "#0F172A",
    accentColor: "#C9A227",
  },

  profile: {
    name: "Dra. Mariana Souza",
    oab: "OAB/SP 756.834",
    city: "São Paulo - SP",
    headline: "Defesa estratégica e atendimento humanizado para o seu caso.",
    bio: "Atuo com foco em soluções claras, rápidas e seguras. Minha missão é orientar você com transparência e firmeza, buscando o melhor resultado jurídico possível.",
    photo: {
      src: "/lawyer.png",
      alt: "Foto da advogada Mariana Souza",
    },
  },

  cta: {
    primary: {
      label: "Falar no WhatsApp",
      href: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
    },
    secondary: {
      label: "Ver áreas de atuação",
      href: "#areas",
    },
  },

  socials: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },

  stats: [
    { label: "Anos de atuação", value: "10+" },
    { label: "Casos atendidos", value: "500+" },
    { label: "Atendimento", value: "Online e presencial" },
  ],

  practiceAreas: [
    {
      title: "Direito de Família",
      description:
        "Divórcio, guarda, pensão, reconhecimento e dissolução de união estável.",
    },
    {
      title: "Direito do Consumidor",
      description:
        "Cobranças indevidas, negativação, vícios de produto, indenizações.",
    },
    {
      title: "Direito Trabalhista",
      description:
        "Rescisão, verbas, horas extras, acordos e orientações preventivas.",
    },
  ],

  testimonials: [
  {
    name: "Carlos A.",
    role: "Cliente",
    text: "Atendimento excelente e explicações muito claras. Me senti seguro do início ao fim.",
  },
  {
    name: "Fernanda R.",
    role: "Cliente",
    text: "Agilidade e profissionalismo. Consegui resolver meu caso com ótima orientação.",
  },
  {
    name: "Mariana T.",
    role: "Empresária",
    text: "Profissional extremamente preparada. Conduziu meu caso com estratégia e postura firme, sempre esclarecendo cada etapa do processo.",
  },
  {
    name: "Roberto L.",
    role: "Cliente",
    text: "Desde o primeiro contato percebi seriedade e organização. Recebi direcionamento claro e seguro para resolver minha situação.",
  },
  {
    name: "Patrícia S.",
    role: "Autônoma",
    text: "Transparência total durante todo o atendimento. Explicações objetivas e acompanhamento constante do meu caso.",
  },
  {
    name: "Eduardo M.",
    role: "Cliente",
    text: "Postura profissional e estratégica. Fiquei muito satisfeito com a condução do processo e com o resultado alcançado.",
  },
],

  faqs: [
    {
      question: "Como funciona a consulta?",
      answer:
        "A consulta pode ser online ou presencial. Você explica o caso, eu analiso e proponho os próximos passos com clareza.",
    },
    {
      question: "Quais documentos preciso enviar?",
      answer:
        "Depende do caso. Após seu primeiro contato, eu listo exatamente o que é necessário para análise.",
    },
  ],

  contact: {
    whatsappNumber,
    email: "contato@example.com",
    addressLine: "Av. Paulista, 123 - São Paulo/SP",
    businessHours: "Seg–Sex, 09:00–18:00",
  },
};