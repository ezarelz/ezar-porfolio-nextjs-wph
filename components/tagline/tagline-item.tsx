import Image from 'next/image';
import React from 'react';

interface TaglineItemProps {
  label: string;
}

const TaglineItem: React.FC<TaglineItemProps> = ({ label }) => {
  return (
    <div className='flex items-center gap-3 shrink-0'>
      <Image
        src='/marquee-logo.svg'
        alt='logo'
        width={22}
        height={22}
        className='opacity-70 invert'
      />
      <span className='whitespace-nowrap font-semibold text-white'>
        {label}
      </span>
    </div>
  );
};

export default TaglineItem;
