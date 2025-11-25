# Prop drilling e patterns alternativos

Prop drilling é o padrão em que um valor precisa ser passado por múltiplos níveis de componentes até chegar ao lugar onde realmente será usado, mesmo quando os componentes intermediários não utilizem aquele dado; eles apenas o repassam.
Esse padrão não é um erro por si só, ele emerge naturalmente do modelo de composição do React, mas pode se tornar problemático à medida que a árvore de componentes cresce e mais camadas precisam participar desse repasse. Em pequenas estruturas, prop drilling é absolutamente aceitável e até desejável, pois mantém a visibilidade explícita de onde os dados entram e para onde vão, o que facilita a leitura e reduz a "mágica" no flfuxo de dados.
O problema surge quando muitos componentes são obrigados a carregar props que não fazem parte da sua responsabilidade, aumentando o acoplamento, dificultando refatorações e gerando re-renderizações desnecessárias em partes da árvore que não deveriam sequer participar da atualização  
A devisão entre aceitar o prop drilling ou subsituí-lo por outro padrão envolve equilibrar simplicidade e acoplamento. Em muitos casos, intorduzir uma solução "global" apenas para evitar três níveis de props é um exagero. Porém, quando o dado é realmente compartilhado por diversas partes da aplicação (como o usuário autenticado, preferências de tema, carrinho ou permissões), o prop driling rapidamente se torna inviável. Nesse momento, alternativas como context API, hooks customizados ou padrões estruturais surgem naturalmente. O objetivo não é eliminar o drilling por estética, mas evitar que responsabilidade e dependência se espalhem artificialmente pela árvore

## Context API

Context API é a alternativa mais direta ao prop drilling, ao invés de passar os dados manualmente entre cada componente intermediário, o valor é disponibilizado por um Provider e acessado por qualquer consumidor dentro daquele escopo. Isso reduz a necessidade de props intermediárias, mas traz um custo: qualquer atualização do valor do contexto re-renderiza todos os consumidores. Esse impacto precisa ser considerado, especialmente em contextos com valores muito dinâmicos. Nesse sentido, dividir contextos por domínio e manter o contexto o menor possível é a principal estratégia para reduzir re-renderizações colaterais

## Composition

Composition é outra forma de minimizar drilling sem introduzir globallidade. Muitas vezes, permitir que um componente receba children ou funções (render props) evita que dados precisam subir e descer arbitrariamente na árvore; Em outras palavras, composição reduz a distância entre o lugar onde o dado está e onde ele é utilizado, reorganizando a estrutura para que o drilling nem seja necessário

## HOCs (Higher-order-components)

Os HOCs (Higher-order-componentes), embora menos usados hoje, também resolvem drilling ao injetar dados diretamente no componente sem que os níveis intermediários precisem trefegá-los. Contudo, esse padrão introduz camadas extras e perde de clareza estrutural, por isso foi amplamente substituído por hooks customizados, que oferecem o mesmo benefício com menos acoplamento e sem modificar a árvore de componentes.

## Hooks customizados

Hooks customizados, por sua vez, não eliminam o drilling estruturalmente, mas extraem a lógica que antes ficava presa ao topo e permitem que qualquer componente localize e consuma apenas o estado necessário, reduzindo tanto o coplamento quanto a necessidade de passar dados manualmente

---

## Conclusão

No fim, prop drilling é aceitável quando o escopo é pequeno, mas deve ser evitado quando começa a distorcer a estrutura da aplicação. As alternativas (context, composition, HOCs e hooks customizados) existem para resolver problemas diferentes e devem ser escolhidas com base no impacto real na manutenção, no isolamento de responsabilidades e na performance
