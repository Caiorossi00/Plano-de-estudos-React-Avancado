# Decisões guiadas por intenção, não por ferramenta

Decisões guiadas por intenção significam projetar a interface a partir do que o usuário precisa e do que o componente deve expressar, e só depois escolher ferramentas, hooks ou padrões. Em outras palavras: primeiro entende-se o propósito, depois escolhe-se o mecanismo. Isso evita que a arquitetura seja movida por modismos ("usar context para tudo", "colocar redux porque grandes empresas uasam", "transformar tudo em hooks customizado") e mantém o foco em clareza, performance e manutenção.

## Identificando a intenção central

Para identificar a intenção central, a pergunta mais importante é:  
**"O que esse componente realmente precisa fazer e qual a responsabilidade dele?"**

- Se a intenção é apenas exibir os dados estáticos, adicionar estado ou efeitos desnecessários piora o design.
- Se o objetivo é sincronizar dados entre múltiplos componentes, usar variáveis de estado locais quebra a consistência.

A intenção sempre revela quais ferramentas são adequadas e, principalmente, quais **não** são.

## Problemas que surgem quando decisões são guiadas por hábito

Muitos erros comuns no react surgem de decisões tomadas por hábito, não por necessidade.

Exemplos:

- Usar **context** para qualquer dado compartilhado, mesmo quando apenas dois componentes precisam dele → aumenta re-renderizações e dificulta manutenção.
- Criar **hooks customizados** para lógicas simples que poderiam permanecer diretamente no componente → fragmentação desnecessária.
- Aplicar **memoização** em tudo "porque melhora performance" → aumenta complexidade e custo cognitivo sem benefício real.

Esses padrões são escolhas baseadas na ferramenta, não na intenção.

## Decisões guiadas por intenção

Decisões guiadas por intenção são radicalmente diferentes.

### Exemplos:

- Se a intenção é **carregar produtos de um e-commerce com cache e revalidação**, faz sentido usar **React Query**, não porque "é moderno", mas porque resolve exatamente esse fluxo.

- Se a intenção é **sincronizar o tema escuro/claro** da aplicação, **context** é apropriado, pois é um estado global de baixa frequência de atualização.

- Se a intenção é **manter o carrinho acessível de qualquer área**, um **store global** (Zustand, Redux) faz sentido, porque resolve um problema de compartilhamento profundo.

### Às vezes, a melhor decisão é _não abstrair_

Se a intenção é aumentar legibilidade, um componente simples, com código explícito, vale mais que uma arquitetura sofisticada.  
Isso mostra que boas decisões não surgem de uma caixa de ferramentas, mas da **interpretação cuidadosa do problema**
