"use client";

import { motion } from "framer-motion";
import {
  SiSwift, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs,
  SiMongodb, SiFirebase, SiGit, SiPostman, SiVercel, SiPython
} from "react-icons/si";
import { FaApple, FaMobileAlt, FaDatabase, FaBrain, FaServer, FaImages, FaCogs } from "react-icons/fa";

const categoryAccents = ["#B8FF57", "#F23FA0", "#22D1EE", "#A78BFA"];

const skillCategories = [
  {
    title: "Mobile Development",
    skills: [
      { name: "SwiftUI", icon: SiSwift },
      { name: "UIKit", icon: FaApple },
      { name: "SwiftData", icon: FaDatabase },
      { name: "State Mgmt", icon: FaCogs },
      { name: "MVVM", icon: FaMobileAlt },
      { name: "PhotosUI", icon: FaImages },
    ],
  },
  {
    title: "Backend & AI",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "REST APIs", icon: FaServer },
      { name: "RAG Systems", icon: FaBrain },
      { name: "LLM Integration", icon: SiPython },
      { name: "Vector DB", icon: FaDatabase },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    title: "Cloud & Tools",
    skills: [
      { name: "Firebase", icon: SiFirebase },
      { name: "Vercel", icon: SiVercel },
      { name: "Git / GitHub", icon: SiGit },
      { name: "Postman", icon: SiPostman },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      {/* Floating decoration */}
      <motion.div
        className="absolute top-20 left-[5%] w-3 h-3 rounded-full bg-[#B8FF57]/20"
        animate={{ y: [-15, 15, -15], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-[8%] w-2 h-2 rounded-full bg-[#F23FA0]/20"
        animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-medium uppercase tracking-[0.25em] text-gray-600 mb-3"
          >
            What I Work With
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150 }}
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B8FF57] to-[#22D1EE]"
          >
            Technical Arsenal
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" style={{ perspective: 1000 }}>
          {skillCategories.map((category, catIndex) => {
            const accent = categoryAccents[catIndex];
            return (
              <motion.div
                key={category.title}
                custom={catIndex}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="glass p-6 rounded-xl relative overflow-hidden group hover:border-white/[0.1] transition-colors duration-500"
              >
                {/* Neon top accent with animation */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-[2px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.15 + 0.3, duration: 0.6 }}
                />

                {/* Hover glow */}
                <div
                  className="absolute -top-24 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none blur-[50px]"
                  style={{ background: accent }}
                />

                <h3
                  className="text-sm font-semibold mb-5 text-center uppercase tracking-wider pb-3 border-b"
                  style={{ color: accent, borderColor: `${accent}15` }}
                >
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-4 justify-center relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0, rotate: -20 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: catIndex * 0.1 + skillIndex * 0.06,
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                      className="flex flex-col items-center group/skill cursor-default"
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.35,
                          rotate: [0, -10, 10, -5, 0],
                          color: accent,
                          filter: `drop-shadow(0 0 12px ${accent}50)`,
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="text-2xl mb-1.5 text-gray-500 transition-all"
                      >
                        <skill.icon />
                      </motion.div>
                      <span className="text-[10px] text-gray-600 group-hover/skill:text-gray-300 transition-colors text-center leading-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
