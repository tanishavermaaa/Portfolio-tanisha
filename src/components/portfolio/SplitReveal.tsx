import { useRef, ElementType, ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Props {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  type?: "words" | "chars" | "lines";
  stagger?: number;
  delay?: number;
  duration?: number;
  trigger?: "scroll" | "load";
  start?: string;
}

const SplitReveal = ({
  as: Tag = "div",
  children,
  className = "",
  type = "words",
  stagger = 0.06,
  delay = 0,
  duration = 1.1,
  trigger = "scroll",
  start = "top 85%",
}: Props) => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const split = new SplitType(ref.current, {
        types: type === "lines" ? "lines,words" : type === "chars" ? "words,chars" : "words",
        lineClass: "split-mask",
        wordClass: type === "words" ? "split-inner" : type === "chars" ? "split-mask" : "split-inner",
        charClass: "split-inner",
      });

      const targets =
        type === "chars" ? split.chars : type === "lines" ? split.words : split.words;
      if (!targets || targets.length === 0) return;

      // Wrap in masks if not already
      if (type === "words") {
        targets.forEach((w) => {
          if (w.parentElement?.classList.contains("split-mask")) return;
          const mask = document.createElement("span");
          mask.className = "split-mask";
          w.parentNode?.insertBefore(mask, w);
          mask.appendChild(w);
        });
      }

      gsap.set(targets, { yPercent: 115, opacity: 0 });

      const anim = () =>
        gsap.to(targets, {
          yPercent: 0,
          opacity: 1,
          duration,
          delay,
          stagger,
          ease: "expo.out",
        });

      if (trigger === "load") {
        anim();
      } else {
        ScrollTrigger.create({
          trigger: ref.current,
          start,
          once: true,
          onEnter: anim,
        });
      }
    },
    { scope: ref }
  );

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
};

export default SplitReveal;
