import type { Metadata } from "next";
import Script from "next/script";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { OngoingProjectCard } from "@/components/OngoingProjectCard";
import { DownloadPortfolioButton } from "@/components/DownloadPortfolioButton";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { completedProjects, ongoingProjects } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse V.V Builders' portfolio of completed and ongoing residential, commercial, and renovation projects across Padappai, Tambaram, and South Chennai — with full project details available as a downloadable PDF.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <Script
        id="projects-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Projects", path: "/projects" },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow="Our Portfolio"
        title="Spaces That Define Excellence"
        description="A selection of the residential, commercial, and renovation work our team has built end to end across South Chennai — plus what's currently under construction."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/projects", label: "Projects" },
        ]}
        bgImage="/vv3.jpg"
      />

      <section className="bg-cream-50 py-20 sm:py-24 lg:py-32">
        <div className="container-px">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-14 pb-10 border-b border-ink-900/10">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl text-navy-950">
                Completed Projects
              </h2>
              <p className="mt-2 text-sm text-ink-500 max-w-md">
                Walking through in person? Take this portfolio with you — every project
                shown here, with full specifications, in one PDF.
              </p>
            </div>
            <DownloadPortfolioButton className="shrink-0" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {completedProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} variant={i} />
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {ongoingProjects.length > 0 && (
        <section className="bg-cream-100 py-20 sm:py-24 lg:py-28">
          <div className="container-px">
            <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-gold-600 mb-4">
              Currently Building
            </p>
            <h2 className="font-display text-2xl sm:text-3xl text-navy-950 max-w-lg">
              Ongoing Projects
            </h2>
            <p className="mt-2 text-sm text-ink-500 max-w-md">
              A look at what our site teams are actively building right now across South
              Chennai.
            </p>
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              {ongoingProjects.map((project) => (
                <OngoingProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
