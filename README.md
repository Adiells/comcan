# comcan

Site em português (pt-BR) com passo a passo para cancelar assinaturas e planos. Toda a interface e
o conteúdo são em português.

Front-end estático: React + Vite + TypeScript, sem back-end. O conteúdo de cada serviço vive em
`src/content/guides/<slug>.json` e é validado por um schema Zod no carregamento e nos testes.

## Comandos

```bash
npm install
npm run dev              # servidor local em http://localhost:5173
npm run validate:content # valida todos os guias JSON
npm run lint             # oxlint
npm run typecheck        # tsc -b
npm test                 # Vitest (uma execução)
npm run build            # tsc -b && vite build
npm run preview          # serve o build
```

## Adicionar um guia

1. Crie `src/content/guides/<slug>.json` (slug em kebab-case, igual ao nome do arquivo).
2. Preencha todos os campos exigidos por `src/content/schema.ts`.
3. Inclua ao menos uma fonte oficial em `fontes` e atualize `verificadoEm`.
4. Rode `npm run validate:content` e `npm test`.

## Estrutura

```
src/
  content/
    schema.ts        # schema Zod + enums (categorias, canais, dificuldade)
    guides.ts        # carrega e valida os JSON via import.meta.glob
    guides/*.json    # um arquivo por serviço
  lib/rotulos.ts     # rótulos pt-BR e formatação de data
  pages/             # Home, Guias, Guia, NaoEncontrado
  components/        # Layout
```

## Deploy

`npm run build` gera uma SPA em `dist/`. Como as rotas são do cliente, o host precisa reescrever
qualquer caminho para `/index.html`.
