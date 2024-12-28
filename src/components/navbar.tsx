"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Home from "@/resources/home";
import Info from "@/resources/about";
import Monitor from "@/resources/project";
import Bookmark from "@/resources/post";
import { usePathname, useSearchParams } from 'next/navigation'
import { ThemeSwitcher } from "./themeSwitcher"
import { useTheme } from "next-themes";


export default function Navbar() {

  const [url, setCurrentURL] = useState('');
  const [dropdownState, setDropdownState] = useState(false);

  const pathname = usePathname()
  const searchParams = useSearchParams()

  const { theme } = useTheme();

  useEffect(() => {
    const new_url = `${pathname}${window.location.hash}?${searchParams}`
    console.log("Current URL", new_url);
    if (url != new_url) {
      setDropdownState(false)
    }
    setCurrentURL(new_url)
  })

  const navItems = [
    { key: 'home', href: '/', icon: <Home />, label: 'Home' },
    { key: 'about', href: '/about', icon: <Info />, label: 'About' },
    { key: 'projects', href: '/projects', icon: <Monitor />, label: 'Projects' },
    { key: 'posts', href: '/posts', icon: <Bookmark />, label: 'Posts' },
  ];



  return (
    <header className="navbar w-full z-50 text-black fixed top-0 left-0 right-0 mx-auto h-36">
      <div className={` ${theme === 'dark' ? 'bg-gradient-to-r from-grad-purp to-grad-blue via-black via-55% ' : 'bg-gradient-to-r from-grad-purp to-grad-blue via-white via-55% '}flex items-center justify-between mx-auto p-4 border-2 shadow-xl shadow-neutral-600 whitespace-nowrap`}>
        <div className="flex flex-row items-center justify-center">
          <div className={`${theme === 'dark' ? 'bg-black border-white ' : 'bg-white border-black'} border-2 rounded-3xl p-4 w-40 max-w-fit text-center shadow-xl`}>
              <h1 className={`${theme === 'dark' ? 'text-white' : 'text-black'} font-medium`}>Faris Jiwad</h1>
          </div>
          <div className={` p-4 w-40`}>
            <ThemeSwitcher />
          </div>
        </div>
        {/* Dropdown menu for mobile screens */}
        <div className="block md:hidden relative">
          <button onClick={() => setDropdownState(!dropdownState)} className="transition bg-button-teal border-2 border-white rounded-3xl p-4 mx-2 hover:text-black hover:bg-slate-100 hover:shadow-xl">
            Menu
          </button>
          <ul className={`${!dropdownState ? "hidden" : ""} absolute left-0 mt-2 w-48 bg-white shadow-lg border rounded-lg`}>
            {navItems.map(item => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Normal Menu for Regular Screens */}
        <ul className="hidden font-medium md:flex flex-row justify-end pl-2 space-x-4 ">
          {navItems.map(item => (
            <li key={item.key} >
              <Link
                href={item.href}
                className={`${theme === 'dark' ? 'bg-black border-white text-white' : 'bg-white border-black text-black'} transition flex flex-row space-x-2 border-2 max-w-32 min-w-fit border-white rounded-3xl p-4 mx-2 hover:text-black hover:bg-slate-100 hover:shadow-xl hover:-translate-y-1 hover:scale-110`}
              >
                {item.icon}
                <p className="">{item.label}</p>
              </Link>
            </li> 
          ))}
        </ul>
      </div>
    </header>
  );
} 