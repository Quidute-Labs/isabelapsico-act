# Landing Page — Isabela Unis | Psicóloga (ACT)

Página única, mobile-first, carregamento rápido, com identidade visual acolhedora em tons terrosos. Sem backend, sem formulários — todos os CTAs levam ao WhatsApp.

## Identidade visual (design tokens)

Adicionar ao `src/styles.css` em `oklch`:
- `--background`: off-white #FDFAF7
- `--secondary` / superfície quente: bege #F5EDE3
- `--foreground` / texto principal: marrom #8B6347
- `--primary` (botões/tags/destaque): terracota #A0714F
- `--accent` (faixa redes sociais): marrom suave #C4A882
- Tipografia carregada via `<link>` no `__root.tsx` head: Playfair Display (títulos) + DM Sans (corpo). Tokens `--font-display` e `--font-sans`.
- Ícone bússola: `Compass` do lucide-react (logo + footer).

## Estrutura

Arquivo único de página em `src/routes/index.tsx` (substituindo o placeholder) com componentes locais por seção em `src/components/landing/`:

```
src/components/landing/
  Navbar.tsx           // logo bússola + nome + CRP + CTA WhatsApp
  Hero.tsx             // fundo bege + placeholder foto + título serif + CTA
  Intro.tsx            // 2 colunas: placeholder consultório | texto + botão outline
  ComoFunciona.tsx     // id="terapia" (âncora) — texto + placeholder foto
  QuemSouEu.tsx        // texto + placeholder foto
  Instagram.tsx        // fundo #C4A882 + foto + handle linkado
  Footer.tsx           // bússola + nome completo + CRP + e-mail + CTA
  WhatsAppFab.tsx      // botão fixo verde inferior direito
  SectionReveal.tsx    // wrapper com fade-in via IntersectionObserver
```

Constante única no topo de `src/routes/index.tsx`:
```ts
const WHATSAPP_NUMBER = "5500000000000"; // substituir pelo número real
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
```
Reaproveitada via prop ou import em todos os CTAs.

## Conteúdo (textos exatos do brief)

- Hero, Intro, Como funciona, Quem sou eu, redes — copiados literalmente do pedido.
- Handle Instagram: `@isabelaunis.psi` → `https://instagram.com/isabelaunis.psi`.
- E-mail footer: `isabelaunis.psi@gmail.com`.

## Mobile-first e performance

- Layouts em `flex-col` por padrão; `md:grid md:grid-cols-2` nas seções de duas colunas.
- Navbar sticky com altura compacta; CTA reduzido a ícone+texto curto no mobile.
- Placeholders de foto: `div` com `aspect-[4/5]` em bege com borda sutil e ícone bússola/câmera centralizado (sem requisições externas).
- Sem bibliotecas pesadas: animações via CSS (`animate-fade-in` já existente) + `IntersectionObserver` no `SectionReveal` (sem framer-motion).
- Fontes Google com `display=swap` e `preconnect` no head.
- Ícones lucide-react (tree-shakeable): `Compass`, `Instagram`, `MessageCircle` (WhatsApp).
- Sem imagens externas até o cliente entregar fotos reais.

## SEO / head

Em `src/routes/index.tsx` via `head()`:
- title: "Isabela Unis | Psicóloga Clínica — Terapia ACT" (<60 chars)
- description: frase acolhedora baseada no hero (<160 chars)
- og:title, og:description, lang pt-BR no `__root.tsx`.
- H1 único no Hero; H2 nas demais seções; `alt` nos placeholders.

## Interações

- Botões primários (terracota): hover escurece via `hover:brightness-95` + `transition`.
- Botão outline "Quero saber mais": `href="#terapia"` com `scroll-behavior: smooth` no `html`.
- FAB WhatsApp: `fixed bottom-4 right-4 z-50`, círculo verde (`bg-[#25D366]`), ícone branco, `aria-label="Falar no WhatsApp"`.

## Detalhes técnicos

- Atualizar `__root.tsx` apenas para: `lang="pt-BR"`, preconnect + link das fontes Google, e meta description/title default da página (sem quebrar `<Outlet />`).
- Atualizar tokens em `src/styles.css` (somente as variáveis necessárias, mantendo o restante do arquivo).
- Nenhum backend, sem Lovable Cloud, sem dependências novas além das já instaladas (lucide-react já presente).
- Verificar build após implementação.

## Fora de escopo

- Integração real com WhatsApp (apenas placeholder do número).
- Upload/gestão de fotos reais (placeholders elegantes).
- CMS, analytics, formulários.