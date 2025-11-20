import Image from 'next/image';

const AboutPhoto = () => {
  return (
    <div className='w-full h-[513px] overflow-hidden'>
      <Image
        src='/images/about-me.png'
        alt='about'
        width={800}
        height={800}
        className='w-full h-full object-cover'
      />
    </div>
  );
};

export default AboutPhoto;
