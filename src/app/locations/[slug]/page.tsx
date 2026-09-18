import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { LocationHero } from "@/components/home/LocationHero";
import { LocalContextSection } from "@/components/LocalContextSection";
import { OtherAreasSection } from "@/components/OtherAreasSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CtaBand } from "@/components/home/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { locations, getLocation } from "@/lib/locations";
import { site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: `/locations/${location.slug}` },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Construction Services in ${location.name}`,
    description: location.metaDescription,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "Place", name: `${location.name}, Chennai, Tamil Nadu` },
    url: `${site.url}/locations/${location.slug}`,
  };

  return (
    <>
      <Script
        id="location-service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="location-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: location.name, path: `/locations/${location.slug}` },
            ])
          ),
        }}
      />

      <LocationHero eyebrow={`Construction Company · ${location.name}`} title={location.h1} description={location.intro} />

      <LocalContextSection location={location} />
      <FeaturedProjects />
      <ServicesSection />
      <ProcessSection />
      <OtherAreasSection currentSlug={location.slug} />
      <CtaBand />
      <FaqSection title={`Frequently Asked Questions — ${location.name}`} />
    </>
  );
}
