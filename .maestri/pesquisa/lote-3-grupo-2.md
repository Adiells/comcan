# Pesquisa factual — Lote 3, Grupo 2 (comcan)

Pesquisador: Argos. Data da verificação: 2026-10-25.
Serviços: estadao, nubank-ultravioleta, serasa-premium, sem-parar, c6-carbon.

Todas as afirmações abaixo saíram de páginas oficiais (domínios do próprio serviço,
contratos e centrais de ajuda). Nada de telefone, preço, prazo ou caminho de menu foi
inventado. Onde duas páginas oficiais divergem, a divergência está registrada.

Instruções de redação: usar exatamente os slugs, `verificadoEm: "2026-10-25"`, respeitar
os enums do schema (`noticias`/`financeiro`, `site`/`app`/`telefone`/`chat`), resumo entre
10 e 160 caracteres. Não acrescentar fatos que não estejam aqui. Depois rodar
`npm run validate:content`.

=====================================================================

## 1. estadao

- **slug**: `estadao`
- **nome**: `Estadão`
- **categoria**: `noticias`
- **siteUrl**: `https://www.estadao.com.br`
- **dificuldade**: `dificil`
- **canais**: `["site", "telefone"]`
- **resumo**: `Cancele a assinatura do Estadão pelo formulário do Portal do Assinante ou pela central e veja a devolução proporcional.`

### Fatos verificados

Contrato oficial (Condições Gerais de Contratação de Assinaturas), cláusula 4.4:
"A Assinatura poderá ser cancelada a qualquer tempo pelo Assinante, mediante notificação,
através do site http://meu.estadao.com.br/assinante/formulario-contato ou dos telefones
4003-5323 (Capitais e Regiões Metropolitanas) e 0800-014-7720 (Demais Localidades e apenas
ligações realizadas de telefone fixo) de segunda à sexta feira das 6h30min as 20h00min e
sábados domingos e feriados, das 6h30min às 14h00min."

Cláusula 4.4.1: se o pagamento foi à vista, o Estadão devolve o valor de forma proporcional,
exceto em caso de inadimplemento do assinante.
Cláusula 4.4.2: em assinatura por prazo indeterminado, devolve de forma proporcional o valor
pago antecipadamente.

Página "Fale Conosco" (meu.estadao.com.br/fale-conosco):
- Central: 4003-5323 (capitais e regiões metropolitanas) e 0800-014-7720 (demais localidades).
- Horário no rodapé: seg–sex 6h30–18h; sáb, dom e feriados 6h30–13h.
- WhatsApp: (11) 4003-5323, seg–sex 7h–18h; sáb, dom e feriados 7h–13h.
- O formulário do site avisa: "Nosso tempo médio de resposta é de até 3 dias úteis."

Divergência oficial: o rodapé do portal diz que a central fecha às 18h (semana) e 13h
(fim de semana/feriado); o contrato diz 20h e 14h. O guia deve registrar a divergência e
recomendar ligar dentro da faixa comum (6h30–13h).

Não há botão de autocancelamento previsto no contrato: os dois caminhos são o formulário
do Portal do Assinante e os telefones. O formulário de "Fale Conosco" do site é um canal de
contato geral, com assuntos "Elogio/Sugestão", "Informações Gerais", "Redação" e "Vendas
Corporativas"; o contrato aponta para o formulário do Portal do Assinante
(`/assinante/formulario-contato`), que exige login e carrega via JavaScript.

### retencao (sugestão)

`Não existe botão de autocancelamento: o contrato prevê apenas o formulário do Portal do Assinante ou os telefones da central. O formulário avisa que a resposta média é de até 3 dias úteis. As páginas oficiais divergem sobre o horário de atendimento, e o 0800 só aceita ligação de telefone fixo.`

### requisitos

- CPF e dados cadastrais do titular da assinatura
- Login do Portal do Assinante (meu.estadao.com.br), se for usar o formulário
- E-mail cadastrado na assinatura
- Telefone fixo, caso opte pelo 0800-014-7720

### passos

1. **Reúna os dados da assinatura**
   detalhe: `Tenha em mãos CPF do titular, e-mail cadastrado e, se possível, o número do pedido ou da assinatura. O cancelamento vale para a assinatura inteira.`
   aviso: `Se houver mais de um plano ou produto vinculado ao mesmo CPF, confirme na central qual será encerrado antes de pedir o cancelamento.`

2. **Cancele pelo formulário do Portal do Assinante**
   detalhe: `Acesse https://meu.estadao.com.br/assinante/formulario-contato (endereço indicado na cláusula 4.4 do contrato), entre na sua conta e registre o pedido de cancelamento por escrito.`
   aviso: `É um formulário de contato, não um botão de cancelamento imediato. A página informa tempo médio de resposta de até 3 dias úteis; guarde o protocolo ou o número do atendimento.`

3. **Ou ligue para a Central de Atendimento**
   detalhe: `Ligue para 4003-5323 (capitais e regiões metropolitanas) ou 0800-014-7720 (demais localidades, somente telefone fixo) e peça o cancelamento da assinatura.`
   aviso: `O rodapé do portal informa seg–sex 6h30–18h e sáb/dom/feriados 6h30–13h; o contrato informa seg–sex 6h30–20h e sáb/dom/feriados 6h30–14h. Ligue entre 6h30 e 13h para não pegar a central fechada.`

4. **Peça o protocolo e a devolução proporcional**
   detalhe: `Diga que quer cancelar a assinatura, não pausar nem trocar de plano. Peça o número de protocolo, a confirmação por e-mail e o cálculo da devolução, se você pagou à vista ou tem plano por prazo indeterminado.`
   aviso: `O contrato prevê devolução proporcional apenas nas hipóteses das cláusulas 4.4.1 e 4.4.2; confirme o valor e a data do crédito.`

5. **Confirme o encerramento e acompanhe a cobrança**
   detalhe: `Guarde o e-mail de confirmação e confira a próxima fatura do cartão ou o próximo boleto.`
   aviso: `Se a cobrança continuar, use o protocolo para abrir reclamação na central e, se necessário, registre reclamação no consumidor.gov.br.`

### aposCancelar

- `O contrato prevê cancelamento a qualquer tempo, com devolução proporcional do valor pago à vista ou de plano por prazo indeterminado (cláusulas 4.4.1 e 4.4.2).`
- `Guarde o protocolo e a confirmação por e-mail; eles são a prova do pedido se a cobrança continuar.`
- `Se a cobrança persistir, acione a central com o protocolo e registre reclamação no consumidor.gov.br.`

### alternativas

(sem alternativa oficial de autosserviço; não inventar)

### fontes

1. `Estadão — Condições Gerais de Contratação de Assinaturas (cláusula 4.4)` — https://assine.estadao.com.br/pdf/contratos/Condicoes-Gerais-de-Contratacao-de-Assinaturas-Estadao.pdf
2. `Estadão — Fale Conosco (canais e horários)` — https://meu.estadao.com.br/fale-conosco
3. `Estadão — Portal do Assinante (formulário de contato)` — https://meu.estadao.com.br/assinante/formulario-contato

=====================================================================

## 2. nubank-ultravioleta

- **slug**: `nubank-ultravioleta`
- **nome**: `Nubank Ultravioleta`
- **categoria**: `financeiro`
- **siteUrl**: `https://nubank.com.br/ultravioleta`
- **dificuldade**: `media`
- **canais**: `["app", "chat", "telefone"]`
- **resumo**: `Cancele o Nubank Ultravioleta pelo chat ou telefone, resgate o cashback antes e entenda a cobrança proporcional.`

### Fatos verificados

Termos e Condições Ultravioleta (vigência 26/12/2025), item 3.5 "Cancelamento e cobrança
da mensalidade": "Você poderá realizar o cancelamento do Nubank Ultravioleta a qualquer
momento pelos canais de atendimento do Nubank. Ao optar pelo cancelamento, todos os produtos
do Nubank Ultravioleta serão cancelados e será cobrado na sua próxima fatura o valor
proporcional referente à mensalidade utilizada."

FAQ oficial ("Como cancelar o cartão Nubank Ultravioleta?"):
- Existem duas formas: cancelar o cartão Ultravioleta e receber um cartão Gold ou Platinum,
  ou fazer o cancelamento definitivo do cartão Ultravioleta.
- O contato é pelo chat ou pelos telefones 4020 0185 (capitais e regiões metropolitanas) e
  0800 591 2117 (demais localidades).
- A mudança de categoria é feita na hora; o Nubank informa se haverá cobrança proporcional
  da mensalidade.
- Ao cancelar o cartão Ultravioleta, é emitido um novo cartão Platinum ou Gold, que não tem
  os benefícios Ultravioleta nem os da categoria Mastercard Black.

FAQ oficial ("Se eu quiser cancelar o Nubank Ultravioleta, o que acontece com meu cartão?"):
- É importante resgatar o cashback e os pontos acumulados antes de solicitar o cancelamento.
- Depois do cancelamento, paga-se apenas o valor proporcional de utilização da mensalidade,
  caso se aplique.

Termos, seção de cashback, item 7: depois do cancelamento do Cartão Mastercard Black
Ultravioleta não é mais possível converter o cashback em crédito na conta, em parceiros ou
transferir para programas de recompensas, nem mesmo com posterior reativação do cartão.

Página oficial do Ultravioleta: a mensalidade é R$ 89 e é zerada para quem tem gastos no
cartão de crédito acima de R$ 8 mil ou R$ 50 mil guardados/investidos no Nubank.

Canais oficiais (termos, seção 5): chat no app 24h; 4020 0185 (capitais e regiões
metropolitanas); 0800 591 2117 (demais localidades); Ouvidoria 0800 887 0463, dias úteis
das 8h às 18h.

### retencao (sugestão)

`O cancelamento é feito por atendimento humano, sem botão no app. A central oferece primeiro o downgrade para um cartão Gold ou Platinum, que encerra os benefícios Ultravioleta e Mastercard Black sem encerrar o cartão de crédito. Para encerrar de vez é preciso pedir o cancelamento definitivo. O cashback e os pontos não podem ser resgatados depois do cancelamento.`

### requisitos

- Aplicativo Nubank atualizado e acesso à conta
- CPF e senha de 4 dígitos
- Cashback e pontos resgatados antes do pedido
- Fatura do cartão em dia

### passos

1. **Resgate o cashback e os pontos**
   detalhe: `No app, abra a área "Pontos & Cashback" e resgate o saldo para a conta, para a fatura ou para um parceiro antes de pedir o cancelamento.`
   aviso: `Os termos dizem que, depois do cancelamento do cartão Mastercard Black Ultravioleta, não é mais possível converter o cashback nem transferir para programas de recompensa, mesmo se o cartão for reativado.`

2. **Abra o chat no app e peça o cancelamento definitivo**
   detalhe: `O chat do Nubank funciona 24h. Peça o "cancelamento definitivo do Nubank Ultravioleta" e diga que não quer o downgrade para Gold ou Platinum.`
   aviso: `A primeira oferta costuma ser a troca de categoria. Se você aceitar, o Ultravioleta e os benefícios Mastercard Black acabam, mas o cartão de crédito continua ativo.`

3. **Ou ligue para a central**
   detalhe: `Ligue para 4020 0185 (capitais e regiões metropolitanas) ou 0800 591 2117 (demais localidades) e peça o cancelamento definitivo.`
   aviso: `São os mesmos números do atendimento geral; tenha CPF e senha em mãos e anote o protocolo.`

4. **Confirme o que será cancelado**
   detalhe: `O cancelamento do Ultravioleta encerra todos os produtos do pacote, inclusive o cartão Mastercard Black e os benefícios Mastercard.`
   aviso: `Se o objetivo for encerrar a conta ou o cartão de crédito por completo, diga isso explicitamente; o pedido de cancelamento do Ultravioleta não é a mesma coisa.`

5. **Confira a fatura seguinte**
   detalhe: `O contrato prevê a cobrança do valor proporcional da mensalidade usada na próxima fatura.`
   aviso: `A mensalidade é R$ 89 e só é zerada com gastos acima de R$ 8 mil no cartão ou R$ 50 mil guardados/investidos no Nubank; confira o valor proporcional antes de pagar.`

### aposCancelar

- `Todos os produtos do Nubank Ultravioleta são cancelados (termos, item 3.5).`
- `A próxima fatura traz o valor proporcional da mensalidade utilizada, se aplicável.`
- `Os benefícios Mastercard Black deixam de valer com o cancelamento do cartão.`
- `O cashback não resgatado antes do cancelamento não pode mais ser convertido nem transferido.`
- `Guarde a confirmação e o protocolo do atendimento.`

### alternativas

- **Fazer downgrade para Gold ou Platinum**
  motivo: `A central troca o Ultravioleta por um cartão Gold ou Platinum na hora, sem cancelar o cartão de crédito, mas os benefícios Ultravioleta e Mastercard Black deixam de valer.`

### fontes

1. `Nubank — Termos e Condições Ultravioleta` — https://nubank.com.br/contratos/termos-e-condicoes-nubank-ultravioleta
2. `Nubank — Perguntas frequentes (cancelamento do cartão Ultravioleta)` — https://nubank.com.br/perguntas
3. `Nubank Ultravioleta — mensalidade e isenção` — https://nubank.com.br/ultravioleta
4. `Nubank — Todos os canais de atendimento` — https://nubank.com.br/contatos

=====================================================================

## 3. serasa-premium

- **slug**: `serasa-premium`
- **nome**: `Serasa Premium`
- **categoria**: `financeiro`
- **siteUrl**: `https://www.serasa.com.br/premium`
- **dificuldade**: `facil`
- **canais**: `["site", "telefone"]`
- **resumo**: `Cancele o Serasa Premium sozinho na área do plano e veja quando o reembolso de 7 dias se aplica.`

### Fatos verificados

Artigo oficial "Como cancelar o Serasa Premium?":
- O cancelamento pode ser feito sozinho, sem falar com o atendimento.
- O caminho depende do canal em que a assinatura foi contratada: site da Serasa (cartão de
  crédito ou Pix Automático), Google Play (Android) ou App Store (iPhone/iPad).
- O cancelamento só pode ser feito no mesmo canal da cobrança.
- Pelo site: acessar https://www.serasa.com.br/area-cliente/minha-conta/plano, entrar com
  CPF e senha, selecionar o plano e clicar em "Cancelar assinatura", seguindo as orientações
  da tela e confirmando.
- O cancelamento é registrado na hora e a confirmação chega por e-mail.
- Os benefícios continuam disponíveis até o fim do período já pago.
- No Pix Automático, o cancelamento também é feito pelo site, na mesma página do plano;
  depois do cancelamento não há novas cobranças, e cada cobrança corresponde ao período
  seguinte da assinatura.
- Google Play: play.google.com/store/account/subscriptions → conta Google → localizar
  "Serasa Premium" → "Gerenciar" → "Cancelar assinatura" → informar o motivo e confirmar.
- App Store: Ajustes → nome do usuário → "Assinaturas" → "Serasa Premium" → "Cancelar
  assinatura"; ou account.apple.com/account/manage/section/subscriptions.
- Estorno: no site da Serasa, o reembolso integral pode ser solicitado em até 7 dias após a
  compra, conforme o CDC. No Google Play, o reembolso é pedido na própria loja em até 48
  horas. Na App Store, a Apple analisa caso a caso.
- O prazo de 7 dias é o direito de arrependimento e vale apenas para a contratação; em planos
  renovados não há estorno.
- Assinantes têm atendimento exclusivo no 0800 591 5161.

### retencao (sugestão)

`O cancelamento é autosserviço e fica dentro da área do plano, sem oferta de retenção descrita na página oficial. A armadilha está na origem da cobrança: quem assinou pelo Google Play ou pela App Store não consegue cancelar no site da Serasa. O reembolso integral de 7 dias vale só para a contratação, não para planos renovados.`

### requisitos

- Login da Serasa com CPF e senha
- Saber se a assinatura foi feita no site, no Google Play ou na App Store
- Acesso à área do plano (para assinaturas do site ou Pix Automático)

### passos

1. **Descubra onde a assinatura foi contratada**
   detalhe: `Confira se a cobrança está no cartão/Pix Automático pelo site da Serasa, no Google Play (Android) ou na App Store (iPhone/iPad).`
   aviso: `O cancelamento só funciona no mesmo canal da cobrança; a Serasa não cancela assinaturas contratadas nas lojas de aplicativos.`

2. **Acesse a área do plano**
   detalhe: `Entre em https://www.serasa.com.br/area-cliente/minha-conta/plano com CPF e senha.`

3. **Selecione o plano e clique em "Cancelar assinatura"**
   detalhe: `Escolha o Serasa Premium, clique em "Cancelar assinatura" e siga as orientações da tela até confirmar.`
   aviso: `O cancelamento é registrado na hora; confira se a mensagem de confirmação apareceu antes de sair da página.`

4. **Guarde a confirmação por e-mail**
   detalhe: `A Serasa envia a confirmação por e-mail e mantém os benefícios até o fim do período já pago.`

5. **Se assinou pela loja, cancele na loja**
   detalhe: `Google Play: play.google.com/store/account/subscriptions → "Serasa Premium" → "Gerenciar" → "Cancelar assinatura". App Store: Ajustes → seu nome → "Assinaturas" → "Serasa Premium" → "Cancelar assinatura".`
   aviso: `O reembolso do Google Play é pedido na própria loja em até 48 horas; na App Store a Apple analisa caso a caso. A Serasa não consegue cancelar por você.`

### aposCancelar

- `Os benefícios continuam até o fim do período já pago.`
- `Não há novas cobranças depois do cancelamento; no Pix Automático, cada cobrança corresponde ao período seguinte.`
- `O reembolso integral pode ser solicitado em até 7 dias após a compra, conforme o CDC, e vale apenas para a contratação; planos renovados não têm estorno.`
- `Assinantes podem usar o atendimento exclusivo no 0800 591 5161.`

### alternativas

(nenhuma alternativa oficial citada na página de cancelamento)

### fontes

1. `Serasa — Como cancelar o Serasa Premium?` — https://www.serasa.com.br/ajuda/protecao-do-cpf/como-cancelar-o-serasa-premium
2. `Serasa — Tenho direito a estorno se meu plano Serasa Premium foi renovado?` — https://www.serasa.com.br/ajuda/protecao-do-cpf/tenho-direito-a-estorno-se-meu-plano-serasa-premium-foi-renovado
3. `Serasa Premium` — https://www.serasa.com.br/premium

=====================================================================

## 4. sem-parar

- **slug**: `sem-parar`
- **nome**: `Sem Parar`
- **categoria**: `financeiro`
- **siteUrl**: `https://www.semparar.com.br`
- **dificuldade**: `media`
- **canais**: `["telefone", "site"]`
- **resumo**: `Cancele o Sem Parar pela central de relacionamento com CPF e placa; não há fidelidade nem multa.`

### Fatos verificados

Artigo oficial "Como cancelar meu Sem Parar?":
- Antes de cancelar, a empresa oferece duas alternativas: se você trocou de veículo, não
  precisa cancelar, pois é possível fazer a substituição; se está insatisfeito com o plano,
  há outras famílias de planos com condições especiais.
- Para cancelar: ter em mãos CPF e placa do veículo e entrar em contato com a Central de
  Atendimento pelos telefones 4002-1552 (capitais e regiões metropolitanas) e
  0800 015 0252 (demais localidades).

Artigo oficial "Quais os canais de atendimento digitais do Sem Parar?":
- SuperApp, Minha Conta, WhatsApp (11) 98991-2822, Central de Relacionamento e SAC.
- O WhatsApp permite emitir boleto, alterar forma/dados de pagamento, trocar ou informar
  carro vendido, consultar extrato, limites, status das tags e falar com especialistas.
- O artigo de cancelamento, porém, indica a Central de Atendimento por telefone.

Rodapé da central de ajuda:
- Central de relacionamento: 4002 1552 (capitais) e 0800 015 0252 (demais localidades).
- SAC: 0800 723 2245; deficientes auditivos: 0800 722 0270.
- Ouvidoria: 0800 770 0686 (é necessário ter o número do protocolo de atendimento).
- WhatsApp atendimento: (11) 98991-2822.

Blog oficial "Tag Sem Parar" (atualizado em 22/09/2026):
- "Não há fidelidade nem multa por cancelamento. Faça o pedido pela central de
  relacionamento, com CPF e placa em mãos."
- "A mensalidade continua sendo cobrada enquanto o plano estiver ativo" (no caso de quem
  vendeu o carro e apenas bloqueia a tag).
- Em troca de veículo, a substituição mantém as condições comerciais e não é preciso
  devolver a tag antiga.

### retencao (sugestão)

`Não há botão de cancelamento no site nem no SuperApp: o pedido é feito pela central de relacionamento. Antes de cancelar, a empresa oferece troca de veículo (se você vendeu o carro) e mudança de família de plano (se o problema é custo). Bloquear a tag do carro vendido não encerra o plano: a mensalidade continua sendo cobrada enquanto o plano estiver ativo.`

### requisitos

- CPF do titular
- Placa do veículo
- Número da tag ou fatura/extrato, se tiver em mãos

### passos

1. **Separe CPF e placa**
   detalhe: `A central pede CPF e placa para localizar o cadastro. Tenha também a fatura ou o extrato e o número da tag.`

2. **Ligue para a central de relacionamento**
   detalhe: `Ligue para 4002-1552 (capitais e regiões metropolitanas) ou 0800 015 0252 (demais localidades) e peça o cancelamento do plano.`
   aviso: `O WhatsApp (11) 98991-2822 e o SAC 0800 723 2245 são canais de atendimento, mas a página oficial de cancelamento indica a central de relacionamento por telefone.`

3. **Recuse as alternativas de retenção**
   detalhe: `Se o motivo for troca de carro, a empresa oferece a substituição da tag; se for custo, oferece mudança de plano. Diga que quer cancelar mesmo assim.`
   aviso: `Aceitar a substituição mantém o plano e a cobrança da mensalidade.`

4. **Peça o protocolo e confirme os dados**
   detalhe: `Anote o número do protocolo, a data do pedido, o valor da última fatura e o status das passagens pendentes.`

5. **Confira a fatura seguinte**
   detalhe: `Verifique se não houve nova cobrança de mensalidade e se as passagens pendentes foram lançadas.`
   aviso: `As concessionárias podem registrar passagens com atraso; guarde o extrato e o protocolo para contestar.`

### aposCancelar

- `Não há fidelidade nem multa por cancelamento, segundo o blog oficial do Sem Parar.`
- `A mensalidade deixa de ser cobrada quando o plano é cancelado; bloquear apenas a tag não encerra a cobrança.`
- `Guarde o protocolo e o extrato final.`
- `Se a cobrança continuar, acione o SAC 0800 723 2245 ou a Ouvidoria 0800 770 0686 (é necessário ter o protocolo).`

### alternativas

- **Trocar de plano em vez de cancelar**
  motivo: `A central e o SuperApp permitem mudar de família de plano; a substituição de veículo mantém as condições comerciais.`
- **Bloquear a tag do carro vendido**
  motivo: `Se você vendeu o carro e não tem outro, o bloqueio impede uso indevido, mas a mensalidade continua enquanto o plano estiver ativo.`

### fontes

1. `Sem Parar — Como cancelar meu Sem Parar?` — https://ajuda.semparar.com.br/hc/pt-br/articles/360046997432-Como-cancelar-meu-Sem-Parar
2. `Sem Parar — Quais os canais de atendimento digitais do Sem Parar?` — https://ajuda.semparar.com.br/hc/pt-br/articles/360048998812-Quais-os-canais-de-atendimento-digitais-do-Sem-Parar
3. `Sem Parar — Tag Sem Parar: planos, uso e cancelamento` — https://blog.semparar.com.br/tag-sem-parar

=====================================================================

## 5. c6-carbon

- **slug**: `c6-carbon`
- **nome**: `C6 Carbon`
- **categoria**: `financeiro`
- **siteUrl**: `https://www.c6bank.com.br/cartao-c6-carbon-mastercard-black`
- **dificuldade**: `dificil`
- **canais**: `["app", "chat", "telefone"]`
- **resumo**: `Cancele o cartão C6 Carbon pelo chat ou telefone, cumpra o aviso de 30 dias e evite a anuidade de R$ 98/mês.`

### Fatos verificados

Contrato de Cartão de Crédito do C6 Bank (termos.c6bank.com.br, v18), resumo do contrato,
item 8 "Cancelamento do Cartão":
"a) Quando Você quiser cancelar, entre em contato com o C6 Bank. Você pode fazer isso a
qualquer momento, avisando o C6 Bank com 30 dias de antecedência."
Definição de "Canais de Atendimento" no contrato: "todos os instrumentos e canais
disponibilizados pelo C6 Bank para que o Cliente entre em contato com o C6 Bank, incluindo
atendimento telefônico e chat, disponível no Aplicativo C6, bem como os números listados no
verso do Cartão."

Página oficial do C6 Carbon:
- "O C6 Carbon tem anuidade de 12X de R$ 98,00 com isenção nos 3 primeiros meses."
- "Para demais casos, o valor da anuidade é de R$ 98/mês."
- Isenção de 100% para quem gasta a partir de R$ 8 mil por mês na fatura (titular e
  adicionais), investe R$ 50 mil em renda fixa do C6 (CDB, LCI, LCA, LF e Compromissada) ou
  tem R$ 1 milhão em investimentos em qualquer produto no Brasil e/ou no exterior pelo app.
- A isenção dos 3 meses vale apenas para quem nunca teve o cartão C6 Carbon.

Artigo oficial de ajuda "Qual é o valor da anuidade do Cartão C6 Bank?":
- C6 Carbon: anuidade de R$ 1.176,00 (12x R$ 98,00); isenção nos 3 primeiros meses para
  quem solicita o cartão pela primeira vez.

Artigo oficial "Como realizar o Encerramento da Conta?" e blog oficial de encerramento:
- No app C6 Bank: ícone de perfil → "Configurações" → "Gerenciar Contas" → "Encerrar conta
  C6" → seguir as instruções.
- Pendências: saldo em conta zerado, investimentos resgatados ou portados, cheque especial
  quitado, saldo da C6 Conta Global transferido e contas recorrentes com outra forma de
  pagamento.
- O banco tem até 30 dias para concluir o encerramento e confirma por e-mail.
- Faturas de cartão e empréstimos em aberto continuam sendo cobrados depois do encerramento.
- Pontos C6 Átomos não convertidos são cancelados.
- Com o encerramento, o cliente perde cartões, limites de crédito, chaves Pix, C6 Tag e C6
  Conta Global; o chat do app continua disponível para extratos, faturas e informes.

Página oficial de atendimento:
- Chat no app: 24 horas por dia, 7 dias por semana.
- Central de relacionamento: 3003 6116 (capitais e regiões metropolitanas) e
  0800 660 6116 (demais localidades).
- WhatsApp: (11) 2832 6088.
- SAC: 0800 660 0060, 24h, todos os dias.
- Ouvidoria: 0800 660 6060, seg–sex, 9h–18h, exceto feriados.

### retencao (sugestão)

`Não existe botão de cancelamento do cartão no app: o contrato manda falar com o C6 pelos canais de atendimento (chat no app ou telefones). O contrato exige aviso com 30 dias de antecedência. A anuidade é de R$ 98/mês (12x R$ 1.176) e só é zerada com gastos a partir de R$ 8 mil/mês ou R$ 50 mil investidos em renda fixa do C6.`

### requisitos

- Aplicativo C6 Bank com acesso à conta
- CPF e senha
- Faturas e empréstimos em aberto identificados
- Para encerrar a conta: saldo zerado, investimentos resgatados e Conta Global sem saldo

### passos

1. **Decida se quer cancelar só o cartão ou encerrar a conta**
   detalhe: `O cancelamento do cartão é pedido pelos canais de atendimento. O encerramento da conta é feito no app e encerra também o cartão.`
   aviso: `Encerrar a conta não quita faturas nem empréstimos em aberto; eles continuam sendo cobrados.`

2. **Abra o chat do app C6 e peça o cancelamento do cartão**
   detalhe: `No app, acesse o chat da Central de relacionamento (24h) e peça o cancelamento do cartão C6 Carbon.`
   aviso: `O contrato prevê aviso com 30 dias de antecedência; confirme a data efetiva do encerramento e guarde o protocolo.`

3. **Ou ligue para a central**
   detalhe: `Ligue para 3003 6116 (capitais e regiões metropolitanas) ou 0800 660 6116 (demais localidades).`
   aviso: `Tenha CPF e o número do cartão em mãos; o contrato também cita os telefones impressos no verso do cartão.`

4. **Se quiser encerrar a conta, use o app**
   detalhe: `Toque no ícone de perfil → "Configurações" → "Gerenciar Contas" → "Encerrar conta C6" e siga as instruções.`
   aviso: `É preciso zerar o saldo, resgatar investimentos, quitar o cheque especial e esvaziar a C6 Conta Global; o C6 tem até 30 dias para concluir.`

5. **Resgate os pontos e confira as faturas**
   detalhe: `Converta os pontos C6 Átomos antes do encerramento e confira a última fatura do cartão.`
   aviso: `Pontos não convertidos são cancelados com o encerramento da conta; faturas e empréstimos continuam devidos.`

### aposCancelar

- `O contrato permite cancelar o cartão a qualquer momento, mas exige aviso ao C6 com 30 dias de antecedência (resumo do contrato, item 8).`
- `Com o encerramento da conta, você perde cartões, limites, chaves Pix, C6 Tag e C6 Conta Global; o chat do app continua disponível para extratos e faturas.`
- `O C6 tem até 30 dias para concluir o encerramento e confirma por e-mail.`
- `Faturas e empréstimos em aberto continuam sendo cobrados depois do encerramento.`
- `Se a cobrança da anuidade continuar, use o protocolo e acione o SAC 0800 660 0060 ou a Ouvidoria 0800 660 6060 (seg–sex, 9h–18h).`

### alternativas

- **Pedir isenção da anuidade em vez de cancelar**
  motivo: `A anuidade de R$ 98/mês é zerada para quem gasta a partir de R$ 8 mil/mês na fatura ou investe R$ 50 mil em renda fixa do C6 (ou R$ 1 milhão em qualquer produto).`

### fontes

1. `C6 Bank — Contrato de Cartão de Crédito (resumo, item 8: Cancelamento do Cartão)` — https://terms.c6bank.com.br/c6-docs/individual-credit-card/v18/term.html
2. `C6 Bank — Cartão C6 Carbon Mastercard Black (anuidade e isenção)` — https://www.c6bank.com.br/cartao-c6-carbon-mastercard-black
3. `C6 Bank — Como realizar o Encerramento da Conta?` — https://ajuda.c6bank.com.br/s/article/Como-realizar-o-Encerramento-da-Conta
4. `C6 Bank — Canais de atendimento` — https://www.c6bank.com.br/atendimento

=====================================================================

## Checagens finais para o autor

- `resumo` de cada guia: conferir 10–160 caracteres.
- `siteUrl` e todas as `fontes`: somente HTTPS.
- Não citar preços além dos que estão aqui (R$ 89 da mensalidade Ultravioleta; R$ 98/mês e
  12x R$ 1.176 da anuidade Carbon).
- Não criar passos que dependam de menus não descritos nesta pesquisa.
- `verificadoEm`: `2026-10-25` nos cinco arquivos.
