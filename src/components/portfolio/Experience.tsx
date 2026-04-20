import { motion } from "framer-motion";
import { ExternalLink, Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    title: "Infosys Internship",
    role: "Intern",
    description:
      "Gained real-world industry exposure by working in a professional environment, learning development workflows, strengthening technical understanding, and adapting to the discipline of software delivery in a large-scale organization.",
    extended:
      "This experience helped me understand how software development works beyond classroom projects — practical learning, structured problem-solving, teamwork, and writing clean, reliable, maintainable code in a professional setting.",
    highlights: [
      "Real-world development exposure",
      "Professional workflow understanding",
      "Technical learning and growth",
      "Structured software practices",
    ],
  },
  {
    title: "Freelancer — Snarip Studio",
    role: "Web Developer",
    link: "https://snaripstudio.com",
    linkLabel: "snaripstudio.com",
    description:
      "Worked on freelance web projects focused on building responsive, customized, and visually appealing digital solutions for clients.",
    extended:
      "Through freelancing, I learned to handle projects from idea to execution — understanding requirements, creating tailored designs, building functional websites and delivering solutions that balance usability with visual appeal.",
    highlights: [
      "Responsive website development",
      "Custom client-focused solutions",
      "Real-world problem solving",
      "Design and development collaboration",
      "End-to-end project experience",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-28 md:py-40">
      <div className="container">
        <SectionHeading
          eyebrow="Journey"
          title=""
          highlight="Experience"
          intro="Experiences that helped me grow not only as a developer, but also as a problem solver, collaborator, and builder."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {experiences.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="glass-strong rounded-3xl p-7 md:p-9 h-full transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-elegant hover:border-primary/30">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-glass flex items-center justify-center">
                    <Briefcase size={20} className="text-primary-glow" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{e.role}</span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-2">{e.title}</h3>
                {e.link && (
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary-glow hover:text-primary mb-5 transition-colors"
                  >
                    {e.linkLabel} <ExternalLink size={12} />
                  </a>
                )}

                <p className="text-muted-foreground leading-relaxed mb-4 mt-4">{e.description}</p>
                <p className="text-sm text-muted-foreground/80 leading-relaxed mb-6">{e.extended}</p>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent mb-6" />

                <ul className="space-y-2">
                  {e.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gradient-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
