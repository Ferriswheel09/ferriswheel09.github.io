"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TechnologiesProps {
    images: string[];
}

const getRandomNumber = (min: number, max: number) =>
    Math.random() * (max - min) + min;

export default function Technologies({ images }: TechnologiesProps) {
    return (
        <div className="grid grid-cols-6 gap-4">
            {images.map((src, index) => {
                // Random values for rotation direction, initial position, and scaling
                const initialX = getRandomNumber(-50, 50); // Random x shift
                const initialY = getRandomNumber(-50, 50); // Random y shift
                const rotateDirection = Math.random() > 0.5 ? 360 : -360; // Random rotation direction

                return (
                    <div>
                        <motion.img
                            key={index}
                            animate={{ rotate: rotateDirection }}
                            transition={{
                                type: "smooth",
                                repeatType: "mirror",
                                duration: getRandomNumber(8, 12), // Random duration
                                repeat: Infinity,
                            }}
                            src={src}
                            alt="floater"
                            className="w-28" // Example size, adjust as needed
                        />
                    </div>
                );
            })}
        </div>
    );
}