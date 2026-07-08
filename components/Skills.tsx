"use client";

import { motion, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

interface SkillGroup {
  category: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Automation Tools",
    skills: ["n8n", "HubSpot", "Apollo.io", "Instantly.ai", "Hunter.io"],
  },
  {
    category: "Development",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Python", "HTML / CSS"],
  },
  {
    category: "AI & Consulting",
    skills: ["Claude", "DeepSeek", "AI Workflow Design", "Prompt Engineering"],
  },
  {
    category: "UI/UX Design",
    skills: ["Figma", "Responsive Design", "Dashboard UI", "Component Systems"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const groupVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

const tagVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] mb-4 font-medium text-[#22C55E]">
            Skills
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F8FAFC] tracking-tight">
            Tools & Stack
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillGroups.map((group) => (
            <motion.div key={group.category} variants={groupVariants}>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#94A3B8] font-medium">
                {group.category}
              </h3>
              <div className="h-px w-8 bg-gradient-to-r from-[#22C55E] to-transparent mt-2 mb-5" />
              <motion.div
                className="flex flex-wrap gap-2.5"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={tagVariants}
                    className="skill-tag px-3.5 py-2 text-sm font-medium cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
