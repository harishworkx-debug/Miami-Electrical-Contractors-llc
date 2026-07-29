import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Award, HeartHandshake, Target, Compass, Zap, Users } from "lucide-react";
import { site, stats } from "@/lib/site";
import { CtaBand } from "@/components/site/cta-band";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${site.name}` },
      {
        name: "description",
        content:
          "Learn about Miami Electrical Contractors LLC, a veteran-owned electrical company serving residential, commercial and industrial clients throughout South Florida.",
      },
      { property: "og:title", content: `About ${site.name}` },
      {
        property: "og:description",
        content:
          "Veteran-owned electrical contractor serving Miami and South Florida with residential, commercial and industrial expertise.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=80"
          alt="Electrician team"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/85 to-secondary/60" />
        <div className="relative container-x py-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary border border-white/10">
            <ShieldCheck className="h-3.5 w-3.5" /> Veteran Owned
          </div>
          <h1 className="mt-5 font-display text-5xl md:text-6xl font-semibold leading-[1.05] max-w-3xl">
            A different kind of <span className="text-gradient">electrical contractor</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-white/70 text-lg">
            Built on military discipline, delivered with modern craftsmanship — {site.name} is South
            Florida's trusted electrical partner for homeowners, developers and operators.
          </p>
        </div>
      </section>

      <section className="container-x py-20 grid gap-14 lg:grid-cols-2 items-center">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our story
          </div>
          <h2 className="mt-3 font-display text-4xl font-semibold text-secondary">
            From service to service.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              After years of military service, our founder brought the same discipline, precision
              and integrity to Florida's electrical industry — and {site.name} was born.
            </p>
            <p>
              Today we're a full-service electrical contractor serving Miami, Miami Beach, Coral
              Gables, Brickell, Downtown Miami, North Miami and the greater South Florida region.
              From single-outlet repairs to full commercial build-outs, our team delivers electrical
              work you can trust to look great and last decades.
            </p>
            <p>
              Every technician on our team is licensed, insured, uniformed and background-checked.
              We show up on time, in clean vehicles, with the parts we need — and we back every
              install with a warranty.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`rounded-3xl p-7 ${i % 3 === 0 ? "bg-secondary text-white" : "bg-surface"}`}
            >
              <div
                className={`font-display text-4xl font-semibold ${i % 3 === 0 ? "text-primary" : "text-secondary"}`}
              >
                {s.value}
              </div>
              <div
                className={`mt-2 text-sm ${i % 3 === 0 ? "text-white/70" : "text-muted-foreground"}`}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-x grid gap-8 lg:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Mission",
              body: "Deliver premium electrical work to South Florida — safe, fast, and always to code.",
            },
            {
              icon: Compass,
              title: "Vision",
              body: "To be the most trusted electrical contractor in the state of Florida.",
            },
            {
              icon: HeartHandshake,
              title: "Values",
              body: "Integrity, safety, craftsmanship and respect for every home and business we enter.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-3xl bg-card border border-border p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-5 font-display text-2xl font-semibold text-secondary">{title}</div>
              <div className="mt-2 text-muted-foreground">{body}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Safety commitment
            </div>
            <h2 className="mt-3 font-display text-4xl font-semibold text-secondary">
              Safety isn't a policy — it's how we work.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Every install is completed to NEC and local code. Every technician is trained in NFPA
              70E. Every panel we touch gets clean labeling, surge protection and proper grounding.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, title: "OSHA Trained" },
              { icon: Award, title: "Licensed & Insured" },
              { icon: Zap, title: "Code Compliant" },
              { icon: Users, title: "Background Checked" },
            ].map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6 flex items-center gap-4"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="font-semibold text-secondary">{title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
