import React, { useState } from "react";
import ContentAccordion from "./ContentAccordion";

function ModuleAccordion({ title, objetivo, aulas, isOpenDefault = false }) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div>
          {objetivo && (
            <p>
              <strong>Objetivo:</strong> {objetivo}
            </p>
          )}
          <ul>
            {aulas.map((aula, index) => (
              <li key={index}>
                <ContentAccordion
                  title={aula.titulo}
                  contentMarkdown={aula.contentMarkdown}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ModuleAccordion;
