# Inversão de controle e abstração progressiva

Inversão de controle e abstração progressiva são dois princípios fundamentais para criar componentes flexíveis, reutilizáveis e fáceis de manter no React. Eles evitam que um componente seja rígido demais ou acumule responsabilidades que pertencem ao consumidor

Inversão de controle é um princípio de design.
Não é um hook do react, não é uma função específica, não é uma biblioteca
É uma forma de organizar componentes para que:
O componente deixe de decidir sozinho “o que fazer” e permite que algo externo decida isso.

1. Inversão de controle
   Inversão de controle é quando o componente deixa de tomar decisões internas e passa a permitir que o usuário do componente decida comportamento, lógica ou partes da UI.
   Ao invés de impor regras rígidas, o componente expõe os pontos de tensão

Um componente sem IoC (rígido):
function Modal() {
return (
<div>
<h1>Título fixo</h1>
<p>Conteúdo fixo</p>
<button>OK</button>
</div>
);
}

Não serve para quase nada além desse caso específico

Um componente com inversão de controle:
function Modal({ title, children, footer }) {
return (
<div>
<h1>{title}</h1>
<div>{children}</div>
<div>{footer}</div>
</div>
);
}

Agora o consumidor controla:

- Conteúdo
- Comportamento
- Aparência
- Estrutura do footer

Isso é inversão de controle, o componente não dita as decisões, ele expõe a mecânica e o usuário decide o resto

Quando aplicar IoC melhora flexibilidade?

- Quando o componente tem muitas variações possíveis de layout
- Quando você quer separar responsabilidade visual da lógica interna
- Quando um componente deve ser genérico (Card, Modal, Button, List, FormField)
- Quando evita dezenas de props específicas tipo showIcon, alignRight, etc
  IoC reduz expçosão de props e aumenta a vida útil do componente

1. Abstração progressiva
   Abstração progressiva é a filosofia de não tentar prever todas as necessidades futuras, mas sim criar componentes que podem ser estendidos quando necessário sem quebrar os existentes

É construir componentes que começam fáceis e podem ser estendidos conforme a complexidade aumenta, sem quebrar quem usa e sem multiplicar componentes.

A abordagem é:

- Criar o componente simples
- Permitir extensão conforme novas necessidades surgirem
- Evoluir a API sem forçar reescrita dos consumidores

Exemplo ruim (abstração antecipada demais -> over-engineering):
Criar um form genérico com schema, campos dinâmicos, passos, validações e 50 props antes mesmo de a aplicação precisar disso

Exemplo correto (progressivo):
Começa simples:
function Input({ label, ...props }) {
return (
<label>
{label}
<input {...props} />
</label>
);
}

Se um dia precisar de controle de erro, você evolui:
function Input({ label, error, ...props }) {
return (
<label>
{label}
<input {...props} />
{error && <span>{error}</span>}
</label>
);
}

Se um dia precisar renderizar um ícone, se usa children ou slots como extensão natural.
Isso é abstração progressiva, crescer conforme a necessidade real, não por adivinhação

Relação com SOLID no frontend

- Single responsibility (SRP):
  Cada componente tem uma responsabilidade clara, UI, lógica, dados. IoC ajuda a manter isso, porque o componente não tenta fazer tudo

- Open/Closed (OCP)
  Componentes devem estar abertos para extensão e fechados para modificação, exatamente o que children, slots e IoC permitem.
