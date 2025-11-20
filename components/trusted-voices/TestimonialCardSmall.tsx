'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Star, Quote } from 'lucide-react';

interface Props {
  rating: number;
  description: string;
  author: {
    name: string;
    position: string;
    avatar: string;
  };
  className?: string;
}

export default function TestimonialCardSmall({
  rating,
  description,
  author,
  className,
}: Props) {
  return (
    <div
      className={cn(
        'w-full rounded-xl border border-teal-500/15 bg-[#0A0A0A] p-5 md:p-6 flex flex-col justify-between',
        className
      )}
    >
      {/* Description + rating */}
      <div className='space-y-3'>
        {/* Rating */}
        <div className='flex gap-1'>
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={16} strokeWidth={0} fill='#F5C451' />
          ))}
        </div>

        <p className='text-gray-300 leading-relaxed text-sm md:text-base'>
          {description}
        </p>
      </div>

      {/* Author */}
      <div className='flex items-center justify-between mt-6'>
        <div className='flex items-center gap-3'>
          <Image
            src={author.avatar}
            width={36}
            height={36}
            alt={author.name}
            className='rounded-full object-cover'
          />
          <div className='flex flex-col'>
            <span className='font-semibold text-white text-sm'>
              {author.name}
            </span>
            <span className='text-gray-400 text-xs'>{author.position}</span>
          </div>
        </div>

        <Quote
          size={24}
          strokeWidth={1.4}
          className='text-gray-300 opacity-60'
        />
      </div>
    </div>
  );
}
