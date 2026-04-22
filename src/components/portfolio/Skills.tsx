import Marquee from "./Marquee";
import SplitReveal from "./SplitReveal";

const skills = [
  "React", "Node.js", "Express", "MongoDB", "JavaScript", "TypeScript",
  "REST APIs", "Tailwind", "GSAP", "Framer Motion", "Git", "GitHub",
  "Postman", "Figma", "HTML", "CSS", "Java",
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden">
      <div className="px-6 md:px-10 max-w-[1500px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <p className="eyebrow md:col-span-2">(Toolkit)</p>
          <p className="md:col-span-3 mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            03 / Stack
          </p>
        </div>

        <SplitReveal as="h2" className="display text-5xl md:text-7xl lg:text-8xl text-balance max-w-5xl">
          A small set of tools, used <em className="italic">deliberately</em>.
        </SplitReveal>
      </div>

      {/* Marquee bands */}
      <div className="mt-24 space-y-2 border-y border-foreground/10 py-10">
        <Marquee>
          {skills.map((s, i) => (
            <span key={`a-${i}`} className="display text-6xl md:text-8xl leading-none">
              {s} <span className="text-[hsl(var(--accent))]">✦</span>
            </span>
          ))}
        </Marquee>
        <Marquee reverse slow>
          {skills.map((s, i) => (
            <span key={`b-${i}`} className="display italic text-5xl md:text-7xl leading-none text-foreground/40">
              {s} <span className="opacity-60">/</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* Grid list */}
      <div className="px-6 md:px-10 max-w-[1500px] mx-auto mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
          {skills.slice(0, 12).map((s, i) => (
            <div key={s} className="bg-background p-5 flex items-baseline justify-between">
              <span className="text-base md:text-lg">{s}</span>
              <span className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
