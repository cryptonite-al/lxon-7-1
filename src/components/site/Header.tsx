import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/lxon-logo.png";
import { WATCH_URL } from "@/lib/links";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Films", href: WATCH_URL },
  { label: "Series", href: WATCH_URL },
  { label: "Documentaries", href: WATCH_URL },
  { label: "AI Style", href: WATCH_URL },
  { label: "Submit", href: WATCH_URL },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/78 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 md:h-24 md:px-8">
        <Link to="/" className="flex min-w-0 shrink-0 items-center" aria-label="LXON-7 home">
          <img
            src={logoAsset}
            alt="LXON-7 — AI Streaming Service"
            className="h-[58px] w-auto max-w-[140px] object-contain md:h-[66px] md:max-w-[160px]"
            style={{ mixBlendMode: "screen", filter: "drop-shadow(0 0 18px oklch(0.62 0.24 295 / 0.5))" }}
          />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={WATCH_URL}
          className="hidden shrink-0 rounded-full bg-gradient-to-r from-primary to-neon-magenta px-5 py-2.5 font-display text-xs uppercase tracking-[0.2em] text-primary-foreground shadow-[0_0_30px_oklch(0.62_0.24_295/0.5)] transition-all hover:scale-[1.03] hover:shadow-[0_0_45px_oklch(0.62_0.24_295/0.8)] lg:inline-flex"
        >
          Submit Your Film
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border/60 text-foreground lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-6">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-display text-sm uppercase tracking-[0.2em] text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href={WATCH_URL}
              className="mt-3 rounded-full bg-gradient-to-r from-primary to-neon-magenta px-5 py-3 text-center font-display text-xs uppercase tracking-[0.2em] text-primary-foreground"
            >
              Submit Your Film
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
