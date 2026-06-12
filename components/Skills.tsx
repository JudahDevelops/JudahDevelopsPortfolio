"use client";

import { motion, type Variants } from "framer-motion";

interface SkillGroup {
  category: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Automation Tools",
    skills: ["n8n", "HubSpot", "Instantly.ai", "Hunter.io", "Zapier / Make"],
  },
  {
    category: "Development",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Python",
      "HTML / CSS",
    ],
  },
  {
    category: "AI Tools",
    skills: ["Claude", "DeepSeek"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const groupVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const tagVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-[#0A0A0A] border-t border-[#1F1F1F]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#00D4FF] mb-4 font-medium">
            Skills
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Tools & Stack
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillGroups.map((group) => (
            <motion.div key={group.category} variants={groupVariants}>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#888888] mb-5 font-medium">
                {group.category}
              </h3>
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
                    className="px-3.5 py-2 text-sm font-medium bg-[#111111] border border-[#1F1F1F] text-white rounded hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-colors duration-200 cursor-default"
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
