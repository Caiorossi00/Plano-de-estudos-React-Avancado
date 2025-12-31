# useReducer e o padrão de isolamento de lógica

O useReducer é um hook do React que oferece uma forma estruturada de gerenciar estados complexos, especialmente quando há múltiplas transições de estado ou lógica que depende do valor anterior. Ele é baseado no conceito de reducer puro, que é uma função (state, actino) => newState. O reducer recebe o estado atual e uma ação, e devolve um novo estado sem modificar o anterior, mantendo a imutabilidade.  
Essa abordagem facilita a previsibilidade, pois cada ação gera um efeito conhecido e também simplifica testes unitários da lógica de atualização de estado, isolando a transformação do estado do componente em si.

Ele é como um gerenciador de estado centralizado para um componente. Ao invés de usar vários useState para cada pedaço de dado e espalhar lógica de atualização por todo lado, você cria uma função (o reducer) que recebe o estado atual e uma ação que descreve o que você quer fazer. Essa função devolve um novo estado, sem alterar o antigo.

Quando falamos em novo estado no react, não significa que você tem que redesenhar a interface manualmente, signfica que você tem uma nova versão dos dados que definem a UI.

Imagine que você tem um carrinho de compras, com quantidade de itens e total:

/const initialState = {
itens: [],
total: 0
};

function carrinhoReducer(state, action) {
switch (action.type) {
case 'ADICIONAR_ITEM':
const novoItens = [...state.itens, action.item];
const novoTotal = state.total + action.item.preco;
return { itens: novoItens, total: novoTotal };

    case 'REMOVER_ITEM':
      const filtrado = state.itens.filter(i => i.id !== action.id);
      const totalAtualizado = filtrado.reduce((acc, i) => acc + i.preco, 0);
      return { itens: filtrado, total: totalAtualizado };

    default:
      return state;

}
}/

- **Estado atual**: `{ itens: [], total: 0 }`
- **Ação**: `{ type: 'ADICIONAR_ITEM', item: { id: 1, nome: "Tênis", preco: 100 } }`
- **Reducer**: calcula `{ itens: [{id:1, nome:"Tênis", preco:100}], total: 100 }`

com useState:

/function Carrinho() {
const [itens, setItens] = useState([]);
const [total, setTotal] = useState(0);

function adicionarItem(item) {
setItens(prevItens => [...prevItens, item]);
setTotal(prevTotal => prevTotal + item.preco);
}

function removerItem(id) {
setItens(prevItens => {
const filtrado = prevItens.filter(i => i.id !== id);
setTotal(filtrado.reduce((acc, i) => acc + i.preco, 0));
return filtrado;
});
}

return (

<div>
<h2>Total: {total}</h2>
<ul>
{itens.map(i => <li key={i.id}>{i.nome} - R${i.preco}</li>)}
</ul>
{/_ Botões chamariam adicionarItem ou removerItem _/}
</div>
);
}/

**Comparando useState vs useReducer**

**useState:**

- Cada pedaço do estado é independente (itens, total)
- Cada função precisa atualizar todos os estados relacionados
- Se houver muitas regras, a lógica fica espalhada e mais difícil de manter
- Ex: removerItem precisa atualizar itens e total manualmente

**useReducer:**

- Todo estado relacionado é centralizado em um único objeto ({itens, total})
- A lógica de atualização fica toda dentro do reducer, previsível e testável
- Facilita lidar com múltiplas ações e transições de estado complexas

Em resumo, o useReducer é como um controlador central, enquanto useState é como vários interruptores independentes. Para casos simples, useState é suficiente, para lógica mais complexa ou interdependente, useReducer deixa o código mais limpo e previsível.

O useReducer serve justamente para agrupar e coordenar ações que pertencem ao mesmo contexto lógico.  
Com useState, cada parte do estado é independente, e cabe a você atualizar todas as partes relacionadas manualmente.

Em um exemplo de um ecommerce, o useReducer seria especialmente útil para gerenciar estados complexos e interligados como um carrinho de compras. Imagine que o carrinho contenha diversos elementos, lista de livros, total, desconto, frete. Cada uma dessas partes depende das outras, ao adicionar um item, o total muda, ao aplicar um cupom, o desconto altera o valor final, ao calcular o frete, o preço total é atualizado. Se usássemos vários useState, seria necessário atualizar manualmente cada parte do estado e garantir que todas permanecessem sincronizadas. Com o useReducer, todo o controle fica centralizado em uma única função (carrinhoReducer), que recebe uma ação (ADICIONAR_ITEM, REMOVER_ITEM, APLICAR_DESCONTO) e calcula o novo estado completo do carrinho de forma previsível. Isso simplifica a lógica, evita insconsistências e torna o código mais fácil de testar e manter, já que cada mudança de estado segue um fluxo único e claro:  
**ação -> reducer -> novo estado -> atualização da UI**

A diferença de um reducer local (via useReducer) e um gerenciador global de estado (como Redux ou zustand) está no escopo e na finalidade do controle de estado. O useReducer atua dentro de um único componente ou árvore pequena de componentes, sendo ideal para isolar e gerenciar estados complexos de forma local, como o carrinho de um e-commerce, um formulário com validações ou um fluxo de checkout. Já bibliotecas como Redux ou Zustand aplicam o mesmo princípio de reducer, mas em um nível global, permtindo compartilhar o estado entre múltiplas partes da aplicaçao sem precisar repassar props manualmente. Ou seja, useReducer resolve a lógica complexa dentro de um componente específico, enquanto react e zustand estendem essa lógica para toda a aplicação, centralizando o estado e tornando-o acessível em qualquer ponto da árvore de componentes.
