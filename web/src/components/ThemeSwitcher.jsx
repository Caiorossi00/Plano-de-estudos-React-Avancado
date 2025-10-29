import React from "react";
import { useTheme } from "../context/ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "10px",
      }}
    >
      <button
        onClick={toggleTheme}
        style={{
          padding: "8px",
          border: "1px solid currentColor",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
