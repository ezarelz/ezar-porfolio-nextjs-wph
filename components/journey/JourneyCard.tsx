import Image from 'next/image';
import { JourneyItem } from '@/constants/journey-data';
import { Briefcase } from 'lucide-react';

export default function JourneyCard({ item }: { item: JourneyItem }) {
  return (
    <div
      className='
        relative w-full 
        border border-white/10 
        rounded-md 
        p-6 
        bg-background 
        shadow-sm 
        transition-all duration-300 
        cursor-grab active:cursor-grabbing
        hover:border-white/20
      '
    >
      {/* === TEAL BAR (LEFT ACCENT) === */}
      <div
        className='
          absolute 
          left-0 top-6 
          h-10 w-[4px] 
          bg-[#0FA4AF] 
          rounded-r-md
        '
      />

      {/* Header */}
      <div className='flex items-start justify-between'>
        <div className='pl-3'>
          <h3 className='text-lg font-semibold text-white flex items-center gap-2'>
            {item.title}
          </h3>
          <p className='text-white/60 text-sm mt-1'>{item.period}</p>
        </div>

        <Briefcase className='text-white/80' size={20} />
      </div>

      {/* Divider */}
      <div className='h-px bg-white/10 my-4' />

      {/* Description */}
      <p className='text-white/70 text-[14px] leading-relaxed pl-3'>
        {item.description}
      </p>

      {/* Logo */}
      <div className='mt-6 pl-3'>
        <Image
          src={item.logo}
          alt={item.company}
          width={120}
          height={50}
          className='w-auto h-8 opacity-90'
        />
      </div>
    </div>
  );
}
