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
        className={`text-[11px] font-semibold tracking-[0.24em] uppercase mb-3 ${eyebrowColor}`}
      >
        {eyebrow}
      </p>
      <h2 className={`font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] text-balance ${titleColor}`}>
        {title}
      </h2>
      {cta && (
        <Link
          href={cta.href}
          className={`mt-6 inline-flex items-center gap-2 text-[12px] tracking-[0.14em] uppercase font-semibold border px-5 py-3 transition-colors ${
            tone === "dark"
              ? "border-ink-900/20 text-ink-900 hover:bg-ink-900 hover:text-cream-50"
              : "border-cream-50/25 text-cream-50 hover:bg-cream-50 hover:text-navy-950"
          }`}
        >
          {cta.label}
          <ArrowIcon className="w-3.5 h-3.5" />
        </Link>
      )}
    </div>
  );
}
