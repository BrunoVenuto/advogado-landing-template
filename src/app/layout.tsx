// src/app/layout.tsx
import type { Metadata } from "next";
import type React from "react";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  openGraph: siteConfig.meta.ogImage
    ? {
        title: siteConfig.meta.title,
        description: siteConfig.meta.description,
        images: [siteConfig.meta.ogImage],
      }
    : undefined,
};

type BrandCSSVars = {
  "--brand-primary": string;
  "--brand-accent": string;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const style: React.CSSProperties & BrandCSSVars = {
    "--brand-primary": siteConfig.branding.primaryColor,
    "--brand-accent": siteConfig.branding.accentColor,
  };

  return (
    <html lang="pt-BR">
      <body style={style}>{children}</body>
    </html>
  );
}