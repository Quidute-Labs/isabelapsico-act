## Substituir o ícone de bússola pela imagem enviada

Trocar o ícone `Compass` (lucide-react) pela ilustração desenhada à mão da bússola enviada, mantendo o mesmo tamanho e posicionamento atual.

### Passos

1. Copiar `user-uploads://Design_sem_nome_1_-removebg-preview_1.png` para `src/assets/bussola.png`.
2. Criar um pequeno componente `BussolaIcon.tsx` em `src/components/landing/` que renderiza `<img>` com a imagem importada, `alt=""` (decorativo), `loading="lazy"`, e aceita `className` para herdar tamanho (`w-6 h-6`, `w-10 h-10`, etc.).
3. Substituir os usos de `<Compass />` em:
   - `Navbar.tsx` (mantendo `w-6 h-6`)
   - `Footer.tsx` (mantendo `w-10 h-10`)
4. Remover o import `Compass` desses dois arquivos.

### Observações

- A imagem já tem fundo transparente (PNG removebg), então combina com qualquer seção.
- Como é uma ilustração com traços escuros, fica legível tanto no `bg-background` quanto no `bg-secondary`.
- Sem mudanças em cores, layout ou outros componentes.

### Fora de escopo

- Re-colorir a bússola para o marrom da paleta (a ilustração original em cinza/preto fica elegante com a paleta bege).
- Trocar o favicon.
