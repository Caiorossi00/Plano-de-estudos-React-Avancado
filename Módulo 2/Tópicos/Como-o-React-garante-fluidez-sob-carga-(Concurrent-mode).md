# Como o React garante fluidez sob carga (Concurrent Mode)

Antes do Concurrent mode, o React trabalhava em modo síncrono e bloqueante (aquele modelo antigo pré-Fiber).

Isso significa que quando o estado mudava, o React precisava renderizar tudo de uma vez, até terminar.  
Se essa renderização fosse demorada, por exemplo, listas grandes, o navegador ficava travado, inputs paravam de responder, scroll engasgava, etc.

---

## Com o Concurrent Mode

Com o Concurrent mode, introduzido no React 18, veio a renderização **interruptible** e **cooperativa**, isso quer dizer que:

- O React pode **pausar** um trabalho de renderização longo
- **Devolver o controle ao navegador** (para manter a UI fluida)
- E **retomar depois**, do ponto onde parou

Ele faz isso por meio de duas técnicas principais:

- **Time-slicing:** Ele divide o trabalho em pequenas fatias
- **Prioritização:** o React classifica as tarefas (Um input digitado tem mais prioridade do que o re-render de uma lista longa, por exemplo)

---

## Abstrações que usam o Concurrent Mode

- **Suspense:** permite "pausar" a renderização enquanto dados são carregados
- **useTransition:** marca uma atualização como "não urgente"

---

## Exemplos práticos em um E-commerce

**Sem o concurrent mode:**

- O usuário digita no campo de busca
- O app trava por 200ms enquanto renderiza os resultados

**Com o concurrent mode + useTransition:**

- O usuário digita no campo de busca
- O React prioriza a digitação e renderiza os resultados em segundo plano
- O campo responde imediatamente

---

## O que significa responder imediatamente, ou priorizar, na prática

Ao digitar uma letra no campo de busca, o React foca justamente em exibir o caractere que o usuário digitou na tela, imediatamente, mesmo que o React ainda esteja passando por processos de outras tarefas mais pesadas, como filtrar uma lista ou renderizar os resultados da busca.

---

## Quando usar e quando não usar `useTransition`

- Use `useTransition` para **atualizações não urgentes** (buscas, filtros, listas longas).
- Evite em atualizações **críticas** (inputs controlados, toggles, formulários).
- O React já prioriza automaticamente eventos de input — `useTransition` é um refinamento.

---

## Importante

Apesar do nome “concorrente”, o React **não executa tarefas em paralelo**.  
Ele continua rodando em uma única thread (JavaScript é single-thread), mas **intercala as tarefas de modo cooperativo**, liberando o controle para o navegador entre uma fatia e outra.

Essa capacidade de pausar e retomar renderizações só é possível graças ao modelo **Fiber**, que representa cada componente como uma unidade de trabalho independente e rastreável.

---

Além de `useTransition`, o Concurrent Mode também é utilizado por hooks como:

- `useDeferredValue` (que adia a atualização de valores pesados)
- e pela API `Suspense`, usada para lidar com carregamento assíncrono de dados e componentes.
