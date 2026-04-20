import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import tracker from "@/assets/project-tracker.jpg";
import quiz from "@/assets/project-quiz.jpg";
import restaurant from "@/assets/project-restaurant.jpg";

const projects = [
  {
    title: "Job Application Tracker",
    tag: "Full-Stack · MERN",
    image: tracker,
    description:
      "A smart and structured job tracking platform built to simplify the job search process — secure auth, CRUD, filtering, and an organized dashboard experience.",
    extended:
      "Built with the MERN stack to solve a real-world problem faced by students and job seekers managing applications across companies and roles. The system offers a clean workflow for adding, updating, sorting and managing entries.",
    highlights: [
      "MERN stack architecture",
      "Authentication & protected routes",
      "CRUD operations for job entries",
      "Filtering and sorting features",
      "Clean dashboard UX",
    ],
    repo: "https://github.com/tanishavermaaa/Job-Application-Tracker",
  },
  {
    title: "Quiz Game",
    tag: "Frontend · Interactive",
    image: quiz,
    description:
      "An interactive quiz-based web application designed to make learning and participation more engaging through a dynamic and enjoyable interface.",
    extended:
      "Built to create a fun, responsive quiz experience where users can answer questions, track progress and receive instant feedback — focused on engagement, interactivity and a polished product feel.",
    highlights: [
      "Interactive question flow",
      "Dynamic score tracking",
      "Real-time answer feedback",
      "Clean, responsive UI",
      "Engaging user experience",
    ],
    repo: "https://github.com/tanishavermaaa/Quiz-game",
  },
  {
    title: "Restaurant Backend System",
    tag: "Backend · REST APIs",
    image: restaurant,
    description:
      "A backend-focused project to manage restaurant operations using RESTful APIs, authentication and database integration.",
    extended:
      "Highlights backend fundamentals through secure API creation, structured data handling and scalable architecture — covering route handling, server-side logic and database design.",
    highlights: [
      "RESTful API design",
      "Authentication & secure access",
      "Backend logic & route handling",
      "Database integration",
      "Scalable, structured architecture",
    ],
    repo: "https://github.com/tanishavermaaa/Restaurant-Project",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[number]; index: number }) => {
  const reversed = index % 2 === 1;
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${reversed ? "lg:[&>div:first-child]:order-2" : ""}`}>
        {/* Image */}
        <div className="lg:col-span-7 relative">
          <div className="relative aspect-[16/11] rounded-3xl overflow-hidden glass-strong shadow-elegant">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 group-hover:opacity-30 transition-opacity duration-700 z-10 mix-blend-overlay" />
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              width={1280}
              height={896}
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-smooth group-hover:scale-105"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10 rounded-3xl pointer-events-none" />
          </div>
          <div className={`absolute -z-10 ${reversed ? "-left-10" : "-right-10"} top-1/3 w-72 h-72 rounded-full bg-primary/20 blur-[100px] opacity-60 group-hover:opacity-90 transition-opacity duration-700`} />
        </div>

        {/* Content */}
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.25em] text-primary-glow mb-4">{project.tag}</p>
          <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-5">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
          <p className="text-sm text-muted-foreground/80 leading-relaxed mb-6">{project.extended}</p>

          <ul className="space-y-2 mb-8">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm text-foreground/80">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-gradient-primary shrink-0" />
                {h}
              </li>
            ))}
          </ul>

          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 px-5 py-3 rounded-full glass-strong hover:bg-foreground/5 transition-all duration-500 ease-smooth hover:-translate-y-0.5"
          >
            <Github size={16} />
            <span className="text-sm font-medium">View Project Repo</span>
            <ArrowUpRight size={16} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-28 md:py-40">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Work"
          title="Featured"
          highlight="Projects"
          intro="A selection of projects that reflect my interest in full-stack development, practical problem-solving and building digital products with both functionality and user experience in mind."
        />
        <div className="space-y-28 md:space-y-40">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
