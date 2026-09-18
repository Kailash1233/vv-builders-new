import type { Metadata } from "next";
import Script from "next/script";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { BuildingArt } from "@/components/BuildingArt";
import { CheckIcon } from "@/components/icons";
import { stats, process, site, founder } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { aboutImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about V.V Builders — a Chennai-based construction company building residential and commercial projects, renovations, and home extensions for over 15 years.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Craftsmanship First",
    description: "Every detail is executed with the precision of a finished, lived-in space, not a rendering.",
  },
  {
    title: "Radical Transparency",
    description: "Clear budgets, honest timelines, and a single point of contact throughout your project.",
  },
  {
    title: "One Team, Start to Finish",
    description: "Construction and project management under one roof, so nothing gets lost between contractors.",
  },
  {
    title: "Built to Last",
    description: "Materials and methods chosen for Chennai's climate — durability and performance decades after handover.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Script
        id="about-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow="About V.V Builders"
        title="Building With Purpose Since 2009"
        description="We are builders and project managers united by one belief: extraordinary spaces come from disciplined craft, not shortcuts."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
        ]}
        bgImage="/vv1.jpg"
      />

      <section className="bg-cream-50 py-20 sm:py-24 lg:py-32">
        <div className="container-px grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.24em] uppercase mb-3 text-gold-600">
              Our Story
            </p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight text-balance">
              A construction company founded on one idea: form and function should never
              be negotiated separately.
            </h2>
            <p className="mt-6 text-ink-500 leading-relaxed">
              {site.name} started as a small residential contractor and grew into a full
              construction company spanning residential builds, commercial construction,
              renovations, and project management. What hasn&apos;t changed is our
              approach — every project starts with listening, and ends with a space our
              clients are proud to call home or business.
            </p>
            <p className="mt-4 text-ink-500 leading-relaxed">
              Today our team builds homes, villas, renovations, and commercial spaces
              across South Chennai — from Padappai and Tambaram to the surrounding areas
              of Tamil Nadu — carrying each project from foundation to final walkthrough.
            </p>
          </div>
          <BuildingArt
            variant={2}
            photo={aboutImage}
            alt={`A ${site.name} construction site`}
            className="h-80 lg:h-[420px] rounded-lg"
          />
        </div>
      </section>

      <section className="bg-navy-950 text-cream-50 py-20 sm:py-24 lg:py-28 grain">
        <div className="container-px grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="font-display text-4xl sm:text-5xl text-gold-400">{stat.value}</span>
              <p className="mt-2 text-xs uppercase tracking-wide text-cream-100/65">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream-50 py-20 sm:py-24 lg:py-28">
        <div className="container-px grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-start">
            <div className="w-24 h-24 rounded-full bg-navy-950 border-2 border-gold-500/40 flex items-center justify-center">
              <span className="font-display text-3xl text-gold-400">VV</span>
            </div>
            <p className="mt-5 text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-600">
              {founder.role}
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl leading-tight text-balance">
              Meet the Builder Behind {site.name}
            </h2>
            <div className="mt-5 space-y-4">
              {founder.bio.map((paragraph, i) => (
                <p key={i} className="text-ink-500 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-20 sm:py-24 lg:py-32">
        <div className="container-px">
          <SectionHeading eyebrow="What Drives Us" title="Our Values" align="center" />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-cream-50 p-7 rounded-lg border border-ink-900/5">
                <span className="w-9 h-9 rounded-full bg-gold-500/15 text-gold-600 flex items-center justify-center">
                  <CheckIcon className="w-4.5 h-4.5" />
                </span>
                <h3 className="font-display text-lg mt-5">{value.title}</h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-cream-50 py-20 sm:py-24 lg:py-32 scroll-mt-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our Process"
            title="How a Project Moves From Idea to Handover"
            align="center"
          />
          <ol className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {process.map((item) => (
              <li key={item.step} className="flex flex-col items-start">
                <span className="w-12 h-12 rounded-full bg-navy-950 text-gold-400 font-display text-lg flex items-center justify-center">
                  {item.step}
                </span>
                <h3 className="font-display text-xl mt-5">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
