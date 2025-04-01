import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ChatBot from "@/components/sections/chatbot";
// import ChatbotPage from "@/components/integrations/aichatbot";

export default function Home() {
  return (
    // <Preloader />
    <>
      <Header />
      <TracingBeam>
        <main className="flex min-h-screen flex-col overflow-hidden">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
          <ChatBot />
          {/* <ChatbotPage /> */}
        </main>
      </TracingBeam>
      <Footer />
    </>
  );
}
