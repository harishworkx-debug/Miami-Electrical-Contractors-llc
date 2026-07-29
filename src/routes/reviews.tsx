import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { reviews, site } from "@/lib/site";
import { CtaBand } from "@/components/site/cta-band";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: `Customer Reviews | ${site.name}` },
      {
        name: "description",
        content:
          "Read verified customer reviews and discover why homeowners and businesses trust Miami Electrical Contractors LLC.",
      },
      { property: "og:title", content: `Customer Reviews | ${site.name}` },
      {
        property: "og:description",
        content: "Verified 5-star reviews from Miami and South Florida homeowners and businesses.",
      },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Electrician",
          name: site.name,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: String(reviews.length + 176),
          },
          review: reviews.map((r) => ({
            "@type": "Review",
            reviewRating: { "@type": "Rating", ratingValue: "5" },
            author: { "@type": "Person", name: r.name },
            reviewBody: r.text,
          })),
        }),
      },
    ],
  }),
  component: Reviews,
});

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
  );
}

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
                Verified reviews
              </div>
              <h1 className="mt-5 font-display text-5xl md:text-6xl font-semibold leading-[1.05]">
                5 stars from <span className="text-gradient">South Florida</span>.
              </h1>
              <p className="mt-6 max-w-xl text-white/70 text-lg">
                Real reviews from real Miami customers — homeowners, businesses and developers who
                trust our team with their electrical work.
              </p>
            </div>
            <div className="rounded-3xl glass-dark p-8 text-center">
              <div className="text-6xl font-display font-semibold text-primary">5.0</div>
              <div className="mt-3 flex justify-center">
                <Stars />
              </div>
              <div className="mt-2 text-sm text-white/70">Based on 180+ Google reviews</div>
              <a
                href="https://www.google.com/search?q=Miami+Electrical+Contractors+llc"
                target="_blank"
                rel="noopener"
                className="mt-6 inline-flex btn-primary text-sm"
              >
                Leave a Google review
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="relative rounded-3xl bg-card border border-border p-7 hover:shadow-elegant transition"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/20" />
              <Stars />
              <p className="mt-4 text-secondary/90 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-semibold text-secondary">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.location}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
