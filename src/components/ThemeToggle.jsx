// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const getInitial = () => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved; // "light" | "dark"
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-4 right-4 z-50 px-3 py-1.5 rounded-md border
                 bg-gray-100 text-gray-800 hover:bg-white
                 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
                 dark:hover:bg-gray-700 transition-colors text-sm flex items-center gap-2"
      aria-label="Toggle theme"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
