# Pesquisa factual — Lote 2, Grupo 1 (comcan)

Pesquisador: Argos · Data de verificação: 2026-10-25
Todas as URLs abaixo foram testadas (HTTP 200) em 2026-10-25. Nenhum telefone, preço ou caminho de menu foi inventado:
tudo vem das páginas oficiais citadas.

Serviços: `microsoft-365`, `canva`, `linkedin-premium`, `duolingo`, `playstation-plus`.

---

## 1. microsoft-365

- **nome**: Microsoft 365
- **categoria**: software
- **siteUrl**: https://www.microsoft.com/pt-br/microsoft-365
- **dificuldade**: media
- **canais**: ["site", "chat"] (cancelamento self-service no site; suporte guiado/chat para casos travados)
- **resumo (sugestão)**: "Cancele o Microsoft 365 em account.microsoft.com/services e evite a cobrança do próximo ciclo."

**retencao** (fatos da página oficial "Cancelar uma assinatura do Microsoft 365"):
- A página de cancelamento abre com a seção **"Por favor, revise"**, que pode listar "detalhes de assinaturas alternativas, que podem ser mais baratas".
- No rodapé da página o usuário precisa escolher entre **"Quero manter meus benefícios"** e **"Não quero minha assinatura"**.
- A Microsoft sugere explicitamente **alternar para outro plano** em vez de cancelar.
- Reembolso não é automático: "Nem todos os cancelamentos resultarão em reembolso"; é preciso cancelar primeiro para checar elegibilidade.

**requisitos**:
- Conta Microsoft usada na compra (o artigo insiste em "usar essa conta").
- Saber onde a assinatura foi comprada (Microsoft, Google Play, App Store ou revendedor).

**passos**:
1. "Acesse Serviços e assinaturas" — `https://account.microsoft.com/services/microsoft365`, login com a mesma conta usada na compra.
   aviso: compras no Google Play, na App Store ou em revendedor terceirizado (ex.: Amazon) são canceladas nesses canais, não na Microsoft.
2. "Selecione Cancelar assinatura" — o botão pode aparecer como **"Atualizar ou Cancelar"**.
   aviso: se aparecer **"Ativar cobrança recorrente"** em vez de cancelar, a assinatura já está marcada para expirar na data mostrada e não haverá nova cobrança; nada a fazer.
3. "Revise a oferta de retenção" — leia a seção "Por favor, revise" no topo, onde ficam os planos alternativos.
4. "Confirme o cancelamento" — no fim da página, **"Não quero minha assinatura"**. "Quero manter meus benefícios" mantém tudo como está.
5. "Cancele com mais de 2 dias de antecedência" — a Microsoft afirma que cancelamentos devem ocorrer mais de 2 dias antes da data de cobrança.
   aviso: dívida em aberto no cartão/formas de pagamento impede o cancelamento até a quitação.

**aposCancelar**:
- O acesso aos aplicativos e ao armazenamento pago continua até o fim do período já pago.
- A cota volta a 5 GB no OneDrive e 15 GB no Outlook.com; acima disso não é possível enviar/receber e-mails nem sincronizar novos arquivos.
- A Microsoft pode excluir o OneDrive e os arquivos 6 meses após o fim da assinatura.
- No Microsoft 365 Família/Premium, quem compartilha a assinatura também perde a cota extra.
- O cancelamento não garante reembolso; é preciso cancelar antes para verificar a elegibilidade.

**alternativas**:
- Microsoft 365 Básico — https://www.microsoft.com/pt-br/microsoft-365/basic — plano de entrada mais barato, com apps para web/celular e armazenamento em nuvem (conferir recursos na página oficial).
- Apps web gratuitos — https://www.microsoft.com/pt-br/microsoft-365/free-office-online-for-the-web — Word, Excel e PowerPoint no navegador sem assinatura.

**fontes**:
- "Suporte da Microsoft — Cancelar uma assinatura do Microsoft 365" — https://support.microsoft.com/pt-br/accounts-billing/subscriptions/cancel-a-microsoft-365-subscription
- "Suporte da Microsoft — Não é possível cancelar sua assinatura da Microsoft" — https://support.microsoft.com/pt-br/accounts-billing/subscriptions/unable-to-cancel-your-microsoft-subscription

---

## 2. canva

- **nome**: Canva
- **categoria**: software
- **siteUrl**: https://www.canva.com/pt_br/
- **dificuldade**: media
- **canais**: ["site", "app"] (web/computador e app Android; assinaturas de loja só na loja)
- **resumo (sugestão)**: "Cancele o Canva Pro, Pro+ ou Equipes em Configurações > Faturamento e mantenha seus designs no plano grátis."

**retencao** (artigo oficial "Cancelar um plano do Canva", pt-BR):
- A própria Canva sugere **pausar em vez de cancelar**: pausa de até **3 meses**, sem cobranças, com retomada automática e lembrete por e-mail. No plano anual, só é possível pausar faltando **menos de 2 meses** para a renovação.
- O fluxo tem várias telas: "Cancelar plano" → "Continuar cancelamento" → **escolher o motivo** → "Continuar cancelamento" → "Cancelar assinatura".
- Depois de cancelar, a página de **Cobrança** ainda mostra a opção de desfazer ("Continuar com o Canva Equipes, o Canva Pro+, o Canva Pro ou o Canva Pro Lite") enquanto a assinatura estiver ativa.
- Cancelar o **Canva Equipes é definitivo**: não é possível assinar Equipes novamente (a Canva sugere Canva Pro+ no lugar).
- Armadilha de cobrança: o sistema de cobrança roda em **UTC**, então a cobrança pode aparecer um dia antes do esperado — e bancos podem manter a recorrência ativa mesmo com cartão cancelado/expirado.

**requisitos**:
- Login na conta **ou na equipe** correta (o artigo lista "não estar logado na conta/equipe com a assinatura" como causa de falha).
- Saber se a cobrança veio da Canva, Google Play, App Store ou PayPal (e-mail de cobrança/extrato).

**passos**:
1. "Descubra por onde a assinatura foi feita" — confira o e-mail de cobrança ou o extrato.
   aviso: assinaturas feitas no Google Play ou na App Store **não podem** ser canceladas no app do Canva; e desinstalar o app não cancela nada.
2. "Abra Configurações > Faturamento" — na página inicial, selecione o perfil da conta → **Configurações** → **Faturamento**. No app Android: **Menu** → perfil → **Configurações** → **Cobrança** → ícone de mais ações → **Solicitar cancelamento**.
3. "Selecione Cancelar plano" — depois **"Continuar cancelamento"**.
4. "Pule a oferta de pausa" — na tela seguinte aparece **"Quero pausar minha assinatura"**; para seguir, escolha continuar o cancelamento.
   aviso: a pausa dura 3 meses e o plano volta sozinho depois — não é cancelamento.
5. "Informe o motivo e confirme" — escolha o motivo → **"Continuar cancelamento"** → **"Cancelar assinatura"**.
   aviso: em Canva Equipes o cancelamento é permanente e a equipe não pode voltar ao plano Equipes.

**aposCancelar**:
- Você mantém os recursos pagos até o fim do período de cobrança atual.
- Todos os designs, pastas e o kit de marca continuam acessíveis no Canva Grátis, e a conta segue ativa.
- O Affinity continua gratuito com a conta Canva.
- Em Canva Equipes, os membros perdem os recursos pagos no fim do ciclo e o espaço de trabalho vira plano grátis; o admin continua titular.
- Você recebe um e-mail de confirmação — guarde como comprovante.

**alternativas**:
- Canva Grátis — https://www.canva.com/pt_br/precos/ — mantém designs e recursos básicos sem mensalidade.
- Pausar por 3 meses — https://www.canva.com/pt_br/help/pause-annual-canva-plan/ — suspende cobranças e recursos premium, com retomada automática.

**fontes**:
- "Central de Ajuda do Canva — Cancelar um plano do Canva" — https://www.canva.com/pt_br/help/cancel-canva-plan/
- "Central de Ajuda do Canva — Pausar um plano do Canva" — https://www.canva.com/pt_br/help/pause-annual-canva-plan/
- "Central de Ajuda do Canva — Reembolsos das assinaturas do Canva" — https://www.canva.com/pt_br/help/subscription-refunds/

---

## 3. linkedin-premium

- **nome**: LinkedIn Premium
- **categoria**: software
- **siteUrl**: https://www.linkedin.com/premium/
- **dificuldade**: media
- **canais**: ["site", "app"]
- **resumo (sugestão)**: "Cancele o LinkedIn Premium pelo site (ou app Android) e mantenha o acesso até o fim do ciclo já pago."

**retencao** (artigos oficiais a545578 e 125589):
- O LinkedIn oferece **downgrade para outro plano Premium** em vez de encerrar — disponível **apenas no site para computador**.
- Quem cancela **perde o preço promocional para sempre**: "Se cancelar uma promoção ou um plano que não é mais oferecido, você perderá seu preço com desconto".
- Cancelar um **teste grátis** encerra o acesso na hora e impede novo teste por **no mínimo 12 meses**.
- Créditos de InMail acumulados **não podem ser recuperados**.

**requisitos**:
- Login na conta do LinkedIn.
- Saber onde a assinatura foi comprada (LinkedIn, Apple App Store ou Google Play).
- Computador para assinaturas compradas direto no LinkedIn.

**passos**:
1. "Confirme onde a assinatura foi comprada" — define o caminho.
   aviso: compra direta no LinkedIn só pode ser cancelada no **site para computador** ou no **app para Android**; no app iOS o cancelamento não está disponível. Compra na App Store → cancelar no dispositivo Apple; Google Play → site/app do LinkedIn ou Play Store.
2. "Clique no ícone Eu" — no topo da página inicial do LinkedIn (computador).
3. "Abra Recursos Premium > Gerenciar assinatura" — em **Detalhes do plano**, no painel esquerdo; você é levado à Central de administração do LinkedIn.
4. "Selecione Compras" — no painel esquerdo, e depois a assinatura ativa.
5. "Clique em Cancelar assinatura" — em **Ações**, e confirme em **"Confirmar cancelamento"**.
6. "Cancele com pelo menos 1 dia de antecedência" — para não ser cobrado no ciclo seguinte.
   aviso: no app Android, o caminho é foto de perfil → **Recursos Premium** → **Gerenciar assinatura** → **Cancelar assinatura**.

**aposCancelar**:
- A conta volta ao plano Basic (gratuito) ao fim do ciclo; perfil, conexões e demais dados permanecem.
- Você perde créditos de InMail (não recuperáveis), a lista completa de "Quem viu meu perfil", o LinkedIn Learning, filtros avançados, o selo Premium e insights.
- A forma de pagamento só pode ser excluída depois do fim do ciclo de cobrança.
- Teste grátis cancelado encerra o acesso Premium imediatamente.
- O preço promocional perdido não pode ser recuperado.

**alternativas**:
- LinkedIn Basic (gratuito) — https://www.linkedin.com/ — mantém perfil, conexões e busca básica.
- Downgrade para outro plano Premium — https://www.linkedin.com/help/linkedin/answer/a1447279?lang=pt-BR — troca por um plano mais barato sem encerrar; só no site para computador.

**fontes**:
- "Ajuda do LinkedIn — Cancelar assinatura do LinkedIn Premium" — https://www.linkedin.com/help/linkedin/answer/a545578?lang=pt-BR
- "Ajuda do LinkedIn — Perguntas frequentes sobre como cancelar assinatura do LinkedIn Premium" — https://www.linkedin.com/help/linkedin/answer/125589?lang=pt-BR

---

## 4. duolingo

- **nome**: Duolingo
- **categoria**: software
- **siteUrl**: https://pt.duolingo.com/
- **dificuldade**: facil
- **canais**: ["site", "app"]
- **resumo (sugestão)**: "Cancele o Super Duolingo no site ou pelo app e mantenha o plano até o fim do período já pago."

**retencao** (artigo oficial "Como cancelo a minha assinatura do Super Duolingo?"):
- "Apagar o aplicativo ou a sua conta **não cancela** a sua assinatura" — quem só desinstala continua sendo cobrado.
- **Sem reembolso**: "Cancelar a assinatura não gera reembolso retroativo" e as taxas não são reembolsadas parcialmente pela data do cancelamento.
- O acesso continua até o fim do período pago e a assinatura **pode ser reativada quando quiser**.
- Assinaturas compradas em loja exigem confirmação na Google Play Store, App Store ou Alipay.

**requisitos**:
- Login na conta Duolingo.
- Saber por onde assinou (site, app iOS/Android, configurações do telefone).

**passos**:
1. "Identifique por onde a assinatura foi feita" — o caminho muda conforme o canal.
   aviso: apagar o app ou a conta não cancela a cobrança.
2. "No navegador, abra Configurações" — na página inicial, clique na imagem de perfil → **Configurações** (https://pt.duolingo.com/settings).
3. "Entre em Super Duolingo" — https://pt.duolingo.com/settings/super.
4. "Clique em Cancelar assinatura" — e confirme.
5. "No app, use Gerenciar assinatura" — toque no ícone do Super no topo da página inicial → **Configurações** (engrenagem) → **"Gerenciar assinatura"** → **"Cancelar assinatura"**.
6. "Confirme na loja" — a etapa final é na Google Play Store, App Store ou Alipay.
   aviso: no Android assinado pelas configurações do telefone, é preciso abrir uma solicitação de suporte; no iOS, seguir as instruções da Apple.

**aposCancelar**:
- Ofensiva e progresso de aprendizado não são afetados.
- Os recursos do Super Duolingo continuam até o fim do período da assinatura; depois, não há mais cobranças automáticas.
- Não há reembolso retroativo nem proporcional.
- A assinatura pode ser reativada quando quiser.

**alternativas**:
- Duolingo grátis — https://pt.duolingo.com/ — mantém lições e progresso, com anúncios e vidas limitadas.
- Duolingo Max — https://pt.duolingo.com/help/what-is-duolingo-max — inclui os benefícios do Super mais recursos de IA; só pode ser assinado nos apps Android e iOS (não no navegador).

**fontes**:
- "Duolingo — Como cancelo a minha assinatura do Super Duolingo?" — https://pt.duolingo.com/help/cancel-my-super-duolingo-subscription
- "Duolingo — Como faço para pedir um reembolso?" — https://pt.duolingo.com/help/how-do-I-request-a-refund

---

## 5. playstation-plus

- **nome**: PlayStation Plus
- **categoria**: jogos
- **siteUrl**: https://www.playstation.com/pt-br/ps-plus/
- **dificuldade**: facil
- **canais**: ["site", "app"]
- **resumo (sugestão)**: "Cancele o PlayStation Plus pelo site, PS5, PS4 ou PS App e use os benefícios até a próxima data de pagamento."

**retencao** (páginas oficiais de suporte):
- A mesma tela de assinatura oferece **"Alterar plano"** (Essencial, Extra ou Deluxe) e **"Reativar assinatura"** para quem acabou de cancelar — a reativação vale até a data do próximo pagamento.
- O cancelamento **não devolve** o valor do período em curso: a assinatura "será desativada a partir da data do próximo pagamento" (reembolso é um pedido separado, pela política da PS Store).
- No downgrade de nível, a troca só vale na próxima data de pagamento e o usuário perde os benefícios exclusivos do plano anterior.

**requisitos**:
- Login na conta PlayStation Network.
- Acesso à web, ao console PS5/PS4 ou ao PS App.
- Saber a data do próximo pagamento.

**passos**:
1. "Pelo navegador, abra Gerenciamento da conta" — https://www.playstation.com/acct/management.
2. "Selecione Assinatura" — no menu à esquerda da tela.
3. "Selecione Cancelar assinatura" — opção ao lado de PlayStation Plus.
4. "Ou cancele no PS5" — **Configurações > Usuários e contas > Conta > Pagamento e assinaturas > Assinaturas > PlayStation Plus > Cancelar assinatura**.
5. "Ou cancele no PS4" — **PlayStation Plus > Gerenciar assinatura > Assinatura > Cancelar assinatura**.
6. "Ou cancele no PS App" — ícone **PlayStation Store** na parte inferior → ícone de menu no canto superior direito → **Gerenciamento de assinaturas** → **Cancelar**.
   aviso: cancele antes da data do próximo pagamento; a assinatura só é desativada a partir dela.

**aposCancelar**:
- Você mantém todos os benefícios até o fim do período já pago.
- Depois disso, perde jogos mensais, armazenamento online e modo multijogador online.
- Os jogos mensais baixados deixam de ficar disponíveis; pacotes e avatares resgatados e compras feitas com desconto continuam sendo seus.
- É possível reativar a assinatura antes da data do próximo pagamento.

**alternativas**:
- PlayStation Plus Essencial — https://www.playstation.com/pt-br/ps-plus/ — plano mais barato, mantém multijogador online e jogos mensais.
- Alterar plano (downgrade) — https://www.playstation.com/pt-br/support/subscriptions/change-ps-plus/ — a troca passa a valer na próxima data de pagamento.

**fontes**:
- "Suporte do PlayStation — Cancelar o PlayStation Plus" — https://www.playstation.com/pt-br/support/subscriptions/cancel-playstation-plus/
- "Suporte do PlayStation — Como gerenciar suas assinaturas no PlayStation" — https://www.playstation.com/pt-br/support/store/cancel-ps-store-subscription/
- "Suporte do PlayStation — Alterar a assinatura do PlayStation Plus" — https://www.playstation.com/pt-br/support/subscriptions/change-ps-plus/

---

## Notas de QA para o autor

- `verificadoEm`: **2026-10-25** nos cinco arquivos.
- `resumo`: conferir o limite de 160 caracteres.
- `canais`/`categoria`/`dificuldade` usam as chaves do schema (`software`, `jogos`, `site`, `app`, `chat`, `media`, `facil`).
- Não citar preços: nenhum valor foi validado nesta pesquisa.
- Slugs devem ser exatamente: `microsoft-365`, `canva`, `linkedin-premium`, `duolingo`, `playstation-plus`.
