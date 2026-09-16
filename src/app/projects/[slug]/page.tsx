import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { BuildingArt } from "@/components/BuildingArt";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowIcon } from "@/components/icons";
import { projects, site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.location}`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} | ${site.name}`,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const variant = projects.findIndex((p) => p.slug === project.slug);
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    about: project.category,
    description: project.description,
    locationCreated: project.location,
    creator: { "@id": `${site.url}/#organization` },
    url: `${site.url}/projects/${project.slug}`,
  };

  return (
    <>
      <Script
        id="project-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <Script
        id="project-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Projects", path: "/projects" },
              { name: project.name, path: `/projects/${project.slug}` },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow={project.category}
        title={project.name}
        description={project.summary}
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/projects", label: "Projects" },
          { href: `/projects/${project.slug}`, label: project.name },
        ]}
      />

      <section className="bg-cream-50 py-20">
        <div className="container-px grid lg:grid-cols-[1.4fr_1fr] gap-14">
          <div>
            <BuildingArt variant={variant} className="h-72 sm:h-96 rounded-lg" />
            <div className="mt-10">
              <h2 className="font-display text-2xl sm:text-3xl">Project Overview</h2>
              <p className="mt-4 text-ink-500 leading-relaxed">{project.description}</p>
            </div>
          </div>

          <aside className="bg-cream-100 rounded-lg p-8 h-fit">
            <h3 className="font-display text-xl mb-6">Project Details</h3>
            <dl className="space-y-5 text-sm">
              <div className="flex justify-between gap-4 border-b border-ink-900/10 pb-3">
                <dt className="text-ink-500">Location</dt>
                <dd className="font-medium text-right">{project.location}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-ink-900/10 pb-3">
                <dt className="text-ink-500">Category</dt>
                <dd className="font-medium text-right">{project.category}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-ink-900/10 pb-3">
                <dt className="text-ink-500">Size</dt>
                <dd className="font-medium text-right">{project.size}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-500">Completed</dt>
                <dd className="font-medium text-right">{project.year}</dd>
              </div>
            </dl>
            <Link
              href="/contact"
              className="mt-8 inline-flex w-full justify-center items-center gap-2 bg-gold-500 text-navy-950 text-[12px] tracking-[0.14em] uppercase font-semibold px-6 py-3.5 hover:bg-gold-400 transition-colors"
            >
              Start a Similar Project
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-cream-100 py-20">
        <div className="container-px">
          <h2 className="font-display text-2xl sm:text-3xl mb-10">More Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} variant={projects.findIndex((x) => x.slug === p.slug)} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
