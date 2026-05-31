import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/lib/data";

const contactLinks = [
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    description: "Connect professionally",
    external: true,
  },
  {
    label: "Instagram",
    href: siteConfig.links.instagram,
    description: "Follow along",
    external: true,
  },
  {
    label: "Twitter / X",
    href: siteConfig.links.twitter,
    description: "Say hello",
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    description: siteConfig.email,
    external: false,
  },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="section-padding border-t border-[var(--border)] bg-surface/30"
      aria-labelledby="contact-heading"
    >
      <div className="container-main">
        <SectionHeader
          label="Contact"
          title="Let's connect"
          description="Always open to conversations, collaborations, and new opportunities."
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-4xl mx-auto">
          {contactLinks.map((link, index) => (
            <FadeIn key={link.label} delay={index * 0.08}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="card-surface p-5 md:p-6 block h-full hover:bg-white/[0.03] transition-colors group"
              >
                <h3
                  id={index === 0 ? "contact-heading" : undefined}
                  className="font-serif text-lg text-foreground group-hover:text-accent transition-colors"
                >
                  {link.label}
                </h3>
                <p className="mt-2 text-sm text-muted">{link.description}</p>
                <span
                  className="inline-block mt-4 text-xs text-subtle group-hover:text-muted transition-colors"
                  aria-hidden="true"
                >
                  {link.external ? "Open ↗" : "Send →"}
                </span>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-12 flex justify-center">
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-white/[0.06] text-subtle border border-[var(--border)] cursor-not-allowed opacity-70"
          >
            Resume Coming Soon
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
