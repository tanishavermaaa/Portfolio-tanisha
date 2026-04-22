import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import SplitReveal from "./SplitReveal";
import tracker from "@/assets/project-tracker.jpg";
import quiz from "@/assets/project-quiz.jpg";
import restaurant from "@/assets/project-restaurant.jpg";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    n: "01",
    title: "Job Application Tracker",
    tag: "Full-Stack · MERN",
    year: "2025",
    image: tracker,
    repo: "https://github.com/tanishavermaaa/Job-Application-Tracker",
  },
  {
    n: "02",
    title: "Quiz Game",
    tag: "Frontend · Interactive",
    year: "2025",
    image: quiz,
    repo: "https://github.com/tanishavermaaa/Quiz-game",
  },
  {
    n: "03",
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

  useGSAP(
    () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const getScrollAmount = () => Math.max(0, track.scrollWidth - window.innerWidth);

        const tween = gsap.to(track, {
          x: () => -getScrollAmount(),
          ease: "none",
        });

        const st = ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          anticipatePin: 1,
          scrub: 1,
          animation: tween,
          invalidateOnRefresh: true,
        });

        return () => {
          st.kill();
          tween.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="projects" className="relative bg-foreground text-background">
      {/* Header band */}
      <div className="px-6 md:px-10 pt-20 pb-8">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid md:grid-cols-12 gap-8 mb-8">
            <p className="eyebrow md:col-span-2 text-background/60">​Projects</p>
            <p className="md:col-span-3 mono text-[11px] uppercase tracking-[0.18em] text-background/60">
              ​
            </p>
          </div>
          <SplitReveal as="h2" className="display text-6xl md:text-8xl lg:text-9xl text-balance">
            Things I've <em className="italic opacity-70">built</em> recently.
          </SplitReveal>
        </div>
      </div>

      {/* Horizontal pinned track */}
      <div className="overflow-hidden">
        <div ref={trackRef} className="flex gap-8 md:gap-16 pl-6 md:pl-10 pr-[20vw] py-8 will-change-transform">
          {projects.map((p) => (
            <a
              key={p.n}
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative shrink-0 w-[85vw] md:w-[55vw] lg:w-[42vw]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-background/5">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4 mono text-[11px] uppercase tracking-[0.2em] bg-background/90 text-foreground px-2 py-1 rounded-sm">
                  {p.n}
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-6">
                <h3 className="display text-3xl md:text-4xl lg:text-5xl">{p.title}</h3>
                <span className="mono text-[11px] uppercase tracking-[0.2em] text-background/60 shrink-0">{p.year}</span>
              </div>
              <p className="mono text-[11px] uppercase tracking-[0.2em] text-background/60 mt-2">{p.tag}</p>
            </a>
          ))}

          {/* End card */}
          <div className="shrink-0 w-[60vw] md:w-[35vw] flex items-center">
            <div>
              <p className="eyebrow text-background/60 mb-4">— End of selection</p>
              <p className="display text-4xl md:text-5xl text-balance">
                More on <a href="https://github.com/tanishavermaaa" target="_blank" rel="noopener noreferrer" className="italic underline underline-offset-8 decoration-1">GitHub</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
