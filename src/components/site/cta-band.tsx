import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Ready for a licensed Miami electrician?",
  subtitle = "Call now for a free estimate or 24-hour emergency service anywhere in Miami-Dade.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="container-x">
      <div className="relative overflow-hidden rounded-3xl bg-secondary text-secondary-foreground p-10 md:p-16 shadow-elegant">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-40 blur-3xl"
          style={{
            background: "radial-gradient(closest-side, oklch(0.77 0.17 68 / 0.7), transparent)",
          }}
        />
        <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-primary">
              24/7 Emergency · Free Estimates
            </div>
            <h2 className="mt-5 font-display text-3xl md:text-5xl font-semibold leading-tight">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-white/70">{subtitle}</p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={site.phoneHref}
              className="group inline-flex items-center justify-between gap-4 rounded-2xl bg-primary p-5 text-primary-foreground shadow-glow transition hover:-translate-y-1"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/25">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.15em] opacity-80">
                    Call now
                  </span>
                  <span className="block text-lg font-semibold">{site.phone}</span>
                </span>
              </span>
              <ArrowRight className="h-5 w-5 opacity-80 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
