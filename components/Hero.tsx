"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleViewProjects = () => {
    const el = document.getElementById("automation");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">

      {/* ── Dot grid ─────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, #2A2A2A 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <motion.p
          className="text-sm uppercase tracking-[0.25em] mb-6 font-medium label-gradient"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          Sales Automation · Web Development · AI Consulting
        </motion.p>

        <motion.h1
          className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight leading-none mb-8 gradient-text"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        >
          Judah Oka
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-white/90 font-medium mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          Automation systems. AI consulting. Web development.
        </motion.p>

        <motion.p
          className="text-base sm:text-lg text-[#888888] mb-12 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          n8n · HubSpot · Instantly.ai · React · UI/UX
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
        >
          <button
            onClick={handleViewProjects}
            className="btn-gradient px-8 py-3.5 font-semibold rounded text-sm uppercase tracking-wider cursor-pointer"
          >
            View Projects
          </button>
          <a
            href="https://github.com/JudahDevelops"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-border px-8 py-3.5 border border-[#2A2A2A] text-white font-semibold rounded text-sm uppercase tracking-wider hover:text-white transition-colors duration-200"
          >
            GitHub
          </a>
        </motion.div>
      </div>

    </section>
  );
}
