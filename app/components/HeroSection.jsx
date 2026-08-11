"use client";
import React from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section>
      {/* Use md:grid-cols-12 instead of sm:grid-cols-12 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-y-0">
        
        {/* Text block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1 , scale: 1 }} 
          transition={{ duration: 0.5 }} 
          className="md:col-span-7 place-self-center text-center md:text-left"
        >
          <h1 className="font-heading text-ink mb-4 text-5xl sm:text-4xl md:text-4xl lg:text-5xl lg:leading-normal font-semibold text-balance">
            <span className="text-primary">
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
          <p className="text-ink-soft text-lg mb-6 sm:text-lg lg:text-xl">
            Turning ideas into reality with code, curiosity, and creativity.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => window.location.href = '#contact'}
              className="px-6 py-3 rounded-full bg-primary text-surface font-bold shadow-[0_10px_24px_-10px_var(--primary)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105">
              Connect with me
            </button>

            <button
              onClick={() => window.open('https://drive.google.com/file/d/1Rj2GMPuareROcTheJCZJnI9kXgVjfAAG/view?usp=drive_link', '_blank')}
              className="px-6 py-3 rounded-full bg-surface border border-line text-ink font-bold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary">
              Download CV
            </button>
          </div>
        </motion.div>

        {/* Image block */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5 place-self-center mt-4 md:mt-0"
        >
          <div className="relative w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]">
            {/* Morphing glow behind the photo */}
            <div
              className="about-graphic-blob absolute -inset-4 opacity-70 blur-2xl"
              style={{ background: "linear-gradient(135deg, var(--primary-soft), var(--secondary))" }}
              aria-hidden="true"
            />

            {/* Floating sparkle particles */}
            <span className="sparkle" style={{ top: "-4%", right: "4%", width: 14, height: 14, "--sparkle-color": "var(--accent)", animationDuration: "2.6s", animationDelay: "0s" }} aria-hidden="true" />
            <span className="sparkle" style={{ top: "18%", right: "-6%", width: 9, height: 9, "--sparkle-color": "var(--primary)", animationDuration: "3.1s", animationDelay: "-1s" }} aria-hidden="true" />
            <span className="sparkle" style={{ bottom: "10%", left: "-5%", width: 12, height: 12, "--sparkle-color": "var(--secondary)", animationDuration: "2.8s", animationDelay: "-0.6s" }} aria-hidden="true" />
            <span className="sparkle" style={{ bottom: "-3%", left: "20%", width: 8, height: 8, "--sparkle-color": "var(--accent)", animationDuration: "3.4s", animationDelay: "-2s" }} aria-hidden="true" />

            {/* Photo, blob-masked */}
            <div className="relative w-full h-full overflow-hidden border-4 border-surface shadow-xl rounded-[38%_62%_63%_37%/41%_44%_56%_59%]">
              <Image
                src="/images/Reeba_Prof_Photo.jpeg"
                alt="Reeba Qureshi"
                fill
                sizes="(min-width: 1024px) 350px, 250px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
