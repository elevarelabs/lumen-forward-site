import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/structure-check", "/engagements", "/about", "/contact", "/privacy"];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-09-12"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
