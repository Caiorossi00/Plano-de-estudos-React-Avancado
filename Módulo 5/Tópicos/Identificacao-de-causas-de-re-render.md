# Identificação de causas de re-render

No react, um re-render acontece sempre que o componente precisa recalcular sua UI.  
Isso nem sempre é um porblema, muitos re-renders são necessários e fazem parte do modelo declarativo.  
O problema surge quando um componente re-renderiza sem que nada relevante tenha mudado, impactando performance.

---

### As três causas principais de re-render são

#### 1. Mudança de estado local (useState, useReducer)

Sempre que o estado muda, o componente que o possui re-renderiza.

#### 2. Atualização via props vindas do componente pai

Se o pai re-renderiza, os filhos também re-renderizam por padrão.  
E se qualquer prop muda de referência, mesmo que o conteúdo seja igual, o filho re-renderiza.

#### 3. Context atualizado

Context é um **"broadcast de re-renders"**.  
Se um value muda, **todo** componente que consome aquele contexto re-renderiza, mesmo que só use parte desse valor.  
É um dos principais causadores de re-renders ocultos.

---

### Padrões que reduzem re-renders

#### 1. Componentes mais granulares

Dividir componentes em partes menores evita que um re-render suba ou desça demais pela árvore.

#### 2. Memoização seletiva

- `React.memo` reduz re-render baseado em props
- `useCallback` evita recriar funções toda hora
- `useMemo` evita recriar objetos/payloads caros

#### 3. Contexts bem divididos

Separar contextos: `UserContext`, `ThemeContext`, `CartContext`, etc.  
E o mais importante: nunca colocar tudo em um único contexto gigante.

#### 4. Estado movido para o lugar certo

Quanto mais alto o estado está na árvore, mais re-render ele produz.  
Mover o estado para o componente que realmente precisar dele reduz re-renders colaterais.
