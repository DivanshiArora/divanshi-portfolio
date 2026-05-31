import { FadeIn } from "@/components/ui/FadeIn";

export function NotesFromStrangers() {
  return (
    <section
      id="messages"
      className="section-padding border-t border-[var(--border)]"
      aria-labelledby="messages-heading"
    >
      <div className="container-main">
        <FadeIn>
          <article className="card-surface p-8 md:p-10 max-w-2xl mx-auto text-center">
            <h2
              id="messages-heading"
              className="font-serif text-2xl md:text-3xl text-foreground"
            >
              Notes From Visitors
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">
              This space is reserved for future messages, feedback, and stories
              from people I meet along the way.
            </p>
            <p className="mt-6 font-serif text-base text-subtle italic">
              The first note hasn&apos;t arrived yet.
            </p>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}
