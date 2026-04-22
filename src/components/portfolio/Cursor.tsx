import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const xDot = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power3" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power3" });
    const xRing = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3" });

    const onMove = (e: MouseEvent) => {
      xDot(e.clientX); yDot(e.clientY);
      xRing(e.clientX); yRing(e.clientY);
    };

    const grow = () => gsap.to(ring, { scale: 1.8, duration: 0.4, ease: "power3.out" });
    const shrink = () => gsap.to(ring, { scale: 1, duration: 0.4, ease: "power3.out" });

    const bind = () => {
      document.querySelectorAll<HTMLElement>("a, button, [data-cursor='hover']").forEach(el => {
        el.addEventListener("mouseenter", grow);
        el.addEventListener("mouseleave", shrink);
      });
    };
    const unbind = () => {
      document.querySelectorAll<HTMLElement>("a, button, [data-cursor='hover']").forEach(el => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    bind();
    const obs = new MutationObserver(() => { unbind(); bind(); });
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      unbind();
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
};

export default Cursor;
