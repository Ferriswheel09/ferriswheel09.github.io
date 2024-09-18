"use client"

import React from "react";
import { ReactTyped } from "react-typed";


export default function HomePage() {
    return (
        <div className="absolute inset-0 h-full w-full items-center px-5 pb-24 pt-96 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            <div>
                <h2 className="text-2xl text-center text-slate-400">Hey there, I'm Faris. I type things and they work sometimes</h2>
                <h2 className="text-4xl text-center text-white">
                    <ReactTyped
                        strings={[
                            "Fullstack Developer / Systems Engineer / Machine Learning Engineer"
                        ]}
                        typeSpeed={40}
                    />
                </h2>
            </div>
        </div>
    )
}