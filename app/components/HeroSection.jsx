"use client";
import React from 'react'
import Image from "next/image"
import { TypeAnimation  } from 'react-type-animation';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className='lg:py-5'>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1 , scale: 1 }} 
                transition={{ duration: 0.5 }} 
                className='col-span-7 place-self-center text-center sm:text-left'
            >
                <h1 className='text-white mb-4 text-5xl sm:text-4xl md:text-5xl lg:text-7xl lg:leading-normal justify-self-start font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                        Hello, I'm
                    </span>
                    <br/>
                    <TypeAnimation
                        sequence={[
                            'Reeba',
                            1000,
                            'Software Developer',
                            1000,
                            'ML/AI Engineer',
                            1000,
                            'Data Scientist',
                            1000,
                            'Cloud Engineer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-lg mb-6 sm:text-lg lg:text-xl '>
                    Turning ideas into reality with code, curiosity, and creativity.
                </p>
                <div>
                    <button 
                        onClick={() => window.location.href = '#contact'} 
                        className="group relative px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white transition-all duration-300 hover:opacity-80">
                        Hire Me
                    </button>

                    <button 
                        onClick={() => window.open('https://drive.google.com/file/d/1Rj2GMPuareROcTheJCZJnI9kXgVjfAAG/view?usp=drive_link', '_blank')}
                        className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                            Download CV
                        </span>
                    </button>
                </div>
            </motion.div>

            <motion.div 
                initial={{ scale: 0.5, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }} 
                transition={{ duration: 0.5 }} 
                className='col-span-5 place-self-center mt-4 lg:mt-0'
            >
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image 
                        src='/images/hero-image.png' 
                        alt='Hero Image' 
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={250}
                        height={250}
                    />
                </div>
            </motion.div>
        </div>
    </section>
  );
}
