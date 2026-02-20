"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { Magnetic } from "./AnimationEffects";

const socials = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/nawazish-hassan-015078240/",
    color: "#22D1EE",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Nawazish2026",
    color: "#B8FF57",
    label: "GitHub",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      {/* Floating accents */}
      <motion.div
        className="absolute top-16 right-[12%] w-12 h-12 border border-[#F23FA0]/10 rounded-lg"
        animate={{ rotate: [0, 180, 360], y: [-5, 5, -5] }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-24 left-[10%] w-3 h-3 rounded-full bg-[#A78BFA]/15"
        animate={{ scale: [1, 1.5, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-medium uppercase tracking-[0.25em] text-gray-600 mb-3"
          >
            Let&apos;s Connect
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150 }}
            className="text-3xl md:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#F23FA0] to-[#A78BFA]"
          >
            Get In Touch
          </motion.h2>

          <motion.div
            className="relative p-[1px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F23FA0] via-[#A78BFA] to-[#22D1EE] animate-gradient-shift opacity-20"
              style={{ backgroundSize: "200% 200%" }}
            />

            <div className="relative glass rounded-2xl p-8 md:p-10 bg-[#08080D]/90">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-sm md:text-base text-gray-500 mb-8 max-w-md mx-auto leading-relaxed"
              >
                I&apos;m open to new opportunities and collaborations.
                Whether you have a question or just want to say hi, feel free to reach out.
              </motion.p>

              <motion.a
                href="mailto:nawazishhassan2003@gmail.com"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02, color: "#F23FA0" }}
                className="inline-flex items-center gap-2.5 text-sm text-gray-400 transition-colors mb-8"
              >
                <FaEnvelope className="text-base" />
                <span>nawazishhassan2003@gmail.com</span>
              </motion.a>

              <div className="flex justify-center gap-4 mb-8">
                {socials.map((social, i) => (
                  <Magnetic key={i} strength={0.25}>
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0, rotate: -90 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 200 }}
                      whileHover={{
                        scale: 1.15,
                        boxShadow: `0 0 25px ${social.color}30`,
                        borderColor: `${social.color}30`,
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3.5 rounded-full border border-white/[0.05] bg-white/[0.02] transition-all duration-300"
                    >
                      <social.icon className="text-xl text-gray-400" />
                    </motion.a>
                  </Magnetic>
                ))}
              </div>

              <Magnetic strength={0.15}>
                <motion.a
                  href="mailto:nawazishhassan2003@gmail.com"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(242,63,160,0.25)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-7 py-2.5 bg-gradient-to-r from-[#F23FA0] to-[#A78BFA] rounded-full font-semibold text-sm text-white cursor-pointer relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative">Say Hello</span>
                </motion.a>
              </Magnetic>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
