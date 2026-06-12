"use client";

import { motion } from "framer-motion";
import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Academic Planner",
    description:
      "Smart assignment tracker and academic calendar built for students to manage deadlines, workload, and schedules. Full React/TypeScript app with persistent state and a clean, usable UI.",
    stack: ["React", "TypeScript", "HTML/CSS"],
    github: "https://github.com/JudahDevelops/academic-planner",
  },
  {
    title: "Data Visualizations",
    description:
      "A suite of interactive data viz projects — choropleth map, heat map, scatterplot graph, and GDP bar chart — each built to freeCodeCamp's full D3 specification with correct axes, tooltips, and responsive layout.",
    stack: ["D3.js", "JavaScript", "SVG", "HTML/CSS"],
    github: "https://github.com/JudahDevelops/chloropleth-map",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function WebProjects() {
  return (
    <section id="web" className="py-24 px-6 bg-[#0A0A0A] border-t border-[#1F1F1F]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#00D4FF] mb-4 font-medium">
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
