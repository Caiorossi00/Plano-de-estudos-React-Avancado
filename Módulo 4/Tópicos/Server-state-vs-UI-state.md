# Server state vs UI state

O **UI state** (estado de interface) representa tudo que existe apenas no cliente e não depende de um backend, como o estado de um modal aberto ou a aba selecionada em uma interface.  
Ele é totalmente controlado pelo React e armazenado via `useState` ou `useReducer`, e só interessa à experiência do usuário.

Já o **server state** representa dados vindos de uma fonte externa, geralmente uma API.  
Ele é **assíncrono**, pode mudar fora do controle da aplicação (por exemplo, se outro usuário alterar os dados no servidor), e precisa lidar com **fetching**, **erro**, **cache** e **sincronização**.  
**Exemplos:** lista de produtos, perfil de usuário, pedidos, mensagens.

---

### Erro comum: tratar dados de API como estado local

```jsx
const [produtos, setProdutos] = useState([]);
useEffect(() => {
  fetch("/api/produtos")
    .then((r) => r.json())
    .then(setProdutos);
}, []);
```

Esse código até funciona, mas ele não lida com **revalidação, erro, cache ou atualização externa**.  
Se outro usuário alterar os produtos no servidor, o seu estado local ficará **defasado (stale)**.  
Além disso, cada componente que fizer `fetch` repetirá a mesma lógica, desperdiçando requisições e piorando a performance.

---

### Separar os dois corretamente traz algumas vantagens, como:

- Evita re-renders desnecessários
- Garante a sincronização automática com o backend (via cache e invalidação)
- Permite uma arquitetura previsível, onde o React lida com o fluxo da interface e a ferramenta de dados cuida da comunicação com o servidor

Ferramentas como **React Query** e **SWR** são projetadas justamente para gerenciar _server state_.  
Elas mantêm **cache local**, **revalidam automaticamente** quando o usuário volta à tela e **garantem consistência** entre o cliente e o servidor.  
Enquanto isso, o **UI state** permanece controlado por React puro (`useState`, `useReducer`), sem complexidade extra.

---

### Mas como fazer de maneira correta?

Segue um exemplo de gerenciamento de _server state_ com **React Query**:

```jsx
import { useQuery } from "@tanstack/react-query";

function ListaDeProdutos() {
  const {
    data: produtos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["produtos"],
    queryFn: async () => {
      const res = await fetch("/api/produtos");
      if (!res.ok) throw new Error("Erro ao buscar produtos");
      return res.json();
    },
    staleTime: 1000 * 60 * 5, // 5 minutos de cache
  });

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar produtos</p>;

  return (
    <ul>
      {produtos.map((p) => (
        <li key={p.id}>{p.nome}</li>
      ))}
    </ul>
  );
}
```

No primeiro exemplo de código nesse tópico, os dados do servidor foram tratados como estado local, usando useState e useEffect, para buscar produtos manualmente. Embora funcione, esse padrão ignora conceitos fundamentais do server state, como cache, revalidação e sincronização automática. Isso faz com que o estado local possa ficar desatualizado e gera código repetitivo em diferentes componentes

Já no exemplo com react query, o server state é tratado de forma declarativa: a biblioteca lida com o ciclo de vida dos dados (fetch, erro, cache, revalidação) e mantém o estado sincronizado entre o cliente e o servidor. O componente nãpo precisa mais controlar o fluxo manualmente, ele apenas declara que quer exibir os produtos, e o reqct query garante que os dados estejam atualizados. Assim, o react continua responsável pelo UI state enquanto o server state é abstraído por uma ferramenta que entende suas particularidades assíncronas e mutáveis. Essa separação deixa o código mais previsível, escalável e performático
