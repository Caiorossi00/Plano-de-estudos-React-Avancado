# Patterns de isolamento - container/presentational, smart/dumb

Esse padrão organiza componentes eparando o que mostra a UI (camada visual) do que contém lógica e dados (camada inteligente). Ele surgiu muito antes dos hooks customizados, mas continua extremamente útil conceitualmente para pensar em organização, responsabilidades e escalabilidade

## 1. Presentational componentes (Dumb components)

São componentes focados exclusivamente em exibir informação

- Não possuem estado complexo
- Não fazem fetch de dados
- Não conhecem regras de negócio
- Só sabem renderizar o que recebem  
  Eles funcionam como "compontentes de UI puros"

**Exemplos típicos:** cards, botões estilizados, caixas de produtos, listas visuais, modais sem lógica

## 2. Container components

São responsáveis pela parte inteligente da aplicação

- Lidam com estado
- Fazem requisições de API
- Decidem o que mostrar
- Processam cálculos
- Orquestram interações  
  Eles recebem os dados "crus" e passam para os presentational já formatados

Containers cuidam de como os dados chegam  
Presentationals cuidam de como os dados aparecem

---

## Por que isso melhora a escalabilidade?

Quando você separa lógica e UI:

### 1. Aumenta a reutilização:

A mesma UI pode ser usada em múltiplos contextos diferentes, porque ela não está acoplada a um tipo específico de estado ou API

### 2. Facilita a manutenção

A lógica fica toda em um único lugar (o container)  
Se amanhã houver mudanças nas regras, você altera o container, não todas as telas

### 3. Código fica mais claro

Componentes visuais são simples e previsíveis, componentes inteligentes são organizados e concentrados

### 4. Testabilidade melhora

A UI pode ser testada visualmente e por snaptshot e a lógica pode ser testada sem renderizar interface

---

## Prop Drilling e esse padrão

Quando você separa um container de vários presentational componnents, pode surgir o problema de prop drilling, que é quando você precisa passar informações por muitos níveis intermediários

**Ex:**  
Um componente inteligente obtém dados e precisa repassar esses dados para um componente visual que está vários níveis abaixo. Os componentes intermediários acabam recebendo props apenas para passar adiante

### Como evitar prop drilling nesses casos?

- Mover o estado mais próximo dos componentes que realmente o usam
- usar Context para estados compartilhados
- Extrair a lógica para hooks customizados, reduzindo dependência da árvore

---

## Container/Presentational vs Hooks customizados

O padrão container/presentational foi, por muitos anos, a forma principal de separar repsonsabilidades no react: um componente container concentra toda a lógica (estado, requisições, regras de negócio) enquanto um componente presentational é responsável apenas pela UI, recebendo dados e callbacks como props. Essa abordagem organiza bem a aplicação, mas aumenta a quantidade de componentes e modifica a estrutura da árvore, já que sempre há um container envolvendo a interface. Com a chegada dos hooks, especialmente os custom hooks, essa separação deixou de depender de componentes adicionais, agora a lógica pode ser isolada em funções reutilizáveis, independente de hierarquia visual. Um custom hook extrai e encapsula comportamentos, não estruturas, permitindo que qualquer componente use aquela lógica sem precisar de um container intermediário.

Enquanto containers isolam a lógica por componente (criando uma camada estrutural), os custom hooks isolam a lógica por meio do comportamento (criando uma camada funcional). Por isso são considerados a evolução natural do padrão container, oferecendo os mesmos benefícios de organização, mas com menos acoplamento, menor profundidade na árvore e muito mais flexibilidade na reutilização
