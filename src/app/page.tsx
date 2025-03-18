"use client";

import React from "react";
import { ReactTyped } from "react-typed";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center h-full w-full px-5 bg-gradient-to-r from-[#1a1a2e] via-black via-50% to-[#16213e]">
      <div className="text-center">
        <h2 className="text-2xl text-slate-400 mb-4">
          Hey there, I'm Faris. I code things and they work sometimes
        </h2>
        <h2 className="text-4xl text-white">
          <ReactTyped
            strings={[
              "Fullstack Engineer",
              "Systems Engineer",
              "Machine Learning Engineer",
              "Software Developer",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </h2>
      </div>
    </div>
  );
}
