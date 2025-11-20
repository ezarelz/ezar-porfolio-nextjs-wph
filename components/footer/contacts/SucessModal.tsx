'use client';

import React from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className='fixed inset-0 z-60 flex items-center justify-center px-4'>
      {/* Overlay */}
      <button
        className='absolute inset-0 bg-black/60 backdrop-blur-sm'
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className='relative from-teal-400 to-teal-800  border border-white/10 rounded-2xl p-8 w-full max-w-[520px] shadow-2xl'>
        {/* Cross Grid Background */}
        <Image
          src='/cross-grid.svg'
          alt='grid'
          fill
          className='absolute inset-0 opacity-[0.35] object-cover z-0 pointer-events-none'
        />

        {/* Icon */}
        <div className='relative z-10 flex items-center justify-center mb-6'>
          <div className='w-[110px] h-[110px] rounded-full bg-linear-to-b from-[#0FA4AF] to-[#007d85] flex items-center justify-center shadow-xl'>
            <Check className='w-14 h-14 text-white' />
          </div>
        </div>

        {/* Content */}
        <div className='relative z-10 text-center'>
          <h3 className='text-white text-xl font-semibold'>
            Thanks for Reaching Out!
          </h3>

          <p className='text-neutral-300 text-sm mt-2'>
            I’ve received your message and will get back to you shortly.
          </p>
        </div>

        {/* Button */}
        <div className='relative z-10 mt-6 flex justify-center'>
          <Button
            onClick={onClose}
            className='w-full py-6 rounded-full bg-[#0FA4AF] text-white hover:bg-[#0c8d99] text-sm font-medium cursor-pointer'
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
