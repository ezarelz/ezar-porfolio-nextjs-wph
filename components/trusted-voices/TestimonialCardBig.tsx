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

export default function TestimonialCardBig({
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
        'relative w-full h-full flex flex-col justify-between rounded-xl border border-teal-500/20 p-6 md:p-8 overflow-hidden',
        'bg-gradient-to-br from-[#0FA4AF33] via-[#0B0B0B] to-[#070707]',
        className
      )}
    >
      {/* Top content */}
      <div className='space-y-3'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-white'>
          {multiplier}
        </h2>

        <h3 className='text-xl md:text-2xl font-semibold text-white'>
          {title}
        </h3>

        {/* Rating */}
        <div className='flex gap-1'>
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              size={18}
              strokeWidth={0}
              fill='#F5C451' // gold soft seperti figma
              className='drop-shadow-sm'
            />
          ))}
        </div>

        <p className='text-gray-300 leading-relaxed max-w-[90%]'>
          {description}
        </p>
      </div>

      {/* Bottom: avatar + author */}
      <div className='mt-8 flex items-center justify-between'>
        {/* Author */}
        <div className='flex items-center gap-3'>
          <Image
            src={author.avatar}
            width={42}
            height={42}
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
          size={32}
          strokeWidth={1.5}
          className='text-gray-300 opacity-60'
        />
      </div>
    </div>
  );
}
