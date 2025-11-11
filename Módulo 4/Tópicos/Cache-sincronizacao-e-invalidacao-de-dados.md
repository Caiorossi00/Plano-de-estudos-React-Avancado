# Cache - Sincronização e invalidação de dados

Em aplicações que consomem APIs, é comum armazenar temporariamente os dados no cliente — esse é o processo chamado de **cache**.  
O objetivo é evitar requisições repetidas e melhorar a performance e a experiência do usuário.  
Por exemplo, se o usuário visitar uma lista de produtos e depois voltar para a mesma página, o app pode exibir os dados já armazenados em cache em vez de refazer o fetch imediatamente.

Entretanto, o cache traz um desafio: **os dados podem ficar desatualizados**.  
Por isso, é essencial definir **estratégias de invalidação**, que determinam quando e como o cache deve ser considerado obsoleto e atualizado novamente a partir do backend.

---

### Algumas estratégias comuns incluem:

- **Manual:** o desenvolvedor decide explicitamente quando invalidar o cache (por exemplo, após criar ou editar um item, refazendo o fetch da lista)
- **TTL (time to live):** o cache expira automaticamente após um período de tempo configurado
- **Optimistic updates:** a UI é atualizada de forma imediata (otimista), assumindo que a operação no servidor vai dar certo; caso contrário, é revertida

---

### Sem uma estratégia de invalidação, surgem problemas como:

- **Dados inconsistentes:** a UI exibe informações antigas que já mudaram no servidor
- **Requisições redundantes:** o app refaz fetches desnecessariamente, aumentando o custo e o tempo de resposta
- **Experiência confusa:** o usuário pode ver dados diferentes em telas distintas ou ver o conteúdo "piscando" entre versões antigas e novas

---

Ferramentas como **React Query** e **SWR** resolvem esse problema automaticamente com um modelo **reativo de cache e sincronização**.  
Elas mantêm um cache local estruturado e sabem quando precisam refazer o fetch — por exemplo, quando uma _mutation_ ocorre, quando o usuário volta à tela, ou após um tempo de _stale_ configurado.  
Além disso, gerenciam estados como _loading_, _error_ e _refetching_ sem necessidade de código manual.

---

### Diferença entre cache de UI e cache de servidor:

- **Cache de UI** (como `useMemo` ou estados locais): serve apenas para otimizar renderizações dentro do React, evitando recomputações.
- **Cache de servidor** (como o do React Query ou SWR): armazena respostas de APIs e gerencia sua validade e sincronização com o backend.

---

O cache é uma ferramenta poderosa para performance, mas só é seguro quando acompanhado de uma boa política de **invalidação e sincronização**, garantindo que o usuário veja sempre dados atualizados — sem prejudicar a aplicação.
