import { SectionReveal } from "./SectionReveal";
import { Photo } from "./Photo";
import livrosImg from "@/assets/isabela-livros.png";

export function ComoFunciona() {
  return (
    <SectionReveal id="terapia" className="bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-24 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
            Como funciona a terapia?
          </h2>
          <p className="mt-5 text-foreground/75 leading-relaxed">
            A Terapia de Aceitação e Compromisso (ACT) é um processo terapêutico focado em te
            ajudar a lidar melhor com pensamentos e emoções difíceis, sem precisar "lutar" contra
            eles o tempo todo. Em vez de tentar eliminar o que causa sofrimento, o trabalho é
            aprender novas formas de se relacionar com essas experiências, com mais leveza e
            consciência.
          </p>
          <p className="mt-4 text-foreground/75 leading-relaxed">
            Durante as sessões, você é convidado a se conhecer melhor, entender o que é realmente
            importante para você e construir caminhos mais alinhados com seus valores. Aos poucos,
            o processo ajuda a fazer escolhas mais conscientes e a agir de forma diferente no dia
            a dia, mesmo quando surgem desafios, ansiedade ou inseguranças.
          </p>
        </div>
        <Photo src={livrosImg} alt="Isabela apoiada em uma pilha de livros de psicologia" />
      </div>
    </SectionReveal>
  );
}
