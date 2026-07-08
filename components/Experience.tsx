"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

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
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease }}
    >
      <div
        ref={cardRef}
        onPointerMove={handlePointerMove}
        className="glass-card p-8 max-w-3xl"
      >
        <div className="card-glow" aria-hidden="true" />
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
          <div>
            <h3 className="text-xl font-bold text-[#F8FAFC]">{role.company}</h3>
            <p className="font-medium mt-0.5 text-[#22C55E]">{role.title}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-sm text-[#CBD5E1] font-medium">{role.period}</p>
            <p className="text-xs text-[#64748B] mt-0.5">{role.type}</p>
          </div>
        </div>
        <p className="text-[#94A3B8] text-sm leading-relaxed mb-5">
          {role.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {role.skills.map((skill) => (
            <span key={skill} className="skill-tag px-2.5 py-1 text-xs font-medium">
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
    <section id="experience" className="py-32 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-[0.2em] mb-3 font-medium text-[#22C55E]">
            Experience
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F8FAFC] tracking-tight">
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
