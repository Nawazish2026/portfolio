"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useCallback } from "react";

const highlights = [
  { text: "AI", color: "#B8FF57" },
  { text: "scalable systems", color: "#F23FA0" },
  { text: "full-stack engineering", color: "#22D1EE" },
];

export default function About() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-3, 3]);

  const handleMouse = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY]
  );

  const handleLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Floating accent */}
      <motion.div
        className="absolute top-10 right-[15%] w-24 h-24 border border-[#22D1EE]/8 rounded-2xl"
        animate={{ rotate: [0, 90, 180, 270, 360], y: [-5, 5, -5] }}
        transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium uppercase tracking-[0.25em] text-gray-600 mb-3"
          >
            Who I Am
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="text-3xl md:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#F23FA0] to-[#22D1EE]"
          >
            About Me
          </motion.h2>

          {/* 3D Tilt Card */}
          <motion.div
            className="relative p-[1px] rounded-2xl overflow-hidden"
            style={{ rotateX, rotateY, perspective: 1000, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouse}
            onMouseLeave={handleLeave}
          >
            {/* Animated gradient border */}
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F23FA0] via-[#22D1EE] to-[#B8FF57] animate-gradient-shift opacity-25"
              style={{ backgroundSize: "200% 200%" }}
            />

            <div className="relative glass rounded-2xl p-8 md:p-10 text-left md:text-center bg-[#08080D]/90">
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-5">
                I&apos;m a Computer Science student passionate about{" "}
                {highlights.map((kw, i) => (
                  <motion.span
                    key={kw.text}
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 200, damping: 12 }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: `0 0 20px ${kw.color}25`,
                      transition: { duration: 0.2 },
                    }}
                    className="inline-block px-2 py-0.5 rounded font-semibold mx-0.5 cursor-default"
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
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-base md:text-lg text-gray-400 leading-relaxed"
              >
                With a strong foundation in{" "}
                <motion.span
                  whileHover={{ color: "#B8FF57" }}
                  className="text-gray-200 font-medium cursor-default transition-colors"
                >
                  Data Structures
                </motion.span>
                ,{" "}
                <motion.span
                  whileHover={{ color: "#22D1EE" }}
                  className="text-gray-200 font-medium cursor-default transition-colors"
                >
                  System Design
                </motion.span>
                , and performance optimization,
                I bridge the gap between complex algorithms and seamless user experiences.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
