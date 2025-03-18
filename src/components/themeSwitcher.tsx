"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export function ThemeSwitcher() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent mismatch during hydration

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <div>
      <button
        aria-label={isDark ? "Light Mode" : "Dark Mode"}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`flex items-center justify-center p-2 border-2 rounded-md transition-colors duration-300 
          ${isDark ? "bg-black text-white border-white" : "bg-white text-black border-black"} 
          hover:scale-105`}
      >
        {isDark ? <MdDarkMode /> : <MdLightMode />}
      </button>
    </div>
  );
}
