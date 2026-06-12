# 🐾 Pet Elegance - Banho e Tosa de Alto Padrão


O **Pet Elegance** é uma landing page responsiva desenvolvida para pet shops de alto padrão, focada na conversão de agendamentos e em uma experiência do usuário (UX) premium. O projeto conta com design minimalista, suporte a temas claro/escuro e microinterações modernas.

OBS: A produção inteira desse projeto foi feita pelo Gemini para fins de estudos do Têcnico de TI, aonde eu escolhi o ChatGPT e Gemini para fazer uma comparação do qual entregaria um melhor resultado com o mesmo prompt. O repositorio logo acima desse no meu perfil será do ChatGPT.

Prompt Site Pet Shop de Alto Padrão (especialista em Banho e Tosa)

No bloco [CONTEXTO]: Adicione que o site deve focar na experiência do usuário (UX). Os cards de serviços devem exibir claramente o tempo estimado de cada procedimento (Ex: Banho e Tosa Higiênica - 1h30) e um selo de "Mais Vendido" no serviço principal para induzir o cliente a escolher aquela opção. Adicionar uma seção de comentários de clientes que pagaram os serviços da pet shop; No bloco [RESTRIÇÕES DE CSS]: Exija que a interface use técnicas modernas de tipografia (fontes sem serifa limpas) e que as cores neon dos botões tenham um efeito de pulsação suave em CSS (keyframes) para guiar o olhar do usuário até a ação de agendar. Como o site e sobre uma Pet Shop cores claras seria uma escolha ideal para cor padrão, logo crie um root para cores do tema claro e tema escuro; No bloco [RESTRIÇÕES DE JS]: Adicione uma regra de segurança e UX. No formulário de agendamento, o JavaScript deve impedir que o usuário selecione uma data anterior ao dia de hoje no calendário. Além disso, crie uma máscara simples no campo de telefone enquanto o usuário digita. Adicionar botão para mudança de tema claro e escuro; quero que monte os codigos de HTML, CSS e JS. Como tambem montar um esquema de como ficou as organizações de arquivos nas pastas .

---

# 📂 Organização dos Arquivos

A estrutura do projeto foi planejada para manter o código limpo, modular e fácil de dar manutenção:

```text
petshop-premium/
│
├── index.html          # Estrutura principal da Landing Page
│
├── css/
│   └── style.css       # Estilizações, variáveis de tema (Light/Dark) e animações
│
├── js/
│   └── main.js         # Validações, máscara de telefone e alternador de tema
│
└── assets/             # Banco de imagens e ícones do projeto (opcional)
```
---

# ✨ Funcionalidades Destacadas (UX & Segurança)

```text
Design de Alto Padrão: Uso da tipografia moderna Plus Jakarta Sans e espaçamentos generosos que transmitem sofisticação.

Cards de Serviços Transparentes: Exibição clara do tempo estimado de cada procedimento (ex: 1h 30min) para alinhar a expectativa do cliente.

Gatilho Mental de Popularidade: Inclusão de um selo de "Mais Vendido" no serviço principal para guiar a tomada de decisão do usuário.

Botões com Efeito Pulsar (CSS Keyframes): Botões em cores neon que chamam a atenção de forma elegante, direcionando o olhar do cliente para a ação de agendamento.

Prova Social: Seção exclusiva com depoimentos reais de tutores satisfeitos.

Validação de Calendário Segura (JS): O sistema impede o agendamento em datas anteriores ao dia atual.

Máscara de Telefone Inteligente: Campo de telefone formata automaticamente o padrão (XX) XXXXX-XXXX enquanto o usuário digita.

Alternador de Tema (Light & Dark Mode): Troca dinâmica de cores através de variáveis CSS customizadas (:root[data-theme]).
```

---

## 🛠️ Tecnologias Utilizadas

```text
HTML5: Estrutura semântica e acessível.

CSS3: Layouts em Grid/Flexbox, animações personalizadas e gerenciamento de temas.

JavaScript (Vanilla): Manipulação de DOM, máscaras de entrada e validações de segurança sem dependência de bibliotecas externas.
```

---

# 🚀 Como Executar o Projeto

```text
Crie uma pasta no seu computador chamada petshop-premium.

Dentro dela, monte a estrutura de arquivos separando os códigos em seus devidos arquivos conforme mostrado na seção Organização dos Arquivos.

Abra o arquivo index.html diretamente em qualquer navegador moderno ou utilize a extensão Live Server no VS Code para rodar com atualização automática.

```
