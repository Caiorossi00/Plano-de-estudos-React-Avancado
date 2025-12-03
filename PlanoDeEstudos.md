## **Plano Teórico Avançado – React em Profundidade**

---

### **MÓDULO 1 – Filosofia e Paradigma do React**

**Objetivo:** Entender o _porquê_ do React existir e o que ele representa no contexto da engenharia de interfaces.

**Tópicos:**

- Paradigma declarativo vs imperativo
- React como _UI derivada de estado_
- Composição de componentes e a ideia de árvore de renderização
- O papel da previsibilidade e da pureza de funções
- Abstração entre dados → estado → interface
- O que diferencia o React de frameworks MVVM/MVC tradicionais

**Fontes de estudo:**
f

- _React Docs – Thinking in React_
- _React as a UI Runtime_ – Dan Abramov
- _The Philosophy of React_ – Kent C. Dodds

---

### **MÓDULO 2 – O motor do React (Virtual DOM e Fiber)**

**Objetivo:** Entender como o React transforma estado em UI e o que realmente acontece na renderização.

**Tópicos:**

- O que é o Virtual DOM e por que ele existe
- Reconciliação: como o React compara árvores
- Diffing algorithm e heurísticas internas
- React Fiber: scheduler, prioridade e interrupção de tarefas
- Tempo de renderização, commit phase e mutation phase
- Como o React garante fluidez sob carga (Concurrent Mode)
- Batching de atualizações e event loop

**Fontes:**

- _Inside Fiber: In-Depth Overview_ – React Blog
- _React Reconciliation Algorithm Explained_ – React Docs
- Jake Archibald – _Tasks, Microtasks, Queues and Schedules_
- _React Fiber Architecture_ – Lin Clark (code cartoons)

---

### **MÓDULO 3 – Hooks em nível conceitual**

**Objetivo:** Compreender o funcionamento interno, as restrições e as razões conceituais dos hooks.

**Tópicos:**

- Por que os hooks foram criados (substituição de classes)
- O ciclo de vida funcional: render → commit → cleanup
- Regras dos hooks (ordem, pureza e chamadas)
- `useState`: closures e estado persistente entre renderizações
- `useEffect`: sincronização com o mundo externo
- `useRef`: identidade e persistência fora do ciclo de render
- `useMemo` e `useCallback`: memoização e reatividade controlada
- `useReducer` e o padrão de isolamento de lógica
- Hooks customizados: composição e reutilização de comportamento
- O problema do stale state e as closures em React

**Fontes:**

- _A Complete Guide to useEffect_ – Dan Abramov
- _How React Hooks Really Work_ – Kent C. Dodds
- _Why Do React Hooks Rely on Call Order?_ – Dan Abramov
- Documentação React: Hooks in Depth

---

### **MÓDULO 4 – Estado, dados e arquitetura**

**Objetivo:** Entender como o React lida com o estado, quais são os tipos e os padrões arquiteturais envolvidos.

**Tópicos:**

- Tipos de estado: local, derivado, global e remoto
- Fonte de verdade e estado derivado
- Sincronização de estados entre componentes
- Context API: conceito, escopo e custo de renderização
- Patterns de gerenciamento (lifting state up, prop drilling, context splitting)
- Gerenciamento externo: Redux Toolkit, Zustand, React Query (conceito, não uso)
- Cache, sincronização e invalidação de dados
- “Server state” vs “UI state”
- Estratégias para evitar re-renderizações desnecessárias

**Fontes:**

- _State Management in React: A Conceptual Overview_ – Mark Erikson
- _You Might Not Need Redux_ – Dan Abramov
- React Docs – _Managing State_
- TanStack Blog – _Server State vs UI State_

---

### **MÓDULO 5 – Renderização e performance**

**Objetivo:** Compreender o modelo de renderização e como o React otimiza o processo.

**Tópicos:**

- Ciclo de renderização e commit detalhado
- Identificação de causas de re-render
- Reatividade granular e isolamento de componentes
- Suspense e streaming de dados (React 18+)
- Lazy loading e divisão de código
- Concurrent rendering: scheduling, interrupção e prioridade
- Interação com Web Vitals e tempo de pintura

**Fontes:**

- React Docs – seção _Performance_
- _Introducing Concurrent Rendering_ – React Blog
- _Optimizing React Performance_ – Web.dev
- _Concurrent React Explained_ – Shawn Wang

---

### **MÓDULO 6 – Composição e padrões de arquitetura**

**Objetivo:** Entender como estruturar componentes e lógica de forma escalável.

**Tópicos:**

- Padrão de composição (props.children, render props, compound components)
- Inversão de controle e abstração progressiva
- Componentes controlados vs não controlados
- Patterns de isolamento: container/presentational, smart/dumb
- Prop drilling e patterns alternativos
- Patterns de extensibilidade (slot pattern, HOCs conceitualmente)
- Princípios de design componível

**Fontes:**

- Kent C. Dodds – _Advanced React Patterns_
- _React Design Patterns and Best Practices_ – Michele Bertoli
- _Reusable Components in React_ – Ryan Florence

---

### **MÓDULO 7 – React moderno e Server Components**

**Objetivo:** Entender a nova arquitetura e a separação entre client e server components.

**Tópicos:**

- Server Components: o que são e por que surgiram
- SSR, SSG, CSR e hidratação
- Transmissão de dados e boundaries entre client/server
- Suspense for Data Fetching e streaming
- Limitações e padrões emergentes (Next.js 14/15, React 19)
- O futuro da renderização no React

**Fontes:**

- _React Server Components Explained_ – React Blog
- _The Future of React: Server and Concurrent Rendering_ – Dan Abramov
- _Inside React 19_ – React Docs (beta)
- Next.js Docs – _Server Components Architecture_

---

### **MÓDULO 8 – Filosofia de Engenharia Frontend**

**Objetivo:** Consolidar mentalidade e princípios de decisão técnica em React.

**Tópicos:**

- Trade-offs: abstração vs clareza
- Decisões guiadas por intenção, não por ferramenta
- Evolução de código e consistência em equipe
- Design orientado a previsibilidade e legibilidade
- Pensamento sistêmico no frontend
- React como ferramenta, não fim
- Como pensar como um engenheiro de interface

**Fontes:**

- Kent C. Dodds – artigos sobre composição e filosofia
- _The Pragmatic Programmer_ – Hunt & Thomas
- _React Design Principles_ – React Docs

---
