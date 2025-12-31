# Reatividade granular e isolamento de componentes

A ideia central é reduzir o custo de re-renderizações mantendo a UI reativa apenas onde é necessário. No React, um componente re-renderiza sempre que seu estado muda ou recebe novas props. Se toda interface estiver em um único componente grande, qualquer pequena atualização dispara re-renderizações em árvore, mesmo em partes que não mudaram.

Componentes isolados evitam isso: cada pedaço da UI é encapsulado e só re-renderiza quando precisa, isso melhora a performance, especialmente em interfaces grandes.

Granularidade é a prática de dividir a interface em componentes pequenos e focados. Por exemplo, em uma lista de produtos, cada item pode ser um componente isolado. Se apenas um item muda, apenas ele re-renderiza, não a lista inteira.

Memoização (React.memo, useMemo, useCallback) complementa esse isolamento, garantindo que os componentes ou cálculos pesados não sejam refeitos desnecessariamente.

Mas há de se considerar alguns trade-offs e pontos de atenção:

- Granularidade vs complexidade: componentes muito pequenos aumentam a complexidade da árvore e dificultam a manutenção
- Isolamento reduz re-render global: melhora a performance, mas exige atenção ao design de props e estado
- Exagero é contraproducente: quebrar tudo em unidades mínimas pode gerar overhead de gerenciamento de props e contextos, tornando o código menos legível

Isolamento e granularidade são opções poderosas pra otimizar renderizações, mas precisam ser aplicadas de forma estratégica, equilibrando performance e complexidade da árvore de componentes.
