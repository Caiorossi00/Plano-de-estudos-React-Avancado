# Concurrent rendering: scheduling, interrupção e prioridade

O react 18 introdiziu a renderização concorrente, que NÃO é multithreading de verdade, mas faz o react _parecer_ multitarefa: ele consegue pausar, interromper, descartar e retomar renderizações sem travar a interface.

---

## O que é o concurrent rendering?

Antes do react 18, a renderização era síncrona e bloqueante:

- Se um componente demorasse 200ms para renderizar, a UI inteira ficava congelada por 200ms.

---

## Como funciona o concurrent rendering?

- A renderização é dividida em unidades menores (_time slicing_)
- Entre uma unidade e outra o React verifica se o navegador precisa responder a algo mais urgente
- Se houver algo mais prioritário, o React interrompe a renderização atual
- Quando possível, retoma a renderização de onde parou

Isso mantém a interface responsiva mesmo durante tarefas pesadas.

O React não tem acesso direto ao event loop do JavaScript, mas utiliza mecanismos como **MessageChannel** e _scheduling cooperativo_ para dividir o trabalho em pequenos blocos.  
Cada bloco é executado dentro do event loop, permitindo que o navegador processe eventos de alta prioridade entre eles.

No React 18, praticamente todas as atualizações são automaticamente **"batchadas"**.  
Isso significa que, ao invés de causar renderizações separadas, o React junta tudo e causa uma única renderização acumulada.

- **Batching** reduz o _volume_ de renderizações
- **Concurrent rendering** reduz o _custo_ de cada render longo

---

## Blocking mode vs concurrent mode

### 1. Blocking mode

- Renderização síncrona
- Não há interrupção: o React só devolve o controle ao navegador ao final do render
- Grandes componentes ou cálculos pesados travam a UI
- Suspense funciona apenas para código (lazy loading)

### 2. Concurrent mode

- Renderização cooperativa e interrompível
- O React pode pausar o render atual, descartar renders obsoletos, priorizar renders mais urgentes e retomar trabalhos iniciados
- Suspense funciona também para dados e se integra a server components

---

O concurrent mode cria uma UI mais estável sob cargas variáveis e melhora o tempo de resposta geral.
