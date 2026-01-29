"use client";

import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaStar } from "react-icons/fa";

const achievements = [
  {
    icon: FaCode,
    value: "900+",
    label: "DSA Problems Solved",
    color: "text-blue-500",
  },
  {
    icon: FaStar,
    value: "3★",
    label: "CodeChef Coder",
    color: "text-yellow-400",
  },
  {
    icon: FaLaptopCode,
    value: "Lead",
    label: "Web Dev Club",
    color: "text-purple-500",
  },
];

export default function Achievements() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="glass p-12 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                className="flex flex-col items-center"
              >
                <item.icon className={`text-4xl mb-4 ${item.color}`} />
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {item.value}
                </h3>
                <p className="text-gray-400 text-lg">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
