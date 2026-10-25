---
name: ui-guidelines
description: >-
  UI design and visual identity guidelines for comcan, based on Neo-Brutalist Pop and tactile design principles.
  Use this skill when creating, styling, or refactoring components, pages, or CSS in comcan.
---

# UI & Visual Identity Guidelines — comcan

**comcan** follows a **Neo-Brutalist Pop & Expressive** design methodology: an unapologetic,
tactile, high-energy aesthetic that empowers consumers to break free from predatory subscription
traps. It replaces sterile corporate layouts and washed-out pastels with bold outlines, vivid
color collisions, and mechanical responsiveness.

---

## 1. Grounding and Brand Persona

- **Subject**: Cancelling digital subscriptions, hidden fees, and manipulative retention loops
  without friction or bureaucracy.
- **Audience**: Consumers seeking fast, unambiguous, no-nonsense exit instructions. They want clarity,
  speed, and the feeling of taking back control.
- **Brand Emotion**: Empowering, agile, irreverent, and indisputably reliable.
- **Aesthetic Genre**: **Neo-Brutalist Pop & Tactile Utility** (inspired by Gumroad, Figma, and Wise).
- **Core Visual Metaphor**: **The "Tactile Eject / Power-Off Switch"** — a mechanical, definitive
  button or toggle that cuts the cord on recurring charges.

---

## 2. Design System Tokens

The palette is built around high-voltage electric contrasts anchored by pitch-black structural
borders and crisp tactile surfaces:

```css
:root {
  /* Brand Core Collisions */
  --cobalto: #164bf4;           /* Electric Cobalt Blue - authority and primary punch */
  --cobalto-hover: #0d38c7;     /* Cobalt hover state */
  --cobalto-claro: #ebf0ff;     /* Light tinted blue for badges/cards */

  --amarelo-acido: #d8ff00;     /* Acid / Electric Neon Yellow - high attention, action */
  --amarelo-hover: #c4ea00;     /* Acid yellow hover state */

  /* Neutral Solids & Outlines */
  --preto: #0c0f14;             /* Pitch black for borders, solid shadows, and display titles */
  --tinta-corpo: #1f242e;       /* High-contrast readable body text */
  --tinta-suave: #4a5468;       /* Explanatory secondary text */
  --tinta-fraca: #727f96;       /* Metadata, timestamps, minor captions */
  
  --fundo: #f4f6fa;             /* Crisp modern light canvas */
  --superficie: #ffffff;        /* Pure white card backgrounds */
  --borda-pop: #0c0f14;         /* Mandatory 2px/3px structural black borders */

  /* Semantic Alerts & Actions */
  --verde-pop: #00c853;         /* Success, confirmed cancellation, free */
  --verde-fundo: #e6f9ed;
  
  --vermelho-pop: #ff3b30;      /* Critical warning, telephone call required, abusive trap */
  --vermelho-fundo: #ffecee;

  --laranja-pop: #ff9500;       /* Retention alert, moderate difficulty */
  --laranja-fundo: #fff6e8;

  /* Geometry & Tactile Feedback */
  --borda-grossa: 2.5px solid var(--borda-pop);
  --borda-fina: 1.5px solid var(--borda-pop);
  
  /* Hard Drop Shadows (No blurry gradients) */
  --sombra-pop: 4px 4px 0px var(--preto);
  --sombra-pop-lg: 6px 6px 0px var(--preto);
  --sombra-pop-sm: 2px 2px 0px var(--preto);
  --sombra-pop-hover: 6px 6px 0px var(--preto);
  --sombra-pop-pressionada: 1px 1px 0px var(--preto);

  --raio: 10px;                 /* Friendly, rounded brutalist corners */
  --raio-sm: 6px;
  --raio-pilula: 9999px;        /* Tags, badges, and button pills */
  --largura-max: 72rem;

  /* Typography */
  --fonte-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --fonte-display: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --fonte-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;
}
```

---

## 3. Tactile Interaction Principles

1. **Physical "Click" (Snappy Keypress)**:
   - Interactive elements (buttons, filter chips, cards) feature hard shadows (`box-shadow: 4px 4px 0px var(--preto)`).
   - On `:active` or click, elements translate down-right (`transform: translate(2px, 2px)`) while the
     shadow reduces, creating an unmistakable physical button feel.
2. **Sharp Visual Hierarchy**:
   - Every card has a clear black border (`2px` to `2.5px`).
   - Tags and badges use contrasting pill shapes (`--raio-pilula`) with solid black outlines.
3. **No Decorative Fluff**:
   - No weak pastel washes or transparent blurry glassmorphism.
   - Contrast is bold, direct, and meets WCAG AAA standards on core interactive areas.

---

## 4. UX Architecture & Components

### 4.1 The Hero & Quick Eject Bar
- Dynamic high-impact headline ("Cancele qualquer assinatura em minutos. Sem pegadinhas.").
- **Quick Eject Search**: A high-profile input container with thick border, hard shadow, and immediate
  reactive search.
- **Filter Chips**: Pill buttons with solid outlines; active chip snaps to Electric Cobalt or Acid Yellow.

### 4.2 Service Cards Grid
- Structured cards with white surface, solid black border, and 4px hard shadow.
- Prominent service identity, difficulty pill badge (Fácil / Moderado / Difícil), viable channel icon,
  and an immediate direct link action button.

### 4.3 Guide Page: Continuous Visual Timeline
- **Service Header Banner**: Electric Cobalt Blue accent header with service title, official channel badge,
  and quick "Ir para página oficial de cancelamento" button.
- **Retention Trap Alert Box (`.alerta-retencao`)**: Highlighted card in Acid Yellow or Warning Orange
  warning the user about dark patterns before they begin.
- **Continuous Timeline (`.linha-do-tempo`)**:
  - Vertical connecting guide line linking all steps sequentially.
  - Giant numbered pill nodes (1, 2, 3...) in cobalt/acid yellow.
  - Step cards containing explicit, actionable commands and direct deep-links.
- **Audit Verification Stamp**: Time-stamped footer confirming the guide's freshness and official sources.

---

## 5. Microcopy and Voice

- **Brand Name**: `comcan` (lowercase always).
- **Tone**: Clear, fearless, practical, Brazilian Portuguese (pt-BR).
- **Action Verbs**: "Ejetar assinatura", "Abrir site oficial", "Evitar pegadinha", "Ver passo a passo".
