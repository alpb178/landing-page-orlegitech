"use client";

import { useEffect, useRef, useState } from "react";

interface SectionAnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function SectionAnimation({
  children,
  delay = 0,
  className = "",
}: SectionAnimationProps) {
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
        threshold: 0.15, // Se activa cuando el 15% de la sección es visible
        rootMargin: "0px 0px -100px 0px", // Se activa un poco antes de que entre completamente
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
