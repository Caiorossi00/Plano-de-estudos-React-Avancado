# Por que os hooks foram criados (substituição de classes)

Antes dos **Hooks**, o React usava **classes** para criar componentes com estado e comportamento próprio.  
Uma **classe** é uma forma de definir um "molde" para um componente, dizendo como ele deve se comportar, quais dados guarda e o que exibe.  
Dentro da classe, usamos métodos especiais (como `constructor`, `render`, `componentDidMount`) para controlar cada momento da vida do componente.

Antes dos hooks, apenas componentes de classe podiam ter:

- Estado interno (this.state)
- Métodos de ciclo de vida (componentDidMount, componentDidUpdate, etc)
- E acesso direto a side effects

Os componentes funcionais eram simples, recebiam props e retornavam JSX, sem estado ou efeitos, isso criava uma divisão artificial entre:

- Componentes inteligentes (classes com estado e lógica)
- Componentes burros (funções puras de renderização)

As classes apresentavam algumas limitações:

1. Boilerplate e verbosidade

- Precisavam declarar constructor, chamar super (), fazer this.state = {...}, etc
- O código era repetitivo, mesmo para tarefas simples

1. Problemas com o this

- Era necessário fazer binding manual (this.handleClick = this.handleClick.bind(this))
- Fácil cometer erros, especialmente para iniciantes

1. Lógica de lifecycle espalhada

- Um mesmo comportamento (ex: buscar dados de uma API) era dividido em vários métodos
- Dificultava a reutilização e manutenção de lógica entre componentes

### A proposta dos Hooks

Os hooks foram criados para trazer poder das casses para funções, mas com menos complexidade e mais previsibilidade

Hooks seguem a filosofia da composição, pequenas funções que compartilham comportamento, em vez da herança usada nas classes.  
Isso torna o código mais previsível, fácil de testar e de reutilizar, já que podemos extrair lógicas de estado em **custom hooks** reutilizáveis

**Exemplo simplificado de classe:**

```jsx
class Contador extends React.Component {
  constructor() {
    super();
    this.state = { contador: 0 };
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.contador}</p>
        <button onClick={this.incrementar}>+1</button>
      </div>
    );
  }
}
```

**Exemplo equivalente com Hook:**

```jsx
function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>+1</button>
    </div>
  );
}
```

Os hooks permitem fazer a mesma coisa das classes, ter estado, efeitos e lógica, mas usando **funções simples**, com código mais claro e previsível.

### **Resumo conceitual**

- **Antes:** só classes tinham estado, efeitos e ciclo de vida.
- **Agora:** qualquer função pode ter comportamento complexo com Hooks.
- **Benefício:** menos código, menos erros, mais composição.
