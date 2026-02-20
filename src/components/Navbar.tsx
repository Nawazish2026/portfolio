"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "glass-nav py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white tracking-tight relative group">
          <span className="text-gray-200">N</span>
          <span className="text-[#B8FF57]">H</span>
          <span className="text-[#F23FA0]">.</span>
          <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gradient-to-r from-[#B8FF57] to-[#22D1EE] group-hover:w-full transition-all duration-300" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
            >
              <Link
                href={link.href}
                className="relative px-4 py-2 text-sm text-gray-500 hover:text-gray-200 transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gradient-to-r from-[#B8FF57] to-[#22D1EE] group-hover:w-3/4 transition-all duration-300 rounded-full opacity-80" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <motion.button
          className="md:hidden text-gray-300 text-xl"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed top-0 right-0 h-screen w-[70%] bg-[#08080D]/95 backdrop-blur-2xl border-l border-white/[0.04] flex flex-col items-center justify-center gap-8 z-50"
            >
              <button
                className="absolute top-6 right-6 text-xl text-gray-400 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <HiX />
              </button>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="text-xl text-gray-400 hover:text-white transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
