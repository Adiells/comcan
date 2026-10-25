---
name: guide-authoring
description: >-
  Standard procedure and editorial rules for researching, verifying, and writing cancellation guides for comcan.
  Use this skill whenever an agent is tasked with adding or updating guide JSON files in src/content/guides/.
---

# Guide Authoring Procedure — comcan

This document standardizes the end-to-end procedure for researching, verifying, and formatting cancellation guides for **comcan**. All content is strictly factual, verifiable, and written in Brazilian Portuguese (`pt-BR`).

---

## 1. Editorial Standards & Factual Integrity

1. **Zero Hallucination Policy**:
   - **Never** invent phone numbers, customer support emails, menu paths, or retention offers.
   - Every guide must cite at least one official source URL in `fontes` (e.g., official help center / FAQ / terms of service).
   - All URLs must be `https://` and accessible.
2. **Date of Verification (`verificadoEm`)**:
   - Must be in ISO format `YYYY-MM-DD`.
   - Must match the date of verification and **never be in the future**.
3. **Tone and Voice**:
   - Clear, direct, objective, and neutral (no corporate fluff, no informal chat, no clickbait).
   - Interface labels and button names must reflect the real service UI (e.g., `"Cancelar assinatura"`, `"Encerrar conta"`).
   - Warn explicitly about dark patterns and hidden retention loops in `retencao` and step `aviso`.

---

## 2. JSON Schema Specification

Files are stored in `src/content/guides/<slug>.json`.
The filename **must** strictly match the `slug` property.

```json
{
  "slug": "kebab-case-service-name",
  "nome": "Official Service Name",
  "categoria": "streaming | musica | software | jogos | fitness | noticias | entregas | telefonia | financeiro | outros",
  "resumo": "Between 10 and 160 characters. Used for meta description. Clear and actionable summary.",
  "siteUrl": "https://official-website-url.com",
  "dificuldade": "facil | media | dificil",
  "canais": ["site", "app", "telefone", "chat", "email", "presencial"],
  "retencao": "Fact-based description of retention tactics: discounts, confirmation screens, paused plan offers, or cooldown periods.",
  "requisitos": [
    "Account login credentials",
    "Access to registration email or phone number"
  ],
  "passos": [
    {
      "titulo": "Concise Step Title",
      "detalhe": "Detailed instructions on what to click and how to navigate.",
      "aviso": "Optional: Specific pitfall or gotcha at this step (e.g., bill cycle traps, partner app redirection)."
    }
  ],
  "aposCancelar": [
    "What happens with access (e.g., active until the end of billing cycle)",
    "Confirmation receipt advice (check email or save confirmation screen)"
  ],
  "alternativas": [
    {
      "nome": "Alternative plan or service",
      "motivo": "Why this alternative is relevant (e.g., free tier or pause option)"
    }
  ],
  "fontes": [
    {
      "titulo": "Official Help Center Article Title",
      "url": "https://help.service.com/article/how-to-cancel"
    }
  ],
  "verificadoEm": "YYYY-MM-DD"
}
```

---

## 3. Step-by-Step Research & Production Workflow

When authoring a guide:

1. **Step 1: Official Verification**:
   - Search the official Help Center (`ajuda`, `suporte`, `help`) for the exact cancellation procedure in Brazil.
   - Determine which platforms are actually supported (e.g., website browser vs. mobile in-app vs. phone-only).
   - Check third-party billing quirks (e.g., subscribed via Apple App Store, Google Play Store, or telecom bundle).
2. **Step 2: Draft the Content**:
   - Write in pt-BR following the schema.
   - Ensure `resumo` length is between 10 and 160 characters.
3. **Step 3: Immediate Local Validation**:
   - Run `npm run validate:content` to verify that Zod schema validation passes.
4. **Step 4: Full Quality Gate**:
   - Run `npm run lint && npm run typecheck && npm test && npm run build`.
