import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Read the terms of service for using the ${site.name} website.`,
  alternates: { canonical: "/terms-of-service" },
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/terms-of-service", label: "Terms of Service" },
        ]}
      />
      <section className="bg-cream-50 py-20">
        <div className="container-px max-w-3xl mx-auto space-y-6 text-ink-700 leading-relaxed">
          <p className="text-sm text-ink-500">Last updated: January 2026</p>
          <p>
            These terms govern your use of {site.url}. By using this website, you agree to these
            terms.
          </p>
          <h2 className="font-display text-2xl pt-4">Use of Content</h2>
          <p>
            All content on this site, including text, images, and graphics, is the property of{" "}
            {site.name} unless otherwise noted, and may not be reproduced without permission.
          </p>
          <h2 className="font-display text-2xl pt-4">No Warranty</h2>
          <p>
            Project examples and information on this site are provided for illustrative purposes
            and do not constitute a binding proposal. Formal project terms are established
            separately in a signed contract.
          </p>
          <h2 className="font-display text-2xl pt-4">Contact Us</h2>
          <p>
            Questions about these terms can be directed to{" "}
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
