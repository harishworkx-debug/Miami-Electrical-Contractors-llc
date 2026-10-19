import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services, locations, site } from "@/lib/site";

const BASE_URL = site.url;

interface SitemapEntry {
  path: string;
  lastmod: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        // Last modified date reflects actual recent content and compliance updates
        const RELEASE_DATE = "2026-10-19";

        const entries: SitemapEntry[] = [
          { path: "/", lastmod: RELEASE_DATE },
          { path: "/services", lastmod: RELEASE_DATE },
          { path: "/about", lastmod: RELEASE_DATE },
          { path: "/reviews", lastmod: RELEASE_DATE },
          { path: "/contact", lastmod: RELEASE_DATE },
          ...locations.map((l) => ({
            path: `/${l.slug}`,
            lastmod: RELEASE_DATE,
          })),
          ...services.map((s) => ({
            path: `/${s.slug}`,
            lastmod: RELEASE_DATE,
          })),
        ];

        const urls = entries.map((e) => {
          const loc = e.path === "/" ? `${BASE_URL}/` : `${BASE_URL}${e.path}`;
          return [
            `  <url>`,
            `    <loc>${loc}</loc>`,
            `    <lastmod>${e.lastmod}</lastmod>`,
            `  </url>`,
          ].join("\n");
        });

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=UTF-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
          },
        });
      },
    },
  },
});
