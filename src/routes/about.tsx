import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Parallax } from "@/components/Parallax";
import { Reveal } from "@/components/Reveal";
import { img } from "@/lib/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Guardian Canopy Tree Service | Family-Run Arborists" },
      {
        name: "description",
        content:
          "Meet Guardian Canopy Tree Service: a family-run crew of ISA certified arborists caring for Cedar Grove's mature trees since 2004.",
      },
      { property: "og:title", content: "About Guardian Canopy Tree Service" },
      {
        property: "og:description",
        content:
          "Family-run since 2004 — certified arborists, modern rigging and a preservation-first philosophy.",
      },
      { property: "og:image", content: img.aboutHero },
      { name: "twitter:image", content: img.aboutHero },
    ],
  }),
  component: About,
});

const values = [
  {
    title: "Preservation first",
    body: "Removal is the last option. If a tree can be saved with cabling, pruning or soil work, that's what we recommend.",
  },
  {
    title: "Safety without shortcuts",
    body: "Daily tailgate briefings, inspected rigging and a climber-plus-groundie rule on every single ascent.",
  },
  {
    title: "Straight answers",
    body: "You get the diagnosis in plain language, with photos from the canopy so you can see what we saw.",
  },
  {
    title: "Local roots",
    body: "We live here too. Half our jobs come from neighbours of the last house we worked on.",
  },
];

const team = [
  { name: "Dale Whitmore", role: "Founder · ISA Certified Arborist", years: "31 yrs climbing" },
  { name: "Priya Raman", role: "Operations & Plant Health Lead", years: "12 yrs in PHC" },
  { name: "Tomas Beck", role: "Crane & Rigging Foreman", years: "17 yrs removals" },
  { name: "Ellery Fox", role: "Climbing Arborist", years: "8 yrs canopy work" },
];

const timeline = [
  { year: "2004", body: "Dale starts Guardian Canopy with one bucket truck and a hand-drawn logo." },
  { year: "2011", body: "First crane added; the crew grows to nine full-time arborists." },
  { year: "2018", body: "Plant health care division launches to treat decline instead of removing it." },
  { year: "2026", body: "Three crews, 14,000+ trees cared for, still family-owned." },
];

function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Two decades of <span className="text-gradient-canopy">tree-first</span> thinking
          </>
        }
        description="Guardian Canopy started in 2004 with one truck, one climber and a stubborn belief that most trees marked for removal can be saved. Today three crews carry that same standard across the valley."
        image={img.aboutHero}
        imageAlt="Professional tree-service worker wearing high-visibility safety equipment"
      >
        <Link to="/contact" className="btn-3d">
          Talk to an arborist
        </Link>
      </PageHero>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <Parallax speed={0.09}>
            <Reveal>
              <div className="surface-3d overflow-hidden rounded-[2.5rem] p-3">
                <img
                  src={img.aboutStory}
                  alt="Arborist climbing a mature tree with professional safety equipment"
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-[26rem] w-full rounded-[2rem] object-cover"
                />
              </div>
            </Reveal>
          </Parallax>
          <div>
            <Reveal from="down">
              <span className="eyebrow">Our story</span>
              <h2 className="mt-5 text-3xl font-bold text-primary-deep sm:text-4xl">
                Built by climbers, run like a family business.
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Dale Whitmore spent eleven years as a utility line-clearance climber before starting
                Guardian Canopy. He'd watched too many healthy trees cut down for convenience — so he
                built a company where the assessment matters as much as the chainsaw.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Every arborist we hire trains on rigging physics and tree biology. That combination
                is why insurers, city parks departments and homeowners with 200-year-old oaks all
                call the same number.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <span className="eyebrow">What we stand for</span>
            <h2 className="mt-5 text-3xl font-bold text-primary-deep sm:text-4xl">
              Four values that decide every job.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 110} from={i % 2 ? "down" : "up"}>
                <div className="surface-3d h-full rounded-[2rem] p-8">
                  <h3 className="font-display text-xl font-bold text-primary-deep">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="eyebrow">Milestones</span>
              <h2 className="mt-5 text-3xl font-bold text-primary-deep sm:text-4xl">
                Growing one ring at a time.
              </h2>
            </Reveal>
            <div className="mt-8 space-y-4">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 110} from={i % 2 ? "down" : "up"}>
                  <div className="surface-3d flex items-center gap-5 rounded-3xl p-6">
                    <div className="sun-gradient flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-display text-sm font-bold text-accent-foreground">
                      {item.year}
                    </div>
                    <p className="text-sm text-secondary-foreground">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Parallax speed={0.12}>
            <Reveal from="down">
              <div className="surface-3d overflow-hidden rounded-[2.5rem] p-3">
                <img
                  src={img.aboutValues}
                  alt="Tree-service professional demonstrating skilled climbing and rigging"
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-[28rem] w-full rounded-[2rem] object-cover"
                />
              </div>
            </Reveal>
          </Parallax>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <span className="eyebrow">The crew</span>
            <h2 className="mt-5 text-3xl font-bold text-primary-deep sm:text-4xl">
              People you'll actually meet on site.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 110} from={i % 2 ? "down" : "up"}>
                <div className="surface-3d h-full rounded-[2rem] p-7 text-center">
                  <div className="canopy-gradient mx-auto flex h-16 w-16 items-center justify-center rounded-full font-display text-xl font-bold text-primary-foreground">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-primary-deep">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{member.role}</p>
                  <p className="mt-3 inline-block rounded-full bg-primary-soft px-3 py-1 font-display text-xs font-bold text-primary-deep">
                    {member.years}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <Reveal>
          <div className="canopy-gradient mx-auto max-w-6xl overflow-hidden rounded-[2.75rem] p-3">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <Parallax speed={0.05}>
                <img
                  src={img.aboutTeam}
                  alt="Safety-equipped tree worker completing an emergency tree removal"
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-72 w-full rounded-[2.25rem] object-cover md:h-80"
                />
              </Parallax>
              <div className="px-4 pb-8 md:pr-10 md:pb-0">
                <h2 className="text-3xl font-bold text-primary-foreground">
                  Hiring climbers, always.
                </h2>
                <p className="mt-4 text-primary-foreground/80">
                  If you can tie a running bowline and want to work for a company that saves trees
                  rather than clears them, send us a note.
                </p>
                <Link to="/contact" className="btn-3d-ghost mt-7">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
