"use client";

import React from "react";
import { useTheme } from "next-themes";

export default function Footer() {
    const { theme } = useTheme();
    
    // Get repository name from environment or use empty string for local development
    const repoName = process.env.NEXT_PUBLIC_REPO_NAME || '';
    
    // Create the correct image paths for GitHub Pages
    const githubIconPath = `/${repoName}/github-brands.png`.replace(/\/+/g, '/');
    const linkedinIconPath = `/${repoName}/linkedin-brands.png`.replace(/\/+/g, '/');

    return(
        <div className={`${theme === 'dark' ? 'bg-neutral-900' : 'bg-neutral-100'} pt-2 border-t-2 z-50`}>
            <div className="flex flex-row align-center justify-center">
                <a href="https://github.com/Ferriswheel09/" target="_blank" className="px-1">
                    {/* Use standard img element for better compatibility with static exports */}
                    <img 
                        src={githubIconPath} 
                        alt="Github" 
                        width={40}
                        height={40}
                        className="h-10 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
                    />
                </a>
                <a href="https://www.linkedin.com/in/faris-jiwad/" target="_blank" className="px-1">
                    <img 
                        src={linkedinIconPath} 
                        alt="LinkedIn" 
                        width={40}
                        height={40}
                        className="h-10 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
                    />
                </a>
            </div>
            <div className="text-center text-neutral-400 pb-2">
                <p>Faris Jiwad &copy; 2024</p>
            </div>
        </div>
    )
}