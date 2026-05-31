"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { journeyTimeline } from "@/lib/data";

function useIsHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function JourneyTimeline() {
  const isHydrated = useIsHydrated();
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = isHydrated && !prefersReducedMotion;

  return (
    <section
      id="journey"
      className="section-padding border-t border-[var(--border)] bg-surface/50"
      aria-labelledby="journey-heading"
    >
      <div className="container-main">
        <SectionHeader
          label="Journey"
          title="Timeline of growth"
          description="Every step — from anchoring events to building my first landing page."
        />

        <div className="relative max-w-3xl">
          <div
            className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-[var(--border)] to-transparent"
            aria-hidden="true"
          />

          <ol className="space-y-8 md:space-y-10">
            {journeyTimeline.map((period, periodIndex) => (
              <li key={period.period}>
                <FadeIn delay={periodIndex * 0.1}>
                  <div className="flex items-start gap-3 md:gap-5">
                    <div className="relative shrink-0 mt-1">
                      <motion.div
                        className="w-[15px] h-[15px] md:w-[23px] md:h-[23px] rounded-full border-2 border-accent bg-background"
                        initial={shouldAnimate ? { scale: 0 } : { scale: 1 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: shouldAnimate ? periodIndex * 0.15 : 0,
                          duration: shouldAnimate ? 0.4 : 0,
                          ease: [0.21, 0.47, 0.32, 0.98],
                        }}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3
                        id={periodIndex === 0 ? "journey-heading" : undefined}
                        className="font-serif text-lg md:text-xl text-foreground mb-3"
                      >
                        {period.period}
                      </h3>

                      <ul className="space-y-2">
                        {period.items.map((item, itemIndex) => (
                          <motion.li
                            key={item.title}
                            className="card-surface px-3.5 py-2.5 md:px-4 md:py-3"
                            initial={
                              shouldAnimate
                                ? { opacity: 0, x: -12 }
                                : { opacity: 1, x: 0 }
                            }
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{
                              delay: shouldAnimate
                                ? periodIndex * 0.1 + itemIndex * 0.08
                                : 0,
                              duration: shouldAnimate ? 0.5 : 0,
                              ease: [0.21, 0.47, 0.32, 0.98],
                            }}
                          >
                            <p className="text-sm text-foreground leading-snug">
                              {item.title}
                            </p>
                            {item.description && (
                              <p className="mt-1.5 text-xs text-muted leading-relaxed">
                                {item.description}
                              </p>
                            )}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
