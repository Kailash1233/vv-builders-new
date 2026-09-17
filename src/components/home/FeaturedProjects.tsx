import Link from "next/link";
import { BuildingArt } from "@/components/BuildingArt";
import { DownloadPortfolioButton } from "@/components/DownloadPortfolioButton";
import { ArrowIcon } from "@/components/icons";
import { projects } from "@/lib/site";

const featured = projects.filter((p) => p.featured);

export function FeaturedProjects() {
  const [first, second, third, fourth] = featured;

  return (
    <section className="bg-cream-50 py-20 sm:py-24 lg:py-32">
      <div className="container-px">
        {/* Desktop: heading on left + project composition on right */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[290px_minmax(0,1fr)] gap-10 xl:gap-14">
          {/* Section Heading */}
          <div className="flex flex-col justify-center">
            <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-gold-500">
              Featured Projects
            </p>

            <h2 className="mt-5 font-display text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-[3.1rem] xl:text-[3.35rem] text-navy-950">
              Spaces
              <br />
              That Define
              <br />
              Excellence
            </h2>

            <Link
              href="/projects"
              className="mt-10 inline-flex w-fit items-center gap-8 border border-navy-950/20 px-7 py-4 text-[11px] font-semibold tracking-[0.14em] uppercase text-navy-950 transition-all duration-300 hover:bg-navy-950 hover:text-cream-50"
            >
              View All Projects
              <ArrowIcon className="h-4 w-4" />
            </Link>

            <DownloadPortfolioButton variant="outline-dark" className="mt-3 w-fit" />
          </div>

          {/* Projects */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-[1.2fr_1.2fr_0.82fr]
              gap-3
              lg:h-[400px]
              xl:h-[420px]
            "
          >
            {/* First: Tall */}
            <ProjectTile
              project={first}
              variant={0}
              className="
                h-[380px]
                sm:h-[420px]
                lg:h-full
              "
            />

            {/* Middle column */}
            <div className="grid grid-cols-1 gap-3 sm:col-span-1 lg:grid-rows-2 lg:h-full">
              <ProjectTile
                project={second}
                variant={1}
                className="h-[240px] sm:h-[205px] lg:h-full"
              />

              <ProjectTile
                project={third}
                variant={2}
                className="h-[240px] sm:h-[205px] lg:h-full"
              />
            </div>

            {/* Fourth: Tall */}
            <ProjectTile
              project={fourth}
              variant={3}
              className="
                h-[380px]
                sm:h-[420px]
                lg:h-full
                sm:col-span-2
                lg:col-span-1
              "
            />
          </div>
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
      className={`
        group
        relative
        block
        overflow-hidden
        rounded-lg
        ${className ?? ""}
      `}
    >
      {/* Image */}
      <BuildingArt
        variant={variant}
        photo={project.image}
        alt={`${project.name} — ${project.location}`}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-105
        "
      />

      {/* Dark bottom gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-navy-950/90
          via-navy-950/20
          to-transparent
        "
      />

      {/* Project Information */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          p-5
          sm:p-6
        "
      >
        <span className="mb-1 block text-[9px] uppercase tracking-[0.2em] text-gold-300/90">
          {project.category}
        </span>

        <h3 className="font-display text-lg leading-tight text-cream-50 sm:text-xl">
          {project.name}
        </h3>

        <p className="mt-1 text-xs text-cream-100/70">{project.location}</p>
      </div>

      {/* Arrow */}
      <span
        className="
          absolute
          right-4
          bottom-4
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          border
          border-cream-50/40
          text-cream-50
          opacity-0
          transition-all
          duration-300
          group-hover:opacity-100
          group-hover:border-gold-400
          group-hover:bg-gold-400
          group-hover:text-navy-950
        "
      >
        <ArrowIcon className="h-4 w-4 -rotate-45" />
      </span>
    </Link>
  );
}
