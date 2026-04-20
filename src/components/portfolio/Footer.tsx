import { Github, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative pt-10 pb-10 border-t border-foreground/5">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-lg">
              <span className="text-gradient">Tanisha</span>
              <span className="text-foreground/80"> Verma</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Designed and built with creativity, code, and curiosity.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {[
              { icon: Github, href: "https://github.com/tanishavermaaa", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/tanisha-verma-98657025a/", label: "LinkedIn" },
              { icon: MessageCircle, href: "https://mail.google.com/mail/?view=cm&fs=1&to=tanishavermaa4@gmail.com&su=Lets%20work%20together", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="relative z-10 cursor-pointer w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-500 ease-smooth hover:-translate-y-0.5"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Tanisha Verma
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
