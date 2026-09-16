type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className }: LogoProps) {
  const ink = variant === "dark" ? "#0f1524" : "#faf7f2";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M6 27V16.5L11 13v14" stroke="#c6a057" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 27V11l5-3.2V27" stroke="#c6a057" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 27h32L20 13.5 2.5 27z" stroke={ink} strokeWidth="2" strokeLinejoin="round" />
        <rect x="17" y="20" width="2.4" height="2.4" fill={ink} />
        <rect x="20.6" y="20" width="2.4" height="2.4" fill={ink} />
        <rect x="17" y="23.4" width="2.4" height="2.4" fill={ink} />
        <rect x="20.6" y="23.4" width="2.4" height="2.4" fill={ink} />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg tracking-wide" style={{ color: ink }}>
          <span>V</span>
          <span className="text-[0.6em] align-middle mx-0.5" style={{ color: "#c6a057" }}>
            •
          </span>
          <span style={{ color: "#c6a057" }}>V</span>
        </span>
        <span
          className="text-[8px] font-sans font-semibold tracking-[0.28em] uppercase mt-0.5"
          style={{ color: variant === "dark" ? "#6b6e76" : "#d8b876" }}
        >
          Builders
        </span>
      </span>
    </span>
  );
}
