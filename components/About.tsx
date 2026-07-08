"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function About() {
  return (
    <section id="about" className="py-32 px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          <p className="text-xs uppercase tracking-[0.2em] mb-8 font-medium text-[#22C55E]">
            About
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl text-[#CBD5E1] leading-relaxed font-light tracking-[-0.02em]">
            I&apos;m a Computer Science student at{" "}
            <span className="text-[#F8FAFC] font-medium">
              Nile University of Abuja
            </span>{" "}
            building systems at the intersection of AI, automation, and product
            design.
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl text-[#CBD5E1] leading-relaxed font-light tracking-[-0.02em] mt-8">
            Since July 2025, I&apos;ve been working at{" "}
            <span className="text-[#F8FAFC] font-medium">Belsoft Systems</span>,
            developing production-ready dashboards, automation pipelines, and
            CRM workflows that solve real business problems from end to end.
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl text-[#CBD5E1] leading-relaxed font-light tracking-[-0.02em] mt-8">
            My work spans sales automation, AI consulting, full-stack web
            development, and UI/UX design — combining technical execution with
            product thinking to build tools that are functional, scalable, and
            user-focused.
          </p>
          <p className="text-xl sm:text-2xl text-[#64748B] leading-relaxed font-light tracking-[-0.02em] mt-8">
            At 17, I&apos;m focused on creating technology that delivers
            measurable impact, not just prototypes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
