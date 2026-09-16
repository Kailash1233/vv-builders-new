import type { Metadata } from "next";
import Script from "next/script";
import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { FaqSection } from "@/components/FaqSection";
import { site, faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | Architecture & Construction That Builds Timeless Spaces`,
  description: site.description,
  alternates: { canonical: "/" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <FeaturedProjects />
      <ServicesSection />
      <ProcessSection />
      <InsightsSection />
      <FaqSection />
    </>
  );
}
