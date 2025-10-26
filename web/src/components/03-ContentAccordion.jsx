import React, { useState } from "react";
import { Link } from "react-router-dom";

function slugify(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

function ContentAccordion({ modulo }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="content-accordion">
      <button onClick={() => setIsOpen(!isOpen)}>
        {modulo.modulo} <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="module-content">
          {modulo.objetivo && (
            <p className="module-objective">
              <strong>Objetivo:</strong> {modulo.objetivo}
            </p>
          )}
          <ul>
            {modulo.aulas.map((aula, idx) => (
              <li key={idx}>
                <Link to={`/conteudo/${slugify(aula.titulo)}`}>
                  {aula.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ContentAccordion;
