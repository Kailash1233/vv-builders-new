import type { Metadata } from "next";
import Script from "next/script";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse VV Builders' portfolio of residential, commercial, and interiors projects — from hillside homes to corporate campuses, built across the country.",
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
        description="A selection of the residential, commercial, and interiors work our teams have designed and built end to end."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/projects", label: "Projects" },
        ]}
      />

      <section className="bg-cream-50 py-24">
        <div className="container-px grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} variant={i} />
          ))}
        </div>
      </section>
    </>
  );
}
