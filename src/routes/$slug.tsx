import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  AlertTriangle,
  MapPin,
  Star,
  Building2,
  FileText,
  Award,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import {
  findPage,
  locations,
  servicesBySlug,
  services,
  site,
  type Location,
  type Service,
} from "@/lib/site";
import { locationDetailsBySlug, serviceDetailsBySlug } from "@/lib/local-data";
import { CtaBand } from "@/components/site/cta-band";
import { Breadcrumbs, breadcrumbSchema, type Crumb } from "@/components/site/breadcrumbs";

const RESERVED = new Set(["services", "about", "reviews", "contact", "sitemap.xml"]);

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    if (RESERVED.has(params.slug)) throw notFound();
    const match = findPage(params.slug);
    if (!match) throw notFound();
    return match;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData)
      return { meta: [{ title: "Page not found" }, { name: "robots", content: "noindex" }] };

    const path = `/${params.slug}`;
    const url = `${site.url}${path}`;

    if (loaderData.type === "service") {
      const s = loaderData.service;
      const customMeta: Record<string, { title: string; desc: string }> = {
        "emergency-electrician-miami-fl": {
          title: "24-Hour Emergency Electrician in Miami, FL",
          desc: "24/7 emergency electrician in Miami, FL. Fast response for power outages, smoking panels, sparking outlets, and electrical hazards. Call (305) 679-6434.",
        },
        "panel-upgrade-miami-fl": {
          title: "Electrical Panel Upgrade in Miami, FL",
          desc: "Licensed electrical panel upgrades in Miami, FL. Replace outdated 100A, Zinsco, or FPE panels with 200A/400A modern service. Full permitting & FPL coordination.",
        },
        "ev-charger-installation-miami-fl": {
          title: "EV Charger Installation in Miami, FL",
          desc: "Certified Level 2 EV charger installation in Miami, FL for Tesla, Rivian, and all electric vehicles. Dedicated circuits, load calculations, and permits.",
        },
        "commercial-electrician-miami-fl": {
          title: "Commercial Electrician in Miami, FL | Miami Electrical Contractors",
          desc: "State-certified commercial electrical contractor in Miami, FL. 3-phase power, switchgear, tenant build-outs, and commercial code corrections.",
        },
        "residential-electrician-miami-fl": {
          title: "Residential Electrician in Miami, FL | Miami Electrical Contractors",
          desc: "Trusted residential electrician in Miami, FL. Panel upgrades, whole-home rewiring, lighting installation, and home electrical repairs. Lic. #EC13010482.",
        },
        "electrical-repair-miami-fl": {
          title: "Electrical Repair in Miami, FL | Miami Electrical Contractors",
          desc: "Prompt, code-compliant electrical repairs for breakers, outlets, switches, and wiring across Miami-Dade County. Call (305) 679-6434.",
        },
        "electrical-wiring-miami-fl": {
          title: "Electrical Wiring & Rewiring in Miami, FL",
          desc: "Safe, permitted electrical wiring and whole-house rewiring in Miami, FL. Eliminating knob-and-tube and ungrounded cloth circuits.",
        },
        "generator-installation-miami-fl": {
          title: "Generator Installation in Miami, FL",
          desc: "Turnkey whole-home standby generator installations in Miami, FL. Automatic transfer switches, Kohler & Generac systems, and complete permitting.",
        },
        "surge-protection-miami-fl": {
          title: "Surge Protection in Miami, FL",
          desc: "Whole-home and commercial Type 1 & 2 surge protection in Miami, FL. Safeguard sensitive electronics, AC units, and appliances from lightning strikes.",
        },
      };

      const metaInfo = customMeta[s.slug];
      const title = metaInfo?.title || `${s.title} in Miami, FL | Miami Electrical Contractors`;
      const desc =
        metaInfo?.desc || `${s.short} Licensed electrical contractor (Lic. #EC13010482). Call ${site.phone} for 24/7 service.`;
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
    const isMiami = l.slug === "electrician-miami-fl";
    const title = isMiami
      ? "Electrician in Miami, FL | Miami Electrical Contractors"
      : `Electrician in ${l.city}, FL | Miami Electrical Contractors`;
    const desc = isMiami
      ? "State-certified electrical contractor (Lic. #EC13010482) serving Miami, FL. 24/7 emergency service, residential, commercial, panel upgrades, and repairs."
      : `Licensed electrical contractor (Lic. #EC13010482) serving ${l.city}, FL. 24/7 emergency electrical service, panel upgrades, and repairs. Call ${site.phone}.`;
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
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
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
        <Link to="/services" className="btn-primary">
          All services
        </Link>
        <Link to="/" className="btn-ghost">
          Home
        </Link>
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
  const serviceDetail = serviceDetailsBySlug[s.slug];
  const processSteps = serviceDetail?.process || s.process;
  const whyChooseList = serviceDetail?.whyChoose || s.whyChooseUs;
  const related = s.related.map((slug) => servicesBySlug[slug]).filter(Boolean);
  const topAreas = locations.slice(0, 3);

  return (
    <div>
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
        <img
          src={s.image}
          alt={`${s.title} services in Miami, FL`}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          loading="eager"
        />
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
            <a href={site.phoneHref} className="btn-primary">
              <Phone className="h-4 w-4" /> Call {site.phone}
            </a>
            <Link
              to="/contact"
              className="btn-ghost bg-white/10 border-white/15 text-white hover:bg-white/15"
            >
              Free Estimate <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-x py-20 grid gap-14 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Overview
          </div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-secondary">
            {s.title} — code-compliant and built to last.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">{s.body}</p>

          {/* Service-Specific Case Study Spotlight */}
          {serviceDetail?.caseStudy && (
            <div className="mt-10 rounded-3xl border border-border bg-gradient-to-b from-card to-surface p-7 shadow-elegant">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <Award className="h-4 w-4" />
                Verified Project Spotlight
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold text-secondary">
                {serviceDetail.caseStudy.title}
              </h3>
              <div className="mt-2 text-xs text-muted-foreground font-medium">
                {serviceDetail.caseStudy.neighborhood} · Equipment: {serviceDetail.caseStudy.equipment}
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 text-xs text-muted-foreground">
                <div className="rounded-2xl border border-border bg-card p-4">
                  <div className="font-semibold text-secondary mb-1">Challenge:</div>
                  <p className="leading-relaxed">{serviceDetail.caseStudy.challenge}</p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-4">
                  <div className="font-semibold text-secondary mb-1">Engineered Solution:</div>
                  <p className="leading-relaxed">{serviceDetail.caseStudy.solution}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Verified Result: {serviceDetail.caseStudy.result}</span>
              </div>
            </div>
          )}

          {/* Permitting & Inspection Notes */}
          {serviceDetail?.permitDetails && (
            <div className="mt-8 rounded-2xl border border-border/80 bg-surface/80 p-5 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary mt-0.5">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-secondary text-sm">
                  Florida Permitting & Inspection Requirements
                </div>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {serviceDetail.permitDetails.inspectionNotes} Jurisdiction: {serviceDetail.permitDetails.permittingAgency}. We handle all engineering single-line diagrams, municipal fee calculations, and inspector scheduling.
                </p>
              </div>
            </div>
          )}

          {/* Scope of Work & Included Materials */}
          <div className="mt-12">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Scope of Work
            </div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-semibold text-secondary">
              What's Included in Our {s.title}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Every installation and repair is executed by licensed journeymen and master electricians using commercial-grade, UL-listed hardware engineered for South Florida climate conditions:
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {s.features.map((b) => (
                <div
                  key={b}
                  className="flex items-start gap-3 rounded-2xl bg-surface p-4 border border-border"
                >
                  <Star className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div className="text-sm font-medium text-secondary/90">{b}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Symptoms, Diagnostic Solutions & Immediate Action Warning */}
          <div className="mt-12">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Diagnostics & Warning Signs
            </div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-semibold text-secondary">
              Common Symptoms & When to Seek Professional Assessment
            </h2>
            <div className="mt-5 space-y-3">
              {s.problems.map((p) => (
                <div
                  key={p}
                  className="flex items-start gap-3 rounded-2xl bg-surface/70 p-4 border border-border"
                >
                  <AlertTriangle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-secondary">{p}</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      Diagnostic assessment recommended to test circuit load, insulation resistance, and terminal torque before thermal failure occurs.
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* When to call emergency assessment */}
            <div className="mt-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 p-5 flex items-start gap-3.5">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-secondary font-semibold block mb-0.5">
                  Critical Hazard Warning:
                </strong>
                If you detect a persistent burning plastic odor, hear continuous crackling or buzzing from a panel, notice scorched receptacle faces, or experience partial building power loss, turn off the main circuit breaker if safe to do so and call our 24/7 emergency dispatch immediately at{" "}
                <a href={site.phoneHref} className="font-semibold text-primary hover:underline">
                  {site.phone}
                </a>.
              </div>
            </div>
          </div>

          {/* Step-by-Step Engineering Process */}
          <div className="mt-12">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Execution Methodology
            </div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-semibold text-secondary">
              Our Step-by-Step Engineering Process
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {processSteps.map((p, i) => (
                <div key={p.title} className="relative rounded-2xl border border-border p-6 bg-card">
                  <div className="font-display text-3xl font-semibold text-primary">0{i + 1}</div>
                  <div className="mt-2 font-semibold text-secondary">{p.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.body}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Guidance & Transparent Cost Factors */}
          <div className="mt-12 rounded-3xl border border-border bg-gradient-to-b from-card to-surface p-7 shadow-elegant">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Pricing Transparency
            </div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-semibold text-secondary">
              Cost Factors & Written Estimate Guarantee
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              We never use misleading phone quotes or arbitrary flat rates. Every electrical job is unique to your building's existing wiring, panel condition, and municipal code requirements. Below are the actual engineering factors that determine project costs:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 text-xs text-muted-foreground">
              <div className="rounded-2xl border border-border bg-card p-4">
                <span className="font-semibold text-secondary block mb-1">1. Service Amperage & Load Demands</span>
                Sizing from standard 100A/150A to 200A or heavy 400A continuous service determines conductor sizing and switchgear requirements.
              </div>
              <div className="rounded-2xl border border-border bg-card p-4">
                <span className="font-semibold text-secondary block mb-1">2. Run Length & Copper Gauge</span>
                Distance from main distribution panel to equipment, requiring heavy-gauge THHN copper conductors and conduit sizing.
              </div>
              <div className="rounded-2xl border border-border bg-card p-4">
                <span className="font-semibold text-secondary block mb-1">3. Wall Construction & Accessibility</span>
                Concrete block structure (CBS) core drilling, exterior weatherhead penetrations, or attic wire fishing.
              </div>
              <div className="rounded-2xl border border-border bg-card p-4">
                <span className="font-semibold text-secondary block mb-1">4. Municipal Permit Fees & FPL Coordination</span>
                City building department plan review fees, FPL utility meter disconnect/reconnect fees, and final inspection scheduling.
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs text-muted-foreground">
                <strong className="text-secondary font-semibold">Our Pricing Promise:</strong> You receive a comprehensive, itemized written estimate before any work commences. No surprise charges, ever.
              </div>
              <Link to="/contact" className="btn-primary text-xs py-2 px-4 shrink-0">
                Request Free Estimate
              </Link>
            </div>
          </div>

          {/* Why Choose Our Licensed Team */}
          <div className="mt-12">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Quality Assurance
            </div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-semibold text-secondary">
              Why Choose {site.short} for {s.title}
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {whyChooseList.map((b) => (
                <div
                  key={b}
                  className="flex items-start gap-3 rounded-2xl border border-border p-4 bg-card"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div className="text-sm text-secondary/90">{b}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="mt-12">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Client Questions
            </div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-semibold text-secondary">
              Frequently Asked Questions About {s.title}
            </h2>
            <div className="mt-5 space-y-3">
              {s.faqs.map((f, i) => (
                <details
                  key={i}
                  className="group rounded-2xl bg-card border border-border p-5 open:shadow-elegant"
                >
                  <summary className="cursor-pointer font-semibold text-secondary flex items-center justify-between">
                    {f.q}
                    <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 h-max space-y-6">
          <div className="rounded-3xl bg-secondary text-white p-7 shadow-elegant">
            <div className="text-xs uppercase tracking-[0.18em] text-primary">24/7 Service</div>
            <div className="mt-2 font-display text-2xl font-semibold">
              Talk to a licensed electrician
            </div>
            <p className="mt-2 text-sm text-white/70">
              Florida State Certified EC (#EC13010482). Free written estimates & same-day response.
            </p>
            <div className="mt-5 space-y-3">
              <a
                href={site.phoneHref}
                className="flex items-center justify-between rounded-2xl bg-primary text-primary-foreground px-4 py-3 font-semibold"
              >
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" /> {site.phone}
                </span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {related.length > 0 && (
            <div className="rounded-3xl border border-border bg-card p-7">
              <div className="text-xs uppercase tracking-[0.18em] text-primary">
                Related services
              </div>
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

      <CtaBand
        title={`Book ${s.title.toLowerCase()} in Miami today.`}
        subtitle="Florida Licensed Electrical Contractor (#EC13010482) · $2M Insured · 1-Year Workmanship Warranty."
      />
    </div>
  );
}


/* ------------------------------------------------------------------ */
/*  LOCATION PAGE VIEW                                                 */
/* ------------------------------------------------------------------ */

function LocationPageView({ location: l }: { location: Location }) {
  const localData = locationDetailsBySlug[l.slug];
  const others = locations.filter((x) => x.slug !== l.slug).slice(0, 6);

  const displayFaqs =
    localData?.localFaqs && localData.localFaqs.length > 0 ? localData.localFaqs : l.faqs;

  const challenges = localData?.challenges || [
    {
      title: `Electrical Service Upgrades in ${l.city}`,
      description: `Modern appliances, high-efficiency heat pumps, and electric vehicles require safe 200A service panels. We upgrade outdated installations to current Florida code.`,
      badge: "Service Modernization",
    },
    {
      title: `Storm Resilience & Surge Protection`,
      description: `South Florida thunderstorms and hurricane-force winds subject local meters and lines to severe voltage surges. We install whole-property surge suppression.`,
      badge: "Storm Protection",
    },
    {
      title: `Code-Compliant Permitting`,
      description: `All electrical repairs, rewires, and panel replacements are permitted and inspected according to local municipal ordinances.`,
      badge: "Safety & Permits",
    },
  ];

  const valuePillars = localData?.localValuePillars || [
    {
      title: `State Licensed in ${l.city}`,
      desc: "Florida Certified Electrical Contractor (#EC13010482) authorized to pull permits across Miami-Dade County.",
    },
    {
      title: "Rapid Municipal Dispatch",
      desc: `${l.response}. Fully-stocked service vehicles ready for immediate troubleshooting and repair.`,
    },
    {
      title: "$2,000,000 Insurance Coverage",
      desc: "Full commercial general liability and workers' compensation coverage protecting your property.",
    },
    {
      title: "1-Year Written Warranty",
      desc: "All labor and workmanship backed in writing with guaranteed post-installation support.",
    },
  ];

  return (
    <div>
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
        <img
          src={l.image}
          alt={`Electrician in ${l.city}, FL`}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/85 to-secondary/60" />
        <div className="relative container-x py-24">
          <Breadcrumbs
            tone="dark"
            items={[{ label: "Home", to: "/" }, { label: "Locations" }, { label: l.city }]}
          />
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary border border-white/10">
            <MapPin className="h-3.5 w-3.5" /> Service area · {l.region}
          </div>
          <h1 className="mt-5 font-display text-5xl md:text-6xl font-semibold leading-[1.05] max-w-3xl">
            Electrician in <span className="text-gradient">{l.city}, FL</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/70 text-lg">{l.hero}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.phoneHref} className="btn-primary">
              <Phone className="h-4 w-4" /> Call {site.phone}
            </a>
            <Link
              to="/contact"
              className="btn-ghost bg-white/10 border-white/15 text-white hover:bg-white/15"
            >
              Free Written Estimate <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-x py-20 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          {/* Architectural & Local Context */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Local Electrical Contractor · {l.city}, FL
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-secondary">
              Electrical Infrastructure & Services in {l.city}
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              {localData?.architecturalContext || l.intro}
            </p>
          </div>

          {/* Local Municipal Building Department & Permitting Details Card */}
          {localData?.permitInfo && (
            <div className="mt-10 rounded-3xl border border-border bg-card p-7 shadow-elegant">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Municipal Permitting Jurisdiction
                  </div>
                  <h3 className="font-display text-xl font-semibold text-secondary">
                    {localData.permitInfo.department}
                  </h3>
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2 text-xs text-muted-foreground">
                <div>
                  <span className="font-semibold text-secondary block">Physical Office:</span>
                  {localData.permitInfo.address}
                </div>
                <div>
                  <span className="font-semibold text-secondary block">Jurisdiction Code:</span>
                  {localData.permitInfo.jurisdictionCode} · Phone: {localData.permitInfo.phone}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border/70 text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-secondary block mb-1">Local Inspection Mandate:</span>
                {localData.permitInfo.inspectionRequirements}
              </div>

              {localData.permitInfo.keyCodes && localData.permitInfo.keyCodes.length > 0 && (
                <div className="mt-4 pt-3 border-t border-border/70">
                  <span className="text-[11px] font-semibold text-secondary block mb-2">Governing Codes & Standards:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {localData.permitInfo.keyCodes.map((code) => (
                      <span
                        key={code}
                        className="inline-block rounded-md bg-surface px-2.5 py-1 text-[11px] font-mono text-secondary/80 border border-border"
                      >
                        {code}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Response time highlight */}
          <div className="mt-8 rounded-2xl border border-border p-5 bg-surface flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
                Local Dispatch Response Time
              </div>
              <div className="mt-1 text-secondary font-semibold text-base">{l.response}</div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <CheckCircle2 className="h-4 w-4" />
              <span>State Certified EC #EC13010482</span>
            </div>
          </div>

          {/* Location-Specific Challenges */}
          <div className="mt-12">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Local Conditions
            </div>
            <h2 className="mt-2 font-display text-2xl font-semibold text-secondary">
              Neighborhood Electrical Challenges in {l.city}
            </h2>
            <div className="mt-5 space-y-3">
              {challenges.map((c) => (
                <div key={c.title} className="rounded-2xl border border-border p-5 bg-surface/60">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                      {c.badge}
                    </span>
                    <h3 className="font-semibold text-secondary text-base">{c.title}</h3>
                  </div>
                  <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Genuine Local Case Studies */}
          {localData?.caseStudies && localData.caseStudies.length > 0 && (
            <div className="mt-12">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Verified Local Work
              </div>
              <h2 className="mt-2 font-display text-2xl font-semibold text-secondary">
                Recent Projects Completed in {l.city}
              </h2>
              <div className="mt-6 space-y-6">
                {localData.caseStudies.map((cs) => (
                  <div
                    key={cs.title}
                    className="rounded-3xl border border-border bg-card overflow-hidden shadow-elegant"
                  >
                    <div className="grid md:grid-cols-[1.2fr_1.8fr] gap-6 p-6">
                      <div className="relative rounded-2xl overflow-hidden min-h-[200px] border border-border">
                        <img
                          src={cs.image}
                          alt={cs.title}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute top-3 left-3 rounded-full bg-secondary/85 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-white">
                          {cs.neighborhood}
                        </div>
                      </div>
                      <div className="flex flex-col justify-between">
                        <div>
                          <div className="text-xs font-semibold text-primary uppercase tracking-wider">
                            {cs.serviceType} · {cs.year}
                          </div>
                          <h3 className="mt-1 font-display text-xl font-semibold text-secondary">
                            {cs.title}
                          </h3>
                          <div className="mt-3 space-y-2 text-xs text-muted-foreground leading-relaxed">
                            <p>
                              <strong className="text-secondary font-medium">Challenge: </strong>
                              {cs.challenge}
                            </p>
                            <p>
                              <strong className="text-secondary font-medium">Technical Solution: </strong>
                              {cs.solution}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-border flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="h-4 w-4 shrink-0" />
                          <span>{cs.outcome}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Landmarks & Neighborhoods */}
          <div className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-secondary">
              Neighborhoods We Serve in {l.city}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {l.neighborhoods.map((n) => (
                <span
                  key={n}
                  className="rounded-full bg-surface border border-border px-4 py-1.5 text-sm text-secondary/80 font-medium"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>

          {/* Why {l.city} Chooses Us */}
          <div className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-secondary">
              Why {l.city} Property Owners Rely on Our Crews
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {valuePillars.map((p) => (
                <div key={p.title} className="rounded-2xl border border-border p-5 bg-card">
                  <div className="flex items-center gap-2 font-semibold text-secondary">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>{p.title}</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Location-Specific FAQs */}
          <div className="mt-12">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Local Questions
            </div>
            <h2 className="mt-2 font-display text-2xl font-semibold text-secondary">
              Frequently Asked Questions in {l.city}
            </h2>
            <div className="mt-5 space-y-3">
              {displayFaqs.map((f, i) => (
                <details
                  key={i}
                  className="group rounded-2xl bg-card border border-border p-5 open:shadow-elegant"
                >
                  <summary className="cursor-pointer font-semibold text-secondary flex items-center justify-between">
                    {f.q}
                    <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 h-max space-y-6">
          <div className="rounded-3xl bg-secondary text-white p-7 shadow-elegant">
            <div className="text-xs uppercase tracking-[0.18em] text-primary">
              Serving {l.city} 24/7
            </div>
            <div className="mt-2 font-display text-2xl font-semibold">
              Call for immediate local service
            </div>
            <p className="mt-2 text-xs text-white/70">
              Florida Licensed Electrical Contractor (#EC13010482) · Fast local response in {l.city}.
            </p>
            <div className="mt-5 space-y-3">
              <a
                href={site.phoneHref}
                className="flex items-center justify-between rounded-2xl bg-primary text-primary-foreground px-4 py-3 font-semibold"
              >
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" /> {site.phone}
                </span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
            <iframe
              title={`Map of ${l.city}, FL`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(l.city + ", FL")}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="rounded-3xl border border-border bg-card p-7">
            <div className="text-xs uppercase tracking-[0.18em] text-primary">
              Other service areas
            </div>
            <div className="mt-4 space-y-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  to="/$slug"
                  params={{ slug: o.slug }}
                  className="flex items-center justify-between rounded-xl border border-border px-4 py-3 hover:border-primary/40 hover:bg-surface transition"
                >
                  <span className="text-sm font-semibold text-secondary">
                    Electrician in {o.city}
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <CtaBand
        title={`Need an electrician in ${l.city} right now?`}
        subtitle={`State Certified Electrical Contractor (#EC13010482) serving ${l.city} with 24/7 emergency response and free written estimates.`}
      />
    </div>
  );
}

