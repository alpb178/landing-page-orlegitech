"use client";

import { useEffect, useRef, useState, type JSX } from "react";

const INTERSECTION_THRESHOLD = 0.15;
const INTERSECTION_ROOT_MARGIN = "0px 0px -100px 0px";

interface SectionAnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const SectionAnimation = ({
  children,
  delay = 0,
  className = "",
}: SectionAnimationProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: INTERSECTION_THRESHOLD,
        rootMargin: INTERSECTION_ROOT_MARGIN,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`
      transition-all ease-in-out
      duration-1200
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      ${className}
    `}
      style={
        delay > 0
          ? {
              transitionDelay: `${delay}ms`,
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
