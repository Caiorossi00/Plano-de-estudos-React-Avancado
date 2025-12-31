# Context API - conceito, escopo e custo de renderização

A **Context API** é o mecanismo nativo do React para compartilhar estado global entre componentes sem precisar passar props manualmente por vários níveis da árvore (ou seja, sem prop drilling).  
Ela funciona através de um **context provider**, que armazena um valor (por exemplo, o usuário autenticado, tema da interface, idioma) e de **consumidores**, que podem acessar esse valor de qualquer lugar da árvore onde o provider estiver acima.

O grande **trade-off** do context é entre simplicidade e performance: Ele é fácil de usar e ótimo para estados globais pequenos, mas cada atualização no valor do provider provoca **re-render** em todos os componentes que consomem aquele contexto, mesmo que apenas um deles realmente precise do valor atualizado. Isso pode impactar a performance em aplicações grandes.

Para mitigar esse problema, recomenda-se **dividir contextos conforme o tipo do dado**. Ao invés de um único contexto gigante para toda a aplicação (como um AppContext com tema, idioma, usuário, carrinho), pode-se criar contextos menores e mais específicos (**ThemeContext**, **UserContext**, **CartContext**), garantindo que apenas os componentes relevantes sejam atualizados quando algo mudar.

A diferença entre context e ferramentas como **Redux** ou **Zustand** está principalmente na **escala e no controle do fluxo de dados**. O context é uma solução leve e declarativa, ideal para compartilhar estado simples dentro da árvore React. Já Redux, Zustand e afins, oferecem gestão de estado mais robusta, com middlewares, persistência, time travel, imutabilidade e controle refinado de renderização, úteis em aplicações mais complexas, com muitos estados e interações assíncronas.

O **escopo** de um context define até onde na árvore de componentes o valor desse contexto é visível. Todo componente abaixo de um Provider tem acesso ao valor, mas nada acima ou fora dele. Por isso, é importante criar o contexto no nível mais baixo possível de hierarquia, onde ele ainda atende a todos os consumidores necessários.

**Em resumo:**

- **Escopo:** define onde o contexto é acessível
- **Granularidade:** define o quão específico e isolado é cada contexto
- **Objetivo:** Evitar re-renderizações em massa e manter o controle do estado global de forma eficiente

---

### Exemplo de context:

Imagine uma aplicação de e-commerce com três grandes áreas:

- **Header**, que mostra o nome do usuário logado
- **Carrinho**, que exibe a quantidade de itens
- **Tema**, que muda entre claro e escuro

Em um **contexto mal escopado (granularidade ruim)**, o desenvolvedor cria um único **AppContext** contendo o usuário, o tema e o carrinho, esse contexto envolve toda a aplicação.  
Agora, quando o usuário adiciona um item no carrinho, todo o aplicativo re-renderiza (inclusive o Header e os componentes de tema, mesmo que eles não tenham relação com o carrinho).  
Ou quando o tema muda, os componentes de autenticação também re-renderizam sem necessidade.  
Isso acontece porque todos estão "ouvindo" o mesmo contexto, e qualquer alteração em qualquer parte dispara re-render em todos os consumidores.

Agora, em um **contexto bem dividido (granularidade boa)**, o desenvolvedor cria três contextos separados:

- **AuthContext** – Responsável apenas por informações do usuário (login, nome, token)
- **CartContext** – Cuida apenas do carrinho de compras (itens, total, descontos)
- **ThemeContext** – Controla o tema claro/escuro

Nesse caso, se o usuário adiciona um item ao carrinho, somente os componentes que consomem o **CartContext** (como o ícone do carrinho e a página de checkout) re-renderizam.  
O header (que depende do **AuthContext**) e o tema (que depende do **ThemeContext**) continuam estáveis.

Esse exemplo mostra como o **escopo** (onde o contexto é usado) e a **granularidade** (o quanto ele é especializado) impactam diretamente na **performance** e na **manutenção da aplicação**.
