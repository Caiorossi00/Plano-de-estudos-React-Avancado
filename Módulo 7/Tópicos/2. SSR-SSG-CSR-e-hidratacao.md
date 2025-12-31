# SSR, SSG, CSR e Hidratação

A renderização de aplicações web modernas pode ocorrer em diferentes etapas e em diferentes lugares, no servidor, no cliente ou em ambos. SSR, SSG, CSR e hidratação representam estratégias distintas para equilibrar performance, interatividade e SEO, e entender como cada uma funciona é fundamental para projetar aplicações react eficientes, especialmente em conjunto com server components

## CSR (Client-side Rendering)

CSR (Client-side rendering) foi o modelo dominante no react por muitos anos. Nele, o navegador recebe praticamente um HTML vazio e um bundle javascript grande. Só depois de baixar, interpretar e executar o JS é que a págnia aparece e fica interativa. É simples, poderoso para SPAs, mas causa problemas como time-to-first-paint lento e SEO ruim em páginas públicas. SSR e SSG surgiram para resolver exatamente essas limitações.

## SSR (Server-side Rendering)

SSR (Server-side rendering) renderiza o HTML no servidor a cada requisição. O cliente recebe uma página já montada (texto, estrutura, conteúdo) e vê algo imediatamente. Depois disso, o React hidrata esse HTML, conectando os componentes interativos no navegador. SSR melhora muito o SEO, já que os robôs recebem HTML completo, e reduz o tempo até o primeiro paint para o usuário. É ideal para páginas dinâmicas mas públicas, como produtos, blogs com conteúdo frequente, dashboards iniciais, homepages personalizadas e páginas que dependem de dados atualizados por request. A principal desvantagem é que cada requisição exige trabalho do servidor, aumentando custo, latência e necessidade de infraestrutura mais forte.

## SSG (Static Site Generation)

SSG (Static site generation) gera o HTML em build time, antes da aplicação ser publicada. Cada página vira um arquivo estático extremamente rápido, entregue quase instantaneamente por CDN. É perfeito para conteúdo que muda pouco: documentação, blog estático, landing pages, marketing, páginas institucionais.  
Como o HTML já está pronto, o tempo de render é praticamente zero. A limitação é óbvia: SSG não é adequado para contéudo altamente dinâmico, a menos que seja combinado com técnicas como revalidação, incremental static regeneration ou mistura com SSR.

## Hidratação

Tanto SSR quanto SSG dependem do processo de hidratação. Hidratação é o momento em que o React pega aquele HTML estático com o que seria produzido pelo render do cliente, e se tudo bate corretamente, ele "anexa" a interatividade sem recriar o DOM do zero. Se houver divergências, o React pode descartar parte do DOM e renderizar novamente, criando layout shifts. Por isso é essencial garantir que o HTML do servidor e do cliente sejam determinísticos.

## Quando escolher SSR, SSG ou CSR

Sobre quando SSR ou SSG são mais vantajosos que CSR, a resposta depende do equilíbrio entre interatividade imediata, SEO e dinamismo dos dados. SSR é mais indicado quando o conteúdo muda frequentemente, mas precisa ser indexado e exibido rapidamente. SSG é imbatível para sites com conteúdo estável. CSR só faz sentido quando a aplicação é essenicalmente inteartiva e não depende de conteúdo inicial renderizado rapidamente, como dashboards internos após login, painéis em tempo real ou ferramentas puramente SPA.

SSR e SSG têm impacto direto na experiência do usuário: melhoram first paint, LCP, estabilidade visual e SEO. O custo é maior complexidade, necessidade de hidratação e potencial aumento do trabalho do servidor. Já CSR simplifica a infraestrutura, mas sacrifica carregamento inicial e indexabilidade. Uma arquitetura moderna combina tudo, gerando aplicações mais rápidas, escaláveis e coerentes.
