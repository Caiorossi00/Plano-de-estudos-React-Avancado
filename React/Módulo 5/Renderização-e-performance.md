## **MÓDULO 5 – Renderização e performance – Detalhamento**

### **1. Ciclo de renderização e commit detalhado**

**Conceitos a aprofundar:**

- Render Phase: React calcula a nova árvore de Virtual DOM ou Fiber, **sem tocar no DOM real**.
- Commit Phase: alterações aplicadas ao DOM real, incluindo side effects (`useEffect`).
- Separação entre render e commit permite pausar, priorizar e controlar atualizações.

**Perguntas-guia:**

- O que acontece durante a render phase vs commit phase?
- Como essa separação melhora performance e previsibilidade?
- Qual o impacto de side effects no commit phase?

---

### **2. Identificação de causas de re-render**

**Conceitos a aprofundar:**

- Mudança de estado (`useState`, `useReducer`).
- Atualização de props de componente pai.
- Context atualizado.
- Diferença entre re-render necessário vs desnecessário.

**Perguntas-guia:**

- Como detectar componentes que re-renderizam desnecessariamente?
- Quais padrões de arquitetura ajudam a minimizar re-render?
- Como reconciliar necessidade de atualização com performance?

---

### **3. Reatividade granular e isolamento de componentes**

**Conceitos a aprofundar:**

- Componentes isolados re-renderizam apenas se **estado ou props mudarem**.
- Granularidade: dividir UI em componentes pequenos melhora performance.
- Relação entre isolamento e memoização.

**Perguntas-guia:**

- Qual o trade-off entre granularidade e complexidade de árvore de componentes?
- Como o isolamento reduz custo de renderização global?
- Quando quebrar componentes em unidades menores é contraproducente?

---

### **4. Mecanismo de memoização (`memo`, `useMemo`, `useCallback`)**

**Conceitos a aprofundar:**

- `React.memo`: memoiza componente funcional, evita render se props não mudarem.
- `useMemo`: memoiza valores calculados, reduz cálculos pesados.
- `useCallback`: memoiza funções, evita recriação desnecessária e re-render de filhos.

**Perguntas-guia:**

- Como decidir quando aplicar memoização?
- Qual a relação entre memoização e isolamento de componente?
- Riscos de memoização excessiva (overhead, complexidade)?

---

### **5. Lazy loading e divisão de código**

**Conceitos a aprofundar:**

- Importação de componentes apenas quando necessário (`React.lazy`).
- Divisão de código reduz tempo de carga inicial e melhora performance.
- Relação com Suspense e streaming.

**Perguntas-guia:**

- Quais problemas o lazy loading resolve em apps grandes?
- Diferença entre divisão de código automática vs manual.
- Impacto na experiência de navegação e tempo de pintura.

---

### **6. Concurrent rendering: scheduling, interrupção e prioridade**

**Conceitos a aprofundar:**

- Renderização concorrente permite **interromper e retomar updates**.
- Scheduler define prioridade: input > animação > background tasks.
- Time-slicing divide tarefas longas em fatias curtas para manter UI responsiva.

**Perguntas-guia:**

- Como o concurrent rendering evita travamentos da interface?
- Qual a relação com batching e event loop do JS?
- Diferença de comportamento entre blocking mode e concurrent mode.

---

### **7. Interação com Web Vitals e tempo de pintura**

**Conceitos a aprofundar:**

- Como métricas de performance (FCP, LCP, TTI, CLS) refletem experiência real do usuário.
- Relação entre renderizações React e tempo de pintura no navegador.
- Como arquiteturas React-friendly impactam essas métricas.

**Perguntas-guia:**

- Quais decisões de renderização afetam Web Vitals?
- Como dividir componentes ou usar memoização influencia performance percebida?
- Relação entre priorização de updates e métricas de UX.

---

### **Resumo de estudo para este módulo**

1. Entender **cada fase de render e commit**, identificando custo e side effects.
2. Mapear **causas de re-render e estratégias para isolá-las**.
3. Compreender **memoização, Suspense, lazy loading e concurrent rendering** como mecanismos de otimização.
4. Relacionar **performance do React com Web Vitals** e experiência do usuário.
5. Refletir sobre **trade-offs de granularidade, memoização e streaming**, anotando respostas para perguntas-guia.
