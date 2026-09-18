import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

export function CtaBand() {
  return (
    <section className="bg-cream-100">
      <div className="container-px py-16 sm:py-20 lg:py-24">
        <p className="font-sans font-extrabold uppercase text-2xl sm:text-4xl lg:text-[2.75rem] leading-[1.25] text-ink-900 max-w-4xl">
          A home in Chennai has to handle heat, monsoon rain, and daily family life. We
          build for{" "}
          <span
            className="inline-block align-middle mx-1 sm:mx-2 h-8 w-14 sm:h-12 sm:w-24 lg:h-14 lg:w-28 rounded-lg bg-cover bg-center align-[-8px] sm:align-[-14px]"
            style={{ backgroundImage: "url(/vv2.jpg)" }}
            role="img"
            aria-label="Interior detail of a V.V Builders home"
          />{" "}
          comfort, durability, and long-term value.
        </p>
      </div>

      <div className="relative h-[360px] sm:h-[440px] lg:h-[520px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/vv4.jpg)" }}
          role="img"
          aria-label="A V.V Builders home veranda"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-navy-950/10 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-cream-50 text-navy-950 text-[11px] sm:text-[12px] tracking-[0.16em] uppercase font-semibold px-7 py-4 rounded-full shadow-lg hover:bg-gold-400 transition-colors"
          >
            Start Your Home Project
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
