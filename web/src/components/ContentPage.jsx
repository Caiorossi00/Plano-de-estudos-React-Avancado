import React from "react";
import MarkdownRenderer from "./MarkdownRenderer";
import "../assets/styles/ContentPage.scss";

function ContentPage({ title, contentMarkdown }) {
  return (
    <main className="content-page">
      <section className="content-body">
        <header className="content-header">
          <h1>{title}</h1>
        </header>
        <MarkdownRenderer markdown={contentMarkdown} />
      </section>
    </main>
  );
}

export default ContentPage;
