import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import Cursor from "@/components/portfolio/Cursor";
import SmoothScroll from "@/components/portfolio/SmoothScroll";

const Index = () => {
  return (
    <SmoothScroll>
      <Cursor />
      <main className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
};

export default Index;
