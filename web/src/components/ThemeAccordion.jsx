import React, { useState } from "react";
import ModuleAccordion from "./ModuleAccordion";
import "../assets/styles/ThemeAccordion.scss";

function ThemeAccordion({ title, modules, isOpenDefault = false }) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div id="theme-accordion">
      <div className="accordion-box">
        <button onClick={() => setIsOpen(!isOpen)}>
          <span id="theme-title">{title}</span>
          <span>{isOpen ? "▲" : "▼"}</span>
        </button>
      </div>

      {isOpen && (
        <div>
          {modules.map((moduleData) => (
            <ModuleAccordion
              key={moduleData.modulo}
              title={moduleData.modulo}
              aulas={moduleData.aulas}
              isOpenDefault={moduleData.isOpenDefault}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ThemeAccordion;
