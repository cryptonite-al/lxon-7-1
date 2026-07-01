import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Play, Film, Video, Clapperboard, Palette, Check } from "lucide-react";
import heroVideo from "@/assets/hero-loop.mp4.asset.json";
import creatorVideo from "@/assets/creator-loop.mp4.asset.json";
import p2 from "@/assets/poster-void-whisper.jpg";
import p3 from "@/assets/poster-ocular-link.jpg";
import p4 from "@/assets/poster-canvas-zero.jpg";
import p5 from "@/assets/poster-crimson-orbit.jpg";
import p6 from "@/assets/poster-lumen-city.jpg";
import p1 from "@/assets/poster-neon-revenant.jpg";
import rainbowCity from "@/assets/rainbow-city-full.jpg.asset.json";
import { Reveal } from "@/components/site/Reveal";
import { FeaturedSlider } from "@/components/site/FeaturedSlider";
import { WATCH_URL } from "@/lib/links";

export const Route = createFileRoute("/")({
  component: Index,
});

const categories = [
  { icon: Film, title: "AI Films", desc: "Short films, feature films, and experimental creations." },
  { icon: Video, title: "AI Mini Series", desc: "AI-powered episodic series with original storytelling." },
  { icon: Clapperboard, title: "AI Documentaries", desc: "Real stories, reimagined through the power of AI." },
  { icon: Palette, title: "AI Style", desc: "Innovative visuals, unique aesthetics, limitless imagination." },
];

const trending = [
  { img: rainbowCity.url, tag: "AI Miniseries", title: "Rainbow City", by: "LXON-7 Originals" },
  { img: p1, tag: "Cyber-Thriller", title: "Neon Revenant", by: "Synthia-04" },
  { img: p2, tag: "Sci-Fi Drama", title: "Void Whisper", by: "Orbital AI" },
  { img: p3, tag: "Mini Series", title: "Ocular Link", by: "NeuralVision" },
  { img: p4, tag: "AI Style", title: "Canvas Zero", by: "Artisan-X" },
  { img: p5, tag: "Space Opera", title: "Crimson Orbit", by: "Helios-9" },
  { img: p6, tag: "Documentary", title: "Lumen City", by: "Vanta Studio" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <video
            src={heroVideo.url}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover opacity-70"
          />
          {/* Blend scrims — top fade into header, radial vignette, bottom fade into next section */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.08_0.03_285/0.6)_60%,oklch(0.08_0.03_285)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/40 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-neon-magenta shadow-[0_0_10px_oklch(0.7_0.28_330)]" />
            <span className="kicker">AI Streaming Platform</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="heading-gradient mt-8 font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            style={{ maxWidth: "18ch" }}
          >
            The Future of Entertainment, Streaming Now.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            Original AI films, mini-series, documentaries, and style art from creators across the galaxy — all on one
            cinematic stage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          >
            <a
              href={WATCH_URL}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-neon-magenta px-7 py-3.5 font-display text-xs uppercase tracking-[0.25em] text-primary-foreground shadow-[0_0_40px_oklch(0.62_0.24_295/0.6)] transition-all hover:scale-[1.03] hover:shadow-[0_0_60px_oklch(0.62_0.24_295/0.9)]"
            >
              <Play className="h-4 w-4 fill-current" />
              Watch Trailers
            </a>
            <a
              href={WATCH_URL}
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/40 px-7 py-3.5 font-display text-xs uppercase tracking-[0.25em] text-foreground backdrop-blur-md transition-all hover:border-primary/60 hover:bg-primary/10"
            >
              Explore the Catalog
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-14 font-display text-[0.65rem] uppercase tracking-[0.5em] text-muted-foreground"
          >
            Come Join The Family
          </motion.div>
        </div>
      </section>

      {/* FEATURED PREMIERE SLIDER */}
      <FeaturedSlider />

      {/* EXPLORE THE UNIVERSE */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="kicker mb-4">Browse</div>
            <h2 className="font-display text-4xl font-black leading-[1.05] text-foreground md:text-5xl lg:text-6xl">
              Explore <span className="brand-gradient">LXON-7</span> Universe
            </h2>
            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              Four pillars of AI-generated entertainment, curated for the next era of storytelling.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.08}>
                <a
                  href={WATCH_URL}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:bg-card hover:shadow-[0_20px_60px_-20px_oklch(0.62_0.24_295/0.6)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-neon-magenta/0 opacity-0 transition-opacity duration-500 group-hover:opacity-30" />
                  <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-neon-magenta/20 text-primary">
                    <cat.icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative mt-6 font-display text-xl font-bold uppercase tracking-wider text-foreground">
                    {cat.title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{cat.desc}</p>
                  <div className="relative mt-6 font-display text-[0.7rem] uppercase tracking-[0.25em] text-primary transition-transform group-hover:translate-x-1">
                    Browse Now →
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="kicker mb-4">Trending This Cycle</div>
                <h2 className="heading-gradient font-display text-4xl font-black leading-[1.05] md:text-5xl lg:text-6xl">
                  What the Galaxy is Watching
                </h2>
              </div>
              <a
                href={WATCH_URL}
                className="shrink-0 font-display text-xs uppercase tracking-[0.25em] text-primary transition-colors hover:text-neon-magenta"
              >
                View All Trailers →
              </a>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trending.slice(0, 6).map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 0.08}>
                <a
                  href={WATCH_URL}
                  className="group relative block aspect-[3/4] overflow-hidden rounded-2xl border border-border transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_25px_60px_-15px_oklch(0.62_0.24_295/0.7)]"
                >
                  <img
                    src={t.img}
                    alt={t.title}
                    width={768}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 scrim-bottom" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="kicker mb-2 !text-neon-magenta">{t.tag}</div>
                    <div className="font-display text-2xl font-bold text-foreground">{t.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">by {t.by}</div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-primary/90 backdrop-blur-md shadow-[0_0_40px_oklch(0.62_0.24_295)]">
                      <Play className="h-6 w-6 fill-primary-foreground text-primary-foreground" />
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 flex justify-center">
              <a
                href="#upcoming"
                className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-background/40 px-8 py-3.5 font-display text-xs uppercase tracking-[0.25em] text-foreground backdrop-blur-md transition-all hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_30px_oklch(0.62_0.24_295/0.5)]"
              >
                View More
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CREATOR SPOTLIGHT */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_50%,oklch(0.18_0.12_290/0.55),transparent_65%)]" />
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-square">
                <video
                  src={creatorVideo.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover mix-blend-screen"
                  style={{
                    background: "#000",
                    maskImage:
                      "radial-gradient(ellipse at center, black 55%, transparent 85%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse at center, black 55%, transparent 85%)",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,var(--background)_95%)]" />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="kicker mb-4">Creator Spotlight</div>
              <h2 className="heading-gradient font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                AXION NOVA-13
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                Visionary AI director reimagining the Martian frontier with generative aesthetics. From short experimental
                loops to feature-length odysseys, NOVA-13 has shaped the visual grammar of synthetic cinema.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={WATCH_URL}
                  className="rounded-full bg-gradient-to-r from-primary to-neon-magenta px-6 py-3 font-display text-xs uppercase tracking-[0.25em] text-primary-foreground shadow-[0_0_30px_oklch(0.62_0.24_295/0.5)] transition-all hover:scale-[1.03]"
                >
                  View Filmography
                </a>
                <a
                  href={WATCH_URL}
                  className="rounded-full border border-border/70 bg-background/40 px-6 py-3 font-display text-xs uppercase tracking-[0.25em] text-foreground backdrop-blur-md transition-all hover:border-primary/60"
                >
                  Follow Creator
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SUBMIT / JOIN THE FAMILY */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card/80 via-card/50 to-background p-10 md:p-16">
              <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-neon-magenta/20 blur-3xl" />
              <div className="relative">
                <div className="kicker mb-4">Come Join The Family</div>
                <h2 className="heading-gradient max-w-3xl font-display text-4xl font-black leading-[1.05] md:text-5xl lg:text-6xl">
                  AI Creators, This is Your Stage.
                </h2>
                <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
                  Submit your original AI-generated content and get it seen by the world. Be part of the future of
                  entertainment.
                </p>
                <ul className="mt-10 grid gap-4 sm:grid-cols-3">
                  {[
                    "Featured on LXON-7 AI Streaming Platform",
                    "Global Audience Reach",
                    "Opportunities for Partnerships & Collaborations",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/50 p-5">
                      <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/20 text-primary">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-sm leading-relaxed text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={WATCH_URL}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-neon-magenta px-7 py-3.5 font-display text-xs uppercase tracking-[0.25em] text-primary-foreground shadow-[0_0_40px_oklch(0.62_0.24_295/0.6)] transition-all hover:scale-[1.03]"
                  >
                    Submit Now
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={WATCH_URL}
                    className="rounded-full border border-border/70 bg-background/40 px-7 py-3.5 font-display text-xs uppercase tracking-[0.25em] text-foreground backdrop-blur-md transition-all hover:border-primary/60"
                  >
                    View Submission Guidelines
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TAGLINE BAND */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,oklch(0.18_0.1_290/0.4),transparent_70%)]" />
        <Reveal className="mx-auto max-w-7xl px-6 text-center md:px-10">
          <div className="kicker mb-6 flex items-center justify-center gap-2">
            <Check className="h-3 w-3" />
            Showcasing Top AI Talent Worldwide
          </div>
          <h2
            className="heading-gradient mx-auto font-display font-black leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 6.5vw, 5.5rem)" }}
          >
            One Platform. Endless Creators.
            <br />
            Limitless Possibilities.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-sm text-muted-foreground md:text-base">
            Submit today and let your creations take flight.
          </p>
        </Reveal>
      </section>
    </>
  );
}
