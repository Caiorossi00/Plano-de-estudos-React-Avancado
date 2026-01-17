## **MÓDULO 7 – React moderno e Server Components – Detalhamento**

### **1. Server Components: o que são e por que surgiram**

**Conceitos a aprofundar:**

- Componentes renderizados **no servidor**, enviados ao cliente como HTML/JSON leve.
- Reduz bundle enviado ao navegador e melhora performance inicial.
- Mantêm estado de render apenas no servidor, **sem interatividade direta**.
- Objetivo: dividir responsabilidade entre client e server, otimizar recursos.

**Perguntas-guia:**

- Quais problemas de performance o Server Component resolve?
- Como se diferenciam de Client Components tradicionais?
- Impacto no tamanho do bundle e tempo de carregamento inicial.

---

### **2. SSR, SSG, CSR e hidratação**

**Conceitos a aprofundar:**

- **SSR (Server-Side Rendering):** HTML renderizado no servidor por requisição.
- **SSG (Static Site Generation):** HTML pré-gerado em build time.
- **CSR (Client-Side Rendering):** renderização completa no navegador.
- **Hidratação:** ligar componentes React interativos ao HTML pré-renderizado.

**Perguntas-guia:**

- Quando SSR ou SSG é mais vantajoso que CSR?
- Como a hidratação funciona internamente no React?
- Impactos de SSR/SSG na experiência de usuário e SEO.

---

### **3. Transmissão de dados e boundaries entre client/server**

**Conceitos a aprofundar:**

- Boundary: pontos onde dados e componentes trocam contexto entre client e server.
- Dados do server: podem ser passados como props ou via streaming.
- Controle de estado: server components **não mantêm estado interativo**, client components sim.

**Perguntas-guia:**

- Como definir boundaries ideais entre client e server?
- Diferença entre estado server-only e estado client-only.
- Como evitar over-fetching ou dados duplicados?

---

### **4. Suspense for Data Fetching e streaming**

**Conceitos a aprofundar:**

- Suspense permite **pausar renderização enquanto dados chegam**, melhorando UX.
- Streaming: enviar pedaços da UI assim que estiverem disponíveis.
- Integração com Server Components: menor bloqueio da interface.

**Perguntas-guia:**

- Como Suspense altera o fluxo tradicional de render?
- Diferença entre Suspense para código e para dados.
- Quais problemas de UX e performance são resolvidos por streaming?

---

### **5. Limitações e padrões emergentes (Next.js 14/15, React 19)**

**Conceitos a aprofundar:**

- Algumas APIs não funcionam em server components (refs, state local interativo).
- Patterns emergentes: streaming progressivo, cache controlado, hooks compatíveis server/client.
- Integração com frameworks modernos (Next.js) para arquiteturas híbridas.

**Perguntas-guia:**

- Quais restrições importantes devem ser lembradas ao usar Server Components?
- Diferença de patterns entre versões Next.js 14 e 15.
- Como a arquitetura híbrida client/server muda decisões de design?

---

### **6. O futuro da renderização no React**

**Conceitos a aprofundar:**

- Tendência de **componentização distribuída** entre client/server.
- Crescente foco em **concurrent rendering e streaming**.
- Server Components como padrão emergente para grandes apps.

**Perguntas-guia:**

- Quais mudanças conceituais você precisa antecipar para apps futuros?
- Como novas versões do React impactam performance, bundle e UX?
- Quais conceitos aprendidos até agora se tornam críticos nesse cenário?

---

### **Resumo de estudo para este módulo**

1. Compreender **Server Components e sua função na separação client/server**.
2. Mapear **SSR, SSG, CSR e hidratação**, entendendo trade-offs e impactos em UX.
3. Analisar **boundaries, fluxo de dados e streaming** para performance otimizada.
4. Refletir sobre **limitações, patterns emergentes e futuro da renderização**.
5. Responder mentalmente ou em notas **as perguntas-guia**, consolidando visão de arquitetura moderna React.
