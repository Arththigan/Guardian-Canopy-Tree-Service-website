import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Guardian Canopy Tree Service" },
      {
        name: "description",
        content:
          "Read the Terms and Conditions for Guardian Canopy Tree Service — covering SMS messaging, intellectual property, disclaimers and more.",
      },
    ],
  }),
  component: Terms,
});

const BUSINESS_NAME = "Guardian Canopy Tree Service";
const ADDRESS = "1192 Main St, Buffalo, New York";
const PHONE = "+1 (716) 333-8723";
const PHONE_RAW = "7163338723";
const EMAIL = "crew@guardiancanopy.com";

function Terms() {
  return (
    <div className="px-6 pt-36 pb-24">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <Reveal>
          <span className="eyebrow">Legal</span>
          <h1 className="mt-6 text-4xl font-bold text-primary-deep sm:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            <strong>Effective Date:</strong> January 19, 2025 &nbsp;|&nbsp;{" "}
            <strong>Last Updated:</strong> July 9, 2026
          </p>
          <p className="mt-4 text-base leading-relaxed text-secondary-foreground">
            Welcome to {BUSINESS_NAME}. By accessing this website or using our services, you agree
            to be bound by these Terms and Conditions. If you do not agree with any part of these
            terms, please do not use our website or services.
          </p>
        </Reveal>

        <div className="mt-12 space-y-10">

          {/* 1 */}
          <Reveal delay={60}>
            <section className="surface-3d rounded-[2rem] p-8">
              <h2 className="font-display text-xl font-bold text-primary-deep">1. Business Identity</h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary-foreground">
                These Terms and Conditions govern your use of the services provided by{" "}
                <strong>{BUSINESS_NAME}</strong>, located at {ADDRESS}. Contact:{" "}
                <a href={`tel:+1${PHONE_RAW}`} className="text-primary underline">{PHONE}</a> |{" "}
                <a href={`mailto:${EMAIL}`} className="text-primary underline">{EMAIL}</a>.
              </p>
            </section>
          </Reveal>

          {/* 2 */}
          <Reveal delay={70}>
            <section className="surface-3d rounded-[2rem] p-8">
              <h2 className="font-display text-xl font-bold text-primary-deep">2. Age Requirement (18+)</h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary-foreground">
                By using this website or enrolling in our services, including SMS messaging, you
                confirm that you are at least 18 years of age. Our SMS program is not directed to
                individuals under 18.
              </p>
            </section>
          </Reveal>

          {/* 3 */}
          <Reveal delay={80}>
            <section className="surface-3d rounded-[2rem] p-8">
              <h2 className="font-display text-xl font-bold text-primary-deep">3. Terminology</h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary-foreground">
                "Client," "You," and "Your" refers to the user of this website. "The Company,"
                "We," "Our," and "Us" refers to {BUSINESS_NAME}.
              </p>
            </section>
          </Reveal>

          {/* 4 */}
          <Reveal delay={90}>
            <section className="surface-3d rounded-[2rem] p-8 space-y-6">
              <h2 className="font-display text-xl font-bold text-primary-deep">4. SMS Messaging Terms of Service</h2>

              <div>
                <h3 className="font-display text-base font-bold text-primary-deep">4a. Program Description &amp; Message Types</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary-foreground">
                  By providing your phone number and checking the SMS consent checkbox on our
                  contact forms, you agree to receive recurring automated text messages from{" "}
                  {BUSINESS_NAME}. Messages may include:
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-secondary-foreground">
                  {[
                    "Free estimate confirmations and scheduling notifications",
                    "Appointment reminders and project status updates",
                    "Customer support and service follow-up communications",
                    "Promotional offers and seasonal announcements related to our tree care services",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-base font-bold text-primary-deep">4b. Message Frequency</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary-foreground">
                  Message frequency varies based on your service activity and interactions with us.
                  You may receive up to 4–8 messages per month. Frequency may increase during active
                  service periods.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-bold text-primary-deep">4c. Message &amp; Data Rates</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary-foreground">
                  Message and data rates may apply for any messages sent to you from us and to us
                  from you. Charges are determined by your mobile carrier and your individual service
                  plan. {BUSINESS_NAME} is not responsible for any carrier charges.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-bold text-primary-deep">4d. How to Opt Out (STOP)</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary-foreground">
                  You can opt out of receiving SMS messages at any time by replying{" "}
                  <strong>STOP</strong> to any message we send. After opting out, you will receive a
                  one-time confirmation message and will no longer receive SMS messages from us
                  unless you re-enroll.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-bold text-primary-deep">4e. How to Get Help (HELP)</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary-foreground">
                  For help with our SMS program, reply <strong>HELP</strong> to any message or
                  contact us directly at:
                </p>
                <ul className="mt-2 text-sm text-secondary-foreground space-y-1">
                  <li>Phone: <a href={`tel:+1${PHONE_RAW}`} className="text-primary underline">{PHONE}</a></li>
                  <li>Email: <a href={`mailto:${EMAIL}`} className="text-primary underline">{EMAIL}</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-base font-bold text-primary-deep">4f. Carrier Liability Disclaimer</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary-foreground">
                  Mobile carriers are not liable for delayed or undelivered messages.{" "}
                  {BUSINESS_NAME} cannot guarantee delivery of SMS messages. Delivery of information
                  through SMS may be subject to your mobile carrier's capability and coverage area.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-bold text-primary-deep">4g. Supported Carriers</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary-foreground">
                  Our SMS program is supported by all major U.S. wireless carriers including AT&amp;T,
                  Verizon, T-Mobile, and Sprint. Not all carriers are supported for all messages.
                </p>
              </div>
            </section>
          </Reveal>

          {/* 5 */}
          <Reveal delay={100}>
            <section className="surface-3d rounded-[2rem] p-8">
              <h2 className="font-display text-xl font-bold text-primary-deep">5. Cookies</h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary-foreground">
                We use cookies in accordance with our Privacy Policy to improve user experience and
                website functionality.
              </p>
            </section>
          </Reveal>

          {/* 6 */}
          <Reveal delay={110}>
            <section className="surface-3d rounded-[2rem] p-8">
              <h2 className="font-display text-xl font-bold text-primary-deep">6. Intellectual Property &amp; License</h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary-foreground">
                Unless otherwise stated, {BUSINESS_NAME} owns the intellectual property rights for
                all content on this website. You may not copy, reproduce, republish, sell, or
                redistribute any material without prior written permission.
              </p>
            </section>
          </Reveal>

          {/* 7 */}
          <Reveal delay={120}>
            <section className="surface-3d rounded-[2rem] p-8">
              <h2 className="font-display text-xl font-bold text-primary-deep">7. Comments &amp; User Content</h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary-foreground">
                {BUSINESS_NAME} reserves the right to monitor and remove any comments or
                user-generated content on our platforms that are inappropriate, offensive, or
                violate these terms.
              </p>
            </section>
          </Reveal>

          {/* 8 */}
          <Reveal delay={130}>
            <section className="surface-3d rounded-[2rem] p-8">
              <h2 className="font-display text-xl font-bold text-primary-deep">8. Content Liability</h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary-foreground">
                We are not responsible for content that appears on external websites linking to us.
                You agree to defend and protect {BUSINESS_NAME} against any claims arising from your
                website or digital properties.
              </p>
            </section>
          </Reveal>

          {/* 9 */}
          <Reveal delay={140}>
            <section className="surface-3d rounded-[2rem] p-8">
              <h2 className="font-display text-xl font-bold text-primary-deep">9. Disclaimer</h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary-foreground">
                To the maximum extent permitted by applicable law, {BUSINESS_NAME} excludes all
                warranties, representations, and conditions relating to our website and services. We
                are not liable for any loss or damage (including, without limitation, damage for loss
                of business, profits, or revenue) arising from the use of our website or services.
              </p>
            </section>
          </Reveal>

          {/* 10 */}
          <Reveal delay={150}>
            <section className="surface-3d rounded-[2rem] p-8">
              <h2 className="font-display text-xl font-bold text-primary-deep">10. Changes to These Terms</h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary-foreground">
                We reserve the right to update these Terms and Conditions at any time. Changes will
                be posted on this page with a revised "Last Updated" date. Continued use of our
                website or services constitutes acceptance of the updated terms.
              </p>
            </section>
          </Reveal>

          {/* 11 */}
          <Reveal delay={160}>
            <section className="surface-3d rounded-[2rem] p-8">
              <h2 className="font-display text-xl font-bold text-primary-deep">11. Contact Information</h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary-foreground">
                For questions about these Terms and Conditions, please contact us:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-secondary-foreground">
                <li><strong>Company:</strong> {BUSINESS_NAME}</li>
                <li><strong>Address:</strong> {ADDRESS}</li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href={`tel:+1${PHONE_RAW}`} className="text-primary underline">{PHONE}</a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${EMAIL}`} className="text-primary underline">{EMAIL}</a>
                </li>
              </ul>
            </section>
          </Reveal>

        </div>
      </div>
    </div>
  );
}
