import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  stagger?: number;
  children?: ReactNode;
}

/**
 * TextReveal renders text with an ultra-smooth word-by-word reveal animation
 * triggered via IntersectionObserver when it scrolls into view.
 */
export function TextReveal({
  text,
  className = "",
  as: Component = "span",
  delay = 0,
  stagger = 40,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If IntersectionObserver is not supported, show immediately
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const words = text.split(/\s+/).filter(Boolean);

  return (
    <Component ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={`inline-block transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu mr-[0.26em] last:mr-0 ${
            isVisible
              ? "opacity-100 translate-y-0 filter-none"
              : "opacity-0 translate-y-2.5 blur-[1.5px]"
          }`}
          style={{
            transitionDelay: isVisible ? `${delay + i * stagger}ms` : "0ms",
            willChange: "opacity, transform, filter",
            backfaceVisibility: "hidden",
          }}
        >
          {word}
        </span>
      ))}
    </Component>
  );
}

/**
 * RevealBlock smoothly reveals an entire block (buttons, icons, cards)
 * with a customizable delay once visible.
 */
export function RevealBlock({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu ${
        isVisible
          ? "opacity-100 translate-y-0 filter-none"
          : "opacity-0 translate-y-3 blur-[2px]"
      } ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
        willChange: "opacity, transform, filter",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </div>
  );
}
