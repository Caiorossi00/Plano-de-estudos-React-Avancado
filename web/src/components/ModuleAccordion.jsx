import React, { useState } from "react";
import ContentAccordion from "./ContentAccordion";

function ModuleAccordion({ title, aulas, isOpenDefault = false }) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <ul>
          {aulas.map((aulaData, index) => (
            <li key={index}>
              <ContentAccordion
                title={aulaData.titulo}
                contentMarkdown={aulaData.contentMarkdown}
                detalhamento={aulaData.detalhamento}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ModuleAccordion;
