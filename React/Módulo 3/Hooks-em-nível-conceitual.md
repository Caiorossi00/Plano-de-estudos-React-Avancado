## **MÓDULO 3 – Hooks em nível conceitual – Detalhamento**

### **1. Por que os hooks foram criados (substituição de classes)**

**Conceitos a aprofundar:**

- Limitações das classes: boilerplate, this binding, lógica de lifecycle espalhada.
- Hooks permitem **componentes funcionais com estado e side effects**.
- Filosofia: composição > herança, funções puras > métodos de instância.

**Perguntas-guia:**

- Quais problemas de classes foram resolvidos pelos hooks?
- Como hooks promovem composição e reutilização de lógica?
- Por que eles aumentam a previsibilidade da UI?

---

### **2. O ciclo de vida funcional: render → commit → cleanup**

**Conceitos a aprofundar:**

- Cada render cria **uma execução independente da função**.
- Commit phase aplica alterações no DOM.
- Cleanup executa quando o efeito ou componente é descartado.
- Diferença entre effects sincronizados vs assíncronos.

**Perguntas-guia:**

- Qual a diferença entre render phase e commit phase na prática de hooks?
- Quando o cleanup é chamado e por que é importante?
- Como isso substitui os métodos de lifecycle das classes (componentDidMount, etc.)?

---

### **3. Regras dos hooks (ordem, pureza e chamadas)**

**Conceitos a aprofundar:**

- Hooks devem ser chamados **sempre na mesma ordem** em todos os renders.
- Hooks só podem ser usados **em funções de componente ou hooks customizados**.
- Render functions devem ser puras: **sem side effects**.

**Perguntas-guia:**

- Por que a ordem dos hooks é crítica para o reconciler?
- Quais problemas surgem se você chamar hooks condicionalmente?
- Como essa regra garante integridade do estado entre renders?

---

### **4. `useState`: closures e estado persistente**

**Conceitos a aprofundar:**

- Estado persistente entre renders via **array de valores internos**.
- Cada render “fecha” sobre a versão correta do estado via closure.
- Relação entre setState e filas de atualização (batched updates).

**Perguntas-guia:**

- Como closures mantêm o valor correto do estado em renders futuros?
- Por que `setState` pode ser assíncrono dentro do mesmo evento?
- Quando usar função de atualização (`prevState => newState`) e por quê?

---

### **5. `useEffect`: sincronização com o mundo externo**

**Conceitos a aprofundar:**

- Executa efeitos após a renderização (commit phase).
- Pode ter dependências para controlar execução (array dependency).
- Cleanup executado antes de próximo efeito ou unmount.

**Perguntas-guia:**

- Por que useEffect não é chamado durante o render?
- Como evitar stale closures dentro de efeitos?
- Diferença entre efeitos de montagem, atualização e desmontagem.

---

### **6. `useRef`: identidade e persistência fora do ciclo**

**Conceitos a aprofundar:**

- Mantém referência persistente sem causar re-render.
- Útil para acessar elementos do DOM ou armazenar valores mutáveis entre renders.
- Diferença entre `ref.current` e estado (`useState`).

**Perguntas-guia:**

- Por que alterações em `useRef` não disparam re-render?
- Quais cenários se beneficiam de refs em vez de estado?

---

### **7. `useMemo` e `useCallback`: memoização e reatividade controlada**

**Conceitos a aprofundar:**

- `useMemo`: memoiza valores computados pesados.
- `useCallback`: memoiza funções para manter referência estável.
- Evita re-renderizações desnecessárias de filhos ou cálculos custosos.

**Perguntas-guia:**

- Como memoização ajuda no desempenho do React?
- Quais problemas surgem se você memoizar excessivamente ou sem critério?
- Diferença conceitual entre `useMemo` e `useCallback`.

---

### **8. `useReducer` e o padrão de isolamento de lógica**

**Conceitos a aprofundar:**

- Substitui `useState` para **estado complexo** ou várias transições.
- Baseado em reducers puros: `(state, action) => newState`.
- Facilita previsibilidade e teste de lógica de estado.

**Perguntas-guia:**

- Quando é preferível `useReducer` a `useState`?
- Como separar efeitos colaterais do reducer?
- Diferença entre reducer local e gerenciamento global (Redux, Zustand)?

---

### **9. Hooks customizados: composição e reutilização**

**Conceitos a aprofundar:**

- Permite **combinar hooks existentes** em abstrações reutilizáveis.
- Promove DRY e isolamento de lógica entre componentes.
- Segue as mesmas regras dos hooks nativos.

**Perguntas-guia:**

- Como hooks customizados aumentam coesão e previsibilidade?
- Qual é a diferença entre lógica compartilhada por HOC vs hooks customizados?

---

### **10. O problema do stale state e closures em React**

**Conceitos a aprofundar:**

- Closures podem “fechar” sobre estado antigo.
- Efeitos dependentes de variáveis externas podem ler valores desatualizados.
- Soluções conceituais: dependências em useEffect, funções de atualização em useState, refs.

**Perguntas-guia:**

- O que causa stale state em hooks?
- Como closures e ciclo de render influenciam stale state?
- Estratégias para prevenir leitura de estado desatualizado.

---

### **Resumo de estudo para este módulo**

1. Entender **o motivo da existência de cada hook** e suas restrições.
2. Mapear mentalmente **o ciclo de render, commit e cleanup** e onde cada hook se encaixa.
3. Refletir sobre **regras de uso, memoização, isolamento de lógica e stale state**.
4. Responder mentalmente ou em notas **as perguntas-guia**, internalizando conceitos profundos.
5. Consultar as fontes sugeridas (Abramov, Dodds, docs oficiais) e reforçar compreensão do funcionamento interno.
