# Contribuindo com o comcan

Obrigado por querer ajudar a tornar o **comcan** cada vez mais útil para quem quer cancelar assinaturas sem passar raiva! Toda contribuição — seja adicionando um novo serviço, corrigindo um passo alterado ou melhorando a interface — é muito bem-vinda.

---

## 1. Princípios Editoriais

Antes de escrever ou alterar um guia, lembre-se das nossas regras de ouro:

1. **Fatos 100% Verificáveis**: Nunca invente caminhos de menu, telefones ou regras. Só documente caminhos confirmados na central de ajuda oficial ou testados diretamente.
2. **Fontes Oficiais**: Todo guia deve conter ao menos uma URL oficial do suporte ou termos em `fontes` (sempre em `https://`).
3. **Foco na Resolução**: O objetivo da pessoa usuária é cancelar no menor número de passos possível, fugindo de call centers sempre que existir canal digital.
4. **Alerta de Pegadinhas**: Documente o que as empresas tentam fazer para reter o cliente (ex: descontos temporários de 50%, perda imediata de benefícios, taxas de fidelidade).
5. **Idioma**: Toda a interface e conteúdo dos guias são exclusivamente em **Português do Brasil (pt-BR)**.

---

## 2. Como Adicionar um Novo Guia de Serviço

Cada serviço é documentado em um único arquivo JSON em `src/content/guides/<slug>.json`.

### Passo a Passo:

1. Crie o arquivo `src/content/guides/<nome-do-servico>.json` (o `slug` dentro do JSON **deve ser idêntico** ao nome do arquivo sem `.json`).
2. Siga o formato validado pelo schema Zod (`src/content/schema.ts`):

```json
{
  "slug": "exemplo-servico",
  "nome": "Exemplo Serviço",
  "categoria": "streaming",
  "dificuldade": "facil",
  "canais": ["site", "app"],
  "siteUrl": "https://exemplo.com/account/cancel",
  "resumo": "Passo a passo rápido para encerrar sua assinatura do Exemplo Serviço pela internet.",
  "retencao": "O serviço pode oferecer 2 meses com desconto. Recuse para prosseguir com o cancelamento definitivo.",
  "passos": [
    {
      "titulo": "Acesse a página de conta",
      "detalhe": "Faça login com seu e-mail e senha e abra a aba de Assinaturas.",
      "aviso": "Se assinou via Apple ou Google Play, o cancelamento deve ser feito pela loja do celular."
    },
    {
      "titulo": "Clique em Cancelar Assinatura",
      "detalhe": "Role até o final da página e confirme a desistência."
    }
  ],
  "fontes": [
    {
      "titulo": "Central de Ajuda Oficial do Exemplo Serviço",
      "url": "https://ajuda.exemplo.com/cancelar"
    }
  ],
  "verificadoEm": "2026-10-25"
}
```

### Regras do Schema:
- `resumo`: Entre 10 e 160 caracteres (utilizado como meta description nos motores de busca).
- `dificuldade`: `"facil"`, `"moderado"` ou `"dificil"`.
- `canais`: Lista contendo `"site"`, `"app"`, `"telefone"`, `"chat"`, `"presencial"` ou `"email"`.
- `verificadoEm`: Formato `YYYY-MM-DD` (nunca no futuro).

---

## 3. Rodando os Testes e Validação Local

Antes de abrir uma Pull Request, execute os comandos de verificação:

```bash
# 1. Valida todos os arquivos JSON contra o schema
npm run validate:content

# 2. Executa linter (oxlint)
npm run lint

# 3. Validação de tipos TypeScript
npm run typecheck

# 4. Executa os testes de interface e rotas
npm test

# 5. Gera os arquivos de SEO e constrói o projeto
npm run build
```

---

## 4. Enviando sua Contribuição

1. Faça um Fork do repositório: [https://github.com/Adiells/comcan](https://github.com/Adiells/comcan)
2. Crie uma branch para sua alteração: `git checkout -b feat/adiciona-guia-exemplo`
3. Faça o commit: `git commit -m "feat(guias): adiciona guia de cancelamento do Exemplo"`
4. Envie para o seu fork: `git push origin feat/adiciona-guia-exemplo`
5. Abra uma Pull Request com uma breve descrição das fontes consultadas.
