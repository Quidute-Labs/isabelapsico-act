import { Compass, Mail } from "lucide-react";

export function Footer({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 flex flex-col items-center text-center gap-4">
        <Compass className="w-10 h-10 text-primary" strokeWidth={1.25} />
        <div>
          <p className="font-display text-lg text-foreground">
            Psicóloga Isabela Pereira Unis da Costa
          </p>
          <p className="text-sm text-foreground/70 mt-1">CRP: 05/84591</p>
        </div>
        <a
          href="mailto:isabelaunis.psi@gmail.com"
          className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition"
        >
          <Mail className="w-4 h-4" />
          isabelaunis.psi@gmail.com
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:brightness-95"
        >
          Agende agora
        </a>
        <p className="text-xs text-foreground/50 mt-6">
          © {new Date().getFullYear()} Isabela Unis. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
