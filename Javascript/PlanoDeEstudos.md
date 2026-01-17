# JavaScript: Guia de Bolso para Desenvolvedores
## Fundamentos da linguagem, execução e preparação para entrevistas técnicas

## Módulo 1

### Fundamentos da Linguagem

#### 01. Tipos e coerção

- Tipos primitivos - (17/01/2026)
- `typeof`
- `null` vs `undefined`
- `==` vs `===`

**Exercícios**

- Criar funções que validem tipos de dados
- Comparar valores utilizando coerção implícita e comparação estrita
- Identificar tipos em tempo de execução utilizando `typeof`

---

#### 02. Variáveis e escopo

- `var`, `let`, `const`
- Escopo global, de função e de bloco
- Hoisting de variáveis e funções

**Exercícios**

- Criar funções que demonstrem diferenças de escopo
- Identificar e explicar erros causados por hoisting
- Controlar visibilidade de variáveis em estruturas condicionais

---

#### 03. Funções

- Function declaration
- Function expression
- Arrow functions
- Diferenças de comportamento e uso

**Exercícios**

- Criar funções para operações de cálculo
- Converter funções entre os diferentes tipos de declaração
- Passar funções como argumento para outras funções

---

#### 04. Contexto (`this`)

- `this` no escopo global
- `this` em métodos de objeto
- `this` em funções tradicionais
- `this` em arrow functions
- `bind`, `call`, `apply`

**Exercícios**

- Criar objetos com métodos que dependem de `this`
- Forçar mudança de contexto entre funções
- Corrigir problemas de `this` usando `bind`, `call` ou `apply`

---

#### 05. Arrays

- Estrutura de arrays
- Métodos:
  - `map`
  - `filter`
  - `reduce`
  - `find`
- Imutabilidade

**Exercícios**

- Transformar arrays em novos arrays
- Filtrar dados por condição
- Reduzir arrays a um valor único
- Resolver o mesmo problema com e sem imutabilidade

---

#### 06. Objetos

- Objetos literais
- Propriedades e métodos
- Acesso dinâmico
- Mutação vs cópia
- Spread operator

**Exercícios**

- Criar objetos dinamicamente
- Atualizar propriedades sem mutar o objeto original
- Clonar objetos rasos
- Trabalhar com propriedades opcionais

---

## Módulo 2

### Assíncronismo e Modelo de Execução

#### 07. Execução síncrona e Call Stack

- Execução passo a passo
- Pilha de chamadas
- Ordem de execução

**Exercícios**

- Criar funções encadeadas
- Identificar a ordem de execução
- Simular chamadas profundas

---

#### 08. Callbacks

- Funções de callback
- Execução adiada
- Callback hell (conceito)

**Exercícios**

- Criar funções que recebem callbacks
- Simular operações assíncronas com callbacks
- Encadear callbacks

---

#### 09. Promises

- Criação de Promise
- Estados da Promise
- `then`
- `catch`
- Encadeamento

**Exercícios**

- Criar Promises resolvidas e rejeitadas
- Encadear múltiplas Promises
- Tratar erros em Promises

---

#### 10. Async / Await

- Funções assíncronas
- Uso de `await`
- Fluxo sequencial vs paralelo

**Exercícios**

- Reescrever Promises usando `async/await`
- Executar tarefas assíncronas em sequência
- Executar tarefas assíncronas em paralelo

---

#### 11. Tratamento de erros assíncronos

- `try / catch`
- Erros lançados em funções assíncronas

**Exercícios**

- Lançar erros em funções assíncronas
- Tratar falhas corretamente
- Diferenciar erro esperado e inesperado

---

#### 12. Event Loop

- Call Stack
- Microtasks
- Macrotasks
- Ordem de execução

**Exercícios**

- Criar códigos com `setTimeout`
- Criar códigos com Promises
- Prever a ordem de execução
- Confirmar a execução no runtime

---

## Módulo 3

### Estrutura da Linguagem

#### 13. Closures

- Escopo léxico
- Funções internas
- Persistência de estado

**Exercícios**

- Criar funções com estado interno
- Proteger dados usando closures
- Criar contadores e controladores

---

#### 14. Prototypes

- Prototype chain
- Herança prototipal
- Métodos compartilhados

**Exercícios**

- Criar funções construtoras
- Adicionar métodos via prototype
- Compartilhar comportamento entre objetos

---

#### 15. Classes

- `class`
- `constructor`
- `extends`
- `super`
- Sobrescrita de métodos

**Exercícios**

- Criar hierarquia de classes
- Implementar herança
- Sobrescrever métodos da classe pai

---

#### 16. Módulos

- `import`
- `export`
- Organização de arquivos
- Responsabilidade de módulos

**Exercícios**

- Criar módulos reutilizáveis
- Separar lógica em arquivos distintos
- Reutilizar funções entre módulos

---

#### 17. Validação e erros

- Criação de erros
- Validação de entrada
- Fluxo de erro

**Exercícios**

- Criar funções validadoras
- Bloquear estados inválidos
- Lançar erros customizados

---

#### 18. Imutabilidade

- Estado imutável
- Cópia rasa vs profunda

**Exercícios**

- Atualizar objetos sem mutar
- Atualizar arrays sem mutar
- Identificar mutações acidentais

---

## Módulo 4

### Robustez e Qualidade

#### 19. Performance básica

- Loops
- Complexidade básica
- Custo de operações

**Exercícios**

- Comparar diferentes formas de iteração
- Identificar gargalos simples
- Otimizar estruturas básicas

---

#### 20. Debounce e Throttle

- Controle de execução
- Temporização

**Exercícios**

- Criar função debounce
- Criar função throttle
- Aplicar controle de execução

---

#### 21. Memória

- Garbage Collection
- Vazamento de memória
- Referências persistentes

**Exercícios**

- Identificar referências não liberadas
- Controlar ciclo de vida de objetos

---

#### 22. Testes básicos

- Testes unitários
- Casos de teste
- Entradas e saídas

**Exercícios**

- Criar funções puras
- Escrever casos de teste
- Validar comportamentos esperados

---

#### 23. Consolidação de assíncronismo

- Promises
- `async/await`
- Event Loop

**Exercícios**

- Combinar múltiplas Promises
- Controlar concorrência
- Tratar falhas em lote

---

#### 24.Consolidação estrutural

- Closures
- Prototypes
- Classes

**Exercícios**

- Reimplementar conceitos sem consulta
- Criar soluções do zero

---

## Projeto final

**Objetivo**

- Criar uma aplicação JavaScript pura

**Requisitos**

- Código modular
- Uso de assíncronismo
- Controle de estado
- Tratamento de erros
