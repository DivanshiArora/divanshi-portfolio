import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] section-padding pt-12 pb-8">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-serif text-lg text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-muted">{siteConfig.headline}</p>
          </div>
          <p className="text-sm text-subtle">
            Built with intention. Documenting the journey.
          </p>
        </div>
        <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-subtle">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <a
            href="#"
            className="text-xs text-muted hover:text-foreground transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
