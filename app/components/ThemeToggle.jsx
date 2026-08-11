"use client";
import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "light");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    setTheme(next);
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className={`flex items-center justify-center w-9 h-9 rounded-full border border-line bg-surface text-ink-soft hover:text-primary hover:border-primary transition-colors duration-200 ${className}`}
    >
      {theme === null ? (
        <span className="block w-4 h-4" />
      ) : theme === "dark" ? (
        <SunIcon className="w-4 h-4" />
      ) : (
        <MoonIcon className="w-4 h-4" />
      )}
    </button>
  );
}
