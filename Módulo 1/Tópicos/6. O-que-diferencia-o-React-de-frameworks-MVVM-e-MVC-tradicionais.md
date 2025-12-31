# O que diferencia o React de frameworks MVVM/MVC tradicionais

## **MVC – Separação manual e explícita**

No modelo **MVC (Model–View–Controller)**, cada parte do sistema tem uma responsabilidade clara:

- **Model:** guarda os dados — por exemplo, a lista completa de produtos.
- **View:** exibe os dados na tela — a lista filtrada visível ao usuário.
- **Controller:** recebe as ações do usuário (como digitar no campo de busca), processa a lógica e decide o que mostrar.

Em um filtro de busca, quando o usuário digita algo, o **Controller** escuta o evento de digitação, filtra os dados do **Model** e manda para a **View** renderizar o novo resultado.  
Ou seja, a atualização da tela acontece **porque o Controller mandou**, de forma **imperativa e controlada**.

Esse padrão é mais verboso, mas dá clareza sobre “quem faz o quê”.

---

## **MVVM – Atualização automática (two-way data binding)**

No **MVVM (Model–View–ViewModel)**, a ideia é que a **View** e o **Model** fiquem sincronizados automaticamente.  
A camada do **ViewModel** funciona como um “espelho inteligente” dos dados: se o usuário altera algo na interface (como digitar uma letra no campo de busca), o modelo é atualizado automaticamente, e vice-versa.

Assim, a **View** se atualiza **sem que o programador precise escrever a lógica manualmente**.  
No filtro de busca, isso significa que a cada letra digitada, a lista de resultados já é filtrada em tempo real, porque a view está **“vinculada”** ao dado.

Esse comportamento é comum em frameworks como Angular e Vue, com o chamado **two-way data binding** (`v-model` ou `ngModel`), mas tem o custo de ser mais difícil rastrear o fluxo — às vezes não fica claro _de onde veio a mudança no dado_.

---

## **React – UI como função do estado (one-way data flow)**

O React adota um modelo diferente: a UI é apenas uma **função pura do estado**.  
Não existe uma ligação automática entre input e dados.  
Quando o usuário digita algo no campo de busca, **você decide manualmente** quando e como atualizar o estado — usando, por exemplo, `useState`.

O React então **recalcula a interface** com base no novo estado.  
Ou seja, o fluxo é sempre **unidirecional**:  
o usuário gera um evento → o estado é atualizado → a UI se atualiza com base nesse estado.

No filtro de busca, o input chama `setBusca(e.target.value)` e a lista renderiza `{produtos.filter(p => p.includes(busca))}`.  
Não há vínculo automático, mas há **previsibilidade total** — o estado é a única fonte de verdade, e a UI é derivada dele.

Antes do react, a maioria dos frameworks seguia o padrão MVC (model-view-controller) ou MVVM (model-view-viewmodel)

MVC
O padrão MVC separa uma aplicação em três camadas principais, cada uma com uma responsabilidade específica

1. Model (modelo) - É a fonte dos dados e das regras de negócio, ex: buscar produtos de uma api, salvar no banco, validar campos
2. View (visão) - É a interface que o usuário vê e interage, ex: o HTML que mostra os produtos na tela
3. Controller (controlador) - Faz a ponte entre o model e a view - Ele recebe eventos da interface (como um clique), altera o model e atualiza o view

exemplo em código

```text
// Model
let contador = 0;

// View
function render() {
  document.getElementById('app').textContent = contador;
}

// Controller
document.getElementById('btn').addEventListener('click', () => {
  contador++;
  render();
});

render();
```

**MVVM (Model–View–ViewModel)**

O MVVM surgiu como uma evolução do MVC, muito usado em frameworks como Angular, Vue e Knockout:

1. **Model:** ainda é a camada dos dados.
2. **View:** continua sendo a interface visual.
3. **ViewModel:** substitui o controller, mas com uma diferença importante: mantém um espelho reativo do estado da view.

O MVVM introduz o **two-way data binding**, ou seja, quando o model muda, a view muda automaticamente.

**Exemplo em código:**

```javascript
// ViewModel com two-way binding
let nome = observable("Caio");

nome.subscribe((novoValor) => {
  document.getElementById("titulo").textContent = novoValor;
});

// Quando o usuário digita algo:
document.getElementById("input").addEventListener("input", (e) => {
  nome.set(e.target.value);
});
```

Se o `nome` mudar no código, o input é atualizado automaticamente.  
Se o usuário digitar no input, o Model muda também.

Isso é **bidirecional (two-way)** — funciona bem em aplicações pequenas, mas pode gerar **complexidade e bugs** em grandes sistemas, porque as mudanças podem vir de vários lugares ao mesmo tempo.

---

O **MVC** separa responsabilidades, mas exige controle manual da sincronização entre dados e interface.  
O **MVVM** automatiza isso com **two-way binding**, mas sacrifica previsibilidade.  
O **React** elimina o intermediário e o two-way binding, tratando a **UI como uma função pura do estado**, tornando o fluxo de dados **unidirecional e mais fácil de entender**.

---

O React elimina o controlador explícito. Nos frameworks tradicionais, existia uma camada de controle intermediária: o **Controller** no MVC e o **ViewModel** no MVVM, que decide o que a interface deve mostrar e quando atualizá-la.  
No React, essa camada desaparece, e a UI é uma função direta do estado:

```text
UI = f(estado)
```

Ou seja, não há mais um controlador mandando renderizar; o React simplesmente recalcula a interface toda vez que o estado muda. Isso traz **previsibilidade**: dado um estado, o resultado visual é sempre o mesmo.

Frameworks como Angular adotam **two-way data binding**: se o usuário altera um input, o modelo é atualizado automaticamente; se o modelo muda, a interface também muda. Isso é prático, mas pode causar comportamentos difíceis de rastrear, pois os dados fluem nos dois sentidos.

O React adota o **one-way data flow**, em que os dados fluem sempre do **pai para o filho** via props, e só mudam quando o estado é atualizado explicitamente. Isso dá **controle total** sobre onde e quando as mudanças ocorrem, tornando o fluxo previsível e fácil de depurar.

---

Enquanto o **MVC tradicional** atualiza o DOM real diretamente (re-renderizando ou alterando elementos manualmente), o React utiliza o **Virtual DOM**, uma representação virtual leve da árvore de elementos.  
Quando o estado muda, o React compara (_faz o diff_) entre o novo Virtual DOM e o anterior e aplica apenas as diferenças necessárias no DOM real.

Isso garante **eficiência e desempenho**, mesmo em aplicações com centenas de atualizações por segundo.

---

O React simplifica o modelo tradicional ao **remover a camada intermediária** entre lógica e interface.  
Ele transforma a UI em uma **função pura do estado**, com:

- **Fluxo de dados unidirecional**
- **Abstração do DOM via Virtual DOM**

Enquanto o MVC e o MVVM tentam sincronizar manualmente a lógica e a interface, o React unifica tudo isso dentro de um conceito simples:

> "Dado um estado, a interface é o resultado"
