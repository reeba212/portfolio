import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = ({ links }) => {
    return (
        <ul className='flex flex-col py-4 items-center bg-[#121212] md:hidden'>
            {links.map((link, index) => (
                <li key={index} className="py-2">
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay;
