import React, { useEffect, useState } from "react";
import LightButton from "../../assets/light-mode-button.png";
import DarkButton from "../../assets/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.documentElement; // Target <html>
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme); // Save theme to localStorage
  }, [theme]);

  return (
    <div className="relative">
      {/* Light Mode Button */}
      <img
        src={LightButton}
        alt="Light Mode"
        className={`w-8 h-8 cursor-pointer ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
        onClick={() => setTheme("light")}
      />
      {/* Dark Mode Button */}
      <img
        src={DarkButton}
        alt="Dark Mode"
        className={`w-8 h-8 cursor-pointer ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setTheme("dark")}
      />
    </div>
  );
};

export default DarkMode;
