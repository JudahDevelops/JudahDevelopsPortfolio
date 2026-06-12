"use client";

import { motion } from "framer-motion";

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
      "Building and maintaining production-grade web applications for the Belsoft platform. Delivered a full admin dashboard from scratch — covering UI/UX design, component architecture, data visualisation, and mobile responsiveness. Collaborate directly with the product team to ship clean, fast interfaces.",
    skills: ["React", "TypeScript", "Vite", "Recharts", "UI/UX Design"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0A0A0A] border-t border-[#1F1F1F]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#00D4FF] mb-4 font-medium">
            Experience
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Work History
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experience.map((role, i) => (
            <motion.div
              key={role.company + role.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative pl-6 border-l border-[#1F1F1F]"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#00D4FF]" />

              <div className="bg-[#111111] border border-[#1F1F1F] rounded-lg p-8 hover:border-[#00D4FF]/30 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{role.company}</h3>
                    <p className="text-[#00D4FF] font-medium mt-0.5">{role.title}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
}
