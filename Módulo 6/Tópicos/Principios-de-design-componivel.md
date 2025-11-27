# Princípios de design componível

O design componível é a base arquitetural do React. Mais do que uma escolha estética, é uma filosofia que determina como os cmoponentes devem ser estruturados para permanecerem fáceis de entender, previsíveis, reutilizáveis e escaláveis. Em aplicações grandes, a qualidade do design dos componentes tem impacto direto na produtividade da equipe, na facilidade de manutenção e até na performance. Esse design parte de três prilares fundamentais: coesão, previsibilidade e isolamento, todos derivados de princípios clĺassicos como Single responsibility, composição em vez de herança e separação de efeitos colaterais.

## Coesão

O princípio de coesão diz que um componente deve ter uma responsabilidade clara e limitada. Ele não deve ser ao mesmo tempo responsável por buscar dados, processá-los, renderizar UI, aplicar formatação, validar entrada e gerenciar animações. Componentes que acumulam responsabilidades violam esse princípio e se tornam difíceis de testar, difíceis de modificar e frágeis diante de mudanças. Um sinal de violação é quando o componente cresce demais, possui várias seções independentes, exige dezenas de props ou tem lógica desconexa misturada com UI.

## Previsibilidade

A previsibilidade vem de componentes que expões APIs claras (props), controlam estado internamente quando necessário e evitam alterar estado ou efeitos de maneira implícita. Componentes que realizam side effects durante o render, dependem de valores globais ocultos ou mudam comportamento baseado em condições internas são difíceis de compreender e testar. O react reforça essa previsibilidade ao separar render e commit, mas o desenvolvedor precisa isolar os efeitos colaterais em useEffect e manter a UI sempre baseada em estado declarativo e estável.

## Isolamento

O princípio de isolamento determina que cada parte da UI deve re-renderizar apenas quando aquilo que ela depende mudou. Isso evita re-renderizações desnecessárias e reduz acoplamento entre partes de uma interface. Isolamento também significa separar lógica de domínio (hooks, reducers, loaders) da camada visual (componentes presentacionais), além de evitar dependências globais ou contextos mal utilizados que disparem re-renders em massa.

## Como identificar violações

- Componentes grandes demais, com múltiplas funções internas
- Muitos condicionais alterando visual e lógica de forma misturada
- Props que não são claras ou que carregam múltiplas funções
- Necessidade frequente de "consertar" comportamento interno com novos flags como isDisabled, compact, variantA, variantB (sinal de API mal projetada)
- Dependência excessiva de context ou estado global para coisas que poderiam ser locais

## Trade-offs

Os trade-offs entre generalização e simplicidade aparecem quando tentamos criar componentes flexíveis demais. Generalizar cedo demais leva a APIs enormes, repletas de props específicas, caindo em over-engineering. Simplicidade extrema pode gerar duplicação ou componentes pouco reutilizáveis. A solução ideal é abstração progressiva: começar simples, evoluir conforme novas necessidades surgem e permitir extensibilidade por composição (children, slots, compound components) ao invés de tentar adivinhar todos os usos futuros

## Conclusão

Combinar composição, abstração e isolamento adequadamente resulta em componentes altamente previsíveis, fáceis de estender e manter, sem comprometer simplicidade. É isso que faz o react escalar bem em sistemas complexos: cada componente faz pouco, mas faz bem (e todos se encaixam como peças claras e articuladas)
