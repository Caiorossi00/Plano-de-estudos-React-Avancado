# Ciclo de renderização e commit detalhado

O processo de atualização de interface no react é dividido em duas fases principais:  
Render phase e commit phase  
Essa separação torna o react previsível, eficiente e capaz de otimizar performance, especialmente com o fiber architecture

---

### 1. Render phase (fase de renderização)

É a fase pura e sem efeitos colaterais

- O react: executa o componente novamente (chamando sua função)
- Calcula o virtual DOM
- Compara com a versão anterior (diffing) para teterminar o que mudou
- Cria uma lista de mudanças (mutations) que precisam ser aplicadas no DOM real

Nenhum acesso ou alteração no dom acontece aqui.  
Tudo acontece sem impactar a tela, é uma fase pura e interrompível.

---

### 2. Commit phase (fase de commit)

Depois de calcular o que precisa mudar, o react entra no commit

- Aplica as mudanças no DOM real
- Executa os efeitos colaterais (useEffect, useLayoutEffect)
- Atualiza refs e sincroniza o estado visual com o lógico

É o momento em que o usuário realmente vê a atualização na tela.

---

### Por que a separação importa?

Essa divisão permite que o react:

- Priorize atualizações, por exemplo, uma digitação é mais importante que um carregamento de lista
- Evite bloqueios de renderização, ele pode pausar e reagendar cálculos longos
- Melhore a experiência do usuário, exibindo sempre o que é mais relevante primeiro

---

### Os impactos dos side effects no commit

Hooks como `useEffect` e `useLayoutEffect` só são executados após o commit, pois eles interagem com o mundo externo (DOM, APIs, timers, etc).  
Isso garante que:

- O DOM já esteja atualizado antes de rodar o efeito
- Não haja inconsistência entre o estado lógico e a tela
