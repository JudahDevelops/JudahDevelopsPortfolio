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
      "Building production web applications across multiple client projects. Delivered a full e-commerce store (Florece\u2019s Place) with Sanity CMS, integrated payments, and SEO. Built a personal brand and coaching site (Cannon Thoughts With IB) and a church website (The Father\u2019s Church), both with React and Sanity. Developed an internal admin dashboard covering job oversight, account management, and performance metrics. Work spans UI/UX design through to deployment.",
    skills: ["Next.js", "React", "TypeScript", "Sanity.io", "Tailwind CSS", "UI/UX Design", "SEO"],
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
          <p className="text-xs uppercase tracking-[0.2em] mb-4 font-medium label-gradient">
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
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full" style={{ background: "linear-gradient(135deg, #00D4FF, #7B2FFF)" }} />

              <div className="bg-[#111111] border border-[#1F1F1F] rounded-lg p-8 hover:border-[#00D4FF]/30 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
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
          ))}
        </div>
      </div>
    </section>
  );
}
