"use client";

import { motion } from "framer-motion";
import ProjectCard, { type Project } from "./ProjectCard";

const BELSOFT_LOGO = "/belsoft-logo.jpg";

// Church/building SVG for TFC fallback
const ChurchIcon = (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M12 2v4M10 4h4" />
    <path d="M4 22V10l8-6 8 6v12H4z" />
    <rect x="9" y="14" width="6" height="8" />
  </svg>
);


const projects: Project[] = [
  {
    title: "Florece\u2019s Place — E-Commerce Store",
    description:
      "Full shopping site for a Nigerian fashion brand selling contemporary African clothing and textiles. Built with Next.js and Sanity CMS, integrated payment processing, SEO optimisation, Instagram integration, and a clean minimal UI with currency toggling (NGN/USD).",
    stack: ["Next.js", "Sanity.io", "Tailwind CSS", "TypeScript", "SEO"],
    liveUrl: "https://www.florecersplace.com/",
    image: "https://www.florecersplace.com/images/hero-1.jpg",
  },
  {
    title: "Cannon Thoughts With IB — Personal Brand Site",
    description:
      "Multi-page personal brand and coaching site for a Nigerian leadership development consultant. Features an impact statistics section, testimonials carousel, programs listing, articles, and a contact form via EmailJS. Built with React, Sanity CMS for content management, and Framer Motion animations.",
    stack: ["React", "Sanity.io", "Tailwind CSS", "Framer Motion", "EmailJS"],
    liveUrl: "https://www.cannonthoughtswithib.com/",
    image: "/cannon-hero.jpg",
  },
  {
    title: "The Father\u2019s Church — Website",
    description:
      "Full website for The Father's Church built with React and Sanity CMS. Features sermon carousels, event listings, a media gallery with lightbox, and a content management system so the church team can update everything without touching code.",
    stack: ["React", "Sanity.io", "Bootstrap 5", "React Router", "JavaScript"],
    github: "https://github.com/BELSOFT-SYSTEMS/tfc_website",
    placeholderIcon: ChurchIcon,
  },
  {
    title: "Admin Dashboard",
    description:
      "Full-featured internal admin dashboard for the Belsoft platform. Collapsible sidebar with role-based navigation, job oversight panel with search and filters, account management table with activation controls, performance metrics with circular progress indicators, and full mobile responsiveness.",
    stack: ["React", "TypeScript", "Vite", "Hero Icons"],
    image: BELSOFT_LOGO,
    github: "https://github.com/JudahDevelops/belsoftLandingPage",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function BelsoftProjects() {
  return (
    <section id="belsoft" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] mb-4 font-medium label-gradient">
            Client Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Belsoft Systems
          </h2>
          <p className="text-[#888888] mt-4 text-lg max-w-2xl">
            Projects shipped during my time at Belsoft Limited — e-commerce,
            web, and internal tooling, all in production.
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
