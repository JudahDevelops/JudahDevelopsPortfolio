"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

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
  image?: string | null;
  placeholderIcon?: React.ReactNode;
  github?: string | null;
  liveUrl?: string | null;
}

export const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function CardHeader({ project }: { project: Project }) {
  if (project.youtubeEmbed) {
    return (
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
    );
  }

  if (project.image) {
    return (
      <div className="relative w-full border-b border-[#1F1F1F] overflow-hidden" style={{ height: "180px" }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          unoptimized
        />
        {/* Subtle dark overlay so content below stays readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111111]/60" />
      </div>
    );
  }

  return (
    <div
      className="w-full flex items-center justify-center bg-[#0A0A0A] border-b border-[#1F1F1F]"
      style={{ height: "160px" }}
    >
      <div className="flex flex-col items-center gap-3 text-[#444444]">
        {project.placeholderIcon ?? (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
        )}
      </div>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    cardRef.current!.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    cardRef.current!.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onPointerMove={handlePointerMove}
      className="glow-card gradient-border flex flex-col bg-[#111111] border border-[#1F1F1F] rounded-lg overflow-hidden transition-colors duration-300"
    >
      {/* Pointer-tracking glow blob */}
      <div className="glow-blob" aria-hidden="true" />

      <CardHeader project={project} />

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
          {project.title}
        </h3>
        <p className="text-[#888888] text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

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

        <div className="flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border inline-flex items-center gap-2 px-4 py-2.5 border border-[#1F1F1F] text-white text-sm font-medium rounded transition-colors duration-200"
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
              className="gradient-border inline-flex items-center gap-2 px-4 py-2.5 border border-[#1F1F1F] text-white text-sm font-medium rounded transition-colors duration-200"
            >
              Live Site
              <ExternalLink size={12} className="opacity-60" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
