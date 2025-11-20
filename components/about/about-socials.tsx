import Image from 'next/image';

const socials = [
  { icon: '/social-icons/fb.svg', href: '#' },
  { icon: '/social-icons/instagram.svg', href: '#' },
  { icon: '/social-icons/linkedin.svg', href: '#' },
  { icon: '/social-icons/tiktok.svg', href: '#' },
];

const AboutSocials = () => {
  return (
    <div className='flex justify-start md:justify-end items-center gap-5 pt-4'>
      {socials.map((s, i) => (
        <a
          key={i}
          href={s.href}
          target='_blank'
          rel='noopener noreferrer'
          className='group'
        >
          <div
            className='
              w-12 h-12 
              rounded-full 
              border border-white/20 
              flex items-center justify-center
              transition 
              group-hover:border-white/40
            '
          >
            <Image
              src={s.icon}
              alt={`social-${i}`}
              width={22}
              height={22}
              className='
                opacity-80 
                group-hover:opacity-100 
                transition
              '
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default AboutSocials;
