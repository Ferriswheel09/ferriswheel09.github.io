import React, { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Link } from "@nextui-org/react";


interface navigationItems{
    key: String,
    href: String,
    icon: React.JSX.Element,
    label: String
}

export default function Droplist({ navItems }: { navItems: navigationItems }) {

    const [openNav, setOpenNav] = useState(false);

    const toggleNav = () => {
        setOpenNav(!openNav);
    };

    return (
        <div className="relative">
          <button
            onClick={toggleNav}
            className={`text-white border-2 p-2 bg-slate-600 hover:bg-slate-400 transition-colors duration-200 ${openNav ? 'bg-slate-800' : ''}`}
            aria-expanded={openNav}
            aria-controls="dropdown-menu"
          >
            Open Menu
          </button>
          {openNav && (
            <div
              id="dropdown-menu"
              className="absolute top-full right-0 mt-2 w-48 bg-white text-black border border-gray-300 rounded-lg shadow-lg z-10"
            >
              <ul className="flex flex-col space-y-1">
                {navItems.map(item => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className="block p-4 text-gray-700 hover:bg-gray-200 transition-colors duration-200 rounded-lg"
                      onClick={() => setOpenNav(false)} // Close menu on item click
                    >
                      <div className="flex items-center space-x-2">
                        {item.icon}
                        <span>{item.label}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    
}