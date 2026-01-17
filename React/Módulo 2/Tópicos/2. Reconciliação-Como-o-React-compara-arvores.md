# Reconciliação – Como o React compara árvores

**Reconciliação** é o processo que o react usa para sincronizar a interface (DOM real) com o estado da aplicação, de maneira eficiente.

Toda vez que o estado muda, o React:

- Recria uma nova árvore virtual
- Compara essa árvore com a árvore virtual anterior
- Descobre o que mudou
- Aplica apenas essas diferenças ao DOM real

---

## Critérios de comparação

Mas quais são os critérios do react para essa comparação?  
O react usa regras heurísticas simples para decidir o que reaproveitar ou recriar:

- **Mesmo tipo de elemento (nó):** Se o tipo de elemento é o mesmo, ele mantém o nó e atualiza somente as suas props e filhos
- **Tipo diferente:** Se o tipo muda, por exemplo, de `div` para `section`, o react descarta o nó anterior e cria um novo do zero
- **Componentes customizados:** Se o componente é o mesmo `<Card />` e `<Card />` o react apenas renderiza de novo, se mudar, ele remove tudo e recria

---

## Importância das keys

Por essa estrutura, as **keys** são importantes no react, são identificadores únicos usados para que o react saiba qual item corresponde a qual entre renderizações.  
Sem as keys, o react compara os elementos da lista posição a posição, o que poderia gerar trocas erradas.  
Por exemplo, em uma lista com 100 filmes, se o filme trocar da posição 100 pela 80, o react poderia ter problemas no diffing porque não conseguiria analisar se é o mesmo elemento ou não.  
Com uma key identificadora, ele consegue garantir que o elemento seja sempre o mesmo independente da sua posição na lista.

---

## Resumo

A **reconciliação** é o processo que torna o react previsível e eficiente:

- Evita reconstruir toda a interface a cada mudança
- Minimiza re-renderizações desnecessárias
- Garante consistência entre estado e DOM sem perda de performance
