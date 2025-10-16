## **MÓDULO 2 – O motor do React (Virtual DOM e Fiber) – Detalhamento**

### **1. O que é o Virtual DOM e por que ele existe**

**Conceitos a aprofundar:**

- O DOM real é **custoso para manipular** (reflow, repaint).
- Virtual DOM: **representação leve da UI** na memória.
- React compara Virtual DOM → DOM real e aplica **somente as mudanças necessárias**.
- Vantagens: performance, previsibilidade, abstração de atualizações.

**Perguntas-guia:**

- Por que manipular o DOM diretamente é mais lento que usar Virtual DOM?
- Como o Virtual DOM permite renderização declarativa?
- Qual a relação entre Virtual DOM e a função `UI = f(state)`?

---

### **2. Reconciliação: como o React compara árvores**

**Conceitos a aprofundar:**

- Reconciliação: processo de **detectar diferenças entre duas árvores de Virtual DOM**.
- React cria uma “nova árvore virtual” a cada render e **compara com a anterior**.
- Determina **quais nós atualizar, criar ou remover** no DOM real.

**Perguntas-guia:**

- Quais critérios React usa para decidir se um nó deve ser atualizado ou substituído?
- Por que chaves (`key`) são importantes em listas de componentes?
- Como a reconciliação influencia a performance de atualizações?

---

### **3. Diffing algorithm e heurísticas internas**

**Conceitos a aprofundar:**

- React não compara árvores arbitrariamente (seria O(n³)), usa **heurísticas eficientes**.
- Assumptions básicas:
  - Elementos do mesmo tipo são atualizados, não recriados.
  - Listas devem ter `key` para identificar elementos estáveis.
- Estratégia otimizada: **O(n) para listas e componentes estáveis**.

**Perguntas-guia:**

- O que acontece se você não usar keys corretas?
- Como React minimiza operações no DOM através de heurísticas?
- Qual é a diferença entre diffing geral e reconciliação de listas?

---

### **4. React Fiber: scheduler, prioridade e interrupção de tarefas**

**Conceitos a aprofundar:**

- Fiber: **reescrita do reconciler** que permite renderização incremental.
- Cada nó da árvore é representado como um **Fiber Node**.
- Scheduler: decide **quantos trabalhos realizar e quando pausar** para manter UI responsiva.
- Prioridade: updates críticos vs menos críticos (input, animação, background).
- Interrupção de tarefas: React pode pausar trabalho de baixo nível para priorizar interatividade.

**Perguntas-guia:**

- Como Fiber melhora performance em grandes árvores de componentes?
- O que significa “cooperative scheduling” no React?
- Quais são exemplos de updates de alta vs baixa prioridade?

---

### **5. Tempo de renderização, commit phase e mutation phase**

**Conceitos a aprofundar:**

- Render Phase: React constrói a **nova árvore de Fiber** e calcula mudanças.
- Commit Phase: mudanças são aplicadas ao **DOM real**.
- Mutation Phase: atualizações efetivas de nodes e side effects.
- Separação entre fases permite **pausar e retomar trabalhos** sem travar UI.

**Perguntas-guia:**

- Por que separar render e commit melhora performance?
- Quais operações acontecem apenas na commit phase?
- Como isso se relaciona com useEffect e side effects?

---

### **6. Como o React garante fluidez sob carga (Concurrent Mode)**

**Conceitos a aprofundar:**

- Concurrent Mode permite **renderização interruptible**.
- React pode:
  - pausar renderização não crítica,
  - priorizar inputs do usuário,
  - dividir tarefas longas em pedaços menores (time-slicing).
- Suspense e transitions são exemplos de abstração sobre concorrência.

**Perguntas-guia:**

- Como o Concurrent Mode difere do modo tradicional (blocking)?
- Qual o impacto na experiência do usuário?
- Que tipos de problemas de UI ele resolve (ex: input travando durante fetch pesado)?

---

### **7. Batching de atualizações e event loop**

**Conceitos a aprofundar:**

- Batching: React **agrupa várias atualizações de estado** para reduzir renders desnecessários.
- Event loop: compreensão de microtasks e macrotasks no JS ajuda a entender **quando updates são aplicados**.
- Relação direta entre batching, reconciler e render phase.

**Perguntas-guia:**

- Por que múltiplos `setState` dentro de um mesmo evento podem ser combinados?
- Como o event loop influencia a ordem de updates?
- Qual a diferença de comportamento em async/await vs callbacks no batching?

---

### **Resumo de estudo para este módulo**

1. **Virtual DOM**: entenda a abstração e suas vantagens.
2. **Reconciliação e diffing**: saiba como o React detecta mudanças de forma eficiente.
3. **Fiber**: compreenda scheduler, prioridade, interrupção de tarefas e fases de render/commit.
4. **Concurrent Mode e batching**: raciocine sobre performance e fluidez da UI.
5. Responder mentalmente ou em anotações **as perguntas-guia**, para internalizar os conceitos de execução do React.
6. Consultar textos sugeridos (Lin Clark, Jake Archibald, React Blog) e reforçar conceitos de arquitetura.
