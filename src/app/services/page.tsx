import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PageHero } from "@/components/PageHero";
import { CheckIcon, ArrowIcon, serviceIcons } from "@/components/icons";
import { services, site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { serviceImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore V.V Builders' end-to-end services: architecture, residential construction, renovation and home extensions, interiors, and project management under one design-build studio.",
  alternates: { canonical: "/services" },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, index) => ({
    "@type": "Service",
    position: index + 1,
    name: service.name,
    description: service.description,
    provider: { "@id": `${site.url}/#organization` },
    url: `${site.url}/services#${service.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <Script
        id="services-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Script
        id="services-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow="Our Services"
        title="End-to-End Solutions, Under One Roof"
        description="Integrated expertise across every stage of design and construction — architecture, building, interiors, and management, delivered by one accountable team."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
        ]}
      />

      <section className="bg-cream-50 py-20 sm:py-24 lg:py-32">
        <div className="container-px space-y-20">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            const reversed = index % 2 === 1;
            return (
              <article
                key={service.slug}
                id={service.slug}
                className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24"
              >
                <div className={reversed ? "lg:order-2" : ""}>
                  <span className="w-14 h-14 rounded-full bg-navy-950 text-gold-400 flex items-center justify-center">
                    <Icon className="w-7 h-7" />
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl mt-6 text-balance">
                    {service.name}
                  </h2>
                  <p className="mt-4 text-ink-500 leading-relaxed max-w-xl">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 text-sm">
                        <CheckIcon className="w-4.5 h-4.5 text-gold-600 mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 text-[12px] tracking-[0.14em] uppercase font-semibold border border-ink-900/20 px-6 py-3.5 hover:bg-ink-900 hover:text-cream-50 transition-colors"
                  >
                    Discuss This Service
                    <ArrowIcon className="w-4 h-4" />
                  </Link>
                </div>
                <div
                  className={`relative h-72 lg:h-96 rounded-lg overflow-hidden ${
                    reversed ? "lg:order-1" : ""
                  }`}
                  style={{
                    backgroundImage: `url(${serviceImages[service.slug]}), linear-gradient(160deg, #24304f 0%, #0f1524 100%)`,
                    backgroundSize: "cover, cover",
                    backgroundPosition: "center, center",
                  }}
                  role="img"
                  aria-label={service.name}
                >
                  <div className="absolute inset-0 bg-navy-950/25" />
                  <div className="absolute inset-0 grain" />
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
