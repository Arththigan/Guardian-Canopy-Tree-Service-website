import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Parallax } from "@/components/Parallax";
import { Reveal } from "@/components/Reveal";
import { img } from "@/lib/images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Guardian Canopy Tree Service | Free Estimates" },
      {
        name: "description",
        content:
          "Request a free tree assessment from Guardian Canopy Tree Service. Call +1(716)333-8723 or send the form — 24/7 emergency storm response available.",
      },
      { property: "og:title", content: "Contact Guardian Canopy Tree Service" },
      {
        property: "og:description",
        content: "Free estimates, same-week quotes and round-the-clock emergency tree response.",
      },
      { property: "og:image", content: img.contactHero },
      { name: "twitter:image", content: img.contactHero },
    ],
  }),
  component: Contact,
});

const details = [
  { label: "Phone", value: "+1 (716) 333-8723", note: "Mon–Sat 7am–6pm · 24/7 emergency" },
  { label: "Email", value: "crew@guardiancanopy.com", note: "Replies within one business day" },
  { label: "Address", value: "1192 Main St, Buffalo, New York", note: "Estimates on site, not by phone" },
  { label: "Service area", value: "Buffalo & surrounding areas", note: "Valley-wide storm coverage" },
];

const faqs = [
  {
    q: "Is the estimate really free?",
    a: "Yes. An arborist walks your property, photographs anything of concern and leaves a written scope with fixed pricing.",
  },
  {
    q: "How fast can you come out after a storm?",
    a: "Emergency crews dispatch within the hour, day or night. Non-urgent storm cleanup is typically scheduled within 48 hours.",
  },
  {
    q: "Do you clean up everything?",
    a: "Every job includes chip haul-off, raking and a blown-clean driveway. Firewood rounds can be stacked on request.",
  },
];

function Contact() {
  return (
    <div>
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            Tell us about your <span className="text-gradient-canopy">trees</span>
          </>
        }
        description="Send a few details and we'll schedule a free on-site assessment — usually within three days. For anything urgent, call the emergency line and a crew will be dispatched immediately."
        image={img.contactHero}
        imageAlt="Tree-care professional ready to assess a customer property"
      >
        <a href="tel:+17163338723" className="btn-3d">
          Call +1 (716) 333-8723
        </a>
        <a href="mailto:crew@guardiancanopy.com" className="btn-3d-ghost">
          Email the crew
        </a>
      </PageHero>

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="surface-3d overflow-hidden rounded-[2.5rem] p-4">
              <h2 className="mb-4 font-display text-2xl font-bold text-primary-deep px-4 pt-2">
                Request a free estimate
              </h2>
              <iframe
                src="https://link.kdlead.com/widget/form/bJlPk4O6mFViDy16sylU"
                style={{ width: "100%", height: "877px", border: "none", borderRadius: "8px" }}
                id="inline-bJlPk4O6mFViDy16sylU"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form 0"
                data-height="877"
                data-layout-iframe-id="inline-bJlPk4O6mFViDy16sylU"
                data-form-id="bJlPk4O6mFViDy16sylU"
                title="Form 0"
              />
            </div>
          </Reveal>

          <div className="space-y-6">
            {details.map((detail, i) => (
              <Reveal key={detail.label} delay={i * 100} from={i % 2 ? "down" : "up"}>
                <div className="surface-3d rounded-3xl p-6">
                  <div className="font-display text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">
                    {detail.label}
                  </div>
                  <div className="mt-2 font-display text-lg font-bold text-primary-deep">
                    {detail.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{detail.note}</div>
                </div>
              </Reveal>
            ))}
            <Parallax speed={0.08}>
              <Reveal from="down">
                <div className="surface-3d overflow-hidden rounded-[2rem] p-3">
                  <img
                    src={img.contactOffice}
                    alt="Arborist performing precise chainsaw work during a tree-service project"
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-56 w-full rounded-[1.6rem] object-cover"
                  />
                </div>
              </Reveal>
            </Parallax>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <Parallax speed={0.1}>
            <Reveal>
              <div className="surface-3d overflow-hidden rounded-[2.5rem] p-3">
                <img
                  src={img.contactMap}
                  alt="Professional bucket-truck worker prepared for elevated tree care"
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-[24rem] w-full rounded-[2rem] object-cover"
                />
              </div>
            </Reveal>
          </Parallax>
          <div>
            <Reveal from="down">
              <span className="eyebrow">Common questions</span>
              <h2 className="mt-5 text-3xl font-bold text-primary-deep sm:text-4xl">
                Before you call.
              </h2>
            </Reveal>
            <div className="mt-8 space-y-4">
              {faqs.map((faq, i) => (
                <Reveal key={faq.q} delay={i * 120} from={i % 2 ? "down" : "up"}>
                  <div className="surface-3d rounded-3xl p-6">
                    <h3 className="font-display text-base font-bold text-primary-deep">{faq.q}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
