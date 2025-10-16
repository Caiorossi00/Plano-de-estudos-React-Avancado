## **MÓDULO 6 – Composição e padrões de arquitetura – Detalhamento**

### **1. Padrão de composição (props.children, render props, compound components)**

**Conceitos a aprofundar:**

- `props.children`: permite **injetar conteúdo interno**, favorecendo flexibilidade.
- Render props: passar função como prop para **personalizar comportamento ou UI**.
- Compound components: conjunto de componentes relacionados **que compartilham estado ou contexto** de forma explícita.

**Perguntas-guia:**

- Como a composição promove reutilização e flexibilidade?
- Diferenças conceituais entre children, render props e compound components.
- Quais problemas cada padrão resolve em termos de escalabilidade?

---

### **2. Inversão de controle e abstração progressiva**

**Conceitos a aprofundar:**

- Inversão de controle: **o componente pai delega decisões ao filho** ou a funções externas.
- Abstração progressiva: construir componentes **genéricos e extensíveis**, expondo APIs flexíveis.
- Relação com princípios SOLID aplicados ao frontend (Single Responsibility, Open/Closed).

**Perguntas-guia:**

- Quando aplicar inversão de controle melhora flexibilidade?
- Como abstração progressiva ajuda na manutenção e extensão da UI?
- Diferença entre abstração bem aplicada e over-engineering.

---

### **3. Componentes controlados vs não controlados**

**Conceitos a aprofundar:**

- **Controlados**: estado é gerenciado externamente (props + onChange).
- **Não controlados**: estado interno gerenciado pelo próprio componente (refs).
- Trade-offs: previsibilidade vs simplicidade.

**Perguntas-guia:**

- Quando usar controlado vs não controlado?
- Impacto de cada abordagem na testabilidade e previsibilidade do componente.
- Como isso se relaciona com a filosofia de “fonte de verdade única”?

---

### **4. Patterns de isolamento: container/presentational, smart/dumb**

**Conceitos a aprofundar:**

- **Container/Presentational**: separar lógica de dados (container) da renderização (presentational).
- **Smart/Dumb**: mesmo conceito, componente “inteligente” manipula estado e lógica; “burro” apenas renderiza UI.
- Facilita manutenção, teste e reutilização.

**Perguntas-guia:**

- Qual o impacto desse isolamento na escalabilidade de uma aplicação?
- Como lidar com prop drilling quando separamos container/presentational?
- Diferença conceitual entre container/presentational e hooks customizados para lógica?

---

### **5. Prop drilling e patterns alternativos**

**Conceitos a aprofundar:**

- Passagem de props por múltiplos níveis da árvore (prop drilling).
- Alternativas: Context API, composition, hooks customizados, patterns de container/presentational.
- Avaliar custo de renderização e manutenção.

**Perguntas-guia:**

- Quando o prop drilling é aceitável e quando precisa de alternativa?
- Como balancear simplicidade vs acoplamento ao reduzir prop drilling?
- Diferença entre Context, composition e HOC na redução de drilling.

---

### **6. Patterns de extensibilidade (slot pattern, HOCs conceitualmente)**

**Conceitos a aprofundar:**

- **Slot pattern**: permite passar “partes” do componente para personalização.
- **HOCs (Higher-Order Components)**: componentes que recebem outro componente e retornam um novo, adicionando comportamento.
- Trade-offs: composição vs herança funcional.

**Perguntas-guia:**

- Como escolher entre slot pattern e HOC para estender componentes?
- Diferenças conceituais entre composição e herança funcional em React.
- Impacto na previsibilidade, testabilidade e manutenção.

---

### **7. Princípios de design componível**

**Conceitos a aprofundar:**

- Componentes devem ser **coesos, previsíveis e reutilizáveis**.
- Seguir princípios de:
  - Single Responsibility
  - Composição em vez de herança
  - Isolamento de efeitos colaterais
- Facilita escalabilidade e manutenção de aplicações grandes.

**Perguntas-guia:**

- Como identificar componentes que violam princípios de design componível?
- Quais trade-offs existem entre generalização e simplicidade?
- Como combinar padrões de composição, abstração e isolamento de forma equilibrada?

---

### **Resumo de estudo para este módulo**

1. Compreender **cada padrão de composição e extensão** e quando aplicá-los conceitualmente.
2. Entender **inversão de controle, abstração progressiva e isolamento de componentes**.
3. Mapear **trade-offs entre controlados/não controlados e prop drilling**.
4. Refletir sobre **princípios de design componível** e escalabilidade.
5. Responder mentalmente ou em notas **as perguntas-guia**, consolidando raciocínio sobre arquitetura React avançada.
