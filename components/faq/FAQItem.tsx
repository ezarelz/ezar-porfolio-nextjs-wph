import Image from 'next/image';
import { MessageSquareText } from 'lucide-react';

interface FAQItemProps {
  active: boolean;
  question: string;
  answer: string;
  avatar: string;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  active,
  question,
  answer,
  avatar,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative cursor-pointer border border-[#1F1F1F] rounded-lg overflow-hidden 
        transition-all duration-300 shrink-0 p-6

        ${
          active
            ? 'bg-[#0FA4AF] w-[386px] h-[466px]'
            : 'bg-black w-[252px] h-[466px]'
        }
      `}
    >
      {/* Icon bubble */}
      <div className='absolute top-4 right-4 opacity-90'>
        <MessageSquareText size={22} className='text-white' />
      </div>

      {/* Expanded */}
      {active ? (
        <div className='flex flex-col gap-4'>
          <div className='flex justify-start'>
            <Image
              src={avatar}
              alt='avatar'
              width={50}
              height={50}
              className='rounded-full bg-[#0c8d99]'
            />
          </div>

          <h3 className='text-white font-semibold text-lg leading-snug'>
            {question}
          </h3>

          <p className='text-neutral-100 text-sm leading-relaxed'>{answer}</p>
        </div>
      ) : (
        <h3 className='text-white font-semibold text-lg leading-snug mt-10'>
          {question}
        </h3>
      )}
    </div>
  );
};

export default FAQItem;
