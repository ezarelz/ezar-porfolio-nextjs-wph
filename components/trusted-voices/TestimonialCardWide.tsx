'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Quote, Star } from 'lucide-react';

interface Props {
  multiplier: string;
  title: string;
  rating: number;
  description: string;
  author: {
    name: string;
    position: string;
    avatar: string;
  };
  className?: string;
}

export default function TestimonialCardWide({
  multiplier,
  title,
  rating,
  description,
  author,
  className,
}: Props) {
  return (
    <div
      className={cn(
        'w-full rounded-xl border border-teal-500/15 bg-[#0A0A0A] p-6 md:p-8 flex flex-col justify-between',
        className
      )}
    >
      {/* Top text */}
      <div className='space-y-3'>
        <h2 className='text-3xl md:text-4xl font-extrabold text-white'>
          {multiplier}
        </h2>

        <h3 className='text-lg md:text-xl font-semibold text-white'>{title}</h3>

        {/* Rating */}
        <div className='flex gap-1'>
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={18} strokeWidth={0} fill='#F5C451' />
          ))}
        </div>

        <p className='text-gray-300 leading-relaxed max-w-[95%]'>
          {description}
        </p>
      </div>

      {/* Bottom */}
      <div className='flex items-center justify-between mt-8'>
        {/* Author */}
        <div className='flex items-center gap-3'>
          <Image
            src={author.avatar}
            width={40}
            height={40}
            alt={author.name}
            className='rounded-full object-cover'
          />

          <div className='flex flex-col'>
            <span className='font-semibold text-white'>{author.name}</span>
            <span className='text-gray-400 text-sm'>{author.position}</span>
          </div>
        </div>

        {/* Quote icon */}
        <Quote
          size={30}
          strokeWidth={1.4}
          className='text-gray-300 opacity-60'
        />
      </div>
    </div>
  );
}
