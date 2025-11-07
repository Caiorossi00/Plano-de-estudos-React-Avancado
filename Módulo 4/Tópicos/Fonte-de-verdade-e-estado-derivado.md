# Fonte de verdade e estado derivado

A **fonte de verdade** é o único lugar do código onde um dado é realmente armazenado e atualizado. Todos os outros valores que dependem dele devem ser calculados a partir dessa origem, e não duplicados. Essa abordagem previne inconsistências, pois quando há uma única fonte de verdade, qualquer atualização é refletida automaticamente em toda a aplicação, sem risco de partes diferentes manterem informações divergentes.

Um erro comum é armazenar o mesmo dado em dois estados diferentes, por exemplo, manter tanto `itens` quanto `total` em `useState`, e atualizar o total manualmente quando os itens mudam. Isso cria um risco de descompasso — se os itens forem alterados sem atualizar o total, a interface mostra um valor incorreto.  
O ideal é derivar o total dinamicamente com:

```jsx
const total = items.reduce((sum, item) => sum + item.price, 0);
```

garantindo que ele sempre reflita o estado atual sem precisar de sincronização manual.

O **estado derivado** é exatamente isso: um valor que pode ser calculado a partir de outros estados ou props e, portanto, **não precisa ser armazenado**.  
Armazenar valores derivados gera **re-renderizações desnecessárias** e aumenta a **complexidade de manutenção**, pois o React precisará recalcular e reconciliar mais variáveis do que o necessário.

Em um exemplo de um cenário de carrinho de compras, é comum que o total seja calculado a partir dos itens adicionados, cada um com seu preço.  
Um exemplo errado seria declarar dois estados separados — um para a lista de itens (`useState([])`) e outro para o total (`useState(0)`) — atualizando manualmente o total sempre que um item é adicionado ou removido.

Essa abordagem criaria **duplicação de estado**, o que abre caminho para inconsistências, pois a lista de itens e o total podem divergir.

A forma correta é tratar a lista de itens como a **fonte de verdade** e derivar o total dinamicamente. Assim, o total nunca está "defasado" em relação aos itens, **não precisa de sincronização manual** e mantém a **UI alinhada com a lógica de dados**.

### Errado:

```jsx
import { useState } from "react";

function CarrinhoErrado() {
  const [itens, setItens] = useState([]);
  const [total, setTotal] = useState(0); // estado duplicado!

  function adicionarItem(item) {
    setItens([...itens, item]);
    setTotal(total + item.preco); // atualiza manualmente o total
  }

  return (
    <div>
      <button onClick={() => adicionarItem({ nome: "Livro", preco: 50 })}>
        Adicionar Livro
      </button>
      <p>Total: R$ {total}</p>
    </div>
  );
}
```

Nesse exemplo, o **total** está sendo armazenado e atualizado manualmente.  
Se algum item for removido ou alterado e `setTotal` não for chamado corretamente, o valor exibido ficará **inconsistente com a lista de itens** — ou seja, a **fonte de verdade** (`itens`) e o **estado derivado** (`total`) estão desalinhados.

---

### Correto:

```jsx
import { useState, useMemo } from "react";

function CarrinhoCerto() {
  const [itens, setItens] = useState([]);

  function adicionarItem(item) {
    setItens([...itens, item]);
  }

  const total = useMemo(() => {
    return itens.reduce((soma, item) => soma + item.preco, 0);
  }, [itens]);

  return (
    <div>
      <button onClick={() => adicionarItem({ nome: "Livro", preco: 50 })}>
        Adicionar Livro
      </button>
      <p>Total: R$ {total}</p>
    </div>
  );
}
```

Aqui a fonte de verdade é apenas itens.
O total é calculado automaticamente a partir dessa lista, usando useMemo para evitar cálculos desnecessários a cada renderização, assim, não há risco de inconsistência, o total sempre reflete exatamente o estado atual do carrinho.
