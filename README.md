# Plano Teórico Avançado – React em Profundidade

Este repositório organiza meu plano de estudos avançado de React, focando em compreender conceitos, filosofia, arquitetura e padrões internos do framework.

Todas as anotações, exemplos e reflexões sobre os temas estão organizados nas **respectivas pastas de cada módulo** dentro do repositório.

---

## Módulo 1 – Filosofia e Paradigma do React

**Objetivo:** Entender o _porquê_ do React existir e o que ele representa no contexto da engenharia de interfaces.

**Tópicos:**

- [x] Paradigma declarativo vs imperativo - (16/10/2025)
- [x] React como _UI derivada de estado_ - (16/10/2025)
- [x] Composição de componentes e a ideia de árvore de renderização - (16/10/2025)
- [x] O papel da previsibilidade e da pureza de funções - (16/10/2025)
- [x] Abstração entre dados → estado → interface - (17/10/2025)
- [x] O que diferencia o React de frameworks MVVM/MVC tradicionais - (18/10/2025)

---

## Módulo 2 – O motor do React (Virtual DOM e Fiber)

**Objetivo:** Entender como o React transforma estado em UI e o que realmente acontece na renderização.

**Tópicos:**

- [x] O que é o Virtual DOM e por que ele existe - (20/10/2025)
- [x] Reconciliação: como o React compara árvores - (21/10/2025)
- [x] Diffing algorithm e heurísticas internas - (22/10/2025)
- [x] React Fiber: scheduler, prioridade e interrupção de tarefas - (23/10/2025)
- [x] Tempo de renderização, commit phase e mutation phase - (24/10/2025)
- [x] Como o React garante fluidez sob carga (Concurrent Mode) - (25/10/2025)
- [x] Batching de atualizações e event loop - (25/10/2025)

---

## Módulo 3 – Hooks em nível conceitual

**Objetivo:** Compreender o funcionamento interno, as restrições e as razões conceituais dos hooks.

**Tópicos:**

- [x] Por que os hooks foram criados (substituição de classes) - (27/10/2025)
- [x] O ciclo de vida funcional: render → commit → cleanup - (28/10/2025)
- [x] Regras dos hooks (ordem, pureza e chamadas) - (30/10/2025)
- [x] `useState`: closures e estado persistente entre renderizações - (30/10/2025)
- [x] `useEffect`: sincronização com o mundo externo - (31/10/2025)
- [x] `useRef`: identidade e persistência fora do ciclo de render - (01/11/2025)
- [x] `useMemo` e `useCallback`: memoização e reatividade controlada - (01/11/2025)
- [x] `useReducer` e o padrão de isolamento de lógica - (03/11/2025)
- [x] Hooks customizados: composição e reutilização de comportamento - (04/11/2025)
- [x] O problema do stale state e as closures em React - (05/11/2025)

---

## Módulo 4 – Estado, dados e arquitetura

**Objetivo:** Entender como o React lida com o estado, quais são os tipos e os padrões arquiteturais envolvidos.

**Tópicos:**

- [x] Tipos de estado: local, derivado, global e remoto - (06/11/2025)
- [x] Fonte de verdade e estado derivado - (07/11/2025)
- [x] Sincronização de estados entre componentes - (08/11/2025)
- [x] Context API: conceito, escopo e custo de renderização - (08/11/2025)
- [x] Patterns de gerenciamento (lifting state up, prop drilling, context splitting) - (08/11/2025)
- [x] Gerenciamento externo: Redux Toolkit, Zustand, React Query (conceito, não uso) - (10/11/2025)
- [x] Cache, sincronização e invalidação de dados - (11/11/2025)
- [x] “Server state” vs “UI state” - (12/11/2025)
- [x] Estratégias para evitar re-renderizações desnecessárias - (12/11/2025)

---

## Módulo 5 – Renderização e performance

**Objetivo:** Compreender o modelo de renderização e como o React otimiza o processo.

**Tópicos:**

- [x] Ciclo de renderização e commit detalhado - (13/11/2025)
- [x] Identificação de causas de re-render - (14/11/2025)
- [x] Reatividade granular e isolamento de componentes - (17/11/2025)
- [x] Suspense e streaming de dados (React 18+) - (17/11/2025)
- [x] Lazy loading e divisão de código - (17/11/2025)
- [x] Concurrent rendering: scheduling, interrupção e prioridade - (18/11/2025)
- [x] Interação com Web Vitals e tempo de pintura - (19/11/2025)

---

## Módulo 6 – Composição e padrões de arquitetura

**Objetivo:** Entender como estruturar componentes e lógica de forma escalável.

**Tópicos:**

- [x] Padrão de composição (props.children, render props, compound components) - (21/11/2025)
- [x] Inversão de controle e abstração progressiva - (24/11/2025)
- [x] Componentes controlados vs não controlados - (24/11/2025)
- [x] Patterns de isolamento: container/presentational, smart/dumb - (25/11/2025)
- [x] Prop drilling e patterns alternativos - (25/11/2025)
- [x] Patterns de extensibilidade (slot pattern, HOCs conceitualmente) - (26/11/2025)
- [x] Princípios de design componível - (27/11/2025)

---

## Módulo 7 – React moderno e Server Components

**Objetivo:** Entender a nova arquitetura e a separação entre client e server components.

**Tópicos:**

- [x] Server Components: o que são e por que surgiram - (28/11/2025)
- [x] SSR, SSG, CSR e hidratação - (29/11/2025)
- [x] Transmissão de dados e boundaries entre client/server - (01/12/2025)
- [x] Suspense for Data Fetching e streaming - (02/12/2025)
- [x] Limitações e padrões emergentes (Next.js 14/15, React 19) - (03/12/2025)
- [x] O futuro da renderização no React - (03/12/2025)

---

## Módulo 8 – Filosofia de Engenharia Frontend

**Objetivo:** Consolidar mentalidade e princípios de decisão técnica em React.

**Tópicos:**

- [x] Trade-offs: abstração vs clareza - (04/12/2025)
- [x] Decisões guiadas por intenção, não por ferramenta - (05/12/2025)
- Evolução de código e consistência em equipe
- Design orientado a previsibilidade e legibilidade
- Pensamento sistêmico no frontend
- React como ferramenta, não fim
- Como pensar como um engenheiro de interface

---
