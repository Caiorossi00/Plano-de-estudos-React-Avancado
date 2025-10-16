# Módulo 1 – Filosofia e Paradigma do React

## UI derivada de estado

O conceito central é que, no React, a UI **não é algo que você manipula diretamente**, ela é uma função do estado:

- O estado é a **fonte de verdade**
- A interface é uma **projeção desse estado**, calculada automaticamente pelo React
- Quando o estado muda, o React recalcula a UI — você **não mexe no DOM diretamente**

A interface que você vê na tela é completamente determinada pelo estado atual da aplicação.

Em termos matemáticos:

UI = f(state)

Como pensar:

- Você não toca na tela diretamente, você modifica o estado (os dados que representam a situação atual do app)
- O React lê esse novo estado e calcula uma nova UI a cada alteração
- O React aplica as mudanças de forma inteligente, só altera os elementos que realmente mudaram, sem redesenhar tudo do zero — esse processo é chamado de **reconciliação** ou **DOM diffing**
- O resultado é que o usuário vê a tela atualizada, mas você não precisou se preocupar com os detalhes de atualização do DOM, o React fez

---

## UI imperativa vs UI derivada de estado

### UI imperativa

Imagine que você cria um elemento `<ul>` manualmente, para cada tarefa no array, você cria `<li>` e adiciona ao `<ul>`.

Quando uma tarefa é adicionada, você precisa atualizar o DOM manualmente:

- criar `<li>`
- inserir na lista
- remover se necessário

Se o usuário marcar uma tarefa como concluída, você precisa **localizar o `<li>` específico** e mudar sua aparência diretamente.

**Problemas:**

- A UI tem vida própria e precisa ser sincronizada constantemente com os novos dados
- Se você esquecer de atualizar um elemento, a interface fica fora de sincronia com o estado real

### UI derivada de estado

Em uma UI derivada de estado:

- Você mantém um estado `tasks` com todas as tarefas
- A UI é sempre calculada a partir desse estado
- Para atualizar uma tarefa, você apenas **atualiza o estado**
- O React automaticamente recalcula a UI e atualiza apenas o que mudou no DOM

---

## Problemas de manipular diretamente o DOM

1. **Inconsistência entre estado e UI**

   - Não há fonte de verdade central
   - Outros elementos ou funções que dependem desse valor podem ficar desatualizados

   Exemplo:

   const h1 = document.getElementById('contador');
   let valor = Number(h1.textContent);
   const dobro = valor \* 2;
   console.log(dobro);

- Se você esquecer de atualizar o `<h1>` corretamente, `dobro` vai refletir um valor antigo, quebrando a lógica do app

2. **Repetição de lógica**

- Cada elemento que depende do valor precisa ser atualizado manualmente
- Mais componentes = mais chances de erro

3. **Problemas de otimização**

- Manipular o DOM manualmente pode exigir redesenhar partes inteiras da UI
- Em apps grandes, degrada a performance

4. **Dificuldade de teste**

- Funções que manipulam o DOM são difíceis de testar isoladamente
- Precisa recriar o DOM em ambiente de teste

---

## Como a UI derivada de estado resolve isso

- O estado é a **fonte da verdade**: lugar único onde os dados realmente existem e de onde todas as partes do sistema obtêm informação confiável
- No React, todos os dados que definem como a interface deve aparecer estão guardados no estado
- A UI não armazena valores por conta própria, apenas projeta o estado na tela

---

## Fluxo React – UI derivada de estado

[Usuário interage]
│
▼
[Evento / Ação]
│
▼
[Estado (fonte de verdade)]
│
▼
[Função de render: UI = f(state)]
│
▼
[UI projetada na tela]
│
▼
[React atualiza o DOM inteligentemente]
│
▼
[Interface sempre consistente e atualizada]

**Problemas que o imperativo teria:**

- UI tem vida própria → risco de inconsistência
- Repetição de lógica → chance de erro
- Atualizações manuais → performance ruim
- Difícil de testar

**Benefícios do declarativo + estado:**

- Fonte de verdade central
- UI sempre consistente
- Atualização automática e eficiente
- Facilidade de teste

---

## Tipos de estado em React

### 1. Estado local

- Guardado dentro de um componente específico
- Controla dados que só interessam a esse componente
- Exemplo: contador dentro de um card
  const [count, setCount] = React.useState(0)

- **Quando usar:** se o dado não precisa ser compartilhado com outros componentes

### 2. Estado derivado

- Calculado a partir de outros estados
- Não precisa ser armazenado separadamente, pode ser gerado sob demanda
- Exemplo: filtrar tarefas concluídas a partir de uma lista de tarefas
  const tarefasConcluidas = tasks.filter(task => task.done)

- **Quando usar:** para evitar duplicação de dados e inconsistências

### 3. Estado global

- Compartilhado entre vários componentes da aplicação
- Necessário quando múltiplos componentes precisam acessar ou atualizar o mesmo dado
- Exemplo: usuário logado, tema do app, carrinho de compras
- Geralmente gerenciado com **Context API, Redux** ou ferramentas similares

---

## Resumo

- **Estado local:** só interessa ao componente que o possui

  - Ex.: contador de cliques, input temporário em um formulário

- **Estado derivado:** calculado a partir de outros estados, não precisa ser armazenado separadamente

  - Ex.: lista de tarefas concluídas (`tasks.filter(task => task.done)`), total de itens no carrinho

- **Estado global:** necessário quando vários componentes precisam do mesmo dado
  - Ex.: usuário logado, tema da aplicação, carrinho compartilhado
