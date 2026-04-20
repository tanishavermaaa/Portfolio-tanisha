import { motion } from "framer-motion";
import portrait from "@/assets/about-portrait.jpg";

const paragraphs = [
  "I have always been drawn to both creativity and technology. While one side of me enjoys designing things that look beautiful and feel intuitive, the other side loves building systems that work smoothly behind the scenes. That combination naturally led me into full-stack development.",
  "As a final-year B.Tech IT student, I enjoy turning ideas into real digital experiences — from designing user interfaces to building backend logic and connecting everything into a complete product. I am especially interested in projects that solve practical problems, improve workflows, and create better user experiences.",
  "For me, development is not only about writing code. It is about creating something useful, thoughtful, and impactful. I enjoy learning, experimenting, and building products that are clean, modern, and meaningful.",
];

const About = () => {
  return (
    <section id="about" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute -left-40 top-1/3 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] -z-10" />

      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image / visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-strong shadow-elegant">
              <img
                src={portrait}
                alt="Portrait of Tanisha Verma"
                loading="lazy"
                width={896}
                height={1120}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-strong rounded-2xl px-5 py-4 shadow-card">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Currently</p>
              <p className="font-display text-lg">Final-year IT Student</p>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-gradient-primary blur-2xl opacity-50 -z-10" />
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-glow" />
              About Me
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8"
            >
              Where <span className="text-gradient">creativity</span> meets clean code.
            </motion.h2>

            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              {paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-3 gap-4 mt-12"
            >
              {[
                { k: "3+", v: "Featured Projects" },
                { k: "MERN", v: "Stack Focus" },
                { k: "∞", v: "Curiosity" },
              ].map((s) => (
                <div key={s.v} className="glass rounded-2xl p-5 text-center">
                  <p className="font-display text-2xl md:text-3xl text-gradient">{s.k}</p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">{s.v}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
