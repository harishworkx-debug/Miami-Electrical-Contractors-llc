import { Phone, MessageCircle, Zap } from "lucide-react";
import { site } from "@/lib/site";

export function StickyCTA() {
  return (
    <>
      {/* Desktop floating stack */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener"
          aria-label="WhatsApp us"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.65)] transition-transform hover:-translate-y-1"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a
          href={site.phoneHref}
          aria-label="Call now"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow transition-transform hover:-translate-y-1"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>

      {/* Mobile bottom action bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-3 border-t border-white/10 glass-dark text-white">
        <a
          href={site.phoneHref}
          className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold"
        >
          <Phone className="h-5 w-5 text-primary" />
          Call
        </a>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener"
          className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold border-x border-white/10"
        >
          <MessageCircle className="h-5 w-5 text-[#25D366]" />
          WhatsApp
        </a>
        <a
          href="/contact"
          className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold"
        >
          <Zap className="h-5 w-5 text-accent" />
          Estimate
        </a>
      </div>
    </>
  );
}
