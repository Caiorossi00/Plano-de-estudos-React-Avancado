# Paradigma Imperativo vs Declarativo

## Paradigma Imperativo

No paradigma **imperativo**, escrevemos **passo a passo o que deve acontecer** — de forma **algorítmica**.

### Exemplo do mundo real

Para o preparo de um café:

> "Pegue a chaleira, encha de água, aqueça até ferver, coloque o pó, coe, despeje na xícara."

Você descreve **as ações necessárias**, não apenas o resultado final.

### Exemplo em JavaScript

```js
const button = document.createElement("button");
button.textContent = "Clique aqui";
button.addEventListener("click", () => {
  alert("Olá!");
});
document.body.appendChild(button);
```

Você diz explicitamente como criar, inserir e reagir ao botão.

No paradigma **declarativo**, você descreve o resultado desejado e o sistema decide como chegar lá.

### Exemplo do mundo real: café

> "Quero um café pronto."

Você apenas declara a intenção; quem executa sabe o processo interno.

### Exemplo em React

```jsx
function App() {
  return <button onClick={() => alert("Olá")}>Clique aqui</button>;
}
```

Você apenas declara: quero um botão que mostre um alerta ao clicar.  
O React cuida do **como**: quando criar, como colocar, como atualizar.

---

Um ponto importante é observar que o paradigma declarativo só é viável quando a linguagem ou framework fornece uma camada que abstrai o imperativo.  
Por exemplo, em **C**, você precisaria controlar tudo: alocação de memória, fluxo, lógica de renderização — é um ambiente puramente imperativo.

Em **React**, a biblioteca implementa toda essa lógica invisível.  
O declarativo é, portanto, um **nível de abstração acima do imperativo**, pois se apoia nele.

---

Quando programamos em um modelo declarativo, precisamos pensar como o navegador:

- Criar elementos
- Inserir nós
- Remover o que mudou
- Atualizar somente as partes específicas

Com a declaração declarativa do React, todas essas decisões são feitas automaticamente via **DOM Diffing**, por baixo dos panos.
