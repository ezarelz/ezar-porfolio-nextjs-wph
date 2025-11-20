'use client';

import AboutHeading from '@/components/about/about-heading';
import AboutSocials from '@/components/about/about-socials';
import AboutPhoto from '@/components/about/about-photo';
import AboutServices from '@/components/about/about-services';

const Aboutme = () => {
  return (
    <section id='about' className='w-full max-w-7xl mx-auto px-4 py-20'>
      {/* Heading */}
      <AboutHeading />

      {/* Social Icons */}
      <AboutSocials />

      {/* Divider */}
      <div className='border-b border-white/10 my-10' />

      {/* Main Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-14'>
        {/* Photo Left */}
        <AboutPhoto />

        {/* Services Right */}
        <AboutServices />
      </div>
    </section>
  );
};

export default Aboutme;
