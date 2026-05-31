"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { letterAge18 } from "@/lib/data";

export function LettersToFuture() {
  const paragraphs = letterAge18.split("\n\n").filter(Boolean);

  return (
    <section
      id="letter"
      className="section-padding border-t border-[var(--border)] bg-surface/50 relative overflow-hidden"
      aria-labelledby="letter-heading"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.04),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="container-main relative">
        <SectionHeader
          label="Letters to Future Divanshi"
          title="A note at eighteen"
          description="Words to return to when the path feels uncertain."
          align="center"
        />

        <FadeIn className="max-w-2xl mx-auto">
          <motion.div
            className="card-surface p-8 md:p-12 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[var(--border)]">
              <span className="text-2xl" aria-hidden="true">
                ✉
              </span>
              <div>
                <p
                  id="letter-heading"
                  className="font-serif text-lg text-foreground"
                >
                  Age 18
                </p>
                <p className="text-xs text-subtle mt-0.5">
                  Written to my future self
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-base md:text-lg text-muted leading-relaxed font-serif italic"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.6,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <p className="mt-10 text-sm text-subtle text-right font-mono">
              — Divanshi, at 18
            </p>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
