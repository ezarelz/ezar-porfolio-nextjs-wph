'use client';

import { useState, useEffect } from 'react';
import JourneyCard from './JourneyCard';
import JourneyNavigator from './JourneyNavigator';
import { journeyData } from '@/constants/journey-data';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import JourneyDivider from './JourneyDivider';

// LOGIC BUTTON
export default function JourneyCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);

  // Track button active state
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  // Sync buttons with Embla internal state
  useEffect(() => {
    if (!api) return;

    const updateButtons = () => {
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };

    updateButtons();

    api.on('select', updateButtons);
    api.on('reInit', updateButtons);

    return () => {
      api.off('select', updateButtons);
      api.off('reInit', updateButtons);
    };
  }, [api]);
  // LOGIC SLIDER
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateProgress = () => {
      setProgress(api.scrollProgress());
    };

    updateProgress();
    api.on('scroll', updateProgress);
    api.on('reInit', updateProgress);

    return () => {
      api.off('scroll', updateProgress);
      api.off('reInit', updateProgress);
    };
  }, [api]);

  return (
    <div className='w-full'>
      {/* === CAROUSEL === */}
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          slidesToScroll: 1,
        }}
        className='w-full'
      >
        <CarouselContent
          className='
            flex gap-5
            sm:*:basis-[80%]
            md:*:basis-[50%]
            lg:*:basis-[45%]
            pr-0
          '
        >
          {journeyData.map((item) => (
            <CarouselItem key={item.id}>
              <JourneyCard item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Desktop Divider */}
      <div className='hidden lg:flex items-center gap-0 mt-12'>
        {/* Block putih di kiri */}
        <JourneyDivider progress={progress} />

        {/* Garis panjang */}
        <div className='flex-1 h-[1px] bg-white/20'></div>
      </div>

      {/* === MOBILE NAVIGATION === */}
      {api && (
        <div className='block lg:hidden'>
          <JourneyNavigator
            onPrev={() => api.scrollPrev()}
            onNext={() => api.scrollNext()}
            canPrev={canPrev}
            canNext={canNext}
          />
        </div>
      )}

      {/* === DESKTOP NAVIGATION === */}
      {api && (
        <div className='hidden lg:flex items-center gap-4 mt-8'>
          <JourneyNavigator
            onPrev={() => api.scrollPrev()}
            onNext={() => api.scrollNext()}
            canPrev={canPrev}
            canNext={canNext}
          />
        </div>
      )}
    </div>
  );
}
