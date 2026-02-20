"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const roles = ["Full Stack Developer", "AI/ML Engineer", "iOS Developer"];

const letterVariants = {
  hidden: { opacity: 0, y: 15, rotateX: -30, filter: "blur(3px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)",
    transition: { delay: 0.5 + i * 0.035, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1, scale: 1,
    transition: { delay: 1.4 + i * 0.12, type: "spring" as const, stiffness: 250, damping: 15 },
  }),
};

export default function Hero() {
  const fullName = "Nawazish Hassan";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle ambient blobs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ top: "10%", left: "5%", background: "rgba(184,255,87,0.04)" }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none"
        style={{ top: "40%", right: "5%", background: "rgba(242,63,160,0.035)" }}
        animate={{ x: [0, -35, 0], y: [0, 35, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full blur-[120px] pointer-events-none"
        style={{ bottom: "10%", left: "40%", background: "rgba(34,209,238,0.03)" }}
        animate={{ x: [0, 20, -15, 0], y: [0, -15, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 z-10 text-center">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-base md:text-lg text-[#22D1EE]/80 font-medium mb-5 tracking-widest uppercase"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name — letter reveal */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-none">
          {fullName.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              className={`inline-block ${char === " " ? "mr-3 md:mr-4" : ""} ${i >= fullName.indexOf("H", 1)
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#B8FF57] via-[#22D1EE] to-[#A78BFA]"
                  : "text-white"
                }`}
              style={{ perspective: 600 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* Role badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-5"
        >
          {roles.map((role, i) => (
            <motion.span
              key={role}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.05 + i * 0.12, type: "spring", stiffness: 180 }}
              className="px-4 py-1.5 text-xs md:text-sm font-medium rounded-full border backdrop-blur-sm"
              style={{
                borderColor: i === 0 ? "rgba(184,255,87,0.2)" : i === 1 ? "rgba(242,63,160,0.2)" : "rgba(34,209,238,0.2)",
                color: i === 0 ? "#B8FF57" : i === 1 ? "#F23FA0" : "#22D1EE",
                background: i === 0 ? "rgba(184,255,87,0.04)" : i === 1 ? "rgba(242,63,160,0.04)" : "rgba(34,209,238,0.04)",
              }}
            >
              {role}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.5 }}
          className="text-sm md:text-base text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Building scalable web apps, native iOS apps &amp; intelligent AI systems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-14"
        >
          <Link href="#projects">
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(184,255,87,0.2)" }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 bg-gradient-to-r from-[#B8FF57] to-[#22D1EE] text-black rounded-full font-semibold text-sm tracking-wide cursor-pointer"
            >
              View Projects
            </motion.div>
          </Link>
          <Link href="#contact">
            <motion.div
              whileHover={{ scale: 1.03, borderColor: "rgba(184,255,87,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 border border-gray-700 text-gray-400 hover:text-white rounded-full font-medium text-sm cursor-pointer transition-colors duration-300"
            >
              Contact Me
            </motion.div>
          </Link>
        </motion.div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 text-xl">
          {[
            { icon: FaGithub, href: "https://github.com/Nawazish2026", hoverColor: "#B8FF57" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/nawazish-hassan-015078240/", hoverColor: "#22D1EE" },
            { icon: FaEnvelope, href: "mailto:nawazishhassan2003@gmail.com", hoverColor: "#F23FA0" },
          ].map((social, i) => (
            <motion.a
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={socialVariants}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: social.hoverColor }}
              className="text-gray-600 transition-all cursor-pointer"
            >
              <social.icon />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-5 h-8 border border-gray-700 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1 bg-gray-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
