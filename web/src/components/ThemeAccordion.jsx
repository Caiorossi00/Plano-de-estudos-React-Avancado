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
