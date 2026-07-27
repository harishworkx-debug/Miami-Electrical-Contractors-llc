import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, Zap, ChevronDown } from "lucide-react";
import { site, serviceMenuGroups, locations } from "@/lib/site";

const primaryLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
] as const;

const tailLinks = [
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<null | "services" | "locations">(null);
  const [mobileGroup, setMobileGroup] = useState<null | "services" | "locations">(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <>
      <div className="bg-secondary text-secondary-foreground text-xs md:text-sm">
        <div className="container-x flex items-center justify-between py-2">
          <span className="flex items-center gap-2 opacity-90">
            <Zap className="h-3.5 w-3.5 text-primary" />
            24 Hour Emergency Electrician · Miami-Dade
          </span>
          <a href={site.phoneHref} className="hidden sm:inline font-semibold text-primary hover:text-primary-glow">
            {site.phone}
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-[0_10px_40px_-20px_rgba(11,19,32,0.25)]" : "bg-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary shadow-elegant">
              <Zap className="h-5 w-5" fill="currentColor" />
              <span className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-semibold tracking-tight text-secondary text-sm md:text-base">
                Miami Electrical
              </div>
              <div className="text-[10px] md:text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Contractors LLC
              </div>
            </div>
          </Link>

          <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1">
            {primaryLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="px-4 py-2 rounded-full text-sm font-medium text-secondary/80 hover:text-secondary hover:bg-secondary/5 transition"
                activeProps={{ className: "text-secondary bg-secondary/5" }}
              >
                {l.label}
              </Link>
            ))}

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-secondary/80 hover:text-secondary hover:bg-secondary/5 transition"
              >
                Services <ChevronDown className="h-3.5 w-3.5" />
              </Link>
              {openDropdown === "services" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                  <div className="w-[720px] max-w-[92vw] rounded-2xl bg-white border border-border shadow-elegant p-6 grid grid-cols-3 gap-6">
                    {serviceMenuGroups.map((g) => (
                      <div key={g.label}>
                        <div className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">{g.label}</div>
                        <ul className="mt-3 space-y-1.5">
                          {g.items.map((it) => (
                            <li key={it.slug}>
                              <Link
                                to="/$slug"
                                params={{ slug: it.slug }}
                                className="block text-sm text-secondary/80 hover:text-primary"
                              >
                                {it.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Locations dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("locations")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-secondary/80 hover:text-secondary hover:bg-secondary/5 transition"
              >
                Locations <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {openDropdown === "locations" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                  <div className="w-[360px] max-w-[92vw] rounded-2xl bg-white border border-border shadow-elegant p-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">Service Areas</div>
                    <ul className="grid grid-cols-2 gap-1.5">
                      {locations.map((l) => (
                        <li key={l.slug}>
                          <Link
                            to="/$slug"
                            params={{ slug: l.slug }}
                            className="block text-sm text-secondary/80 hover:text-primary"
                          >
                            {l.city}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {tailLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-4 py-2 rounded-full text-sm font-medium text-secondary/80 hover:text-secondary hover:bg-secondary/5 transition"
                activeProps={{ className: "text-secondary bg-secondary/5" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={site.phoneHref} className="hidden md:inline-flex btn-primary text-sm">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <button
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary/5 text-secondary"
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background max-h-[80vh] overflow-y-auto">
            <div className="container-x py-4 flex flex-col gap-1">
              {primaryLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-secondary hover:bg-secondary/5"
                >
                  {l.label}
                </Link>
              ))}

              {/* Services accordion */}
              <button
                type="button"
                onClick={() => setMobileGroup(mobileGroup === "services" ? null : "services")}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-secondary hover:bg-secondary/5"
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition ${mobileGroup === "services" ? "rotate-180" : ""}`} />
              </button>
              {mobileGroup === "services" && (
                <div className="pl-2 pb-2 space-y-3">
                  <Link
                    to="/services"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 rounded-xl text-sm font-semibold text-primary hover:bg-primary/5"
                  >
                    All Services
                  </Link>
                  {serviceMenuGroups.map((g) => (
                    <div key={g.label}>
                      <div className="px-4 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{g.label}</div>
                      <ul className="mt-1">
                        {g.items.map((it) => (
                          <li key={it.slug}>
                            <Link
                              to="/$slug"
                              params={{ slug: it.slug }}
                              onClick={() => setOpen(false)}
                              className="block px-4 py-2 rounded-xl text-sm text-secondary/80 hover:bg-secondary/5"
                            >
                              {it.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Locations accordion */}
              <button
                type="button"
                onClick={() => setMobileGroup(mobileGroup === "locations" ? null : "locations")}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-secondary hover:bg-secondary/5"
              >
                <span>Locations</span>
                <ChevronDown className={`h-4 w-4 transition ${mobileGroup === "locations" ? "rotate-180" : ""}`} />
              </button>
              {mobileGroup === "locations" && (
                <ul className="pl-2 pb-2 grid grid-cols-2 gap-1">
                  {locations.map((l) => (
                    <li key={l.slug}>
                      <Link
                        to="/$slug"
                        params={{ slug: l.slug }}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2 rounded-xl text-sm text-secondary/80 hover:bg-secondary/5"
                      >
                        {l.city}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {tailLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-secondary hover:bg-secondary/5"
                >
                  {l.label}
                </Link>
              ))}

              <a href={site.phoneHref} className="mt-2 btn-primary text-sm">
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
