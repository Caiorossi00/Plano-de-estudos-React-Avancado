# Tipos de Estado: Local, derivado, global e remoto

Em uma aplicação React, compreender os **tipos de estado** é essencial para estruturar bem a arquitetura de dados e evitar bugs ou re-renderizações desnecessárias.  
O estado é o que dá "vida" à interface, definindo o que deve ser exibido em cada momento — mas ele pode existir em diferentes níveis de escopo e responsabilidade.

---

## Estado Local

O **estado local** é aquele que pertence a um único componente; ele controla apenas o comportamento interno.  
É criado com hooks como `useState` ou `useReducer` e deve ser usado sempre que a informação **não precisa ser compartilhada**.

**Exemplo:**

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Cliquei {count} vezes</button>
  );
}
```

Esse estado vive e morre junto com o componente, nenhum outro componente precisa saber dele.

## Estado derivado

O estado derivado é calculado a partir de outros estados ou props.  
Ele não deve ser armazenado com `useState`, pois isso cria redundância e possíveis inconsistências.  
Ao invés disso, ele deve ser derivado dinamicamente.

**Exemplo:**

**Errado:**

```jsx
const [total, setTotal] = useState(preco * quantidade);
```

**Certo:**

```jsx
const total = preco * quantidade;
```

Se preço ou quantidade mudarem, o total será recalculado automaticamente, sem necessidade de sincronizar manualmente.

## Estado global

O estado global é aquele que precisa ser compartilhados entre vários componentes. Ele pode ser gerenciado por ferramentas como Context API, Redux ou Zustand, dependendo da complexidade da aplicação.

**Exemplo:**

```jsx
const CarrinhoContext = createContext();

function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);
  return (
    <CarrinhoContext.Provider value={{ itens, setItens }}>
      {children}
    </CarrinhoContext.Provider>
  );
}
```

Estados globais devem ser usados com moderação, se tudo vira global, a aplicação perde isolamento e performance

## Estado remoto

O estado remoto vem de uma fonte externa, como uma API ou banco de dados. Ele é assíncrono e pode mudar fora do controle da aplicação, por isos requer sincronização e tratamento de carregamento e erro

**Exemplo:**

```jsx
function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/usuarios")
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando...</p>;
  return (
    <ul>
      {usuarios.map((u) => (
        <li key={u.id}>{u.nome}</li>
      ))}
    </ul>
  );
}
```

Em aplicações maiores, esse tipo de estado é melhor tratado com libs como React Query ou SWR, que automatizam cache, revalidação e sincronização
