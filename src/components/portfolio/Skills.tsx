import Marquee from "./Marquee";
import SplitReveal from "./SplitReveal";
import { Terminal, Database, Shield, Layers, BookOpen, Trophy } from "lucide-react";

const marqueeSkills = [
  "React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "JavaScript", "TypeScript",
  "REST APIs", "Socket.io", "WebSockets", "Git", "GitHub", "Figma", "Java", "Docker"
];

const skillCategories = [
  {
    n: "01",
    title: "Programming & Web Dev",
    icon: Terminal,
    skills: ["Java", "JavaScript", "TypeScript (basic)", "HTML5", "CSS3", "React.js", "Node.js", "Express.js", "Bootstrap", "REST API Design"],
  },
  {
    n: "02",
    title: "Database & Real-Time",
    icon: Database,
    skills: ["MySQL", "MongoDB", "Mongoose", "Database Optimization", "Indexing", "Socket.io", "WebSockets", "Event-Driven Architecture"],
  },
  {
    n: "03",
    title: "Auth, Security & DevOps",
    icon: Shield,
    skills: ["JWT", "OAuth 2.0", "Role-Based Access Control (RBAC)", "bcryptjs", "Git", "GitHub", "Postman", "Docker (basic)", "CI/CD (GitHub Actions)"],
  },
  {
    n: "04",
    title: "Methodologies & Design",
    icon: Layers,
    skills: ["Agile/Scrum", "MVC Architecture", "API Testing", "Code Review", "Figma (Wireframing, Prototyping)", "Responsive Design"],
  },
  {
    n: "05",
    title: "Relevant Coursework",
    icon: BookOpen,
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management"],
  },
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
          A broad set of capabilities, built <em className="italic">deliberately</em>.
        </SplitReveal>
      </div>

      {/* Marquee bands */}
      <div className="mt-24 space-y-2 border-y border-foreground/10 py-10">
        <Marquee>
          {marqueeSkills.map((s, i) => (
            <span key={`a-${i}`} className="display text-6xl md:text-8xl leading-none">
              {s} <span className="text-[hsl(var(--accent))]">✦</span>
            </span>
          ))}
        </Marquee>
        <Marquee reverse slow>
          {marqueeSkills.map((s, i) => (
            <span key={`b-${i}`} className="display italic text-5xl md:text-7xl leading-none text-foreground/40">
              {s} <span className="opacity-60">/</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* Bento-style grouped grid */}
      <div className="px-6 md:px-10 max-w-[1500px] mx-auto mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="bg-background p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{cat.n} / Capability</span>
                  <cat.icon size={16} className="text-foreground/40" />
                </div>
                <h3 className="display text-3xl md:text-4xl mb-6">{cat.title}</h3>
                
                <ul className="space-y-2.5">
                  {cat.skills.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-sm text-foreground/80 font-sans leading-tight">
                      <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))] shrink-0 mt-1.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Card 06: Highlighted Problem Solving */}
          <div className="bg-background p-8 flex flex-col justify-between relative overflow-hidden group">
            {/* Accent overlay gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,hsl(var(--accent)/0.08),transparent_70%)] transition-opacity" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className="mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">06 / Algorithms</span>
                <Trophy size={16} className="text-[hsl(var(--accent))]" />
              </div>
              <h3 className="display text-3xl md:text-4xl mb-6">Problem Solving</h3>
              
              <p className="mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">LeetCode Showcase</p>
              
              <div className="flex items-baseline gap-3 mb-5">
                <span className="display text-6xl md:text-7xl font-light text-[hsl(var(--accent))] tracking-tight">1496</span>
                <span className="mono text-xs uppercase tracking-[0.1em] text-muted-foreground">Rating</span>
              </div>
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[hsl(var(--accent)/0.1)] border border-[hsl(var(--accent)/0.25)] text-[hsl(var(--accent))] mono text-[10px] uppercase tracking-[0.15em] font-semibold">
                ✦ Top 10% Globally
              </div>
            </div>
            
            <p className="relative z-10 mt-8 text-xs text-muted-foreground leading-relaxed">
              Demonstrated strong analytical capacity and problem-solving velocity by solving algorithmic puzzles and data structures challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
