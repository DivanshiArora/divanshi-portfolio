import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { thingsExploring, beyondCode } from "@/lib/data";

export function ThingsExploring() {
  return (
    <section
      id="exploring"
      className="section-padding border-t border-[var(--border)]"
      aria-labelledby="exploring-heading"
    >
      <div className="container-main">
        <SectionHeader
          label="Things I'm Exploring"
          title="Current interests"
          description="What I'm actively learning and curious about right now."
        />

        <div className="flex flex-wrap gap-2 md:gap-2.5 max-w-3xl">
          {thingsExploring.map((item, index) => (
            <FadeIn key={item} delay={index * 0.05}>
              <span
                id={index === 0 ? "exploring-heading" : undefined}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm text-foreground border border-[var(--border)] bg-surface-elevated/50 hover:border-[var(--border-hover)] hover:bg-white/[0.03] transition-colors"
              >
                {item}
              </span>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 md:mt-12 pt-8 border-t border-[var(--border)] max-w-3xl">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
              Beyond Code
            </p>
            <div className="flex flex-wrap gap-2 md:gap-2.5">
              {beyondCode.map((item, index) => (
                <span
                  key={item}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs text-muted border border-[var(--border)] bg-transparent"
                >
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
