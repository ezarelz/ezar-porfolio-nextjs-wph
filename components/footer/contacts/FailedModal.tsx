'use client';

import React from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface FailedModalProps {
  open: boolean;
  onClose: () => void;
}

const FailedModal: React.FC<FailedModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className='fixed inset-0 z-60 flex items-center justify-center px-4'>
      {/* Overlay */}
      <button
        className='absolute inset-0 bg-black/60 backdrop-blur-sm'
        onClick={onClose}
      />

      {/* Modal */}
      <div className='relative bg-linear-to-b from-red-400 to-[EE1D52] border border-white/10 rounded-2xl p-8 w-full max-w-[520px] shadow-2xl'>
        {/* Cross Grid */}
        <Image
          src='/cross-grid.svg'
          alt='grid'
          fill
          className='absolute inset-0 opacity-[0.35] object-cover pointer-events-none'
        />

        {/* Icon */}
        <div className='relative z-10 flex items-center justify-center mb-6'>
          <div className='w-[110px] h-[110px] rounded-full bg-linear-to-b from-red-500 to-red-700 flex items-center justify-center shadow-xl'>
            <X className='w-14 h-14 text-white' />
          </div>
        </div>

        <div className='relative z-10 text-center'>
          <h3 className='text-white text-xl font-semibold'>Message Not Sent</h3>
          <p className='text-neutral-300 text-sm mt-2'>
            Something broke along the way. Let’s try resending it.
          </p>
        </div>

        <div className='relative z-10 mt-6 flex justify-center'>
          <Button
            onClick={onClose}
            className='w-full py-6 rounded-full bg-[#0FA4AF] text-white hover:bg-[#0c8d99] text-sm font-medium cursor-pointer'
          >
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FailedModal;
