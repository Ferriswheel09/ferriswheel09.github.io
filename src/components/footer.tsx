import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Footer(){
    return(
        <div className="bg-neutral-900 pt-2 border-t-2 z-50">
            <div className="flex flex-row align-center justify-center">
                <a href="https://github.com/Ferriswheel09/" target="_blank" className="px-1">
                    <img src="github-brands.png" className="h-10 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"/>
                </a>
                <a href="https://www.linkedin.com/in/faris-jiwad/" className="px-1">
                    <img src="linkedin-brands.png" className="h-10 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"/>
                </a>
            </div>
            <div className="text-center text-neutral-400 pb-2">
                <p>Faris Jiwad &copy; 2024</p>
            </div>
        </div>
    )
}