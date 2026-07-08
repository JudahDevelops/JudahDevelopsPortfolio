"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(34,197,94,0.1)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute top-[-100px] right-[-200px] w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(30,41,59,0.5)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#334155] bg-[#1E293B]/50 backdrop-blur-sm mb-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease }}
        >
          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
          <span className="text-xs font-medium text-[#94A3B8] tracking-wide">
            Available for contract work
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold tracking-[-0.04em] leading-[0.9] mb-8 text-[#F8FAFC]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
        >
          Judah Oka
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-[#94A3B8] font-normal mb-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5, ease }}
        >
          Automation systems. AI consulting. Web development.
        </motion.p>

        <motion.p
          className="text-sm text-[#64748B] mb-14 tracking-wide font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          n8n · HubSpot · Apollo.io · Instantly.ai · React · UI/UX
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease }}
        >
          <a
            href="#automation"
            className="btn-primary px-10 py-4 rounded-lg text-sm font-semibold tracking-wide inline-block"
          >
            View Projects
          </a>
          <a
            href="https://github.com/JudahDevelops"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost px-10 py-4 rounded-lg text-sm font-semibold tracking-wide inline-block"
          >
            GitHub
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent pointer-events-none" />
    </section>
  );
}
