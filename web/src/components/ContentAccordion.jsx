import React, { useState } from "react";
import MarkdownRenderer from "./MarkdownRenderer";

function ContentAccordion({ title, contentMarkdown, detalhamento }) {
  const [isOpen, setIsOpen] = useState(false);

  const isGroup = detalhamento && detalhamento.length > 0;

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div>
          {isGroup ? (
            <ul>
              {detalhamento.map((subtopico, index) => (
                <li key={index}>
                  <ContentAccordion
                    title={subtopico.titulo}
                    contentMarkdown={subtopico.contentMarkdown}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <MarkdownRenderer markdown={contentMarkdown} />
          )}
        </div>
      )}
    </div>
  );
}

export default ContentAccordion;
