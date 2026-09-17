import type { Metadata } from "next";
import Script from "next/script";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { DownloadPortfolioButton } from "@/components/DownloadPortfolioButton";
import { projects } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse V.V Builders' portfolio of completed residential, renovation, and interiors projects across Padappai, Tambaram, and South Chennai — with full project details available as a downloadable PDF.",
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
        description="A selection of the residential, renovation, and interiors work our team has designed and built end to end across South Chennai."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/projects", label: "Projects" },
        ]}
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
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} variant={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
