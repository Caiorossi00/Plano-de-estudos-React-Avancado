# Trade-offs: abstração vs clareza

A relação entre abstração e clareza é um dos dilemas centrais da engenharia frontend moderna. Embora abstrações sejam necessárias para organizar sistemas complexos, elas também têm um custo: podem esconder a intenção original do código, dificultar leitura e aumentar o esforço cognitivo de quem mantém a aplicação. Em React, esse trade-off aparece em praticamente todas as decisões arquiteturais, desde criar um componente genérico, extrair um hook ou introduzir um contexto global, até definir a hierarquia de estados. O ponto fundamental é entender que abstrações não são um objetivo em si: elas devem resolver um problema real de repetição, acoplamento ou complexidade, jamais nascer apenas por "elegância" ou tentativa de prever cenários futuros.

## Quando uma abstração é realmente necessária

Criar uma abstração é realmente necessário quando existe repetição clara e recorrennte, quando a lógica está espalhada de forma fragmentada ou quando múltiplos componentes dependem da mesma regra de negócio. A abstração deve eliminar duplicação sem esconder o que está acontecendo.  
Uma boa heurística é perguntar:

> **"Se eu voltar nesse código daqui a 3 meses, essa abstração vai me ajudar ou atrapalhar a entender essa intenção?"**

Se a resposta for incerta, provavelmente a abstração não deveria existir ainda.  
Muitas vezes, é melhor repetir a lógica duas ou três vezes até que o padrão fique óbvio; só então extrair um hook, um componente composto ou um útil.  
Premature abstraction é tão prejudicial quanto premature optimization: ambas criam complexidade sem retorno garantido.

## Quando abstrações complicam mais do que ajudam

Avaliar se uma abstração simplifica ou complica começa observando o fluxo mental necessário para entender o que ela esconde.  
Um componente altamente genérico pode exigir dezenas de props e condicionais para dar conta de múltiplos cenários, tornando o uso mais difícil do que escrever diretamente a UI específica.

O mesmo ocorre com hooks que encapsulam lógica demais, tornando impossível entender de onde vem um estado ou qual é a causa de determinada atualização.  
Abstrações devem deixar o código mais previsível e aumentar o alinhamento entre intenção e implementação; se a leitura exige saltar por vários arquivos, navegar por múltiplas camadas ou decodificar uma API complexa, a abstração provavelmente falhou.

## O trade-off em React: hooks, context e composição

Esse trade-off aparece frequentemente na decisao entre usar um hook customizado ou manter lógica local no componente.

- Um **hook** é útil quando reduz repetição, isola regras de domínio e simplifica o componente
- Mas quando cria uma "caixa preta" difícil de entender, a clareza é sacrificada

O mesmo ocorre com **context**: embora elimine prop drilling, seu uso indiscriminado pode causar re-renderizações amplas e esconder a origem do estado. Em muitos casos, passar uma prop manualmente é mais simples e mais explícito.

Já padrões de composição como **compound components** ou **slot pattern** funcionam bem quando a estrutura visual é realmente compartilhada; quando usados para cenários que não pedem esse nível de abstração, resultam em APIs mais confusas do que componentes diretos.

## O equilíbrio necessário

No fim, abstração e clareza não são opostas — são forças que precisam ser equilibradas.  
Uma boa abstração revela a intenção, reduz ruído e organiza o sistema.  
Uma abstração ruim introduz opacidade e dificulta manutenção.

O critério não é _"abstrair porque é mais avançado"_  
mas _"abstrair quando torna o comportamento mais claro, previsível e simples de evoluir"_.

---

# Exemplo prático: abstração aplicada a um e-commerce

Um exemplo claro de abstração aplicada em um e-commerce seria a criação de um módulo de cálculo de frete.

Imagine que várias partes da aplicação precisam calcular o frete:

- Página de produto
- Carrinho
- Checkout
- Página de comparação de preços
- Sugestão de frete em um mini-carrinho no header

Se cada componente implementasse sua própria lógica — consultar CEP, consultar transportadoras, aplicar regras de frete grátis, calcular prazo, aplicar descontos regionais etc. — a lógica acabaria copiada, divergente e difícil de manter.

### A abstração ideal

Você cria um **único mecanismo** que concentra toda a lógica de frete e fornece apenas o resultado necessário.  
Essa abstração poderia ser representada conceitualmente como um **"serviço de frete"** ou **"módulo de regras de logística"**.

### Benefícios imediatos

- A regra de frete se concentra em um único lugar
- Todos os pontos da interface recebem resultados consistentes
- Componententes continuam simples e focados apenas em exibir dados
