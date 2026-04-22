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
