## **MÓDULO 1 – Filosofia e Paradigma do React (Detalhamento)**

### **1. Paradigma declarativo vs imperativo**

**Conceitos a aprofundar:**

- Diferença entre dizer _como fazer_ (imperativo) e _o que deve ser feito_ (declarativo).
- Exemplos clássicos: manipulação direta do DOM vs declarar a UI como função do estado.
- Vantagens do declarativo:
  - Previsibilidade
  - Manutenção mais fácil
  - Testabilidade e composição
- Como React implementa o declarativo: renderização baseada em _funções puras_ do estado.

**Perguntas-guia:**

- Por que é mais fácil raciocinar sobre UI declarativa?
- Quais problemas do modelo imperativo React resolve?
- Em que situações imperativo ainda é necessário (ex: refs, animações complexas)?

---

### **2. React como _UI derivada de estado_**

**Conceitos a aprofundar:**

- O estado é a _fonte de verdade_.
- A UI é uma função pura do estado: `UI = f(state)`.
- Não se manipula a UI diretamente; altera-se o estado e a UI atualiza automaticamente.
- Diferença entre estado local, derivado e global, conceitualmente.

**Perguntas-guia:**

- Como o conceito de “UI derivada de estado” influencia a arquitetura de um app?
- Quais problemas surgem quando a UI é manipulada fora do estado (side effects)?

---

### **3. Composição de componentes e árvore de renderização**

**Conceitos a aprofundar:**

- Componentes como blocos de construção da interface.
- Componentes podem ser compostos em hierarquias (árvore de renderização).
- Renderização é sempre recursiva: filhos → pais → árvore completa.
- Diferença entre composição vs herança de comportamento.

**Perguntas-guia:**

- Por que a composição é preferida à herança em React?
- Como a árvore de componentes afeta performance e atualização da UI?
- Como isolar responsabilidade de cada componente?

---

### **4. O papel da previsibilidade e da pureza de funções**

**Conceitos a aprofundar:**

- Funções puras: mesma entrada → mesma saída, sem efeitos colaterais.
- Por que React exige que a render function seja pura.
- Como pureza garante previsibilidade de render e facilita debugging.
- Relação entre pureza, memoização e re-renderização eficiente.

**Perguntas-guia:**

- Quais problemas acontecem se a render function tiver side effects?
- Como pureza ajuda em testes e manutenção de código?

---

### **5. Abstração entre dados → estado → interface**

**Conceitos a aprofundar:**

- Separação de responsabilidades: dados (backend/API), estado (frontend), UI (React).
- Fluxo unidirecional de dados: props → componente → estado local → UI.
- Diferença entre _fonte de verdade local_ e _global_.
- Como abstrair lógica de transformação de dados para manter a UI previsível.

**Perguntas-guia:**

- Quando é melhor derivar dados localmente e quando manter no estado global?
- Como essa abstração facilita a evolução do sistema?

---

### **6. O que diferencia o React de frameworks MVVM/MVC tradicionais**

**Conceitos a aprofundar:**

- MVC/MVVM: separação clássica de Model, View e Controller/ViewModel.
- React: elimina controlador explícito, transforma UI em função de estado.
- O papel do Virtual DOM como camada intermediária para reconciliar diferenças.
- Diferença entre two-way binding e one-way data flow.

**Perguntas-guia:**

- Por que React optou por one-way data flow?
- Quais problemas do MVVM o React resolve com seu modelo declarativo?

---

### **Resumo de estudo para este módulo**

1. Ler e refletir sobre os conceitos de **declarativo, estado derivado e composição**.
2. Analisar comparações entre **React e frameworks tradicionais (MVC/MVVM)**.
3. Responder mentalmente ou em anotações as **perguntas-guia**, internalizando conceitos.
4. Consultar os textos sugeridos e reforçar conceitos abstratos (Abramov, Kent C. Dodds, docs oficiais).
