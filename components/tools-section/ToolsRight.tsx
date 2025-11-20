'use client';

import { tools } from '@/constants/tools';
import { SkillItems } from './Skillitems';
import { useEffect, useRef } from 'react';
import { MotionValue, PanInfo, useMotionValue } from 'framer-motion';
import VerticalDivider from '@/components/ui/verticalDivider';

export const ToolsRight = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const trackHeight = 512;
  const thumbHeight = 240;
  const thumbY: MotionValue<number> = useMotionValue(0);

  // Reset posisi awal
  useEffect(() => {
    thumbY.set(0);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [thumbY]);

  // Scroll → Thumb moves
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollHeight - el.clientHeight;
    const ratio = el.scrollTop / maxScroll;

    const maxThumb = trackHeight - thumbHeight;
    thumbY.set(maxThumb * ratio);
  };

  // Drag thumb → Scroll moves
  const onThumbDrag = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollHeight - el.clientHeight;
    const maxThumb = trackHeight - thumbHeight;

    const ratio = info.point.y / maxThumb;
    el.scrollTop = ratio * maxScroll;
  };

  return (
    <div className='w-full md:px-6 flex gap-6'>
      {/* Divider + Thumb */}
      <VerticalDivider
        trackHeight={trackHeight}
        thumbHeight={thumbHeight}
        thumbY={thumbY}
        onDrag={onThumbDrag}
      />

      {/* Scrollable List */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className='
          hidden px-1 items-center md:flex flex-col gap-1 
          overflow-y-scroll 
          h-[360px] 
          w-[720px] 
          pr-4 
          scrollbar-hidden
        '
      >
        {tools.map((tool) => (
          <SkillItems key={tool.label} {...tool} />
        ))}
      </div>

      {/* Mobile */}
      <div className='w-full flex justify-center md:hidden'>
        <div className='flex flex-col gap-1 w-[340px]'>
          {tools.map((tool) => (
            <SkillItems key={tool.label} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
};
