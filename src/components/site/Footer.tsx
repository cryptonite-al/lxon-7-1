import logoAsset from "@/assets/lxon7-logo-v3.png.asset.json";
import { WATCH_URL } from "@/lib/links";

const cols = [
  {
    title: "Browse",
    items: ["AI Films", "AI Mini Series", "AI Documentaries", "AI Style"],
  },
  {
    title: "Studio",
    items: ["Submit Your Film", "Creator Guidelines", "Partnerships", "About", "Contact"],
  },
  {
    title: "Legal",
    items: [
      "Privacy Policy",
      "Terms of Use",
      "Subscription & Payment Policy",
      "Cancellation Policy",
      "Refund Policy",
      "Copyright Policy",
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-background">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.62 0.24 295 / 0.6), transparent)" }}
      />
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr]">
          <div className="max-w-sm">
            <img
              src={logoAsset.url}
              alt="LXON-7"
              className="mb-6 h-20 w-auto max-w-[180px] object-contain md:h-24 md:max-w-[210px]"
              style={{ mixBlendMode: "screen", filter: "drop-shadow(0 0 20px oklch(0.62 0.24 295 / 0.5))" }}
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              The premier destination for AI-generated cinema. Submit today and let your creations take flight.
            </p>
            <a
              href={WATCH_URL}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 font-display text-xs uppercase tracking-[0.2em] text-foreground transition-all hover:border-primary hover:bg-primary/20"
            >
              Investor Relations →
            </a>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 font-display text-xs uppercase tracking-[0.3em] text-neon-cyan">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href={WATCH_URL}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border/40 pt-6 sm:flex-row sm:items-center">
          <p className="font-display text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
            © 2026 LXON-7 — AI Streaming Services
          </p>
          <a
            href={WATCH_URL}
            className="font-display text-[0.7rem] uppercase tracking-[0.3em] text-foreground transition-colors hover:text-primary"
          >
            WATCH.LXON-7.COM →
          </a>
        </div>
      </div>
    </footer>
  );
}
