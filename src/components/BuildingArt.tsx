const palettes = [
  "linear-gradient(160deg, #1c2540 0%, #0a0e18 100%)",
  "linear-gradient(160deg, #24304f 0%, #0f1524 100%)",
  "linear-gradient(160deg, #182036 0%, #0a0e18 100%)",
  "linear-gradient(160deg, #2a3454 0%, #12182a 100%)",
];

export function BuildingArt({
  variant = 0,
  photo,
  alt = "",
  className,
}: {
  variant?: number;
  photo: string;
  alt?: string;
  className?: string;
}) {
  const fallback = palettes[variant % palettes.length];

  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
      style={{
        backgroundImage: `url(${photo}), ${fallback}`,
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
      }}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0 grain" />
    </div>
  );
}
