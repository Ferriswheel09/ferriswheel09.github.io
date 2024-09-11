"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Technologies() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [rotate, setRotate] = useState(0);

    return (
        <div>
            <motion.img
                initial={{ y: -10 }}
                animate={{ y: 10 }}
                transition={{
                    type: "smooth",
                    repeatType: "mirror",
                    duration: 2,
                    repeat: Infinity,
                }}
                src='/react.svg'
                alt="floater"
            />
        </div>
    )
}