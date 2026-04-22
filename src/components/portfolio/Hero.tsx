import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import Marquee from "./Marquee";
import Magnetic from "./Magnetic";
import { ArrowDownRight } from "lucide-react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Massive split-text headline reveal
      const headlines = gsap.utils.toArray<HTMLElement>(".hero-line");
      headlines.forEach((el) => {
        const split = new SplitType(el, { types: "words", wordClass: "split-inner" });
        split.words?.forEach((w) => {
          const mask = document.createElement("span");
          mask.className = "split-mask";
          w.parentNode?.insertBefore(mask, w);
          mask.appendChild(w);
        });
      });

      const inners = document.querySelectorAll(".hero-line .split-inner");
      const meta = gsap.utils.toArray<HTMLElement>(".hero-meta");

      gsap.set(inners, { yPercent: 115, opacity: 0 });
      gsap.set(meta, { y: 24, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.to(inners, { yPercent: 0, opacity: 1, duration: 1.4, stagger: 0.05 }, 0.3)
        .to(meta, { y: 0, opacity: 1, duration: 1, stagger: 0.1 }, 0.9);
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-10 px-6 md:px-10 overflow-hidden"
    >
      {/* Top meta row */}
      <div className="hero-meta flex items-center justify-between mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <span>​</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))] animate-pulse" />
          Available for freelance & internship
        </span>
      </div>

      {/* Right-side animated decorative cluster (desktop only) */}
      <div className="hidden lg:block pointer-events-none absolute right-8 xl:right-12 top-1/2 -translate-y-1/2 z-10">
        {/* Rotating circular badge */}
        <div className="hero-orbit relative w-[180px] h-[180px] xl:w-[220px] xl:h-[220px]">
          {/* Spinning text ring */}
          <svg
            viewBox="0 0 200 200"
            className="hero-spin absolute inset-0 w-full h-full"
            aria-hidden="true"
          >
            <defs>
              <path
                id="hero-circle"
                d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
              />
            </defs>
            <text className="mono fill-foreground/70" style={{ fontSize: "11px", letterSpacing: "0.32em" }}>
              <textPath href="#hero-circle">
                CREATIVE DEVELOPER · PORTFOLIO 2026 · CREATIVE DEVELOPER ·{" "}
              </textPath>
            </text>
          </svg>

          {/* Inner ring */}
          <div className="absolute inset-[22%] rounded-full border border-foreground/15" />

          {/* Center dot */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-foreground" />

          {/* Orbiting accent dot */}
          <div className="hero-orbit-dot absolute inset-0">
            <span className="absolute left-1/2 top-0 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[hsl(var(--accent))] shadow-[0_0_12px_hsl(var(--accent)/0.6)]" />
          </div>
        </div>

        {/* Floating status card */}
        <div className="hero-float mt-6 w-[180px] xl:w-[220px] border border-foreground/15 bg-background/60 backdrop-blur-sm rounded-md p-3">
          <div className="flex items-center justify-between mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>Status</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))] animate-pulse" />
              Live
            </span>
          </div>
          <p className="mt-2 text-sm leading-snug">
            Currently <em className="italic">crafting</em> interfaces in India.
          </p>
        </div>
      </div>

      {/* Vertical scroll indicator */}
      <div className="hero-scroll hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-3 mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <span className="[writing-mode:vertical-rl] rotate-180">Scroll to explore</span>
        <span className="relative w-px h-16 bg-foreground/20 overflow-hidden">
          <span className="hero-scroll-line absolute inset-x-0 top-0 h-1/2 bg-foreground" />
        </span>
      </div>

      {/* Massive headline */}
      <div className="flex-1 flex items-center">
        <h1 className="display text-[18vw] md:text-[14vw] lg:text-[13vw] leading-[0.85] -tracking-[0.04em] w-full">
          <span className="hero-line block">Tanisha</span>
          <span className="hero-line block italic text-foreground/85 pl-[8vw]">Verma<span className="text-[hsl(var(--accent))]">.</span></span>
        </h1>
      </div>

      {/* Bottom row: tagline + CTA */}
      <div className="grid md:grid-cols-12 gap-8 items-end">
        <div className="hero-meta md:col-span-5">
          <p className="eyebrow mb-3">​</p>
          <p className="text-xl md:text-2xl leading-snug text-pretty">
            Final-year IT student blending <em className="italic">logic</em> and <em className="italic">design</em> into living digital products.
          </p>
        </div>

        <div className="hero-meta md:col-span-4 md:col-start-7">
          <p className="eyebrow mb-3">— Note</p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            A developer who builds things that solve real problems and leave a strong, polished impression.
          </p>
        </div>

        <div className="hero-meta md:col-span-3 flex md:justify-end">
          <Magnetic strength={0.4}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 px-6 py-6 rounded-full bg-foreground text-background mono text-[11px] uppercase tracking-[0.2em] hover:bg-foreground/90 transition-colors"
            >
              View Work
              <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </Magnetic>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 inset-x-0 border-y border-foreground/10 py-3 bg-background">
        <Marquee>
          {["Creative Developer", "✦", "MERN Stack", "✦", "Frontend Engineering", "✦", "UI Design", "✦", "Available 2026", "✦", "Based in India", "✦"].map((t, i) => (
            <span key={i} className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{t}</span>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Hero;
