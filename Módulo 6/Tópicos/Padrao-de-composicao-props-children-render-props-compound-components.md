# Padrão de composição (props.children, render props, compound components)

No react, composição é a forma de contruir interfaces reutilizáveis e flexívei sem depender de herança. Esses padrões determinam como um componente recebe conteúdo ou comportamento externo, e cada abordagem resolve problemas diferentes de organização e escalabilidade

1. props.children (composição direta)
   O padrão mais básico é o uso de props.children. Ele permite que um componente receba conteúdo arbitrário dentro dele, tornando-o genérico e altamente flexível. É ideal para containers, layouts e wrappers que não definem a estrutura interna, apenas o "invólucro". Ele funciona como um slot que aceita qualquer JSX passado pelo componente pai

Ex: function Card({ children }) {
return (

<div style={{ padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
{children}
</div>
);
}

Uso:
<Card>

  <h2>Produto</h2>
  <p>Descrição do produto...</p>
  <button>Comprar</button>
</Card>

2. Render props (função que define UI ou comportamento)
   Render props são usadas quando o componente precisa expor lógica, mas permitir que o consumidor escolha o que renderizar. Nesse padrão, o componente recebe uma função como prop, e essa função recebe dados internos (como estado ou coordenadas do mouse) e retorna o JSX desejado.
   Esse padrão permite que a lógica seja centralizada e compartilhada entre vários componentes, garantindo reutilização sem acoplamento visual. O consumidor tem total controle sobre a interface
   Render props surgiram como solução para compartilhar lógica antes de hooks customizados existirem. Em projetos modernos, raramente são necessárias, mas ainda fazem sentido quando o visual precisa ser completamente configurável, sem reescrever a lógica.

Ex:
function MouseTracker({ render }) {
const [pos, setPos] = useState({ x: 0, y: 0 });

function handleMove(e) {
setPos({ x: e.clientX, y: e.clientY });
}

return (

<div onMouseMove={handleMove} style={{ height: 200, background: "#eee" }}>
{render(pos)}
</div>
);
}

Uso:
<MouseTracker
render={({ x, y }) => (

<p>Posição do mouse: {x}, {y}</p>
)}
/>

3. Compound components (componentes que trabalham em conjunto)
   Compound components seguem o padrão onde componentes relacionados compartilham estado por meio de contexto interno. O componente pai controla toda a lógica (como qual tab está ativa) e os componentes filhos acessam esse estado automáticamente.
   Esse padrão permite criar APIs expressivas e organizadas, como <Tabs>, <Tabs.List>,<Tabs.Trigger>,<Tabs.Panel>. O usuário monta a interface combinando essas partes de maneira declarativa, sem lidar com os detalhes internos.
   Ele resolve problemas de escalabilidade ao criar componentes complexos extensíveis sem exigir dezenas de props, evitando config pesada e melhorando a legibilidade da API.

Ex:
Componente principal:
const TabsContext = createContext();

function Tabs({ children }) {
const [active, setActive] = useState(0);

return (
<TabsContext.Provider value={{ active, setActive }}>

<div>{children}</div>
</TabsContext.Provider>
);
}

Subcomponentes:
function TabList({ children }) {
return <div style={{ display: "flex", gap: 10 }}>{children}</div>;
}

function Tab({ index, children }) {
const { active, setActive } = useContext(TabsContext);

return (
<button
onClick={() => setActive(index)}
style={{ fontWeight: active === index ? "bold" : "normal" }} >
{children}
</button>
);
}

function TabPanel({ index, children }) {
const { active } = useContext(TabsContext);
return active === index ? <div>{children}</div> : null;
}

Uso:
<Tabs>
<TabList>
<Tab index={0}>Descrição</Tab>
<Tab index={1}>Avaliações</Tab>
</TabList>

<TabPanel index={0}>Conteúdo da descrição</TabPanel>
<TabPanel index={1}>Conteúdo das avaliações</TabPanel>
</Tabs>

Como cada padrão resolve problemas diferentes?

- children resolve flexibilidade estrutural, o componente não precisa saber o que renderiza, é apenas um recipiente
- Render props resolve a personalização profunda de comportamento, a lógica é compartilhada, a UI é totalmente controlada pelo consumidor
- Compound components resolvem escalabilidade em componentes complexos. Eles possibilitam APIs ricas com múltiplas partes que funcionam juntas

Cada padrão trata um tipo específico de composição: conteúdo, comportamento ou estrutura conjunta.
A escolha depende da necessidade de controle: mínimo (children), médio (render props) ou máximo (compound components com estado compartilhado)
