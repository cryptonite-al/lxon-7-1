# Code Conventions

## Stack

TanStack Start v1 (React 19) + Vite 7 + Tailwind v4 (CSS-first) + framer-motion + lucide-react. Deployed to Cloudflare Workers (edge).

## Routing

File-based via TanStack Router. Files live in `src/routes/`; the plugin generates `src/routeTree.gen.ts` — **never edit that file**.

- `src/routes/__root.tsx` — the ONLY root layout. Provides `<html>/<head>/<body>` shell, mounts `<Header />`, `<Outlet />`, `<Footer />`, and sets default `<head>` meta (title, description, og:*, twitter:*, favicon, Google Fonts `<link>`s).
- `src/routes/index.tsx` — homepage (`/`). Composes all marketing sections.
- New page = new file. Dots = slashes: `films.tsx` → `/films`, `films.$slug.tsx` → `/films/$slug`. `createFileRoute("/path")` string MUST match the file's generated ID.
- **Every shareable route must define its own `head()`** with route-specific `title`, `description`, `og:title`, `og:description`. Add `og:image` only on leaf routes (never on `__root.tsx` — root meta is concatenated into every match and would override leaf images).

Minimal route template:
```tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/films")({
  head: () => ({
    meta: [
      { title: "Films — LXON-7" },
      { name: "description", content: "AI-generated feature films on LXON-7." },
      { property: "og:title", content: "Films — LXON-7" },
      { property: "og:description", content: "AI-generated feature films on LXON-7." },
    ],
  }),
  component: FilmsPage,
});

function FilmsPage() { return <main>…</main>; }
```

Navigate with `<Link to="/route">` from `@tanstack/react-router` for internal routes, and a plain `<a href={WATCH_URL}>` for the external watch platform.

## Links & external platform

`src/lib/links.ts`:
```ts
export const WATCH_URL = "https://watch.lxon-7.com";
```

Rule: **every** "Watch / Browse / Explore Catalog / Subscribe / Watch Trailer / Start Watching / Submit" action links to `WATCH_URL` via `<a href={WATCH_URL}>`. Do not hardcode the URL — always import the constant. When the destination becomes per-title, extend `links.ts` (e.g. `watchTitle(slug)`), do not sprinkle strings.

## Animation (framer-motion)

Three motion patterns, in this order of preference:

1. **Scroll-reveal** — wrap in `<Reveal delay={n}>`. Stagger siblings by `0.08` increments. Use for every section entry and card grid.
2. **On-load hero reveal** — inline `motion.div` with `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22,1,0.36,1] }}`. Use for hero copy above the fold only.
3. **Hover** — prefer Tailwind: `transition-all hover:-translate-y-1 hover:shadow-[...]`. Reserve `whileHover` for anything that needs spring physics.

Timing:
- Duration: `0.7s` for reveals, `0.9s` for hero, `0.3s` for hover.
- Easing: `[0.22, 1, 0.36, 1]` (cubic bezier) everywhere. No default eases.

`prefers-reduced-motion`: framer-motion honors it automatically for `whileInView`/`animate`. Do not add manual media queries. When adding CSS animations, wrap in:
```css
@media (prefers-reduced-motion: no-preference) { … }
```

## Responsive layout rules

- **Always** design mobile-first; add `md:` and `lg:` overrides.
- Wrap every section body in `<div className="mx-auto max-w-7xl px-4 md:px-8">`.
- Standard section vertical rhythm: `py-20 md:py-28`.
- Grids: `grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3` (or `-4` for posters).
- Header nav swaps at `lg:` — mobile hamburger below that.
- All text over imagery MUST sit on top of a `.scrim-bottom` (or equivalent linear gradient) so contrast holds.
- Long display strings (e.g. the "ONE PLATFORM. ENDLESS CREATORS. LIMITLESS POSSIBILITIES." tagline) must scale with `text-2xl sm:text-3xl md:text-5xl` and use `break-words`/`leading-tight` to avoid overflow on 320px screens.
- Test every new page at 375px, 768px, 1280px before shipping.

## Assets

- Images imported through `@/assets/<file>.<ext>.asset.json` (Lovable asset pipeline) — reference `logo.url`, not the JSON object directly.
- Videos: same asset-json pattern. Use `<video autoPlay muted loop playsInline>` for all background loops.
- Never inline base64 or generate images on the fly for brand elements — use provided files.

## Component style

- Functional components, named exports (`export function X()`).
- Colocate small helpers in the same file until reused.
- Extract to `src/components/site/` when a pattern appears 3+ times.
- Tailwind classes only — no CSS Modules, no inline `style` except for one-off things Tailwind can't express (`mixBlendMode`, complex `boxShadow` with color-mix, `radial-gradient` masks).
- Use design tokens (`bg-primary`, `text-neon-cyan`) — never `bg-[#...]` or `text-white`.
