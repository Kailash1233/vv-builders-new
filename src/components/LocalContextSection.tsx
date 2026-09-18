import type { Location } from "@/lib/locations";
import { PinIcon } from "@/components/icons";

export function LocalContextSection({ location }: { location: Location }) {
  return (
    <section className="bg-cream-50 py-20 sm:py-24 lg:py-28">
      <div className="container-px max-w-3xl">
        <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-gold-600 mb-4">
          Building in {location.name}
        </p>
        <h2 className="font-display text-[2rem] leading-[1.1] sm:text-4xl text-navy-950 text-balance">
          What to Know Before You Build in {location.name}
        </h2>
        <div className="mt-6 space-y-5">
          {location.context.map((paragraph, i) => (
            <p key={i} className="text-ink-500 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {location.landmarks.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {location.landmarks.map((landmark) => (
              <span
                key={landmark}
                className="inline-flex items-center gap-1.5 text-xs text-ink-500 bg-cream-100 border border-ink-900/10 rounded-full px-3.5 py-2"
              >
                <PinIcon className="w-3.5 h-3.5 text-gold-600" />
                {landmark}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
