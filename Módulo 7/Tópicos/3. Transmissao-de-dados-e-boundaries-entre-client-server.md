# Transmissão de dados e boundaries entre client/server

A arquitetura moderna do React, especialmente quando combinada com server components e frameworks como Next.js, introduz uma separação clara entre o que roda no servidor e o que roda no cliente. Essa separação é chamada de boundary: um ponto explícito onde um componente deixa de ser server e passa a ser client (ou vice-versa), e onde dados precisam atravessar essa fronteira. Entender esses limites é crucial para evitar trabalho desnecessário, melhorar performance e manter previsibilidade no fluxo de dados.

## O que é um boundary client/server

Um boundary client/server existe quando um server component precisa renderizar (ou envolver) um client component. Isso acontece porque componentes cliente possuem capacidades que server components não têm: interatividade, uso de estado local dinâmico, hooks como useEffect, acesso ao DOM e APIs do navegador. O boundary funciona como um ponto de transição, o servidor monta a interface estática até aquele ponto e, dali em diante, delega responsabilidade ao cliente.  
É importante manter esses boundaries o mais alto possível na árvore: quando mais no topo estiver um client component, menor a quantidade de código que cai no bundle do navegador. Quanto mais alto ele estiver, mais partes da árvore perdem a vantagem da renderização server-only. Por isso, o design moderno recomenda deixar a maior parte da UI como server components e isolar interatividade apenas nos locais necessários.

## Estado server-only vs estado client-only

A diferença entre estado server-only e estado client-only decorre desse boundary.

- **Estado server-only** inclui tudo que depende do backend, consultas ao banco, leitura de arquivos, dados sensíveis, cálculos pesados, sincronização entre requisições ou passos que não podem ocorrer no navegador. Esse estado existe apenas durante a renderização no servidor; ele não é preservado entre interações, pois server components são sempre puros e sem estado persistente.

- **Estado client-only** representa interatividade: inputs, toggles, temas, abertura de modal, animações, navegação local, campos do formulário, carregamento incremental, seleções do usuário. Ele é mantido no navegador e precisa de client components.

Separar corretamente esses tipos de estado evita bugs estruturais e reduz drasticamente a quantidade de javascript enviada ao cliente.

## Riscos ao conectar Cliente e Servidor

Um dos grandes riscos ao conectar server e client é o over-fetching (trazer dados do servidor mais vezes que o necessário ou em locais onde não são usados) e a duplicação de dados, quando fetches separados repetem consultas idênticas ou mantêm versões conflitantes do memso estado. Em uma arquitetura híbrida, o ideal é centralizar o fetching em server components, pois eles rodam no servidor com acesso direto e eficiente a bancos, caches e autenticação. O cliente deve receber apenas os dados processados que precisa, geralmente via props, evitando fetch redundante no browser. Quando mais de um client component necessita do mesmo dado, o boundary deve estar acima deles, garantindo que o fetch ocorra apenas uma vez. Ferramentas como cache de server actions ou react cache ajudam a garantir consistência e minimizar duplicações;

## Como definir boundaries ideais

Definir boundaries ideais significa colocar:

- No **servidor** tudo que envolve dados, processamento, lógica pesada, autenticação ou o que não requer interação
- No **cliente**, apenas o que exige estado dinâmico, eventos do usuário ou APIs do navegador

Essa separação reduz bundle, melhora tempos de carregamento, simplifica o fluxo de dados e mantém a aplicação estável. O segredo é não misturar responsabilidades: equilíbrio entre as partes e boundaries bem definidos criam aplicações mais rápidas, previsíveis e sustentáveis.
