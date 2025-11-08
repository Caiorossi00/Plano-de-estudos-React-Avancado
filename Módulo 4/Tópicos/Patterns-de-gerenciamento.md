# Patterns de gerenciamento

Os **patterns de gerenciamento de estado** representam diferentes formas de organizar e compartilhar dados entre componentes React, dependendo da escala, complexidade e frequência de atualização do estado. A escolha correta evita acoplamento, duplicação e re-renderizações desnecessárias.

---

### 1. Lifting state up

É o padrão mais simples: quando dois ou mais componentes precisam compartilhar o mesmo dado, o estado é movido (levantado) para o ancestral comum e passado como prop.  
Funciona bem em árvores pequenas, garantindo uma única fonte de verdade, mas pode gerar **prop drilling** se a árvore crescer demais.

**Problema se mal planejado:** excesso de props atravessando muitos níveis e perda de clareza sobre onde o estado é controlado.

---

### 2. Prop drilling

É o ato de passar dados manualmente de um componente pai para um filho distante, Os patterns de gerenciamento de estado representam diferentes formas de organizar e compartilhar dados entre componentes React, dependendo da escala, complexidade e frequência de atualização do estado. A escolha correta evita acoplamento, duplicação e re-renderizações desnecessárias

1. Lifting state up
   É o padrão mais simples, quando dois ou mais componentes precisam compartilhar o mesmo dado, o estado é movido (levantado) para o ancestral comum e passado como prop
   Funciona bem em árvores pequenas, garantindo uma única fonte de verdade, mas pode gerar prop drilling se a árvore crescer demais.
   Problema se mal planejado: excesso de props atravessando muitos níveis e perda de clareza sobre onde o estado é controlado

2. Prop drilling
   É o ato de passar dados manualmente de um componente pai para um filho distante, atravessando intermediários que não usam o dado.
   Acessível em estruturas rasas, mas torna-se difícil de manter em aplicações grandes, pois qualquer mudança na hierarquia exige ajustar várias props intermediárias
   Problema se mal planejado: aumento da complexidade, acoplamento e maior risco de erros de sincronização

3. Context Splitting
   Quando o context API é usado para evitar prop drilling, surge outro risco: o custo de re-renderização.
   Contextos grandes, com muitos valores e consumidores, podem causar re-renders em toda a aplicação sempre qua o valor muda.
   A estratégia de context splitting é dividir o contexto em partes menores, cada uma cuidando de um domínio (ex: AuthContext, ThemeContext, CartContext).
   Problema se mal planejado: Se for dividido demais, o código pode ficar fragmentado e difícil de compreender; se for dividido de menos, gera re-renders desnecessários

Como escolher o pattern adequado?

- Aplicações pequenas
  Use lifting state e props (simples e previsível)
- Aplicações médias
  Introduza Context Api com divisão estratégica (context splitting)
- Aplicações grandes ou complexas
  Adote gerenciadores externos como Redux, Zustand ou jotai, que isolam o estado global e otimizam performance

A escolha ideal é equilibrar simplicidade e escalabilidade: quanto mais compartilhado e dinâmico for o estado, mais você tende a migrar de lifting stat up -> context -> gerenciador externo atravessando intermediários que não usam o dado.  
Acessível em estruturas rasas, mas torna-se difícil de manter em aplicações grandes, pois qualquer mudança na hierarquia exige ajustar várias props intermediárias.

**Problema se mal planejado:** aumento da complexidade, acoplamento e maior risco de erros de sincronização.

---

### 3. Context splitting

Quando o **Context API** é usado para evitar prop drilling, surge outro risco: o custo de re-renderização.  
Contextos grandes, com muitos valores e consumidores, podem causar re-renders em toda a aplicação sempre que o valor muda.  
A estratégia de **context splitting** é dividir o contexto em partes menores, cada uma cuidando de um domínio (ex: AuthContext, ThemeContext, CartContext).

**Problema se mal planejado:** se for dividido demais, o código pode ficar fragmentado e difícil de compreender; se for dividido de menos, gera re-renders desnecessários.

---

### Como escolher o pattern adequado?

- **Aplicações pequenas:** use _lifting state up_ e props (simples e previsível).
- **Aplicações médias:** introduza _Context API_ com divisão estratégica (_context splitting_).
- **Aplicações grandes ou complexas:** adote gerenciadores externos como **Redux**, **Zustand** ou **Jotai**, que isolam o estado global e otimizam performance.

A escolha ideal é **equilibrar simplicidade e escalabilidade**: quanto mais compartilhado e dinâmico for o estado, mais você tende a migrar de _lifting state up → context → gerenciador externo_.
