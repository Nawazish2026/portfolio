export default function Footer() {
  return (
    <footer className="py-10 relative">
      {/* Subtle separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent mb-8" />

      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-700 text-xs">
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-500">Nawazish Hassan</span>
        </p>
        <p className="text-gray-800 text-[11px] mt-1.5 tracking-wide">
          Next.js · Tailwind CSS · Framer Motion
        </p>
      </div>
    </footer>
  );
}
