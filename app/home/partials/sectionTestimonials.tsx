'use client';

import {
  TestimonialCardBig,
  TestimonialCardWide,
  TestimonialCardSmall,
} from '@/components/trusted-voices';

import { testimonialsData } from '@/constants/testimonials-data';

export default function SectionTestimonials() {
  const { big, wide, small } = testimonialsData;

  return (
    <section className='w-full py-16 md:py-24'>
      <div className='container mx-auto px-4 md:px-6'>
        {/* Header */}
        <div className='mb-10 md:mb-14 text-center flex flex-col items-center gap-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-white'>
            Trusted Voices
          </h2>

          <p className='text-gray-400 max-w-[655px] mx-auto text-center'>
            Here&apos;s what people say about working with me — across projects,
            teams, and timelines.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
          {/* LEFT big card */}
          <TestimonialCardBig
            {...big}
            className='min-h-[380px] md:min-h-[520px]'
          />

          {/* RIGHT column */}
          <div className='flex flex-col gap-6 md:gap-8'>
            <TestimonialCardWide {...wide} className='min-h-60' />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {small.map((item, i) => (
                <TestimonialCardSmall key={i} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
