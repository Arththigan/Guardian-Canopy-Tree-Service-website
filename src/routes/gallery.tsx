import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { img } from "@/lib/images";
import DriftWall from "@/components/DriftWall";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Recent Tree Work | Guardian Canopy Tree Service" },
      {
        name: "description",
        content:
          "Browse recent Guardian Canopy projects: crown restorations, crane removals, storm recovery and canopy health work across the Cedar Grove valley.",
      },
      { property: "og:title", content: "Gallery of Tree Work — Guardian Canopy" },
      {
        property: "og:description",
        content: "Crown restorations, crane removals and storm recovery from our recent job book.",
      },
      { property: "og:image", content: img.galleryHero },
      { name: "twitter:image", content: img.galleryHero },
    ],
  }),
  component: Gallery,
});

const projects = [
  { image: img.gallery1, title: "Ridgeline crown restoration",   href: undefined },
  { image: img.gallery2, title: "Driveway clearance corridor",   href: undefined },
  { image: img.gallery4, title: "Heritage oak cabling",          href: undefined },
  { image: img.gallery5, title: "Winter storm recovery",         href: undefined },
  { image: img.gallery6, title: "Backyard canopy lift",          href: undefined },
  { image: img.gallery7, title: "Autumn deadwood sweep",         href: undefined },
  { image: img.gallery8, title: "Acreage hazard survey",         href: undefined },
  { image: img.gallery9, title: "Disease treatment program",     href: undefined },
  { image: img.gallery3, title: "Forest preservation work",      href: undefined },
  { image: img.gallery10, title: "Canopy health check",          href: undefined },
  { image: img.gallery11, title: "Young tree establishment",     href: undefined },
  { image: img.gallery12, title: "Tree planting project",        href: undefined },
];

function Gallery() {
  return (
    <div>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            Recent work from the <span className="text-gradient-canopy">job book</span>
          </>
        }
        description="A slice of the last few seasons — restorations, removals and storm recovery. Every project starts with an assessment and ends with a swept driveway."
        image={img.galleryHero}
        imageAlt="Professional arborist carrying out precision tree work with safety equipment"
      >
        <Link to="/contact" className="btn-3d">
          Start your project
        </Link>
      </PageHero>

      {/* DriftWall */}
      <section className="py-6">
        <div style={{ height: 600 }}>
          <DriftWall
            items={projects}
            columns={5}
            tileWidth={200}
            tileHeight={132}
            gap={18}
            tilt={16}
            turn={-14}
            perspective={1200}
            depth={120}
            speed={42}
            direction="up"
            variance={0.45}
            parallax={0.6}
            lift={64}
            fade={0.6}
            dim={0.55}
            overlayColor="#060010"
            radius={14}
            roll={0}
            pauseOnHover={false}
            grayscale={false}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <Reveal>
          <div className="surface-3d mx-auto max-w-4xl rounded-[2.5rem] p-10 text-center">
            <h2 className="text-3xl font-bold text-primary-deep sm:text-4xl">
              Want your tree in the next set?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Book a free assessment and we'll send canopy photos with our recommendation.
            </p>
            <Link to="/contact" className="btn-3d mt-8">
              Book an assessment
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
