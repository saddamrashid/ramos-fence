import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { siteConfig } from "@/config/site.config";
import { hexToRgbChannels } from "@/lib/theme";
import "./globals.css";

// NOTE: next/font requires static imports, so if you swap fonts when cloning
// this template, update the two imports below to match your new
// `theme.fontDisplay` / `theme.fontBody` choices in site.config.ts.
const fontDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700"],
  display: "swap",
});

const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const { seo, company } = siteConfig;

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.defaultTitle,
    template: seo.titleTemplate,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: seo.locale,
    url: seo.siteUrl,
    siteName: company.name,
    title: seo.defaultTitle,
    description: seo.description,
    images: [{ url: seo.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const t = siteConfig.theme;

  // Local business structured data helps the page surface correctly in
  // Google's local search / map results.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    image: seo.ogImage,
    telephone: company.phone,
    email: company.email,
    areaServed: company.serviceRegion,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.serviceRegion,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: company.googleRating,
      reviewCount: company.googleReviewCount,
    },
    url: seo.siteUrl,
  };

  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <head>
        {/*
          Theme tokens generated from src/config/site.config.ts.
          Values are "R G B" channel triples (not hex) so that Tailwind's
          color-opacity modifiers, e.g. `bg-primary/20`, work correctly —
          see tailwind.config.ts and src/lib/theme.ts for how this is used.
        */}
        <style
          dangerouslySetInnerHTML={{
            __html: `:root{
              --color-primary:${hexToRgbChannels(t.primary)};
              --color-primary-light:${hexToRgbChannels(t.primaryLight)};
              --color-primary-dark:${hexToRgbChannels(t.primaryDark)};
              --color-accent:${hexToRgbChannels(t.accent)};
              --color-accent-light:${hexToRgbChannels(t.accentLight)};
              --color-accent-dark:${hexToRgbChannels(t.accentDark)};
              --color-surface:${hexToRgbChannels(t.surface)};
              --color-surface-alt:${hexToRgbChannels(t.surfaceAlt)};
              --color-ink:${hexToRgbChannels(t.ink)};
              --color-ink-soft:${hexToRgbChannels(t.inkSoft)};
              --color-ink-muted:${hexToRgbChannels(t.inkMuted)};
            }`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
