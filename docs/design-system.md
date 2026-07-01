# LXON-7 Design System

All tokens live in `src/styles.css` (Tailwind v4, CSS-first). Site is dark-only.

## Color tokens (`:root` in `src/styles.css`)

| Token | Value | Purpose |
| --- | --- | --- |
| `--background` | `oklch(0.08 0.03 285)` | Page background — deep purple-black, matches hero video |
| `--foreground` | `oklch(0.98 0.005 285)` | Primary text |
| `--card` / `--card-foreground` | `oklch(0.11 0.04 285)` / fg | Card surfaces |
| `--popover` / `--popover-foreground` | same as card | Popovers, menus |
| `--primary` | `oklch(0.62 0.24 295)` | Neon purple — CTAs, rings, glows |
| `--primary-foreground` | near-white | Text on primary |
| `--secondary` | `oklch(0.18 0.05 285)` | Elevated surface / hover bg |
| `--muted` / `--muted-foreground` | `oklch(0.16 0.03 285)` / `oklch(0.72 0.03 285)` | Muted surfaces / secondary text |
| `--accent` | `oklch(0.7 0.22 240)` | Electric blue accent |
| `--destructive` | `oklch(0.65 0.24 25)` | Errors |
| `--border` | `oklch(0.25 0.06 285 / 40%)` | Hairlines |
| `--input` | `oklch(0.25 0.06 285 / 60%)` | Form borders |
| `--ring` | `oklch(0.62 0.24 295)` | Focus rings |
| `--neon-magenta` | `oklch(0.7 0.28 330)` | Neon accent (gradients, glows) |
| `--neon-cyan` | `oklch(0.82 0.16 210)` | Neon accent, kicker text |

All are exposed to Tailwind via `@theme inline` — use `bg-background`, `text-primary`, `bg-neon-magenta`, `text-neon-cyan`, etc. **Never hardcode hex/`text-white`/`bg-black`** — always use tokens.

## Gradients & shadows

| Token | Value | Use |
| --- | --- | --- |
| `--gradient-hero` | radial ellipse `oklch(0.18 0.1 290 / 0.55)` → `background` | Hero backdrop |
| `--gradient-heading` | `white → foreground → primary` (vertical) | Big display headings via `.heading-gradient` |
| `--gradient-scrim` | transparent → `oklch(0.06 0.03 285 / 0.95)` (vertical) | Bottom scrim over images via `.scrim-bottom` |
| `--shadow-glow` | inset ring + purple drop | `.neon-glow`, primary CTAs |
| `--shadow-glow-strong` | 40/80px purple + magenta bloom | Hero visuals, hover accents |

## Custom utilities (`@utility` in `src/styles.css`)

- `.heading-gradient` — white→purple text gradient with purple drop-shadow. Apply to `h1/h2` on marketing sections.
- `.brand-gradient` — cyan→purple→magenta text gradient for the **LXON-7** wordmark inside headings.
- `.kicker` — Orbitron 12px, uppercase, `0.35em` tracking, cyan. Section eyebrows ("● Now Showing", etc.).
- `.scrim-bottom` — applies `--gradient-scrim`; overlay on any image that has text on top.
- `.neon-border` — 1px purple hairline + soft inner/outer glow. Card outlines.
- `.neon-glow` — `--shadow-glow`. Buttons, poster hover.

## Typography

Fonts are loaded via `<link>` in `src/routes/__root.tsx` `head()` — never `@import` a URL in `styles.css`.

| Family | Token | Usage |
| --- | --- | --- |
| Orbitron | `--font-display` (`font-display`) | All `h1–h4`, kickers, nav, CTA labels, meta strings |
| Inter | `--font-sans` (`font-sans`, default `body`) | Body copy, synopses, form text |

`h1–h4` auto-use Orbitron with `letter-spacing: -0.01em` (see `@layer base`). Kickers use `letter-spacing: 0.35em`; nav/CTAs use `tracking-[0.2em]`.

Scale (Tailwind classes actually used):

| Role | Class |
| --- | --- |
| Hero display | `text-5xl md:text-7xl lg:text-8xl font-black` + `.heading-gradient` |
| Section heading | `text-4xl md:text-6xl font-bold` + `.heading-gradient` |
| Card title | `text-xl md:text-2xl font-bold` |
| Kicker | `.kicker` (12px) |
| Meta line | `font-display text-xs uppercase tracking-[0.2em] text-muted-foreground` |
| Body | `text-base md:text-lg text-muted-foreground leading-relaxed` |

## Spacing & rhythm

- **Container**: `mx-auto max-w-7xl px-4 md:px-8` (header/footer/sections all use `max-w-7xl`).
- **Section vertical padding**: `py-20 md:py-28` (standard). Hero uses full-viewport height.
- **Card gap**: grids use `gap-6 md:gap-8`.
- **Radii**: `--radius: 0.75rem`; use `rounded-2xl`/`rounded-3xl` on cards, `rounded-full` on CTAs.
- **Border color default**: every element inherits `border-color: var(--color-border)` (see `@layer base`), so `border` is enough — no color needed.

## Breakpoints (Tailwind defaults)

| Prefix | Min width | Used for |
| --- | --- | --- |
| (base) | 0 | Mobile |
| `md:` | 768px | Tablet — grid switches to 2 cols, larger type |
| `lg:` | 1024px | Desktop — nav becomes horizontal, 3–4 col grids |
| `xl:` | 1280px | Reserved for wide hero refinements |

Header uses a `lg:` breakpoint for the desktop nav / mobile hamburger swap.

## Background

`body` paints a fixed multi-layer starfield (5 radial-gradients) over `--background`. Do not override `background-color` on `body`; overlay sections with their own translucent surfaces if needed.
