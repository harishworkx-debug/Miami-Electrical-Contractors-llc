import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { services, site, serviceMenuGroups } from "@/lib/site";
import { CtaBand } from "@/components/site/cta-band";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/breadcrumbs";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Electrical Services in Miami, FL | Miami Electrical Contractors LLC" },
      { name: "description", content: "Full-service electrical contractor in Miami, FL — emergency repair, panel upgrades, wiring, lighting, EV chargers, generators, commercial and residential electrical service." },
      { property: "og:title", content: "Electrical Services in Miami, FL | Miami Electrical Contractors LLC" },
      { property: "og:description", content: "Every kind of electrical service across Miami and South Florida. 24/7 licensed electricians." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${site.url}/services` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Electrical Services in Miami, FL | Miami Electrical Contractors LLC" },
      { name: "twitter:description", content: "Every kind of electrical service across Miami. 24/7 licensed electricians." },
    ],
    links: [{ rel: "canonical", href: `${site.url}/services` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema(
          [{ label: "Home", to: "/" }, { label: "Services" }],
          site.url,
        )),
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <div>
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -bottom-40 -left-40 h-[36rem] w-[36rem] rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(closest-side, oklch(0.77 0.17 68 / 0.6), transparent)" }} />
        <div className="relative container-x py-24">
          <Breadcrumbs tone="dark" items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary border border-white/10">Our Services</div>
            <h1 className="mt-5 font-display text-5xl md:text-6xl font-semibold leading-[1.05]">
              Every kind of <span className="text-gradient">electrical work</span> — one licensed contractor.
            </h1>
            <p className="mt-6 max-w-xl text-white/70 text-lg">
              From single outlets to full building services, we deliver electrical work that's clean, code-compliant, and built to last across Miami and South Florida.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.phoneHref} className="btn-primary"><Phone className="h-4 w-4" /> Call {site.phone}</a>
              <Link to="/contact" className="btn-ghost bg-white/10 border-white/15 text-white hover:bg-white/15">Free Estimate <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-20 space-y-14">
        {serviceMenuGroups.map((g) => (
          <div key={g.label}>
            <div className="flex items-baseline justify-between gap-6 mb-6">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-secondary">{g.label}</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {g.items.map((it) => {
                const s = services.find((x) => x.slug === it.slug)!;
                return (
                  <Link
                    key={s.slug}
                    to="/$slug"
                    params={{ slug: s.slug }}
                    className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-elegant hover:-translate-y-1 transition"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                    </div>
                    <div className="p-7">
                      <h3 className="font-display text-xl font-semibold text-secondary group-hover:text-primary transition">{s.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground">{s.short}</p>
                      <div className="mt-5 space-y-2">
                        {s.benefits.slice(0, 3).map((b) => (
                          <div key={b} className="flex items-center gap-2 text-sm text-secondary/80">
                            <CheckCircle2 className="h-4 w-4 text-primary" /> {b}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <CtaBand title="Not sure which service you need?" subtitle="Call a licensed Miami electrician — we'll help you diagnose the issue and quote you a fair, fixed price." />
    </div>
  );
}
