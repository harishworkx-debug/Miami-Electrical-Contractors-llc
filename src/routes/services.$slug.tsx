import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, MessageCircle, AlertTriangle } from "lucide-react";
import { services, servicesBySlug, site } from "@/lib/site";
import { CtaBand } from "@/components/site/cta-band";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = servicesBySlug[params.slug];
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    const s = loaderData.service;
    return {
      meta: [
        { title: `${s.title} in Miami, FL | ${site.short}` },
        { name: "description", content: `${s.short} Call ${site.phone} for 24/7 service across Miami.` },
        { property: "og:title", content: `${s.title} in Miami, FL` },
        { property: "og:description", content: s.short },
        { property: "og:type", content: "article" },
        { property: "og:image", content: s.image },
        { property: "og:url", content: `/services/${params.slug}` },
        { name: "twitter:image", content: s.image },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: s.title,
            provider: { "@type": "Electrician", name: site.name, telephone: site.phone },
            areaServed: "Miami, FL",
            description: s.short,
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
      ],
    };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <div className="container-x py-24 text-center">
      <h1 className="font-display text-3xl font-semibold">Service not found</h1>
      <Link to="/services" className="mt-6 inline-flex btn-primary">All services</Link>
    </div>
  ),
});

function ServicePage() {
  const { service: s } = Route.useLoaderData() as { service: import("@/lib/site").Service };
  const related = s.related.map((slug) => servicesBySlug[slug]).filter(Boolean);

  return (
    <div>
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
        <img src={s.image} alt={s.title} className="absolute inset-0 h-full w-full object-cover opacity-30" loading="eager"/>
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/85 to-secondary/60" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative container-x py-24">
          <nav className="text-xs uppercase tracking-[0.18em] text-white/50">
            <Link to="/" className="hover:text-primary">Home</Link> · <Link to="/services" className="hover:text-primary">Services</Link> · <span className="text-primary">{s.title}</span>
          </nav>
          <h1 className="mt-6 font-display text-5xl md:text-6xl font-semibold leading-[1.05] max-w-3xl">
            {s.title} <span className="text-gradient">in Miami, FL</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/70 text-lg">{s.hero}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.phoneHref} className="btn-primary"><Phone className="h-4 w-4"/> Call Now</a>
            <a href={site.whatsapp} target="_blank" rel="noopener" className="btn-ghost bg-white/10 border-white/15 text-white hover:bg-white/15"><MessageCircle className="h-4 w-4"/> WhatsApp</a>
            <Link to="/contact" className="btn-ghost bg-white/10 border-white/15 text-white hover:bg-white/15">Free Estimate <ArrowRight className="h-4 w-4"/></Link>
          </div>
        </div>
      </section>

      <section className="container-x py-20 grid gap-14 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Overview</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-secondary">Why homeowners and businesses choose us for {s.title.toLowerCase()}.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">{s.body}</p>

          <div className="mt-10">
            <h3 className="font-display text-2xl font-semibold text-secondary">Benefits</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {s.benefits.map((b) => (
                <div key={b} className="flex items-start gap-3 rounded-2xl border border-border p-4">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0"/>
                  <div className="text-sm text-secondary/90">{b}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-display text-2xl font-semibold text-secondary">Common problems we fix</h3>
            <div className="mt-5 space-y-3">
              {s.problems.map((p) => (
                <div key={p} className="flex items-start gap-3 rounded-2xl bg-surface p-4 border border-border">
                  <AlertTriangle className="h-5 w-5 text-primary mt-0.5 shrink-0"/>
                  <div className="text-sm text-secondary/90">{p}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-display text-2xl font-semibold text-secondary">Our step-by-step process</h3>
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
            <h3 className="font-display text-2xl font-semibold text-secondary">Frequently asked questions</h3>
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
                <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/> {site.phone}</span>
                <ArrowRight className="h-4 w-4"/>
              </a>
              <a href={site.whatsapp} target="_blank" rel="noopener" className="flex items-center justify-between rounded-2xl bg-white/10 border border-white/15 px-4 py-3 font-semibold text-white hover:bg-white/15">
                <span className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4 text-[#25D366]"/> WhatsApp us</span>
                <ArrowRight className="h-4 w-4"/>
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
                    to="/services/$slug"
                    params={{ slug: r.slug }}
                    className="flex items-center justify-between rounded-xl border border-border px-4 py-3 hover:border-primary/40 hover:bg-surface transition"
                  >
                    <span className="text-sm font-semibold text-secondary">{r.title}</span>
                    <ArrowRight className="h-4 w-4 text-primary"/>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </section>

      <CtaBand title={`Book ${s.title.toLowerCase()} in Miami today.`} subtitle="Free estimates, licensed technicians, and 24/7 emergency response across Miami-Dade." />
    </div>
  );
}
