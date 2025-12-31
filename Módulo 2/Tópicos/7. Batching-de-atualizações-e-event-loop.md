# Batching de Atualizações e Event Loop

## O que é Batching?

Batching significa **agrupar múltiplas atualizações de estado**, por exemplo, vários `setState` ou `setContador`, em uma única renderização.  
A ideia é simples: se o React fosse re-renderizar o componente toda vez que um estado mudasse, o desempenho cairia muito.

---

## Relação com o Event Loop

Para entender quando o React aplica essas atualizações, precisamos lembrar que o JavaScript é **single-threaded** e organiza as tarefas em **macrotasks** e **microtasks**:

- **Macrotasks:** eventos como `click`, `setTimeout`, `setInterval`
- **Microtasks:** `promises`, `async/await`, `queueMicrotask`

O React espera o fim do ciclo de evento atual (**macrotask**) antes de aplicar o render.  
Ou seja, se você fizer múltiplos `setState` dentro de um mesmo evento de clique, o React vai:

1. Registrar todas as mudanças
2. Esperar o término do evento
3. Fazer o render apenas uma vez

---

## Em termos do Event Loop

- O React **acumula os updates** (pendentes).
- Quando o **ciclo de evento termina**, ele agenda uma **microtask interna** para disparar o re-render.

---

## Ligação com performance e reconciler

O batching reduz:

- O número de passagens pelo **reconciler** (comparação entre árvores virtuais)
- O número de **diffs** no Virtual DOM
- O número de mutações no **DOM real**
