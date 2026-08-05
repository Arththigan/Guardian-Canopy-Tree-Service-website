import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Guardian Canopy Tree Service" },
      { name: "description", content: "Learn how Guardian Canopy Tree Service collects, uses, protects, and retains personal information, including SMS consent data." },
    ],
  }),
  component: Privacy,
});

const BUSINESS_NAME = "Guardian Canopy Tree Service";
const ADDRESS = "1192 Main St, Buffalo, New York";
const PHONE = "+1 (716) 333-8723";
const PHONE_RAW = "7163338723";
const EMAIL = "crew@guardiancanopy.com";

function Bullets({ items }: { items: string[] }) {
  return <ul className="mt-3 space-y-1.5 text-sm text-secondary-foreground">{items.map((item) => <li key={item} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /><span>{item}</span></li>)}</ul>;
}

function Card({ title, children, delay }: { title: string; children: ReactNode; delay: number }) {
  return <Reveal delay={delay}><section className="surface-3d rounded-[2rem] p-8"><h2 className="font-display text-xl font-bold text-primary-deep">{title}</h2>{children}</section></Reveal>;
}

const Text = ({ children }: { children: ReactNode }) => <p className="mt-3 text-sm leading-relaxed text-secondary-foreground">{children}</p>;

function Privacy() {
  return (
    <div className="px-6 pt-36 pb-24"><div className="mx-auto max-w-3xl">
      <Reveal>
        <span className="eyebrow">Legal</span>
        <h1 className="mt-6 text-4xl font-bold text-primary-deep sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground"><strong>Effective Date:</strong> January 19, 2025 &nbsp;|&nbsp; <strong>Last Updated:</strong> July 9, 2026</p>
        <p className="mt-4 text-base leading-relaxed text-secondary-foreground">{BUSINESS_NAME} ("we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data in compliance with applicable U.S. data protection laws, including the California Consumer Privacy Act (CCPA) and the General Data Protection Regulation (GDPR) where applicable.</p>
      </Reveal>

      <div className="mt-12 space-y-10">
        <Card title="1. Information We Collect" delay={60}><Text>We may collect the following categories of personal information when you contact us, request a quote, submit a web form, or use our services:</Text><Bullets items={["Full name", "Mailing or service address", "Email address", "Mobile phone number", "Service request details and project descriptions", "Communication history and preferences"]} /></Card>

        <Reveal delay={70}><section className="surface-3d space-y-6 rounded-[2rem] p-8">
          <h2 className="font-display text-xl font-bold text-primary-deep">2. SMS / Text Message Communications</h2>
          <div><h3 className="font-display text-base font-bold text-primary-deep">2a. How We Collect Your Mobile Number</h3><Text>We collect your mobile phone number when you voluntarily provide it through our website contact forms, phone calls, or other direct communication channels. By providing your mobile number and checking the SMS consent checkbox on our forms, you expressly consent to receive SMS communications from {BUSINESS_NAME}.</Text></div>
          <div><h3 className="font-display text-base font-bold text-primary-deep">2b. Types of Messages We Send</h3><Text>By opting in, you may receive recurring automated text messages from {BUSINESS_NAME}, including:</Text><Bullets items={["Free estimate confirmations and appointment reminders", "Project status updates and scheduling notifications", "Customer support and follow-up communications", "Promotional offers and seasonal service announcements related to our tree care services"]} /></div>
          <div><h3 className="font-display text-base font-bold text-primary-deep">2c. Message Frequency</h3><Text>Message frequency varies based on your interactions with us, ongoing service needs, and active promotions. You may receive up to 4–8 messages per month depending on your service activity.</Text></div>
          <div><h3 className="font-display text-base font-bold text-primary-deep">2d. Message &amp; Data Rates</h3><Text>Message and data rates may apply. Charges are determined by your mobile carrier and your individual service plan. {BUSINESS_NAME} is not responsible for any charges incurred from your mobile carrier.</Text></div>
          <div><h3 className="font-display text-base font-bold text-primary-deep">2e. How to Opt Out (STOP)</h3><Text>You may cancel SMS messages at any time by replying <strong>STOP</strong> to any text message you receive from us. After opting out, you will receive one final confirmation message and will no longer receive SMS communications from {BUSINESS_NAME} unless you re-enroll.</Text></div>
          <div><h3 className="font-display text-base font-bold text-primary-deep">2f. How to Get Help (HELP)</h3><Text>For help with our SMS program, reply <strong>HELP</strong> to any message, call <a href={`tel:+1${PHONE_RAW}`} className="text-primary underline">{PHONE}</a>, or email <a href={`mailto:${EMAIL}`} className="text-primary underline">{EMAIL}</a>.</Text></div>
        </section></Reveal>

        <Card title="3. Mobile Information & SMS Consent — No Third-Party Sharing" delay={80}><Text>No mobile information, including your mobile phone number and SMS opt-in consent data, will be shared with third parties or affiliates for marketing or promotional purposes.</Text><Text>All other categories of personal data exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties under any circumstances.</Text></Card>
        <Card title="4. How We Use Your Information" delay={90}><Text>We use the personal information we collect to:</Text><Bullets items={["Provide and manage tree care services", "Respond to inquiries and service requests", "Schedule appointments and send reminders", "Send promotional communications (with your consent)", "Improve our website and service quality", "Comply with applicable laws and regulations"]} /></Card>
        <Card title="5. Cookies and Tracking Technologies" delay={100}><Text>We use cookies and similar technologies to improve website functionality, analyze traffic, and enhance user experience. Cookies do not store sensitive personal information. By continuing to use this website, you consent to our use of cookies in accordance with this policy.</Text></Card>
        <Card title="6. Data Security" delay={110}><Text>We implement reasonable administrative, technical, and physical security measures to protect your personal data against unauthorized access, disclosure, alteration, or destruction. However, no method of electronic transmission or storage is 100% secure.</Text></Card>
        <Card title="7. Data Retention" delay={120}><Text>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable law. When your data is no longer needed, we securely delete or anonymize it.</Text></Card>
        <Card title="8. Your Privacy Rights" delay={130}><Text>Depending on your location, you may have the following rights regarding your personal data:</Text><Bullets items={["Access: Request a copy of the personal data we hold about you", "Correction: Request correction of inaccurate personal data", "Deletion: Request deletion of your personal data, including your mobile number and SMS consent record", "Opt-Out of SMS: Reply STOP to any text message at any time", "Opt-Out of Marketing: Contact us directly to be removed from marketing lists"]} /><Text>To exercise any of these rights, email <a href={`mailto:${EMAIL}`} className="text-primary underline">{EMAIL}</a> or call <a href={`tel:+1${PHONE_RAW}`} className="text-primary underline">{PHONE}</a>.</Text></Card>
        <Card title="9. Changes to This Privacy Policy" delay={140}><Text>We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised "Last Updated" date. Continued use of our website or services after any changes constitutes your acceptance of the updated policy.</Text></Card>
        <Card title="10. Contact Information" delay={150}><Text>If you have questions or concerns about this Privacy Policy, please contact us:</Text><ul className="mt-4 space-y-2 text-sm text-secondary-foreground"><li><strong>Company:</strong> {BUSINESS_NAME}</li><li><strong>Address:</strong> {ADDRESS}</li><li><strong>Phone:</strong> <a href={`tel:+1${PHONE_RAW}`} className="text-primary underline">{PHONE}</a></li><li><strong>Email:</strong> <a href={`mailto:${EMAIL}`} className="text-primary underline">{EMAIL}</a></li></ul></Card>
      </div>
    </div></div>
  );
}
