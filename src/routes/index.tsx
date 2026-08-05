import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Star,
  Zap,
  Clock,
  Award,
  CheckCircle2,
  Home as HomeIcon,
  Building2,
  Factory,
  ArrowRight,
  Sparkles,
  MapPin,
  AlertTriangle,
  Wrench,
  Lightbulb,
  Plug,
} from "lucide-react";
import { site, services, locations, reviews, generalFaqs, stats, trustBadges } from "@/lib/site";
import { CtaBand } from "@/components/site/cta-band";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Miami Electrical Contractors LLC | Electrician in Miami, FL" },
      {
        name: "description",
        content:
          "Veteran-owned electrical contractor providing residential, commercial and industrial electrical services across Miami and South Florida. Available 24/7. Call (786) 733-0585 for a free estimate.",
      },
      {
        property: "og:title",
        content: "Miami Electrical Contractors LLC | Electrician in Miami, FL",
      },
      {
        property: "og:description",
        content:
          "Veteran-owned Miami electricians. Residential, commercial and industrial service across South Florida. 24/7. Free estimates.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: generalFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

const HERO_IMG =
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1800&q=80";

const categories = [
  {
    icon: HomeIcon,
    title: "Residential Electrician Miami, FL",
    slug: "residential-electrician-miami-fl",
    desc: "Whole-home electrical for Miami homeowners — wiring, panels, lighting and more.",
    items: ["Panel Upgrades", "Rewires", "Lighting", "EV Chargers"],
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Building2,
    title: "Commercial Electrician Miami, FL",
    slug: "commercial-electrician-miami-fl",
    desc: "Design-build electrical for offices, retail, restaurants and multi-tenant buildings.",
    items: ["Tenant Build-Outs", "Emergency Lighting", "Signage", "Maintenance"],
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Factory,
    title: "Electrical Installation Miami, FL",
    slug: "electrical-installation-miami-fl",
    desc: "Professional installations for panels, sub-panels, appliances and full remodels.",
    items: ["Sub-Panels", "Appliance Circuits", "Remodels", "New Construction"],
    img: "/images/outlet_repair.png",
  },
];

const projects = [
  {
    title: "Luxury Estate Rewire",
    tag: "Coral Gables",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Brickell High-Rise Retrofit",
    tag: "Brickell",
    img: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Restaurant Panel Upgrade",
    tag: "Miami Beach",
    img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Warehouse Switchgear",
    tag: "North Miami",
    img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Boutique Lighting Design",
    tag: "Design District",
    img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Office Tenant Build-Out",
    tag: "Downtown Miami",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
  },
];

const safetyTips = [
  {
    icon: AlertTriangle,
    title: "Never ignore a warm outlet",
    body: "Warm switch plates or discolored outlets are the #1 predictor of an electrical fire. Call an electrician immediately.",
  },
  {
    icon: Wrench,
    title: "Replace old panels",
    body: "Federal Pacific and Zinsco panels are known fire hazards. Upgrade to a modern 200A service.",
  },
  {
    icon: Lightbulb,
    title: "Use LED, not overloaded fixtures",
    body: "Never exceed the wattage rating of a light fixture — LED equivalents run cool and safe.",
  },
  {
    icon: Plug,
    title: "GFCI everywhere near water",
    body: "Kitchens, baths, outdoor and pool areas require GFCI protection to prevent shock.",
  },
];

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
  );
}

function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center bg-secondary text-secondary-foreground overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Miami electrical contractor working on a modern electrical panel"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/85 to-secondary/70" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div
          className="absolute -bottom-40 -right-40 h-[36rem] w-[36rem] rounded-full opacity-40 blur-3xl"
          style={{
            background: "radial-gradient(closest-side, oklch(0.77 0.17 68 / 0.7), transparent)",
          }}
        />
        <div
          className="absolute -top-40 -left-20 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(closest-side, oklch(0.7 0.14 230 / 0.6), transparent)",
          }}
        />

        <div className="relative container-x grid gap-14 lg:grid-cols-[1.2fr_1fr] items-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary border border-white/10">
              <ShieldCheck className="h-3.5 w-3.5" />
              Veteran Owned · Licensed · Insured
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02]">
              Miami's Trusted <span className="text-gradient">Electrical Contractors</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75 leading-relaxed">
              {site.tagline.split("·")[0]} delivering residential, commercial and industrial
              electrical solutions across South Florida — 24 hours a day, 7 days a week.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.phoneHref} className="btn-primary text-base">
                <Phone className="h-4 w-4" /> Call Now · {site.phone}
              </a>
              <Link
                to="/contact"
                className="btn-ghost text-base bg-white/10 border-white/15 text-white hover:bg-white/15"
              >
                Free Estimate <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.15em] text-white/60">
              {trustBadges.map((b) => (
                <span key={b} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {b}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="glass-dark rounded-3xl p-6 md:p-8 shadow-elegant">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-primary">Live 24/7</div>
                  <div className="mt-1 font-display text-2xl font-semibold">
                    Talk to an electrician
                  </div>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Zap className="h-5 w-5" fill="currentColor" />
                </div>
              </div>
              <p className="mt-4 text-sm text-white/70">
                A licensed Miami electrician answers every call. Free estimates. Same-day service.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={site.phoneHref}
                  className="flex items-center justify-between rounded-2xl bg-primary text-primary-foreground px-4 py-3 font-semibold"
                >
                  <span className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4" /> Call {site.phone}
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-white/5 p-3">
                  <div className="text-lg font-semibold text-primary">5.0</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/60">Rating</div>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <div className="text-lg font-semibold text-primary">60 min</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/60">
                    Response
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <div className="text-lg font-semibold text-primary">24/7</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/60">Open</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-y border-border bg-surface/60">
        <div className="container-x py-10 flex flex-wrap items-center justify-between gap-6">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by South Florida homeowners, developers & operators
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-secondary/70 font-display font-semibold">
            <span>Coral Gables Estates</span>
            <span className="opacity-30">·</span>
            <span>Brickell City Centre</span>
            <span className="opacity-30">·</span>
            <span>Miami Beach Hospitality</span>
            <span className="opacity-30">·</span>
            <span>Design District Retail</span>
          </div>
        </div>
      </section>

      {/* Why choose us + stats */}
      <section className="container-x py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Why choose us
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight text-secondary">
              The electrical standard for Miami's most demanding clients.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-lg">
              We're a veteran-owned electrical contractor built for the way South Florida actually
              operates — fast, permitted, safe, and always on call.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: ShieldCheck,
                  title: "Veteran-Owned Discipline",
                  body: "Trained, uniformed and background-checked crews.",
                },
                {
                  icon: Clock,
                  title: "24/7 Live Dispatch",
                  body: "A real person answers every call, day or night.",
                },
                {
                  icon: Award,
                  title: "Licensed & Insured",
                  body: "Florida-licensed contractor with full liability coverage.",
                },
                {
                  icon: Sparkles,
                  title: "Premium Workmanship",
                  body: "Every install is done to code and to look great.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border p-5 hover:border-primary/40 hover:shadow-elegant transition"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 font-semibold text-secondary">{title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{body}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative overflow-hidden rounded-3xl p-8 ${i % 3 === 0 ? "bg-secondary text-secondary-foreground" : "bg-surface"
                  }`}
              >
                {i % 3 === 0 && <div className="absolute inset-0 grid-bg opacity-30" />}
                <div className="relative">
                  <div
                    className={`font-display text-4xl md:text-5xl font-semibold ${i % 3 === 0 ? "text-primary" : "text-secondary"}`}
                  >
                    {s.value}
                  </div>
                  <div
                    className={`mt-2 text-sm ${i % 3 === 0 ? "text-white/70" : "text-muted-foreground"}`}
                  >
                    {s.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service categories */}
      <section className="bg-surface py-24">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Services
              </div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight text-secondary max-w-2xl">
                One licensed contractor for every kind of electrical work.
              </h2>
            </div>
            <Link to="/services" className="btn-ghost text-sm self-start">
              Explore all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {categories.map(({ icon: Icon, title, desc, items, img, slug }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-elegant hover:-translate-y-1 transition"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={img}
                    alt={`${title} electrical services in Miami`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-semibold text-secondary">
                    <Icon className="h-3.5 w-3.5" /> {title}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-semibold text-secondary group-hover:text-primary transition">
                    <Link to="/$slug" params={{ slug }} className="hover:text-primary">
                      {title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
                  <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
                    {items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-secondary/80">
                        <CheckCircle2 className="h-4 w-4 text-primary" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="container-x py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Featured work
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight text-secondary">
              Featured electrical projects.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A selection of recent installs, rewires and upgrades across Miami-Dade.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/5]"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="text-xs uppercase tracking-[0.18em] text-primary">{p.tag}</div>
                <div className="mt-2 font-display text-xl font-semibold">{p.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="bg-secondary text-secondary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative container-x">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              How we work
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
              A calm, professional process — from first call to final walkthrough.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Call or Message",
                body: "A real electrician answers 24/7 and schedules your visit.",
              },
              {
                step: "02",
                title: "Free Estimate",
                body: "We diagnose on-site and quote a fixed, upfront price.",
              },
              {
                step: "03",
                title: "Licensed Install",
                body: "Uniformed technicians deliver code-compliant work.",
              },
              {
                step: "04",
                title: "Warranty & Walkthrough",
                body: "We test, tour and back every install with warranty.",
              },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur"
              >
                <div className="font-display text-4xl font-semibold text-primary">{s.step}</div>
                <div className="mt-3 font-semibold">{s.title}</div>
                <div className="mt-1 text-sm text-white/60">{s.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency band */}
      <section className="container-x py-20">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-10 md:p-14">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <AlertTriangle className="h-3.5 w-3.5" /> 24/7 Emergency
              </div>
              <h3 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-secondary">
                Power out? Sparking outlet? We're on the way.
              </h3>
              <p className="mt-3 text-muted-foreground max-w-xl">
                Live dispatcher around the clock — 60-minute response almost anywhere in Miami-Dade
                County.
              </p>
            </div>
            <a href={site.phoneHref} className="btn-primary text-base whitespace-nowrap">
              <Phone className="h-4 w-4" /> Emergency Line
            </a>
          </div>
        </div>
      </section>

      {/* Safety tips */}
      <section className="bg-surface py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Safety
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight text-secondary">
              Electrical safety tips from Miami's pros.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {safetyTips.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-3xl bg-card border border-border p-7 hover:shadow-elegant transition"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-5 font-semibold text-secondary">{title}</div>
                <div className="mt-2 text-sm text-muted-foreground">{body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews + Google rating */}
      <section className="container-x py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Reviews
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight text-secondary">
              Loved by South Florida.
            </h2>
            <div className="mt-6 rounded-3xl bg-secondary text-white p-6">
              <div className="flex items-center gap-2">
                <Stars />
                <span className="text-lg font-semibold">5.0</span>
              </div>
              <div className="mt-1 text-sm text-white/70">
                Based on 180+ verified Google reviews
              </div>
              <Link to="/reviews" className="mt-5 inline-flex btn-primary text-sm">
                Read all reviews
              </Link>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {reviews.slice(0, 4).map((r) => (
              <div key={r.name} className="rounded-3xl border border-border bg-card p-6">
                <Stars />
                <p className="mt-4 text-secondary/90 leading-relaxed">"{r.text}"</p>
                <div className="mt-5 text-sm">
                  <div className="font-semibold text-secondary">{r.name}</div>
                  <div className="text-muted-foreground">{r.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">FAQ</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight text-secondary">
              Common questions from our Miami customers.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Don't see your question? Call {site.phone} — a licensed electrician answers 24/7.
            </p>
          </div>
          <div className="space-y-3">
            {generalFaqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-card border border-border p-5 open:shadow-elegant"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-secondary">
                  {f.q}
                  <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition group-open:rotate-45">
                    <span className="text-lg leading-none">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="container-x py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Service areas
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight text-secondary">
              Where we work.
            </h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((l) => (
            <Link
              key={l.slug}
              to="/areas/$slug"
              params={{ slug: l.slug }}
              className="group relative overflow-hidden rounded-3xl aspect-[16/10]"
            >
              <img
                src={l.image}
                alt={`Electrician in ${l.city}, FL`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary">
                  <MapPin className="h-3.5 w-3.5" /> Miami-Dade
                </div>
                <div className="mt-2 font-display text-2xl font-semibold">
                  Electrician in {l.city}
                </div>
                <div className="mt-1 text-sm text-white/70 group-hover:text-primary transition inline-flex items-center gap-1">
                  View service area <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />

      {/* Map */}
      <section className="container-x py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Visit us
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight text-secondary">
              Based on Biscayne Blvd — serving all of South Florida.
            </h2>
            <div className="mt-6 space-y-3 text-secondary/80">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />{" "}
                <span>
                  {site.street}
                  <br />
                  {site.city}, {site.state} {site.zip}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" /> <span>{site.hours}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />{" "}
                <a href={site.phoneHref} className="font-semibold hover:text-primary">
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
            <iframe
              title="Miami Electrical Contractors LLC map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.1836064538884!2d-80.19118068897681!3d25.797516077234835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b70b8cba41cd%3A0xba7837b78c47a537!2sMiami%20Electrical%20Contractors%20llc!5e0!3m2!1sen!2sin!4v1784981444597!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
