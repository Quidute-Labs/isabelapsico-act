import { Compass } from "lucide-react";

export function Navbar({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/85 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2 min-w-0">
          <Compass className="w-6 h-6 text-primary shrink-0" strokeWidth={1.5} />
          <div className="leading-tight min-w-0">
            <p className="font-display text-sm sm:text-base text-foreground truncate">
              Isabela Unis <span className="text-foreground/60 font-sans">| Psicóloga</span>
            </p>
            <p className="text-[10px] sm:text-xs text-foreground/60 font-sans">CRP: 05/84591</p>
          </div>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs sm:text-sm font-medium text-primary-foreground transition hover:brightness-95"
        >
          Agende agora
        </a>
      </div>
    </header>
  );
}
