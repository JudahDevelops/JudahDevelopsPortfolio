"use client";

import { motion } from "framer-motion";
import ProjectCard, { type Project } from "./ProjectCard";

const ease = [0.16, 1, 0.3, 1] as const;

const projects: Project[] = [
  {
    title: "AI Lead Enrichment Pipeline",
    description:
      "Reads raw leads from Google Sheets, verifies emails with Hunter.io, generates personalized AI icebreaker lines with DeepSeek, and writes enriched leads to an output sheet. Batched processing with a Slack summary on completion.",
    stack: ["n8n", "Apollo.io", "Hunter.io", "DeepSeek", "Google Sheets", "Slack"],
    youtubeEmbed: "https://www.youtube.com/embed/UClQIUK7IYc",
    github: "https://github.com/JudahDevelops/n8n-ai-lead-enrichment-pipeline",
  },
  {
    title: "Sheet \u2192 HubSpot + Instantly Campaign Launcher",
    description:
      "Reads enriched leads from Google Sheets, creates/updates HubSpot contacts, enrolls each lead in an Instantly.ai campaign with AI-personalized copy, marks enrolled leads in the sheet, and posts a Slack summary.",
    stack: ["n8n", "Apollo.io", "Google Sheets", "HubSpot", "Instantly.ai", "DeepSeek", "Slack"],
    youtubeEmbed: "https://www.youtube.com/embed/UhG0-olnHBM",
    github: "https://github.com/JudahDevelops/n8n-sheet-to-hubspot-instantly",
  },
  {
    title: "Gmail Reply Classifier & CRM Router",
    description:
      "Monitors Gmail every minute, checks if the sender is a HubSpot contact, classifies reply intent with DeepSeek AI across 9 categories (Interested, Meeting Booked, Unsubscribe, and more), then routes to the appropriate HubSpot action with a Slack alert.",
    stack: ["n8n", "Gmail", "DeepSeek", "HubSpot", "Slack"],
    youtubeEmbed: "https://www.youtube.com/embed/jd1gciIHBGo",
    github: "https://github.com/JudahDevelops/n8n-gmail-reply-classifier-crm-router",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function AutomationProjects() {
  return (
    <section id="automation" className="py-32 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] mb-4 font-medium text-[#22C55E]">
            Automation
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F8FAFC] tracking-tight">
            n8n Pipelines
          </h2>
          <p className="text-[#94A3B8] mt-4 text-lg max-w-2xl">
            Production workflows covering the full outbound stack — lead enrichment,
            CRM sync, campaign launch, and AI-powered reply routing.
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
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
