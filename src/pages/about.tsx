import React from "react";
import Technologies from "@/components/technologies";

export default function AboutPage(){
    return(
        <div className="pt-96 text-white">
            <h1>This will be the About Page!</h1>
            <h1>Below is some of the technologies I know:</h1>
            <Technologies />
        </div>
    )
}