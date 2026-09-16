import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { serviceIcons } from "@/components/icons";
import { services } from "@/lib/site";

export function ServicesSection() {
  return (
    <section className="bg-navy-950 text-cream-50 py-24 grain">
      <div className="container-px">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            eyebrow="Our Services"
            title="End-to-End Solutions"
            tone="light"
            className="max-w-md"
          />
          <p className="max-w-sm text-sm text-cream-100/65 leading-relaxed">
            Integrated expertise across every stage of design and construction.
          </p>
        </div>

        <Link
          href="/services"
          className="mt-4 inline-flex items-center gap-2 text-[12px] tracking-[0.14em] uppercase font-semibold border border-cream-50/25 text-cream-50 px-5 py-3 hover:bg-cream-50 hover:text-navy-950 transition-colors"
        >
          Explore Services
        </Link>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            const isLast = index === services.length - 1;
            return (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className={`group bg-navy-950 hover:bg-navy-900 p-7 flex flex-col transition-colors ${
                  isLast ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <Icon className="w-8 h-8 text-gold-400" />
                <h3 className="font-display text-lg mt-6">{service.name}</h3>
                <p className="mt-2 text-[13px] text-cream-100/60 leading-relaxed">
                  {service.shortDescription}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
