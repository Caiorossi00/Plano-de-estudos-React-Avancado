# useMemo e useCallback: memoização e reatividade controlada

Memoizar, no contexto de programação e react significa armazenar o resultado de um cálculo ou função para reutilizá-lo futuramente sem precisar recalculá-lo

Imagine que você tem uma função que realiza um cálculo peasdo, como somar milhares de números ou filtrar uma lista gigante. Toda vez que o componente renderiza, essa função seria executada de novo, mesmo que os dados não tenham mudado. Memoizar resolve isso: o resultado da função é guardado em memória junto com as dependências que influenciam o cálculo. Enquanto essas dependências não mudarem, o react simplesmente retorna o valor já calculado, poupando processamento.

Quando você usa useMemo ou useCallback, o react cria internamente uma espécie de variável oculta para armazenar o resultado da função (no caso do useMemo) ou a própria referência da função (no caso de useCallback)

Essa variável não aparece no seu código como uma constante declarada, mas o react mantém o valor entre renders.
É como se o react tivesse uma memória interna por componente, organizada por gavetas numeradas (semelhante ao que faz com useState) e cada memoização ocupa uma dessas gavetas enquanto o componente existir.

useMemo
O useMemo é um hook que memoiza valores computados. Ele recebe uma função que retorna um valor e um array de dependências. Enquanto as dependências não mudarem, o react aproveita o valor já calculado em vez de recalcular a função.
Isso é útil para cálculos pesados ou objetos complexos que não precisam ser recalculados a cada renderização, evitando desperdício de processamento e re-renderizações denscessárias de componentes filhos que dependem desse valor

useCallback
o useCallback é semelhante, mas memoiza funções, não valores. Ele retorna a mesma função entre renders enquanto suas dependências não mudarem.
Isso é importante quando passamos funções como props para componentes filhos que usam React.memo ou dependem de referência estável. Sem useCallback, a função seria recriada a cada render, disparando re-renderizações desnecessárias dos filhos

O processo de memoização ajuda no desempenho, evitando cálculos e render repetidos desnecessários

Mas se tudo parece tão ótimo, por que não memoizar absolutamente tudo?
Memoizar tudo aumenta a complexidade e o consumo de memória, podendo até prejudicar o desempenho se feito sem critério

Como eu devo decidir se devo memoizar um valor?
Pergunte-se: "Esse valor ou função precisa ser recalculado em todo render, mesmo quando os dados não mudaram?"

Exemplos em um e-commerce:

- Filtrar produtos por categoria ou preço em listas grandes
- Calcular total do carrinho com descontos e impostos complexos
- Gerar recomendações personalizadas com base em várias regras

Utilizemos como base o primeiro exemplo:

```js
const produtosFiltrados = useMemo(() => {
  return produtos.filter((p) => p.categoria === categoriaSelecionada);
}, [produtos, categoriaSelecionada]);
```

O que deve ser memoizado?
A resposta é: o resultado do filtro, ou seja, o array de produtos já filtrado

O raciocínio é o seguinte:

- produtos e categoria selecionada são as dependências
- Enquanto esses valores não mudarem, o react utiliza o array já filtrado, sem recalcular o filter() a cada renderização
- Isso é especialmente útil em listas grandes, onde recalcular o filtro toda vez que o componente renderizar seria custoso

No React, o `useMemo` por si só **não mantém histórico de valores**; ele apenas memoiza o resultado do cálculo da renderização atual com base nas dependências fornecidas. Isso significa que, se você tem um filtro de produtos por input, ao digitar `"abr"` o resultado é calculado e armazenado temporariamente. Ao digitar `"abra"`, o `useMemo` recalcula o filtro para o novo valor e substitui o resultado anterior. Se o usuário voltar para `"abr"`, o cálculo será feito novamente, pois o valor memoizado antigo não é preservado. Para manter histórico de buscas ou resultados antigos, é necessário combinar o `useMemo` com uma estrutura de armazenamento persistente, como um objeto ou `useRef`, que armazene cada resultado antigo e permita reutilizá-lo sem recalcular, criando assim uma cache manual dentro do componente
