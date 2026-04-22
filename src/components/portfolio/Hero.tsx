import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import heroBg from "@/assets/hero-bg.jpg";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // --- Heading reveal: split into per-word masked spans ---
      const headline = headlineRef.current!;
      const text = headline.textContent || "";
      const words = text.trim().split(/\s+/);
      headline.innerHTML = words
        .map((w) => {
          const isGradient = w.toLowerCase().includes("verma");
          const cls = isGradient ? "text-gradient" : "";
          return `<span class="reveal-word inline-block overflow-hidden align-bottom"><span class="reveal-inner inline-block ${cls}">${w}</span></span>`;
        })
        .join(" ");

      const inners = headline.querySelectorAll(".reveal-inner");

      gsap.set(inners, { yPercent: 110, opacity: 0 });
      gsap.set(
        [badgeRef.current, subRef.current, metaRef.current, descRef.current],
        { y: 24, opacity: 0 }
      );
      const ctaItems = ctaRef.current?.children || [];
      gsap.set(ctaItems, { y: 24, opacity: 0, scale: 0.96 });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.to(badgeRef.current, { y: 0, opacity: 1, duration: 1.0 }, 0.1)
        .to(inners, { yPercent: 0, opacity: 1, duration: 1.2, stagger: 0.08 }, 0.2)
        .to(subRef.current, { y: 0, opacity: 1, duration: 1.0 }, 0.55)
        .to(metaRef.current, { y: 0, opacity: 1, duration: 1.0 }, 0.7)
        .to(
          ctaItems,
          { y: 0, opacity: 1, scale: 1, duration: 0.9, stagger: 0.12 },
          0.85
        )
        .to(descRef.current, { y: 0, opacity: 1, duration: 1.0 }, 1.05);

      // --- Floating loop on every depth layer ---
      const layers = gsap.utils.toArray<HTMLElement>(".scene-layer");
      layers.forEach((layer, i) => {
        gsap.to(layer, {
          y: i % 2 === 0 ? -28 : 28,
          x: i % 2 === 0 ? 18 : -18,
          duration: 6 + i * 1.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // --- Subtle glow pulse on gradient word ---
      const gradientWord = headline.querySelector(".text-gradient");
      if (gradientWord) {
        gsap.to(gradientWord, {
          filter: "drop-shadow(0 0 24px hsl(270 100% 75% / 0.55))",
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // --- Mouse parallax with depth (3D feel) ---
      const xTos = layers.map((l) =>
        gsap.quickTo(l, "x", { duration: 1.2, ease: "power3.out" })
      );
      const yTos = layers.map((l) =>
        gsap.quickTo(l, "y", { duration: 1.2, ease: "power3.out" })
      );
      const rxTo = sceneRef.current
        ? gsap.quickTo(sceneRef.current, "rotateX", { duration: 1.4, ease: "power3.out" })
        : null;
      const ryTo = sceneRef.current
        ? gsap.quickTo(sceneRef.current, "rotateY", { duration: 1.4, ease: "power3.out" })
        : null;

      const onMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const nx = (e.clientX / innerWidth - 0.5) * 2; // -1..1
        const ny = (e.clientY / innerHeight - 0.5) * 2;
        layers.forEach((_, i) => {
          const depth = 14 + i * 12;
          xTos[i](nx * depth);
          yTos[i](ny * depth);
        });
        ryTo?.(nx * 4);
        rxTo?.(-ny * 4);
      };

      window.addEventListener("mousemove", onMove, { passive: true });
      return () => window.removeEventListener("mousemove", onMove);
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
      style={{ perspective: "1200px" }}
    >
      {/* === 3D-feel layered scene === */}
      <div
        ref={sceneRef}
        className="absolute inset-0 -z-10"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        {/* Background image (deepest) */}
        <div
          className="scene-layer absolute inset-0 opacity-50 will-change-transform"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "translateZ(-200px) scale(1.15)",
          }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

        {/* Aurora */}
        <div className="aurora" />

        {/* Depth layers — blurred shapes at varying Z */}
        <div
          className="scene-layer absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/25 blur-[120px] will-change-transform"
          style={{ transform: "translateZ(-120px)" }}
        />
        <div
          className="scene-layer absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-accent/25 blur-[140px] will-change-transform"
          style={{ transform: "translateZ(-80px)" }}
        />
        <div
          className="scene-layer absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-primary-glow/20 blur-[100px] will-change-transform"
          style={{ transform: "translateZ(-40px)" }}
        />

        {/* Glassy floating panes for premium 3D feel */}
        <div
          className="scene-layer absolute top-[18%] right-[12%] w-56 h-56 md:w-72 md:h-72 rounded-3xl glass border border-foreground/10 will-change-transform"
          style={{ transform: "translateZ(40px) rotate(8deg)" }}
        />
        <div
          className="scene-layer absolute bottom-[14%] left-[8%] w-40 h-40 md:w-56 md:h-56 rounded-3xl glass-strong border border-foreground/10 will-change-transform"
          style={{ transform: "translateZ(80px) rotate(-10deg)" }}
        />

        {/* Soft conic highlight (front-most ambient) */}
        <div
          className="scene-layer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[60%] opacity-30 blur-3xl will-change-transform"
          style={{
            background:
              "conic-gradient(from 120deg at 50% 50%, hsl(var(--primary) / 0.25), transparent 30%, hsl(var(--accent) / 0.25), transparent 70%)",
            transform: "translateZ(120px)",
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(var(--background))_100%)]" />
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs md:text-sm text-muted-foreground mb-8"
          >
            <Sparkles size={14} className="text-primary-glow" />
            Available for freelance & internship opportunities
          </div>

          <h1
            ref={headlineRef}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] mb-6"
          >
            Tanisha <span className="text-gradient">Verma</span>
          </h1>

          <p
            ref={subRef}
            className="text-base md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-5 font-light"
          >
            Blending logic and design into living products
            <span className="inline-block w-[2px] h-5 md:h-7 ml-1 align-middle bg-primary-glow animate-blink" />
          </p>

          <p
            ref={metaRef}
            className="text-xs md:text-base text-muted-foreground mb-10 tracking-wide"
          >
            Final-year IT Student <span className="text-primary-glow/60 mx-2">•</span> MERN Stack Developer
            <span className="text-primary-glow/60 mx-2">•</span> Creative Designer
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={() =>
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="magnetic group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-elegant hover:shadow-glow-primary transition-all duration-500 ease-smooth"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=tanishavermaa4@gmail.com&su=Lets%20work%20together"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 cursor-pointer inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full glass-strong text-foreground font-medium hover:bg-foreground/5 transition-all duration-500 ease-smooth hover:-translate-y-0.5"
            >
              Let's Connect
            </a>
          </div>

          <p
            ref={descRef}
            className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            A developer who blends logic with creativity to build digital products that are functional,
            polished, and meaningful - work that solves real problems and leaves a strong impression.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 rounded-full border border-foreground/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-gradient-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
