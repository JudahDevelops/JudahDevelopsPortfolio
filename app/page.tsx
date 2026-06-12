import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import AutomationProjects from "@/components/AutomationProjects";
import WebProjects from "@/components/WebProjects";
import BelsoftProjects from "@/components/BelsoftProjects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
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
