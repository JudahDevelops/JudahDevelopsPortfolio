"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface Role {
  company: string;
  title: string;
  period: string;
  type: string;
  description: string;
  skills: string[];
}

const experience: Role[] = [
  {
    company: "Belsoft Limited",
    title: "Frontend Developer",
    period: "Jul 2025 — Present",
    type: "Contract · Remote",
    description:
      "Building production web applications across multiple client projects. Delivered a full e-commerce store (Florece\u2019s Place) with Sanity CMS, integrated payments, and SEO. Built a personal brand and coaching site (Cannon Thoughts With IB) and a church website (The Father\u2019s Church), both with React and Sanity. Developed an internal admin dashboard covering job oversight, account management, and performance metrics. Work spans UI/UX design through to deployment.",
    skills: ["Next.js", "React", "TypeScript", "Sanity.io", "Tailwind CSS", "UI/UX Design", "SEO"],
  },
];

function RoleCard({ role, index }: { role: Role; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    cardRef.current!.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    cardRef.current!.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
    >
      <div
        ref={cardRef}
        onPointerMove={handlePointerMove}
        className="glow-card gradient-border bg-[#111111]/80 backdrop-blur-sm border border-[#1F1F1F] rounded-2xl p-8 max-w-3xl"
      >
        <div className="glow-blob" aria-hidden="true" />
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
          <div>
            <h3 className="text-xl font-bold text-white">{role.company}</h3>
            <p className="font-medium mt-0.5 label-gradient">{role.title}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-sm text-white/80 font-medium">{role.period}</p>
            <p className="text-xs text-[#888888] mt-0.5">{role.type}</p>
          </div>
        </div>
        <p className="text-[#888888] text-sm leading-relaxed mb-5">
          {role.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {role.skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 text-xs font-medium bg-[#0A0A0A] border border-[#1F1F1F] text-[#888888] rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-[0.2em] mb-3 font-medium label-gradient">
            Experience
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Work History
          </h2>
        </motion.div>

        <div>
          {experience.map((role, i) => (
            <RoleCard key={role.company + role.title} role={role} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
