"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Home from "@/resources/home";
import Monitor from "@/resources/project";
import Bookmark from "@/resources/post";
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [dropdownState, setDropdownState] = useState(false);
  const pathname = usePathname();

  const getThemeIcon = (key: string) => {
    switch (key) {
      case 'home':
        return <Home color={`#FFFFFF`} />;
      case 'projects':
        return <Monitor color={`#FFFFFF`} />;
      case 'posts':
        return <Bookmark color={`#FFFFFF`} />;
      default:
        return null;
    }
  }

  const navItems = [
    { key: 'home', href: '/', icon: getThemeIcon('home'), label: 'Home' },
    { key: 'projects', href: '/projects', icon: getThemeIcon('projects'), label: 'Projects' },
    //{ key: 'posts', href: '/posts', icon: getThemeIcon('posts'), label: 'Posts' },
  ];

  return (
    <header className="navbar w-full z-50 text-black fixed top-0 left-0 right-0 mx-auto h-auto md:h-36">
      <div className={`bg-gradient-to-r from-grad-purp to-grad-blue via-black via-55% flex flex-wrap items-center justify-between mx-auto p-3 sm:p-4 border-2 shadow-xl shadow-neutral-600`}>
        <div className="flex flex-row items-center space-x-2">
          <div className={`bg-black border-white border-2 rounded-3xl p-2 sm:p-4 w-auto text-center shadow-xl`}>
            <h1 className={`text-white font-medium text-sm sm:text-base`}>Faris Jiwad</h1>
          </div>
        </div>
        
        {/* Dropdown menu for mobile screens */}
        <div className="block md:hidden relative mobile-menu-container">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setDropdownState(!dropdownState);
            }} 
            className={`bg-black border-white text-white border-2 rounded-3xl p-2 text-sm`}
          >
            Menu
          </button>
          <ul className={`${!dropdownState ? "hidden" : ""} absolute right-0 mt-2 w-48 bg-black text-white border-white shadow-lg border-2 rounded-lg z-50`}>
            {navItems.map(item => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-3 hover:bg-gray-800`}
                  onClick={() => setDropdownState(false)}
                >
                  <span className="w-5 h-5 flex items-center justify-center">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Normal Menu for Regular Screens */}
        <ul className="hidden font-medium md:flex flex-row justify-end pl-2 space-x-4">
          {navItems.map(item => (
            <li key={item.key}>
              <Link
                href={item.href}
                className={`bg-black border-white text-white transition flex flex-row space-x-2 border-2 max-w-32 min-w-fit border-white rounded-3xl p-4 mx-2 hover:shadow-xl hover:-translate-y-1 hover:scale-110`}
              >
                {item.icon}
                <p>{item.label}</p>
              </Link>
            </li> 
          ))}
        </ul>
      </div>
    </header>
  );
}