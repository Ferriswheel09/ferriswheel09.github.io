import Link from 'next/link'

export default function Navbar(){
    //Home, about, and skills I want to be on the same scrolling page (no need to be redundant)
    //But posts, projects, and contact me I want on different pages 
    return(
        <div className=''>
            <ul>
                <li>
                    <Link href="#home">Home</Link>
                </li>
                <li>
                    <Link href="#about">About</Link>
                </li>
                <li>
                    <Link href="/home">Posts</Link>
                </li>
                <li>
                    <Link href="/home">Projects</Link>
                </li>
                <li>
                    <Link href="#skills">Skills</Link>
                </li>
                <li>
                    <Link href="/home">Contact Me</Link>
                </li>

            </ul>
        </div>
    )
}