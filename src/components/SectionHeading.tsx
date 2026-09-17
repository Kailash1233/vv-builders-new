import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  cta?: { href: string; label: string };
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  tone = "dark",
  cta,
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const eyebrowColor = tone === "dark" ? "text-gold-600" : "text-gold-400";
  const titleColor = tone === "dark" ? "text-ink-900" : "text-cream-50";

  return (
    <div className={`${isCenter ? "text-center mx-auto max-w-2xl" : ""} ${className ?? ""}`}>
      <p
        className={`text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase mb-4 ${eyebrowColor}`}
      >
        {eyebrow}
      </p>
      <h2 className={`font-display text-[2.25rem] leading-[1.08] sm:text-5xl lg:text-[3.1rem] text-balance ${titleColor}`}>
        {title}
      </h2>
      {cta && (
        <Link
          href={cta.href}
          className={`mt-7 inline-flex items-center gap-7 text-[11px] tracking-[0.14em] uppercase font-semibold border px-6 py-3.5 transition-all duration-300 ${
            tone === "dark"
              ? "border-ink-900/20 text-ink-900 hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950"
              : "border-cream-50/25 text-cream-50 hover:border-gold-400 hover:bg-gold-400 hover:text-navy-950"
          }`}
        >
          {cta.label}
          <ArrowIcon className="w-3.5 h-3.5" />
        </Link>
      )}
    </div>
  );
}
