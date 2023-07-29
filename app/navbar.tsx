"use client"

import * as React from "react";
import * as GameIcons from "react-icons/gi";

export default function Navbar() {
    // Whether to show navigation bar
    const [showNav, setShowNav] = React.useState<boolean>();

    return (
        <div className="flex items-center justify-between flex-nowrap pb-3 border-b-[1px] border-neutral-500">
            {/* Name */}
            <div className="sm:text-3xl text-xl font-block inline-block"><a href="/" className="inline-block">Bob</a></div>

            {/* Hamburger */}
            <div className="sm:hidden text-2xl" onClick={() => setShowNav(!showNav)}><GameIcons.GiHamburgerMenu /></div>

            {/* Navigation visible for mobiles */}
            <nav className={`max-sm:absolute max-sm:w-full left-0 transtion ease-in duration-300 ${showNav ? "top-16 visible" : "max-sm:invisible top-0"}`}>
                <ul className="flex items-center max-sm:text-sm justify-between max-sm:justify-around">
                    
                    {/* Navbar items */}
                    <li className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1 ${ showNav ? "max-sm:translate-x-0" : "-translate-x-32" }`}>
                        <a href="#services" className="px-2">Services</a>
                    </li>
                    <li className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1 ${ showNav ? "max-sm:translate-x-0" : "-translate-x-32" }`}>
                        <a href="#projects" className="px-2">Projects</a>
                    </li>
                    <li className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1 ${ showNav ? "max-sm:translate-x-0" : "-translate-x-32" }`}>
                        <a href="#contact" className="whitespace-nowrap px-2">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}