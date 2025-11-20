'use client';

import { useState } from 'react';
import FAQItem from './FAQItem';
import { faqItems } from '@/constants/faq-items';
import { useEffect } from 'react';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const FAQContainer = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [api, setApi] = useState<CarouselApi>();

  const handlePrev = () => api?.scrollPrev();
  const handleNext = () => api?.scrollNext();

  // Setelah API ready, scroll ke activeIndex (khusus mobile)
  useEffect(() => {
    if (!api) return;

    // hanya untuk mobile (<= 768px)
    if (window.innerWidth < 768) {
      api.scrollTo(activeIndex, true);
    }
  }, [api, activeIndex]);

  return (
    <div className='w-full mt-10 overflow-hidden'>
      {/* Buttons top right */}
      <div className='flex justify-end mb-6 gap-3'>
        <button
          onClick={handlePrev}
          className='px-5 py-2 border border-[#1F1F1F] text-white hover:bg-white/10 cursor-pointer'
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className='px-5 py-2 border border-[#1F1F1F] text-white hover:bg-white/10 cursor-pointer'
        >
          Next
        </button>
      </div>

      {/* Carousel */}
      <Carousel setApi={setApi} className='w-full'>
        <CarouselContent
          className='
            flex
            gap-5           /* Figma gap 20px */
            pl-2 md:pl-0
            pr-[40vw] md:pr-[20vw] xl:pr-[10vw]
            overflow-visible      /* biar active item tidak terpotong */
          '
        >
          {faqItems.map((item, i) => (
            <CarouselItem key={item.id} className='basis-auto shrink-0'>
              <FAQItem
                active={i === activeIndex}
                question={item.question}
                answer={item.answer}
                avatar={item.avatar}
                onClick={() => setActiveIndex(i)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default FAQContainer;
