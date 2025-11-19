# Interação com Web Vitals e tempo de pintura

As métricas de performance conhecidas como core web vitals (por exemplo, largest contentful paint - LCP, interatcion to next paint - INP, cumulative layout shift - CLS) medem pontos críticos da experiência real do usuário: carregamento, interatividade e estabilidade visual.

No contexto de aplicações react, decisões arquiteturais de renderização têm impacto direto nessas métricas, porque definem quando e como a UI aparece, se está pronta para interação e se ela se move inesperadamente ou bloqueia a thread principal.

---

## Como decisões de renderização afetam as métricas?

- Se um componente react realiza muitos cálculos ou atualizações pesadas antes de produzir o primeiro "paint", isso pode atrasar o LCP ou o tempo até a página ficar interativa (TTI/INP)
- Se a thread principal está ocupada em renderizações sincronizadas longas (bloqueantes), isso aumenta o tempo de resposta a input (aumentando a INP ou equivalentes)
- Se elementos visuais são adicionados ou reposicionados após a render inicial sem espaço reservado, isso gera deslocamentos de layout, impactando o CLS

---

## Influência de granularidade, memoização e isolamento

- Dividir componentes grandes em unidades menores e isoladas permite atualizações menores que não forcem renderizações extensas. Isso reduz bloqueios e melhora o tempo até a interatividade
- Uso de React.memo, useMemo e useCallback reduz trabalho desnecessário no render, ajudando a manter a thread principal livre para tarefas de alta prioridade, favorecento métricas como INP
- Garantir que os layouts iniciais tenham dimensões reservadas e evitar alterações inesperadas após o carregamento ajuda a minimizar CLS

---

## Concurrent rendering e Web Vitals

Quando o react usa técnicas como **concurrent rendering**, **time-slicing** e **prioridade de tarefas**, ele consegue priorizar updates que impactam diretamente o usuário (input, foco, visibilidade) em relação a tarefas menos urgentes (pré-carregamento, cálculos de fundo).  
Essa priorização reduz o "tempo até o usuário poder interagir" e evita que o carregamento de funcionalidades secundárias bloqueie aquilo que mais importa.  
Isso se reflete nas métricas de **interatividade e carga percebida**.

---

## Como melhorar Web Vitals em aplicações React

### 1. Otimize o bundle inicial

- Use code splitting em rotas e componentes pesados (React.lazy + Suspense)
- Remova dependências desnecessárias do bundle inicial
- Evite carregar gráficos, tabelas inteligentes, carrosséis e dashboards no primeiro paint
- Use importação dinâmica para módulos raramente usados

---

### 2. Evite renderizações pesadas no carregamento inicial

- Não coloque cálculos custosos dentro de useEffect, useMemo, ou diretamente no componente inicial da página
- Pré-calcule dados no servidor quando possível

---

### 3. Garanta layout estável (evite jumps)

- Sempre defina altura/largura para imagens, banners e componentes dinâmicos
- Reserve espaço para skeletons
- Não injete novos elementos acima do conteúdo já renderizado
- Evite alteração de fontes que causem relayout tardio

---

### 4. Divida componentes grandes em unidades menores

- Múltiplos componentes pequenos são mais fáceis de interromper e retomar no concurrent rendering
- Minimiza re-renders propagados
- Reduz trabalho por renderização

---

### 5. Use memoização seletiva (apenas onde faz sentido)

- React.memo para componentes que recebem grandes objetos/arrays
- useMemo para cálculos ou objetos reutilizados
- useCallback para funções passadas como props
- Evite memoização excessiva (custo de comparação pode superar o ganho)

---

### 6. Use Context com granularidade adequada

- Context mal utilizado gera ripple re-renders em árvore
- Divida contexts por domínio (Auth, theme, cart, UI)
- Evite usar context para valores atualizados com alta frequência

---

### 7. Prefira gerenciamento de estado externo para server state

- React Query/SWR evitam múltiplos fetches, refetch redundante
- Cache eficiente → menos trabalho na renderização inicial
- Evita recriar lógica assíncrona em cada componente

---

### 8. Evite atualização de estado redundante

- Não faça múltiplos setState para atualizar partes relacionadas
- Prefira reducers para transições agrupadas
- Evite "cálculo derivado" guardado em estado (duplicação)

---

### 9. Use Suspense para isolar carregamentos sem bloquear o restante da UI

- Coloque Suspense em volta apenas da parte que realmente espera por dados
- Evite envolver a página inteira em um suspense global
- Combine suspense com streaming (SSR) quando possível

---

### 10. Use transições (startTransition) para updates não-urgentes

- Para buscas, filtros, tabelas pesadas
- Transições dizem ao react: "isso não é urgente, priorize input"

---

### 11. Monitore performance real com ferramentas adequadas

- Chrome Performance Profiles
- Lighthouse
- Web Vitals JS Library
- React Profiler
- RUM (Real User Monitoring) em produção
