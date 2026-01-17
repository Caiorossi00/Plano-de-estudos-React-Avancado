# Design orientado a previsibilidade e legibilidade

Um design orientado à previsibilidade e legibilidade parte da premissa de que o código deve deixar claro o que faz e como se comporta, sem exigir que o leitor adivinhe intenções ocultas ou percorra múltiplos arquivos para entender um fluxo simples. Em aplicações react, isso significa trabalhar com componentes cujos nomes descrevem seu papel, cuja árvore de render é intuitiva e cujo comportamento é consistente independentemente do contexto. Previsibilidade reduz bugs porque reduz a superfície de surpresa: quando um componente segue padrões claros de estado, efeitos e props, o desenvolvedor consegue antecipar como ele reagirá a mudanças, e isso torna a depuração muito mais rápida.

## Como avaliar se um componente é previsível

Avaliar se um componente é previsível envolve observar:

- Se ele possui uma única responsabilidade clara
- Se não mistura múltiplas camadas de lógica (UI, efeitos, networking, cálculos de negócio)
- Se não contém efeitos colaterais implícitos
- Se não depende de estados externos que o leitor não consegue identificar facilmente

Um componente previsível é aquele que pode ser lido de cima a baixo sem "travas cognitivas": o leitor entende onde está o estado, onde está a lógica, o que vem de fora e o que pertence a ele.  
Se for difícil explicar o que o componente faz em uma frase simples, há um problema de legibilidade.

## O papel dos efeitos colaterais na perda de previsibilidade

Side effects mal isolados são um dos maiores inimigos da previsibilidade.  
Quando efeitos:

- Estão espalhados sem justificativa
- Usam dependências implícitas
- Causam re-renderizações inesperadas
- Alteram estados externos sem deixar isso claro

a legibilidade do componente diminui drasticamente.

Isso força o desenvolvedor a raciocinar sobre **o tempo** (quando algo acontece) ao invés de apenas **ler o que acontece**, quebrando o modelo mental declarativo do React.

Efeitos **não** deveriam ser usados para:

- Derivar estado
- Sincronizar valores redundantes
- "Consertar" algo após o render

Essas práticas criam fluxos não determinísticos e difíceis de testar.  
Quando os efeitos são necessários (busca de dados, subscrições, sincronização externa), devem ser explícitos e isolados.

## Estratégias para tornar o código mais previsível

Para tornar comportamento e estado mais previsíveis, algumas estratégias são essenciais:

1. **Manter estado o mais local possível**  
   Quanto mais alto na árvore ele estiver, mais componentes ele afeta e mais difícil é rastrear suas ligações.

2. **Evitar estados duplicados e valores derivados armazenados como estado**  
   Previsibilidade vem de um único ponto de verdade.

3. **Controlar side effects**  
   Nomear bem, limitar dependências e torná-los totalmente explícitos.

4. **Padronizar props**

   - Callbacks como: `onSubmit`, `onSelect`, `onClose`
   - Valores como: `value`, `items`, `isOpen`  
     Isso torna a semântica uniforme e fácil de compreender.

5. **Criar componentes puros sempre que possível**  
   Sem side effects, sem dependências externas, apenas funções que recebem props e retornam UI.  
   Componentes puros são naturalmente previsíveis.

## Por que previsibilidade e legibilidade são fundamentais

Legibilidade e previsibilidade não são "embelezamentos", são pilares que determinam a velocidade de evolução de uma aplicação.  
Código previsível:

- Facilita onboardings
- Reduz divergências entre membros da equipe
- Minimiza bugs causados por mal-entendimentos
- Cria uma base sustentável para escalar UI e arquitetura de dados

É um investimento estrutural que produz retornos contínuos ao longo de toda a vida útil do sistema.
