import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { WATCH_URL } from "@/lib/links";
import aiFace from "@/assets/ai-face.png.asset.json";
import rainbowCity from "@/assets/rainbow-city-full.jpg.asset.json";

type Slide = {
  kicker: string;
  meta: string;
  title: string;
  synopsis: string;
  image: string;
  cta: string;
};

const SLIDES: Slide[] = [
  {
    kicker: "● Coming Soon",
    meta: "AI Miniseries · 2026 · Drama · Family",
    title: "Rainbow City",
    synopsis:
      "One family. Four stories. A lifetime of choices. A miniseries about love, choices, and adversity — where every choice has a consequence, and every heart has a story.",
    image: rainbowCity.url,
    cta: "Watch Trailer",
  },
  {
    kicker: "● Now Showing",
    meta: "AI Film 2026 · 1h 48m · Sci-Fi Odyssey",
    title: "The Dawn of Synthetic Cinema",
    synopsis:
      "A neural-rendered odyssey through the orbital archives. Directed by NOVA-13 — exclusive premiere on LXON-7.",
    image: aiFace.url,
    cta: "Watch Trailer",
  },
];

const DURATION_MS = 8000;

/** Progress bar sits directly under the hero as its bottom border. */
export function FeaturedProgressBar({ index, tick }: { index: number; tick: number }) {
  return (
    <div className="relative h-[3px] w-full bg-border/20">
      <motion.div
        key={`${index}-${tick}`}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: DURATION_MS / 1000, ease: "linear" }}
        className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary/25 via-neon-magenta/30 to-neon-cyan/40"
      >
        <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
          {/* Shooting-star tail */}
          <span
            className="absolute right-1/2 top-1/2 h-[1px] w-5 -translate-y-1/2 bg-gradient-to-l from-white via-white/70 to-transparent"
            style={{
              boxShadow: "0 0 6px 1px oklch(0.95 0.05 210 / 0.9), 0 0 14px 2px oklch(0.7 0.28 330 / 0.6)",
            }}
          />
          {/* Star core */}
          <span
            className="relative block h-1.5 w-1.5 rounded-full bg-white"
            style={{
              boxShadow:
                "0 0 4px 1px oklch(1 0 0 / 0.95), 0 0 10px 3px oklch(0.7 0.28 330 / 0.85), 0 0 22px 6px oklch(0.62 0.24 295 / 0.6)",
            }}
          />
        </span>
      </motion.div>
    </div>
  );
}

export function FeaturedSlider() {
  // Start on the second slide as requested
  const [index, setIndex] = useState(Math.min(1, SLIDES.length - 1));
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
      setTick((t) => t + 1);
    }, DURATION_MS);
    return () => clearTimeout(id);
  }, [index]);

  const slide = SLIDES[index];

  return (
    <>
      <FeaturedProgressBar index={index} tick={tick} />
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="kicker">Featured Premiere</div>
          </Reveal>

          <div className="relative mt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
              >
                <div className="min-w-0">
                  <div className="kicker mb-4">{slide.kicker}</div>
                  <div className="mb-6 font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {slide.meta}
                  </div>
                  <h2 className="heading-gradient font-display text-4xl font-black leading-[1.05] md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h2>
                  <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                    {slide.synopsis}
                  </p>
                  <a
                    href={WATCH_URL}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-neon-magenta px-7 py-3.5 font-display text-xs uppercase tracking-[0.25em] text-primary-foreground shadow-[0_0_40px_oklch(0.62_0.24_295/0.6)] transition-all hover:scale-[1.03]"
                  >
                    <Play className="h-4 w-4 fill-current" />
                    {slide.cta}
                  </a>
                </div>

                <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl neon-border bg-background">
                  <img
                    src={slide.image}
                    alt={`${slide.title} — featured premiere`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
