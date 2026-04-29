import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

const routes = [
  { path: "", priority: 1 },
  { path: "/facilities", priority: 0.9 },
  { path: "/pricing", priority: 0.9 },
  { path: "/programs", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.path === "" ? "weekly" : "monthly",
    priority: route.priority,
  }));
}
