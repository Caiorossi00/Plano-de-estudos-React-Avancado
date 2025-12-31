# Gerenciamento externo (Redux, Zustand, React Query)

O gerenciamento externo de estado é usado quando o estado da daplicação se torna muito compartilhado ou difícil de coordenar com lifting state up e context API.  
Enquanto o estado local (useState, usereducer) vive dentro de um componente e pertence apeas a ele, o estado externo vive fora da árovre de componentes e pode ser acessado de qualquer lugar da aplicação.

---

### Diferença conceitual entre estado local e externo:

O estado local é controlado diretamente dentro do componente e ideal para dados que só afetam ele (ex: abrir e fechar um modal, controlar um input).  
Já o estado externo é centralizado em um único lugar (store) e serve para dados compartilhados globalmente (ex: usuário autenticado, tema do app, carrinho de compras).  
O React continua sendo declarativo, mas a responsabilidade de armazenar e atualizar os dados passa para uma ferramenta externa que onversa com os componentes via hooks ou contextos internos.

---

### Quando vale a pena usar uma ferramenta externa?

- Quando muitos componentes precisam acessar o mesmo estado
- Quando há múltiplas fontes de autenticação
- Quando é necessário controle fino de performance
- Quando o projeto cresce e o context API se torna difícil de escalar ou manter

Em aplicações pequenas, ferramentas externas são um exagero; em médias ou grandes, elas trazem previsibilidade e organização.

---

### Redux

O redux segue o princípio de uma store global (única fonte de verdade). Ele trabalha com actions (intenções de mudança), reducers (funções puras que calculam o novo estado) e dispatch (mecanismo que dispara uma mudança); Seu foco é imutabilidade e rastreabilidade, cada mudança no estado é previsível e registrada, o que facilita debugs e testes, mas adiciona mais "cerimônia" e código.

Fluxo:
Dispatch(action) -> reducer -> novo estado -> UI re-renderiza

---

### Zustand

O zustand oferece o mesmo conceito de store global, mas de forma muito mais simples e baseada em hooks.  
Ao invés de actions e reducers, ele permite atualizar o estado diretamente dentro de uma função, sem boilerplate.  
Seu grande diferencial é que somente os componentes que consomem o valor alterado re-renderizam, otimizando a performance.

Exemplo de uso comum:

```jsx
const { user, login } = useAuthStore();
```

### React Query

Diferente de redux e zustand, o react query não é para gerenciar UI state, mas server state, ou seja, dados vindos de uma API.
Ele lida com cache, refetching, sincronização automática e invalidação de dados de forma declarativa.

Exemplo: Se o usuário adiciona um produto ao carrinho, o react query pode automaticamente refazer o fetch dos itens no servidor, mantendo a UI sempre sincronizada com o backend.

Essas ferramentas não substituem o modelo declarativo do React, elas o complementam.
O react continua reagindo a mudanças de estado, mas o controle desse estado passa a estar fora dos componentes.
Em vez de o componente "gerar" o dado, ele apenas declara o que deve renderizar com base no estado atual da store externa.
