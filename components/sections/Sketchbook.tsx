"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { sketchbook } from "@/lib/data";

type Sketch = (typeof sketchbook)[number];

export function Sketchbook() {
  const [activeSketch, setActiveSketch] = useState<Sketch | null>(null);

  const closeModal = useCallback(() => setActiveSketch(null), []);

  useEffect(() => {
    if (!activeSketch) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeSketch, closeModal]);

  return (
    <>
      <section
        id="sketchbook"
        className="section-padding border-t border-[var(--border)] bg-surface/30"
        aria-labelledby="sketchbook-heading"
      >
        <div className="container-main">
          <SectionHeader
            label="Sketchbook"
            title="Creative fragments"
            description="A quiet corner for sketches — creativity and attention to detail, off to the side."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-3xl">
            {sketchbook.map((sketch, index) => (
              <FadeIn key={sketch.id} delay={index * 0.08}>
                <motion.button
                  type="button"
                  onClick={() => setActiveSketch(sketch)}
                  id={index === 0 ? "sketchbook-heading" : undefined}
                  className="group w-full rounded-xl overflow-hidden card-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                  aria-label="View sketch"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={sketch.src}
                      alt=""
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
                  </div>
                </motion.button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeSketch && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Sketch preview"
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-default"
              onClick={closeModal}
              aria-label="Close preview"
            />

            <motion.div
              className="relative z-10 w-full max-w-lg"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border)] shadow-2xl">
                <Image
                  src={activeSketch.src}
                  alt=""
                  fill
                  className="object-contain bg-zinc-950"
                  sizes="(max-width: 768px) 100vw, 512px"
                  priority
                />
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-9 h-9 rounded-full bg-surface-elevated border border-[var(--border)] text-muted hover:text-foreground flex items-center justify-center transition-colors"
                aria-label="Close preview"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
