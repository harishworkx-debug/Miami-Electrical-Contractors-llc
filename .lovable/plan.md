
# SEO Architecture Rebuild — Miami Electrical Contractors LLC

Design, colors, animations, layout, spacing and hero visuals stay exactly as they are. Only architecture, content, URLs, nav, metadata, schema and linking change.

## 1. URL structure (flat, keyword-rich)

Move from `/services/$slug` and `/areas/$slug` to flat slugs at the root, matching the spec:

- Static: `/`, `/services`, `/about`, `/reviews`, `/contact`
- 20 service pages under root: `/electrician-miami-fl`, `/emergency-electrician-miami-fl`, `/electrical-repair-miami-fl`, `/electrical-installation-miami-fl`, `/panel-upgrade-miami-fl`, `/electrical-wiring-miami-fl`, `/lighting-installation-miami-fl`, `/outdoor-lighting-miami-fl`, `/commercial-electrician-miami-fl`, `/residential-electrician-miami-fl`, `/ev-charger-installation-miami-fl`, `/generator-installation-miami-fl`, `/surge-protection-miami-fl`, `/ceiling-fan-installation-miami-fl`, `/circuit-breaker-repair-miami-fl`, `/outlet-repair-miami-fl`, `/switch-installation-miami-fl`, `/electrical-inspection-miami-fl`, `/rewiring-miami-fl`, `/code-correction-miami-fl`
- 10 location pages under root: `/electrician-miami-fl` (shared with pillar service), `/electrician-coral-gables-fl`, `/electrician-south-miami-fl`, `/electrician-miami-beach-fl`, `/electrician-hialeah-fl`, `/electrician-kendall-fl`, `/electrician-doral-fl`, `/electrician-homestead-fl`, `/electrician-pinecrest-fl`, `/electrician-north-miami-fl`

`/electrician-miami-fl` is treated as one page that acts as both the "Electrician in Miami" service pillar AND the Miami location page — merging the two lists where they overlap.

Old `/services/$slug` and `/areas/$slug` routes are removed; the `/services` index becomes a directory listing that links to the new flat URLs.

## 2. Content data model

Rewrite `src/lib/site.ts`:

- `services`: 19 entries (all above except `electrician-miami-fl`, which lives in `locations`)
- `locations`: 10 entries with the new slugs; Miami entry doubles as pillar
- Each entry has: unique intro, benefits, features/process, "why choose us", FAQs (2–4), related slugs, hero copy, image
- Add helpers: `serviceMenuGroups` (Repair, Installation, Panels, Lighting, EV/Generator, Residential/Commercial) for nav dropdown, `pageBySlug` combined map
- All content is unique, location- and service-specific, no keyword stuffing

## 3. Routing

- Delete `src/routes/services.$slug.tsx` and `src/routes/areas.$slug.tsx`
- Add `src/routes/$slug.tsx` — single dynamic route that:
  - looks up slug in combined map (service or location)
  - throws `notFound()` on miss
  - renders `<ServicePageView>` or `<LocationPageView>` reusing the existing designs from the removed files
  - emits per-page `head()` with title, description, og:*, canonical, JSON-LD (`Service` + `FAQPage` for services, `LocalBusiness`/`Electrician` + `FAQPage` for locations, `BreadcrumbList` for both)
- Keep `/services` index; update its links to point at the new flat URLs

## 4. Navigation & breadcrumbs

- `src/components/site/nav.tsx`: add Services and Locations dropdowns (hover on desktop, expand on mobile). Menu items match the spec: Home, About, Services ▾, Locations ▾, Reviews, Contact. Keep the exact styling; only add the dropdown chrome using existing tokens.
- New `src/components/site/breadcrumbs.tsx`: renders `Home › Services › Current` (or `Home › Locations › Current`) with matching JSON-LD emitted by the page's `head()`.
- Update `src/components/site/footer.tsx` link lists to use the new flat slugs and add the missing 10 locations / new service groups.

## 5. Sitemap, robots & schema

- `src/routes/sitemap[.]xml.ts`: use `https://miamielectricalcontracting.com` as `BASE_URL`, include all flat service + location URLs plus static routes, no `<lastmod>`.
- `public/robots.txt`: set the real `Sitemap:` URL.
- `src/routes/__root.tsx`: keep the existing `Electrician` JSON-LD, add `Organization` and `WebSite` (with `SearchAction` omitted since there's no site search), keep meta defaults. Update the `@id`/`url` to the real domain.
- Home route already has `FAQPage`; keep it. Service/location pages get their own `Service` / `Electrician` + `FAQPage` + `BreadcrumbList` graphs.

## 6. Meta titles (per spec)

- Home: "Electrician in Miami, FL | Miami Electrical Contractors LLC"
- Services: "Electrical Services in Miami, FL | Miami Electrical Contractors LLC"
- Service page: "{Service} in Miami, FL | Miami Electrical Contractors LLC"
- Location page: "Electrician in {City} | Miami Electrical Contractors LLC"
- About / Reviews / Contact: per-spec titles

All pages get a unique description, `og:title`, `og:description`, `og:type`, `og:url`, `twitter:card`, and a self-referential absolute canonical.

## 7. Internal linking

- Home → /services and top service pages, plus 3 featured location pages
- /services → every service page
- Service page → 3 related services + 3 top location pages + /contact
- Location page → every service (as "services offered in {city}") + 3 other locations + /contact
- Footer surfaces the full service and location grids

## 8. Files touched

Modified: `src/lib/site.ts`, `src/routes/__root.tsx`, `src/routes/index.tsx` (link updates only), `src/routes/services.tsx`, `src/routes/sitemap[.]xml.ts`, `src/components/site/nav.tsx`, `src/components/site/footer.tsx`, `public/robots.txt`

Added: `src/routes/$slug.tsx`, `src/components/site/breadcrumbs.tsx`

Removed: `src/routes/services.$slug.tsx`, `src/routes/areas.$slug.tsx`

No design changes, no dependency changes.

## Note on scope

Because this rebuild produces 30 landing pages of unique copy (benefits, features, process, FAQs) in one pass, the added content is tight, professional and locally-specific rather than long-form. If you want deeper long-form copy (800+ words) on any specific page, tell me which ones and I'll expand them after the architecture ships.
