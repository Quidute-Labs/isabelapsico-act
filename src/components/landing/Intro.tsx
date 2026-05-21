import { SectionReveal } from "./SectionReveal";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

export function Intro() {
  return (
    <SectionReveal className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-24 grid gap-10 md:grid-cols-2 md:items-center">
        <PhotoPlaceholder label="Consultório" aspect="aspect-[4/5]" />
        <div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground leading-snug">
            A maneira que lidamos com o sofrimento pode limitar nosso contato com o que é
            significativo.
          </h2>
          <p className="mt-5 text-foreground/75 leading-relaxed">
            Ao abrirmos espaço para ouvir e sentir nossas emoções, nos comprometemos com uma vida
            mais significativa e valorosa. A terapia é um meio de desenvolver a habilidade de
            acolher nossos sentimentos e entender o porquê agimos da forma como agimos.
          </p>
          <a
            href="#terapia"
            className="mt-7 inline-flex items-center justify-center rounded-full border border-primary/70 px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            Quero saber mais
          </a>
        </div>
      </div>
    </SectionReveal>
  );
}
