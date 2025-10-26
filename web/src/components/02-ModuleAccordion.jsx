import React, { useState } from "react";
import ContentAccordion from "./ContentAccordion";
import "../assets/styles/ModuleAccordion.scss";

function ModuleAccordion({ title, objetivo, aulas, isOpenDefault = false }) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="module-accordion">
      <button className="module-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="module-content">
          {objetivo && (
            <p className="module-objective">
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
