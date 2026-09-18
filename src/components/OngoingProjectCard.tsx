import { BuildingIcon } from "@/components/icons";
import type { Project } from "@/lib/site";

export function OngoingProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-navy-800 to-navy-950 p-6 sm:p-7">
      <BuildingIcon className="absolute -right-4 -bottom-4 w-32 h-32 text-gold-500/10" />
      <div className="absolute inset-0 grain" />
      <div className="relative">
        <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-300 bg-gold-500/10 border border-gold-500/25 rounded-full px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          In Progress
        </span>
        <h3 className="font-display text-xl text-cream-50 mt-4">{project.name}</h3>
        <p className="text-xs text-cream-100/60 mt-1">{project.location}</p>
        <p className="mt-4 text-sm text-cream-100/75 leading-relaxed">{project.summary}</p>
        <dl className="mt-5 pt-5 border-t border-white/10 grid grid-cols-2 gap-4 text-xs">
          <div>
            <dt className="text-cream-100/50 uppercase tracking-wide">Category</dt>
            <dd className="mt-1 text-cream-50 font-medium">{project.category}</dd>
          </div>
          <div>
            <dt className="text-cream-100/50 uppercase tracking-wide">Size</dt>
            <dd className="mt-1 text-cream-50 font-medium">{project.size}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
