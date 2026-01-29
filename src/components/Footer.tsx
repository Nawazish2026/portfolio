export default function Footer() {
  return (
    <footer className="py-8 bg-black/40 backdrop-blur-md border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Nawazish Hassan. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Built with Next.js, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
}
