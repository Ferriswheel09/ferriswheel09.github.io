"use client";

import React from "react";
import Github from "@/resources/github";
import LinkedIn from "@/resources/linkedin";

export default function Footer() {
    return(
        <div className={`'bg-neutral-900' pt-2 border-t-2 z-50`}>
            <div className="flex flex-row align-center justify-center">
                <a href="https://github.com/Ferriswheel09/" target="_blank" className="px-1">
                    <div className="h-10 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer">
                        <Github color={`#FFFFFF`}/>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/faris-jiwad/" target="_blank" className="px-1">
                    <div className="h-10 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer">
                        <LinkedIn color={`#FFFFFF`}/>
                    </div>
                </a>
            </div>
            <div className="text-center text-neutral-400 pb-2">
                <p>Faris Jiwad &copy; 2024</p>
            </div>
        </div>
    )
}