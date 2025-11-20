import Image from 'next/image';
import { aboutServices } from '@/constants/about-services';

const AboutServices = () => {
  return (
    <div
      className='
        grid grid-cols-1 
        md:grid-cols-2
        gap-x-10          /* 40px horizontal spacing (Figma) */
        gap-y-12          /* 48px vertical spacing per row */
      '
    >
      {aboutServices.map((item, i) => (
        <div key={i} className='flex flex-col'>
          {/* ICON */}
          <Image
            src={item.icon}
            alt={item.title}
            width={40}
            height={40}
            className='opacity-90'
          />

          {/* TITLE */}
          <h4 className='font-semibold text-white text-lg mt-6'>
            {item.title}
          </h4>

          {/* DESC */}
          <p className='text-white/70 text-sm mt-2 leading-relaxed max-w-[330px]'>
            {item.desc}
          </p>

          {/* DIVIDER — hide only for last item */}
          {i !== aboutServices.length - 1 && (
            <div className='border-b border-white/10 mt-6 md:hidden' />
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutServices;
