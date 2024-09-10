'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Home from "@/resources/home";
import Info from "@/resources/about";
import Monitor from "@/resources/project";
import Bookmark from "@/resources/post";
import Droplist from "./dropdown";

export default function Navbar() {
  const size = useWindowSize();
  
  const navItems = [
    { key: 'home', href: '/#home', icon: <Home />, label: 'Home' },
    { key: 'about', href: '/#about', icon: <Info />, label: 'About' },
    { key: 'projects', href: '/#projects', icon: <Monitor />, label: 'Projects' },
    { key: 'posts', href: '/posts', icon: <Bookmark />, label: 'Posts' },
  ];

  if (size.width > 1500) {
    return (
      <header className="navbar w-full z-50 text-black fixed top-0 left-0 right-0 mx-auto h-36">
        <div className="bg-gradient-to-r from-grad-purp to-grad-blue via-black via-55% flex items-center justify-between mx-auto p-4 border-2 shadow-xl shadow-neutral-600 whitespace-nowrap">
          <div className="border-2 rounded-3xl p-4 w-40 max-w-fit text-center bg-button-teal shadow-xl">
            <h1 className="font-medium">Faris Jiwad</h1>
          </div>
          <ul className="font-medium flex flex-row justify-end pl-2 space-x-4">
            {navItems.map(item => (
              <li key={item.key} >
                <Link
                  href={item.href}
                  className="transition flex flex-row space-x-2 bg-button-teal border-2 max-w-32 min-w-fit border-white rounded-3xl p-4 mx-2 hover:text-black hover:bg-slate-100 hover:shadow-xl hover:-translate-y-1 hover:scale-110"
                >
                  {item.icon}
                  <p className="pl-5">{item.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    );
  } else {
    return (
      <header className="navbar min-w-full z-50 text-black fixed top-0 left-0 right-0 mx-auto h-36">
        <div className="bg-gradient-to-r from-grad-purp to-grad-blue via-black via-55% flex items-center justify-between mx-auto p-4 border-2 shadow-xl shadow-neutral-600 whitespace-nowrap">
          <div className="border-2 rounded-3xl p-4 w-40 max-w-fit text-center bg-button-teal shadow-xl">
            <h1 className="font-medium">Faris Jiwad</h1>
          </div>  
          <Droplist navItems={navItems} />
        </div>
      </header>
    );
  }
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      if(window.innerWidth && window.innerHeight){
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
