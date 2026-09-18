"use client";

import { useState } from "react";
import { PlayIcon } from "@/components/icons";
import { testimonials, type Testimonial } from "@/lib/site";

const backdrops = ["/vv1.jpg", "/vv3.jpg", "/vv4.jpg"];

export function TestimonialsSection() {
  return (
    <section className="bg-navy-950 text-cream-50 py-20 sm:py-24 lg:py-28 grain">
      <div className="container-px">
        <div className="max-w-xl">
          <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-gold-400">
            Client Stories
          </p>
          <h2 className="mt-5 font-display text-[2.25rem] leading-[1.08] sm:text-5xl lg:text-[3rem] text-cream-50 text-balance">
            Hear It From Families We&apos;ve Built For
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              backdrop={backdrops[i % backdrops.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  backdrop,
}: {
  testimonial: Testimonial;
  backdrop: string;
}) {
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(testimonial.youtubeId);

  return (
    <div className="flex flex-col">
      <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-navy-900">
        {playing && hasVideo ? (
          <iframe
            src={`https://www.youtube.com/embed/${testimonial.youtubeId}?autoplay=1`}
            title={testimonial.headline}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => hasVideo && setPlaying(true)}
            aria-label={hasVideo ? `Play video testimonial: ${testimonial.headline}` : "Video testimonial coming soon"}
            className="group absolute inset-0 h-full w-full"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${backdrop})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-navy-950/40" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-14 h-14 rounded-full bg-cream-50/95 flex items-center justify-center text-navy-950 shadow-lg transition-transform group-hover:scale-110">
                <PlayIcon className="w-5 h-5 ml-0.5" />
              </span>
            </span>
            {!hasVideo && (
              <span className="absolute top-3 right-3 text-[9px] uppercase tracking-[0.18em] bg-navy-950/70 text-gold-300 px-2.5 py-1 rounded-full">
                Coming Soon
              </span>
            )}
            <span className="absolute inset-x-0 bottom-0 p-4 text-left">
              <span className="block text-xs uppercase tracking-wide text-gold-300/90">
                {testimonial.location}
              </span>
            </span>
          </button>
        )}
      </div>

      <p className="mt-5 font-display text-lg leading-snug text-cream-50">
        {testimonial.headline}
      </p>
      <p className="mt-2 text-sm text-cream-100/60 leading-relaxed">
        {testimonial.description}
      </p>
    </div>
  );
}
