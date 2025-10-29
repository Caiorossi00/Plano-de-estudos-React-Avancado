import React from "react";
import ContentAccordion from "./03-ContentAccordion";
import topicos from "../data/menuData";
import "../assets/styles/Home.scss";

function Home() {
  return (
    <div className="home">
      {topicos.map((topico, idx) => (
        <div key={idx}>
          <h2>{topico.tema}</h2>
          {topico.modulos.map((modulo, mIdx) => (
            <ContentAccordion key={mIdx} modulo={modulo} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Home;
