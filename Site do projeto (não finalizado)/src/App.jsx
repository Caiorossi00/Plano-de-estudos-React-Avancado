import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import ThemeProvider from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Home from "./components/Home";
import ContentPage from "./components/ContentPage";
import topicos from "./data/menuData";

function slugify(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

function findContentBySlug(slug) {
  for (const topico of topicos) {
    for (const modulo of topico.modulos) {
      for (const aula of modulo.aulas) {
        if (slugify(aula.titulo) === slug) return aula;
      }
    }
  }
  return null;
}

function ContentPageWrapper() {
  const { slug } = useParams();
  const item = findContentBySlug(slug);

  if (!item) return <h2>Conteúdo não encontrado.</h2>;

  return (
    <ContentPage title={item.titulo} contentMarkdown={item.contentMarkdown} />
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div>
          <ThemeSwitcher />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conteudo/:slug" element={<ContentPageWrapper />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
