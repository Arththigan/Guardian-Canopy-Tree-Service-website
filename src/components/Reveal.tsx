import { useEffect, useRef, type ReactNode } from "react";

/**
 * Scroll reveal wrapper — children slide vertically into place when they
 * enter the viewport (and slide back out when they leave, so the motion
 * plays in both scroll directions).
 */
export function Reveal({
  children,
  delay = 0,
  from = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  from?: "up" | "down";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${from === "down" ? "reveal-down" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
