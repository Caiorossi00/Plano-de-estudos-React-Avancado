# Sincronização de estados entre componentes

A sincronização de estado entre componentes é um desafio comum, especialmente quando múltiplos componentes precisam refletir ou alterar o mesmo dado. Quando dois ou mais componentes compartilham um mesmo valor, o padrão mais seguro é o **lifting state up**, ou seja, mover o estado para o ancestral comum mais próximo e repassar o valor (e as funções de atualização) via props. Isso garante que todos os componentes dependam da mesma **fonte de verdade**, prevenindo inconsistências.

**Prop Drilling** é o termo usado em React para descrever o processo de passar dados (props) de um componente pai até um componente filho através dos vários níveis intermediários que não precisam realmente desses dados.  
Por exemplo, imagine que o **App** tem um dado `user`, mas quem precisa dele é um componente chamado **UserProfile**. Para que o **UserProfile** receba esse dado, ele precisa ser passado como prop por todos os componentes intermediários, mesmo que nenhum use o `user`, eles apenas o repassam.

**Exemplo:**

- App lida com
- Layout que lida com
- Sidebar que renderiza
- UserProfile

A hierarquia é definida pela estrutura visual e lógica da interface.

O **prop drilling** é aceitável em componentes pequenos ou quando a profundidade é baixa. Porém, quando o estado precisa ser acessado em muitas partes da aplicação, isso se torna difícil de manter.  
(Um exemplo de informação que precisa ser acessado em múltiplas partes da aplicação é uma verificação de se o usuário está autenticado, pense no **header** (que exibiria o nome do usuário), na **página do perfil** (para mostrar as informações pessoais), no **carrinho**, (para vincular os itens ao usuário).  
Se cada componente tentasse manter seu próprio estado de usuário ou recebesse o dado via props de forma manual, isso geraria muito **prop drilling** e inconsistências.  
Nesse caso, o ideal é ter um **estado global** de autenticação, armazenado em um contexto (por exemplo, **AuthContext**), de onde qualquer componente pode acessar as informações do usuário diretamente, sem depender de múltiplas camadas intermediárias.

Em muitos casos, vale a pena considerar uma solução global (como **ContextAPI**, **Zustand**, **Redux**) ou um **padrão híbrido**, onde parte do estado é global (dados compartilhados) e parte é local (controle interno do componente).

O **React** garante consistência automaticamente através de seu modelo declarativo e reatividade: quando o estado muda, ele dispara novas renderizações nos componentes dependentes, garantindo que a UI reflita sempre o estado atual sem atualizações manuais.
