# Engenharia Frontend em Profundidade

Este repositório documenta um plano de estudos avançado focado em engenharia de frontend, com ênfase na compreensão profunda de JavaScript, React e arquitetura de aplicações.

O objetivo não é apenas aprender ferramentas, mas desenvolver modelo mental, capacidade de decisão técnica e entendimento dos mecanismos internos que sustentam aplicações modernas.

O conteúdo está organizado em módulos progressivos, cobrindo desde fundamentos da linguagem até padrões avançados de composição, estado e arquitetura.

Todas as anotações, exemplos e reflexões estão distribuídos nas pastas de cada módulo, seguindo uma estrutura pensada para aprendizado contínuo e incremental.

Vale destacar que este plano foi **100% estruturado de forma autoral**, considerando meu nível de experiência, lacunas de conhecimento e objetivos de longo prazo. A organização dos módulos e a progressão dos temas foram pensadas para viabilizar um processo de estudo **contínuo, consistente e incremental**, permitindo evolução real ao longo do tempo. Posteriormente, esse material foi refinado e organizado com o objetivo de **compartilhar o modelo com outros desenvolvedores**, servindo como referência para quem busca aprofundamento técnico além do uso superficial de ferramentas.

<br>

# React em Profundidade

<a href="./React em Profundidade - Caiorossi.dev.pdf">
<img src="./React/react.png">
</a>

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

<img src="./Javascript/js.png">

## Módulo 1 – Fundamentos da Linguagem

**Objetivo:**
Compreender como o JavaScript representa valores, realiza coerções e compara dados em tempo de execução.

### 01. Tipos e coerção

- [x] Tipos primitivos - (17/01/2026)
- [x] `typeof`- (17/01/2026)
- [x] `null` vs `undefined` - (19/01/2026)
- [x] `==` vs `===` - (19/01/2026)

---

### 02. Variáveis e escopo

- [x] `var`, `let`, `const` - (19/01/2026)
- [x] Escopo global, de função e de bloco - (19/01/2026)
- [x] Hoisting de variáveis e funções - (19/01/2026)

---

### 03. Funções

- [x] Function declaration - (20/01/2026)
- [x] Function expression - (20/01/2026)
- [x] Arrow functions - (20/01/2026)
- [x] Diferenças semânticas e de uso - (20/01/2026)

---

### 04. Contexto (`this`)

- [x] `this` no escopo global - (20/01/2026)
- [x] `this` em métodos de objeto - (20/01/2026)
- [x] `this` em funções tradicionais - (20/01/2026)
- [x] `this` em arrow functions - (20/01/2026)
- [x] `bind`, `call`, `apply` - (20/01/2026)

---

### 05. Arrays

- [x] Estrutura de arrays - (21/01/2026)
- [x] Métodos (`map`, `filter`, `reduce`, `find`) - (21/01/2026)
- [x] Imutabilidade - (21/01/2026)

---

### 06. Objetos

- [x] Objetos literais - (22/01/2026)
- [x] Propriedades e métodos - (22/01/2026)
- [x] Acesso dinâmico - (22/01/2026)
- [x] Mutação vs cópia - (22/01/2026)
- [x] Spread operator - (22/01/2026)

---

## Módulo 2 – Assíncronismo e Modelo de Execução

### 07. Execução síncrona e Call Stack

- [x] Execução passo a passo - (23/01/2026)
- [x] Pilha de chamadas - (23/01/2026)
- [x] Ordem de execução - (23/01/2026)

---

### 08. Callbacks

- [x] Funções de callback - (24/01/2026)
- [x] Execução adiada - (24/01/2026)
- [x] Callback hell (conceito) - (24/01/2026)

---

### 09. Promises

- [x] Criação de Promise - (26/01/2026)
- [x] Estados - (26/01/2026)
- [x] `then`, `catch` - (26/01/2026)
- [x] Encadeamento - (26/01/2026)

---

### 10. Async / Await

- [x] Funções assíncronas - (27/01/2027)
- [x] Fluxo sequencial vs paralelo - (27/01/2026)

---

### 11. Tratamento de erros assíncronos

- [x] try / catch - (28/01/2026)
- [x] Erros em funções assíncronas - (28/01/2026)

---

### 12. Event Loop

- [x] Call Stack - (29/01/2026)
- [x] Microtasks - (29/01/2026)
- [x] Macrotasks - (29/01/2026)
- [x] Ordem de execução - (29/01/2026)

---

## Módulo 3 – Estrutura da Linguagem

### 13. Closures

- [x] Escopo léxico - (30/01/2026)
- [x] Persistência de estado - (30/01/2026)

---

### 14. Prototypes

- [x] Prototype chain - (01/02/2026)
- [x] Herança prototipal - (01/02/2026)

---

### 15. Classes

- [x] class, constructor - (04/02/2026)
- [x] extends, super - (04/02/2026)
- [x] Sobrescrita - (04/02/2026)

---

### 16. Módulos

- [x] import / export - (05/02/2026)
- [x] Organização e responsabilidade - (05/02/2026)

---

### 17. Validação e erros

- [x] Criação de erros - (06/02/2026)
- [x] Fluxo de erro - (06/02/2026)

---

### 18. Imutabilidade

- [x] Estado imutável - (07/02/2026)
- [x] Cópia rasa vs profunda - (07/02/2026)

---

## Módulo 4 – Robustez e Qualidade

### 19. Performance básica

- [x] Loops - (09/02/2026)
- [x] Complexidade básica - (09/02/2026)
- [x] Custo de operações - (09/02/2026)

---

### 20. Debounce e Throttle

- [x] Controle de execução - (11/02/2026)
- [x] Temporização - (11/02/2026)

---

### 21. Memória

- [x] Garbage Collection - (12/02/2026)
- [x] Vazamentos - (13/02/2026)
- [x] Referências persistentes - (13/02/2026)

---

### 22. Testes básicos

- [x] Testes unitários - (19/02/2026)
- [x] Casos de teste - (19/02/2026)

---

### 23. Consolidação de assíncronismo

- [x] Promises - (20/02/2026)
- [x] async/await - (21/02/2026)
- [x] Event Loop - (21/02/2026)

---

### 24. Consolidação estrutural

- [x] Closures - (24/02/2026)
- [x] Prototypes - (24/02/2026)
- [x] Classes - (26/02/2026)

---

# Redux Tradicional e Ecossistema React Legado

<img src="./Redux/redux.png">

## Módulo 1 – O Paradigma de Classes, Contexto (`this`) e HOCs

**Objetivo:**
Compreender a mecânica estrutural do React clássico, mapeando o ciclo de vida funcional para os gatilhos das classes e dominando o padrão de composição via Higher-Order Components.

### 01. Estrutura de Classes React

- [x] A anatomia de uma Classe React: `constructor`, inicialização de `state = {}` e o papel do método `render()` - (17/05/2026)
- [x] Diferença estrutural entre componentes funcionais modernos e componentes baseados em classes - (17/05/2026)
- [x] Fluxo de renderização e atualização em componentes de classe - (18/05/2026)

---

### 02. Ciclos de Vida

- [x] `componentDidMount` como equivalente ao hook de montagem e inicialização - (19/05/2026)
- [x] `componentDidUpdate(prevProps, prevState)` para sincronização baseada em dependências - (23/07/2026)
- [x] `componentWillUnmount` e limpeza de efeitos colaterais - (24/07/2026)
- [x] Relação conceitual entre lifecycle methods e `useEffect` - (25/07/2026)

---

### 03. Contexto (`this`)

- [x] A semântica do `this`: propriedades de instância, métodos e perda de escopo - (26/07/2026)
- [x] Diferença entre métodos tradicionais e arrow functions em classes - (27/07/2026)
- [x] Arrow functions como propriedades de classe para preservação do escopo léxico do `this`- (28/07/2026)
- [x] Uso de `bind` manual em constructors - (29/07/2026)

---

### 04. Higher-Order Components (HOCs)

- [x] HOCs como padrão de composição e injeção de comportamento - (30/07/2026)
- [x] Estrutura: funções que recebem componentes e retornam novos componentes - (31/07/2026)
- [x] O encadeamento de HOCs (`connect`, `reduxForm`, `withRouter`) - (02/08/2026)
- [x] Rastreabilidade de props: identificar qual HOC injeta cada propriedade - (03/08/2026)
- [x] Ordem de composição e impacto na árvore de renderização - (04/08/2026)

---

## Módulo 2 – Redux Tradicional e o Padrão Ducks

**Objetivo:**
Compreender os mecanismos internos do Redux baseado em Actions síncronas, Reducers puros e o padrão de encapsulamento modular.

### 05. Fundamentos do Redux Tradicional

- [ ] Fluxo unidirecional de dados no Redux
- [ ] O papel da Store como fonte global de verdade
- [ ] Diferença entre intenção (`action`) e mutação (`reducer`)

---

### 06. Padrão Ducks

- [ ] Filosofia do padrão Ducks: unificação de `types`, `actions` e `reducers` em um único módulo
- [ ] Organização estrutural de arquivos em aplicações enterprise
- [ ] Separação de responsabilidades entre Duck, Screen e componentes visuais

---

### 07. Reducers e Imutabilidade

- [ ] Anatomia de um reducer clássico baseado em `switch-case`
- [ ] Tratamento de `action.payload`
- [ ] Atualizações imutáveis com `spread operator`
- [ ] Normalização de estado e atualização parcial de objetos complexos

---

### 08. Redux Thunk

- [ ] Middleware e interceptação de actions assíncronas
- [ ] Estrutura `(dispatch, getState) => {}`
- [ ] Chamadas assíncronas com `async/await` dentro dos Ducks
- [ ] Encadeamento de múltiplos dispatches
- [ ] Tratamento de loading, sucesso e erro assíncrono

---

### 09. Integração com React

- [ ] O papel do `dispatch` como propagador de intenção de mudança
- [ ] `connect`, `mapStateToProps` e `mapDispatchToProps`
- [ ] Diferença entre leitura (`state -> props`) e escrita (`dispatch -> actions`)
- [ ] Uso de selectors para desacoplamento da estrutura da Store

---

## Módulo 3 – Ecossistema de Formulários Conectados (`redux-form`)

**Objetivo:**
Entender a arquitetura onde o estado dos inputs deixa de ser local e passa a ser gerenciado como uma árvore global reativa altamente controlada.

### 10. Estrutura Interna do Redux-Form

- [ ] O ciclo de vida do formulário dentro da Store (`state.form`)
- [ ] Estrutura de `values`, `initial`, `touched`, `dirty` e `pristine`
- [ ] Diferença entre estado local e estado globalizado de formulários

---

### 11. Fluxo de Atualizações

- [ ] Ações automáticas internas (`@@redux-form/CHANGE`, `BLUR`, `FOCUS`)
- [ ] Reatividade baseada em dispatches automáticos
- [ ] Impacto de mudanças de campos na Store global

---

### 12. Inicialização e Manipulação de Campos

- [ ] Uso de `this.props.initialize(dados)` para preenchimento global do formulário
- [ ] Reset de estado `pristine` após inicialização
- [ ] Uso da action creator `initialize(formName, dados)` diretamente no Duck
- [ ] Atualizações granulares com `change(campo, valor)`
- [ ] Manipulação condicional de campos dependentes

---

### 13. Validação e Regras

- [ ] Estrutura de validação desacoplada (`validate.js`)
- [ ] Mapeamento de valores para objetos de erro
- [ ] Validação síncrona baseada em regras declarativas
- [ ] Integração entre validação e estado visual do formulário

---

## Módulo 4 – Fluxos Arquiteturais Enterprise

**Objetivo:**
Desenvolver fluidez operacional em fluxos reais de aplicações corporativas baseadas em React legado.

### 14. Fluxo de CRUD Enterprise

- [ ] Fluxo completo: montagem → fetch → reducer → render → edição → submit
- [ ] Carregamento inicial via `componentDidMount`
- [ ] Preenchimento do formulário após resposta assíncrona
- [ ] Fluxos de criação vs edição de entidade

---

### 15. Fluxos Dependentes e Reativos

- [ ] Campos dependentes (`Estado -> Cidade`, `Categoria -> Produto`)
- [ ] Atualizações reativas com `change()`
- [ ] Limpeza automática de campos derivados
- [ ] Carregamento condicional de listas secundárias

---

### 16. Paginação, Filtros e Estado Compartilhado

- [ ] Persistência de filtros no Redux
- [ ] Paginação controlada via Store global
- [ ] Sincronização entre filtros, query params e listagens
- [ ] Reexecução automática de buscas após mudanças de filtro

---

## Módulo 5 – Padrões de Arquitetura e Tomada de Decisão

**Objetivo:**
Desenvolver capacidade de decomposição de requisitos técnicos em pseudocódigo, separando estritamente interface, estado global e regras de negócio.

### 17. Container / Presentational Pattern

- [ ] Separação entre `Screen.js` (container) e `Form.js` (visual)
- [ ] Responsabilidades da Screen como camada de orquestração
- [ ] Componentes visuais desacoplados de regras de negócio

---

### 18. Orquestração e Concorrência

- [ ] Inicialização paralela de dados com `Promise.all`
- [ ] Coordenação de múltiplos dispatches assíncronos
- [ ] Controle de dependência entre chamadas de API

---

### 19. Estados de Loading e Feedback Visual

- [ ] Separação entre loading global e loading local de formulário
- [ ] Controle visual derivado diretamente da Store
- [ ] Estados intermediários de carregamento e bloqueio de UI

---

### 20. Tratamento Global de Exceções

- [ ] Fluxos de erro com `try/catch` dentro de thunks
- [ ] Integração com Ducks globais de feedback (`SnackbarDucks`)
- [ ] Centralização de mensagens de erro e sucesso

---

### 21. Engenharia de Código Corporativo

- [ ] Reutilização de componentes globais padronizados
- [ ] Consumo de APIs desacopladas da interface
- [ ] Legibilidade e previsibilidade em aplicações enterprise
- [ ] Estratégias de evolução incremental em bases legadas

  ***
