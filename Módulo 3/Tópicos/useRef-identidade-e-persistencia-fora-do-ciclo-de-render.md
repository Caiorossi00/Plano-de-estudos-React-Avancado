# useRef: identidade e persistência fora do ciclo de render

`useRef` é um hook do React utilizado para armazenar um valor persistente entre renderizações sem causar uma nova renderização quando esse valor muda. Ele retorna um objeto imutável no formato `{ current: valor }`.

A principal ideia é a seguinte:

- Enquanto `useState` guarda dados **reativos** (que fazem o componente re-renderizar quando mudam), `useRef` guarda dados **mutáveis** (que o React ignora durante o ciclo de render).

Ou seja, o valor dentro de `ref.current` permanece o mesmo entre as chamadas da função do componente, o React não recria o objeto a cada renderização.  
Isso faz com que ele seja ideal para armazenar referências ou valores que precisam sobreviver a múltiplos renders.

---

Quando se pensa em estado, normalmente se pensa em dados que mudam e precisam aparecer na tela, e esse é exatamente o papel do `useState`.  
Por exemplo:

```js
const [count, setCount] = useState(0);
```

Cada vez que o `count` muda, o React re-renderiza o componente para refletir o novo valor visualmente.

Mas há valores que mudam, porém não fazem parte da interface, são dados "operacionais", usados só para controle interno, e é aqui que o `useRef` brilha.

O `useRef` é como uma gaveta de valor estável que:

- O React não monitora (não dispara renders)
- Mas você pode abrir e alterar quando quiser
- E o conteúdo persiste entre renders

---

### Mas por que as alterações do useRef não disparam re-render?

O `useRef` cria um objeto persistente com uma propriedade `.current`, que o React nunca rastreia como parte do ciclo de renderização.  
Isso significa que, quando você altera `ref.current`, o valor é atualizado mutavelmente, sem passar pelo mecanismo de reconciliação do React.  
Em outras palavras, o React não "sabe" que algo mudou dentro da ref, porque ela não faz parte do estado, e isso é intencional.  
Refs são projetadas para armazenar dados que não afetam a interface, como elementos do DOM, contadores internos ou valores de controle.  
Essa característica evita renders desnecessários e mantém a performance previsível.

---

Em geral, usamos `useRef` em vez de `useState` quando precisamos armazenar informações que mudam ao longo do tempo, mas **não impactam o que é renderizado**.  
Isso inclui valores auxiliares usados em cálculos, controle de timers, manipulação de eventos, integração com APIs externas ou referência direta a elementos do DOM.  
Alterar um estado (`useState`) notifica o React para atualizar a interface, enquanto atualizar uma ref (`useRef.current = ...`) ocorre de forma silenciosa, sem disparar o ciclo de renderização.  
Essa distinção é essencial para manter a performance e a previsibilidade do componente: **useState para dados visuais, useRef para dados operacionais**.

---

Quando alteramos o valor de `ref.current`, a mudança acontece apenas em memória, "por baixo dos panos", o React não detecta e nem reage a ela.  
Isso acontece porque o objeto retornado por `useRef` é estável e não faz parte do ciclo reativo do React.  
Em outras palavras, o React não "observa" o que acontece dentro do `ref.current`.
