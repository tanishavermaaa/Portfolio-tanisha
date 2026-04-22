import { ExternalLink } from "lucide-react";
import SplitReveal from "./SplitReveal";

const experiences = [
  {
    n: "01",
    year: "2026",
    role: "Intern",
    title: "Infosys",
    description:
      "Real-world industry exposure - development workflows, professional discipline, and writing reliable, maintainable code at scale.",
  },
  {
    n: "02",
    year: "2025 — Now",
    role: "Freelance Web Developer",
    title: "Snarip Studio",
    link: "https://snaripstudio.com",
    description:
      "Building responsive, custom websites for clients - from idea to launch, balancing usability with visual polish.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-10">
          <p className="eyebrow md:col-span-2">(Notes)</p>
          <p className="md:col-span-3 mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            04 / Journey
          </p>
        </div>

        <SplitReveal as="h2" className="display text-5xl md:text-7xl lg:text-8xl mb-16 max-w-5xl text-balance">
          A few chapters that <em className="italic">shaped</em> the work.
        </SplitReveal>

        <div className="border-t border-foreground/10">
          {experiences.map((e) => (
            <div
              key={e.n}
              className="group grid md:grid-cols-12 gap-6 py-10 md:py-14 border-b border-foreground/10 transition-colors"
            >
              <div className="md:col-span-1 mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground pt-2">
                {e.n}
              </div>
              <div className="md:col-span-2 mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground pt-2">
                {e.year}
              </div>
              <div className="md:col-span-4">
                <h3 className="display text-4xl md:text-5xl lg:text-6xl leading-none">
                  {e.title}
                </h3>
                <p className="mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-3">
                  {e.role}
                </p>
                {e.link && (
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm underline underline-offset-4 decoration-1 font-sans"
                  >
                    snaripstudio.com <ExternalLink size={12} />
                  </a>
                )}
              </div>
              <div className="md:col-span-5 text-base md:text-lg text-foreground/80 leading-relaxed">
                {e.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
