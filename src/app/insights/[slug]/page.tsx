import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { BuildingArt } from "@/components/BuildingArt";
import { ArticleCard } from "@/components/ArticleCard";
import { ArrowIcon } from "@/components/icons";
import { articles, site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      title: `${article.title} | ${site.name}`,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const variant = articles.findIndex((a) => a.slug === article.slug);
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);
  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: `${site.url}/insights/${article.slug}`,
    articleSection: article.category,
  };

  return (
    <>
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Script
        id="article-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Insights", path: "/insights" },
              { name: article.title, path: `/insights/${article.slug}` },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={`${formattedDate} · ${article.readTime}`}
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/insights", label: "Insights" },
          { href: `/insights/${article.slug}`, label: article.title },
        ]}
      />

      <article className="bg-cream-50 py-20">
        <div className="container-px max-w-3xl mx-auto">
          <BuildingArt variant={variant} className="h-72 sm:h-96 rounded-lg mb-12" />
          <div className="prose-content space-y-6 text-ink-700 leading-relaxed text-[17px]">
            {article.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-ink-900/10 flex items-center justify-between">
            <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
              <ArrowIcon className="w-4 h-4 rotate-180" />
              All Insights
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy-950 text-cream-50 text-[12px] tracking-[0.14em] uppercase font-semibold px-6 py-3.5 hover:bg-navy-800 transition-colors"
            >
              Talk to Our Team
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-cream-100 py-20">
          <div className="container-px">
            <h2 className="font-display text-2xl sm:text-3xl mb-10">Related Insights</h2>
            <div className="grid sm:grid-cols-2 gap-10 max-w-3xl">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} variant={articles.findIndex((x) => x.slug === a.slug)} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
