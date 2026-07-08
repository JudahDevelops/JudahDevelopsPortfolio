"use client";

import { motion } from "framer-motion";
import ProjectCard, { type Project } from "./ProjectCard";

const GraduationCapIcon = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

const BarChartIcon = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="3" y="12" width="4" height="9" rx="1" />
    <rect x="10" y="7" width="4" height="14" rx="1" />
    <rect x="17" y="3" width="4" height="18" rx="1" />
    <line x1="2" y1="21" x2="22" y2="21" />
  </svg>
);

const projects: Project[] = [
  {
    title: "Academic Planner",
    description:
      "Smart assignment tracker and academic calendar built for students to manage deadlines, workload, and schedules. Full React/TypeScript app with persistent state and a clean, usable UI.",
    stack: ["React", "TypeScript", "HTML/CSS"],
    github: "https://github.com/JudahDevelops/academic-planner",
    placeholderIcon: GraduationCapIcon,
  },
  {
    title: "Data Visualizations",
    description:
      "A suite of interactive data viz projects — choropleth map, heat map, scatterplot graph, and GDP bar chart — each built to D3 specification with correct axes, tooltips, and responsive layout.",
    stack: ["D3.js", "JavaScript", "SVG", "HTML/CSS"],
    github: "https://github.com/JudahDevelops/chloropleth-map",
    placeholderIcon: BarChartIcon,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function WebProjects() {
  return (
    <section id="web" className="py-36 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] mb-4 font-medium label-gradient">
            Web Development
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Apps & Interfaces
          </h2>
          <p className="text-[#888888] mt-4 text-lg max-w-2xl">
            React applications, TypeScript projects, and data visualizations
            built to production standards.
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
