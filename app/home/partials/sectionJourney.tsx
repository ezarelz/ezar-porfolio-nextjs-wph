'use client';

import JourneyCarousel from '@/components/journey/JourneyCarousel';

export default function SectionJourney() {
  return (
    <section className='w-full py-20'>
      <div className='max-w-[1200px] mx-auto px-6 md:px-0'>
        {/* Heading */}
        <h2 className='text-[28px] md:text-[40px] font-bold text-white'>
          My Journey in Tech
        </h2>

        <p className='text-white/70 text-sm md:text-base max-w-[650px] mt-4 leading-relaxed'>
          From small gigs to real-world challenges — each experience helped me
          grow as a builder and problem-solver.
        </p>

        {/* Spacer */}
        <div className='mt-10' />

        {/* Carousel */}
        <JourneyCarousel />
      </div>
    </section>
  );
}
