class CadastroFornecedorScreen extends Component {
  state = {
    loading: false,
    fornecedores: [],
  };

  componentDidMount() {
    this.buscarFornecedores();
  }

  buscarFornecedores = async () => {
    this.setState({ loading: true });
  };

  render() {
    return <div>...</div>;
  }
}

class - Define uma estrutura baseada em instância persistente.
Diferente de componentes funcionais, uma classe cria um objeto vivo na memória que mantém uma identidade própria durante todo o ciclo de vida da tela

CadastroFornecedorScreen - Nome da classe/componente.
Representa semanticamente a responsabilidade da tela dentro da aplicação

extends - Palavra-chave de herança do javascript.
Permite que a classe herde os comportamentos da classe pai.

Component - Classe base fornecida pelo react.
Contém os mecanismos internos necessários para:
-Ciclos de vida
-Gerenciamento de estado
-Integração com o reconciliador do React
Ao herdar de Component, a classe passa a ser reconhecida pelo react como um componente renderizável.

state = {
  loading: false
  fornecedores: [],
};

state - Objeto interno e persistente da instância.
Armazena dados mutáveis locais da tela.
Diferente de variáveis comuns, alterações no state notificam o react para atualizar a interface visual.

loading
Flag de controle visual.
Normalmente para indicar:
-Carregamento
-Bloqueio de interface
-Exibição de spinners

fornecedores - Coleção inicial de dados na tela.
Neste caso, um array vazio representando a lista antes do carregamento da API

componentDidMount() {
  this.buscarFornecedores();
}

componentDidMount - Lifecycle method executado imediatamente após a montagem da tela no DOM.

Equivalente conceitual ao:
useEffect(() => {}, []);

É o local tradicional para:
-Chamadas HTTP (ele não concentra a lógica pesada da operação, apenas a menção e execução à função, por exemplo, this.buscarFornecedor())
-Inicializações
-Carregamento de dados
-Subscriptions

this.buscarFornecedores() - Disparo de um método pertencente à própria instância da classe.
O uso do this referencia o corpo persistente do corpo atual

buscarfornecedores = async () => {

buscarFornecedore - Método da instância responsável pela lógica de busca.
Centraliza o comportamento relcaionado ao carregamento dos fornecedores.

= async () => - Arrow function vinculada lexicamente à instância.
Evita perda de contexto do this, problema comum em classes antigas do javascript.
o async permite utilização de:
-await;
-Chamadas assíncronas
-Controle de fluxo assíncrono mais legível

this.setState({ loading: true })
setState - Método herdado de Component;
Responsável por:
-Atualizar o estado
-Notificar o react
-Agendar uma nova renderização
O react realiza uma mesclagem rasa (shallow merge) com o estado anterior.

{ loding: true } - Atualização parcial do estado
Somente a propriedade loading será sobrescrita, preservando as demais chaves existentes no objeto state.

render() {
  return <div>...</div>
}

render() - Método obrigatório em componentes de classe.
Responsável por traduzir:
-state
-props
Em representação visual (JSX/UI)

return - Define a projeção visual da interface
O react interpreta o JSX retornado e converte a estrutura em elementos renderizáveis

<div>...</div> - Representação declarativa da UI.
O conteúdo renderizado varia de acordo com:
-Estado atual
-Propriedades recebidas
-Fluxo de atualização do componente


Fluxo anatômico do código:
1. A classe é instanciada
2. O state incial é criado
3. O render() projeta a interface inicial
4. O componente é montado no DOM
5. componentDidMount() é executado
6. buscarFornecedores() dispara
7. setState() atualiza loading
8. O react agenda nova renderização
9. render() executa novamente
