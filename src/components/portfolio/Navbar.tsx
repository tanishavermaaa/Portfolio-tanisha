import { useEffect, useState } from "react";
import gsap from "gsap";

const links = [
  { label: "Index", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Notes", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const hh = d.getHours().toString().padStart(2, "0");
      const mm = d.getMinutes().toString().padStart(2, "0");
      const ss = d.getSeconds().toString().padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    gsap.from(".nav-item", {
      y: -20,
      opacity: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 1,
      ease: "expo.out",
    });
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-40 px-6 md:px-10 py-5 mix-blend-difference text-[hsl(36_28%_94%)]">
      <div className="flex items-center justify-between">
        <a href="#home" className="nav-item mono text-[11px] uppercase tracking-[0.2em]">
          Tanisha Verma
          <span className="opacity-50"> — IT × Dev</span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-item mono text-[11px] uppercase tracking-[0.2em] opacity-80 hover:opacity-100 transition-opacity"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-item mono text-[11px] uppercase tracking-[0.2em] tabular-nums">
          IST · {time}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
