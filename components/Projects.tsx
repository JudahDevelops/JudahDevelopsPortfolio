"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";

function GitHubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

interface Project {
  title: string;
  description: string;
  stack: string[];
  youtubeEmbed: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "AI Lead Enrichment Pipeline",
    description:
      "Reads raw leads from Google Sheets, verifies emails with Hunter.io, generates personalized AI icebreaker lines with DeepSeek, and writes enriched leads to an output sheet. Batched processing with a Slack summary on completion.",
    stack: ["n8n", "Hunter.io", "DeepSeek", "Google Sheets", "Slack"],
    youtubeEmbed: "https://www.youtube.com/embed/UClQIUK7IYc",
    github:
      "https://github.com/JudahDevelops/n8n-ai-lead-enrichment-pipeline",
  },
  {
    title: "Sheet → HubSpot + Instantly Campaign Launcher",
    description:
      "Reads enriched leads from Google Sheets, creates/updates HubSpot contacts, enrolls each lead in an Instantly.ai campaign with AI-personalized copy, marks enrolled leads in the sheet, and posts a Slack summary.",
    stack: [
      "n8n",
      "Google Sheets",
      "HubSpot",
      "Instantly.ai",
      "DeepSeek",
      "Slack",
    ],
    youtubeEmbed: "https://www.youtube.com/embed/UhG0-olnHBM",
    github: "https://github.com/JudahDevelops/n8n-sheet-to-hubspot-instantly",
  },
  {
    title: "Gmail Reply Classifier & CRM Router",
    description:
      "Monitors Gmail every minute, checks if the sender is a HubSpot contact, classifies reply intent with DeepSeek AI (9 categories including Interested, Meeting Booked, Unsubscribe), and routes to the appropriate HubSpot action with a Slack alert.",
    stack: ["n8n", "Gmail", "DeepSeek", "HubSpot", "Slack"],
    youtubeEmbed: "https://www.youtube.com/embed/jd1gciIHBGo",
    github:
      "https://github.com/JudahDevelops/n8n-gmail-reply-classifier-crm-router",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#00D4FF] mb-4 font-medium">
            Projects
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Production Workflows
          </h2>
          <p className="text-[#888888] mt-4 text-lg max-w-2xl">
            Three n8n automation systems built from scratch — each one handling
            a stage of the outbound sales stack.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col bg-[#111111] border border-[#1F1F1F] rounded-lg overflow-hidden hover:border-[#00D4FF]/30 transition-colors duration-300"
            >
              {/* Video embed */}
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={project.youtubeEmbed}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Card content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                  {project.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium bg-[#0A0A0A] border border-[#1F1F1F] text-[#888888] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#1F1F1F] text-white text-sm font-medium rounded hover:border-[#00D4FF] hover:text-[#00D4FF] transition-colors duration-200 w-fit"
                >
                  <GitHubIcon size={15} />
                  View on GitHub
                  <ExternalLink size={12} className="opacity-60" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
