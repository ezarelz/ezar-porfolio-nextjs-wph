'use client';

import React from 'react';
import { Check, X } from 'lucide-react';

type StatusModalProps = {
  open: boolean;
  variant: 'success' | 'error';
  title: string;
  description?: string;
  onClose: () => void;
};

const StatusModal: React.FC<StatusModalProps> = ({
  open,
  variant,
  title,
  description,
  onClose,
}) => {
  if (!open) return null;

  const isSuccess = variant === 'success';

  return (
    <div className='fixed inset-0 z-60 flex items-center justify-center px-4'>
      {/* overlay clickable untuk close */}
      <button
        type='button'
        aria-label='Close modal'
        onClick={onClose}
        className='absolute inset-0 bg-black/60 backdrop-blur-sm'
      />

      {/* gradient teal + black */}
      <div className='absolute inset-0 -z-10 bg-linear-to-b from-[#0FA4AF]/40 via-black to-black' />

      {/* cross grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[url('/cross-grid.svg')] opacity-40" />

      {/* modal card */}
      <div className='relative w-full max-w-sm rounded-2xl border border-white/15 bg-black/80 p-6 shadow-2xl md:max-w-md'>
        {/* icon */}
        <div className='flex items-center justify-center w-16 h-16 rounded-full border border-white/15 mb-4 mx-auto'>
          {isSuccess ? (
            <Check className='w-9 h-9 text-emerald-400' />
          ) : (
            <X className='w-9 h-9 text-red-500' />
          )}
        </div>

        {/* text */}
        <h3 className='text-lg md:text-xl font-semibold text-white text-center'>
          {title}
        </h3>

        {description && (
          <p className='mt-2 text-sm text-neutral-300 text-center'>
            {description}
          </p>
        )}

        {/* tombol */}
        <div className='mt-6 flex justify-center'>
          <button
            type='button'
            onClick={onClose}
            className='px-5 py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-neutral-200 transition'
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusModal;
