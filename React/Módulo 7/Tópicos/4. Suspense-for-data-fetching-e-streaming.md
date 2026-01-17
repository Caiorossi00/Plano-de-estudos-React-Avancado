# Suspense for Data Fetching e streaming

Suspense e streaming representam uma das maiores mudanças conceituais no React moderno, especialmente quando combinados com Server Components. Eles alteram profundamente o fluxo de renderização ao permitir que partes da interface esperem por dados sem bloquear toda a tela, ao mesmo tempo em que tornam possível enviar fragmentos da UI ao cliente conforma ficam prontos. Isso melhora o tempo de resposta percebido e reorganiza completamente como pensamos sobre carregamento, fetch de dados e experiência do usuário.

Tradicionalmente, em React client-side, o componmente iniciava o fetch dentro de um useEffect, exibia um loading e só então renderizava os dados. Esse padrão bloqueava e renderização útil e fazia com que o usuário visse flashes de carregamento, layouts incompletos ou conteúdos reposicionados, gerando uma experiência fragmentada. Suspense quebra esse modelo: ao invés de esperar os dados depois da renderização começar, o React é capaz de detectar que algo ainda não está disponível e interromper a renderização apenas naquele ponto, exibindo um fallback enquanto o restante da árvore continua sendo processado normalmente. O resultado é fluidez, a UI não trava, não congela e não fica dependente de uma única requisição.

## Suspense para código vs Suspense para dados

A diferença entre suspense para código e suspense para dados é conceitualmente importante.

- **Suspense para código** já existe há mais tempo e é usado para divisão de bundles: componentes carregados dinamicamente via React.lazy são "suspensos" até o código ser carregado.

- **Suspense para dados**, introduzido com a arquitetura de server components e novas APIs de fetch integradas, permite que o React trate dados da mesma forma que tratava código: como algo que pode atrasar a renderização apenas do trecho dependente dele. Isso significa que componentes podem ser escritos declarativamente, sem hooks de efeito, e ainda assim esperar dados de forma integrada ao próprio mecanismo de renderização.

## Streaming

O streaming entra como complemento dessa ideia. Quando a renderização ocorre no servidor, ela pode ser dividida em partes: assim que um fragmento da UI está pronto, ele é enviado ao navegador imediatamente, mesmo que outros trechos ainda estejam aguardando dados. Isso é especialmente poderoso quando há componentes que dependem de fetches lentos (eles não bloqueiam a página inteira).  
O usuário começa a ver o conteúdo quase instantaneamente, e apenas os trechos dependentes exibem fallback até seus dados estarem disponíveis.

## Problemas que esse modelo resolve

Esse modelo resolve problemas profundos de UX e performance:

- Evita "tela branca" durante carregamentos longos, pois parte da UI já é entregue antes mesmo do fetch terminar
- Remove a necessidade de múltiplos loadings espalhados pelo código
- Reduz o custo cognitivo, pois o usuário percebe a página carregando progressivamente
- Melhora muito métricas como LCP, pois conteúdos não bloqueados aparecem antes
- Minimiza shifts de layout, já que os fallbacks são posicionados de maneira previsível

## Suspense em Server Components

Com server components, suspense se torna ainda mais natural: o servidor pode resolver dados antes de enviá-los e sinalizar ao cliente quais partes ainda estão "penduradas". A interatividade do cliente só é hidratada quando necessário, criando um fluxo híbrido altamente otimizado.

Em síntese, suspense e streaming transformam a experiência de carregamento em algo fluido, progressivo e arquiteturalmente integrado ao React, não mais um detalhe manual tratado componente por componente.
