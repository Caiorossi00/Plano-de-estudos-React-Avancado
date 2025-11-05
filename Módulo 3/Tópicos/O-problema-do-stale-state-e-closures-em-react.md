# O problema do stale state e closures em React

O termo **stale state** (estado "velho", "obsoleto") descreve situações em que uma função dentro do React usa uma versão antiga do estado, mesmo que o estado já tenha mudado.  
Isso acontece por causa das **closures** (funções que “fecham” sobre variáveis do momento em que foram criadas).

Em React, cada renderização é uma **fotografia isolada**, com seus próprios valores de estado e props.  
Quando você cria uma função dentro de um componente (ou dentro de um hook), ela **captura os valores da renderização atual**.  
Mesmo que o estado mude depois, aquela função continua “presa” aos valores antigos.

---

## Exemplo

````jsx
function Contador() {
  const [count, setCount] = useState(0);

  function logCount() {
    console.log(count);
  }

  useEffect(() => {
    const interval = setInterval(logCount, 1000);
    return () => clearInterval(interval);
  }, []);

  return <button onClick={() => setCount(count + 1)}>Aumentar</button>;
}
```

Mesmo clicando várias vezes no botão, o `console.log(count)` sempre mostra `0`.
Por quê?

Porque a função `logCount` foi criada na primeira renderização e a **closure dela “fechou” sobre o `count = 0`**.
Quando o estado muda, o componente re-renderiza, mas o intervalo existente continua chamando a versão antiga de `logCount`.

Esse intervalo é criado pela função nativa do JavaScript `setInterval`, que executa a função callback repetidamente, a cada X milissegundos.

---

## Onde está o problema

```jsx
useEffect(() => {
  const interval = setInterval(logCount, 1000);
  return () => clearInterval(interval);
}, []);
```

O `setInterval` está chamando a função `logCount()` a cada 1 segundo.
Mas como o `useEffect` foi executado só uma vez (por causa do `[]`), ele cria apenas um intervalo, **usando a versão de `logCount` que existia na primeira renderização**.

Logo:

- Mesmo que o estado `count` mude depois
- O intervalo continua rodando com a função antiga, que lembra apenas do `count = 0`

---

## Por que isso acontece

O array de dependências `[]` diz ao React que o efeito **não depende de nenhum valor externo**, portanto ele deve ser executado **somente uma vez**, na montagem do componente.
O resultado é que o `setInterval` fica rodando indefinidamente com a **versão inicial da função**, presa à closure antiga, sem acesso ao estado atualizado.

---

## Como evitar stale state

Para evitar isso, é preciso informar ao React quando o efeito deve ser reexecutado, **adicionando dependências**, por exemplo `[count]` ou `[logCount]` — para que o `useEffect` recrie o intervalo sempre que esses valores mudarem.
Assim, a função usada dentro do intervalo passa a enxergar o estado mais recente.

Outra forma é usar a **função de atualização do estado**, que recebe o valor anterior como argumento:

```jsx
setCount(prev => prev + 1)
```

Ou usar **refs** para armazenar valores mutáveis sem depender da renderização.
Essas estratégias evitam que a lógica fique “presa” a versões antigas do estado, garantindo que os efeitos e callbacks do React sempre trabalhem com dados atualizados.

---

## Dependências e reexecuções

Em alguns casos, adicionar dependências ao `useEffect` resolve o problema do stale state, mas pode gerar **reexecuções desnecessárias** se o efeito for custoso — por exemplo, recriar intervalos, websockets ou assinaturas a cada atualização.

Nesses cenários, uma alternativa é usar **refs** para armazenar o valor mais recente de uma variável sem depender da reatividade do estado, permitindo que o efeito permaneça estável enquanto ainda acessa dados atualizados.

É importante também manter a **lista de dependências correta**:
se faltar alguma variável usada dentro do efeito, o React não conseguirá sincronizar a lógica com o estado atual, gerando comportamentos inconsistentes.

---


Em essência, o problema de **stale state** é uma **quebra na reatividade**:
o efeito ou callback deixa de reagir ao estado real do componente.

Entender esse vínculo entre **closures**, **ciclo de renderização** e **dependências** é essencial para escrever hooks previsíveis e evitar bugs sutis em comportamentos assíncronos ou contínuos.
````
