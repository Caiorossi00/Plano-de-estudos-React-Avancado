import React from "react";
import MarkdownRenderer from "./MarkdownRenderer";
import "../assets/styles/ContentPage.scss";
import Sidebar from "./Sidebar";

function ContentPage({ title, contentMarkdown }) {
  return (
    <div id="content-page-wrapper">
      <Sidebar />

      <main className="content-page">
        <section className="content-body">
          <header className="content-header">
            <h1>{title}</h1>
          </header>
          <MarkdownRenderer markdown={contentMarkdown} />
        </section>
      </main>
    </div>
  );
}

export default ContentPage;
