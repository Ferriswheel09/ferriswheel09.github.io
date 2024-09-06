import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";



export default function Footer(){
    return(
        <div className="bg-black pt-2">
            <div className="text-center grid grid-cols-2">
                <a href="https://github.com/Ferriswheel09/" target="_blank" className="flex justify-center items-center p-4 bg-slate-400">
                    <FontAwesomeIcon className="max-h-10 mx-2 text-blue-500 hover:-translate-y-1  hover:cursor-pointer" icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/faris-jiwad/" className="flex justify-center items-center p-4">
                    <FontAwesomeIcon className="max-h-10 mx-2 text-blue-500 hover:-translate-y-1  hover:cursor-pointer" icon={faLinkedin} />
                </a>
            </div>
            <div className="text-center text-neutral-400 pb-2">
                <p>Faris Jiwad &copy; 2024</p>
            </div>
        </div>
    )
}