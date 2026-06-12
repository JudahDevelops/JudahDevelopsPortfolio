"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Copy, Check } from "lucide-react";

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function CopyChip({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    ref.current!.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    ref.current!.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <button
      ref={ref}
      onClick={handleCopy}
      onPointerMove={handlePointerMove}
      className="glow-card gradient-border group flex items-center gap-3 px-5 py-3.5 bg-[#111111] border border-[#1F1F1F] rounded-lg text-left transition-colors duration-200 cursor-pointer w-full sm:w-auto"
    >
      <div className="glow-blob" aria-hidden="true" />
      <div className="flex flex-col min-w-0">
        <span className="text-[10px] uppercase tracking-widest text-[#888888] mb-0.5">{label}</span>
        <span className="text-white text-sm font-medium truncate">{value}</span>
      </div>
      <span className="ml-auto pl-3 shrink-0 text-[#888888] group-hover:text-[#00D4FF] transition-colors duration-200">
        {copied
          ? <Check size={14} className="text-[#00D4FF]" />
          : <Copy size={14} />
        }
      </span>
    </button>
  );
}

export default function Contact() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.2em] mb-4 font-medium label-gradient">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-[#888888] text-lg mb-10 max-w-xl">
            Open to contracts, freelance projects, and collaborations across
            automation, web development, AI consulting, and UI/UX design.
          </p>

          {/* Copyable contact chips */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <CopyChip label="Email" value="judahdevelops@gmail.com" />
            <CopyChip label="WhatsApp / Phone" value="+234 903 583 7363" />
          </motion.div>

          {/* GitHub link */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            <a
              href="https://github.com/JudahDevelops"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border inline-flex items-center gap-3 px-7 py-3.5 border border-[#1F1F1F] text-white font-semibold rounded text-sm uppercase tracking-wider transition-colors duration-200"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="max-w-6xl mx-auto mt-24 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <p className="text-[#888888] text-sm">
          Judah Oka &mdash; CS Student, Nile University of Abuja
        </p>
        <p className="text-[#888888] text-xs">
          Built with Next.js · Tailwind CSS · Framer Motion
        </p>
      </motion.div>
    </section>
  );
}
