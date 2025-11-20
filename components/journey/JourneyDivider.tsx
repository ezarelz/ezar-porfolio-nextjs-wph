'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Props {
  progress: number; // 0 → 1
}

export default function JourneyDivider({ progress }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const blockWidth = 64; // px
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // hitung max offset
  const maxOffset = Math.max(0, trackWidth - blockWidth);

  // hitung x berdasarkan progress embla
  const x = progress * maxOffset;

  return (
    <div ref={trackRef} className='relative w-full h-[4px]'>
      {/* Track */}
      <div className='absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-white/20' />

      {/* Sliding block */}
      <div
        className='absolute top-1/2 -translate-y-1/2 h-[4px] w-50 bg-white rounded-full transition-all duration-500 ease-out'
        style={{ transform: `translateX(${x}px)` }}
      />
    </div>
  );
}
