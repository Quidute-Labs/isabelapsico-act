import { PhotoPlaceholder } from "./PhotoPlaceholder";

export function Hero({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <section
      id="top"
      className="relative bg-secondary overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20 md:py-28 grid gap-10 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-foreground">
            Se a vida tem pesado mais do que deveria, este pode ser o espaço seguro que você
            estava procurando.
          </h1>
          <p className="mt-5 text-base text-foreground/75 max-w-md">
            Terapia de Aceitação e Compromisso (ACT) com escuta acolhedora e cuidado genuíno.
          </p>
          <div className="mt-7">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:brightness-95"
            >
              Agende agora
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <PhotoPlaceholder label="Foto da psicóloga" aspect="aspect-[4/5]" />
        </div>
      </div>
    </section>
  );
}
