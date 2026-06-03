import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import SplitReveal from "./SplitReveal";
import { useIsMobile } from "@/hooks/use-mobile";
import tracker from "@/assets/project-tracker.jpg";
import quiz from "@/assets/project-quiz.jpg";
import restaurant from "@/assets/project-restaurant.jpg";
import inventory from "@/assets/project-inventory.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    n: "01",
    title: "Inventory Management System",
    tag: "Full-Stack · MERN",
    year: "2025",
    image: inventory,
    repo: "https://github.com/tanishavermaaa/Inventory-Management-System.git",
    demo: "https://inventorymngt.netlify.app/",
  },
  {
    n: "02",
    title: "Job Application Tracker",
    tag: "Full-Stack · MERN",
    year: "2025",
    image: tracker,
    repo: "https://github.com/tanishavermaaa/Job-Application-Tracker",
  },
  {
    n: "03",
    title: "Quiz Game",
    tag: "Frontend · Interactive",
    year: "2025",
    image: quiz,
    repo: "https://github.com/tanishavermaaa/Quiz-game",
    demo: "https://quezz-game.netlify.app/",
  },
  {
    n: "04",
    title: "Restaurant Backend",
    tag: "Backend · REST APIs",
    year: "2024",
    image: restaurant,
    repo: "https://github.com/tanishavermaaa/Restaurant-Project",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useGSAP(
    () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!section) return;
      if (!track || isMobile) {
        ScrollTrigger.refresh();
        return;
      }

      gsap.set(track, { x: 0 });

      const getScrollAmount = () => Math.max(0, track.scrollWidth - window.innerWidth);
      if (getScrollAmount() === 0) return;

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        overwrite: true,
      });

      const st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${getScrollAmount()}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        animation: tween,
        invalidateOnRefresh: true,
      });

      const refresh = () => ScrollTrigger.refresh();
      const images = Array.from(track.querySelectorAll("img")).filter((image) => !image.complete);
      images.forEach((image) => image.addEventListener("load", refresh));
      requestAnimationFrame(refresh);

      return () => {
        images.forEach((image) => image.removeEventListener("load", refresh));
        st.kill();
        tween.kill();
        gsap.set(track, { clearProps: "transform" });
      };
    },
    { scope: sectionRef, dependencies: [isMobile] }
  );

  const projectCards = projects.map((p) => (
    <div
      key={p.n}
      className="group relative shrink-0 w-full md:w-[46vw] lg:w-[34vw]"
    >
      <a
        href={p.demo || p.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-[16/10] overflow-hidden rounded-sm bg-background/5"
      >
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105 grayscale group-hover:grayscale-0"
        />
        <div className="absolute top-4 left-4 mono text-[11px] uppercase tracking-[0.2em] bg-background/90 text-foreground px-2 py-1 rounded-sm">
          {p.n}
        </div>
        <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <ArrowUpRight size={16} />
        </div>
      </a>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="display text-2xl md:text-3xl lg:text-4xl">{p.title}</h3>
        <span className="mono shrink-0 text-[10px] uppercase tracking-[0.2em] text-background/60">{p.year}</span>
      </div>
      <p className="mono mt-1 text-[10px] uppercase tracking-[0.2em] text-background/60">{p.tag}</p>
      <div className="mt-3 flex gap-4 text-[10px] mono uppercase tracking-[0.2em]">
        {p.demo && (
          <a
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-background/60 hover:text-background hover:underline transition-colors flex items-center gap-1"
          >
            Live Demo <ArrowUpRight size={10} />
          </a>
        )}
        <a
          href={p.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-background/60 hover:text-background hover:underline transition-colors flex items-center gap-1"
        >
          Source Code <ArrowUpRight size={10} />
        </a>
      </div>
    </div>
  ));

  return (
    <section ref={sectionRef} id="projects" className="relative bg-foreground text-background min-h-screen md:min-h-0 md:h-screen md:flex md:flex-col md:justify-center overflow-hidden py-12 md:py-0">
      {/* Header band */}
      <div className="px-6 md:px-10 pb-6">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid md:grid-cols-12 gap-4 mb-2">
            <p className="eyebrow md:col-span-2 text-background/60">Projects</p>
            <p className="md:col-span-3 mono text-[11px] uppercase tracking-[0.18em] text-background/60">
              02 / Work
            </p>
          </div>
          <SplitReveal as="h2" className="display text-5xl md:text-7xl lg:text-8xl text-balance">
            Things I've <em className="italic opacity-70">built</em> recently.
          </SplitReveal>
        </div>
      </div>

      {/* Horizontal pinned track */}
      <div className="overflow-visible md:overflow-hidden">
        {isMobile ? (
          <div className="flex flex-col gap-8 px-6 py-8">
            {projectCards}
            <div className="flex items-center">
              <div>
                <p className="eyebrow mb-4 text-background/60">— End of selection</p>
                <p className="display text-4xl text-balance">
                  More on <a href="https://github.com/tanishavermaaa" target="_blank" rel="noopener noreferrer" className="italic underline underline-offset-8 decoration-1">GitHub</a>.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div ref={trackRef} className="flex gap-12 pl-10 pr-[20vw] py-4 will-change-transform">
            {projectCards}
            <div className="flex w-[30vw] shrink-0 items-center">
              <div>
                <p className="eyebrow mb-4 text-background/60">— End of selection</p>
                <p className="display text-4xl md:text-5xl text-balance">
                  More on <a href="https://github.com/tanishavermaaa" target="_blank" rel="noopener noreferrer" className="italic underline underline-offset-8 decoration-1">GitHub</a>.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
