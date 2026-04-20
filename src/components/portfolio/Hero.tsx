import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.1 + i * 0.12, ease: EASE },
  }),
};

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      {/* Floating orbs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-float-slow -z-10" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[140px] animate-float-medium -z-10" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-primary-glow/15 blur-[100px] animate-pulse-glow -z-10" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs md:text-sm text-muted-foreground mb-8"
          >
            <Sparkles size={14} className="text-primary-glow" />
            Available for freelance & internship opportunities
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] mb-6"
          >
            Tanisha <span className="text-gradient">Verma</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="text-lg md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-5 font-light"
          >
            I build impactful digital experiences with clean design and powerful backend systems.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="text-sm md:text-base text-muted-foreground mb-10 tracking-wide"
          >
            Final-year IT Student <span className="text-primary-glow/60 mx-2">•</span> MERN Stack Developer
            <span className="text-primary-glow/60 mx-2">•</span> Creative Designer
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-elegant hover:shadow-glow-primary transition-all duration-500 ease-smooth hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full glass-strong text-foreground font-medium hover:bg-foreground/5 transition-all duration-500 ease-smooth hover:-translate-y-0.5"
            >
              Let's Connect
            </button>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={5}
            initial="hidden"
            animate="show"
            className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            A developer who blends logic with creativity to build digital products that are functional,
            polished, and meaningful — work that solves real problems and leaves a strong impression.
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 rounded-full border border-foreground/20 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-gradient-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
