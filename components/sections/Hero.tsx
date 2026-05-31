"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center section-padding pt-28 md:pt-32 hero-glow grid-bg"
      aria-labelledby="hero-heading"
    >
      <div className="container-main w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          <div>
            <FadeIn delay={0.1}>
              <h1
                id="hero-heading"
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-foreground"
              >
                {siteConfig.name}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-2xl sm:text-3xl md:text-4xl font-serif gradient-text leading-snug">
                {siteConfig.headline}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-5 text-base md:text-lg font-medium text-foreground/90 tracking-tight">
                {siteConfig.role}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="mt-3 text-base md:text-lg text-muted max-w-xl leading-relaxed">
                {siteConfig.subheadline}
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-white/[0.06] text-subtle border border-[var(--border)] cursor-not-allowed opacity-70"
                >
                  Resume Coming Soon
                </button>
                <Button href="#contact">Contact</Button>
                <Button
                  href={siteConfig.links.linkedin}
                  variant="ghost"
                  external
                >
                  LinkedIn
                  <span aria-hidden="true">↗</span>
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn
            delay={0.3}
            direction="none"
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden card-surface relative">
                <Image
                  src="/photoo.png"
                  alt="Divanshi Arora"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 224px, 288px"
                  priority
                />
              </div>
              <div
                className="absolute -inset-4 -z-10 rounded-3xl bg-accent-muted blur-2xl opacity-60"
                aria-hidden="true"
              />
            </motion.div>
          </FadeIn>
        </div>

        <FadeIn delay={0.7} className="mt-20 md:mt-28 flex justify-center">
          <a
            href="#coordinates"
            className="flex flex-col items-center gap-2 text-subtle hover:text-muted transition-colors group"
            aria-label="Scroll to current coordinates"
          >
            <span className="text-xs tracking-widest uppercase">Explore</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-lg group-hover:text-accent transition-colors"
              aria-hidden="true"
            >
              ↓
            </motion.span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
