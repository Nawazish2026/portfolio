"use client";

import { motion } from "framer-motion";
import {
  SiSwift, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress,
  SiMongodb, SiFirebase, SiGit, SiPostman, SiVercel, SiPython, SiTensorflow
} from "react-icons/si";
import { FaApple, FaMobileAlt, FaDatabase, FaBrain, FaServer, FaImages, FaCogs } from "react-icons/fa";

const skillCategories = [
  {
    title: "Mobile Development",
    skills: [
      { name: "SwiftUI", icon: SiSwift, color: "text-blue-400" },
      { name: "UIKit", icon: FaApple, color: "text-gray-200" },
      { name: "SwiftData", icon: FaDatabase, color: "text-blue-500" },
      { name: "State Mgmt", icon: FaCogs, color: "text-gray-400" },
      { name: "MVVM", icon: FaMobileAlt, color: "text-purple-400" },
      { name: "PhotosUI", icon: FaImages, color: "text-yellow-400" },
    ],
  },
  {
    title: "Backend & AI",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "REST APIs", icon: FaServer, color: "text-blue-300" },
      { name: "RAG Systems", icon: FaBrain, color: "text-purple-400" },
      { name: "LLM Integrations", icon: SiPython, color: "text-yellow-300" },
      { name: "Vector DB", icon: FaDatabase, color: "text-orange-400" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-300" },
    ],
  },
  {
    title: "Cloud & Tools",
    skills: [
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
      { name: "Vercel", icon: SiVercel, color: "text-white" },
      { name: "Git / GitHub", icon: SiGit, color: "text-red-500" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    ],
  },
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
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors text-center">
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
