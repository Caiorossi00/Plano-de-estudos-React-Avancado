# Limitações e padrões emergentes (Next.js 14/15, React 19)

Os server components introduzem um novo paradigma no React, mas junto com os benefícios surgem restrições claras e novos padrões arquiteturais que ainda estão se estabilizando, especialmente em frameworks como Next.js e no react 19.  
Entender essas limitações e os caminhos emergentes é crucial para tomar decisões de design consistentes e evitar armadilhas comuns.

## Limitações fundamentais dos Server Components

A primeira limitação importante é que server components não podem usar APIs que dependem do ambiente do navegador. Isso inclue useState, useEffect, useLayoutEeffect, useRef para valores mutáveis, APIs do DOM, listeners de eventos e qualquer coisa que dependa de interatividade direta. Um server component precisa ser puro: ele recebe dados, process e retorna UI estática.  
Isso coloca limites claros sobre o que pode ou não ser escrito no servidor. Da mesma forma, qualquer lógica que dependa de identidade ou sincronia com a sessão do navegador precisa ser migrada para components client-side ou tratada por ações do servidor.

Outro ponto crítico é que server components rodam em um ambiente com acesso ao filesystem, banco de dados, APIs seguras e variáveis protegidas, o que é uma vantagem enorme. Porém, essa capacidade exige que você mantenha uma boundary clara entre o que pode ser executado no servidor e o que precisa ser entregue ao cliente. Misturar responsabilidades pode gerar desperdício de rede, aumento no bundle ou "vazamento" acidental de lógica para o client.  
Por isso, frameworks modernos estimulam a organização explícita entre módulos server e client, garantindo que cada parte execute apenas onde faz sentido.

## Evolução no Next.js — da versão 14 para 15

Com next.js 14, o modelo de server components foi consolidado, mas ainda coexistia com padrões híbridos legados (como getServerSideProps e getStaticProps).  
Já no Next.js 15, a direção é mais clara:

- quase tudo começa como **server component**
- o desenvolvedor precisa optar explícitamente por client-side apenas quando necessário usando `"use client"`
- a integração com **server actions** se tornou mais profunda
- mutações e form handling podem ocorrer diretamente no servidor
- reduz-se a dependência de rotas API internas ou endpoints duplicados

Isso simplifica a arquitetura, mas exige disciplina ao projetar boundaries:  
**estados interativos residem no client, dados, mutações e carregamento pesado ficam no server.**

## Consolidação com React 19

React 19 reforça esses padrões trazendo APIs mais coesas entre server e client.

- **`use`**, que permite esperar por promessas diretamente em componentes
- mecanismos de **caching server-side integrados**
- streaming progressivo mais natural
- uso mais profundo de **suspense** para latência
- eliminação gradual de padrões antigos como fetch em useEffect

A arquitetura torna-se mais fluida e menos baseada em workarounds tradicionais.

## Impacto nas decisões de design

Essas mudanças mudam profundamente as decisões de design.  
Como parte significativa da lógica pode ser movida para o servidor, componentes passam a ser menores, mais simples e mais declarativos.  
O fluxo de dados deixa de ser controlado apenas por hooks e passa a ser dirigido por boundaries explícitas.

Além disso, padrões antigos como fetch em useEffect tornam-mse obsoletos em favor de buscas diretas no servidor, com cache automático e invalidação via ações.

## Filosofia da arquitetura híbrida moderna

Por fim, a arquitetura híbrida moderna exige escolher conscientemente onde cada parte vive.  
O objetivo não é "fazer tudo no server", mas sim colocar cada responsabilidade no lugar certo:

- **Renderização pesada e acesso a dados → servidor**
- **Interatividade, animações e estados efêmeros → cliente**

Essa separação melhora performance, reduz bundle e aumenta previsibilidade, mas exige que o desenvolvedor compreenda as limitações e as ferramentas emergentes que sustentam esse novo modelo.
