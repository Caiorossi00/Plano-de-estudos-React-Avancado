# Server Components: o que são e por que surgiram

Server components representam uma mudança profunda no modelo de renderização do React. Eles foram criados para resolver gargalos de performance que surgiram conforme aplicações frontend cresceram e passaram a carregar cada vez mais código javascript no navegador. A ideia central é simples, mas poderosa: executar componentes React inteiros no servidor, enviando ao cliente apenas o HTML ou um formato serializado leve, evitando que o navegador baixe, parseie execute Javascript desnecessário. Com isso, o React distribui responsabilidades de forma mais inteligente (lógica pesada e acesso a dados ficam no servidor, apenas interatividade e comportamentos dinâmicos permanecem no cliente).

## O problema que Server Components resolvem

O principal problema que os server components resolvem é o peso do bundle. Em uma aplicação traidicional (client-rendered), todo componente escrito em React (até mesmo aqueles que só exibem dados estáticos ou fazem fetch) precisa ser eniado ao cliente como Javascript. Isso gera bundles grandes, alto tempo de download, parsing lento e bloqueio da thread principal. Ao mover parte desses componentes para o servidor, o React reduz drasticamente o volume de código enviado ao navegador. Em algumas aplicações reais (especialmente Next.js com RSC), é comum cortar o bundle em 30 a 60%, melhorando LCP, TTI e consumo de memória. Além disso, como o servidor executa código sem limitações do ambiente do browser, pode acessar banco de dados, arquivos, APIs internas e fazer processamento pesado sem penalizar a experiência do usuário.

## Diferença entre Server Components e Client Components

A diferença fundamental entre Server components (RSC) e client components é a natureza da execução.

- **Server components** não têm interatividade e não possuem estado local imperativo (useState, useEffect, refs). Eles são essencialmente funções puras que rodam no servidor e retornam UI já pronta. Não existe hidratação nem listeners no cliente para eles.

- **Client components** dependem do navegador para gerir estado, efeitos e eventos, precisam de javascript enviado ao cliente, precisam ser hidratados e podem interagir diratamente com o DOM.

A maneira moderna de pensar é: **tudo começa como Server component, só vira Client component se precisar.**

## Impacto no tempo de carregamento

O impacto no tempo de carregamento inicial é direto. Quando o navegador recebe uma página com server components, ele não precisa esperar o javascript da aplicação ser baixado e executado para exibir o conteúdo. O HTML já chega pronto, compatível com o que o usuário deveria ver. E como a porção de Javascript enviada é menor, tanto o download quanto o parse ficam significativamente mais rápidos. Isso melhora LCP e reduz o tempo até a página ficar utilizável.

## Arquitetura híbrida

Na prática, server components criam um modelo híbrido: parte da árvore React roda no servidor, parte roda no cliente, com boundaries bem definidas.  
Um client components pode importar um server component, mas não ao contrário, isos reforça a arquitetura de responsabilidade clara: lógica pesada no servidor, interatividade no cliente.  
Isso leva a uma UI mais rápida, bundles mais leves e uma arquitetura mais alinhada com aplicações modernas que combinam server e client de forma transparente.

## O que deve ser Server Component?

Server components são o padrão ideal para tudo que não depende do navegador:

- Renderização de páginas
- Listagem de produtos
- Carregamento de posts
- Montagem de tabelas estáticas
- Menus
- Headers
- Footers
- Qualquer conteúdo que possa ser pré-renderizado ou trazer dados direto do banco/servidor sem custo no cliente

Eles reduzem drasticamente o bundle e chegam ao navegador já como HTML pronto.

## O que deve ser Client Component?

Client components entram apenas quando há interatividade real:

- Botões que abrem modal
- Inputs controlados
- Formulários com validação em tempo real
- Menus dropdown animados
- Carrosséis
- Componentes que usam useState/useEffect
- Leitura de localstorage
- Uso de window/document

Exemplo prático em um e-commerce:

- **Server** → produto, descrição, avaliações, preço
- **Client** → carrinho flutuante, botão comprar, seletor de quantidade, favoritos, busca em tempo real

Isso cria uma divisão clara: **o servidor monta a página e entrega tudo pronto; o cliente só ativa o que precisa de interação humana.**

## Como criar Server Components e Client Components

Para criar um **server component**, você simplesmente escreve o componente normalmente, **sem incluir `"use client"`** no topo.  
Ele será executado no servidor, não terá acesso a APIs do navegador e não poderá usar hooks como useState ou useEffect.  
Esse é o comportamento padrão do React moderno: **tudo é server a menos que você peça o contrário.**

Para criar um **client component**, você precisa colocar a diretiva `"use client"` na primeira linha do arquivo.  
Isso instrui o React a enviar esse componente para o navegador, permitindo uso de interatividade, hooks de estado, efeitos, acesso ao window, document, eventos e animações.  
Sem essa diretiva, o componente não é tratado como client-side, mesmo que você tente usar APIs do navegador.

A regra mental é simples:

**Se precisa de interatividade → declare como client**  
**Se não precisa → deixe como server**
