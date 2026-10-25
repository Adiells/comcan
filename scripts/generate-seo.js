import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const guidesDir = path.join(rootDir, 'src', 'content', 'guides');
const publicDir = path.join(rootDir, 'public');

const SITE_URL = 'https://comcan.adiels.me';

// 1. Carrega todos os guias JSON
const guideFiles = fs.readdirSync(guidesDir).filter(f => f.endsWith('.json'));
const guides = [];

for (const file of guideFiles) {
  try {
    const raw = fs.readFileSync(path.join(guidesDir, file), 'utf-8');
    const data = JSON.parse(raw);
    guides.push(data);
  } catch (err) {
    console.error(`Erro ao ler ${file}:`, err);
  }
}

// Ordena guias por nome
guides.sort((a, b) => a.nome.localeCompare(b.nome));

console.log(`[SEO] Processando ${guides.length} guias para ${SITE_URL}...`);

// 2. Gera sitemap.xml
const today = new Date().toISOString().split('T')[0];

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE_URL}/guias</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
`;

for (const g of guides) {
  const lastmod = g.verificadoEm || today;
  sitemapXml += `  <url>
    <loc>${SITE_URL}/guias/${g.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
}

sitemapXml += `</urlset>\n`;
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');
console.log(`[SEO] sitemap.xml gerado com ${guides.length + 2} URLs.`);

// 3. Gera robots.txt
const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Permitir indexação por agentes de busca de IA
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf-8');
console.log(`[SEO] robots.txt gerado com sucesso.`);

// 4. Gera llms.txt (Especificação oficial llmstxt.org)
let llmsTxt = `# comcan

> Guias passo a passo verificados para cancelar assinaturas, serviços de streaming, planos de celular e contratos sem burocracia, taxas indevidas ou pegadinhas de retenção.

- Website: ${SITE_URL}
- Idioma: Português do Brasil (pt-BR)
- Licença: Código aberto (MIT)
- Repositório: https://github.com/Adiells/comcan

## Catálogo de Serviços e Guias de Cancelamento

`;

for (const g of guides) {
  const canais = Array.isArray(g.canais) ? g.canais.join(', ') : g.canais;
  llmsTxt += `- [Como cancelar ${g.nome}](${SITE_URL}/guias/${g.slug}): ${g.resumo} (Canais: ${canais} | Dificuldade: ${g.dificuldade})\n`;
}

llmsTxt += `\n## Links Opcionais\n
- [Catálogo Geral](${SITE_URL}/guias): Lista com todos os ${guides.length} serviços documentados.
- [Repositório GitHub](https://github.com/Adiells/comcan): Código-fonte e contribuição de novos guias.
`;

fs.writeFileSync(path.join(publicDir, 'llms.txt'), llmsTxt, 'utf-8');
console.log(`[SEO] llms.txt gerado com sucesso.`);

// 5. Gera llms-full.txt (Texto integral dos passos para IAs)
let llmsFullTxt = `# comcan — Base de Conhecimento Completa de Cancelamento

O comcan é uma plataforma independente dedicada a orientar consumidores brasileiros sobre como rescindir contratos e cancelar assinaturas recorrentes sem cair em labirintos de retenção.

`;

for (const g of guides) {
  llmsFullTxt += `---

## Como cancelar ${g.nome}
- URL Oficial no comcan: ${SITE_URL}/guias/${g.slug}
- Link Direto de Cancelamento: ${g.siteUrl}
- Categoria: ${g.categoria}
- Dificuldade: ${g.dificuldade}
- Canais Viáveis: ${Array.isArray(g.canais) ? g.canais.join(', ') : g.canais}
- Verificado em: ${g.verificadoEm}
- Resumo: ${g.resumo}

### Alerta de Retenção
${g.retencao}

### Passo a Passo:
`;

  g.passos.forEach((p, idx) => {
    llmsFullTxt += `${idx + 1}. **${p.titulo}**: ${p.detalhe}\n`;
    if (p.aviso) {
      llmsFullTxt += `   *Aviso:* ${p.aviso}\n`;
    }
  });

  if (g.fontes && g.fontes.length > 0) {
    llmsFullTxt += `\n### Fontes Oficiais:\n`;
    for (const f of g.fontes) {
      llmsFullTxt += `- [${f.titulo}](${f.url})\n`;
    }
  }

  llmsFullTxt += `\n`;
}

fs.writeFileSync(path.join(publicDir, 'llms-full.txt'), llmsFullTxt, 'utf-8');
console.log(`[SEO] llms-full.txt gerado com sucesso.`);

// 6. Gera site.webmanifest
const webmanifest = {
  name: "comcan — Como cancelar planos e assinaturas",
  short_name: "comcan",
  description: "Passo a passo verificado para cancelar assinaturas sem pegadinhas.",
  start_url: "/",
  display: "standalone",
  background_color: "#0c0f14",
  theme_color: "#164bf4",
  icons: [
    {
      src: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
      purpose: "any maskable"
    },
    {
      src: "/favicon.png",
      sizes: "64x64",
      type: "image/png"
    }
  ]
};

fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(webmanifest, null, 2), 'utf-8');
console.log(`[SEO] site.webmanifest gerado com sucesso.`);
