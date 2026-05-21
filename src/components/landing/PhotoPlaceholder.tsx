import { Compass } from "lucide-react";

interface Props {
  label: string;
  aspect?: string;
  className?: string;
}

export function PhotoPlaceholder({ label, aspect = "aspect-[4/5]", className = "" }: Props) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`${aspect} w-full rounded-2xl bg-secondary border border-border flex flex-col items-center justify-center text-foreground/50 overflow-hidden relative ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent/30" />
      <Compass className="relative w-10 h-10 mb-2 opacity-60" strokeWidth={1.25} />
      <span className="relative text-xs font-sans tracking-wide uppercase">{label}</span>
    </div>
  );
}
