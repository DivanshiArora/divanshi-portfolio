"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { sayYesTo } from "@/lib/data";

export function SayYesTo() {
  return (
    <section
      id="say-yes"
      className="section-padding border-t border-[var(--border)]"
      aria-labelledby="say-yes-heading"
    >
      <div className="container-main">
        <SectionHeader
          label="Things I Say Yes To"
          title="Open doors"
          description="The invitations I try not to turn down — because growth rarely arrives when you're standing still."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-4xl">
          {sayYesTo.map((item, index) => (
            <FadeIn key={item} delay={index * 0.08}>
              <motion.div
                className="card-surface p-5 md:p-6 h-full flex items-center justify-center text-center"
                whileHover={{ y: -3, borderColor: "rgba(255,255,255,0.14)" }}
                transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <p
                  id={index === 0 ? "say-yes-heading" : undefined}
                  className="font-serif text-base md:text-lg text-foreground"
                >
                  {item}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
