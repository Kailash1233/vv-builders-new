# VV Builders

Marketing website for VV Builders — an architecture and construction design-build studio — built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- Content lives in `src/lib/site.ts` — edit copy, services, projects, and articles there.

## SEO / AEO / GEO

- Per-page metadata, canonical URLs, and Open Graph/Twitter cards via the Next.js Metadata API.
- Dynamic OG image generation at `src/app/opengraph-image.tsx`.
- `sitemap.xml` and `robots.txt` generated from `src/app/sitemap.ts` / `src/app/robots.ts`, with explicit allow rules for AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.).
- `public/llms.txt` summarizes the site for AI assistants and answer engines.
- Structured data (JSON-LD): Organization, Service, CreativeWork, Article, FAQPage, and BreadcrumbList on relevant pages.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint
