## Fundamentos da Linguagem

---

### 01. Tipos e Coerção

**Objetivo:**  
Compreender como o JavaScript representa valores, realiza coerções e compara dados em tempo de execução.

#### Tipos primitivos

- O que significa “primitivo” no JavaScript
- Diferença entre valor e referência
- Imutabilidade dos tipos primitivos
- Implicações práticas no código

#### `typeof`

- Por que o operador existe
- O que ele realmente retorna
- Casos inconsistentes e limitações
- Por que `typeof` não é um sistema de tipos

#### `null` vs `undefined`

- Diferença semântica entre ausência e não definição
- Quem gera cada valor (runtime vs desenvolvedor)
- Situações comuns de ocorrência
- Por que ambos coexistem na linguagem

#### `==` vs `===`

- O problema que a igualdade abstrata tenta resolver
- Coerção implícita em alto nível
- Por que a igualdade estrita é preferida
- Quando compreender `==` ainda é necessário

**Exercícios**

- Criar funções que validem tipos de dados
- Comparar valores utilizando coerção implícita e comparação estrita
- Identificar tipos em tempo de execução utilizando `typeof`

---

### 02. Variáveis e Escopo

**Objetivo:**  
Entender como o JavaScript gerencia visibilidade, ciclo de vida e acesso a variáveis.

#### Declaração de variáveis

- Diferenças entre `var`, `let` e `const`
- Regras de reatribuição e mutabilidade
- Escopo associado a cada tipo de declaração

#### Escopo

- Escopo global
- Escopo de função
- Escopo de bloco
- Encadeamento de escopos (scope chain)

#### Hoisting

- O que é hoisting
- Hoisting de variáveis
- Hoisting de funções
- Comportamentos inesperados e riscos

**Exercícios**

- Criar funções que demonstrem diferenças de escopo
- Identificar e explicar erros causados por hoisting
- Controlar visibilidade de variáveis em estruturas condicionais

---

### 03. Funções

**Objetivo:**  
Compreender funções como entidades de primeira classe e suas diferentes formas de declaração.

#### Tipos de funções

- Function declaration
- Function expression
- Arrow functions
- Diferenças sintáticas e semânticas

#### Comportamento das funções

- Hoisting em funções
- Contexto de execução
- Retorno implícito e explícito

#### Funções como valores

- Passagem de funções como argumento
- Retorno de funções
- Composição básica de funções

**Exercícios**

- Criar funções para operações de cálculo
- Converter funções entre os diferentes tipos de declaração
- Passar funções como argumento para outras funções

---

### 04. Contexto (`this`)

**Objetivo:**  
Entender como o contexto de execução é determinado e alterado no JavaScript.

#### `this` e contexto

- `this` no escopo global
- `this` em funções tradicionais
- `this` em métodos de objeto

#### `this` em arrow functions

- Diferença de comportamento
- Ligação léxica do contexto
- Casos comuns de erro

#### Controle explícito de contexto

- `bind`
- `call`
- `apply`
- Diferenças de uso e impacto

**Exercícios**

- Criar objetos com métodos que dependem de `this`
- Forçar mudança de contexto entre funções
- Corrigir problemas de `this` usando `bind`, `call` ou `apply`

---

### 05. Arrays

**Objetivo:**  
Trabalhar com coleções de dados e transformação funcional.

#### Estrutura de arrays

- Arrays como objetos indexados
- Iteração e acesso
- Valores mutáveis e referências

#### Métodos de transformação

- `map` e transformação de dados
- `filter` e seleção por condição
- `reduce` e agregação de valores
- `find` e busca direcionada

#### Imutabilidade

- Mutação direta vs criação de novos arrays
- Benefícios da imutabilidade
- Impactos em previsibilidade e manutenção

**Exercícios**

- Transformar arrays em novos arrays
- Filtrar dados por condição
- Reduzir arrays a um valor único
- Resolver o mesmo problema com e sem imutabilidade

---

### 06. Objetos

**Objetivo:**  
Compreender como o JavaScript organiza dados estruturados e como manipulá-los corretamente.

#### Objetos literais

- Criação de objetos
- Propriedades e métodos
- Organização de dados

#### Acesso e manipulação

- Acesso por notação de ponto
- Acesso dinâmico por colchetes
- Propriedades opcionais

#### Mutação e cópia

- Mutação direta de objetos
- Cópia rasa
- Uso do spread operator
- Limitações da cópia rasa

**Exercícios**

- Criar objetos dinamicamente
- Atualizar propriedades sem mutar o objeto original
- Clonar objetos rasos
- Trabalhar com propriedades opcionais
