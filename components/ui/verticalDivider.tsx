'use client';

import { motion, MotionValue, PanInfo } from 'framer-motion';

interface VerticalDividerProps {
  trackHeight: number;
  thumbHeight: number;
  thumbY: MotionValue<number>;
  onDrag: (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => void;
}

export default function VerticalDivider({
  trackHeight,
  thumbHeight,
  thumbY,
  onDrag,
}: VerticalDividerProps) {
  return (
    <div className='hidden md:block relative' style={{ height: trackHeight }}>
      {/* TRACK */}
      <div className='absolute left-1/2 -translate-x-1/2 w-0.5 bg-white/30 h-full' />

      {/* THUMB */}
      <motion.div
        className='
          absolute
          left-1/2 
          -translate-x-1/2
          w-1.5 
          bg-white 
          rounded 
          cursor-grab active:cursor-grabbing
        '
        style={{
          y: thumbY,
          height: thumbHeight,
          top: 0,
        }}
        drag='y'
        dragConstraints={{
          top: 0,
          bottom: trackHeight - thumbHeight,
        }}
        dragElastic={0}
        onDrag={onDrag}
      />
    </div>
  );
}
