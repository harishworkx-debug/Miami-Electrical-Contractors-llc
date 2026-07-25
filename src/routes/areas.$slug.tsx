import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { locations, locationsBySlug, services, site } from "@/lib/site";
import { CtaBand } from "@/components/site/cta-band";

export const Route = createFileRoute("/areas/$slug")({
  loader: ({ params }) => {
    const location = locationsBySlug[params.slug];
    if (!location) throw notFound();
    return { location };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Area not found" }, { name: "robots", content: "noindex" }] };
    const l = loaderData.location;
    const title = `Electrician in ${l.city}, FL | ${site.short}`;
    const desc = `Licensed 24/7 electrician serving ${l.region}. Residential, commercial and industrial electrical service. Call ${site.phone} for a free estimate.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:image", content: l.image },
        { property: "og:url", content: `/areas/${params.slug}` },
        { name: "twitter:image", content: l.image },
      ],
      links: [{ rel: "canonical", href: `/areas/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Electrician",
            name: `${site.name} — ${l.city}`,
            areaServed: l.region,
            telephone: site.phone,
            address: { "@type": "PostalAddress", streetAddress: site.street, addressLocality: site.city, addressRegion: site.state, postalCode: site.zip, addressCountry: "US" },
          }),
        },
      ],
    };
  },
  component: AreaPage,
  notFoundComponent: () => (
    <div className="container-x py-24 text-center">
      <h1 className="font-display text-3xl font-semibold">Area not found</h1>
      <Link to="/" className="mt-6 inline-flex btn-primary">Home</Link>
    </div>
  ),
});

function AreaPage() {
  const { location: l } = Route.useLoaderData();
  const others = locations.filter((x) => x.slug !== l.slug);

  return (
    <div>
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
        <img src={l.image} alt={`${l.city} skyline`} className="absolute inset-0 h-full w-full object-cover opacity-40" loading="eager"/>
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/85 to-secondary/60" />
        <div className="relative container-x py-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary border border-white/10">
            <MapPin className="h-3.5 w-3.5"/> Service area
          </div>
          <h1 className="mt-5 font-display text-5xl md:text-6xl font-semibold leading-[1.05] max-w-3xl">
            Electrician in <span className="text-gradient">{l.city}, FL</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/70 text-lg">{l.hero}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.phoneHref} className="btn-primary"><Phone className="h-4 w-4"/> Call {site.phone}</a>
            <a href={site.whatsapp} target="_blank" rel="noopener" className="btn-ghost bg-white/10 border-white/15 text-white hover:bg-white/15"><MessageCircle className="h-4 w-4"/> WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="container-x py-20 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Local electrician</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-secondary">Your local electrician in {l.city}.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            {site.name} is a veteran-owned electrical contractor serving {l.region} 24 hours a day. Our licensed team supports every kind of electrical need — from a single outlet install to a full commercial build-out. We know {l.city} homes and businesses, and we work quickly, cleanly and to code every time.
          </p>

          <div className="mt-8">
            <h3 className="font-display text-xl font-semibold text-secondary">Nearby landmarks & neighborhoods</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {l.landmarks.map((n) => (
                <span key={n} className="rounded-full bg-surface border border-border px-4 py-1.5 text-sm text-secondary/80">{n}</span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-display text-xl font-semibold text-secondary">Why {l.city} chooses us</h3>
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
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5"/>
                  <div className="text-sm text-secondary/90">{b}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-display text-xl font-semibold text-secondary">Services offered in {l.city}</h3>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {services.map((s) => (
                <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="flex items-center justify-between rounded-xl border border-border px-4 py-3 hover:border-primary/40 hover:bg-surface transition text-sm">
                  <span className="text-secondary font-medium">{s.title}</span>
                  <ArrowRight className="h-4 w-4 text-primary"/>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-display text-xl font-semibold text-secondary">FAQs — {l.city}</h3>
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
                <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/> {site.phone}</span>
                <ArrowRight className="h-4 w-4"/>
              </a>
              <a href={site.whatsapp} target="_blank" rel="noopener" className="flex items-center justify-between rounded-2xl bg-white/10 border border-white/15 px-4 py-3 font-semibold text-white hover:bg-white/15">
                <span className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4 text-[#25D366]"/> WhatsApp us</span>
                <ArrowRight className="h-4 w-4"/>
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
                <Link key={o.slug} to="/areas/$slug" params={{ slug: o.slug }} className="flex items-center justify-between rounded-xl border border-border px-4 py-3 hover:border-primary/40 hover:bg-surface transition">
                  <span className="text-sm font-semibold text-secondary">Electrician in {o.city}</span>
                  <ArrowRight className="h-4 w-4 text-primary"/>
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
