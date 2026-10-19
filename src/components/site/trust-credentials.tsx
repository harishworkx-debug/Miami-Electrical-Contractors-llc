import { site } from "@/lib/site";
import { ShieldCheck, Award, FileText, CheckCircle2, ExternalLink } from "lucide-react";

export function TrustCredentials() {
  return (
    <section className="container-x py-20">
      <div className="rounded-3xl border border-border bg-gradient-to-b from-card to-surface p-8 md:p-12 shadow-elegant">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-border">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="h-3.5 w-3.5" />
              Verifiable Credentials & Guarantees
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold leading-tight text-secondary">
              State Licensed. Fully Insured. Warrantied in Writing.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground text-sm md:text-base leading-relaxed">
              Every factual claim and credential we present is verifiable. As a professional electrical contractor serving South Florida, we protect our clients with state licensing, comprehensive liability insurance, and written workmanship guarantees.
            </p>
          </div>
          <div className="shrink-0 flex flex-wrap gap-3">
            <a
              href={site.dbprLicenseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-secondary text-secondary-foreground px-4 py-2.5 text-xs md:text-sm font-semibold hover:bg-secondary/90 transition shadow-sm"
            >
              <span>Verify FL License (#EC13010482)</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: License */}
          <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/40 hover:shadow-sm transition">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Award className="h-6 w-6" />
              </div>
              <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-primary">
                State Certification
              </div>
              <h3 className="mt-1 font-display text-xl font-semibold text-secondary">
                Florida EC License
              </h3>
              <div className="mt-2 inline-block rounded-md bg-secondary/5 dark:bg-white/5 px-2.5 py-1 text-xs font-mono font-semibold text-secondary">
                {site.licenseShort}
              </div>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                Issued by Florida DBPR. Authorized to pull all municipal and county electrical permits for residential, commercial, and industrial projects statewide.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-border flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
              <span>Active & in good standing</span>
            </div>
          </div>

          {/* Card 2: Insurance */}
          <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/40 hover:shadow-sm transition">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Coverage Proof
              </div>
              <h3 className="mt-1 font-display text-xl font-semibold text-secondary">
                $2,000,000 Insurance
              </h3>
              <div className="mt-2 inline-block rounded-md bg-secondary/5 dark:bg-white/5 px-2.5 py-1 text-xs font-mono font-semibold text-secondary">
                Liability + Workers' Comp
              </div>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                Full commercial general liability coverage plus statutory Workers' Compensation protecting your property and every technician on your premises.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-border flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
              <FileText className="h-3.5 w-3.5 shrink-0 text-primary" />
              <span>COI provided upon request</span>
            </div>
          </div>

          {/* Card 3: Workmanship Warranty */}
          <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/40 hover:shadow-sm transition">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <FileText className="h-6 w-6" />
              </div>
              <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Written Guarantee
              </div>
              <h3 className="mt-1 font-display text-xl font-semibold text-secondary">
                1-Year Workmanship
              </h3>
              <div className="mt-2 inline-block rounded-md bg-secondary/5 dark:bg-white/5 px-2.5 py-1 text-xs font-mono font-semibold text-secondary">
                Labor & Install Backed
              </div>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                Every repair, panel upgrade, and installation is backed by a 1-year written labor warranty. Plus, full manufacturer warranties (up to 10+ years on panels) transfer to you.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-border flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
              <span>Provided in writing on invoice</span>
            </div>
          </div>

          {/* Card 4: Permitted & Code Compliant */}
          <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/40 hover:shadow-sm transition">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Code Compliance
              </div>
              <h3 className="mt-1 font-display text-xl font-semibold text-secondary">
                100% Permitted Work
              </h3>
              <div className="mt-2 inline-block rounded-md bg-secondary/5 dark:bg-white/5 px-2.5 py-1 text-xs font-mono font-semibold text-secondary">
                NEC & City of Miami
              </div>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                All major installations undergo strict municipal permitting and inspections. We ensure your home or commercial building stays 100% compliant and insurance-ready.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-border flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
              <span>NEC / NFPA 70 compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
