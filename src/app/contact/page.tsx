import type { Metadata } from "next";
import Script from "next/script";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { contactImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with V.V Builders to start your residential, renovation, or interiors project in Padappai, Tambaram, or South Chennai. Call, email, or send us your project details today.",
  alternates: { canonical: "/contact" },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: { "@id": `${site.url}/#organization` },
};

export default function ContactPage() {
  return (
    <>
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <Script
        id="contact-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow="Get in Touch"
        title="Tell Us About Your Project"
        description="Share a few details and a member of our team will follow up within one business day."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contact" },
        ]}
        bgImage="/vv2.jpg"
      />

      <section className="bg-cream-50 py-20 sm:py-24 lg:py-32">
        <div className="container-px grid lg:grid-cols-[1fr_1.2fr] gap-16">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl mb-8">Contact Details</h2>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-navy-950 text-gold-400 flex items-center justify-center shrink-0">
                  <MailIcon className="w-4.5 h-4.5" />
                </span>
                <div>
                  <p className="text-ink-500 text-xs uppercase tracking-wide">Email</p>
                  <a href={`mailto:${site.email}`} className="font-medium hover:text-gold-600">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-navy-950 text-gold-400 flex items-center justify-center shrink-0">
                  <PhoneIcon className="w-4.5 h-4.5" />
                </span>
                <div>
                  <p className="text-ink-500 text-xs uppercase tracking-wide">Phone</p>
                  <a href={`tel:${site.phoneRaw}`} className="font-medium hover:text-gold-600">
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-navy-950 text-gold-400 flex items-center justify-center shrink-0">
                  <PinIcon className="w-4.5 h-4.5" />
                </span>
                <div>
                  <p className="text-ink-500 text-xs uppercase tracking-wide">Studio</p>
                  <p className="font-medium">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.region}
                    {site.address.postal ? ` ${site.address.postal}` : ""}
                  </p>
                </div>
              </li>
            </ul>

            <div
              className="mt-10 h-56 rounded-lg relative overflow-hidden"
              style={{
                backgroundImage: `url(${contactImage}), linear-gradient(160deg, #24304f 0%, #0f1524 100%)`,
                backgroundSize: "cover, cover",
                backgroundPosition: "center, center",
              }}
              role="img"
              aria-label={`${site.name} studio location`}
            >
              <div className="absolute inset-0 bg-navy-950/40" />
              <PinIcon className="absolute inset-0 m-auto w-10 h-10 text-gold-400" />
              <div className="absolute inset-0 grain" />
            </div>
          </div>

          <div className="bg-cream-100 rounded-lg p-8 sm:p-10">
            <h2 className="font-display text-2xl sm:text-3xl mb-8">Start Your Project</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
