import React, { useState } from "react";
import ModuleAccordion from "./ModuleAccordion";

function ThemeAccordion({ title, modules, isOpenDefault = false }) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div>
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
