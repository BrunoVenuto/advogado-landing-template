// src/app/layout.tsx
import type { Metadata } from "next";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const style = {
    ["--brand-primary" as any]: siteConfig.branding.primaryColor,
    ["--brand-accent" as any]: siteConfig.branding.accentColor,
  } as React.CSSProperties;

  return (
    <html lang="pt-BR">
      <body style={style}>{children}</body>
    </html>
  );
}