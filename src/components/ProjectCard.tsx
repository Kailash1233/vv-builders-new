import Link from "next/link";
import { BuildingArt } from "@/components/BuildingArt";
import { ArrowIcon } from "@/components/icons";
import type { Project } from "@/lib/site";

export function ProjectCard({ project, variant = 0 }: { project: Project; variant?: number }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative h-64 rounded-lg overflow-hidden">
        <BuildingArt
          variant={variant}
          photo={project.image}
          alt={`${project.name} — ${project.location}`}
          className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/5 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold-300/90 mb-1">
            {project.category} &middot; {project.year}
          </span>
          <h3 className="font-display text-xl text-cream-50">{project.name}</h3>
          <p className="text-xs text-cream-100/70 mt-0.5">{project.location}</p>
        </div>
        <span className="absolute top-4 right-4 w-9 h-9 rounded-full border border-cream-50/40 flex items-center justify-center text-cream-50 opacity-0 group-hover:opacity-100 group-hover:bg-gold-400 group-hover:border-gold-400 group-hover:text-navy-950 transition-all">
          <ArrowIcon className="w-4 h-4 -rotate-45" />
        </span>
      </div>
      <p className="mt-4 text-sm text-ink-500 leading-relaxed">{project.summary}</p>
    </Link>
  );
}
