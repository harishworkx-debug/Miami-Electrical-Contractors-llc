import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Clock, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact ${site.name}` },
      {
        name: "description",
        content: `Call ${site.phone} for professional electrical services in Miami, Florida.`,
      },
      { property: "og:title", content: `Contact ${site.name}` },
      {
        property: "og:description",
        content: "24/7 electrical service in Miami. Call or request a free estimate.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div>
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div
          className="absolute -top-40 -left-20 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(closest-side, oklch(0.77 0.17 68 / 0.7), transparent)",
          }}
        />
        <div className="relative container-x py-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary border border-white/10">
            <ShieldCheck className="h-3.5 w-3.5" /> Open 24 Hours · 7 Days
          </div>
          <h1 className="mt-5 font-display text-5xl md:text-6xl font-semibold leading-[1.05] max-w-3xl">
            Talk to a <span className="text-gradient">Miami electrician</span> now.
          </h1>
          <p className="mt-6 max-w-xl text-white/70 text-lg">
            Live dispatcher 24/7. Free estimates. Same-day service anywhere in Miami-Dade County.
          </p>
        </div>
      </section>

      <section className="container-x py-20 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <a
            href={site.phoneHref}
            className="group flex items-center justify-between rounded-3xl bg-primary p-8 text-primary-foreground shadow-glow transition hover:-translate-y-1"
          >
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/25">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.15em] opacity-80">
                  Call now — 24/7
                </div>
                <div className="mt-1 font-display text-3xl font-semibold">{site.phone}</div>
              </div>
            </div>
            <ArrowRight className="h-6 w-6 transition group-hover:translate-x-1" />
          </a>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const f = e.currentTarget as HTMLFormElement;
              const data = new FormData(f);
              const msg = `Hi, I'd like a free estimate.\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nService: ${data.get("service")}\nDetails: ${data.get("details")}`;
              window.open(
                `mailto:${site.email}?subject=Free Estimate&body=${encodeURIComponent(msg)}`,
              );
            }}
            className="rounded-3xl border border-border bg-card p-8 shadow-elegant"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Request free estimate
            </div>
            <div className="mt-2 font-display text-2xl font-semibold text-secondary">
              Tell us about your project
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Name
                </span>
                <input
                  required
                  name="name"
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Phone
                </span>
                <input
                  required
                  name="phone"
                  type="tel"
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Service needed
                </span>
                <input
                  name="service"
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g. Panel upgrade, lighting install..."
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Project details
                </span>
                <textarea
                  name="details"
                  rows={4}
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </label>
            </div>
            <button className="mt-6 btn-primary w-full sm:w-auto">
              <Mail className="h-4 w-4" /> Send Message
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              Prefer to talk? Call {site.phone} for immediate 24/7 service.
            </p>
          </form>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-secondary text-white p-8 shadow-elegant">
            <div className="text-xs uppercase tracking-[0.18em] text-primary">Business info</div>
            <div className="mt-2 font-display text-2xl font-semibold">{site.name}</div>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>
                  {site.street}
                  <br />
                  {site.city}, {site.state} {site.zip}
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="h-4 w-4 text-primary mt-0.5" />
                <span>
                  Open 24 Hours
                  <br />
                  Monday – Sunday
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 text-primary mt-0.5" />
                <a href={site.phoneHref} className="hover:text-primary">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 text-primary mt-0.5" />
                <a href={`mailto:${site.email}`} className="hover:text-primary">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
            <iframe
              title="Miami Electrical Contractors LLC map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.1836064538884!2d-80.19118068897681!3d25.797516077234835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b70b8cba41cd%3A0xba7837b78c47a537!2sMiami%20Electrical%20Contractors%20llc!5e0!3m2!1sen!2sin!4v1784981444597!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </aside>
      </section>
    </div>
  );
}
