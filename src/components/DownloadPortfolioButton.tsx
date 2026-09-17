import { DownloadIcon } from "@/components/icons";

const PORTFOLIO_PDF_HREF = "/downloads/vv-builders-portfolio.pdf";

type Variant = "solid" | "outline-light" | "outline-dark";

const variantClasses: Record<Variant, string> = {
  solid:
    "bg-gold-500 text-navy-950 hover:bg-gold-400",
  "outline-light":
    "border border-cream-50/30 text-cream-50 hover:border-gold-400 hover:bg-gold-400 hover:text-navy-950",
  "outline-dark":
    "border border-ink-900/20 text-ink-900 hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950",
};

export function DownloadPortfolioButton({
  variant = "solid",
  label = "Download Portfolio (PDF)",
  className,
}: {
  variant?: Variant;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={PORTFOLIO_PDF_HREF}
      download
      className={`inline-flex items-center gap-3 text-[11px] sm:text-[12px] tracking-[0.14em] uppercase font-semibold px-6 py-3.5 transition-all duration-300 ${variantClasses[variant]} ${className ?? ""}`}
    >
      <DownloadIcon className="w-4 h-4" />
      {label}
    </a>
  );
}
