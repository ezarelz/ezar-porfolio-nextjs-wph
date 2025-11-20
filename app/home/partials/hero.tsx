'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className='hero-bg relative min-h-screen overflow-hidden flex flex-col md:flex-row items-center justify-center'>
      {/* GRID BACKGROUND */}
      <div className='absolute inset-0 bg-grid'></div>

      {/* CROSS GRID OVERLAY */}
      <Image
        src='/cross-grid.svg'
        alt='Grid Cross Overlay'
        width={1089}
        height={503}
        className='
          absolute -top-8 left-2.5
          opacity-70 mix-blend-screen pointer-events-none
          [mask-image:linear-gradient(to_bottom_right,white_60%,transparent_100%)]
        '
        priority
      />

      {/* === MAIN CONTAINER === */}
      <div className='relative z-10 w-full max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24 mt-20 md:mt-0'>
        {/* === LEFT CONTENT (TEXT AREA) === */}
        <div className='flex flex-col items-start justify-center text-center md:text-left max-w-[540px] md:mt-0 -mt-6'>
          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-neutral-300 text-2xl mb-3 tracking-wide'
          >
            Hi, I&apos;m Ezar Eleazar
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className='    text-white font-bold leading-[1.1]
    text-[clamp(2.7rem,7vw,4.5rem)] md:text-[clamp(2.5rem,5vw,4.5rem)]
    mt-2 md:mt-0
    space-y-2
'
          >
            <span className='block'>
              FRONT
              <span
                className='text-[#ffffff] font-light italic ml-2'
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                END
              </span>
            </span>
            <span className='block'>DEVELOPER</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-neutral-400 text-left text-[clamp(1.rem,1.3vw,1.125rem)] mt-6 leading-relaxed'
          >
            Passionate about frontend development, I focus on crafting digital
            products that are visually polished, performance-optimized, and
            deliver a consistent experience across all platforms.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className='flex justify-center md:justify-start w-full'
          >
            <Button
              asChild
              className='mt-8 h-12 px-8 text-base font-medium bg-[#089db0] hover:bg-[#0aaec2]'
            >
              <a href='#contact'>
                <Mail className='w-5 h-5' />
                Hire Me
              </a>
            </Button>
          </motion.div>
        </div>

        {/* === RIGHT IMAGE (TOP ON MOBILE) === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
          className='relative shrink-0 md:-translate-y-24 md:mr-8 -translate-y-18 md:mb-0'
        >
          <Image
            src='/images/hero_lanyard.png'
            alt='Hero Lanyard'
            width={360}
            height={600}
            priority
            className='rounded-md drop-shadow-[0_0_25px_rgba(0,0,0,0.4)]'
          />
        </motion.div>
      </div>
    </section>
  );
}
