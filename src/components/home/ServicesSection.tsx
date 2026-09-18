import Link from "next/link";
import { serviceIcons } from "@/components/icons";
import { services } from "@/lib/site";

export function ServicesSection() {
  return (
    <section className="bg-navy-950 text-cream-50 py-20 sm:py-24 lg:py-32 grain">
      <div className="container-px">
        <div
          className="
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-[220px_minmax(0,1fr)]
            xl:grid-cols-[235px_minmax(0,1fr)]
            lg:gap-8
            xl:gap-10
          "
        >
          {/* Intro */}
          <div className="flex flex-col">
            <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-gold-400">
              Our Services
            </p>

            <h2
              className="
                mt-5
                font-display
                text-[2.5rem]
                leading-[1.05]
                sm:text-5xl
                lg:text-[2.8rem]
                xl:text-[3rem]
              "
            >
              End-to-End
              <br />
              Solutions
            </h2>

            <p
              className="
                mt-5
                max-w-[220px]
                text-[13px]
                leading-relaxed
                text-cream-100/60
              "
            >
              Integrated expertise across every stage of design and
              construction.
            </p>

            <Link
              href="/services"
              className="
                mt-8
                inline-flex
                w-fit
                items-center
                gap-7
                border
                border-cream-50/25
                px-5
                py-3
                text-[10px]
                font-semibold
                tracking-[0.14em]
                uppercase
                text-cream-50
                transition-all
                duration-300
                hover:border-gold-400
                hover:bg-gold-400
                hover:text-navy-950
              "
            >
              Explore Services
              <span className="text-gold-400 transition-colors group-hover:text-navy-950">
                →
              </span>
            </Link>
          </div>

          {/* Services */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-px
              bg-white/10
            "
          >
            {services.map((service) => {
              const Icon = serviceIcons[service.icon];

              return (
                <Link
                  key={service.slug}
                  href={`/services#${service.slug}`}
                  className="
                    group
                    relative
                    flex
                    min-h-[300px]
                    flex-col
                    bg-navy-950
                    p-6
                    transition-all
                    duration-300
                    hover:bg-navy-900
                    sm:min-h-[320px]
                    lg:min-h-[360px]
                    xl:min-h-[375px]
                    xl:p-7
                  "
                >
                  {/* Icon */}
                  <div className="flex h-12 items-start">
                    <Icon
                      className="
                        h-9
                        w-9
                        text-gold-400
                        transition-transform
                        duration-300
                        group-hover:-translate-y-1
                      "
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-7">
                    <h3
                      className="
                        font-display
                        text-[19px]
                        leading-[1.1]
                        text-cream-50
                        xl:text-xl
                      "
                    >
                      {service.name}
                    </h3>

                    <p
                      className="
                        mt-4
                        text-[12px]
                        leading-[1.65]
                        text-cream-100/55
                        xl:text-[13px]
                      "
                    >
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Bottom arrow */}
                  <div
                    className="
                      mt-auto
                      flex
                      items-center
                      justify-end
                      pt-8
                    "
                  >
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-cream-50/20
                        text-sm
                        text-cream-50/60
                        transition-all
                        duration-300
                        group-hover:border-gold-400
                        group-hover:bg-gold-400
                        group-hover:text-navy-950
                      "
                    >
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
