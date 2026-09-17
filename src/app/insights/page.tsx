import type { Metadata } from "next";
import Script from "next/script";
import { PageHero } from "@/components/PageHero";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Ideas, trends, and inspiration from VV Builders — sustainable architecture, adaptive residential design, and the materials shaping the future of construction.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <Script
        id="insights-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Insights", path: "/insights" },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow="Insights"
        title="Ideas. Trends. Inspiration."
        description="Perspectives from our architects, builders, and project managers on the ideas shaping the future of design and construction."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/insights", label: "Insights" },
        ]}
      />

      <section className="bg-cream-50 py-20 sm:py-24 lg:py-32">
        <div className="container-px grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, i) => (
            <ArticleCard key={article.slug} article={article} variant={i} />
          ))}
        </div>
      </section>
    </>
  );
}
