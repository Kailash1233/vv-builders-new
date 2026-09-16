import Link from "next/link";
import { ArrowIcon, statIcons } from "@/components/icons";
import { stats } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative bg-navy-950 text-cream-50">
      {/* Background */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          backgroundImage:
            "url(/bg-hero.png), linear-gradient(160deg, #1c2540 0%, #0a0e18 100%)",
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
        }}
        role="img"
        aria-label="Modern luxury home built by VV Builders"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/20" />

        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-navy-950 via-navy-950/60 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative container-px pt-28 pb-28 sm:pt-32 lg:pt-40 lg:pb-44">
        <div className="flex items-stretch gap-6 lg:gap-10">
          {/* Side Indicator */}
          <div className="hidden lg:flex flex-col items-center pt-2 pb-6 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />

            <span className="flex-1 w-px bg-gold-400/40 my-3" />

            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          </div>

          {/* Content */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-gold-400 mb-6">
              Architecture That Inspires
            </p>

            <h1 className="font-display text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-[4.2rem] max-w-3xl text-balance">
              We Build <em className="not-italic text-gold-400">Timeless</em>{" "}
              Spaces.
              <br className="hidden sm:block" /> Built Around You.
            </h1>

            <p className="mt-6 max-w-md text-cream-100/80 text-[15px] leading-relaxed">
              From concept to completion, we craft extraordinary spaces that
              elevate living and stand the test of time.
            </p>

            <Link
              href="/projects"
              className="mt-10 inline-flex items-center gap-2 bg-gold-500 text-navy-950 text-[12px] tracking-[0.16em] uppercase font-semibold px-7 py-4 hover:bg-gold-400 transition-colors"
            >
              Explore Our Work
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-20 container-px pb-14 lg:pb-0 lg:absolute lg:-bottom-14 lg:left-0 lg:right-0">
        <div className="mx-auto max-w-5xl bg-navy-950/90 border border-white/10 backdrop-blur rounded-2xl grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-white/10">
          {stats.map((stat) => {
            const Icon = statIcons[stat.icon];

            return (
              <div
                key={stat.label}
                className="flex items-center justify-center gap-3 py-7 px-4"
              >
                <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-gold-400 shrink-0" />

                <div className="flex flex-col">
                  <span className="font-display text-2xl sm:text-3xl lg:text-4xl text-gold-400 leading-none">
                    {stat.value}
                  </span>

                  <span className="mt-1.5 text-[10px] sm:text-xs uppercase tracking-wide text-cream-100/70">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
