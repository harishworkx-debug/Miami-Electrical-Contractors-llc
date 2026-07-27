import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  const base = tone === "dark" ? "text-white/60" : "text-muted-foreground";
  const link = tone === "dark" ? "hover:text-primary" : "hover:text-primary";
  const current = tone === "dark" ? "text-primary" : "text-secondary";
  return (
    <nav aria-label="Breadcrumb" className={`text-xs uppercase tracking-[0.18em] ${base}`}>
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1">
              {c.to && !isLast ? (
                <Link to={c.to} className={link}>{c.label}</Link>
              ) : (
                <span className={isLast ? current : ""}>{c.label}</span>
              )}
              {!isLast && <ChevronRight className="h-3 w-3 opacity-60" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function breadcrumbSchema(items: Crumb[], baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.to ? { item: `${baseUrl}${c.to}` } : {}),
    })),
  };
}
