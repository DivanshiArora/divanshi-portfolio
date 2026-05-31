import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { coordinates } from "@/lib/data";
import type { ReactNode } from "react";

function DashboardCard({
  label,
  children,
  delay = 0,
}: {
  label: string;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay} className="card-surface p-5 md:p-6 h-full">
      <p className="text-[10px] md:text-xs font-medium uppercase tracking-[0.15em] text-subtle mb-4">
        {label}
      </p>
      {children}
    </FadeIn>
  );
}

function TagList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2.5 text-sm md:text-base text-foreground"
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CurrentCoordinates() {
  return (
    <section
      id="coordinates"
      className="section-padding border-t border-[var(--border)]"
      aria-labelledby="coordinates-heading"
    >
      <div className="container-main">
        <SectionHeader
          label="Current Coordinates"
          title="Mission dashboard"
          description="Where I am right now — learning, building, and moving forward."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          <DashboardCard label="Age" delay={0.05}>
            <p
              id="coordinates-heading"
              className="font-serif text-5xl md:text-6xl text-foreground tabular-nums"
            >
              {coordinates.age}
            </p>
            <p className="mt-2 text-sm text-muted">years old</p>
          </DashboardCard>

          <DashboardCard label="Currently Learning" delay={0.1}>
            <TagList items={coordinates.learning} />
          </DashboardCard>

          <DashboardCard label="Currently Building" delay={0.15}>
            <TagList items={coordinates.building} />
          </DashboardCard>

          <DashboardCard label="Recently Explored" delay={0.2}>
            <TagList items={coordinates.explored} />
          </DashboardCard>

          <FadeIn
            delay={0.25}
            className="sm:col-span-2 card-surface p-5 md:p-6 relative overflow-hidden"
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 bg-accent-muted rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
              aria-hidden="true"
            />
            <p className="text-[10px] md:text-xs font-medium uppercase tracking-[0.15em] text-subtle mb-4">
              Current Goal
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed relative">
              {coordinates.goal}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
