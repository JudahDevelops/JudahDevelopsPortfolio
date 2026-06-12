"use client";

export default function HeroGlow() {
  return (
    <>
      {/* SVG grain filter — referenced by the texture overlay */}
      <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
        <defs>
          <filter id="hero-grain" x="0" y="0" width="100%" height="100%"
                  colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.72"
                          numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
      </svg>

      {/* Glow pool container — clips blobs, sits above page bg */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 overflow-hidden"
        style={{ height: "520px" }}
      >
        {/* ── Blob 1: Deep blue — primary, widest, centered ── */}
        <div
          className="hero-glow-blob hero-glow-blue"
        />

        {/* ── Blob 2: Cyan — offset right, tighter ── */}
        <div
          className="hero-glow-blob hero-glow-cyan"
        />

        {/* ── Blob 3: Violet/magenta — offset left ── */}
        <div
          className="hero-glow-blob hero-glow-violet"
        />

        {/* ── Grain texture overlay — breaks up banding, adds depth ── */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{ background: "white", filter: "url(#hero-grain)" }}
        />
      </div>
    </>
  );
}
