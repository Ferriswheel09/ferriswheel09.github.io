"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TechnologiesProps {
    images: string[];
}

const getRandomNumber = (min: number, max: number) =>
    Math.random() * (max - min) + min;

const languageTexts = [
    "C#", "C", "C++", "Java", "NextJS", "NodeJS", "Python", "React", "Typescript"
]

export default function Technologies({ images }: TechnologiesProps) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {images.map((src, index) => {
                // Random values for rotation direction, initial position, and scaling
                const rotateDirection = Math.random() > 0.5 ? 360 : -360; // Random rotation direction
                
                //Make same rotation and when hovered over, make the image itself grow larger
                return (
                    <div key={index} className="flex flex-col items-center justify-center border-2 border-white hover:bg-slate-400 hover:-translate-y-1 hover:scale-125 hover:z-40">
                        <motion.img
                            animate={{ rotate: rotateDirection }}
                            transition={{
                                type: "smooth",
                                repeatType: "mirror",
                                duration: getRandomNumber(8, 12), // Random duration
                                repeat: Infinity,
                            }}
                            src={src}
                            alt="floater"
                            className="w-32 m-4" // Example size, adjust as needed
                        />
                        <p className="text-white text-xl mt-4">{languageTexts[index]}</p>
                    </div>
                );
            })}
        </div>
    );
}