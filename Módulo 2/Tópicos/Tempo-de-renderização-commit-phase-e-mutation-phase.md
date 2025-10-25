# Tempo de renderização, commit phase e mutation phase

O que acontece quando o estado muda?

Quando um componente no React tem seu estado alterado (`setState`, `useState`, `useReducer`), o React inicia um novo ciclo de renderização, esse ciclo tem duas grandes fases:

- **Render phase** (fase de cálculo)
- **Commit phase** (fase de aplicação)

Na render phase, o React cria uma nova árvore de **fiber nodes** com base no estado atualizado, ele compara essa nova árvore com a anterior e descobre o que mudou.

Essa fase é pura e sem efeitos colaterais, o React apenas planeja o que deve acontecer, ela pode ser pausada, interrompida e refeita se um update mais urgente surgir.

Depois que o React sabe o que mudou, ele parte para a **commit phase**, que é curta e síncrona (não pode ser pausada). Nessa fase, ele aplica as mudanças desejadas no DOM real.

A commit phase é dividida internamente em três subetapas:

- **Before mutation phase:** O React prepara o DOM antes da atualização, hooks como `getSnapshotBeforeUpdate` acontecem aqui.

- **Mutation phase:** O React altera o DOM real, adiciona, remove ou atualiza elementos, é o momento em que os nós reais do navegador são modificados.

- **Layout phase:** O React executa efeitos sincronizados com o layout como `useLayoutEffect`. Depois disso, a UI já reflete o novo estado.

---

## Por que separar render e commit melhora a performance?

A separação permite:

- Pausar a renderização
- Evitar travamentos na thread principal
- Melhor controle sobre prioridades

O React só faz o trabalho pesado no DOM quando tem certeza do que precisa mudar.

Você não enxerga as fases, o React controla isso internamente, você só nota o resultado, a interface responde rápido.
