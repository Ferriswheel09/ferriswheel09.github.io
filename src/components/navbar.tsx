import React from "react";
import Link from "next/link";
import Home from "@/resources/home";
import Info from "@/resources/about";
import Monitor from "@/resources/project";
import Bookmark from "@/resources/post";



export default function Navbar() {
    const navItems = [
      { key: 'home', href: '/', icon: <Home/>, label: 'Home' },
      { key: 'about', href:'/', icon: <Info />, label: 'About' },
      { key: 'projects', href:'/', icon: <Monitor />, label: 'Projects' },
      { key: 'posts', href:'/posts', icon: <Bookmark />, label: 'Posts' },
    ];
  
    return (
      <header className="navbar text-black z-10 fixed w-full h-min">
        <div className="flex align-center flex-wrap items-center justify-between mx-auto p-4 bg-navbar-blue">
          <div className="border-2 rounded-3xl p-4 w-40 text-center bg-button-teal shadow-xl">
            <h1 className="font-medium">Faris Jiwad</h1>
          </div>
          <ul className="font-medium flex flex-row p-4 space-x-4">
            {navItems.map(item => (
              <Link
                href={item.href}
                key={item.key}
                className="transition flex flex-row space-x-1 bg-button-teal border-2 w-40 border-white rounded-3xl p-4 hover:text-black hover:bg-slate-100 hover:shadow-xl hover:-translate-y-1 hover:scale-110"
              >
                {item.icon}
                <p className="pl-5">{item.label}</p>
              </Link>
            ))}
          </ul>
        </div>
      </header>
    );
  }