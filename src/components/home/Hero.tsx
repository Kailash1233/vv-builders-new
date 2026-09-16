import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { stats } from "@/lib/site";
import { heroImage } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative bg-navy-950 text-cream-50 overflow-hidden grain">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${heroImage}), linear-gradient(160deg, #1c2540 0%, #0a0e18 100%)`,
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
        }}
        role="img"
        aria-label="Modern luxury home built by VV Builders"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/65 to-navy-950/25" />
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-navy-950 via-navy-950/55 to-transparent" />
      </div>

      <div className="relative container-px pt-28 pb-28 sm:pt-32 lg:pt-40 lg:pb-40">
        <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-gold-400 mb-6">
          Architecture That Inspires
        </p>
        <h1 className="font-display text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-[4.2rem] max-w-3xl text-balance">
          We Build <em className="not-italic text-gold-400">Timeless</em> Spaces.
          <br className="hidden sm:block" /> Built Around You.
        </h1>
        <p className="mt-6 max-w-md text-cream-100/80 text-[15px] leading-relaxed">
          From concept to completion, we craft extraordinary spaces that elevate living and
          stand the test of time.
        </p>
        <Link
          href="/projects"
          className="mt-10 inline-flex items-center gap-2 bg-gold-500 text-navy-950 text-[12px] tracking-[0.16em] uppercase font-semibold px-7 py-4 hover:bg-gold-400 transition-colors"
        >
          Explore Our Work
          <ArrowIcon className="w-4 h-4" />
        </Link>
      </div>

      <div className="relative container-px pb-14 lg:pb-0 lg:absolute lg:-bottom-14 lg:left-0 lg:right-0">
        <div className="mx-auto max-w-5xl bg-navy-900/95 border border-white/10 backdrop-blur rounded-2xl grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center py-7 px-4">
              <span className="font-display text-3xl sm:text-4xl text-gold-400">{stat.value}</span>
              <span className="mt-2 text-[11px] sm:text-xs uppercase tracking-wide text-cream-100/70">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
