## Adicionar fotos reais ao site

Substituir os placeholders pelas 5 imagens enviadas, mantendo layout, performance e identidade visual.

### Mapeamento das imagens

- `1.png` (Isabela com xícara, em pé) → **Hero** (foto principal)
- `4.png` (retrato sentada, óculos) → **Quem sou eu**
- `2.png` (com pilha de livros) → **Como funciona a terapia**
- `3.png` (sentada na poltrona com livro) → **Instagram**
- `Design_sem_nome.png` (poltrona do consultório) → **Intro** (consultório)

### Passos

1. Copiar os 5 arquivos de `user-uploads://` para `src/assets/` com nomes semânticos:
   - `isabela-hero.png`, `isabela-retrato.png`, `isabela-livros.png`, `isabela-poltrona.png`, `consultorio.png`
2. Criar componente `Photo.tsx` em `src/components/landing/` — `<img>` com `loading="lazy"` (exceto hero com `loading="eager"` + `fetchPriority="high"`), `decoding="async"`, `aspect-[4/5]`, `object-cover`, `rounded-2xl`, e `alt` descritivo. Mantém o mesmo "encaixe" visual do `PhotoPlaceholder`.
3. Substituir os usos de `PhotoPlaceholder` nos componentes `Hero`, `Intro`, `ComoFunciona`, `QuemSouEu`, `Instagram` pelo novo `Photo` com o `import` da imagem correspondente.
4. Manter `PhotoPlaceholder.tsx` no projeto (não usado, mas sem impacto) — ou removê-lo se preferir limpeza. Vou removê-lo para manter o código enxuto.

### Performance

- Imports ES6 das imagens em `src/assets/` para que o Vite gere hashing, code-splitting e otimização.
- Hero com `eager` + `fetchPriority="high"`; demais com `lazy`.
- Sem novas dependências.

### Fora de escopo

- Conversão para WebP/AVIF (pode ser feita depois se necessário).
- Galeria/lightbox.
