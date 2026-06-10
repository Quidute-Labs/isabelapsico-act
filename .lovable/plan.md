## Reestruturar como Vite + React SPA (com `index.html`)

Hoje o projeto roda em TanStack Start (com `src/routes/`, `src/router.tsx`, `src/server.ts`, `src/start.ts`, `wrangler.jsonc`, Worker SSR). A landing page é uma única tela, então não precisa de SSR nem de file-based routing. Vou converter para a mesma estrutura do projeto "Landing Page caiobragaads": Vite + React SPA tradicional com `index.html` na raiz, `src/main.tsx` e `src/App.tsx`.

### Resultado final

```
index.html                ← entrada Vite, com GTM e fontes inline
src/
  main.tsx                ← cria root React e monta <App />
  App.tsx                 ← lista as seções da landing
  styles.css              ← (mantido)
  assets/                 ← (mantido — imagens já no lugar)
  components/landing/...  ← (mantidos — Hero, Intro, etc.)
  components/ui/...       ← (mantidos)
  hooks/, lib/            ← (mantidos)
```

### Passos

1. **Criar `index.html` na raiz** com:
   - `<meta>` charset/viewport, `<title>` e `description` da Isabela (reaproveitando os textos atuais do `__root.tsx`).
   - Bloco do Google Tag Manager (GTM-PXRVJT3Q) no `<head>` + `<noscript>` no `<body>`, idêntico ao padrão do projeto de referência.
   - `<link>` de preconnect + Google Fonts (Playfair Display + DM Sans).
   - Open Graph / Twitter cards (reaproveitando a URL de imagem já configurada).
   - `<div id="root">` + `<script type="module" src="/src/main.tsx">`.

2. **Criar `src/main.tsx`** que importa `./styles.css`, cria o root React 19 e monta `<App />`.

3. **Criar `src/App.tsx`** que renderiza, em ordem, os componentes existentes da landing: `Navbar`, `Hero`, `Intro`, `ComoFunciona`, `QuemSouEu`, `Instagram`, `Footer`, `WhatsAppFab`. A constante `WHATSAPP_NUMBER` migra de `src/routes/index.tsx` para cá.

4. **Atualizar `vite.config.ts`** removendo o plugin do TanStack Start (`@tanstack/react-start/plugin/vite`) e o plugin de router, mantendo apenas `@vitejs/plugin-react` + alias `@ → src` + Tailwind (mesma config do projeto de referência).

5. **Atualizar `package.json`**:
   - Remover: `@tanstack/react-start`, `@tanstack/react-router`, `@tanstack/react-router-devtools`, `@tanstack/router-plugin`, `@cloudflare/*`, `wrangler`, `nitropack`/relacionados.
   - Manter: `react`, `react-dom`, `@tanstack/react-query` (se ainda usado por algum componente — vou verificar), shadcn deps, `tailwindcss`, `vite`, `@vitejs/plugin-react`.
   - Scripts: `dev`, `build`, `preview` apontando para Vite puro.

6. **Apagar arquivos do TanStack Start**:
   - `src/router.tsx`, `src/server.ts`, `src/start.ts`, `src/routeTree.gen.ts`
   - `src/routes/__root.tsx`, `src/routes/index.tsx` (e a pasta `src/routes/` inteira)
   - `wrangler.jsonc`

7. **Verificar componentes** em `src/components/landing/` e `Navbar.tsx`: substituir qualquer import de `@tanstack/react-router` (ex.: `<Link>`) por `<a href>` — a landing é single-page e usa apenas âncoras/WhatsApp, então isso é trivial.

### Detalhes técnicos

- O GTM sai do `dangerouslySetInnerHTML` no `__root.tsx` e volta para o `index.html` (executa antes do bundle, captura page view mais cedo).
- As fontes deixam de ser carregadas via `links` do TanStack head e passam para `<link rel="stylesheet">` no HTML — mesmo resultado, sem dependência do router.
- Sem SSR/Worker: o deploy passa a ser estático (build → `dist/` servido como assets). Nada muda no fluxo de publicação do Lovable.
- Nenhum componente visual muda. Cores, fontes, copy, imagens e seções permanecem idênticos.

### Fora de escopo

- Nenhuma alteração de design, copy ou imagens.
- Sem mudanças no número de WhatsApp ou no GTM ID (continuam como constantes editáveis).
