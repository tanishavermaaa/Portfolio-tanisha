import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skills = [
  { name: "Java", icon: "☕" },
  { name: "JavaScript", icon: "JS" },
  { name: "React", icon: "⚛" },
  { name: "Node.js", icon: "⬢" },
  { name: "Express", icon: "Ex" },
  { name: "MongoDB", icon: "🍃" },
  { name: "REST APIs", icon: "↔" },
  { name: "Git", icon: "⎇" },
  { name: "GitHub", icon: "G" },
  { name: "Postman", icon: "✉" },
  { name: "HTML", icon: "</>" },
  { name: "CSS", icon: "#" },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[140px] -z-10" />

      <div className="container">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills &"
          highlight="Tools"
          intro="A combination of development technologies and tools I use to build modern, responsive, and scalable digital products."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center gap-3 aspect-square transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-glow-primary hover:border-primary/30">
                <div className="w-12 h-12 rounded-xl bg-gradient-glass flex items-center justify-center font-display text-xl text-foreground/90 group-hover:text-gradient transition-all duration-500">
                  {s.icon}
                </div>
                <p className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                  {s.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
