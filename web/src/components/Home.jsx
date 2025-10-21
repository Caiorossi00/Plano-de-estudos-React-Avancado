import React from "react";
import topicos from "../data/menuData";
import ThemeAccordion from "./ThemeAccordion";

function Home() {
  return (
    <div>
      <nav>
        {topicos.map((themeData) => (
          <ThemeAccordion
            key={themeData.tema}
            title={themeData.tema}
            modules={themeData.modulos}
            isOpenDefault={themeData.isOpenDefault}
          />
        ))}
      </nav>
    </div>
  );
}

export default Home;
