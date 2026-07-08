"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">

      {/* ── Dot grid ─────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(circle, #2A2A2A 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <motion.p
          className="text-xs uppercase tracking-[0.25em] mb-6 font-medium text-[#888888]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Sales Automation · Web Development · AI Consulting
        </motion.p>

        <motion.h1
          className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-bold tracking-[-0.04em] leading-none mb-8 gradient-text"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Judah Oka
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-white/60 font-normal mb-4 tracking-tight"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Automation systems. AI consulting. Web development.
        </motion.p>

        <motion.p
          className="text-base sm:text-lg text-[#888888] mb-12 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.45 }}
        >
          n8n · HubSpot · Apollo.io · Instantly.ai · React · UI/UX
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <a
            href="#automation"
            className="btn-gradient px-10 py-4 font-semibold rounded text-sm uppercase tracking-wider cursor-pointer inline-block"
          >
            View Projects
          </a>
          <a
            href="https://github.com/JudahDevelops"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-border px-10 py-4 border border-[#2A2A2A] text-white font-semibold rounded text-sm uppercase tracking-wider hover:text-white transition-colors duration-200"
          >
            GitHub
          </a>
        </motion.div>
      </div>

    </section>
  );
}
