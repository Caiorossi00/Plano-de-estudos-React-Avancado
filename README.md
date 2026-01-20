# Plano Teórico Avançado – React em Profundidade

Este repositório organiza meu plano de estudos avançado de React, focando em compreender conceitos, filosofia, arquitetura e padrões internos do framework.

Todas as anotações, exemplos e reflexões sobre os temas estão organizados nas **respectivas pastas de cada módulo** dentro do repositório.

---

## [MÓDULO 0](./React/Módulo%200) – Intenção, Método e Preparação Conceitual

**Objetivo:** Contextualizar o leitor sobre o propósito do material, estabelecer as premissas conceituais necessárias para acompanhar os módulos avançados e apresentar o formato pedagógico adotado no projeto.

**Tópicos:**

- [x] Como este material foi construído (processo, constância e prática deliberada)- (08/12/2025)
- [x] Por que este material existe e qual problema ele resolve - (08/12/2025)
- [x] Metodologia de Estudo e Estrutura dos Módulos - (08/12/2025)
- [x] Preparação para os módulos avançados - (08/12/2025)

---

## [Módulo 1](./React/Módulo%201) – Filosofia e Paradigma do React

**Objetivo:** Entender o _porquê_ do React existir e o que ele representa no contexto da engenharia de interfaces.

**Tópicos:**

- [x] Paradigma declarativo vs imperativo - (16/10/2025)
- [x] React como _UI derivada de estado_ - (16/10/2025)
- [x] Composição de componentes e a ideia de árvore de renderização - (16/10/2025)
- [x] O papel da previsibilidade e da pureza de funções - (16/10/2025)
- [x] Abstração entre dados → estado → interface - (17/10/2025)
- [x] O que diferencia o React de frameworks MVVM/MVC tradicionais - (18/10/2025)

---

## [Módulo 2](./React/Módulo%202) – O motor do React (Virtual DOM e Fiber)

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

## [Módulo 3](./React/Módulo%203) – Hooks em nível conceitual

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

## [Módulo 4](./React/Módulo%204) – Estado, dados e arquitetura

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

## [Módulo 5](./React/Módulo%205) – Renderização e performance

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

## [Módulo 6](./React/Módulo%206) – Composição e padrões de arquitetura

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

## [Módulo 7](./React/Módulo%207) – React moderno e Server Components

**Objetivo:** Entender a nova arquitetura e a separação entre client e server components.

**Tópicos:**

- [x] Server Components: o que são e por que surgiram - (28/11/2025)
- [x] SSR, SSG, CSR e hidratação - (29/11/2025)
- [x] Transmissão de dados e boundaries entre client/server - (01/12/2025)
- [x] Suspense for Data Fetching e streaming - (02/12/2025)
- [x] Limitações e padrões emergentes (Next.js 14/15, React 19) - (03/12/2025)
- [x] O futuro da renderização no React - (03/12/2025)

---

## [Módulo 8](./React/Módulo%208) – Filosofia de Engenharia Frontend

**Objetivo:** Consolidar mentalidade e princípios de decisão técnica em React.

**Tópicos:**

- [x] Trade-offs: abstração vs clareza - (04/12/2025)
- [x] Decisões guiadas por intenção, não por ferramenta - (05/12/2025)
- [x] Evolução de código e consistência em equipe - (06/12/2025)
- [x] Design orientado a previsibilidade e legibilidade - (08/12/2025)
- [x] Pensamento sistêmico no frontend - (09/12/2025)
- [x] React como ferramenta, não fim - (10/12/2025)
- [x] Como pensar como um engenheiro de interfaces - (10/12/2025)

---

# JavaScript - Guia de Bolso para Desenvolvedores

## MÓDULO 0 – Intenção, Método e Preparação Conceitual

**Tópicos:**

- TBD

---

## Módulo 1 – Fundamentos da Linguagem

**Objetivo:**  
Compreender como o JavaScript representa valores, realiza coerções e compara dados em tempo de execução.

### 01. Tipos e coerção

- [x] Tipos primitivos - (17/01/2026)
- [x] `typeof`- (17/01/2026)
- [x] `null` vs `undefined` - (19/01/2026)
- [x] `==` vs `===` - (19/01/2026)

**Exercícios**

- [x] Criar funções que validem tipos de dados - (19/01/2026)
- [x] Comparar valores utilizando coerção implícita e comparação estrita - (19/01/2026)
- [x] Identificar tipos em tempo de execução - (19/01/2026)

---

### 02. Variáveis e escopo

- [x] `var`, `let`, `const` - (19/01/2026)
- [x] Escopo global, de função e de bloco - (19/01/2026)
- [x] Hoisting de variáveis e funções - (19/01/2026)

**Exercícios**

- [x] Demonstrar diferenças de escopo - (19/01/2026)
- [x] Identificar erros causados por hoisting - (19/01/2026)
- [x] Controlar visibilidade de variáveis - (19/01/2026)

---

### 03. Funções

- [x] Function declaration - (20/01/2026)
- [x] Function expression - (20/01/2026)
- [x] Arrow functions - (20/01/2026)
- [x] Diferenças semânticas e de uso - (20/01/2026)

**Exercícios**

- Criar funções de cálculo
- Converter entre tipos de funções
- Passar funções como argumento

---

### 04. Contexto (`this`)

- `this` no escopo global
- `this` em métodos
- `this` em funções tradicionais
- `this` em arrow functions
- `bind`, `call`, `apply`

**Exercícios**

- Criar objetos dependentes de `this`
- Forçar mudança de contexto
- Corrigir problemas de binding

---

### 05. Arrays

- Estrutura de arrays
- Métodos (`map`, `filter`, `reduce`, `find`)
- Imutabilidade

**Exercícios**

- Transformar e filtrar arrays
- Reduzir arrays a valores únicos
- Resolver problemas com e sem mutação

---

### 06. Objetos

- Objetos literais
- Propriedades e métodos
- Acesso dinâmico
- Mutação vs cópia
- Spread operator

**Exercícios**

- Criar objetos dinamicamente
- Atualizar propriedades sem mutar
- Clonar objetos rasos

---

## Módulo 2 – Assíncronismo e Modelo de Execução

### 07. Execução síncrona e Call Stack

- Execução passo a passo
- Pilha de chamadas
- Ordem de execução

**Exercícios**

- Criar funções encadeadas
- Prever ordem de execução

---

### 08. Callbacks

- Funções de callback
- Execução adiada
- Callback hell (conceito)

**Exercícios**

- Criar funções com callbacks
- Simular operações assíncronas

---

### 09. Promises

- Criação de Promise
- Estados
- `then`, `catch`
- Encadeamento

**Exercícios**

- Criar Promises resolvidas e rejeitadas
- Encadear Promises

---

### 10. Async / Await

- Funções assíncronas
- Fluxo sequencial vs paralelo

**Exercícios**

- Reescrever Promises
- Executar tarefas em paralelo

---

### 11. Tratamento de erros assíncronos

- `try / catch`
- Erros em funções assíncronas

**Exercícios**

- Lançar e tratar erros
- Diferenciar erros esperados e inesperados

---

### 12. Event Loop

- Call Stack
- Microtasks
- Macrotasks
- Ordem de execução

**Exercícios**

- Prever execução com `setTimeout` e Promises
- Validar comportamento no runtime

---

## Módulo 3 – Estrutura da Linguagem

### 13. Closures

- Escopo léxico
- Persistência de estado

**Exercícios**

- Criar funções com estado interno
- Encapsular dados

---

### 14. Prototypes

- Prototype chain
- Herança prototipal

**Exercícios**

- Criar construtores
- Compartilhar métodos

---

### 15. Classes

- `class`, `constructor`
- `extends`, `super`
- Sobrescrita

**Exercícios**

- Criar hierarquias
- Sobrescrever métodos

---

### 16. Módulos

- `import` / `export`
- Organização e responsabilidade

**Exercícios**

- Criar módulos reutilizáveis
- Separar responsabilidades

---

### 17. Validação e erros

- Criação de erros
- Fluxo de erro

**Exercícios**

- Criar validadores
- Lançar erros customizados

---

### 18. Imutabilidade

- Estado imutável
- Cópia rasa vs profunda

**Exercícios**

- Atualizar estruturas sem mutar
- Identificar mutações acidentais

---

## Módulo 4 – Robustez e Qualidade

### 19. Performance básica

- Loops
- Complexidade básica
- Custo de operações

**Exercícios**

- Comparar abordagens
- Identificar gargalos

---

### 20. Debounce e Throttle

- Controle de execução
- Temporização

**Exercícios**

- Implementar debounce
- Implementar throttle

---

### 21. Memória

- Garbage Collection
- Vazamentos
- Referências persistentes

**Exercícios**

- Identificar leaks
- Controlar ciclo de vida

---

### 22. Testes básicos

- Testes unitários
- Casos de teste

**Exercícios**

- Criar funções puras
- Escrever testes

---

### 23. Consolidação de assíncronismo

- Promises
- `async/await`
- Event Loop

**Exercícios**

- Controlar concorrência
- Tratar falhas em lote

---

### 24. Consolidação estrutural

- Closures
- Prototypes
- Classes

**Exercícios**

- Reimplementar conceitos sem consulta
- Criar soluções do zero

---

## Projeto Final

**Requisitos:**

- Código modular
- Uso de assíncronismo
- Controle de estado
- Tratamento consistente de erros

---

Este plano serve como **base conceitual para qualquer framework ou ambiente JavaScript**, garantindo domínio real da linguagem e capacidade de decisão técnica consciente.
