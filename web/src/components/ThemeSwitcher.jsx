import React from "react";
import { useTheme } from "../context/ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "8px",
        border: "1px solid currentColor",
        borderRadius: "4px",
        cursor: "pointer",
        margin: "10px",
      }}
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

export default ThemeSwitcher;
