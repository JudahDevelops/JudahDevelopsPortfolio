"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function GitHubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  youtubeEmbed?: string | null;
  github?: string | null;
  liveUrl?: string | null;
}

export const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex flex-col bg-[#111111] border border-[#1F1F1F] rounded-lg overflow-hidden hover:border-[#00D4FF]/30 transition-colors duration-300"
    >
      {/* Video embed or placeholder */}
      {project.youtubeEmbed ? (
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
      ) : (
        <div
          className="w-full flex items-center justify-center bg-[#0A0A0A] border-b border-[#1F1F1F]"
          style={{ height: "160px" }}
        >
          <div className="text-center">
            <div className="w-10 h-10 rounded-full border border-[#00D4FF]/30 flex items-center justify-center mx-auto mb-2">
              <div className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            </div>
            <p className="text-xs text-[#888888] uppercase tracking-widest">
              Client Project
            </p>
          </div>
        </div>
      )}

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

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#1F1F1F] text-white text-sm font-medium rounded hover:border-[#00D4FF] hover:text-[#00D4FF] transition-colors duration-200"
            >
              <GitHubIcon size={15} />
              GitHub
              <ExternalLink size={12} className="opacity-60" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#1F1F1F] text-white text-sm font-medium rounded hover:border-[#00D4FF] hover:text-[#00D4FF] transition-colors duration-200"
            >
              Live
              <ExternalLink size={12} className="opacity-60" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
