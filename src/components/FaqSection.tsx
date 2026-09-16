"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/lib/site";

export function FaqSection({ title = "Frequently Asked Questions" }: { title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-cream-100 py-24">
      <div className="container-px max-w-3xl mx-auto">
        <SectionHeading eyebrow="FAQ" title={title} align="center" />

        <div className="mt-12 divide-y divide-ink-900/10 border-t border-b border-ink-900/10">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg sm:text-xl">{faq.question}</span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border border-ink-900/20 flex items-center justify-center transition-transform ${
                      isOpen ? "rotate-45 bg-gold-500 border-gold-500 text-navy-950" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 text-sm text-ink-500 leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
