# Lazy loading e divisão de código

Lazy loading é a técnica de carregar um recurso (componente, módulo, imagem, etc) apenas quando ele é realmente necessário, em vez de carregar tudo na inicialização do aplicativo.
No react, isso é feito geralmente com React.lazy() combinado com < Suspense >

Vantagens:

- Reduz o tamanho do bundle inicial
- Diminui o tempo de carregamento da primeira tela
- Melhora a performance, principalmente em aplicativos grandes ou complexos

Lazy loading de componentes no react:
import React, { Suspense } from "react";

const PainelAdmin = React.lazy(() => import("./PainelAdmin"));

function App() {
return (
<div>
<h1>Minha Aplicação</h1>
<Suspense fallback={<p>Carregando painel...</p>}>
<PainelAdmin />
</Suspense>
</div>
);
}

O React.lazy carrega o componente PainelAdmin somente quando ele precisa ser renderizado
O suspense mostra o fallback enquanto o componente é baixado

Divisão de código (code splitting)

- Automática: Webpack ou Vite detectam imports dinâmicos (React.lazy) e geram chunks separados do bundle principal
- Manual: você define pontos estratégicos para dividir o código, por exemplo, carregando apenas partes da UI em rotas específicas (React Router com lazy routes)

Exemplo com rotas:

import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("./Home"));
const Sobre = React.lazy(() => import("./Sobre"));

function App() {
return (
<BrowserRouter>
<Suspense fallback={<p>Carregando...</p>}>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/sobre" element={<Sobre />} />
</Routes>
</Suspense>
</BrowserRouter>
);
}

Cada rota é carregada apenas quando o usuário navega para ela, reduzindo o bundle inicial

Lazy loading depende de suspense para mostrar fallbacks enquanto o componente baixa
Streaming (SSR) combina bem, pois a UI pode ser enviada em partes conforme o código e os dados ficam disponíveis

Essa abordagem estratégica traz alguns benefícios

- Ela resolve os problemas de bundle gigante, tempo de carregamento lento, experiência ruim em conexões lentas
- Resolve os problemas da experiência de navegação, o usuário vê a UI inicial rapidamente, enquanto as partes secundárias carregam em background
- Diminui o tempo de pintura (paint time), porque menos JS precisa ser parseado/executado na inicialização
