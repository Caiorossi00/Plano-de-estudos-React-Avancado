# Componentes em React

No React, a **UI é construída a partir de componentes**, que são blocos reutilizáveis.

## Estrutura de um componente

Cada componente pode ter:

- **Estado local**
- **Props**
- **Funções internas**

## Hierarquia de componentes

- Componentes são organizados em hierarquias.
- Cada componente recebe dados via **props** e pode manter **estado local**.
- A renderização é **recursiva**: o React começa do **topo (raiz)**, renderiza cada filho, que pode renderizar seus próprios filhos, formando a **árvore completa da UI**.

## Composição vs Herança

- **Herança:** componente filho herda comportamento de outro (como classes em OOP).
- **Composição:** componente é montado a partir de outros componentes (boa prática no React).

**Observação:**  
Componentes profundos ou grandes podem custar mais tempo para recalcular. Sempre que o estado muda, o React precisa **re-renderizar** os componentes afetados.

## Boas práticas

- Dividir responsabilidades entre componentes mantém o código **organizado, previsível e reutilizável**.

### Componente pai

- Gerencia o **estado** e **lógica** quando necessário.
- Passa dados e funções para os filhos via **props**.

### Componente filho

- Focados em **UI/apresentação**.
- Recebem dados e callbacks do pai via **props**.
- Não alteram diretamente o estado do pai.

---

## Exemplo apenas com UI

```jsx
function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

function Hero() {
  return <section>Seção Hero</section>;
}
function Projects() {
  return <section>Seção Projects</section>;
}
function About() {
  return <section>Seção About</section>;
}
function Contact() {
  return <section>Seção Contact</section>;
}
```

Exemplo com props e estado (pai -> filho)

```jsx
function Home() {
  const [projetos, setProjetos] = React.useState([
    { id: 1, nome: "Projeto A" },
    { id: 2, nome: "Projeto B" },
  ]);

  return (
    <div>
      <Hero />
      <Projects lista={projetos} />
    </div>
  );
}

function Projects({ lista }) {
  return (
    <ul>
      {lista.map((p) => (
        <li key={p.id}>{p.nome}</li>
      ))}
    </ul>
  );
}
```

## Resumo

- Componentes pequenos e focados são mais fáceis de **testar e manter**.
- Filhos devem ser **reativos e dependentes de props**, sem mexer no estado diretamente.
- Pai centraliza o **estado e a lógica**, mantendo a **fonte de verdade**.
- Mesmo em apps simples, essa separação ajuda a preparar a aplicação para **crescer sem se tornar confusa**.
