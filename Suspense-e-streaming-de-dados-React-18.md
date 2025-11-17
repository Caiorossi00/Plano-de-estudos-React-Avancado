# Suspense e streaming de dados (React 18+)

O suspense é um recurso que permite que partes da interface aguardem dados de carregamento de componentes sem bloquear a renderização completa da página.  
Ao invés de mostrar uma tela em branco e travar a UI inteira, o React pode exibir um fallback\* (como um spinner ou skeleton) enquanto os dados ainda não estão prontos.  
Isso melhora significativamente a experiência do usuário, tornando a interface mais responsiva e progressiva.

\*Fallback é um componente ou UI temporário enquanto o dado/componente assíncrono não está disponível.

Existem dois usos principais:

- Suspense para código (lazy loading): usado para carregamento de componentes de forma assíncrona (React.lazy) permitindo que a árvore de componentes continue renderizando enquanto o módulo é baixado.
- Suspense para dados: usado com fetching assíncrono de dados. Permite "suspender" a renderização de um componente até que os dados estejam disponíveis, sem bloquear o resto da UI.

O streaming de dados complementa o suspense ao enviar pedaços da UI para o usuário conforme os dados ficam disponíveis, ao invés de esperar que tudo esteja pronto. Isso é especialmente útil em server components e SSR (server-side rendering), onde partes da página podem ser enviadas ao cliente assim que forem processadas.

Impacto no ciclo de render e commit:

- Durante a render phase, componentes que dependem de dados assíncronos podem "suspender" e devolver o fallback.
- A commit phase aplica o que já está pronto no DOM e, quando os dados chegam, novas renderizações são aplicadas automaticamente.
- Isso mantém a UI responsiva e evita bloqueio, mas exige atenção ao gerenciamento de fallback e prioridade de carregamento.

Algumas boas práticas são:

- Envolver apenas o que precisa suspender
- Usar fallbacks informativos e leves
- Combinar suspense com streaming para SSR e server components
- Preferir caching e pré-fetch para reduzir tempo de espera
