"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Technologies() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [rotate, setRotate] = useState(0);

    return (
        <div className="grid grid-cols-6 gap-4">
            <motion.img
                initial={{ scale: 0.3 }}
                animate={{ rotate:360 }}
                transition={{
                    type: "smooth",
                    repeatType: "loop",
                    duration: 10,
                    repeat: Infinity,
                }}
                src='/tech/react.svg'
                alt="floater"
            />
            <motion.img
                initial={{ scale: 0.3 }}
                animate={{ rotate:360 }}
                transition={{
                    type: "smooth",
                    repeatType: "loop",
                    duration: 10,
                    repeat: Infinity,
                }}
                src='/tech/react.svg'
                alt="floater"
            />
            <motion.img
                initial={{ scale: 0.3 }}
                animate={{ rotate:360 }}
                transition={{
                    type: "smooth",
                    repeatType: "loop",
                    duration: 10,
                    repeat: Infinity,
                }}
                src='/tech/react.svg'
                alt="floater"
            />
            <motion.img
                initial={{ scale: 0.3 }}
                animate={{ rotate:360 }}
                transition={{
                    type: "smooth",
                    repeatType: "loop",
                    duration: 10,
                    repeat: Infinity,
                }}
                src='/tech/react.svg'
                alt="floater"
            />
            <motion.img
                initial={{ scale: 0.3 }}
                animate={{ rotate:360 }}
                transition={{
                    type: "smooth",
                    repeatType: "loop",
                    duration: 10,
                    repeat: Infinity,
                }}
                src='/tech/react.svg'
                alt="floater"
            />
            <motion.img
                initial={{ scale: 0.3 }}
                animate={{ rotate:360 }}
                transition={{
                    type: "smooth",
                    repeatType: "loop",
                    duration: 10,
                    repeat: Infinity,
                }}
                src='/tech/react.svg'
                alt="floater"
            />
            <motion.img
                initial={{ scale: 0.3 }}
                animate={{ rotate:360 }}
                transition={{
                    type: "smooth",
                    repeatType: "loop",
                    duration: 10,
                    repeat: Infinity,
                }}
                src='/tech/react.svg'
                alt="floater"
            />
            <motion.img
                initial={{ scale: 0.3 }}
                animate={{ rotate:360 }}
                transition={{
                    type: "smooth",
                    repeatType: "loop",
                    duration: 10,
                    repeat: Infinity,
                }}
                src='/tech/react.svg'
                alt="floater"
            />
            <motion.img
                initial={{ scale: 0.3 }}
                animate={{ rotate:360 }}
                transition={{
                    type: "smooth",
                    repeatType: "loop",
                    duration: 10,
                    repeat: Infinity,
                }}
                src='/tech/react.svg'
                alt="floater"
            />
        </div>
    )
}