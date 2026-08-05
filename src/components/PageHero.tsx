import type { ReactNode } from "react";
import { Parallax } from "./Parallax";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-6 text-4xl leading-[1.05] font-bold text-gradient-canopy sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          </Reveal>
          {children && (
            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap gap-4">{children}</div>
            </Reveal>
          )}
        </div>

        <Parallax speed={0.06}>
          <Reveal from="down" delay={120}>
            <div className="surface-3d relative overflow-hidden rounded-[2.5rem] p-3">
              <img
                src={image}
                alt={imageAlt}
                width={1200}
                height={900}
                className="h-[22rem] w-full rounded-[2rem] object-cover sm:h-[26rem]"
              />
              <div className="sun-gradient absolute -right-6 -bottom-6 h-28 w-28 rounded-full opacity-70 blur-2xl" />
            </div>
          </Reveal>
        </Parallax>
      </div>
    </section>
  );
}
