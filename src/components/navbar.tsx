import React, { useEffect, useState } from "react";

export default function Navbar() {
    return (
        <header className="navbar">
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Posts</li>
                </ul>
            </div>
        </header>
    )
}