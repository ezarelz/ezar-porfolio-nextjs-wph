import React from 'react';
import Image from 'next/image';

const socials = [
  { icon: '/social-icons/fb.svg', href: '#' },
  { icon: '/social-icons/instagram.svg', href: '#' },
  { icon: '/social-icons/linkedin.svg', href: '#' },
  { icon: '/social-icons/tiktok.svg', href: '#' },
];

const FooterSocials = () => {
  return (
    <div className='flex items-center gap-4'>
      {socials.map((item, i) => (
        <a
          key={i}
          href={item.href}
          className='w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:opacity-80 transition'
        >
          <Image
            src={item.icon}
            alt='social icon'
            width={18}
            height={18}
            className='object-contain'
          />
        </a>
      ))}
    </div>
  );
};

export default FooterSocials;
