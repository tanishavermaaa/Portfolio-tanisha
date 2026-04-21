import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight, Copy, Check, WifiLow } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const GMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=tanishavermaa4@gmail.com&su=Lets%20work%20together";
const EMAIL_ADDRESS = "​";

const links = [
  { label: "Email", value: EMAIL_ADDRESS, href: GMAIL_COMPOSE_URL, icon: Mail, external: true },
  { label: "LinkedIn", value: "in/tanisha-verma", href: "https://www.linkedin.com/in/tanisha-verma-98657025a/", icon: Linkedin, external: true },
  { label: "GitHub", value: "@tanishavermaaa", href: "https://github.com/tanishavermaaa", icon: Github, external: true },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy email");
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/15 blur-[160px]" />
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-glow" />
            Get in touch
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-8"
          >
            Let's Build Something{" "}
            <span className="text-gradient">Amazing</span> Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12"
          >
            I am always excited to connect, collaborate, and explore opportunities where I can contribute,
            learn, and create meaningful digital experiences. Whether it is a project, internship, freelance
            opportunity, or just a conversation about tech and design - I'd love to hear from you.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            href={GMAIL_COMPOSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative z-10 cursor-pointer inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-elegant hover:shadow-glow-primary transition-all duration-500 ease-smooth hover:-translate-y-0.5 mb-4"
          >
            Get In Touch
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-16"
          >
            <span>​</span>
            <span className="text-foreground/90">{EMAIL_ADDRESS}</span>
            <button
              type="button"
              onClick={handleCopy}
              aria-label="Copy email to clipboard"
              className="relative z-10 cursor-pointer w-7 h-7 rounded-md glass flex items-center justify-center hover:text-foreground hover:border-primary/30 transition-all duration-300"
            >
              {copied ? <Check size={13} className="text-primary-glow" /> : <WifiLow size={13} />}
            </button>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {links.map((l, i) => {
              const Icon = l.icon;
              return (
                <motion.a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative z-10 cursor-pointer glass-strong rounded-2xl p-5 flex items-center gap-4 text-left transition-all duration-500 ease-smooth hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow-primary"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-glass flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary-glow" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{l.label}</p>
                    <p className="text-sm text-foreground truncate">{l.value}</p>
                  </div>
                  <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
