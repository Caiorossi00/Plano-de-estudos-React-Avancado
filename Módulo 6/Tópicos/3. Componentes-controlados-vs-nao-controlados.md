# Componentes controlados vs não controlados

Em formulários e inputs, o React permite duas abordagens: componentes controlados e não controlados. A diferença está em quem possui e atualiza a fonte da verdade do valor: o componente react ou o próprio DOM. Entender essa distinção é essencial para criar interfaces previsíveis, testáveis e com comportamento consciente.

1. Componentes controlados
   Um componente controlado é aquele cujo valor é totalmente gerenciado pelo react.
   O input não "decide" seu próprio valor, ele apenas exibe o que o estado determina:
   Ex:
   function CampoControlado() {
   const [nome, setNome] = useState("");

return (
<input
value={nome}
onChange={(e) => setNome(e.target.value)}
/>
);
}

Aqui:

- A fonte de verdade é nome no estado React
- O input é apenas uma janela para esse estado
- Toda mudança passa por setNome

Vantagens

- Total previsiblidade: o React sempre sabe o valor atual
- Fácil de validar, formatar e mascarar entradas
- Excelente para formulários complexos
- Fácil de testar

Desvantagens

- Mais verboso
- Pode gerar re-renders frequentes em inputs muito dinâmicos
- Pode ser pesado em formulários grandes se não for bem otmizado

2. Componentes não controlados
   Nos componentes não controlados, o DOM é a fonte de verdade.
   O React apenas lê o valor quando necessário, geralmente via refs
   Ex:
   function CampoNaoControlado() {
   const inputRef = useRef();

function enviar() {
console.log(inputRef.current.value);
}

return (
<>
<input ref={inputRef} defaultValue="João" />
<button onClick={enviar}>Enviar</button>
</>
);
}

Aqui:

- O valor é gerenciado internamente pelo DOM
- React não sabe o valor até você acessá-lo via ref.current.value

Vantagens:

- Simplicidade: menos estado, menos re-renders
- Bom para formulários muito grandes e pouco interaativos
- Útil quando não é necessário monitorar o valor em tempo real

Desvantagens:

- Menos previsível: o DOM pode ter valores que o react não conhece
- Validação e lógica de formatação ficam mais complexas
- Menos testável, pois depende de manipulação do DOM
- Pode quebrar a filosofia de fonte de verdade única

Um dos princípios centrais do React é ter uma única fonte de verdade para garantir consistência

- Componentes controlados seguem esse princípio: todo valor é definido por um único estado react
- Não controlados podem quebrar esse princípio: você tem duas fontes, o DOM e o estado React, podendo gerar inconsistências
  Por isso, em sistemas com regras de negócio complexas, validações encadeadas, máscaras, sincronização com APIs ou formulários longos e interativos, a recomendação é usar componentes controlados
