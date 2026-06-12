import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import AutomationProjects from "@/components/AutomationProjects";
import WebProjects from "@/components/WebProjects";
import BelsoftProjects from "@/components/BelsoftProjects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import PageGlow from "@/components/PageGlow";

export default function Home() {
  return (
    <main className="relative">
      <PageGlow />
      <Hero />
      <About />
      <Experience />
      <AutomationProjects />
      <WebProjects />
      <BelsoftProjects />
      <Skills />
      <Contact />
    </main>
  );
}
