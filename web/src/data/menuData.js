const topicos = [
  {
    tema: "React",
    modulos: [
      {
        modulo: "Módulo 1 – Filosofia e Paradigma do React",
        objetivo:
          "Entender o porquê do React existir e o que ele representa no contexto da engenharia de interfaces.",
        aulas: [
          {
            titulo: "Paradigma declarativo vs imperativo",
            contentMarkdown: `No paradigma **imperativo**, escrevemos **passo a passo o que deve acontecer** — de forma **algorítmica**.

### Exemplo do mundo real

Para o preparo de um café:

> "Pegue a chaleira, encha de água, aqueça até ferver, coloque o pó, coe, despeje na xícara."

Você descreve **as ações necessárias**, não apenas o resultado final.

### Exemplo em JavaScript
\`\`\`js
const button = document.createElement("button");
button.textContent = "Clique aqui";
button.addEventListener("click", () => {
  alert("Olá!");
});
document.body.appendChild(button);
\`\`\`

Você diz explicitamente como criar, inserir e reagir ao botão.

No paradigma **declarativo**, você descreve o resultado desejado e o sistema decide como chegar lá.

### Exemplo do mundo real: café

> "Quero um café pronto."

Você apenas declara a intenção; quem executa sabe o processo interno.

### Exemplo em React
\`\`\`jsx
function App() {
  return <button onClick={() => alert("Olá")}>Clique aqui</button>;
}
\`\`\`

Você apenas declara: quero um botão que mostre um alerta ao clicar.  
O React cuida do **como**: quando criar, como colocar, como atualizar.

Um ponto importante é observar que o paradigma declarativo só é viável quando a linguagem ou framework fornece uma camada que abstrai o imperativo.  
Por exemplo, em **C**, você precisaria controlar tudo: alocação de memória, fluxo, lógica de renderização — é um ambiente puramente imperativo.

Em **React**, a biblioteca implementa toda essa lógica invisível.  
O declarativo é, portanto, um **nível de abstração acima do imperativo**, pois se apoia nele.

Quando programamos em um modelo declarativo, precisamos pensar como o navegador:

- Criar elementos
- Inserir nós
- Remover o que mudou
- Atualizar somente as partes específicas

Com a declaração declarativa do React, todas essas decisões são feitas automaticamente via **DOM Diffing**, por baixo dos panos.
`,
          },
          {
            titulo: "React como UI derivada de estado",
            contentMarkdown: `No React, a interface de usuário é derivada do **estado**.  
Mudanças no estado refletem automaticamente na UI, sem precisar manipular o DOM manualmente.`,
          },
          {
            titulo:
              "Composição de componentes e a ideia de árvore de renderização",
            contentMarkdown: `O React organiza a UI em uma **árvore de componentes**.  
Cada componente é responsável por uma parte da interface, e a renderização segue essa hierarquia.`,
          },
          {
            titulo: "O papel da previsibilidade e da pureza de funções",
            contentMarkdown: `Componentes puros e funções previsíveis facilitam **testes**, **debugging** e otimização de performance.`,
          },
          {
            titulo: "Abstração entre dados → estado → interface",
            contentMarkdown: `O React separa os **dados** (state/props) da **interface** (UI).  
Essa abstração permite atualizar a UI sem se preocupar com manipulações diretas do DOM.`,
          },
          {
            titulo:
              "O que diferencia o React de frameworks MVVM/MVC tradicionais",
            contentMarkdown: `Enquanto frameworks MVVM/MVC exigem mapeamentos explícitos entre modelo e view,  
o React trabalha de forma **declarativa** e **reativa**, cuidando automaticamente das atualizações da interface.`,
          },
        ],
      },
      {
        modulo: "Módulo 2 – O motor do React (Virtual DOM e Fiber)",
        objetivo:
          "Entender como o React transforma estado em UI e o que realmente acontece na renderização.",
        aulas: [
          {
            titulo: "O que é o Virtual DOM e por que ele existe",
            contentMarkdown: `O **Virtual DOM** é uma representação leve da UI na memória.  
Ele permite que o React faça comparações rápidas e otimize atualizações no DOM real.`,
          },
          {
            titulo: "Reconciliação: como o React compara árvores",
            contentMarkdown: `A **reconciliação** é o processo em que o React compara a árvore antiga com a nova e calcula a mínima quantidade de alterações necessárias.`,
          },
          {
            titulo: "Diffing algorithm e heurísticas internas",
            contentMarkdown: `O algoritmo de **diffing** aplica heurísticas para atualizar rapidamente apenas os elementos que mudaram.`,
          },
          {
            titulo:
              "React Fiber: scheduler, prioridade e interrupção de tarefas",
            contentMarkdown: `O **React Fiber** introduz um scheduler interno, permitindo **priorizar tarefas** e **interromper renderizações** para manter a UI responsiva.`,
          },
          {
            titulo: "Tempo de renderização, commit phase e mutation phase",
            contentMarkdown: `O React divide a renderização em **phases**:  
- **Render phase:** calcula as mudanças necessárias  
- **Commit phase:** aplica as mudanças no DOM real  
- **Mutation phase:** executa efeitos e side-effects`,
          },
          {
            titulo: "Como o React garante fluidez sob carga (Concurrent Mode)",
            contentMarkdown: `No **Concurrent Mode**, o React consegue **interromper e retomar** renderizações longas, garantindo fluidez da interface mesmo em cargas altas.`,
          },
          {
            titulo: "Batching de atualizações e event loop",
            contentMarkdown: `O React aplica **batching**, agrupando múltiplas atualizações de estado em uma única renderização, para otimizar performance e reduzir repaints.`,
          },
        ],
      },
    ],
  },
];

export default topicos;
