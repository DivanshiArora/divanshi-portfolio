"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { firsts } from "@/lib/data";

export function Firsts() {
  return (
    <section
      id="firsts"
      className="section-padding border-t border-[var(--border)]"
      aria-labelledby="firsts-heading"
    >
      <div className="container-main">
        <SectionHeader
          label="Firsts"
          title="Milestones along the way"
          description="Celebrating beginnings — and looking forward to what's next."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {firsts.map((item, index) => {
            const isComingSoon = item.status === "coming-soon";

            return (
              <FadeIn key={item.title} delay={index * 0.05}>
                <motion.article
                  className={`card-surface px-4 py-3.5 h-full flex items-center justify-between gap-3 ${
                    isComingSoon ? "opacity-70" : ""
                  }`}
                  whileHover={isComingSoon ? undefined : { y: -2 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  <h3
                    id={index === 0 ? "firsts-heading" : undefined}
                    className="font-serif text-base text-foreground leading-snug"
                  >
                    {item.title}
                  </h3>

                  <span
                    className={`shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider ${
                      isComingSoon
                        ? "bg-white/[0.04] text-subtle border border-[var(--border)]"
                        : "bg-accent-muted text-accent border border-accent/20"
                    }`}
                  >
                    {isComingSoon ? "Soon" : "Done"}
                  </span>
                </motion.article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
