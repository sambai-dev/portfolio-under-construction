"use client";

import { useEffect, useRef, RefObject } from "react";

/**
 * Custom hook for scroll-triggered CSS animations.
 * Uses IntersectionObserver to add 'in-view' class to elements
 * with 'animate-on-scroll' class when they enter the viewport.
 *
 * @returns A ref to attach to the container element
 *
 * @example
 * ```tsx
 * function MySection() {
 *   const sectionRef = useScrollAnimation();
 *   return (
 *     <section ref={sectionRef}>
 *       <h2 className="animate-on-scroll">Title</h2>
 *     </section>
 *   );
 * }
 * ```
 */
export function useScrollAnimation(): RefObject<HTMLElement | null> {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".animate-on-scroll")
              .forEach((el) => {
                el.classList.add("in-view");
              });
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
