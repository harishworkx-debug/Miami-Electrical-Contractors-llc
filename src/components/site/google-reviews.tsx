import { reviews, site, type GoogleReview } from "@/lib/site";
import { CheckCircle2, MessageSquare, ExternalLink } from "lucide-react";

export function GoogleIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-label="Google">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function GoogleStars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <div className="flex gap-0.5 items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`${className} fill-[#FBBC05] text-[#FBBC05]`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function GoogleReviewCard({ review }: { review: GoogleReview }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition duration-200">
      <div>
        {/* Header with Avatar, Name, Local Guide & Google Icon */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white font-semibold text-base shadow-sm ${review.avatarBg}`}
            >
              {review.avatarLetter}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-secondary text-sm md:text-base leading-tight">
                  {review.name}
                </span>
                <span title="Verified Customer" className="inline-flex">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                </span>
              </div>
              <div className="text-xs text-muted-foreground flex flex-wrap items-center gap-1.5 mt-0.5">
                {review.isLocalGuide && (
                  <span className="inline-flex items-center gap-1 font-medium text-amber-600 bg-amber-50 dark:bg-amber-950/30 dark:text-amber-400 px-1.5 py-0.5 rounded text-[11px]">
                    ★ Local Guide
                  </span>
                )}
                <span>{review.location}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-slate-100 dark:bg-slate-800 px-2 py-1 text-[11px] font-medium text-muted-foreground shrink-0">
            <GoogleIcon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Google</span>
          </div>
        </div>

        {/* Rating and Relative Date */}
        <div className="mt-3 flex items-center gap-2">
          <GoogleStars className="h-4 w-4" />
          <span className="text-xs text-muted-foreground">{review.timeAgo}</span>
        </div>

        {/* Optional Service tag */}
        {review.service && (
          <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-secondary/80 bg-surface px-2.5 py-1 rounded-md border border-border/60">
            <span className="font-semibold text-primary">Service:</span> {review.service}
          </div>
        )}

        {/* Review body */}
        <p className="mt-3 text-secondary/90 text-sm leading-relaxed">
          "{review.text}"
        </p>

        {/* Positives pills */}
        {review.positives && review.positives.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1 text-[11px] text-muted-foreground">
            <span className="font-medium text-secondary/70">Positive:</span>
            {review.positives.join(" · ")}
          </div>
        )}
      </div>

      {/* Owner Reply */}
      {review.ownerReply && (
        <div className="mt-4 pt-3 border-t border-border/70 bg-surface/60 -mx-3 -mb-3 p-3 rounded-b-xl">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-secondary">
            <MessageSquare className="h-3.5 w-3.5 text-primary" />
            Response from the owner
          </div>
          <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
            {review.ownerReply}
          </p>
        </div>
      )}
    </div>
  );
}

export function GoogleReviewsSection({
  limit = 4,
  showTitle = true,
}: {
  limit?: number;
  showTitle?: boolean;
}) {
  const displayedReviews = limit ? reviews.slice(0, limit) : reviews;

  return (
    <section className="container-x py-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_2.2fr] items-start">
        {/* Left Column: GMB Summary Card */}
        <div>
          {showTitle && (
            <>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Google Business Profile
              </div>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold leading-tight text-secondary">
                Verified 5-Star Reputation on Google.
              </h2>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                Real customer experiences from homeowners, condominium managers, and local businesses across Miami-Dade.
              </p>
            </>
          )}

          {/* Authentic Google My Business Rating Badge */}
          <div className="mt-6 rounded-3xl border border-border bg-card p-6 shadow-elegant">
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div className="flex items-center gap-2.5">
                <GoogleIcon className="h-7 w-7" />
                <span className="font-semibold text-secondary text-base">Google Rating</span>
              </div>
              <span className="rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                VERIFIED
              </span>
            </div>

            <div className="mt-5 flex items-baseline gap-3">
              <span className="font-display text-5xl font-bold text-secondary">5.0</span>
              <div>
                <GoogleStars className="h-5 w-5" />
                <div className="mt-1 text-xs font-medium text-muted-foreground">
                  Genuine Google Customer Feedback
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-border space-y-3 text-xs text-muted-foreground">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-medium text-secondary">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Verified Business Profile
                </span>
                <span>Miami, FL</span>
              </div>
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                All reviews reflect verified work performed across Miami-Dade County. Independently verify our ratings and customer submissions directly on Google.
              </p>
              <a
                href={site.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 px-4 py-2.5 font-semibold transition"
              >
                <span>Verify on Google Maps</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Google Reviews Grid */}
        <div>
          <div className="grid gap-4 md:grid-cols-2">
            {displayedReviews.map((r) => (
              <GoogleReviewCard key={r.name} review={r} />
            ))}
          </div>

          {/* Customer Evidence Transparency Notice */}
          <div className="mt-6 rounded-2xl bg-surface border border-border/80 p-4 text-xs text-muted-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>
                <strong className="text-secondary font-medium">Customer Evidence Transparency:</strong> Reviews represent authentic client service calls in South Florida. We never use fabricated or incentivized ratings.
              </span>
            </div>
            <a
              href={site.googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-primary hover:underline shrink-0"
            >
              <span>Live Google Profile</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
