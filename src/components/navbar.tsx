import React, { useEffect, useState } from "react";
import Server from "@/resources/server";
import Home from "@/resources/home";
import Info from "@/resources/about";
import Monitor from "@/resources/project";
import Bookmark from "@/resources/post";


export default function Navbar() {
    return (
        <header className="navbar text-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-slate-600">
                <div className="flex flex-row space-x-2">
                    <Server/>
                    <h1>Faris Jiwad</h1>
                </div>
                <ul className="font-medium flex flex-row p-4 space-x-4 ">
                    <div className="transition flex flex-row space-x-1 border-2 border-white rounded-lg p-2 hover:bg-slate-100 hover:shadow-xl hover:-translate-y-1 hover:scale-110">
                        <Home />
                        <li>Home</li>
                    </div>
                    <div className="transition flex flex-row space-x-1 border-2 border-white rounded-lg p-2 hover:bg-slate-100 hover:shadow-xl hover:-translate-y-1 hover:scale-110">
                        <Info />
                        <li>About</li>
                    </div>
                    <div className="transition flex flex-row space-x-1 border-2 border-white rounded-lg p-2 hover:bg-slate-100 hover:shadow-xl hover:-translate-y-1 hover:scale-110">
                        <Monitor />
                        <li>Projects</li>
                    </div>
                    <div className="transition flex flex-row space-x-1 border-2 border-white rounded-lg p-2 hover:bg-slate-100 hover:shadow-xl hover:-translate-y-1 hover:scale-110">
                        <Bookmark/>
                        <li>Posts</li>
                    </div>
                </ul>
            </div>
        </header>
    )
}