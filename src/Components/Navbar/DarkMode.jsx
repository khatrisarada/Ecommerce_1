import React, { useState, useEffect } from "react";
import LightButton from "../../assets/light-mode-button.png"; // Fixed variable name
import DarkButton from "../../assets/dark-mode-button.png";  // Fixed variable name

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light" // Default to "light" if no theme is saved
  );

  const element = document.documentElement; // Root element (<html>)

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative flex justify-end items-center p-4">
      {/* Light Mode Button */}
      <img
        src={LightButton}
        alt="Switch to Light Mode"
        onClick={() => setTheme("light")}
        className={`w-12 h-12 cursor-pointer transition-opacity duration-300 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Dark Mode Button */}
      <img
        src={DarkButton}
        alt="Switch to Dark Mode"
        onClick={() => setTheme("dark")}
        className={`w-12 h-12 cursor-pointer transition-opacity duration-300 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default DarkMode;
