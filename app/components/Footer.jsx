import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
      <div className='container p-12 flex justify-between items-center'>
        {/* Logo */}
        <Image 
          src="/images/logo.png" 
          alt="Logo" 
          width={50} 
          height={50} 
          priority
        />

        {/* Rights Reserved */}
        <p className='text-slate-500'>
          All rights reserved
        </p>
      </div>
    </footer>
  );
}
