import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { site } from "@/lib/site";
import { secondaryLocations } from "@/lib/locations";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Architecture & Construction`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "V.V Builders",
    "best construction company in Chennai",
    "construction company in Tambaram",
    "builders in Padappai",
    "villa construction Chennai",
    "home renovation Chennai",
    "commercial construction Chennai",
    "home extension contractor Chennai",
    "residential builders Chromepet Pallavaram",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | We Build Timeless Spaces`,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | We Build Timeless Spaces`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e18",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  image: `${site.url}/opengraph-image`,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  foundingDate: site.founded,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    ...(site.address.postal ? { postalCode: site.address.postal } : {}),
    addressCountry: "IN",
  },
  sameAs: [
    site.social.facebook,
    site.social.instagram,
    site.social.youtube,
    `https://wa.me/${site.whatsappNumber}`,
  ].filter(Boolean),
  areaServed: [
    "Chennai",
    ...secondaryLocations.map((location) => location.name),
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="antialiased bg-cream-50 text-ink-900">
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-navy-950 focus:text-cream-50 focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
