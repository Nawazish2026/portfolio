"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

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
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-600 mb-3">
            Let&apos;s Connect
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#F23FA0] to-[#A78BFA]">
            Get In Touch
          </h2>

          {/* Card */}
          <motion.div
            className="relative p-[1px] rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.003 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F23FA0] via-[#A78BFA] to-[#22D1EE] animate-gradient-shift opacity-15"
              style={{ backgroundSize: "200% 200%" }}
            />

            <div className="relative glass rounded-2xl p-8 md:p-10 bg-[#08080D]/90">
              <p className="text-sm md:text-base text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
                I&apos;m open to new opportunities and collaborations.
                Whether you have a question or just want to say hi, feel free to reach out.
              </p>

              {/* Email */}
              <motion.a
                href="mailto:nawazishhassan2003@gmail.com"
                whileHover={{ scale: 1.01 }}
                className="inline-flex items-center gap-2.5 text-sm text-gray-400 hover:text-[#F23FA0] transition-colors mb-8"
              >
                <FaEnvelope className="text-base" />
                <span>nawazishhassan2003@gmail.com</span>
              </motion.a>

              {/* Social icons */}
              <div className="flex justify-center gap-4 mb-8">
                {socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.1,
                      borderColor: `${social.color}30`,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3.5 rounded-full border border-white/[0.05] bg-white/[0.02] transition-all duration-300"
                  >
                    <social.icon className="text-xl text-gray-400" />
                  </motion.a>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="mailto:nawazishhassan2003@gmail.com"
                whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(242,63,160,0.2)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-block px-7 py-2.5 bg-gradient-to-r from-[#F23FA0] to-[#A78BFA] rounded-full font-semibold text-sm text-white cursor-pointer"
              >
                Say Hello
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
