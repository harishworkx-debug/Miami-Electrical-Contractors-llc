import { createFileRoute, Link } from "@tanstack/react-router";
import { reviews, site } from "@/lib/site";
import { CtaBand } from "@/components/site/cta-band";
import {
  GoogleReviewCard,
  GoogleIcon,
  GoogleStars,
} from "@/components/site/google-reviews";
import { ExternalLink, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | Miami Electrical Contractors" },
      {
        name: "description",
        content:
          "Read verified customer reviews for Miami Electrical Contractors. 5.0 Google rating from residential and commercial clients across Miami-Dade County.",
      },
      { property: "og:title", content: "Customer Reviews | Miami Electrical Contractors" },
      {
        property: "og:description",
        content:
          "Read verified customer reviews for Miami Electrical Contractors. 5.0 Google rating from residential and commercial clients across Miami-Dade County.",
      },
      { property: "og:url", content: `${site.url}/reviews` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/reviews` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${site.url}/reviews#webpage`,
          url: `${site.url}/reviews`,
          name: `Customer Reviews & Verified Evidence | ${site.name}`,
          description: "Customer testimonials and verified project evidence from Miami and South Florida homeowners and businesses.",
          isPartOf: {
            "@type": "WebSite",
            "@id": `${site.url}/#website`,
            name: site.name,
            url: site.url,
          },
          about: {
            "@type": "Electrician",
            "@id": `${site.url}/#business`,
            name: site.name,
            sameAs: [site.googleBusinessProfileUrl],
          },
        }),
      },
    ],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <div>
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div
          className="absolute -bottom-40 -right-40 h-[36rem] w-[36rem] rounded-full opacity-40 blur-3xl"
          style={{
            background: "radial-gradient(closest-side, oklch(0.77 0.17 68 / 0.6), transparent)",
          }}
        />
        <div className="relative container-x py-24">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary border border-white/10">
                <GoogleIcon className="h-4 w-4" />
                Verified Google Reviews
              </div>
              <h1 className="mt-5 font-display text-5xl md:text-6xl font-semibold leading-[1.05]">
                5 stars from <span className="text-gradient">South Florida</span>.
              </h1>
              <p className="mt-6 max-w-xl text-white/70 text-lg">
                Real customer feedback from homeowners, condominium associations, and commercial
                businesses across Miami, Coral Gables, Brickell, and Miami Beach.
              </p>
            </div>
            <div className="rounded-3xl glass-dark p-8 text-center">
              <div className="inline-flex items-center justify-center gap-2 mb-2">
                <GoogleIcon className="h-8 w-8" />
                <span className="font-semibold text-white/90">Google Rating</span>
              </div>
              <div className="text-6xl font-display font-semibold text-primary">5.0</div>
              <div className="mt-3 flex justify-center">
                <GoogleStars className="h-5 w-5" />
              </div>
              <div className="mt-2 text-sm text-white/70">Verified Google Business Profile Rating</div>
              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href={site.googleBusinessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-3 text-sm font-semibold transition"
                >
                  <span>Verify All Reviews on Google</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex justify-center btn-ghost bg-white/10 text-white text-xs py-2 hover:bg-white/15"
                >
                  Schedule Service or Request Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <GoogleReviewCard key={r.name} review={r} />
          ))}
        </div>

        {/* Customer Evidence Transparency Notice */}
        <div className="mt-12 rounded-2xl bg-surface border border-border/80 p-5 text-xs text-muted-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
            <div>
              <strong className="text-secondary font-semibold">Review Authenticity & Verification Policy:</strong> All testimonials shown above are authentic accounts from real South Florida residential and commercial customers. We never use fabricated, automated, or incentivized feedback.
            </div>
          </div>
          <a
            href={site.googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline shrink-0"
          >
            <span>Live Google Maps Profile</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
