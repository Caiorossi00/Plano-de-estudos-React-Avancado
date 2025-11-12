# Estratégias para evitar re-renderizações desnecessárias

O react re-renderiza um componente sempre que seu estado interno muda ou quando ele recebe novas props.  
Essa re-renderização é parte do modelo declarativo, se mal controlada, ela pode causar lentidão perceptível, especialmente em árvores grandes ou componentes com cálculos pesados.

---

### 1. Memoização: React.memo, useMemo, useCallback

A memoização evita que um componente ou cálculo seja refeito se suas dependências não mudaram.

- **React.memo** memoriza a renderização de um componente funcional, o React só re-renderiza se as props mudarem.
- **useMemo**: evita recomputar valores caros entre renderizações; o cálculo só é refeito quando uma variável chave muda, não a cada renderização.
- **useCallback**: memoiza funções, útil quando passada como props — sem isso, toda renderização criaria uma nova referência de função, o que poderia forçar re-renderizações de componentes filhos.

---

### 2. Divisão granular de contexts

Quando um contexto muda, todos os componentes que o consomem re-renderizam, mesmo que só uma parte do dado tenha mudado.  
Por isso, é importante dividir contextos grandes em múltiplos contextos menores, cada um cuidando de uma responsabilidade específica:

- Ao invés de um `AppContext` com `user`, `theme` e `cart`, crie:
  - `UserContext`
  - `ThemeContext`
  - `CartContext`  
    Assim, mudanças no carrinho não forçariam re-renderizações desnecessárias no header, por exemplo.

---

### 3. Evitar atualizações de estado redundantes

Atualizações desnecessárias de estado são uma das principais causas de re-renders.

- Evite `setState` com o mesmo valor.
- Combine estados relacionados: ao invés de múltiplos `useState`, use um único objeto se eles sempre mudarem juntos.
- Atualize no nível certo da árvore, use _lifting state up_ apenas quando o estado realmente precisa ser compartilhado.

---

### 4. Entendendo o custo das renderizações

Renderizar não é um problema — o problema é renderizar mais do que o necessário.  
O React é eficiente em reconciliar a árvore, mas se o componente executar cálculos pesados, manipular o DOM manualmente ou passar muitas props, cada re-renderização pode se tornar cara.

- Use o **React DevTools Profiler** para identificar componentes que renderizam demais.
- Prefira componentes puros e props simples.
- Não abuse de `useMemo` e `useCallback`.

---

### 5. Quando a memoização é desnecessária ou prejudicial

Memoizar tudo é um erro.  
Usar `useMemo` e `useCallback` em operações simples, como cálculos triviais ou funções curtas, pode piorar a performance, já que o React precisa comparar dependências e armazenar as referências em memória.  
Só use memoização quando houver re-renderizações perceptíveis ou cálculos pesados.

---

### Como perceber sinais excessivos de re-render em uma aplicação grande?

Os principais sinais de que isso está acontecendo são:

- Lentidão perceptível na interface (lag ou travamentos)
- Logs de renderização aparecendo várias vezes sem motivo
- Re-renderizações em cascata (componentes filhos renderizando sem mudança de props)
- Atualizações globais disparando re-renders gerais
- Uso excessivo de estado em níveis altos da árvore

---

### Ferramentas que podem ajudar a identificar a baixa performance:

- **React DevTools Profiler**: mostra graficamente o tempo de renderização de cada componente
- **Why Did You Render**: biblioteca que avisa no console sempre que um componente renderiza sem mudança real de props
- **Console logs estratégicos**: rápidos e eficazes para detectar re-renders locais
