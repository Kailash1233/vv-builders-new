import { SectionHeading } from "@/components/SectionHeading";
import { process } from "@/lib/site";

export function ProcessSection() {
  return (
    <section className="bg-cream-100 py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Process"
          title="A Seamless Journey From Vision to Reality"
          cta={{ href: "/about#process", label: "How We Work" }}
          className="max-w-lg"
        />

        <ol className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 relative">
          <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-px bg-ink-900/15" />
          {process.map((item) => (
            <li key={item.step} className="relative flex flex-col items-start">
              <span className="relative z-10 w-12 h-12 rounded-full bg-cream-100 border border-gold-500 text-gold-600 font-display text-lg flex items-center justify-center">
                {item.step}
              </span>
              <h3 className="font-display text-xl mt-5">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
