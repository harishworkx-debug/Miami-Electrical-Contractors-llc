import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, MessageCircle, AlertTriangle, MapPin, Star } from "lucide-react";
import {
  findPage,
  locations,
  servicesBySlug,
  services,
  site,
  type Location,
  type Service,
} from "@/lib/site";
import { CtaBand } from "@/components/site/cta-band";
import { Breadcrumbs, breadcrumbSchema, type Crumb } from "@/components/site/breadcrumbs";

const RESERVED = new Set([
  "services",
  "about",
  "reviews",
  "contact",
  "sitemap.xml",
]);

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    if (RESERVED.has(params.slug)) throw notFound();
    const match = findPage(params.slug);
    if (!match) throw notFound();
    return match;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Page not found" }, { name: "robots", content: "noindex" }] };

    const path = `/${params.slug}`;
    const url = `${site.url}${path}`;

    if (loaderData.type === "service") {
      const s = loaderData.service;
      const title = `${s.title} in Miami, FL | ${site.short}`;
      const desc = `${s.short} Call ${site.phone} for 24/7 service across Miami-Dade.`;
      const crumbs: Crumb[] = [
        { label: "Home", to: "/" },
        { label: "Services", to: "/services" },
        { label: s.title },
      ];
      return {
        meta: [
          { title },
          { name: "description", content: desc },
          { property: "og:title", content: title },
          { property: "og:description", content: desc },
          { property: "og:type", content: "article" },
          { property: "og:image", content: s.image },
          { property: "og:url", content: url },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: title },
          { name: "twitter:description", content: desc },
          { name: "twitter:image", content: s.image },
        ],
        links: [{ rel: "canonical", href: url }],
        scripts: [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: s.title,
              name: `${s.title} in Miami, FL`,
              description: s.short,
              areaServed: { "@type": "City", name: "Miami, FL" },
              provider: {
                "@type": "Electrician",
                name: site.name,
                telephone: site.phone,
                url: site.url,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: site.street,
                  addressLocality: site.city,
                  addressRegion: site.state,
                  postalCode: site.zip,
                  addressCountry: "US",
                },
              },
              url,
              image: s.image,
            }),
          },
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: s.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          },
          {
            type: "application/ld+json",
            children: JSON.stringify(breadcrumbSchema(crumbs, site.url)),
          },
        ],
      };
    }

    const l = loaderData.location;
    const title = `Electrician in ${l.city}, FL | ${site.short}`;
    const desc = `Licensed 24/7 electrician serving ${l.region}. Residential, commercial and industrial electrical service. Call ${site.phone} for a free estimate.`;
    const crumbs: Crumb[] = [
      { label: "Home", to: "/" },
      { label: "Locations", to: "/#locations" },
      { label: l.city },
    ];
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:image", content: l.image },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
        { name: "twitter:image", content: l.image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Electrician",
            "@id": `${url}#business`,
            name: `${site.name} — ${l.city}`,
            telephone: site.phone,
            url,
            image: l.image,
            areaServed: l.region,
            address: {
              "@type": "PostalAddress",
              streetAddress: site.street,
              addressLocality: site.city,
              addressRegion: site.state,
              postalCode: site.zip,
              addressCountry: "US",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
            ],
            priceRange: "$$",
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: l.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(breadcrumbSchema(crumbs, site.url)),
        },
      ],
    };
  },
  component: SlugPage,
  notFoundComponent: () => (
    <div className="container-x py-24 text-center">
      <h1 className="font-display text-3xl font-semibold">Page not found</h1>
      <div className="mt-6 flex justify-center gap-3">
        <Link to="/services" className="btn-primary">All services</Link>
        <Link to="/" className="btn-ghost">Home</Link>
      </div>
    </div>
  ),
});

function SlugPage() {
  const data = Route.useLoaderData();
  if (data.type === "service") return <ServicePageView service={data.service} />;
  return <LocationPageView location={data.location} />;
}

/* ------------------------------------------------------------------ */
/*  SERVICE PAGE VIEW                                                  */
/* ------------------------------------------------------------------ */

function ServicePageView({ service: s }: { service: Service }) {
  const related = s.related.map((slug) => servicesBySlug[slug]).filter(Boolean);
  const topAreas = locations.slice(0, 3);

  return (
    <div>
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
        <img src={s.image} alt={`${s.title} services in Miami, FL`} className="absolute inset-0 h-full w-full object-cover opacity-30" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/85 to-secondary/60" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative container-x py-24">
          <Breadcrumbs
            tone="dark"
            items={[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: s.title },
            ]}
          />
          <h1 className="mt-6 font-display text-5xl md:text-6xl font-semibold leading-[1.05] max-w-3xl">
            {s.title} <span className="text-gradient">in Miami, FL</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/70 text-lg">{s.hero}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.phoneHref} className="btn-primary"><Phone className="h-4 w-4" /> Call {site.phone}</a>
            <a href={site.whatsapp} target="_blank" rel="noopener" className="btn-ghost bg-white/10 border-white/15 text-white hover:bg-white/15"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
            <Link to="/contact" className="btn-ghost bg-white/10 border-white/15 text-white hover:bg-white/15">Free Estimate <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="container-x py-20 grid gap-14 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Overview</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-secondary">
            {s.title.toLowerCase()} — done right, the first time.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">{s.body}</p>

          <div className="mt-10">
            <h2 className="font-display text-2xl font-semibold text-secondary">Benefits</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {s.benefits.map((b) => (
                <div key={b} className="flex items-start gap-3 rounded-2xl border border-border p-4">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div className="text-sm text-secondary/90">{b}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-2xl font-semibold text-secondary">What's included</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {s.features.map((b) => (
                <div key={b} className="flex items-start gap-3 rounded-2xl bg-surface p-4 border border-border">
                  <Star className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div className="text-sm text-secondary/90">{b}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-2xl font-semibold text-secondary">Common problems we fix</h2>
            <div className="mt-5 space-y-3">
              {s.problems.map((p) => (
                <div key={p} className="flex items-start gap-3 rounded-2xl bg-surface p-4 border border-border">
                  <AlertTriangle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div className="text-sm text-secondary/90">{p}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-2xl font-semibold text-secondary">Our step-by-step process</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {s.process.map((p, i) => (
                <div key={p.title} className="relative rounded-2xl border border-border p-6">
                  <div className="font-display text-3xl font-semibold text-primary">0{i + 1}</div>
                  <div className="mt-2 font-semibold text-secondary">{p.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{p.body}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-2xl font-semibold text-secondary">Why choose {site.short}</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {s.whyChooseUs.map((b) => (
                <div key={b} className="flex items-start gap-3 rounded-2xl border border-border p-4">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div className="text-sm text-secondary/90">{b}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-2xl font-semibold text-secondary">Frequently asked questions</h2>
            <div className="mt-5 space-y-3">
              {s.faqs.map((f, i) => (
                <details key={i} className="group rounded-2xl bg-card border border-border p-5 open:shadow-elegant">
                  <summary className="cursor-pointer font-semibold text-secondary flex items-center justify-between">
                    {f.q}
                    <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 h-max space-y-6">
          <div className="rounded-3xl bg-secondary text-white p-7 shadow-elegant">
            <div className="text-xs uppercase tracking-[0.18em] text-primary">24/7 Service</div>
            <div className="mt-2 font-display text-2xl font-semibold">Talk to a licensed electrician</div>
            <p className="mt-2 text-sm text-white/70">Free estimates. Same-day service across Miami-Dade.</p>
            <div className="mt-5 space-y-3">
              <a href={site.phoneHref} className="flex items-center justify-between rounded-2xl bg-primary text-primary-foreground px-4 py-3 font-semibold">
                <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {site.phone}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={site.whatsapp} target="_blank" rel="noopener" className="flex items-center justify-between rounded-2xl bg-white/10 border border-white/15 px-4 py-3 font-semibold text-white hover:bg-white/15">
                <span className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp us</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {related.length > 0 && (
            <div className="rounded-3xl border border-border bg-card p-7">
              <div className="text-xs uppercase tracking-[0.18em] text-primary">Related services</div>
              <div className="mt-4 space-y-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to="/$slug"
                    params={{ slug: r.slug }}
                    className="flex items-center justify-between rounded-xl border border-border px-4 py-3 hover:border-primary/40 hover:bg-surface transition"
                  >
                    <span className="text-sm font-semibold text-secondary">{r.title}</span>
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="rounded-3xl border border-border bg-card p-7">
            <div className="text-xs uppercase tracking-[0.18em] text-primary">We serve</div>
            <div className="mt-4 space-y-2">
              {topAreas.map((a) => (
                <Link
                  key={a.slug}
                  to="/$slug"
                  params={{ slug: a.slug }}
                  className="flex items-center justify-between rounded-xl border border-border px-4 py-3 hover:border-primary/40 hover:bg-surface transition"
                >
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-secondary">
                    <MapPin className="h-4 w-4 text-primary" /> Electrician in {a.city}
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <CtaBand title={`Book ${s.title.toLowerCase()} in Miami today.`} subtitle="Free estimates, licensed technicians, and 24/7 emergency response across Miami-Dade." />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  LOCATION PAGE VIEW                                                 */
/* ------------------------------------------------------------------ */

function LocationPageView({ location: l }: { location: Location }) {
  const others = locations.filter((x) => x.slug !== l.slug).slice(0, 6);

  return (
    <div>
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
        <img src={l.image} alt={`Electrician in ${l.city}, FL`} className="absolute inset-0 h-full w-full object-cover opacity-40" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/85 to-secondary/60" />
        <div className="relative container-x py-24">
          <Breadcrumbs
            tone="dark"
            items={[
              { label: "Home", to: "/" },
              { label: "Locations" },
              { label: l.city },
            ]}
          />
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary border border-white/10">
            <MapPin className="h-3.5 w-3.5" /> Service area
          </div>
          <h1 className="mt-5 font-display text-5xl md:text-6xl font-semibold leading-[1.05] max-w-3xl">
            Electrician in <span className="text-gradient">{l.city}, FL</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/70 text-lg">{l.hero}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.phoneHref} className="btn-primary"><Phone className="h-4 w-4" /> Call {site.phone}</a>
            <a href={site.whatsapp} target="_blank" rel="noopener" className="btn-ghost bg-white/10 border-white/15 text-white hover:bg-white/15"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="container-x py-20 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Local electrician</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-secondary">Your local electrician in {l.city}.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">{l.intro}</p>

          <div className="mt-8 rounded-2xl border border-border p-5 bg-surface">
            <div className="text-xs uppercase tracking-[0.18em] text-primary">Response time</div>
            <div className="mt-2 text-secondary font-semibold">{l.response}</div>
          </div>

          <div className="mt-8">
            <h2 className="font-display text-xl font-semibold text-secondary">Landmarks nearby</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {l.landmarks.map((n) => (
                <span key={n} className="rounded-full bg-surface border border-border px-4 py-1.5 text-sm text-secondary/80">{n}</span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-display text-xl font-semibold text-secondary">Neighborhoods we serve in {l.city}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {l.neighborhoods.map((n) => (
                <span key={n} className="rounded-full bg-white border border-border px-4 py-1.5 text-sm text-secondary/80">{n}</span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-xl font-semibold text-secondary">Why {l.city} chooses us</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "60-minute emergency response",
                "Free written estimates",
                "Licensed & insured in Florida",
                "Veteran-owned crews",
                "Permits pulled for every job",
                "10-year workmanship warranty",
              ].map((b) => (
                <div key={b} className="flex items-start gap-3 rounded-2xl border border-border p-4">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <div className="text-sm text-secondary/90">{b}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-xl font-semibold text-secondary">Electrical services offered in {l.city}</h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to="/$slug"
                  params={{ slug: s.slug }}
                  className="flex items-center justify-between rounded-xl border border-border px-4 py-3 hover:border-primary/40 hover:bg-surface transition text-sm"
                >
                  <span className="text-secondary font-medium">{s.title}</span>
                  <ArrowRight className="h-4 w-4 text-primary" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-xl font-semibold text-secondary">FAQs — Electrician in {l.city}</h2>
            <div className="mt-5 space-y-3">
              {l.faqs.map((f, i) => (
                <details key={i} className="group rounded-2xl bg-card border border-border p-5 open:shadow-elegant">
                  <summary className="cursor-pointer font-semibold text-secondary flex items-center justify-between">
                    {f.q}
                    <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 h-max space-y-6">
          <div className="rounded-3xl bg-secondary text-white p-7 shadow-elegant">
            <div className="text-xs uppercase tracking-[0.18em] text-primary">Serving {l.city} 24/7</div>
            <div className="mt-2 font-display text-2xl font-semibold">Call now for immediate service</div>
            <div className="mt-5 space-y-3">
              <a href={site.phoneHref} className="flex items-center justify-between rounded-2xl bg-primary text-primary-foreground px-4 py-3 font-semibold">
                <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {site.phone}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={site.whatsapp} target="_blank" rel="noopener" className="flex items-center justify-between rounded-2xl bg-white/10 border border-white/15 px-4 py-3 font-semibold text-white hover:bg-white/15">
                <span className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp us</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
            <iframe
              title={`Map of ${l.city}`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.1836064538884!2d-80.19118068897681!3d25.797516077234835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b70b8cba41cd%3A0xba7837b78c47a537!2sMiami%20Electrical%20Contractors%20llc!5e0!3m2!1sen!2sin!4v1784981444597!5m2!1sen!2sin"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="rounded-3xl border border-border bg-card p-7">
            <div className="text-xs uppercase tracking-[0.18em] text-primary">Other service areas</div>
            <div className="mt-4 space-y-2">
              {others.map((o) => (
                <Link key={o.slug} to="/$slug" params={{ slug: o.slug }} className="flex items-center justify-between rounded-xl border border-border px-4 py-3 hover:border-primary/40 hover:bg-surface transition">
                  <span className="text-sm font-semibold text-secondary">Electrician in {o.city}</span>
                  <ArrowRight className="h-4 w-4 text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <CtaBand title={`Need an electrician in ${l.city} right now?`} subtitle="Call or WhatsApp us — a licensed electrician is standing by 24/7." />
    </div>
  );
}
