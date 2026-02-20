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

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-600 mb-3">
            What I Work With
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B8FF57] to-[#22D1EE]">
            Technical Arsenal
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category, catIndex) => {
            const accent = categoryAccents[catIndex];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1, duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl relative overflow-hidden group hover:border-white/[0.08] transition-colors duration-500"
              >
                {/* Neon top accent */}
                <div
                  className="absolute top-0 left-0 w-full h-[2px] opacity-60"
                  style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
                />

                {/* Subtle hover glow */}
                <div
                  className="absolute -top-24 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full opacity-0 group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none blur-[50px]"
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
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: catIndex * 0.08 + skillIndex * 0.04,
                        type: "spring",
                        stiffness: 220,
                        damping: 18,
                      }}
                      className="flex flex-col items-center group/skill cursor-default"
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.2,
                          rotate: [0, -5, 5, 0],
                          color: accent,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 12 }}
                        className="text-2xl mb-1.5 text-gray-500 transition-all"
                      >
                        <skill.icon />
                      </motion.div>
                      <span className="text-[10px] text-gray-600 group-hover/skill:text-gray-400 transition-colors text-center leading-tight">
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
