# O ciclo de vida funcional render commit cleanup

Nos componentes funcionais, o React organiza a execução em fases bem definidas, que substituem antigos métodos de ciclos de vida das classes (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`).  
O fluxo pode ser resumido em três momentos principais:

### **Render Phase (fase de renderização)**

- O React chama a função do componente para descobrir o que deve ser exibido.
- Nenhuma alteração é feita no DOM ainda — é como uma simulação.
- Cada render é independente: ele cria uma nova versão da função com seus próprios valores de estado e props.
- Aqui, o React prepara o Virtual DOM com base no retorno do componente (JSX).

### **Commit Phase (fase da aplicação)**

- O React aplica as mudanças calculadas na Render Phase no DOM real.
- Essa é a única fase onde o navegador realmente exibe as alterações visuais.
- Após o commit, o React executa os efeitos (`useEffect`, `useLayoutEffect`), dependendo do tipo:
  - `useEffect` executa de forma **assíncrona** após o commit.
  - `useLayoutEffect` executa **sincronamente**, logo após a atualização do DOM, mas antes da tela ser repintada.

### **Cleanup Phase (fase da limpeza)**

- Antes de um novo efeito ser aplicado, o React executa a função de limpeza retornada por `useEffect`.
- Também ocorre quando o componente é removido do DOM (desmontado).
- Serve para cancelar timers, remover event listeners ou limpar assinaturas de APIs e sockets.

Cada render é uma nova execução da função, **não uma atualização da anterior**.  
O React separa a lógica de cálculo (**render**) da aplicação real (**commit**).  
O **cleanup** garante que efeitos antigos não causem vazamentos ou comportamentos inesperados.

---

### **Por que saber isso?**

Entender o ciclo de vida funcional do React — **render → commit → cleanup** — é essencial para compreender como e quando seu componente realmente “acontece” na tela.  
Esse conhecimento permite prever o comportamento do React ao atualizar estados, aplicar efeitos ou remover componentes.

Saber o que ocorre em cada fase evita erros comuns, como:

- Efeitos executando mais vezes do que o esperado.
- Dados “desatualizados” dentro de closures.
- Vazamentos de memória por falta de limpeza.

Além disso, compreender esse ciclo ajuda a **otimizar a performance**, reduzindo renderizações desnecessárias e garantindo que o código se mantenha previsível, eficiente e fácil de depurar.  
Em resumo, dominar o ciclo de vida é o que transforma o uso do React em **engenharia de interface de verdade**.
