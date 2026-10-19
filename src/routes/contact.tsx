import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Mail, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { site, locations, services } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact a Miami Electrician | Free Estimates" },
      {
        name: "description",
        content: `Contact Miami Electrical Contractors for 24/7 emergency dispatch and free written estimates across Miami-Dade County. Call ${site.phone}.`,
      },
      { property: "og:title", content: "Contact a Miami Electrician | Free Estimates" },
      {
        property: "og:description",
        content: "24/7 dispatched mobile electrical service across Miami-Dade County. Call or request a free estimate.",
      },
      { property: "og:url", content: `${site.url}/contact` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/contact` }],
  }),
  component: Contact,
});

function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    const service = (data.get("service") as string)?.trim();
    const details = (data.get("details") as string)?.trim();

    if (!name || !phone) {
      setFormState("error");
      setErrorMessage("Please fill in both your name and contact phone number.");
      return;
    }

    try {
      // 1. Google Analytics / Tag Manager Conversion Tracking Event
      if (typeof window !== "undefined") {
        const win = window as any;
        win.dataLayer = win.dataLayer || [];
        win.dataLayer.push({
          event: "generate_lead",
          lead_type: "contact_form_estimate",
          service_requested: service || "General Electrical",
          event_time: new Date().toISOString(),
        });

        // Custom DOM event for third-party tag listeners
        window.dispatchEvent(
          new CustomEvent("miami_electrician_lead", {
            detail: { service: service || "General", source: "contact_page" },
          }),
        );
      }

      // 2. Open mailto client for redundancy
      const msg = `Hi Miami Electrical Contractors,\n\nI would like to request an estimate:\nName: ${name}\nPhone: ${phone}\nService: ${service || "Electrical Service"}\nDetails: ${details || "None provided"}`;
      window.open(
        `mailto:${site.email}?subject=Free Electrical Estimate Request - ${name}&body=${encodeURIComponent(msg)}`,
      );

      setFormState("success");
    } catch {
      setFormState("error");
      setErrorMessage("Could not submit the form. Please call us directly at " + site.phone);
    }
  };

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
            <ShieldCheck className="h-3.5 w-3.5" /> Open 24 Hours · 7 Days · Service-Area Contractor
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
                  Call now — 24/7 Live Dispatch
                </div>
                <div className="mt-1 font-display text-3xl font-semibold">{site.phone}</div>
              </div>
            </div>
            <ArrowRight className="h-6 w-6 transition group-hover:translate-x-1" />
          </a>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-elegant">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Request free estimate
            </div>
            <div className="mt-2 font-display text-2xl font-semibold text-secondary">
              Tell us about your project
            </div>

            {formState === "success" ? (
              <div className="mt-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-secondary">
                  Estimate Request Received!
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                  Thank you! Our on-duty dispatcher will review your request and call you shortly. For immediate urgent response, call us directly.
                </p>
                <div className="mt-5 flex justify-center gap-3">
                  <a href={site.phoneHref} className="btn-primary text-sm py-2 px-4">
                    <Phone className="h-4 w-4" /> Call {site.phone}
                  </a>
                  <button
                    onClick={() => setFormState("idle")}
                    className="btn-ghost text-sm py-2 px-4 border border-border"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6">
                {formState === "error" && (
                  <div className="mb-5 flex items-center gap-3 rounded-xl bg-destructive/10 border border-destructive/20 p-4 text-xs font-medium text-destructive">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMessage || "An error occurred. Please check your fields."}</span>
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Full Name *
                    </span>
                    <input
                      required
                      name="name"
                      placeholder="e.g. Carlos Rodriguez"
                      className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Phone Number *
                    </span>
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="(305) 555-0123"
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
                      placeholder="e.g. 200A Panel Upgrade, EV Charger, Emergency Troubleshooting"
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Project details & City / Neighborhood
                    </span>
                    <textarea
                      name="details"
                      rows={4}
                      className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us what is happening, property type (home, condo, business), and your location in Miami-Dade."
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="mt-6 btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  {formState === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <Mail className="h-4 w-4" />
                      <span>Send Estimate Request</span>
                    </>
                  )}
                </button>
                <p className="mt-3 text-xs text-muted-foreground">
                  Prefer direct phone assistance? Call <a href={site.phoneHref} className="text-primary font-semibold hover:underline">{site.phone}</a> for 24/7 live dispatch.
                </p>
              </form>
            )}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-secondary text-white p-8 shadow-elegant">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-wider text-primary border border-white/10 mb-2">
              Service-Area Business (SAB)
            </div>
            <div className="mt-2 font-display text-2xl font-semibold">{site.name}</div>
            <p className="mt-2 text-xs text-white/70 leading-relaxed">
              We operate as a licensed service-area electrical contractor. Our fully equipped mobile vans are dispatched directly to homes and commercial facilities across all Miami-Dade municipalities.
            </p>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>
                  <strong>Dispatch Region:</strong> Greater Miami, FL 33101
                  <br />
                  <span className="text-white/70">Mobile Fleet Serving All of Miami-Dade County</span>
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>
                  <strong>Operating Hours:</strong> Open 24 Hours / 7 Days
                  <br />
                  <span className="text-white/70">Emergency Service Available Nights & Weekends</span>
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <a href={site.phoneHref} className="hover:text-primary font-semibold">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-primary">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
            <iframe
              title="Miami, FL service area map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.38942699257!2d-80.29949851624647!3d25.78254531238459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-elegant">
            <div className="text-xs uppercase tracking-[0.18em] text-primary">Services</div>
            <div className="mt-4 flex flex-col gap-2">
              {services.slice(0, 5).map((s) => (
                <Link
                  key={s.slug}
                  to="/$slug"
                  params={{ slug: s.slug }}
                  className="text-sm font-semibold text-secondary hover:text-primary"
                >
                  {s.title}
                </Link>
              ))}
              <Link
                to="/services"
                className="text-sm font-semibold text-primary mt-2 flex items-center gap-1"
              >
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-elegant">
            <div className="text-xs uppercase tracking-[0.18em] text-primary">Service Areas</div>
            <div className="mt-4 flex flex-col gap-2">
              {locations.slice(0, 6).map((l) => (
                <Link
                  key={l.slug}
                  to="/$slug"
                  params={{ slug: l.slug }}
                  className="text-sm font-semibold text-secondary hover:text-primary"
                >
                  Electrician in {l.city}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
