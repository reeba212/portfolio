"use client";
import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import MenuOverlay from './MenuOverlay';
import ThemeToggle from './ThemeToggle';

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
        <nav className='fixed top-0 left-0 right-0 z-30 border-b border-line bg-bg/85 backdrop-blur-md'>
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

                <div className='flex items-center gap-2 md:hidden'>
                    <ThemeToggle />
                    <button
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        className='flex items-center px-3 py-2 border rounded-full border-line text-ink-soft hover:text-primary hover:border-primary'
                    >
                        {navbarOpen ? <XMarkIcon className="h-6 w-6"/> : <Bars3Icon className="h-6 w-6"/>}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:flex md:items-center md:gap-6'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                    <ThemeToggle />
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {navbarOpen && <MenuOverlay links={navLinks} />}
        </nav>
    );
}
