import React from "react";
import Technologies from "@/components/technologies";
import { GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs';

/*
Filled in Checkbox: <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
Blank Checkbox: <svg class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                        */

async function getImages() {
    const dir = path.join(process.cwd(), 'public/tech');
    console.log("Directory", dir)
    const filenames = fs.readdirSync(dir);

    const images = filenames.map((name) => `/tech/${name}`);

    return images;
};

const TaskList = () => {
    const tasks = [
        { id: 1, text: "Get an AWS Cloud Practitioner and AWS Solutions Architect Associate Certificates", complete: true },
        { id: 2, text: "Create an online multiplayer game engine (Flock) that will support massive concurrent networking", complete: false },
        { id: 3, text: "Learn Rust to assist in said game engine (due to networking and JS benefits)", complete: false },
        { id: 4, text: "Finish this website and get hosting set up", complete: false },
        { id: 5, text: "Get an AWS Security and AWS Machine Learning Engineer Certificates", complete: false },
    ]

    return tasks
}

export default async function AboutPage() {
    const images = await getImages()
    const tasks = TaskList()
    console.log(tasks)
    return (
        <div className="pt-36 text-white overflow-x-hidden inset-0 h-full w-full items-center px-5 pb-24">
            <div>
                <h1 className="text-4xl font-bold my-4">Things on my to-do list:</h1>
                <ul>
                    {tasks.map((task) => (
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
    )
}