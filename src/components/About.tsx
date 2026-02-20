"use client";

import { motion } from "framer-motion";

const highlights = [
  { text: "AI", color: "#B8FF57" },
  { text: "scalable systems", color: "#F23FA0" },
  { text: "full-stack engineering", color: "#22D1EE" },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Section label */}
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-600 mb-3">
            Who I Am
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#F23FA0] to-[#22D1EE]">
            About Me
          </h2>

          {/* Card */}
          <motion.div
            className="relative p-[1px] rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.005 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Animated gradient border */}
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F23FA0] via-[#22D1EE] to-[#B8FF57] animate-gradient-shift opacity-20"
              style={{ backgroundSize: "200% 200%" }}
            />

            <div className="relative glass rounded-2xl p-8 md:p-10 text-left md:text-center bg-[#08080D]/90">
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-5">
                I&apos;m a Computer Science student passionate about{" "}
                {highlights.map((kw, i) => (
                  <motion.span
                    key={kw.text}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 200 }}
                    className="inline-block px-2 py-0.5 rounded font-semibold mx-0.5"
                    style={{
                      color: kw.color,
                      background: `${kw.color}08`,
                      border: `1px solid ${kw.color}18`,
                    }}
                  >
                    {kw.text}
                  </motion.span>
                ))}
                .
                I build intelligent applications that solve real-world problems — from diagnostic platforms to high-performance web systems.
              </p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                With a strong foundation in{" "}
                <span className="text-gray-200 font-medium">Data Structures</span>,{" "}
                <span className="text-gray-200 font-medium">System Design</span>, and performance optimization,
                I bridge the gap between complex algorithms and seamless user experiences.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
