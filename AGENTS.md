# AGENTS.md

**comcan** is a pt-BR site with step-by-step guides for cancelling subscriptions and plans.
Production domain: **https://comcan.adiels.me**.
Static SPA built with React 19 + Vite 9 + TypeScript, **no backend** — all content is JSON
versioned in this repo.

## Commands

```bash
npm run dev               # http://localhost:5173
npm run validate:content  # validate guide JSON (fast; run after editing content)
npm run lint              # oxlint — this project does NOT use ESLint
npm run typecheck         # tsc -b
npm test                  # Vitest, single run
npm run generate:seo      # generates sitemap.xml, robots.txt, llms.txt from guides
npm run build             # generate:seo && tsc -b && vite build
```

Before finishing a change: `lint` → `typecheck` → `test` → `build`.

## Content lives in JSON, not JSX

- One guide per service in `src/content/guides/<slug>.json`. The `slug` **must** match the
  filename; the loader throws if they diverge.
- `src/content/schema.ts` is the source of truth. `guides.ts` loads every file with
  `import.meta.glob(..., { eager: true })` and validates at import time — invalid JSON breaks the
  app and the tests. Do not bypass validation; fix the JSON.
- Rules enforced by the schema/tests: `resumo` is 10–160 chars (it becomes the meta description),
  at least 1 step and 1 source, HTTPS URLs only, `verificadoEm` in `YYYY-MM-DD` and never in the
  future.
- Enums use neutral English keys (`streaming`, `site`, `dificil`). Visible pt-BR labels live only
  in `src/lib/rotulos.ts`; when adding a category or channel, update both the enum **and** the
  `Record` (`tsc` reports what is missing).
- Only state verifiable facts: link to the official help center, never invent phone numbers,
  prices, or menu paths. When reviewing a guide, update `verificadoEm`.
- **Standard Guide Authoring**: Follow the standard procedure defined in
  `.agents/skills/guide-authoring/SKILL.md` for researching, schema compliance, and verification.

## Routing and deploy

- Client-side routes (`/guias/:slug`) via React Router; the build emits a **single** `index.html`.
  A static host must rewrite `/*` to `/index.html`, otherwise direct links to a guide 404.
- There is no prerender/SSR: each guide has no HTML of its own. Do not describe the site as
  "static pages per guide", and do not add per-route meta tags without implementing prerendering.

## UI

- Styling is one file, `src/index.css`, using CSS variables. Do not introduce Tailwind, CSS-in-JS,
  or a component library; reuse `.card`, `.botao`, `.passos`, `.aviso`, `.chip`.
- For any UI work, follow `.agents/skills/ui-guidelines/SKILL.md` (design principles, tokens,
  component patterns).
- Interface copy is 100% pt-BR. The brand is `comcan`, always lowercase.
- Keep one `h1` per page, a `label` on every input, and the skip link in `Layout`.

## Skills

- Skills live in `.agents/skills/<kebab-name>/SKILL.md` with `name` and `description` frontmatter.
- **Author every skill in English** — frontmatter and body — because skills are agent-facing
  instructions. This is the exception to the pt-BR rule; site copy, content JSON, and UI strings
  stay in Portuguese.
- Keep `description` specific enough that an agent knows when to load the skill.

## Tests

- Vitest + Testing Library on `jsdom` with `globals: false`; cleanup is explicit in
  `src/test/setup.ts` — do not remove it or the DOM leaks between tests.
- Route tests render `<App />` inside `MemoryRouter` (see `src/App.test.tsx`).
- `src/content/guides.test.ts` validates the whole catalog; it is the same path as
  `validate:content`.

## Gotchas

- `verbatimModuleSyntax` and `erasableSyntaxOnly` are enabled: use `import type` and avoid `enum`
  and parameter properties.
- `npm run build` already runs `tsc -b`; do not run `vite build` alone to check types.
- No CI is configured; all verification is local.
- The repo folder is still named `htc`, but the project, package, and brand are `comcan`.
