import { Instagram as InstagramIcon } from "lucide-react";
import { SectionReveal } from "./SectionReveal";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

export function Instagram() {
  return (
    <SectionReveal className="bg-accent text-accent-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 grid gap-10 md:grid-cols-2 md:items-center">
        <PhotoPlaceholder
          label="Foto da psicóloga"
          aspect="aspect-square"
          className="max-w-sm mx-auto md:mx-0"
        />
        <div>
          <p className="font-display text-2xl sm:text-3xl md:text-4xl leading-snug">
            Acompanhe meu trabalho no Instagram
          </p>
          <p className="mt-3 text-accent-foreground/80">
            Conteúdos sobre ACT, autoconhecimento e cuidado emocional.
          </p>
          <a
            href="https://instagram.com/isabelaunis.psi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-background/95 px-5 py-3 text-sm font-medium text-foreground transition hover:brightness-95"
          >
            <InstagramIcon className="w-4 h-4" />
            @isabelaunis.psi
          </a>
        </div>
      </div>
    </SectionReveal>
  );
}
