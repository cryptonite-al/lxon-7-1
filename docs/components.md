# Components

All shared components live in `src/components/site/`. shadcn/ui primitives (unchanged) live in `src/components/ui/`.

## `Header` — `src/components/site/Header.tsx`

Fixed top nav (h-20 mobile / h-24 desktop). Uses `bg-background/78 backdrop-blur-xl` so the starfield shows through.

- Props: none.
- Contents:
  - Left: `<Link to="/">` wrapping the LXON-7 logo image (`src/assets/lxon7-logo-v3.png.asset.json`) with `mixBlendMode: "screen"` + purple drop-shadow.
  - Center (`lg:`): nav items from a local `NAV` array. Every non-Home link points at `WATCH_URL`.
  - Right: `Submit Your Film` gradient pill CTA (`from-primary to-neon-magenta`), plus a `Menu`/`X` hamburger below `lg`.
- Use once, mounted globally in `__root.tsx`.

## `Footer` — `src/components/site/Footer.tsx`

Full-width footer with 3 link columns (`Browse`, `Studio`, `Legal`), an Investor Relations block, LXON-7 logo (blended via `mixBlendMode: "screen"`), and a bottom bar with copyright + `WATCH.LXON-7.COM →`.

- Props: none. Content columns are declared in a local `cols` array — extend that array to add links.
- Mounted globally in `__root.tsx`.

## `FeaturedSlider` — `src/components/site/FeaturedSlider.tsx`

Auto-advancing carousel used in the "Featured Premiere" section. Exports two components:

### `FeaturedSlider`
- Props: none. Slide data is a local `SLIDES: Slide[]` const.
- Behavior: starts on index 1, advances every `DURATION_MS = 8000`. Uses `AnimatePresence` for crossfade. Each slide renders: kicker, meta, title, synopsis, image (`object-cover` edge-to-edge), and a `Watch Trailer` CTA → `WATCH_URL`.
- No arrows, no counter — progress bar is the only affordance.

### `FeaturedProgressBar({ index, tick }: { index: number; tick: number })`
- Renders the shooting-star progress bar. Placed as the hero's bottom border (immediately above `FeaturedSlider` in `routes/index.tsx`).
- `index` and `tick` are exposed via the slider's own internal state — currently a colocated pattern; if you need to sync from outside, lift the state up and pass both in.

`Slide` type:
```ts
type Slide = { kicker: string; meta: string; title: string; synopsis: string; image: string; cta: string; };
```

## `Reveal` — `src/components/site/Reveal.tsx`

Scroll-triggered fade-slide-up wrapper (framer-motion). Wrap any section/card that should animate in.

```tsx
<Reveal delay={0.1}>...</Reveal>
```

- Props: `delay?: number` (seconds), plus any `HTMLMotionProps<"div">`.
- Anim: `opacity 0→1`, `y 30→0`, `duration 0.7`, cubic-bezier `[0.22,1,0.36,1]`.
- Viewport: `{ once: true, margin: "-80px" }` — fires once, 80px before entering.
- Stagger by incrementing `delay` (e.g. `0`, `0.08`, `0.16`) across siblings.

## Inline patterns used in `src/routes/index.tsx`

These are not extracted into components yet — if you reuse them 2+ more times, extract to `src/components/site/`.

- **SectionKicker**: `<p className="kicker">● Section Name</p>` above every section heading.
- **PosterCard** (Trending grid): `rounded-2xl` image tile with `.scrim-bottom` overlay, title + meta at the bottom, hover lift (`hover:-translate-y-1`) and neon glow.
- **CategoryCard** (Explore LXON-7 Universe): icon-in-circle (`Film`, `Video`, `Clapperboard`, `Palette` from `lucide-react`), heading, description, `.neon-border` on hover.
- **HeroVideo**: `<video autoPlay muted loop playsInline>` full-bleed, absolute inset-0, with radial scrim on top to blend edges into `--background`.
- **CreatorSpotlight video**: same `<video>` attrs, `mixBlendMode: "screen"` + radial mask for seamless blend.

## Icons

Use `lucide-react` only. Standard sizes: `h-4 w-4` inline with text, `h-5 w-5` in buttons, `h-6 w-6`+ in category tiles.
