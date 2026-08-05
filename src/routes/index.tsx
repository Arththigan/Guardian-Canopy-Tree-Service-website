import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Sparkles, TreeDeciduous, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { img } from "@/lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guardian Canopy Tree Service | Certified Arborists & Tree Care" },
      {
        name: "description",
        content:
          "Guardian Canopy Tree Service offers expert pruning, safe tree removal, 24/7 storm response and tree health care by ISA certified arborists.",
      },
      { property: "og:title", content: "Guardian Canopy Tree Service | Certified Arborists & Tree Care" },
      {
        property: "og:description",
        content:
          "Guardian Canopy Tree Service offers expert pruning, safe tree removal, 24/7 storm response and tree health care by ISA certified arborists.",
      },
      { property: "og:image", content: img.homeHero },
      { name: "twitter:image", content: img.homeHero },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "21", label: "Years climbing" },
  { value: "14k+", label: "Trees cared for" },
  { value: "24/7", label: "Storm response" },
  { value: "5.0", label: "Average rating" },
];

const highlights = [
  {
    title: "Certified arborists",
    body: "Every job is led by an ISA certified arborist who assesses structure, species and risk before a single cut.",
    icon: TreeDeciduous as LucideIcon,
  },
  {
    title: "Zero-damage rigging",
    body: "Crane-assisted lowering and lawn protection mats keep your turf, fences and roofline untouched.",
    icon: ShieldCheck as LucideIcon,
  },
  {
    title: "Clean-site promise",
    body: "We leave your property tidier than we found it — chips hauled, beds raked, driveway blown clean.",
    icon: Sparkles as LucideIcon,
  },
];

const steps = [
  { n: "01", title: "Free canopy assessment", body: "We walk the property, map every tree and flag real risk." },
  { n: "02", title: "Transparent written plan", body: "Fixed pricing, scope and timeline with no surprise line items." },
  { n: "03", title: "Precision crew day", body: "Roped, rigged and completed with full clean-up before we leave." },
];

/* ── Reusable sticky-stack wrapper ── */
function StickyStack({ children }: { children: React.ReactNode[] }) {
  return (
    <div className="relative">
      {children.map((child, i) => (
        <div
          key={i}
          className="sticky"
          style={{ top: `${80 + i * 22}px` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

function Home() {
  return (
    <div>
      <section className="px-4 pt-28 pb-16 sm:px-6 sm:pt-32">
        <div className="relative mx-auto min-h-[620px] max-w-[88rem] overflow-hidden rounded-[1.5rem] bg-[#063d28] shadow-[0_32px_90px_rgba(7,35,22,0.3)] sm:min-h-[680px] sm:rounded-[2.5rem] lg:min-h-0 lg:aspect-video">
          <img
            src="/images/guardian-canopy-hero.webp"
            srcSet="/images/guardian-canopy-hero-mobile.webp 768w, /images/guardian-canopy-hero.webp 1376w"
            sizes="(max-width: 768px) 100vw, 1376px"
            alt="Certified tree surgeon safely cutting a branch while secured with climbing ropes"
            width={1366}
            height={768}
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[68%_center] lg:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#063d28] via-[#063d28]/90 to-[#063d28]/5 sm:via-[#063d28]/75 lg:via-[#063d28]/20" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#042d1e]/55 to-transparent" />

          <div className="relative z-10 flex min-h-[620px] max-w-2xl flex-col justify-center px-7 py-20 text-white sm:min-h-[680px] sm:px-12 lg:min-h-0 lg:h-full lg:w-1/2 lg:px-[7.5%]">
            <span className="font-display text-xs font-bold tracking-[0.2em] text-[#ff9a45] uppercase">Guardian Canopy Tree Service</span>
            <h1 className="mt-5 text-4xl leading-[1.02] font-extrabold tracking-[-0.035em] sm:text-5xl lg:text-[clamp(2.7rem,4.1vw,4.5rem)]">
              Expert tree care, professionally managed.
            </h1>
            <p className="mt-5 text-lg font-semibold text-white/90 sm:text-xl">Your trusted certified arborists</p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              High-quality pruning, health assessments, removals and maintenance delivered with safety, care and expertise.
            </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex w-fit items-center justify-center gap-3 rounded-full bg-[#c94f00] px-7 py-3.5 font-display text-sm font-extrabold tracking-[0.02em] text-white uppercase shadow-[0_8px_24px_rgba(201,79,0,0.38)] transition hover:-translate-y-0.5 hover:bg-[#a94100] focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#063d28] sm:px-9 sm:py-4 sm:text-base"
          >
            <span>Get a free quote</span>
            <span aria-hidden="true" className="text-[1.4em] leading-none">›</span>
          </Link>
          </div>
        </div>
      </section>

      {/* Stats — normal 4-column grid */}
      <section className="px-6 pb-8">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100} from={i % 2 === 0 ? "up" : "down"}>
              <div className="surface-3d rounded-3xl p-6 text-center">
                <div className="font-display text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Highlights — normal 3-column grid */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <span className="eyebrow">Why Guardian Canopy</span>
            <h2 className="mt-5 max-w-2xl text-3xl font-bold text-primary-deep sm:text-4xl">
              Careful hands, heavy gear, and a deep respect for old trees.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <article className="surface-3d h-full rounded-[2rem] p-8">
                  <div className="sun-gradient flex h-14 w-14 items-center justify-center rounded-2xl shadow-md">
                    <item.icon className="h-7 w-7 text-accent-foreground" strokeWidth={2.2} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-primary-deep">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Split feature — steps sticky stack */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <Parallax speed={0.09}>
            <Reveal>
              <div className="surface-3d overflow-hidden rounded-[2.5rem] p-3">
                <img
                  src={img.homeCrew}
                  alt="Tree service arborist in safety gear working beside professional equipment"
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-80 w-full rounded-[2rem] object-cover sm:h-[28rem]"
                />
              </div>
            </Reveal>
          </Parallax>

          <div>
            <Reveal from="down">
              <span className="eyebrow">How it works</span>
              <h2 className="mt-5 text-3xl font-bold text-primary-deep sm:text-4xl">
                Three calm steps from first call to final sweep.
              </h2>
            </Reveal>
            <div className="mt-8">
              <StickyStack>
                {steps.map((step, i) => (
                  <Reveal key={step.n} delay={i * 130} from={i % 2 ? "down" : "up"}>
                    <div className="surface-3d mb-4 flex gap-5 rounded-3xl p-6">
                      <div className="canopy-gradient flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-display font-bold text-primary-foreground">
                        {step.n}
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-primary-deep">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">{step.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </StickyStack>
            </div>
          </div>
        </div>
      </section>

      {/* Storm band */}
      <section className="px-6 py-20">
        <Reveal>
          <div className="canopy-gradient relative mx-auto max-w-6xl overflow-hidden rounded-[2.75rem] p-3 shadow-2xl">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <Parallax speed={0.05}>
                <img
                  src={img.homeStorm}
                  alt="Rope-secured tree surgeon pruning hazardous branches"
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-72 w-full rounded-[2.25rem] object-cover md:h-96"
                />
              </Parallax>
              <div className="px-4 pb-8 md:pr-10 md:pb-0">
                <span className="font-display text-xs font-bold tracking-[0.2em] text-accent uppercase">
                  Emergency line open
                </span>
                <h2 className="mt-4 text-3xl font-bold text-primary-foreground sm:text-4xl">
                  Storm damage? We roll within the hour.
                </h2>
                <p className="mt-4 text-primary-foreground/80">
                  Fallen limbs on a roof, a split trunk leaning over the driveway — our on-call crew
                  is staffed every night of the year with cranes, chippers and traffic control.
                </p>
                <a href="tel:+17163338723" className="btn-3d-ghost mt-7">
                  Call +1 (716) 333-8723
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Testimonial + canopy image */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="surface-3d rounded-[2.5rem] p-9">
              <div className="text-5xl text-accent">"</div>
              <p className="text-lg leading-relaxed text-secondary-foreground">
                They took down a 90-foot fir eight feet from our sunroom without a single scuff on
                the gutters. The lead arborist explained every cut before it happened.
              </p>
              <div className="mt-6 font-display font-bold text-primary-deep">Marisol Devane</div>
              <div className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                Cedar Grove Homeowner
              </div>
            </div>
          </Reveal>
          <Parallax speed={0.11}>
            <Reveal from="down" delay={100}>
              <div className="surface-3d overflow-hidden rounded-[2.5rem] p-3">
                <img
                  src={img.homeCanopy}
                  alt="Certified arborist using a chainsaw and climbing harness for tree care"
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-80 w-full rounded-[2rem] object-cover"
                />
              </div>
            </Reveal>
          </Parallax>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-8">
        <Reveal>
          <div className="surface-3d mx-auto max-w-4xl rounded-[2.5rem] p-10 text-center">
            <h2 className="text-3xl font-bold text-primary-deep sm:text-4xl">
              Let's look at your trees together.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Free on-site assessment, honest recommendations, and a written quote the same week.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-3d">
                Request an estimate
              </Link>
              <Link to="/about" className="btn-3d-ghost">
                Meet the crew
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
