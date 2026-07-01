# LXON-7 Brand Guidelines

## Name

Always written **LXON-7** — all caps, hyphen, no space. Never "Lxon 7", "LXON7", "Lxon-Seven". Full descriptor: **LXON-7 — AI Streaming Service** (em dash). Use the full descriptor in `<title>`, hero, footer copyright, and social meta; use plain `LXON-7` in body copy.

Inside headings, `LXON-7` gets the `.brand-gradient` (cyan → purple → magenta) treatment:
```tsx
<h2 className="heading-gradient">
  Explore <span className="brand-gradient">LXON-7</span> Universe
</h2>
```

Copyright line (footer bottom bar): `© 2026 LXON-7 — AI Streaming Services`.

## Logo

- Canonical file: `src/assets/lxon7-logo-v3.png.asset.json` (imported as `logoAsset`, used as `logoAsset.url`).
- **Never** recreate the wordmark in a font, restyle, or substitute it. Use the provided PNG as-is.
- Placement: header (top-left) and footer (top-left). Both use `mixBlendMode: "screen"` so the logo's black background blends into the dark UI — no visible box, no seam.
- Sizing (do not change without design review):
  - Header: `h-[58px] max-w-[140px] md:h-[66px] md:max-w-[160px]`, `object-contain`.
  - Footer: sized proportionally, same blend mode.
- Always ship with a subtle purple drop-shadow: `filter: "drop-shadow(0 0 18px oklch(0.62 0.24 295 / 0.5))"`.

## Color palette

Dark cosmic sci-fi. Full token list is in `docs/design-system.md`.

- **Deep purple-black** (`--background`, `oklch(0.08 0.03 285)`) — every page background.
- **Neon purple** (`--primary`, `oklch(0.62 0.24 295)`) — primary CTA, focus glow, brand core.
- **Neon magenta** (`--neon-magenta`, `oklch(0.7 0.28 330)`) — accent, CTA gradient stop, hover bloom.
- **Neon cyan** (`--neon-cyan`, `oklch(0.82 0.16 210)`) — kickers, brand gradient entry stop, "electric" highlights.
- **Electric blue accent** (`--accent`, `oklch(0.7 0.22 240)`) — secondary accent for AI/Style content.

Never introduce off-brand hues (green, orange, warm reds) except for `--destructive` in error states.

## Typography voice

- Display: **Orbitron** — wide, geometric, sci-fi. All headings, nav, CTAs, kickers, metadata.
- Body: **Inter** — clean, high-legibility. Synopses, descriptions, forms.
- Kickers open with `●` (filled dot) — e.g. `● Now Showing`, `● Coming Soon`.

## Voice & tone

- Cinematic, confident, cosmic. Short sentences. Present tense.
- Frame content as transmissions from a broader universe: "archives", "cycle", "galaxy", "signal", "premiere", "orbit".
- Talk about creators like directors of note (`NOVA-13`, `AXION NOVA-13`). Names use ALL CAPS + hyphen-number.
- Never mention the underlying tech stack (TanStack, Cloudflare, Uscreen) to end users.
- CTAs are verbs: `Watch Trailer`, `Start Watching`, `Explore the Catalog`, `Submit Your Film`.

## Platform architecture (principle)

LXON-7 runs on **two surfaces that must feel like one product**:

1. **Marketing site** (this repo) — brand, discovery, creator spotlight, submission funnel. Root: `lxon-7.com`.
2. **Watch platform** — hosted on Uscreen at `watch.lxon-7.com`. Owns the video library, subscriptions, accounts, payments, and playback.

Rules:
- Every "Watch / Browse / Explore Catalog / Subscribe / Watch Trailer / Start Watching / Submit Your Film" action links to `WATCH_URL` (`https://watch.lxon-7.com`) — imported from `src/lib/links.ts`. Never build these features here.
- Preserve continuity: same logo, same colors, same typography direction on both surfaces so the handoff is invisible to the viewer.
- Do not describe the split anywhere in user-facing copy. To the visitor, LXON-7 is one platform.
