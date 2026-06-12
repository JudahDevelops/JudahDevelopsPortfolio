"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.2em] mb-8 font-medium label-gradient">
            About
          </p>
          <p className="text-2xl sm:text-3xl text-white/90 leading-relaxed font-light tracking-tight">
            I&apos;m a Computer Science student at{" "}
            <span className="text-white font-medium">
              Nile University of Abuja
            </span>{" "}
            working across sales automation, AI consulting, web development, and
            UI/UX design. Since July 2025 I&apos;ve been building production
            systems at{" "}
            <span className="text-white font-medium">Belsoft Systems</span> —
            shipping dashboards, automation pipelines, and CRM workflows that
            run end to end. I&apos;m 17 and already operating at a professional
            level across the full stack.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
