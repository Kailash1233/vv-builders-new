import Link from "next/link";
import { BuildingArt } from "@/components/BuildingArt";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowIcon } from "@/components/icons";
import { projects } from "@/lib/site";

const featured = projects.filter((p) => p.featured);

export function FeaturedProjects() {
  const [first, second, third, fourth] = featured;

  return (
    <section className="bg-cream-50 pt-24 pb-24 lg:pt-40">
      <div className="container-px">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Spaces That Define Excellence"
          cta={{ href: "/projects", label: "View All Projects" }}
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:h-[560px]">
          <ProjectTile project={first} variant={0} className="lg:row-span-2 lg:h-full h-72" />
          <ProjectTile project={second} variant={1} className="lg:h-full h-64" />
          <ProjectTile project={fourth} variant={3} className="lg:row-span-2 lg:h-full h-72 sm:col-span-2 lg:col-span-1" />
          <ProjectTile project={third} variant={2} className="lg:h-full h-64" />
        </div>
      </div>
    </section>
  );
}

function ProjectTile({
  project,
  variant,
  className,
}: {
  project: (typeof projects)[number];
  variant: number;
  className?: string;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative block overflow-hidden rounded-lg ${className ?? ""}`}
    >
      <BuildingArt variant={variant} className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <span className="text-[10px] uppercase tracking-[0.2em] text-gold-300/90 mb-1">
          {project.category}
        </span>
        <h3 className="font-display text-lg sm:text-xl text-cream-50">{project.name}</h3>
        <p className="text-xs text-cream-100/70 mt-0.5">{project.location}</p>
      </div>
      <span className="absolute top-4 right-4 w-9 h-9 rounded-full border border-cream-50/40 flex items-center justify-center text-cream-50 opacity-0 group-hover:opacity-100 group-hover:bg-gold-400 group-hover:border-gold-400 group-hover:text-navy-950 transition-all">
        <ArrowIcon className="w-4 h-4 -rotate-45" />
      </span>
    </Link>
  );
}
