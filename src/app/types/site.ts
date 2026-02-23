// src/types/site.ts

export type SocialLinks = {
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  facebook?: string;
  tiktok?: string;
};

export type PracticeArea = {
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  role?: string;
  text: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type CTA = {
  primary: {
    label: string;
    href: string; // ex: link do WhatsApp
  };
  secondary?: {
    label: string;
    href: string;
  };
};

export type Branding = {
  logoText: string; // mais simples pra template (pode evoluir pra logo imagem depois)
  primaryColor: string; // ex: "#0F172A"
  accentColor: string; // ex: "#C9A227"
};

export type LawyerProfile = {
  name: string;
  oab?: string;
  city: string;
  headline: string;
  bio: string;
  photo: {
    src: string;
    alt: string;
  };
};

export type StatItem = {
  label: string;
  value: string;
};

export type SiteConfig = {
  meta: {
    title: string;
    description: string;
    ogImage?: string;
    domain?: string;
  };
  branding: Branding;
  profile: LawyerProfile;
  cta: CTA;
  socials?: SocialLinks;
  stats?: StatItem[];
  practiceAreas: PracticeArea[];
  testimonials?: Testimonial[];
  faqs?: FAQItem[];
  contact: {
    whatsappNumber: string; // somente números, ex: "5511999999999"
    email?: string;
    addressLine?: string;
    businessHours?: string;
  };
};