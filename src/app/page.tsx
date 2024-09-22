"use client"

import React from "react";
import { ReactTyped } from "react-typed";


export default function HomePage() {
    return (
        <div className="absolute inset-0 h-full w-full items-center px-5 pb-24 pt-96 bg-gradient-to-r from-grad-purp to-grad-blue">
            <div>
                <h2 className="text-2xl text-center text-slate-400">Hey there, I'm Faris. I code things and it works sometimes</h2>
                <h2 className="text-4xl text-center text-white">
                    <ReactTyped
                        strings={[
                            "Fullstack Engineer", "Systems Engineer", "Machine Learning Engineer", "Software Developer"
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                    />
                </h2>
            </div>
        </div>
    )
}