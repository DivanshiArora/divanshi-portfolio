import { FadeIn } from "./FadeIn";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <FadeIn className={`mb-12 md:mb-16 max-w-2xl ${alignClass}`}>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">
        {label}
      </p>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-tight tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
