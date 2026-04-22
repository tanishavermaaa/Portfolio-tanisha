import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  reverse?: boolean;
  slow?: boolean;
  className?: string;
}

const Marquee = ({ children, reverse, slow, className = "" }: Props) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`marquee ${slow ? "marquee-slow" : ""} ${reverse ? "marquee-reverse" : ""}`}>
        <div className="flex gap-16 shrink-0 items-center">{children}</div>
        <div className="flex gap-16 shrink-0 items-center" aria-hidden>{children}</div>
      </div>
    </div>
  );
};

export default Marquee;
