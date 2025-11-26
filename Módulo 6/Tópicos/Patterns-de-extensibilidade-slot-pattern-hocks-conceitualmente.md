# Patterns de extensibilidade (slot pattern, HOCs conceitualmente)

Em interfaces complexas, é comum que componentes precisem ser estendidos, personalizados ou combinados com comportamentos adicionais. O React, por adotar composição ao invés de herança, oferece dois padrões principais de extensibilidade: slot pattern e HOCs. Ambos resolvem problemas diferentes e possuem trade-offs importantes em termos de previsibilidade, testabilidade e manutenção.

## Slot Pattern

O slot pattern deriva diretamente da ideiad e composição. Ao invés de expor dezenas de props específicas (como headerComponent, leftIcon, actions, footerButtons, etc) o componente expões áreas customizáveis (slots) onde o consumidor pode injetar qualquer conteúdo. É como dar ao usuário pontos fixos de encaixe, mantendo a estrutura geral, mas permitindo personalização profunda. Esse padrão elimina configuração excessiva por props e torna o componente naturalmente extensível. Um modal, por exemplo, pode definir slots para título, corpo e ações. O padrão é ideal quando o componente é essecialmente estrutural e precisa permitir variação visual sem perder a coerência da API.

## HOCs (Higher-order Components)

Já os HOCs são um padrão mais antigo e poderoso, mas hoje menos usado, cuja função é acrescentar comportamento, não estrutura.  
Um HOC é uma função que recebe um componente e retorna outro, adicionando lógica, estado ou side effects. Antes dos hooks, essa era a principal forma de compartilhar lógica entre componentes. Padrões como conectar componentes a uma store global ou adicionar detecção de scroll, resize ou permissões eram implementados como HOCs. Eles ainda são úteis quando você precisa estender múltiplos componentes com o mesmo comportamento sem modificar a hierarquia nem a UI interna.  
HOCs têm desvantagens conhecidas: aumentam a profundidade da árvore, escondem o fluxo de props, dificultam debugging e podem gerar "wrapper hell". Por isso, foram amplamente substituídos por custom hooks, que compartilham lógica sem alterar a estrutura ou criar camadas artificiais.

## Escolha entre Slot Pattern e HOC

Ao decidir entre slot pattern e HOC, a pergunta central é: você precisa adicionar flexibilidade estrutural ou comportamento reutilizável?  
Slots resolvem personalização de UI, permitindo extensões visuais previsíveis.  
HOCs resolvem compartilhamento de comportamento, mas com mais custo de manutenção, por isso, hooks customizados são quase sempre preferíveis no react moderno.

## Filosofia

Em termos conceituais, o slot pattern representa composição, o coração da filosofia do React: componentes pequenos, previsíveis e combináveis.  
Jà os HOCs são uma forma de herança funcional, pois criam componentes derivados, adicionando capacidades por "envolvimento" em outra função. Embora não seja herança tradicional, a relação pai-filho fica menos explícita, o que pode comprometer previsibilidade e testabilidade.

Slot pattern é mais transparente, fácil de debugar, intuitivo para outros desenvolvedores e naturalmente alinhado com a manutenção de longo prazo. HOCs são poderosos, mas opacos, e devem ser reservados para cenários específicos onde hooks customizados não bastam (como integração com APIs externas de terceiros que expõe HOCs).

## Síntese

Em síntese, use composition (slot pattern) sempre que estiver lidando com estrutura e personalização de UI, use hooks customizados para lógica, use HOCs apenas quando não houver alternativa funcional mais moderna.

---

# Exemplos

## 1. Slot Pattern

Card com slots (Header, body, footer)

<!-- código -->

function Card({ children }) {
return (
<div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16 }}>
{children}
</div>
);
}

function CardHeader({ children }) {
return <div style={{ marginBottom: 8 }}>{children}</div>;
}

function CardBody({ children }) {
return <div style={{ marginBottom: 8 }}>{children}</div>;
}

function CardFooter({ children }) {
return <div style={{ marginTop: 16, textAlign: "right" }}>{children}</div>;
}

<!-- código -->

Uso:

<Card>
  <CardHeader>
    <h2>Produto: Tênis</h2>
  </CardHeader>

  <CardBody>
    <p>Descrição do produto...</p>
  </CardBody>

  <CardFooter>
    <button>Comprar</button>
  </CardFooter>
</Card>

---

## 2. Custom Hooks (padrão moderno pra lógica compartilhada)

<!-- código -->

function useContador(inicial = 0) {
const [valor, setValor] = useState(inicial);

function incrementar() {
setValor(v => v + 1);
}

function decrementar() {
setValor(v => v - 1);
}

return { valor, incrementar, decrementar };
}

<!-- código -->

Uso:
function Produto() {
const { valor: qtd, incrementar } = useContador();
return <button onClick={incrementar}>Adicionar ({qtd})</button>;
}

function Likes() {
const { valor, incrementar } = useContador();
return <p onClick={incrementar}>Likes: {valor}</p>;
}

---

## 3. HOC

<!-- código -->

function withLogger(Componente) {
return function Wrapper(props) {
useEffect(() => {
console.log(`Montou: ${Componente.name}`);
return () => console.log(`Desmontou: ${Componente.name}`);
}, []);

    return <Componente {...props} />;

};
}

<!-- código -->

Uso:
function Painel() {
return <h1>Painel</h1>;
}

const PainelComLog = withLogger(Painel);

// <PainelComLog /> agora loga automaticamente
