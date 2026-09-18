import Link from "next/link";
import { locations } from "@/lib/locations";
import { ArrowIcon } from "@/components/icons";

export function OtherAreasSection({ currentSlug }: { currentSlug: string }) {
  const others = locations.filter((l) => l.slug !== currentSlug);

  return (
    <section className="bg-cream-100 py-20 sm:py-24 lg:py-28">
      <div className="container-px">
        <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-gold-600 mb-4">
          Also Serving
        </p>
        <h2 className="font-display text-2xl sm:text-3xl text-navy-950 max-w-lg">
          Other Areas We Build In Across Chennai
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          {others.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="inline-flex items-center gap-2 text-sm text-ink-700 bg-cream-50 border border-ink-900/10 rounded-full px-4 py-2.5 hover:border-gold-500 hover:text-gold-700 transition-colors"
            >
              {location.isPrimary ? `${location.name} (All Areas)` : location.name}
              <ArrowIcon className="w-3.5 h-3.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
