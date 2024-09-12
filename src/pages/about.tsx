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
        <div className="pt-96 text-white">
            <h1>This will be the About Page!</h1>
            <h1>Below is some of the technologies I know:</h1>
            <Technologies images={images}/>
        </div>
    )
}