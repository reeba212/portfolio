import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='footer bg-surface border-t border-line text-ink'>
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
        <p className='text-ink-soft text-sm'>
          All rights reserved
        </p>
      </div>
    </footer>
  );
}
