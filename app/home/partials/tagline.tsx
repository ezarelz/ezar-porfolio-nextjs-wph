'use client';

import React from 'react';
import { taglineItems } from '@/constants/tagline';
import TaglineItem from '@/components/tagline/tagline-item';

const Tagline: React.FC = () => {
  return (
    <div className='w-full overflow-hidden bg-[#0FA4AF] py-3 select-none mt-6 md:mt-10 lg:mt-12'>
      {/* elemen yang bergerak */}
      <div className='flex gap-3 sm:gap-5 whitespace-nowrap animate-tagline will-change-transform'>
        {[...Array(3)].map((_, repeatIndex) =>
          taglineItems.map((item, index) => (
            <TaglineItem key={`${repeatIndex}-${index}`} label={item.label} />
          ))
        )}
      </div>
    </div>
  );
};

export default Tagline;
