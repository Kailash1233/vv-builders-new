import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { stats } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative bg-navy-950 text-cream-50 overflow-hidden grain">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-0 h-full w-[70%] opacity-90">
          <svg viewBox="0 0 500 700" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <linearGradient id="heroSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1c2540" />
                <stop offset="100%" stopColor="#0a0e18" />
              </linearGradient>
            </defs>
            <rect width="500" height="700" fill="url(#heroSky)" />
            <g stroke="#c6a057" strokeWidth="1" fill="none" opacity="0.85">
              <rect x="60" y="360" width="90" height="260" />
              <rect x="165" y="260" width="70" height="360" />
              <rect x="250" y="420" width="110" height="200" />
              <rect x="375" y="180" width="80" height="440" />
              <line x1="0" y1="620" x2="500" y2="620" />
            </g>
            <g stroke="#e8d2a2" strokeWidth="0.4" opacity="0.5">
              {Array.from({ length: 12 }).map((_, i) => (
                <line key={`a-${i}`} x1="65" y1={370 + i * 20} x2="145" y2={370 + i * 20} />
              ))}
              {Array.from({ length: 16 }).map((_, i) => (
                <line key={`b-${i}`} x1="170" y1={270 + i * 20} x2="230" y2={270 + i * 20} />
              ))}
              {Array.from({ length: 9 }).map((_, i) => (
                <line key={`c-${i}`} x1="255" y1={430 + i * 20} x2="355" y2={430 + i * 20} />
              ))}
              {Array.from({ length: 21 }).map((_, i) => (
                <line key={`d-${i}`} x1="380" y1={190 + i * 20} x2="450" y2={190 + i * 20} />
              ))}
            </g>
            <circle cx="410" cy="120" r="46" fill="#c6a057" opacity="0.15" />
            <circle cx="410" cy="120" r="30" fill="#c6a057" opacity="0.2" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/70 to-transparent" />
      </div>

      <div className="relative container-px pt-14 pb-28 lg:pt-20 lg:pb-40">
        <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-gold-400 mb-6">
          Architecture That Inspires
        </p>
        <h1 className="font-display text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-[4.2rem] max-w-3xl text-balance">
          We Build <em className="not-italic text-gold-400">Timeless</em> Spaces.
          <br className="hidden sm:block" /> Built Around You.
        </h1>
        <p className="mt-6 max-w-md text-cream-100/75 text-[15px] leading-relaxed">
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
