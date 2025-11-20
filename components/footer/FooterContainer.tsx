import React from 'react';
import Image from 'next/image';

interface FooterContainerProps {
  children: React.ReactNode;
}

const FooterContainer: React.FC<FooterContainerProps> = ({ children }) => {
  return (
    <section className='relative w-full overflow-hidden pt-30 pb-41'>
      {/* Background Gradient */}
      <div className='absolute inset-0 bg-linear-to-b from-black via-black/20 to-[#0FA4AF]/80 pointer-events-none' />

      {/* Glassboard pattern */}
      <Image
        src='/glassboard.svg'
        alt='glassboard'
        fill
        className='absolute inset-0 object-cover opacity-70 mix-blend-overlay pointer-events-none'
      />

      {/* CONTENT */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 md:px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-start'>
          {children}
        </div>
      </div>
    </section>
  );
};

export default FooterContainer;
