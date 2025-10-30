# useState: Closures e estado persistente

## Estado persistente via "array interno"

Cada `useState` cria uma gaveta interna no React, que guarda o valor do estado entre renders.  
Mesmo que a função do componente seja chamada várias vezes, o React recupera o valor da gaveta correta, mantendo o estado atualizado.

\`\`\`js
function Contador() {
const [count, setCount] = useState(0);
return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
\`\`\`

- O `0` é passado ao `useState` e só é usado na primeira renderização
- Nas renderizações seguintes, o React devolve o valor guardado internamente, que pode ser 1, 2, 3, conforme os cliques

Pense em `useState` como uma gaveta numerada de memória:

- Primeiro `useState` = gaveta 0, segundo = gaveta 1, etc
- `setCount` troca o conteúdo da gaveta mas não muda a variável temporária dentro da função; o React devolve o novo valor na próxima renderização

O hook é uma função especial do React. Quando você chama o hook, ele cria uma gaveta interna no React para guardar o estado daquele componente.  
O retorno do hook é um array de dois itens:

1. O valor atual do estado (`count`), que é uma cópia daquele dado no render
2. Uma função de atualização (`setCount`) que o React fornece para alterar o valor dentro da gaveta e disparar uma nova renderização

Ou seja, o hook é a máquina e `[valor, função]` é o kit que a máquina te entrega para ler e atualizar o estado de forma segura e controlada pelo React.

---

# Closures e estado persistente (próximo nível)

Cada render fecha sobre a versão do estado via **closure**:

- Cada render do componente cria uma nova execução da função
- As variáveis declaradas dentro da função, incluindo o valor retornado pelo hook, ficam "fechadas" naquela render
- Callbacks (como `onClick`) lembram do valor do estado da render em que foram criadas, graças às closures

Uma closure é uma função que "lembra" do ambiente em que foi criada, incluindo todas as variáveis que estavam visíveis naquele momento, mesmo que seja executada depois, em outro contexto.

---

# Batched updates e setState assíncrono

O `setState` não muda o estado imediatamente.  
O React agrupa várias chamadas de `setState` dentro do mesmo evento para otimizar renderizações (**batched updates**).

No React, quando usamos `useState`, cada render cria uma **closure** que “lembra” do valor do estado naquele momento.  
Por isso, se chamamos `setCount(count + 1)` várias vezes dentro do mesmo evento, cada chamada ainda usa o **valor fechado na closure** da render atual. Isso significa que, mesmo que façamos duas chamadas seguidas, ambas podem calcular `count + 1` usando o **mesmo valor antigo**, resultando em apenas uma atualização visível após o render.

Para contornar esse comportamento e garantir que cada atualização use o **valor mais recente da gaveta de estado**, devemos usar a **função de atualização**:

\`\`\`js
setCount(prev => prev + 1)
\`\`\`

Essa função acessa diretamente o estado atual armazenado pelo React e aplica a mudança de forma segura, independentemente das closures ou do batching de atualizações.
