import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import AutomationProjects from "@/components/AutomationProjects";
import WebProjects from "@/components/WebProjects";
import BelsoftProjects from "@/components/BelsoftProjects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import PageGlow from "@/components/PageGlow";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="relative">
      <PageGlow />
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <AutomationProjects />
      <div className="section-divider" />
      <WebProjects />
      <div className="section-divider" />
      <BelsoftProjects />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Contact />
      <BackToTop />
    </main>
  );
}
