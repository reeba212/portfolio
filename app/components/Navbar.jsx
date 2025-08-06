"use client";
import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import MenuOverlay from './MenuOverlay';

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Experience", path: "#experiences" },
    { title: "Education", path: "#education" },
    { title: "Skills", path: "#skills" },
    { title: "Projects", path: "#projects" },
    { title: "Achievements", path: "#achievements" },
    { title: "Contact", path: "#contact" },
];

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 border-[#33353F] bg-[#121212] bg-opacity-100'>
            <div className='flex flex-wrap lg:py-4 items-center justify-between mx-auto px-4 py-2'>
                {/* Logo */}
                <Link href={"/"} className='flex items-center'>
                    <Image 
                        src="/images/logo.png" 
                        alt="Logo" 
                        width={50}  // Adjust size as needed
                        height={50} // Adjust size as needed
                        priority
                    />
                </Link>
                
                {/* Mobile Menu Button */}
                <div className='block md:hidden'>
                    <button 
                        onClick={() => setNavbarOpen(!navbarOpen)} 
                        className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                    >
                        {navbarOpen ? <XMarkIcon className="h-6 w-6"/> : <Bars3Icon className="h-6 w-6"/>}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:block md:w-auto'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {navbarOpen && <MenuOverlay links={navLinks} />}
        </nav>
    );
}
