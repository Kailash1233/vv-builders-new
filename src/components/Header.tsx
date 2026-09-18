"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";
import {
  DotsIcon,
  MailIcon,
  PhoneIcon,
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  WhatsAppIcon,
} from "@/components/icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
    setMoreOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-navy-950/95 backdrop-blur border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container-px flex items-center justify-between h-20">
        <Link href="/" className="shrink-0" aria-label={`${site.name} home`}>
          <Logo variant="light" />
        </Link>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`pb-1.5 border-b-2 text-[13px] tracking-wide uppercase font-medium transition-colors ${
                  active
                    ? "text-gold-400 border-gold-400"
                    : "text-cream-100/85 border-transparent hover:text-cream-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-gold-500/70 text-gold-300 text-[12px] tracking-[0.14em] uppercase font-semibold px-5 py-2.5 hover:bg-gold-500 hover:text-navy-950 transition-colors"
          >
            Get in Touch
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              aria-label="More contact options"
              aria-expanded={moreOpen}
              className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center text-cream-100 hover:border-gold-400 hover:text-gold-400 transition-colors"
            >
              <DotsIcon className="w-4 h-4" />
            </button>

            {moreOpen && (
              <>
                <button
                  type="button"
                  aria-label="Close"
                  className="fixed inset-0 z-40 cursor-default"
                  onClick={() => setMoreOpen(false)}
                />
                <div className="absolute right-0 top-12 z-50 w-64 rounded-xl border border-white/10 bg-navy-950 p-5 shadow-xl">
                  <ul className="space-y-3 text-sm text-cream-100/85">
                    <li className="flex items-center gap-3">
                      <MailIcon className="w-4 h-4 text-gold-400 shrink-0" />
                      <a href={`mailto:${site.email}`} className="hover:text-cream-50">
                        {site.email}
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <PhoneIcon className="w-4 h-4 text-gold-400 shrink-0" />
                      <a href={`tel:${site.phoneRaw}`} className="hover:text-cream-50">
                        {site.phone}
                      </a>
                    </li>
                  </ul>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
                    {[
                      { Icon: WhatsAppIcon, href: `https://wa.me/${site.whatsappNumber}`, label: "WhatsApp" },
                      { Icon: FacebookIcon, href: site.social.facebook, label: "Facebook" },
                      { Icon: InstagramIcon, href: site.social.instagram, label: "Instagram" },
                      { Icon: YouTubeIcon, href: site.social.youtube, label: "YouTube" },
                    ]
                      .filter((item) => item.href)
                      .map(({ Icon, href, label }) => (
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
              </>
            )}
          </div>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex flex-col justify-center items-center gap-1.5 w-10 h-10 text-cream-50"
        >
          <span
            className={`block h-px w-6 bg-current transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span className={`block h-px w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-px w-6 bg-current transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy-950">
          <nav className="container-px flex flex-col py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 text-sm uppercase tracking-wide border-b border-white/5 ${
                  pathname === link.href ? "text-gold-400" : "text-cream-100/85"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 inline-flex justify-center items-center border border-gold-500/70 text-gold-300 text-xs tracking-[0.14em] uppercase font-semibold px-5 py-3"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
