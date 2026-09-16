const palettes = [
  { from: "#1c2540", to: "#0a0e18", line: "#c6a057" },
  { from: "#24304f", to: "#0f1524", line: "#d8b876" },
  { from: "#182036", to: "#0a0e18", line: "#c6a057" },
  { from: "#2a3454", to: "#12182a", line: "#e8d2a2" },
];

const skylines = [
  [
    { x: 10, w: 22, h: 60 },
    { x: 36, w: 16, h: 90 },
    { x: 56, w: 26, h: 45 },
    { x: 86, w: 14, h: 75 },
  ],
  [
    { x: 6, w: 18, h: 50 },
    { x: 28, w: 22, h: 85 },
    { x: 54, w: 14, h: 65 },
    { x: 72, w: 24, h: 40 },
  ],
  [
    { x: 12, w: 30, h: 70 },
    { x: 46, w: 14, h: 95 },
    { x: 64, w: 20, h: 55 },
  ],
];

export function BuildingArt({
  variant = 0,
  className,
}: {
  variant?: number;
  className?: string;
}) {
  const palette = palettes[variant % palettes.length];
  const skyline = skylines[variant % skylines.length];

  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
      style={{
        background: `linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <svg
        viewBox="0 0 110 100"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-0 w-full h-full opacity-80"
        aria-hidden="true"
      >
        {skyline.map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={100 - b.h}
            width={b.w}
            height={b.h}
            fill="none"
            stroke={palette.line}
            strokeWidth="0.6"
            opacity={0.7}
          />
        ))}
        {skyline.map((b, i) =>
          Array.from({ length: Math.floor(b.h / 10) }).map((_, r) => (
            <line
              key={`${i}-${r}`}
              x1={b.x + 2}
              x2={b.x + b.w - 2}
              y1={100 - b.h + 6 + r * 10}
              y2={100 - b.h + 6 + r * 10}
              stroke={palette.line}
              strokeWidth="0.3"
              opacity={0.4}
            />
          ))
        )}
        <line x1="0" y1="100" x2="110" y2="100" stroke={palette.line} strokeWidth="0.4" opacity="0.5" />
      </svg>
      <div className="absolute inset-0 grain" />
    </div>
  );
}
