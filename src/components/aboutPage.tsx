// app/about/FileContentDisplay.tsx
"use client";

import React from "react";
import { useTheme } from "next-themes";
import Technologies from "@/components/technologies";

export default function AboutComponent({tasks, images}: {tasks: any, images:any}) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`pt-36 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} overflow-x-hidden inset-0 h-full w-full items-center px-5 pb-24`}>
            <div>
                <h1 className="text-4xl font-bold my-4">Things on my to-do list:</h1>
                <ul>
                    {tasks.map((task:any) => (
                        <li key={task.id} className="text-xl">
                            {task.complete ? (
                                <div className="flex items-center my-4">
                                    <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span>{task.text}</span>
                                </div>
                            ) : (
                                <div className="flex items-center my-4">
                                    <svg class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span>{task.text}</span>
                                </div>
                            )}

                        </li>
                    ))}
                </ul>
            </div>
            <h1 className="text-4xl font-bold my-4">Skills:</h1>
            <Technologies images={images} />
    </div>
  );
}
