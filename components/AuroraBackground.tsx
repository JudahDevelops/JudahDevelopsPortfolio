"use client";

export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="aurora-layer"
    >
      {/* Blob 1 — cyan, drifts top-left → center */}
      <div className="aurora-blob aurora-blob-1" />
      {/* Blob 2 — violet, drifts center-right */}
      <div className="aurora-blob aurora-blob-2" />
      {/* Blob 3 — magenta, drifts bottom-right */}
      <div className="aurora-blob aurora-blob-3" />
      {/* Blob 4 — blue-purple mix, upper-right */}
      <div className="aurora-blob aurora-blob-4" />
      {/* Blob 5 — deep magenta, lower-left */}
      <div className="aurora-blob aurora-blob-5" />
    </div>
  );
}
