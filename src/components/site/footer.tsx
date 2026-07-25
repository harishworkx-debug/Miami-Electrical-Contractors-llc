import { Link } from "@tanstack/react-router";
import { Zap, Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { site, services, locations } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-secondary text-secondary-foreground">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[60rem] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, oklch(0.77 0.17 68 / 0.6), transparent)" }}
      />
      <div className="relative container-x py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Zap className="h-6 w-6" fill="currentColor" />
              </div>
              <div className="font-display text-lg font-semibold tracking-tight">
                Miami Electrical<br />
                <span className="text-xs uppercase tracking-[0.2em] text-white/60">Contractors LLC</span>
              </div>
            </div>
            <p className="mt-6 text-sm text-white/70 max-w-xs">
              Veteran-owned electrical contractor serving residential, commercial and industrial clients across South Florida — 24 hours a day.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={site.phoneHref} className="btn-primary text-sm"><Phone className="h-4 w-4"/> Call</a>
              <a href={site.whatsapp} target="_blank" rel="noopener" className="btn-ghost text-sm bg-white/10 border-white/15 text-white hover:bg-white/15"><MessageCircle className="h-4 w-4"/> WhatsApp</a>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/90">Services</div>
            <ul className="mt-6 space-y-3 text-sm">
              {services.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="text-white/70 hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/90">Service Areas</div>
            <ul className="mt-6 space-y-3 text-sm">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link to="/areas/$slug" params={{ slug: l.slug }} className="text-white/70 hover:text-white">
                    Electrician in {l.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/90">Contact</div>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3"><Phone className="h-4 w-4 text-primary mt-0.5"/><a href={site.phoneHref} className="text-white hover:text-primary font-semibold">{site.phone}</a></li>
              <li className="flex gap-3"><MessageCircle className="h-4 w-4 text-[#25D366] mt-0.5"/><a href={site.whatsapp} target="_blank" rel="noopener" className="text-white/80 hover:text-white">WhatsApp us anytime</a></li>
              <li className="flex gap-3"><MapPin className="h-4 w-4 text-primary mt-0.5"/><span className="text-white/70">{site.street}<br/>{site.city}, {site.state} {site.zip}</span></li>
              <li className="flex gap-3"><Clock className="h-4 w-4 text-primary mt-0.5"/><span className="text-white/70">{site.hours}</span></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 text-primary mt-0.5"/><a href={`mailto:${site.email}`} className="text-white/70 hover:text-white">{site.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} {site.name}. Licensed Florida Electrical Contractor. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
