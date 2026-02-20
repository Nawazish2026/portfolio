import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CodingProfiles from "@/components/CodingProfiles";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import IOSSection from "@/components/IOSSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <CodingProfiles />
      <IOSSection />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
