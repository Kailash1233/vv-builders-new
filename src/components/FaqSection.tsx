"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/lib/site";

export function FaqSection({
  title = "Frequently Asked Questions",
}: {
  title?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-cream-100 py-20 sm:py-24 lg:py-28">
      <div className="container-px max-w-3xl mx-auto">
        <SectionHeading eyebrow="FAQ" title={title} align="center" />

        <div className="mt-10 sm:mt-12 divide-y divide-ink-900/10 border-t border-b border-ink-900/10">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={faq.question}>
                {/* Question */}
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-6
                    py-5
                    sm:py-6
                    text-left
                    group
                  "
                >
                  <span
                    className="
                      font-display
                      text-lg
                      sm:text-xl
                      leading-snug
                      text-ink-900
                      transition-colors
                      duration-300
                      group-hover:text-gold-600
                    "
                  >
                    {faq.question}
                  </span>

                  {/* Plus / Close Icon */}
                  <span
                    className={`
                      shrink-0
                      flex
                      items-center
                      justify-center
                      w-8
                      h-8
                      rounded-full
                      border
                      text-lg
                      leading-none
                      transition-all
                      duration-300
                      ease-out
                      ${
                        isOpen
                          ? "rotate-45 bg-gold-500 border-gold-500 text-navy-950"
                          : "border-ink-900/20 text-ink-900"
                      }
                    `}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={`faq-answer-${i}`}
                  className={`
                    grid
                    transition-[grid-template-rows,opacity]
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-12 text-sm text-ink-500 leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
