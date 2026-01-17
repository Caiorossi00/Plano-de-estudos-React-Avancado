# Hooks customizados: composição e reutilização

Hooks customizados são uma forma de organizar e reutilizar lógica de estado e efeitos entre componentes  
Eles permitem combinar hooks nativos (useState, useEffect, useReducer, useMemo) dentro de uma função que começa com use, por exemplo useCarrinho(), useFetchProdutos()

A ideia é extrair padrões repetitivos de dentro dos componentes e colocá-los em um local reutilizável.

Por exemplo, em um e-commerce você pode ter

- useCarrinho() -> controla itens, total e desconto
- useFiltroProdutos() -> lida com busca e filtragem
- useAuth() -> gerencia login e logout do usuário

Geralmente os custom hooks combinam vários hooks nativos quando o comportamento é composto

No caso do useCarrinho, por exemplo, ele precisa coordenar múltiplas responsabilidades:

- Gerenciar o estado do carrinho (itens, total, descontos, frete, etc), para isso, usa-se o useReducer (ou useState, em casos mais simples)
- Persistir os dados localmente, para isso, usa-se o useEffect, para salvar o carrinho no localStorage sempre que o estado mudar
- Derivar valores sem recalcular tudo (como o total com desconto), para isso, usa-se o useMemo, para evitar cálculos desnecessários

Um custom hook é um agrupador de hooks que trabalha em torno de uma lógica de domínio. Ele não cria novas capacidades, apenas organiza e orquestra hooks nativos para que o componente final não precisa lidar com todos esses detalhes.

Mas por que eu usaria um custom hook?

- **Reutilização de lógica:**  
  Quando dois ou mais componentes precisam da mesma regra de negócio, você não quer copiar e colar os mesmos useState, useEffect, useMemo.  
  Ao invés disso, você cria um custom hook, por exemplo (useAuth) e simplesmente chama onde precisar.  
  Exemplo:  
  Tanto o header quanto a página de checkout precisam saber se o usuário está logado.  
  Ambos usam const { user, logout } = useAuth()

- **Isolamento e clareza**  
  Mesmo que só um componente use aquela lógica, se ela for grande ou envolver muitos hooks, o componente pode ficar confuso.  
  Mover a lógica para um custom hook deixa o componente mais legível e focado apenas em renderizar a UI, não em lidar com estados e efeitos.  
  O componente vira declarativo e o hook fica responsável pela "mecânica".

- **Testabilidade e manutenção**  
  Você cria um hook não para ter "novos poderes", mas para organizar, reutilizar e dar coesão a pedaços de lógica relacionados ao mesmo comportamento.  
  É a forma de encapsular "como algo funciona" e deixar os componentes apenas mostrarem "o que deve aparecer".

Antes dos hooks, a principal forma de compartilhar lógica entre componentes era com high-order components (HOCs) ou render props.  
Um HOC é uma função que recebe um componente e devolve um novo componente com funcionalidades adicionais.  
Com os hooks, o react passou a permitir reutilizar lógica de estado e efeitos diretamente dentro das funções, sem precisar criar novos componentes.

Os HOCs foram uma ótima solução antes dos hooks, mas traziam complexidade e profundidade desnecessária.  
Os hooks customizados substituíram esse padrão de forma mais natural, mantendo o mesmo poder de reutilização de lógica, mas com menos camadas, menos acoplamento e mais clareza.
