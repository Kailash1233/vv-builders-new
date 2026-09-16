import Link from "next/link";
import { BuildingArt } from "@/components/BuildingArt";
import { ArrowIcon } from "@/components/icons";
import type { Article } from "@/lib/site";

export function ArticleCard({ article, variant = 0 }: { article: Article; variant?: number }) {
  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <Link href={`/insights/${article.slug}`} className="group block">
      <div className="relative h-48 rounded-lg overflow-hidden">
        <BuildingArt variant={variant} className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] bg-navy-950/70 text-gold-300 px-3 py-1.5 rounded-full">
          {article.category}
        </span>
      </div>
      <p className="mt-4 text-xs uppercase tracking-wide text-ink-500">
        {formattedDate} &middot; {article.readTime}
      </p>
      <h3 className="mt-2 font-display text-xl leading-snug group-hover:text-gold-600 transition-colors">
        {article.title}
      </h3>
      <span className="mt-3 inline-flex items-center gap-1.5 text-[12px] uppercase tracking-wide font-semibold text-ink-900">
        Read More
        <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
