import portrait from "@/assets/about-portrait.jpg";
import SplitReveal from "./SplitReveal";

const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <p className="eyebrow md:col-span-2">(About)</p>
          <p className="md:col-span-3 mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            01 / Profile
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7">
            <SplitReveal as="h2" className="display text-5xl md:text-7xl lg:text-8xl mb-12 text-balance">
              I design and build digital things that feel <em className="italic">considered</em>, polished and useful.
            </SplitReveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl text-base md:text-lg leading-relaxed text-foreground/80">
              <p className="text-justify">
                I have always been drawn to both creativity and technology. One side enjoys designing things that look beautiful and feel intuitive. The other loves building systems that work smoothly behind the scenes.
              </p>
              <p className="text-justify">
                As a final-year B.Tech IT student, I turn ideas into real products - designing interfaces, building backend logic, and connecting it into a complete experience. I gravitate to projects that solve practical problems.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={portrait}
                alt="Portrait of Tanisha Verma"
                loading="lazy"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>Fig. 01</span>
              <span>Tanisha Verma, 2026</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 border-y border-foreground/10">
          {[
            { k: "03+", v: "Featured Projects" },
            { k: "MERN", v: "Stack Focus" },
            { k: "02", v: "Real Engagements" },
            { k: "∞", v: "Curiosity" },
          ].map((s) => (
            <div key={s.v} className="bg-background p-6 md:p-8">
              <p className="display text-5xl md:text-6xl mb-2">{s.k}</p>
              <p className="mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
