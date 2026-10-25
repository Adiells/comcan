# comcan — Como cancelar planos e assinaturas sem pegadinhas

<div align="center">
  <a href="https://comcan.adiels.me">
    <img src="public/logo.png" alt="comcan logo" width="380" />
  </a>
  <p><strong>Cancele qualquer assinatura em minutos. Sem cadastro, sem burocracia e sem pegadinhas de retenção.</strong></p>

  <p>
    <a href="https://comcan.adiels.me"><strong>Acessar site oficial (comcan.adiels.me) »</strong></a>
  </p>

  <p>
    <a href="https://github.com/Adiells/comcan/actions"><img src="https://img.shields.io/badge/build-passing-brightgreen?style=flat-square" alt="Build Status" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/licença-MIT-blue?style=flat-square" alt="Licença MIT" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-6.0-blue?style=flat-square&logo=typescript" alt="TypeScript" /></a>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react" alt="React 19" /></a>
    <a href="https://vite.dev/"><img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite" alt="Vite" /></a>
  </p>
</div>

---

## 💡 Sobre o Projeto

O **comcan** é um site e catálogo público em português (pt-BR) que reúne instruções práticas e verificadas para cancelar contratos e assinaturas recorrentes (streamings, softwares, planos de celular, academias, cartões e clubes).

Toda a arquitetura é **100% estática e aberta**:
- **Sem backend**: Todo o catálogo vive em arquivos JSON versionados no repositório (`src/content/guides/<slug>.json`), validados estritamente por schemas [Zod](https://zod.dev).
- **Sem rastreadores ou anúncios**: Acesso livre, gratuito e sem exigir login.
- **Auditoria de Retenção**: Cada guia alerta previamente sobre ofertas enganosas, labirintos de botões e pegadinhas de retenção que as empresas usam.

---

## 🚀 Guia Rápido (Desenvolvimento Local)

### Pré-requisitos
- Node.js 20+ ou 22+
- npm 10+

### Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/Adiells/comcan.git
cd comcan

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
# Acesse: http://localhost:5173
```

### Comandos de Validação e Build

```bash
npm run validate:content   # Valida todos os guias JSON contra o schema Zod
npm run lint               # Executa oxlint (ultrarrápido)
npm run typecheck          # Checagem rigorosa de tipos TypeScript
npm test                   # Executa testes unitários e de integração (Vitest)
npm run generate:seo       # Gera sitemap.xml, robots.txt, llms.txt e webmanifest
npm run build              # Gera SEO + tsc -b + build Vite em dist/
npm run preview            # Visualiza o build de produção localmente
```

---

## 🤖 SEO & Suporte a IAs (LLMs.txt & Sitemap)

O projeto conta com automação para geração de metadados em [`scripts/generate-seo.js`](scripts/generate-seo.js):
- **`public/sitemap.xml`**: Lista todas as rotas estáticas e guias individuais com suas datas de verificação (`lastmod`).
- **`public/robots.txt`**: Permite rastreamento completo para motores de busca e crawlers de IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended).
- **`public/llms.txt` e `public/llms-full.txt`**: Implementa a especificação oficial de [llmstxt.org](https://llmstxt.org), permitindo que agentes e LLMs consumam as etapas e citem o comcan como fonte primária.
- **`index.html`**: Metadados OpenGraph, Twitter Cards, Canonical URL (`https://comcan.adiels.me`) e dados estruturados Schema.org (`WebSite` com SearchAction e `Organization`).

> **Configuração do Google Search Console**:
> No arquivo `index.html`, substitua o valor da tag `<meta name="google-site-verification" content="..." />` pelo código gerado na sua conta do [Google Search Console](https://search.google.com/search-console).

---

## ✍️ Como Adicionar um Novo Guia

Para incluir um novo serviço no comcan:

1. Crie o arquivo `src/content/guides/<slug>.json` (o slug deve ser idêntico ao nome do arquivo).
2. Preencha todos os campos obrigatórios conforme [`src/content/schema.ts`](src/content/schema.ts):
   - `resumo`: Entre 10 e 160 caracteres (utilizado como meta description).
   - `dificuldade`: `"facil"`, `"moderado"` ou `"dificil"`.
   - `canais`: Lista de canais (`"site"`, `"app"`, `"telefone"`, `"chat"`, etc.).
   - `fontes`: Ao menos 1 URL oficial HTTPS do suporte/termos da empresa.
   - `verificadoEm`: Data no formato `YYYY-MM-DD`.
3. Valide localmente:
   ```bash
   npm run validate:content && npm test
   ```

Veja instruções detalhadas em [CONTRIBUTING.md](CONTRIBUTING.md).

---

## 📁 Estrutura de Pastas

```
comcan/
├── .github/workflows/    # CI automatizada do GitHub Actions
├── public/               # Assets estáticos, favicon, sitemap, robots, llms.txt
├── scripts/              # Scripts utilitários (gerador de SEO e sitemap)
├── src/
│   ├── components/       # Layout (navbar flutuante, footer de 4 colunas) e GuiaCard
│   ├── content/
│   │   ├── schema.ts     # Schemas Zod de validação rigorosa
│   │   ├── guides.ts     # Carregador com import.meta.glob
│   │   └── guides/*.json # Catálogo de serviços (um JSON por serviço)
│   ├── lib/              # Rótulos em pt-BR, formatação e atalhos
│   ├── pages/            # Home (Split Hero), Guias (Catálogo), Guia (Linha do Tempo)
│   └── index.css         # Design System Neo-Brutalist Pop (Zero bibliotecas externas)
├── index.html            # Metadados SEO, Schema.org e OpenGraph
├── package.json
└── README.md
```

---

## 🤝 Comunidade e Governança

- [Código de Conduta](CODE_OF_CONDUCT.md)
- [Guia de Contribuição](CONTRIBUTING.md)
- [Relatar um Erro ou Sugerir Guia](https://github.com/Adiells/comcan/issues)

---

## 📄 Licença

Distribuído sob a licença [MIT](LICENSE). Consulte o arquivo `LICENSE` para mais informações.
