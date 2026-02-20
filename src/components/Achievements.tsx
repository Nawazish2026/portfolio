"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { FaCode, FaLaptopCode, FaStar } from "react-icons/fa";

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, value, spring]);

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => {
      if (ref.current) ref.current.textContent = String(v);
    });
    return unsubscribe;
  }, [display]);

  return <span ref={ref}>0</span>;
}

export default function Achievements() {
  const [totalSolved, setTotalSolved] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/coding-stats")
      .then((r) => r.json())
      .then((data) => {
        const total =
          (data.leetcode ?? 0) +
          (data.gfg ?? 0) +
          (data.codechef ?? 0) +
          (data.codeforces ?? 0);
        setTotalSolved(total);
      })
      .catch(() => setTotalSolved(1080));
  }, []);

  const achievements = [
    {
      icon: FaCode,
      value: totalSolved ?? 0,
      suffix: "+",
      label: "DSA Problems Solved",
      color: "#B8FF57",
      isNumeric: true,
    },
    {
      icon: FaStar,
      value: 3,
      suffix: "★",
      label: "CodeChef Coder",
      color: "#F23FA0",
      isNumeric: false,
    },
    {
      icon: FaLaptopCode,
      value: 0,
      suffix: "",
      label: "Web Dev Club",
      color: "#A78BFA",
      isNumeric: false,
      displayText: "Lead",
    },
  ];

  return (
    <section className="py-28 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-600 mb-3">
            Milestones
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B8FF57] via-[#F23FA0] to-[#A78BFA]">
            Achievements
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-[1px] rounded-2xl overflow-hidden max-w-3xl mx-auto"
        >
          {/* Subtle animated border */}
          <div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#B8FF57] via-[#F23FA0] to-[#A78BFA] animate-gradient-shift opacity-15"
            style={{ backgroundSize: "200% 200%" }}
          />

          <div className="relative glass rounded-2xl p-10 bg-[#08080D]/90">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, type: "spring", stiffness: 150 }}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-3xl mb-3"
                    style={{ color: item.color }}
                  >
                    <item.icon />
                  </motion.div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-1.5 tabular-nums">
                    {item.isNumeric ? (
                      <>
                        {totalSolved !== null ? (
                          <><AnimatedNumber value={item.value} />{item.suffix}</>
                        ) : (
                          <span className="inline-block w-16 h-8 bg-white/[0.03] rounded animate-pulse" />
                        )}
                      </>
                    ) : (
                      <span style={{ color: item.color }}>
                        {item.displayText || `${item.value}${item.suffix}`}
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
