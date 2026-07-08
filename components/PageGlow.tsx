"use client";

export default function PageGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div
        className="ambient-blob"
        style={{
          width: "800px",
          height: "500px",
          top: "-200px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "ambient-drift-2 20s ease-in-out infinite, ambient-pulse 8s ease-in-out infinite",
        }}
      />

      <div
        className="ambient-blob"
        style={{
          width: "600px",
          height: "600px",
          top: "15%",
          right: "-100px",
          background: "radial-gradient(circle, rgba(30,41,59,0.5) 0%, transparent 65%)",
          filter: "blur(70px)",
          animation: "ambient-drift-1 25s ease-in-out infinite, ambient-pulse 10s ease-in-out infinite",
        }}
      />

      <div
        className="ambient-blob"
        style={{
          width: "500px",
          height: "500px",
          top: "35%",
          left: "-80px",
          background: "radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "ambient-drift-3 30s ease-in-out infinite, ambient-pulse 7s ease-in-out infinite",
          animationDelay: "-5s, -2s",
        }}
      />

      <div
        className="ambient-blob"
        style={{
          width: "700px",
          height: "700px",
          top: "55%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(51,65,85,0.25) 0%, transparent 65%)",
          filter: "blur(80px)",
          animation: "ambient-drift-2 28s ease-in-out infinite, ambient-pulse 9s ease-in-out infinite",
          animationDelay: "-8s, -3s",
        }}
      />

      <div
        className="ambient-blob"
        style={{
          width: "450px",
          height: "450px",
          top: "75%",
          right: "-60px",
          background: "radial-gradient(circle, rgba(34,197,94,0.04) 0%, transparent 70%)",
          filter: "blur(70px)",
          animation: "ambient-drift-1 22s ease-in-out infinite, ambient-pulse 6s ease-in-out infinite",
          animationDelay: "-10s, -1s",
        }}
      />

      <div
        className="ambient-blob"
        style={{
          width: "550px",
          height: "550px",
          top: "90%",
          left: "-60px",
          background: "radial-gradient(circle, rgba(30,41,59,0.35) 0%, transparent 65%)",
          filter: "blur(70px)",
          animation: "ambient-drift-3 26s ease-in-out infinite, ambient-pulse 8s ease-in-out infinite",
          animationDelay: "-4s, -2s",
        }}
      />
    </div>
  );
}
