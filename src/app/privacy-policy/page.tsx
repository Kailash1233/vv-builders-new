import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Read the ${site.name} privacy policy to understand how we collect, use, and protect your information.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/privacy-policy", label: "Privacy Policy" },
        ]}
      />
      <section className="bg-cream-50 py-20">
        <div className="container-px max-w-3xl mx-auto space-y-6 text-ink-700 leading-relaxed">
          <p className="text-sm text-ink-500">Last updated: January 2026</p>
          <p>
            {site.name} (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy.
            This policy explains what information we collect through {site.url} and how it is
            used.
          </p>
          <h2 className="font-display text-2xl pt-4">Information We Collect</h2>
          <p>
            We collect information you provide directly, such as your name, email address, phone
            number, and project details submitted through our contact form.
          </p>
          <h2 className="font-display text-2xl pt-4">How We Use Information</h2>
          <p>
            We use the information you provide to respond to inquiries, prepare project
            proposals, and communicate about ongoing projects. We do not sell your personal
            information to third parties.
          </p>
          <h2 className="font-display text-2xl pt-4">Contact Us</h2>
          <p>
            Questions about this policy can be directed to{" "}
            <a href={`mailto:${site.email}`} className="text-gold-600 underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
