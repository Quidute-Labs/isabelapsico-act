import { SectionReveal } from "./SectionReveal";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

export function QuemSouEu() {
  return (
    <SectionReveal className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-24 grid gap-10 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
            Quem sou eu?
          </h2>
          <p className="mt-5 text-foreground/75 leading-relaxed">
            Sou psicóloga clínica, pós-graduanda em Terapia de Aceitação e Compromisso com Ênfase
            em Narrativas Funcionais, apaixonada por gente, por livros, por Análise do
            Comportamento, música e muito mais que não cabe numa caixinha de apresentação.
          </p>
          <p className="mt-4 text-foreground/75 leading-relaxed">
            Me encantei pela psicologia clínica quando percebi como nossos vínculos são capazes de
            gerar uma mudança em nossa vida além do que é possível explicar. A psicologia nunca
            foi um sonho de infância, mas se tornou meu sonho da vida adulta e sou muito feliz
            pelos encontros que essa profissão me proporcionou e por fazer algo que me aproxima do
            que é importante pra mim.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <PhotoPlaceholder label="Foto da psicóloga" aspect="aspect-[4/5]" />
        </div>
      </div>
    </SectionReveal>
  );
}
