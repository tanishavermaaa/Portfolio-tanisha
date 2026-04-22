import Marquee from "./Marquee";

const Footer = () => {
  return (
    <footer className="relative bg-foreground text-background pt-16 pb-6 overflow-hidden">
      <Marquee slow>
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="display italic text-[18vw] md:text-[14vw] leading-[0.9]">
            Let's build — <span className="not-italic">Tanisha Verma</span> ✦
          </span>
        ))}
      </Marquee>

      <div className="px-6 md:px-10 max-w-[1500px] mx-auto mt-16 grid md:grid-cols-3 gap-6 mono text-[11px] uppercase tracking-[0.2em] text-background/60">
        <p>© {new Date().getFullYear()} — Tanisha Verma</p>
        <p className="md:text-center">Designed & built with care</p>
        <p className="md:text-right">India · IST</p>
      </div>
    </footer>
  );
};

export default Footer;
