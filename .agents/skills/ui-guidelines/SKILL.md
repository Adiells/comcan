---
name: ui-guidelines
description: >-
  UI design and visual identity guidelines for comcan, based on Frontend Design principles.
  Use this skill when creating, styling, or refactoring components, pages, or CSS in comcan.
---

# UI & Visual Identity Guidelines — comcan

**comcan** follows the **Frontend Design** methodology and philosophy: a deliberate, opinionated,
uncompromising point of view against generic patterns (the "AI-generated look" of easy gradients
and fake floating cards).

---

## 1. The Subject and the Point of View (Grounding)

- **Subject**: Cancelling digital subscriptions, contracts, and abusive plans without friction,
  bureaucracy, or dark patterns.
- **Audience**: Exhausted people, frustrated by predatory corporate retention (endless phone
  calls, hidden buttons, confusing pages) who only want the shortest factual path to stop the
  charge.
- **Single mission of the page**: Deliver the clean cancellation route, confirmed by official
  sources, and warn about retention traps in advance.
- **Aesthetic genre**: **Soft Brutalist Minimalism & Utilitarian Editorial** (Utility Broadsheet /
  Technical De-enrollment Form).

---

## 2. The Signature Element

comcan has one unique visual signature: **The Technical De-enrollment Form / Escape Protocol**:

- Metadata structured like a control stamp (difficulty, viable channel, verification date).
- Typographic touches of mechanical precision (`monospace`) wherever objective data is emitted:
  version stamp, sequential step number, time/difficulty, and retention warnings.
- No random cosmetic numbers: sequential numbering exists only because cancelling is strictly an
  ordered, step-by-step process.

---

## 3. Design System Tokens

A high-fidelity palette with deliberate contrast (no washed-out pastels):

```css
:root {
  /* Ink & Surface */
  --tinta: #101418;             /* Deep editorial black */
  --tinta-suave: #485160;       /* Explanatory body text */
  --tinta-fraca: #687180;       /* Metadata and secondary captions (AA on --papel) */
  --papel: #f8f7f4;             /* Solid paper-like background */
  --papel-alto: #ffffff;        /* Cards and utilitarian surfaces */
  --borda: #ded9cf;             /* Visible structural lines */
  --borda-forte: #101418;       /* Brutalist emphasis borders */

  /* Action & Semantics */
  --verde: #0d5f47;             /* Resolving action, confirmation, success */
  --verde-hover: #084332;       /* Primary control hover */
  --verde-claro: #e7f4ee;       /* Informative resolution backgrounds */
  --verde-borda: #a6d8c0;       /* Retention/resolution border */

  --ambar: #8f5300;             /* Trap and retention alert */
  --ambar-claro: #fef5e4;       /* Alert background */
  --ambar-borda: #f7d69b;       /* Warning border */

  --vermelho: #a12323;          /* High difficulty / phone call required */
  --vermelho-claro: #fdeeee;

  /* Soft Brutalist Geometry */
  --raio: 8px;                  /* Controlled, firm, sober corners */
  --raio-sm: 4px;               /* Details and inputs */
  --raio-pilula: 999px;         /* Tags and action buttons */
  --largura: 68rem;

  /* Deliberate Typography */
  --fonte-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  --fonte-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}
```

---

## 4. Copywriting and Microcopy Principles

1. **Active, Factual Voice**: Headings and buttons state the final action exactly ("Ver todos os
   guias", "Abrir site oficial", "Como cancelar Spotify").
2. **No Selling, No Euphemisms**: Never use empty adjectives ("wonderful", "amazing"). Describe
   the process coldly: "Exige chamada telefônica", "Cancele antes de renovar".
3. **Errors Are Directions**: Empty or error screens do not offer loose apologies; they instruct
   the user on what to do next.

---

## 5. Component Construction Guidelines

### 5.1 The Hero

- The Hero is a thesis, not an advertising banner: it states the proposition categorically
  ("Cancelar não deveria ser difícil") and already exposes the search and the catalog.

### 5.2 Cards and Forms

- Crisp 1px borders in `--borda`. On hover, snap to `--borda-forte` or `--verde` with a clean
  mechanical transition (120ms ease-out).
- No oversized diffuse shadows (exaggerated "soft blur"); prefer dry, precise contact shadows when
  needed.

### 5.3 Numbered Steps (`.passos`)

- The numbering indicates the exact execution order. The indicator uses `--fonte-mono` to convey
  procedural rigor.
- Trap warnings (`.aviso`) stay visually attached to the step where they occur.

### 5.4 Retention (`.retencao`)

- A highlighted box that prepares the user for the company's counter-offer (temporary discounts,
  guilt screens, fake confirmations).

---

## 6. Frontend Quality Checklist

- [ ] **Copy audit**: Is the text direct, in clear Portuguese, and user-centered?
- [ ] **No heavy dependencies**: Pure CSS in `src/index.css` only.
- [ ] **Accessibility**: Explicit input labels, AA+ contrast, and visible focus on every element.
- [ ] **Tests and build**: `npm run lint && npm run typecheck && npm test && npm run build` all
      passing.
