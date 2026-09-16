import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — Architecture & Construction`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0e18 0%, #161d30 100%)",
          color: "#faf7f2",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
          <svg width="46" height="46" viewBox="0 0 40 40">
            <path d="M8 27V17l4-3v13" stroke="#c6a057" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M14 27V13l4-2.7V27" stroke="#c6a057" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M5 28h30L20 15 5 28z" stroke="#faf7f2" strokeWidth="2.4" strokeLinejoin="round" fill="none" />
          </svg>
          <div style={{ display: "flex", fontSize: 34, letterSpacing: 2 }}>
            <span>V</span>
            <span style={{ color: "#c6a057", margin: "0 4px" }}>•</span>
            <span style={{ color: "#c6a057" }}>V</span>
            <span style={{ marginLeft: 14, fontSize: 20, opacity: 0.7, alignSelf: "center" }}>
              BUILDERS
            </span>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 62, lineHeight: 1.15, maxWidth: 900 }}>
          We Build Timeless Spaces. Built Around You.
        </div>
        <div style={{ display: "flex", fontSize: 26, opacity: 0.75, marginTop: 28, fontFamily: "sans-serif" }}>
          Architecture · Construction · Interiors
        </div>
      </div>
    ),
    { ...size }
  );
}
