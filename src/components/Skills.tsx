"use client";

import { motion } from "framer-motion";
import {
  SiCplusplus, SiJavascript, SiTypescript, SiPython, SiSwift,
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress,
  SiFastapi, SiMongodb, SiPostgresql, SiFirebase, SiTensorflow,
  SiDocker, SiAmazon, SiGit, SiHtml5, SiCss3
} from "react-icons/si";
import { FaApple, FaMobileAlt } from "react-icons/fa";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C++", icon: SiCplusplus, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "Python", icon: SiPython, color: "text-green-400" },
      { name: "Swift", icon: SiSwift, color: "text-orange-500" },
      { name: "SQL", icon: SiPostgresql, color: "text-blue-300" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-300" },
      { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
      { name: "CSS3", icon: SiCss3, color: "text-blue-600" },
    ],
  },
  {
    title: "Backend & DB",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express", icon: SiExpress, color: "text-gray-400" },
      { name: "FastAPI", icon: SiFastapi, color: "text-teal-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "iOS", icon: SiSwift, color: "text-blue-500" },
      { name: "SwiftUI", icon: SiSwift, color: "text-blue-400" },
      { name: "UIKit", icon: FaApple, color: "text-gray-200" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
      { name: "Architectures", icon: FaMobileAlt, color: "text-purple-400" },
    ],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-black/20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Technical Arsenal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl hover:border-blue-500/30 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 text-center text-gray-200 border-b border-gray-700 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center group">
                    <div className={`text-3xl mb-2 ${skill.color} transition-transform group-hover:scale-110`}>
                      <skill.icon />
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
