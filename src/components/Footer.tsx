import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";
import {
  MailIcon,
  PhoneIcon,
  PinIcon,
  LinkedInIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
  ArrowIcon,
} from "@/components/icons";

const sitemap = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-navy-950 text-cream-100 overflow-hidden grain">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden md:block w-1/2 opacity-[0.12]">
        <svg
          viewBox="0 0 400 300"
          className="h-full w-full"
          preserveAspectRatio="xMaxYMid slice"
          aria-hidden="true"
        >
          <g stroke="#c6a057" strokeWidth="1" fill="none">
            <rect x="40" y="140" width="60" height="140" />
            <rect x="110" y="90" width="50" height="190" />
            <rect x="170" y="160" width="70" height="120" />
            <rect x="250" y="60" width="55" height="220" />
            <rect x="315" y="120" width="60" height="160" />
            <line x1="0" y1="280" x2="400" y2="280" />
            {Array.from({ length: 6 }).map((_, i) => (
              <line
                key={`h1-${i}`}
                x1="45"
                y1={150 + i * 20}
                x2="95"
                y2={150 + i * 20}
              />
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <line
                key={`h2-${i}`}
                x1="255"
                y1={70 + i * 25}
                x2="300"
                y2={70 + i * 25}
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="relative container-px pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr] pb-16 border-b border-white/10">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl text-balance max-w-md">
              Let&apos;s Build Something Extraordinary
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-gold-500 text-navy-950 text-[12px] tracking-[0.14em] uppercase font-semibold px-6 py-3.5 hover:bg-gold-400 transition-colors"
            >
              Start Your Project
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.2em] uppercase text-gold-400 font-semibold mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-cream-100/80">
              <li className="flex items-start gap-3">
                <MailIcon className="w-4 h-4 mt-0.5 text-gold-400 shrink-0" />
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-cream-50"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="w-4 h-4 mt-0.5 text-gold-400 shrink-0" />
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="hover:text-cream-50"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <PinIcon className="w-4 h-4 mt-0.5 text-gold-400 shrink-0" />
                <span>
                  {site.address.street}, {site.address.city}, {site.address.region}
                  {site.address.postal ? ` ${site.address.postal}` : ""}
                </span>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              {[
                {
                  Icon: LinkedInIcon,
                  href: site.social.linkedin,
                  label: "LinkedIn",
                },
                {
                  Icon: InstagramIcon,
                  href: site.social.instagram,
                  label: "Instagram",
                },
                {
                  Icon: PinterestIcon,
                  href: site.social.pinterest,
                  label: "Pinterest",
                },
                {
                  Icon: TwitterIcon,
                  href: site.social.twitter,
                  label: "Twitter / X",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center border border-white/15 rounded-full text-cream-100/80 hover:text-navy-950 hover:bg-gold-400 hover:border-gold-400 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <Logo variant="light" />
            <p className="mt-5 text-sm text-cream-100/70 max-w-xs">
              V.V Builders is a builders and construction company based in
              Padappai, Tambaram, Chennai, Tamil Nadu, working on residential
              construction, villas, renovation and home extensions across South
              Chennai.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {sitemap.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream-100/80 hover:text-gold-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-100/50">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-cream-100/80">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-cream-100/80">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
