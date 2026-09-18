import type { MetadataRoute } from "next";
import { site, completedProjects, articles } from "@/lib/site";
import { locations } from "@/lib/locations";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/projects`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/insights`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.url}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${site.url}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/terms-of-service`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = completedProjects.map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${site.url}/insights/${article.slug}`,
    lastModified: article.date,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const locationRoutes: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${site.url}/locations/${location.slug}`,
    changeFrequency: "monthly",
    priority: location.isPrimary ? 0.9 : 0.75,
  }));

  return [...staticRoutes, ...projectRoutes, ...articleRoutes, ...locationRoutes];
}
