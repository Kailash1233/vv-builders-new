import type { Metadata } from "next";
import Script from "next/script";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { BuildingArt } from "@/components/BuildingArt";
import { CheckIcon } from "@/components/icons";
import { stats, process, site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { aboutImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about VV Builders — a design-build studio delivering residential, commercial, and interior projects for over 15 years, built on craftsmanship and client trust.",
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
    title: "Design-Build Discipline",
    description: "Architecture and construction under one roof, so intent never gets lost in translation.",
  },
  {
    title: "Built to Last",
    description: "Materials and methods chosen for durability and performance decades after handover.",
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
        eyebrow="About VV Builders"
        title="Building With Purpose Since 2009"
        description="We are architects, builders, and project managers united by one belief: extraordinary spaces come from disciplined craft, not shortcuts."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
        ]}
      />

      <section className="bg-cream-50 py-24">
        <div className="container-px grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.24em] uppercase mb-3 text-gold-600">
              Our Story
            </p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight text-balance">
              A design-build studio founded on one idea: form and function should never be
              negotiated separately.
            </h2>
            <p className="mt-6 text-ink-500 leading-relaxed">
              {site.name} started as a small residential contractor and grew into a full
              design-build studio spanning architecture, construction, interiors, and project
              management. What hasn&apos;t changed is our approach — every project starts with
              listening, and ends with a space our clients are proud to call home or business.
            </p>
            <p className="mt-4 text-ink-500 leading-relaxed">
              Today our teams deliver residential, commercial, and interiors projects across the
              country, backed by in-house architects, licensed builders, and dedicated project
              managers who carry each project from first sketch to final walkthrough.
            </p>
          </div>
          <BuildingArt
            variant={2}
            photo={aboutImage}
            alt={`Inside the ${site.name} studio`}
            className="h-80 lg:h-[420px] rounded-lg"
          />
        </div>
      </section>

      <section className="bg-navy-950 text-cream-50 py-20 grain">
        <div className="container-px grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="font-display text-4xl sm:text-5xl text-gold-400">{stat.value}</span>
              <p className="mt-2 text-xs uppercase tracking-wide text-cream-100/65">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream-100 py-24">
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

      <section id="process" className="bg-cream-50 py-24 scroll-mt-24">
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
