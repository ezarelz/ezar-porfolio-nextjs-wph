'use client';

import Image from 'next/image';
import {
  SkillColumnWithMe,
  SkillColumnOther,
} from '@/components/skill-section';

const skills = [
  'React Expert',
  'Pixel Perfect',
  'TypeScript Proficiency',
  'Clean, Maintainable Code',
  'Performance Optimization',
  'Responsive Website',
  'UI Design Proficiency (Figma)',
];

export default function SectionSkillComparison() {
  return (
    <section className='skill-bg relative w-full py-24 overflow-hidden'>
      {/* === GRID BG === */}
      <div className='absolute inset-0 bg-grid opacity-[0.35]' />

      {/* === CROSSGRID OVERLAY (BOTTOM LEFT) === */}
      <Image
        src='/cross-grid.svg'
        alt='cross grid'
        width={1200}
        height={800}
        className='
    absolute bottom-0 left-0 
    w-[1600px]   
    opacity-60 
    mix-blend-screen 
    pointer-events-none
    [mask-image:linear-gradient(to_top,white_45%,transparent_100%)] 
   
  '
      />
      {/* === CONTENT WRAPPER === */}
      <div className='relative max-w-[1200px] mx-auto px-6 md:px-0'>
        {/* HEADING */}
        <div className='text-center'>
          <h2 className='text-[32px] md:text-[40px] font-bold text-white leading-tight'>
            Not Your Typical Frontend Developer
          </h2>
          <p className='text-white/70 text-sm md:text-base mt-4'>
            I care about how it looks, how it works, and how it feels — all at
            once
          </p>
        </div>

        <div className='mt-[52px]' />

        {/* === MAIN BOX === */}
        <div
          className='
            w-full rounded-md border border-white/10 
            bg-black/90 backdrop-blur-sm p-5 md:p-10
          '
        >
          <div className='grid grid-cols-3'>
            {/* --- HEADER SKILL --- */}
            <div className='pl-6 py-2 border-b border-white/10'>
              <span className='text-white font-semibold text-lg'>Skill</span>
            </div>

            {/* --- HEADER WITH ME --- */}
            <div className='pl-3 py-2 bg-[#075864] border-b border-white/10'>
              <span className='text-white font-semibold text-lg'>With Me</span>
            </div>

            {/* --- HEADER OTHER --- */}
            <div className='pl-6 py-2 border-b border-white/10'>
              <span className='text-white font-semibold text-lg'>Other</span>
            </div>

            {/* === CONTENT ROWS === */}

            {/* LEFT COLUMN */}
            <div>
              {skills.map((label) => (
                <div
                  key={label}
                  className='
        flex items-center 
        h-[60px] md:h-[72px]
        border-b border-white/10 last:border-none
        pl-1 pr-6    
      '
                >
                  <span className='text-white/80 text-sm md:text-base leading-tight'>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* WITH ME COLUMN  */}
            <div className='bg-[#075864]'>
              {skills.map((label) => (
                <div
                  key={label}
                  className='
                      flex items-center justify-center
        h-[60px] md:h-[72px]
        border-b border-white/10 last:border-none
                  '
                >
                  <SkillColumnWithMe />
                </div>
              ))}
            </div>

            {/* OTHER COLUMN */}
            <div>
              {skills.map((label) => (
                <div
                  key={label}
                  className='
                        flex items-center justify-center
        h-[60px] md:h-[72px]
        border-b border-white/10 last:border-none
                  '
                >
                  <SkillColumnOther />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
