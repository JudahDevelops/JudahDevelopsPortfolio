"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-36 px-6">
      {/* Floats right of center, not centered */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.2em] mb-8 font-medium label-gradient">
            About
          </p>
          <p className="text-2xl sm:text-3xl text-white/90 leading-relaxed font-light tracking-tight">
            I&apos;m a Computer Science student at{" "}
            <span className="text-white font-medium">
              Nile University of Abuja
            </span>{" "}
            building systems at the intersection of AI, automation, and product
            design.
          </p>
          <p className="text-2xl sm:text-3xl text-white/90 leading-relaxed font-light tracking-tight mt-8">
            Since July 2025, I&apos;ve been working at{" "}
            <span className="text-white font-medium">Belsoft Systems</span>,
            developing production-ready dashboards, automation pipelines, and
            CRM workflows that solve real business problems from end to end.
          </p>
          <p className="text-2xl sm:text-3xl text-white/90 leading-relaxed font-light tracking-tight mt-8">
            My work spans sales automation, AI consulting, full-stack web
            development, and UI/UX design — combining technical execution with
            product thinking to build tools that are functional, scalable, and
            user-focused.
          </p>
          <p className="text-xl sm:text-2xl text-white/60 leading-relaxed font-light tracking-tight mt-8">
            At 17, I&apos;m focused on creating technology that delivers
            measurable impact, not just prototypes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
