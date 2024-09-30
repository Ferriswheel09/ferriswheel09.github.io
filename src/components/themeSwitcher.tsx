// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  
  const isDark = theme === "dark";

  return (
    <div>
     { isDark ?
      <button aria-label="Light Mode" onClick={() => setTheme('light')}>
        <MdDarkMode></MdDarkMode>
      </button>
      :
      <button aria-label="Dark Mode" onClick={() => setTheme('dark')}>
        <MdOutlineDarkMode></MdOutlineDarkMode>
      </button>
      
     }
    </div>
  )
}