import { SectionHeading } from "@/components/SectionHeading";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/lib/site";

export function InsightsSection() {
  return (
    <section className="bg-cream-50 py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Insights"
          title="Ideas. Trends. Inspiration."
          cta={{ href: "/insights", label: "View All Articles" }}
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, i) => (
            <ArticleCard key={article.slug} article={article} variant={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
