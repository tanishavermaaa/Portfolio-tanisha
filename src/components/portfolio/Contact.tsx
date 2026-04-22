import { useState } from "react";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import SplitReveal from "./SplitReveal";
import Magnetic from "./Magnetic";

const GMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=tanishavermaa4@gmail.com&su=Lets%20work%20together";
const EMAIL_ADDRESS = "tanishavermaa4@gmail.com";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tanisha-verma-98657025a/" },
  { label: "GitHub", href: "https://github.com/tanishavermaaa" },
  { label: "Email", href: GMAIL_COMPOSE_URL },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
      toast.success("Email copied");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <section id="contact" className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <p className="eyebrow md:col-span-2">(Contact)</p>
          <p className="md:col-span-3 mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            05 / Let's talk
          </p>
        </div>

        <SplitReveal as="h2" className="display text-[14vw] md:text-[11vw] leading-[0.85] text-balance mb-12">
          Have an <em className="italic">idea</em>?
        </SplitReveal>

        <div className="grid md:grid-cols-12 gap-12 items-end mb-24">
          <p className="md:col-span-5 text-lg md:text-xl text-foreground/80 leading-relaxed">
            I'm open to freelance, internships and collaborations. Reach out. Let's make something that lasts longer than a scroll.
          </p>
          <div className="md:col-span-4 md:col-start-9 flex md:justify-end">
            <Magnetic strength={0.4}>
              <a
                href={GMAIL_COMPOSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-8 rounded-full bg-foreground text-background mono text-[11px] uppercase tracking-[0.2em] hover:bg-foreground/90 transition-colors"
              >
                Start a project
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Email line */}
        <div className="flex items-center justify-between border-t border-foreground/10 py-8 mb-8">
          <p className="eyebrow">— Direct</p>
          <div className="flex items-center gap-3">
            <a
              href={GMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="display text-2xl md:text-4xl underline underline-offset-8 decoration-1 hover:decoration-[hsl(var(--accent))] transition-colors"
            >
              {EMAIL_ADDRESS}
            </a>
            <button
              onClick={handleCopy}
              aria-label="Copy email"
              className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
        </div>

        {/* Social row */}
        <div className="grid grid-cols-3 gap-px bg-foreground/10 border-y border-foreground/10">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background p-6 md:p-8 flex items-center justify-between hover:bg-foreground hover:text-background transition-colors"
            >
              <span className="display text-2xl md:text-4xl">{s.label}</span>
              <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
