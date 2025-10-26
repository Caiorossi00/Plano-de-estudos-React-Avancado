import React, { useState } from "react";
import ModuleAccordion from "./ModuleAccordion";
import "../assets/stylesThemeAccordion.scss";

function ThemeAccordion({ title, modules, isOpenDefault = false }) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="theme-accordion">
      <button className="accordion-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="accordion-content">
          {modules.map((module) => (
            <ModuleAccordion
              key={module.modulo}
              title={module.modulo}
              objetivo={module.objetivo}
              aulas={module.aulas}
              isOpenDefault={module.isOpenDefault}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ThemeAccordion;
