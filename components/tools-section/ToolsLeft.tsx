import { Mail } from 'lucide-react';
import { Button } from '../ui/button';

export const ToolsLeft = () => {
  return (
    <div className='flex flex-col md:pt-16'>
      {/* Heading */}
      <h2 className='text-3xl md:text-4xl font-bold leading-tight'>
        <span className='block'>Tools I Use to</span>
        <span className='block'>Build</span>
      </h2>

      {/* Paragraph */}
      <p className='text-white/60 text-sm md:text-base max-w-[360px] mt-4'>
        From code to design — here’s the tech that helps me turn ideas into real
        products.
      </p>

      {/* Button → auto width on desktop, full width on mobile */}
      <Button
        className='
          mt-6
          md:mt-55
          bg-[#10B4C8] 
          text-white 
          px-6 
          h-14
          rounded-none
          cursor-pointer
          w-full md:w-[320px]
          flex items-center justify-center
        '
      >
        <Mail className='mr-2 h-4 w-4' />
        Send Message
      </Button>
    </div>
  );
};
