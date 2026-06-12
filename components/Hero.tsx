"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleViewProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1F1F1F 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Radial glow at center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,212,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.p
            className="text-sm uppercase tracking-[0.25em] text-[#00D4FF] mb-6 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Sales Automation · Web Development
          </motion.p>

          <motion.h1
            className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight text-white leading-none mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Judah
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-white/90 font-medium mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            I build outbound systems that run themselves.
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-[#888888] mb-12 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            n8n · HubSpot · Instantly.ai · AI-powered outreach
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            <button
              onClick={handleViewProjects}
              className="px-8 py-3.5 bg-[#00D4FF] text-[#0A0A0A] font-semibold rounded text-sm uppercase tracking-wider hover:bg-[#00b8d9] transition-colors duration-200 cursor-pointer"
            >
              View Projects
            </button>
            <a
              href="https://github.com/JudahDevelops"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-[#1F1F1F] text-white font-semibold rounded text-sm uppercase tracking-wider hover:border-[#00D4FF] hover:text-[#00D4FF] transition-colors duration-200"
            >
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0A0A0A)",
        }}
      />
    </section>
  );
}
