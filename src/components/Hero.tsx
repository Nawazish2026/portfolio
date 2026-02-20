"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Typewriter, Magnetic, FloatingShapes } from "./AnimationEffects";
import { useRef } from "react";

const letterVariants = {
  hidden: { opacity: 0, y: 20, rotateX: -40, filter: "blur(4px)", scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)", scale: 1,
    transition: { delay: 0.3 + i * 0.04, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: (i: number) => ({
    opacity: 1, scale: 1, rotate: 0,
    transition: { delay: 1.6 + i * 0.15, type: "spring" as const, stiffness: 200, damping: 12 },
  }),
};

export default function Hero() {
  const fullName = "Nawazish Hassan";
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingShapes />

      {/* Animated blobs with more movement */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ top: "10%", left: "5%", background: "rgba(184,255,87,0.05)" }}
        animate={{ x: [0, 60, -20, 0], y: [0, -40, 30, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none"
        style={{ top: "40%", right: "5%", background: "rgba(242,63,160,0.04)" }}
        animate={{ x: [0, -50, 20, 0], y: [0, 40, -20, 0], scale: [1.1, 0.8, 1.2, 1.1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full blur-[120px] pointer-events-none"
        style={{ bottom: "10%", left: "40%", background: "rgba(34,209,238,0.04)" }}
        animate={{ x: [0, 30, -25, 0], y: [0, -20, 35, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: "linear-gradient(rgba(184,255,87,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(184,255,87,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div style={{ y: textY, opacity }} className="container mx-auto px-6 z-10 text-center">
        {/* Greeting with glow */}
        <motion.p
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
          className="text-base md:text-lg text-[#22D1EE]/80 font-medium mb-5 tracking-widest uppercase"
        >
          <motion.span
            animate={{ textShadow: ["0 0 0px transparent", "0 0 8px rgba(34,209,238,0.4)", "0 0 0px transparent"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Hello, I&apos;m
          </motion.span>
        </motion.p>

        {/* Name — letter reveal with 3D */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-none">
          {fullName.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              whileHover={{ scale: 1.15, color: "#B8FF57", transition: { duration: 0.15 } }}
              className={`inline-block cursor-default ${char === " " ? "mr-3 md:mr-4" : ""} ${i >= fullName.indexOf("H", 1)
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#B8FF57] via-[#22D1EE] to-[#A78BFA]"
                  : "text-white"
                }`}
              style={{ perspective: 600 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* Typewriter subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-400 mb-5 h-8"
        >
          <Typewriter
            texts={["Full Stack Developer", "AI/ML Engineer", "iOS Developer", "Problem Solver"]}
            className="font-medium"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-sm md:text-base text-gray-600 max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Building scalable web apps, native iOS apps &amp; intelligent AI systems.
        </motion.p>

        {/* CTAs with magnetic hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-14"
        >
          <Magnetic strength={0.15}>
            <Link href="#projects">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(184,255,87,0.25)" }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3 bg-gradient-to-r from-[#B8FF57] to-[#22D1EE] text-black rounded-full font-semibold text-sm tracking-wide cursor-pointer relative overflow-hidden group"
              >
                {/* Shimmer sweep */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">View Projects</span>
              </motion.div>
            </Link>
          </Magnetic>
          <Magnetic strength={0.15}>
            <Link href="#contact">
              <motion.div
                whileHover={{ scale: 1.05, borderColor: "rgba(184,255,87,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3 border border-gray-700 text-gray-400 hover:text-white rounded-full font-medium text-sm cursor-pointer transition-all duration-300"
              >
                Contact Me
              </motion.div>
            </Link>
          </Magnetic>
        </motion.div>

        {/* Social Icons — spin-in bounce */}
        <div className="flex justify-center gap-6 text-xl">
          {[
            { icon: FaGithub, href: "https://github.com/Nawazish2026", hoverColor: "#B8FF57" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/nawazish-hassan-015078240/", hoverColor: "#22D1EE" },
            { icon: FaEnvelope, href: "mailto:nawazishhassan2003@gmail.com", hoverColor: "#F23FA0" },
          ].map((social, i) => (
            <Magnetic key={i} strength={0.3}>
              <motion.a
                custom={i}
                initial="hidden"
                animate="visible"
                variants={socialVariants}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.3,
                  color: social.hoverColor,
                  filter: `drop-shadow(0 0 15px ${social.hoverColor}50)`,
                }}
                className="text-gray-600 transition-all cursor-pointer"
              >
                <social.icon />
              </motion.a>
            </Magnetic>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="w-5 h-8 border border-gray-700 rounded-full flex justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1 bg-[#22D1EE] rounded-full"
              style={{ boxShadow: "0 0 6px #22D1EE" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
