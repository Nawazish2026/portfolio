"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";

/* ─── Animated Counter ─── */
function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
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

/* ─── 3D Tilt Card Wrapper ─── */
function TiltCard({ children, className, style, ...props }: React.ComponentProps<typeof motion.a>) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  const handleMouse = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      x.set((e.clientX - rect.left) / rect.width - 0.5);
      y.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [x, y]
  );

  const handleLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.a
      className={className}
      style={{ ...style, rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      {...props}
    >
      {children}
    </motion.a>
  );
}

/* ─── Orbital Ring ─── */
function OrbitalRing({ color, size, speed, reverse }: { color: string; size: number; speed: string; reverse?: boolean }) {
  return (
    <div
      className={`absolute rounded-full border border-dashed pointer-events-none ${reverse ? "animate-spin-reverse" : "animate-spin-slow"}`}
      style={{
        width: size,
        height: size,
        borderColor: `${color}30`,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        animationDuration: speed,
      }}
    >
      {/* Orbiting dot */}
      <div
        className="absolute w-1.5 h-1.5 rounded-full"
        style={{ background: color, top: 0, left: "50%", transform: "translateX(-50%) translateY(-50%)", boxShadow: `0 0 8px ${color}` }}
      />
    </div>
  );
}

/* ─── Floating Particles ─── */
// Deterministic positions to avoid SSR hydration mismatch (no Math.random)
const PARTICLE_POSITIONS = [
  { bottom: 15, left: 25 },
  { bottom: 28, left: 55 },
  { bottom: 20, left: 75 },
  { bottom: 35, left: 40 },
];
const PARTICLE_DURATIONS = [3.2, 4.1, 3.6, 4.5];

function Particles({ color, count = 4 }: { color: string; count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full pointer-events-none"
          style={{
            background: color,
            boxShadow: `0 0 6px ${color}`,
            bottom: `${PARTICLE_POSITIONS[i % 4].bottom}%`,
            left: `${PARTICLE_POSITIONS[i % 4].left}%`,
            animationName: "float-particle",
            animationDuration: `${PARTICLE_DURATIONS[i % 4]}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}
    </>
  );
}

/* ─── Platform SVG Icons (slightly larger) ─── */
const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" fill="#FFA116" />
  </svg>
);

const GFGIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
    <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.16-.514h3.349l-.004-.588H14.35c0-.187.012-.376.04-.566h3.348l-.003-.589H14.46c.094-.443.26-.86.488-1.24a3.79 3.79 0 0 1 2.135-2.078 4.51 4.51 0 0 1 3.116-.016c.419.153.8.374 1.104.695.231.213.422.465.565.745l.01.019.796-.405-.01-.02a4.21 4.21 0 0 0-.69-.915 4.65 4.65 0 0 0-1.361-.84 5.457 5.457 0 0 0-3.762.023 4.721 4.721 0 0 0-2.651 2.584h-.83l.003.589h.676a5.64 5.64 0 0 0-.036.566h-.643l.003.588h.69a4.72 4.72 0 0 0 2.649 2.584 5.457 5.457 0 0 0 3.762.023 4.65 4.65 0 0 0 1.361-.84c.273-.26.505-.567.69-.915l.01-.02-.796-.404-.01.02z" fill="#2F8D46" />
    <path d="M2.55 14.315c.143.28.334.532.565.745a3.691 3.691 0 0 0 1.104.695 4.51 4.51 0 0 0 3.116-.016 3.79 3.79 0 0 0 2.135-2.078c.064-.168.118-.34.16-.514H6.281l.004-.588h3.476c0-.187-.012-.376-.04-.566H6.373l.003-.589h3.398a4.04 4.04 0 0 0-.488-1.24 3.79 3.79 0 0 0-2.135-2.078 4.51 4.51 0 0 0-3.116-.016 3.691 3.691 0 0 0-1.104.695 3.81 3.81 0 0 0-.565.745l-.01.019-.796-.405.01-.02a4.21 4.21 0 0 1 .69-.915 4.65 4.65 0 0 1 1.361-.84 5.457 5.457 0 0 1 3.762.023 4.721 4.721 0 0 1 2.651 2.584h.83l-.003.589h-.676c.022.187.034.376.036.566h.643l-.003.588h-.69a4.72 4.72 0 0 1-2.649 2.584 5.457 5.457 0 0 1-3.762.023 4.65 4.65 0 0 1-1.361-.84 4.21 4.21 0 0 1-.69-.915l-.01-.02.796-.404.01.02z" fill="#2F8D46" />
  </svg>
);

const CodeChefIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
    <path d="M11.007.867c-.186.024-.37.088-.53.188-.162.1-.28.227-.412.352C9.472 1.906 8.267 2.98 7.72 3.556c-.36.38-.705.8-.937 1.277-.233.477-.355.993-.373 1.51l-.003.084c-.005.156.06.43.085.586.061.378.174.747.33 1.095.26.578.619 1.108 1.06 1.545l.033.034.037.03c.018.015.073.062.073.062l-.006.014c-.32.751-.554 1.539-.682 2.347a12.06 12.06 0 0 0-.094 2.473l.001.02.003.02c.025.132.05.264.079.395l.018.082c.02.085.037.172.06.257.023.085.038.172.066.256.207.637.547 1.245.978 1.758.272.324.584.614.925.864l.061.045.067.032c.236.11.477.21.726.29l.032.01.033.005c.058.009.116.015.174.022.072.008.143.024.214.026l.118.004c.07 0 .14-.004.21-.005.1-.001.2.005.3-.002.124-.008.249-.023.372-.042.052-.008.1-.023.15-.035l.08-.018c.064-.016.127-.024.191-.04.256-.063.508-.144.753-.242.492-.196.952-.453 1.38-.756l.075-.054-.016.165a5.116 5.116 0 0 0 .049 1.252l.001.006.002.006c.14.617.44 1.2.872 1.662l.01.012.012.01c.218.199.468.36.74.477l.041.017.044.008c.272.048.51.097.737.256.228.16.417.41.484.697l.006.028.012.027c.076.169.18.324.305.458.246.262.58.433.937.485a1.552 1.552 0 0 0 1.044-.238c.302-.197.528-.494.638-.839l.008-.02.003-.021c.03-.16.052-.32.068-.483.016-.16.008-.322-.024-.48a1.605 1.605 0 0 0-.608-.934 1.823 1.823 0 0 0-.367-.22l-.042-.018-.044-.01a1.794 1.794 0 0 1-.634-.316 1.22 1.22 0 0 1-.372-.505l-.01-.027-.016-.025A1.758 1.758 0 0 1 16.3 18.5c-.04-.282.003-.574.118-.84l.002-.004.001-.005c.217-.51.363-1.052.433-1.606l.007-.051-.026-.044c-.228-.387-.492-.748-.786-1.081a8.166 8.166 0 0 0-.948-.87l-.03-.024-.035-.014c-.117-.047-.235-.09-.356-.127-.058-.018-.117-.02-.175-.035-.028-.007-.053-.02-.08-.024l-.026-.003-.018.02c-.018.02-.034.04-.049.062a.55.55 0 0 0-.061.128.662.662 0 0 0-.023.272.89.89 0 0 0 .062.248l.005.013.008.01c.06.078.123.154.19.226.146.157.3.306.458.45l.011.01.012.007c.076.048.155.092.237.131.043.021.087.04.132.057l.058.023.028.01c-.125.242-.22.499-.282.763l-.006.024.006.025c.035.176.088.348.159.513.074.17.168.33.277.478l.016.022.021.017c.153.126.321.237.497.329-.1.227-.174.465-.219.708-.135-.114-.286-.21-.447-.283l-.041-.019-.044-.003c-.35-.027-.692.08-.957.305-.266.225-.438.546-.48.896l-.003.022.004.021c.021.134.057.266.105.393.037.1.093.191.14.286l-.064.121c-.106.16-.257.288-.435.364a.756.756 0 0 1-.566.013.627.627 0 0 1-.313-.279.54.54 0 0 1-.058-.135l.017-.063c.032-.102.06-.205.077-.31a1.414 1.414 0 0 0-.098-.73 1.478 1.478 0 0 0-.462-.56l-.019-.015-.022-.009c-.275-.115-.55-.232-.845-.277a4.145 4.145 0 0 0-.91-.04l-.03.002-.027.013a5.044 5.044 0 0 1-1.27.406c-.064.013-.13.017-.195.027l-.103.016c-.026.005-.05.003-.076.007-.086.012-.17.015-.256.019-.066.003-.133.008-.2.005l-.08-.003c-.044 0-.088-.01-.131-.015-.039-.004-.077-.008-.116-.015l-.033-.005-.033-.009a4.99 4.99 0 0 1-.595-.228l-.04-.02-.044-.006a6.35 6.35 0 0 1-.643-.592 5.17 5.17 0 0 1-.644-.82 3.812 3.812 0 0 1-.517-1.26c-.019-.072-.03-.147-.047-.22l-.015-.071-.052-.278c-.068-.53-.073-1.065-.012-1.597.108-.949.393-1.873.836-2.72l.074-.143-.109-.116c-.02-.021-.055-.058-.055-.058l-.03-.035-.026-.026a4.728 4.728 0 0 1-.837-1.258 3.727 3.727 0 0 1-.268-.896 2.485 2.485 0 0 1-.066-.476l.003-.076a2.66 2.66 0 0 1 .303-1.226c.19-.358.478-.672.774-.972.571-.576 1.722-1.614 2.337-2.128l.009-.007c.155-.128.256-.218.387-.306s.259-.148.413-.163a.836.836 0 0 1 .44.065.6.6 0 0 1 .298.287c.063.13.091.274.098.418.011.223-.017.447-.066.665-.168.757-.53 1.465-.94 2.115-.234.373-.488.735-.74 1.098-.066.094-.13.19-.193.286-.048.074-.098.146-.155.214l-.025.033-.012.04c-.042.138-.05.287-.023.429.027.14.09.274.18.384a.724.724 0 0 0 .348.245.73.73 0 0 0 .42.009l.01-.003a.672.672 0 0 0 .122-.054l.07-.04.006-.005c.09-.068.168-.15.24-.236.123-.146.226-.308.324-.472.393-.66.725-1.357.987-2.082.252-.7.437-1.427.52-2.168a5.42 5.42 0 0 0 .024-1.012 2.725 2.725 0 0 0-.171-.775A1.644 1.644 0 0 0 12.3.969a1.888 1.888 0 0 0-.651-.1 2.453 2.453 0 0 0-.277.013l-.363-.015z" fill="#D4A84B" />
  </svg>
);

const CodeforcesIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
    <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5a1.5 1.5 0 0 1-3 0V9a1.5 1.5 0 0 1 1.5-1.5z" fill="#3B82F6" />
    <path d="M10.5 0A1.5 1.5 0 0 1 12 1.5v18a1.5 1.5 0 0 1-3 0v-18A1.5 1.5 0 0 1 10.5 0z" fill="#60A5FA" />
    <path d="M16.5 10.5A1.5 1.5 0 0 1 18 12v7.5a1.5 1.5 0 0 1-3 0V12a1.5 1.5 0 0 1 1.5-1.5z" fill="#EF4444" />
  </svg>
);

/* ─── SVG Progress Ring ─── */
function ProgressRing({ progress, color, size = 100 }: { progress: number; color: string; size?: number }) {
  const ref = useRef<SVGCircleElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });
  const strokeWidth = 3;
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <svg width={size} height={size} className="absolute inset-0 -rotate-90">
      {/* Track */}
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth={strokeWidth} />
      {/* Animated dashed orbit */}
      <circle
        cx={size / 2} cy={size / 2} r={radius + 8} fill="none"
        stroke={`${color}15`} strokeWidth={1} strokeDasharray="4 6"
        className="animate-dash-flow"
      />
      {/* Progress arc */}
      <circle
        ref={ref}
        cx={size / 2} cy={size / 2} r={radius} fill="none"
        stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={isInView ? circumference - (clampedProgress / 100) * circumference : circumference}
        style={{ transition: "stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)", filter: `drop-shadow(0 0 6px ${color}60)` }}
      />
    </svg>
  );
}

/* ─── Platform Data ─── */
interface PlatformCard {
  name: string;
  icon: React.FC;
  color: string;
  url: string;
  maxProblems: number; // for progress ring percentage
}

const platforms: PlatformCard[] = [
  { name: "LeetCode", icon: LeetCodeIcon, color: "#FFA116", url: "https://leetcode.com/u/user1199KS/", maxProblems: 3500 },
  { name: "GeeksforGeeks", icon: GFGIcon, color: "#2F8D46", url: "https://www.geeksforgeeks.org/profile/nawazishhamslm", maxProblems: 2000 },
  { name: "CodeChef", icon: CodeChefIcon, color: "#D4A84B", url: "https://www.codechef.com/users/afridishahid16", maxProblems: 4000 },
  { name: "Codeforces", icon: CodeforcesIcon, color: "#60A5FA", url: "https://codeforces.com/profile/Nawazishhassan", maxProblems: 3000 },
];

/* ─── Main Component ─── */
export default function CodingProfiles() {
  const [stats, setStats] = useState<{
    leetcode: number; gfg: number; codechef: number; codeforces: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/coding-stats")
      .then((r) => r.json())
      .then((data) => { setStats(data); setLoading(false); })
      .catch(() => { setStats({ leetcode: 450, gfg: 368, codechef: 312, codeforces: 50 }); setLoading(false); });
  }, []);

  const counts = stats ? [stats.leetcode, stats.gfg, stats.codechef, stats.codeforces] : [0, 0, 0, 0];
  const totalSolved = counts.reduce((a, b) => a + b, 0);

  return (
    <section id="coding-profiles" className="py-28 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }} />

      {/* Floating gradient blobs */}
      <motion.div
        className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-[#A78BFA]/5 blur-[120px] pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-[10%] w-80 h-80 rounded-full bg-[#F23FA0]/4 blur-[120px] pointer-events-none"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#22D1EE]/3 blur-[140px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#A78BFA]/70 px-4 py-1.5 rounded-full border border-[#A78BFA]/15 bg-[#A78BFA]/[0.03]">
              &lt;/&gt; Problem Solving
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#F23FA0] to-[#22D1EE] animate-shimmer">
              Coding Profiles
            </span>
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Building consistency, one problem at a time
          </p>
        </motion.div>

        {/* Total Solved — Hero Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="relative">
            {/* Pulsing ring behind total */}
            <div className="absolute inset-0 rounded-full border border-white/5 animate-pulse-ring" style={{ width: 120, height: 120, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
            <div className="absolute inset-0 rounded-full border border-white/3 animate-pulse-ring" style={{ width: 160, height: 160, top: "50%", left: "50%", transform: "translate(-50%, -50%)", animationDelay: "1s" }} />

            <div className="relative glass rounded-2xl px-10 py-5 border border-white/10 flex items-center gap-4">
              <div className="flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tabular-nums">
                  {loading ? (
                    <span className="inline-block w-24 h-14 bg-white/5 rounded-lg animate-pulse" />
                  ) : (
                    <><AnimatedCounter value={totalSolved} duration={2.5} />+</>
                  )}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500 mt-1">
                  problems solved
                </span>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B8FF57] to-[#22D1EE]">4</span>
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500 mt-1">platforms</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-5xl mx-auto">
          {platforms.map((platform, index) => {
            const count = counts[index];
            const progress = (count / platform.maxProblems) * 100;

            return (
              <TiltCard
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + index * 0.12, duration: 0.6, ease: "easeOut" }}
                className="group relative rounded-2xl flex flex-col items-center text-center
                           cursor-pointer overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {/* Animated gradient border on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${platform.color}20, transparent 40%, transparent 60%, ${platform.color}10)`,
                  }}
                />

                {/* Shimmer sweep on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(105deg, transparent 40%, ${platform.color}08 50%, transparent 60%)`,
                    backgroundSize: "200% 100%",
                    animation: "shimmer 2s linear infinite",
                  }}
                />

                {/* Content wrapper with padding */}
                <div className="relative z-10 p-6 md:p-7 flex flex-col items-center w-full">
                  {/* Icon with orbital rings & progress ring */}
                  <div className="relative w-[100px] h-[100px] mb-5 flex items-center justify-center">
                    <ProgressRing progress={progress} color={platform.color} size={100} />
                    <OrbitalRing color={platform.color} size={130} speed="25s" />
                    <OrbitalRing color={platform.color} size={155} speed="35s" reverse />

                    {/* Icon center */}
                    <motion.div
                      className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{
                        background: `radial-gradient(circle at 30% 30%, ${platform.color}20, rgba(255,255,255,0.03))`,
                        border: `1px solid ${platform.color}15`,
                      }}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <platform.icon />
                    </motion.div>

                    {/* Floating particles */}
                    <Particles color={platform.color} count={3} />
                  </div>

                  {/* Counter */}
                  <div className="relative mb-1 min-h-[44px] flex items-center justify-center">
                    {loading ? (
                      <div className="h-10 w-14 rounded-lg bg-white/5 animate-pulse" />
                    ) : (
                      <motion.span
                        className="text-3xl md:text-4xl font-bold tabular-nums"
                        style={{ color: platform.color, textShadow: `0 0 30px ${platform.color}30` }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        <AnimatedCounter value={count} />
                      </motion.span>
                    )}
                  </div>

                  {/* Label */}
                  <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em] font-medium mb-4">
                    Problems Solved
                  </p>

                  {/* Platform name — appears on hover with slide-up */}
                  <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-xs font-medium text-gray-400">{platform.name}</span>
                    <svg className="w-3 h-3 text-gray-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
