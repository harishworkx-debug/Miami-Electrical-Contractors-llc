import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Zap } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Emergency banner */}
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
          scrolled
            ? "glass shadow-[0_10px_40px_-20px_rgba(11,19,32,0.25)]"
            : "bg-transparent"
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

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
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
          <div className="lg:hidden border-t border-border bg-background">
            <div className="container-x py-4 flex flex-col gap-1">
              {links.map((l) => (
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
