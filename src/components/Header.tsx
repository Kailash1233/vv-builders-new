"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

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
  const [scrolled, setScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
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
                className={`text-[13px] tracking-wide uppercase font-medium link-underline ${
                  active ? "text-gold-400" : "text-cream-100/85 hover:text-cream-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-gold-500/70 text-gold-300 text-[12px] tracking-[0.14em] uppercase font-semibold px-5 py-2.5 hover:bg-gold-500 hover:text-navy-950 transition-colors"
          >
            Get in Touch
          </Link>
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
