import React from "react";
import Home from "./components/Home";
import ThemeProvider from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <ThemeProvider>
      <div>
        <div style={{ textAlign: "right", marginBottom: "20px" }}>
          <ThemeSwitcher />
        </div>

        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
