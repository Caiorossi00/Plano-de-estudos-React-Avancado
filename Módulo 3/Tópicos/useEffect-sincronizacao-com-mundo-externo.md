# useEffect - Sincronização com o mundo externo

## useEffect e efeitos colaterais

Enquanto o `useState` guarda dados que mudam, o `useEffect` lida com efeitos colaterais que ocorrem fora da renderização pura.

Exemplos de efeitos colaterais:

- Fazer uma chamada de API
- Atualizar o título da aba (`document.title`)
- Adicionar e remover listeners do DOM
- Sincronizar estado com `localStorage`

Essas ações não podem acontecer durante o render, pois o render deve ser **puro**, apenas calcular o que mostrar, sem modificar o mundo ao redor.

---

## Por que o useEffect não é chamado durante o render?

Durante o render, o React está calculando o que deve aparecer na tela. Executar efeitos nessa fase quebraria a pureza e interromperia o processo de reconciliação.

O fluxo do React é:

1. Roda o render
2. Atualiza o DOM
3. Depois disso, executa os efeitos definidos em `useEffect`

---

## Closures em React

Antes de avançar, precisamos entender o que é uma **closure**: funções que acessam variáveis que estão fora do seu próprio escopo.

Exemplo:

\`\`\`js
let nome = "Caio";

function sayHello() {
console.log(nome);
}

sayHello();
\`\`\`

Agora, pense em um componente React como uma função que é chamada várias vezes. Cada render cria um novo escopo e, portanto, novas closures.

Exemplo:

\`\`\`js
function Contador() {
const [count, setCount] = useState(0);

function handleClick() {
setCount(count + 1);
}

console.log("Renderizou com count =", count);
return <button onClick={handleClick}>{count}</button>;
}
\`\`\`

Explicação:

- Quando o componente é renderizado, o React executa `Contador()` e cria uma nova closure onde `count` vale, por exemplo, 0
- `handleClick` é criado dentro dessa closure, lembrando do `count` daquela renderização
- Quando o botão é clicado, o `handleClick` ainda vê o `count` antigo, mesmo que o componente já tenha sido re-renderizado depois

Se dentro de um evento ou `useEffect` você usa uma variável de estado, o React não atualiza essa variável dentro da closure antiga — ela é uma cópia congelada da render anterior.

Por isso o nome **stale closure (closure obsoleta)**: ela carrega dados antigos que não refletem mais o estado atual do React.

---

## Evitando stale closures dentro de efeitos

Stale closures ocorrem quando uma função dentro do `useEffect` “lembra” de valores antigos de estado ou props do render em que foi criada.

Para evitar:

- Usar corretamente o **array de dependências** do `useEffect`, listando todas as variáveis externas que o efeito utiliza
- Usar a **função de atualização do estado**:

\`\`\`js
setState(prev => newState)
\`\`\`

que sempre acessa o valor mais recente da gaveta de estado

- Em casos específicos, usar **refs (`useRef`)** para armazenar valores mutáveis que precisam ser lidos por callbacks assíncronos, sem depender da closure do render

---

## Diferença entre efeitos de montagem, atualização e desmontagem

- **Montagem**: executado apenas uma vez, após o componente renderizar pela primeira vez. Útil para buscar dados iniciais ou adicionar listeners
- **Atualização**: roda toda vez que uma das dependências do `useEffect` muda, permitindo sincronizar o efeito com alterações de estado ou props
- **Desmontagem**: tratado pelo **cleanup** retornado pelo `useEffect`, executado antes de reexecutar o efeito ou antes de o componente ser removido da tela. Garante liberação de recursos, como timers ou listeners, evitando vazamentos e efeitos duplicados
