"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle({ className = "" }) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (error) {
      // localStorage unavailable (private mode etc.) — theme just won't persist.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-fg/15 bg-fg/5 text-fg/70 transition-colors hover:border-accent/50 hover:text-fg ${className}`}
    >
      {mounted && (isDark ? <FiSun size={16} /> : <FiMoon size={16} />)}
    </button>
  );
}
