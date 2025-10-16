## **MÓDULO 4 – Estado, dados e arquitetura – Detalhamento**

### **1. Tipos de estado: local, derivado, global e remoto**

**Conceitos a aprofundar:**

- **Local state**: estado interno do componente (useState, useReducer).
- **Derivado**: calculado a partir de outros estados, não precisa ser armazenado.
- **Global**: compartilhado entre vários componentes (Context, Redux, Zustand).
- **Remoto**: estado que depende de APIs ou backend, geralmente assíncrono.

**Perguntas-guia:**

- Quando usar estado local vs global?
- Quais problemas surgem se derivar estado manualmente em vez de calcular?
- Como gerenciar a consistência entre estado remoto e UI local?

---

### **2. Fonte de verdade e estado derivado**

**Conceitos a aprofundar:**

- **Fonte de verdade**: único lugar que contém o valor real de uma informação.
- Evitar duplicação de estado em múltiplos lugares.
- Estado derivado: não armazenar dados que podem ser calculados a partir da fonte de verdade.

**Perguntas-guia:**

- Como a definição correta de fonte de verdade previne inconsistências?
- Exemplos de estado derivado e como calculá-lo sem re-render desnecessário.
- Qual impacto da duplicação de estado na manutenção e performance?

---

### **3. Sincronização de estados entre componentes**

**Conceitos a aprofundar:**

- Prop drilling: passagem de props de pai para filho.
- Lifting state up: subir o estado para o ancestral comum para sincronização.
- Padrões híbridos: combinação de local + global + derived.

**Perguntas-guia:**

- Como manter múltiplos componentes sincronizados sem quebrar isolamento?
- Quando prop drilling é aceitável e quando deve ser evitado?
- Como o React garante consistência entre componentes reativos?

---

### **4. Context API: conceito, escopo e custo de renderização**

**Conceitos a aprofundar:**

- Permite **compartilhar estado global sem prop drilling**.
- Cada atualização de contexto **dispara re-render nos consumidores**, cuidado com performance.
- Escopo de context: granularidade e divisão estratégica.

**Perguntas-guia:**

- Qual é o trade-off entre simplicidade e custo de renderização ao usar Context?
- Como dividir contextos para reduzir re-renderizações desnecessárias?
- Diferença entre Context e gerenciamento externo como Redux?

---

### **5. Patterns de gerenciamento**

**Conceitos a aprofundar:**

- **Lifting state up**: centralizar estado para sincronização.
- **Prop drilling**: passar dados explicitamente por hierarquia.
- **Context splitting**: dividir contextos para minimizar impacto de updates.
- Analisar cenários de escalabilidade e manutenção.

**Perguntas-guia:**

- Como escolher o pattern adequado em uma árvore de componentes grande?
- Quais problemas surgem em cada pattern se não forem planejados?

---

### **6. Gerenciamento externo (Redux, Zustand, React Query)**

**Conceitos a aprofundar:**

- Compreender **conceito, fluxo e filosofia**, sem necessidade de implementar.
- Redux: store global, actions, reducers, dispatch, imutabilidade.
- Zustand: gerenciamento global minimalista, baseado em hooks.
- React Query: sincronização de estado remoto, cache e invalidação.

**Perguntas-guia:**

- Qual a diferença conceitual entre gerenciar estado local vs externo?
- Quando vale a pena introduzir uma ferramenta externa de gerenciamento?
- Como o gerenciamento externo se integra à filosofia de React declarativo?

---

### **7. Cache, sincronização e invalidação de dados**

**Conceitos a aprofundar:**

- Quando armazenar dados em cache no cliente faz sentido.
- Estratégias de invalidação: manual, TTL, otimistic updates.
- Sincronização entre cache local e backend remoto.

**Perguntas-guia:**

- Quais problemas surgem sem estratégia de invalidação?
- Como o React Query ou SWR resolvem esses problemas conceitualmente?
- Diferença entre cache de UI e cache de servidor.

---

### **8. “Server state” vs “UI state”**

**Conceitos a aprofundar:**

- UI state: estado puramente local, não precisa do backend.
- Server state: estado dependente de dados remotos, assíncrono.
- Estratégias diferentes para cada tipo, impactando render e cache.

**Perguntas-guia:**

- Quais problemas surgem se tratar server state como UI state?
- Como separar mentalmente os fluxos de cada tipo de estado?
- Impacto na performance e consistência da UI.

---

### **9. Estratégias para evitar re-renderizações desnecessárias**

**Conceitos a aprofundar:**

- Memoização (`useMemo`, `React.memo`) para componentes e cálculos pesados.
- Divisão granular de Contexts e componentes isolados.
- Evitar atualização de estado redundante.
- Entender **quando o React decide re-renderizar** e o custo associado.

**Perguntas-guia:**

- Quais são os sinais de re-render excessivo em uma aplicação grande?
- Como isolar estados e contextos para reduzir re-renders?
- Quando memoização pode ser prejudicial ou desnecessária?

---

### **Resumo de estudo para este módulo**

1. Entender os **tipos de estado e suas funções** (local, derivado, global, remoto).
2. Compreender **fluxo de dados e fonte de verdade**, evitando inconsistências.
3. Mapear **patterns de gerenciamento de estado e sincronização**.
4. Refletir sobre **cache, server state, UI state e otimização de re-render**.
5. Responder mentalmente ou em anotações **as perguntas-guia** para internalizar arquitetura e decisões de design.
