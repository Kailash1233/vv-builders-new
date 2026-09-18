import Link from "next/link";

type Crumb = { href: string; label: string };

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  bgImage,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbs: Crumb[];
  bgImage?: string;
}) {
  return (
    <section className="relative bg-navy-950 text-cream-50 overflow-hidden grain">
      {bgImage && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label=""
        >
          <div className="absolute inset-0 bg-navy-950/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/50" />
        </div>
      )}
      {!bgImage && (
        <div className="pointer-events-none absolute -right-16 -top-16 w-72 h-72 rounded-full bg-gold-500/10 blur-3xl" />
      )}
      <div className="relative container-px pt-32 pb-20 lg:pt-40 lg:pb-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-cream-100/55 uppercase tracking-wide">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.href} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-gold-400">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-cream-50">
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <p className="mt-8 text-[11px] font-semibold tracking-[0.28em] uppercase text-gold-400">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-cream-100/70 text-[15px] leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
