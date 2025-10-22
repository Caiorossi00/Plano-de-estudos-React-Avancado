# Diffing algorithm e heurísticas internas

Quando o estado muda, o React cria uma nova árvore de **Virtual DOM** e precisa comparar essa árvore com a anterior para descobrir o que mudou.  
Mas comparar duas árvores arbitrárias nó por nó e filho por filho seria um processo muito pesado, teria complexidade de **O(n³)** no pior caso.

O React implementa um algoritmo de _diffing_ baseado em **heurísticas** para detectar diferenças entre árvores de Virtual DOM de forma eficiente.

---

## O que seria uma complexidade de O(n³)?

Deriva da **notação Big-O**, que serve para descrever o quanto o tempo (ou custo) de um algoritmo cresce quando o tamanho da entrada aumenta.

`n` representa o tamanho da entrada, por exemplo:

- O número de elementos em uma lista
- O número de nós em uma árvore
- O número de operações que o algoritmo precisa executar

O **expoente** indica a taxa de crescimento do custo.

---

### Exemplos de complexidade

- **O(1)** → custo constante, independente do tamanho da entrada  
  _Exemplo:_ acessar um índice em um array

- **O(n)** → custo linear, cresce proporcionalmente ao tamanho da entrada  
  _Exemplo:_ percorrer uma lista

- **O(n²)** → custo quadrático, cresce com o quadrado do tamanho da entrada  
  _Exemplo:_ comparar todos os pares de elementos (como no Bubble Sort)

- **O(n³)** → custo cúbico, cresce com o cubo do tamanho da entrada  
  _Exemplo:_ comparar nós e sub-nós em uma árvore com várias camadas

- **O(2ⁿ)** → custo exponencial, cresce testando todas as combinações possíveis  
  _Exemplo:_ força bruta para quebra de senhas

---

## O desafio de comparar árvores no React

No cenário do React, o desafio é **comparar duas árvores** — a antiga e a nova — e descobrir todas as diferenças possíveis entre elas.

Cada nó pode ter:

- Filhos diferentes
- Estar em outra ordem
- Ter atributos alterados
- Ter sido movido, removido ou criado

O problema é: **como saber se um nó A na primeira árvore é o mesmo que o nó B na segunda?**

---

### A abordagem ingênua

Se fizermos isso da maneira “ingênua”:

- Para cada nó da primeira árvore, precisaríamos comparar com cada nó da segunda árvore → custo **O(n²)**
- Mas cada nó pode ter subárvores inteiras, e cada uma delas precisa ser comparada
- A cada nível de profundidade, a complexidade cresce combinatoriamente → **O(n³)** no pior caso

---

### Exemplo visual

Árvore antiga: Árvore nova:
Root Root
├── A ├── B
│ ├── C │ ├── D
│ └── E │ └── F
└── G └── H

Se você não souber **quais nós correspondem entre si**, o algoritmo teria que tentar **todas as combinações possíveis**:

- Será que “A” virou “B”?
- Ou “A” virou “H”?
- E “C”? Foi para “D” ou “F”?

Para descobrir o mapeamento ideal, o algoritmo testaria todas as possibilidades, gerando um **número cúbico de comparações**.

---

## Como o React evita esse custo

O React evita esse custo absurdo adotando **regras heurísticas** simplificadas:

- Nunca tenta adivinhar se um elemento foi movido para outro lugar na árvore
- Assume que se o tipo é o mesmo, é o mesmo nó (atualiza só as props)
- Assume que se o tipo é diferente, o nó inteiro foi recriado
- Usa **key** para identificar nós estáveis em listas

Essas regras eliminam a necessidade de testar todas as combinações possíveis, e o algoritmo passa a rodar em **tempo linear, O(n)**.

---

## Reconciliação vs Diffing

- **Reconciliação:** o processo completo, detectar mudanças e atualizar o DOM real.
- **Diffing:** a parte dentro da reconciliação responsável apenas por **comparar as árvores**.

---

**Resumo:**

- Comparar árvores diretamente → O(n³)
- React usa heurísticas → O(n)
- O resultado é um sistema previsível, eficiente e escalável.
