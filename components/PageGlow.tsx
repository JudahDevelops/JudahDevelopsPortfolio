"use client";

// Single unified glow layer — position: absolute inside the page wrapper so
// all blobs scroll with the content and naturally blend into each other.
// Hero pool sits at the top; aurora blobs are distributed down the page.
export default function PageGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* ── Hero pool — top of page ────────────────────────────────────────── */}
      <div className="page-glow-blob hero-glow-blue" />
      <div className="page-glow-blob hero-glow-cyan" />
      <div className="page-glow-blob hero-glow-violet" />

      {/* ── Aurora blobs — distributed down the page ─────────────────────── */}
      <div className="page-glow-blob aurora-blob-1" />
      <div className="page-glow-blob aurora-blob-2" />
      <div className="page-glow-blob aurora-blob-3" />
      <div className="page-glow-blob aurora-blob-4" />
      <div className="page-glow-blob aurora-blob-5" />
      <div className="page-glow-blob aurora-blob-6" />
      <div className="page-glow-blob aurora-blob-7" />
      <div className="page-glow-blob aurora-blob-8" />
      <div className="page-glow-blob aurora-blob-9" />
      <div className="page-glow-blob aurora-blob-10" />
      <div className="page-glow-blob aurora-blob-11" />
      <div className="page-glow-blob aurora-blob-12" />
    </div>
  );
}
