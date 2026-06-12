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
          <p className="text-xs uppercase tracking-[0.2em] text-[#00D4FF] mb-8 font-medium">
            About
          </p>
          <p className="text-2xl sm:text-3xl text-white/90 leading-relaxed font-light tracking-tight">
            I&apos;m a Computer Science student at{" "}
            <span className="text-white font-medium">
              Nile University of Abuja
            </span>
            . I build automation pipelines and web applications — currently
            specializing in sales automation and AI-powered outreach systems.
            At 16, I&apos;ve shipped production n8n workflows that run lead
            enrichment, CRM sync, and cold email campaigns end to end.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
