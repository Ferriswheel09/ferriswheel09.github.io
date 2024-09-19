import React from "react";
import Technologies from "@/components/technologies";
import { GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs';

async function getImages(){
    const dir = path.join(process.cwd(), 'public/tech');
    console.log("Directory", dir)
    const filenames = fs.readdirSync(dir);
  
    const images = filenames.map((name) => `/tech/${name}`);
    
    return images;
  };

export default async function AboutPage(){
    const images = await getImages()
    return(
        <div className="pt-36 text-white overflow-x-hidden inset-0 h-full w-full items-center px-5 pb-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            <div>
            <h1 className="text-4xl font-bold my-4">Things that</h1>
            <h2 className="text-2xl my-4">I've done:</h2>
            <h2 className="text-2xl my-4">I'm doing:</h2>
            <h2 className="text-2xl my-4">I will do:</h2>
            </div>
            <h1 className="text-4xl font-bold mb-4">Skills:</h1>
            <Technologies images={images}/>
        </div>
    )
}