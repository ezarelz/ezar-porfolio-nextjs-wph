import React from 'react';
import FooterSocials from './FooterSocials';

const FooterLinks = () => {
  return (
    <div className='flex flex-col gap-10'>
      {/* Address */}
      <div className='flex flex-col gap-2'>
        <h3 className='text-white font-semibold text-base'>Address</h3>
        <p className='text-neutral-300 text-sm'>Jakarta, Indonesia</p>
        <div className='border-b border-white/10 mt-3' />
      </div>

      {/* Contact */}
      <div className='flex flex-col gap-2'>
        <h3 className='text-white font-semibold text-base'>Contact</h3>
        <p className='text-neutral-300 text-sm'>(+62) 1234567890</p>
        <div className='border-b border-white/10 mt-3' />
      </div>

      {/* Social Media */}
      <div className='flex flex-col gap-3'>
        <h3 className='text-white font-semibold text-base'>Social Media</h3>
        <FooterSocials />
      </div>

      {/* Spacer to push GET IN TOUCH lower on desktop */}
      <div className='-mt-7 md:mt-53 ' />

      {/* GET IN TOUCH */}
      <h2 className='px-1  md:px-1 text-4xl font-bold text-white'>
        GET IN TOUCH
      </h2>
    </div>
  );
};

export default FooterLinks;
