"use client";

import { motion } from "framer-motion";
import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Admin Dashboard",
    description:
      "Full-featured admin dashboard for the Belsoft platform. Collapsible sidebar with role-based navigation, job oversight panel with search and filters, account management table with activation controls, revenue chart built with Recharts, performance metrics with circular progress indicators, and full mobile responsiveness.",
    stack: ["React", "TypeScript", "Vite", "Recharts", "Hero Icons"],
    github: "https://github.com/JudahDevelops/belsoftLandingPage",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function BelsoftProjects() {
  return (
    <section id="belsoft" className="py-24 px-6 bg-[#0A0A0A] border-t border-[#1F1F1F]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#00D4FF] mb-4 font-medium">
            Client Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Belsoft Systems
          </h2>
          <p className="text-[#888888] mt-4 text-lg max-w-2xl">
            Projects built during my time as a developer at Belsoft Limited —
            shipped to production, not tutorials.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
