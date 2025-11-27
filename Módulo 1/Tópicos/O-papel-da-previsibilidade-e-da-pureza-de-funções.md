# O papel da previsibilidade e da pureza de funções

## Função pura

Uma função pura é aquela que:

- Depende apenas de seus **argumentos** (não acessa variáveis externas mutáveis)
- Não causa **efeitos colaterais** (não modifica nada fora dela)
- Retorna sempre o **mesmo resultado para a mesma entrada**

**Exemplo de função pura:**

```javascript
function somar(a, b) {
  return a + b;
}
```

Exemplo de função impura:

```javascript
let total = 0;

function somar(a) {
  total += a;
  return total;
}
```

Aqui, o resultado depende do valor anterior de `total`, não apenas do argumento.

## Por que o React exige que a função de renderização seja pura?

Quando o React chama o componente (por exemplo `App()`), ele espera que:

- Dada a mesma entrada (**props** e **estado**)
- A função retorne a **mesma UI (JSX)**

Isso permite ao React prever exatamente o que a tela deve mostrar, sem depender de estados escondidos ou efeitos colaterais.

Se a função de renderização **não for pura** (por exemplo, modifica variáveis globais, altera o DOM diretamente ou busca dados dentro dela), o React **não consegue garantir consistência**, o que quebra sua capacidade de reconciliação.

---

## Efeitos colaterais (Side Effects)

No JavaScript puro, quase tudo é efeito colateral.  
Um efeito colateral é qualquer impacto que uma função cause fora do seu próprio escopo.  
Se uma função muda algo que não seja apenas seu retorno, ela está produzindo um efeito colateral.

**Exemplo:**

```javascript
let contador = 0;

function incrementar() {
  contador++;
  console.log("Contador:", contador);
}
```

## Efeitos colaterais e useEffect

No React, funções de renderização **precisam ser puras por padrão**.  
Mas aplicações reais precisam interagir com o mundo externo. Para isso, existe o **hook `useEffect`**.

O papel do `useEffect` é resolver o problema do React exigir que a renderização seja pura:

- Não pode modificar o DOM diretamente
- Não pode buscar dados dentro da função de renderização
- Não pode usar temporizadores ou logs que alterem o ambiente

Porém, aplicações reais precisam:

- Buscar dados de uma API
- Armazenar algo no `localStorage`
- Adicionar ou remover event listeners

O `useEffect` permite executar efeitos colaterais de forma **controlada**, **após o React renderizar a interface**.  
Ou seja, ele não interfere no cálculo da UI e ocorre apenas quando necessário, seguindo a ideia:

> "Deixe a renderização ser pura. Quando ela terminar, execute esse efeito com base no estado atual."

### O que colocar dentro do `useEffect`?

- Requisições assíncronas, como buscar dados de APIs ou carregar arquivos
- Manipulação do DOM fora do JSX
- Event listeners
- Temporizadores
- Sincronização com armazenamento externo
- Tudo que interage com o mundo externo ou que não pode ser determinístico pela renderização
