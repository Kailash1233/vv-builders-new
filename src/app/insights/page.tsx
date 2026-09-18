import type { Metadata } from "next";
import Script from "next/script";
import { PageHero } from "@/components/PageHero";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical, Chennai-specific guidance on construction costs, approvals, monsoon-proofing, and renovation decisions — written for homeowners building across South Chennai.",
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
        title="Straight Answers for Chennai Homeowners"
        description="What construction actually costs, which approval applies to your plot, how to build for the monsoon, and what to ask before you hire a builder."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/insights", label: "Insights" },
        ]}
        bgImage="/vv4.jpg"
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
