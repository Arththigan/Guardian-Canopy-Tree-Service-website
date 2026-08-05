import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { PageHero } from "@/components/PageHero";
import { Parallax } from "@/components/Parallax";
import { Reveal } from "@/components/Reveal";
import { img } from "@/lib/images";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Tree Services — Pruning, Removal & Stump Grinding | Guardian Canopy" },
      {
        name: "description",
        content:
          "Structural pruning, hazard tree removal, emergency storm work, stump grinding, plant health care and planting by Guardian Canopy's certified arborists.",
      },
      { property: "og:title", content: "Tree Services by Guardian Canopy Tree Service" },
      {
        property: "og:description",
        content:
          "Six core arborist services: pruning, removal, emergency response, plant health care, stump grinding and planting.",
      },
      { property: "og:image", content: img.servicesHero },
      { name: "twitter:image", content: img.servicesHero },
    ],
  }),
  component: Services,
});

const services = [
  {
    title: "Structural Pruning",
    image: img.servicePruning,
    alt: "Professional arborist pruning a mature tree while secured with a safety harness",
    body: "Crown thinning, deadwood removal and clearance cuts that follow ANSI A300 standards — shaping trees for strength, not just looks.",
    points: ["Crown reduction & thinning", "Deadwood & sucker removal", "Roof and utility clearance"],
    price: "from $340",
  },
  {
    title: "Hazard Tree Removal",
    image: img.serviceRemoval,
    alt: "Safety-equipped arborist sectioning a tree trunk with a chainsaw",
    body: "Tight-quarters take-downs using crane assist and section rigging so nothing lands where it shouldn't.",
    points: ["Crane-assisted removals", "Sectional dismantling", "Full debris haul-off"],
    price: "from $780",
  },
  {
    title: "24/7 Emergency Response",
    image: img.serviceEmergency,
    alt: "Tree cleanup crew clearing fallen branches after storm damage",
    body: "Storm crews on call every night with chainsaws, chippers, lighting and traffic control ready to roll.",
    points: ["Under-1-hour dispatch", "Roof & vehicle extraction", "Insurance documentation"],
    price: "24/7 dispatch",
  },
  {
    title: "Plant Health Care",
    image: img.serviceHealth,
    alt: "Tree-care professional inspecting and preparing safety equipment before work",
    body: "Soil injections, deep-root fertilization and pest diagnosis to reverse decline before it becomes a removal.",
    points: ["Soil & root analysis", "Disease and pest treatment", "Seasonal monitoring plan"],
    price: "from $210",
  },
  {
    title: "Stump Grinding",
    image: img.serviceStump,
    alt: "Tree-service worker processing cut timber after stump and tree removal",
    body: "Grind-outs six to twelve inches below grade, backfilled with clean chip so you can plant or sod right away.",
    points: ["Below-grade grinding", "Root chase removal", "Topsoil backfill option"],
    price: "from $150",
  },
  {
    title: "Planting & Selection",
    image: img.servicePlanting,
    alt: "Tree-care professional planting a young tree in prepared soil",
    body: "Species matched to your soil, sun and setbacks — planted properly so the tree thrives for fifty years.",
    points: ["Site & species matching", "Air-spade planting", "Two-year establishment care"],
    price: "from $290",
  },
];

const guarantees = [
  { title: "Fully insured", body: "$2M liability plus full workers' comp on every crew member." },
  { title: "Written scope", body: "Fixed pricing you approve before a truck arrives." },
  { title: "Clean exit", body: "Chips hauled, beds raked, driveway blown clean." },
];

function StackedServices() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative">
      {services.map((service, i) => {
        const topOffset = 80 + i * 24;

        return (
          <div
            key={service.title}
            className="sticky"
            style={{ top: `${topOffset}px` }}
          >
            <article className="surface-3d mb-6 flex flex-col overflow-hidden rounded-[2rem] transition-all duration-500">
              <img
                src={service.image}
                alt={service.alt}
                loading="lazy"
                width={900}
                height={600}
                className="h-52 w-full object-cover"
              />
              <div className="flex flex-col p-7">
                <div className="mb-4 flex items-center gap-3">
                  <span className="canopy-gradient flex h-8 w-8 items-center justify-center rounded-full font-display text-xs font-bold text-primary-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-border" />
                  <span className="rounded-full bg-primary-soft px-3 py-1 font-display text-xs font-bold text-primary-deep">
                    {service.price}
                  </span>
                </div>
                <h2 className="font-display text-xl font-bold text-primary-deep">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
                <ul className="mt-5 space-y-2 text-sm text-secondary-foreground">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
}

function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Full-canopy care, <span className="text-gradient-canopy">start to stump</span>
          </>
        }
        description="Six core services cover every stage of a tree's life — from choosing the right sapling to safely retiring a hazardous giant. All performed by climbers trained in modern rigging."
        image={img.servicesHero}
        imageAlt="Professional arborist maintaining a mature urban tree in full safety gear"
      >
        <Link to="/contact" className="btn-3d">
          Get a quote
        </Link>
        <Link to="/gallery" className="btn-3d-ghost">
          See our work
        </Link>
      </PageHero>

      {/* Sticky Stack Cards */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="mb-10 text-center text-sm font-semibold tracking-[0.16em] text-muted-foreground uppercase">
              Scroll to explore all services
            </p>
          </Reveal>
          <StackedServices />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="eyebrow">Our guarantee</span>
              <h2 className="mt-5 text-3xl font-bold text-primary-deep sm:text-4xl">
                Every job carries the same three promises.
              </h2>
            </Reveal>
            <div className="mt-8 space-y-4">
              {guarantees.map((item, i) => (
                <Reveal key={item.title} delay={i * 120} from={i % 2 ? "down" : "up"}>
                  <div className="surface-3d rounded-3xl p-6">
                    <h3 className="font-display text-lg font-bold text-primary-deep">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Parallax speed={0.1}>
            <Reveal from="down">
              <div className="surface-3d overflow-hidden rounded-[2.5rem] p-3">
                <img
                  src={img.servicesForest}
                  alt="Safety-equipped tree worker completing professional removal work"
                  loading="lazy"
                  width={1000}
                  height={800}
                  className="h-96 w-full rounded-[2rem] object-cover"
                />
              </div>
            </Reveal>
          </Parallax>
        </div>
      </section>
    </div>
  );
}
