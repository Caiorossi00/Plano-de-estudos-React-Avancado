# React Fiber: scheduler, prioridade e interrupção de tarefas

O Fiber é uma reescrita interna do mecanismo de reconciliação, no modelo original (antes do React 16), todo o processo de reconciliação e atualização era **sincrônico e bloqueante**, ou seja, quando o estado mudava, o React reconstruía toda a árvore virtual, fazia o diff e aplicava as mudanças ao DOM sem parar.  
Isso podia fazer com que o navegador travasse por alguns milissegundos.  
O Fiber foi criado para resolver exatamente isso.

---

## Dividindo o trabalho

Ao invés de processar toda a árvore de uma vez, o React pode **dividir o trabalho em partes menores** e escolher **quando continuar ou pausar** cada uma delas.

Cada nó da árvore de componentes agora é representado como um **Fiber Node**, um objeto que contém:

- As informações do componente (tipo, props, estado)
- Um ponteiro para o pai e para os filhos
- Metadados de prioridade
- O processo de renderização

---

## O papel do Scheduler

O **Scheduler** é o gerente de tarefas do React.  
Ele decide:

- Quantos pedacinhos do trabalho serão feitos por vez
- Quando pausar uma renderização longa
- Quando interromper um update de baixa prioridade

Esse modelo é chamado de **cooperative scheduling**, porque o React não tem controle total sobre a thread principal — ele apenas coopera com o navegador, fazendo um pouco de trabalho e depois devolvendo o controle.

---

## Priorização de tarefas

Mas como o React sabe o que tem mais prioridade e o que tem menos?  
O React classifica as atualizações em diferentes níveis, por exemplo:

- **Alta prioridade:** digitar em um input, clicar em um botão
- **Média prioridade:** rolagem, animações leves
- **Baixa prioridade:** recarregar dados, renderizar listas longas, fetch em background

Assim, se o usuário estiver digitando, o React pode **adiar um re-render de uma lista grande** até que a digitação seja processada.

---

## Fases do Fiber

O Fiber divide a renderização em duas fases:

1. **Render Phase**

   - Contém o _reconciliation_ e o _diffing_
   - É o processo onde o React recalcula o que precisa mudar

2. **Commit Phase**
   - Contém o _mutation_
   - É a fase onde o React aplica as mudanças no DOM real

Essa separação permite o **agendamento (scheduling)** e o **controle de prioridade** entre atualizações.

---

## Desmistificando o Fiber

Muitas pessoas confundem e acreditam que o Fiber faz o React **renderizar mais rápido**, mas na realidade ele faz o React **renderizar de maneira mais inteligente**.  
O foco é **responsividade**, não tempo total de execução.
